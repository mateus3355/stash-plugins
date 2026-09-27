(function () {
  'use strict';

  var PluginApi = window.PluginApi;
  var React = PluginApi.React;
  var ReactDOM = PluginApi.ReactDOM;
  var Bootstrap = PluginApi.libraries.Bootstrap;
  var Modal = Bootstrap.Modal;
  var Button = Bootstrap.Button;
  var Form = Bootstrap.Form;
  var Alert = Bootstrap.Alert;

  var PLUGIN_ID = 'moveFile';
  var DEFAULT_TASK_THRESHOLD = 20;

  // ---------------------------------------------------------------------
  // GraphQL - plain fetch (same-origin, so the browser's own session
  // cookie already authenticates it) rather than pulling in Apollo.
  // ---------------------------------------------------------------------

  function gql(query, variables) {
    return fetch('/graphql', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query, variables: variables }),
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (res) {
        if (res.errors && res.errors.length) {
          throw new Error(res.errors.map(function (e) { return e.message; }).join('; '));
        }
        return res.data;
      });
  }

  function findSceneFiles(sceneId) {
    return gql(
      'query MoveFileFindScene($id: ID!) { findScene(id: $id) { id files { id path } } }',
      { id: sceneId }
    ).then(function (data) {
      return (data.findScene && data.findScene.files) || [];
    });
  }

  function findScenesFiles(sceneIds) {
    return gql(
      'query MoveFileFindScenes($ids: [ID!]) { findScenes(ids: $ids, filter: {per_page: -1}) { scenes { id files { id path } } } }',
      { ids: sceneIds }
    ).then(function (data) {
      return (data.findScenes && data.findScenes.scenes) || [];
    });
  }

  function moveFilesDirect(fileIds, destinationFolder) {
    return gql(
      'mutation MoveFileMoveFiles($input: MoveFilesInput!) { moveFiles(input: $input) }',
      { input: { ids: fileIds, destination_folder: destinationFolder } }
    ).then(function (data) {
      return data.moveFiles;
    });
  }

  function runMoveTask(fileIds, destinationFolder, description) {
    return gql(
      'mutation MoveFileRunTask($pluginId: ID!, $description: String, $args: Map) { ' +
        'runPluginTask(plugin_id: $pluginId, description: $description, args_map: $args) }',
      {
        pluginId: PLUGIN_ID,
        description: description,
        args: { mode: 'move_files', file_ids: fileIds, destination_folder: destinationFolder },
      }
    ).then(function (data) {
      return data.runPluginTask;
    });
  }

  // ---------------------------------------------------------------------
  // Settings (Background Task Threshold) - fetched once at load and
  // cached; falls back to the default if not loaded yet or unset.
  // ---------------------------------------------------------------------

  var cachedThreshold = null;

  function getTaskThreshold() {
    return typeof cachedThreshold === 'number' ? cachedThreshold : DEFAULT_TASK_THRESHOLD;
  }

  function loadThreshold() {
    gql(
      'query MoveFileConfig($ids: [ID!]) { configuration { plugins(include: $ids) } }',
      { ids: [PLUGIN_ID] }
    )
      .then(function (data) {
        var settings = (data.configuration && data.configuration.plugins && data.configuration.plugins[PLUGIN_ID]) || {};
        if (typeof settings.taskThreshold === 'number' && settings.taskThreshold > 0) {
          cachedThreshold = settings.taskThreshold;
        }
      })
      .catch(function (e) {
        console.error('[MoveFile] Failed to load plugin settings:', e);
      });
  }
  loadThreshold();

  // ---------------------------------------------------------------------
  // Path helper - Stash runs on Windows too, so don't assume '/'.
  // ---------------------------------------------------------------------

  function parentFolderOf(path) {
    var idx = Math.max(path.lastIndexOf('/'), path.lastIndexOf('\\'));
    return idx > -1 ? path.substring(0, idx) : '';
  }

  // ---------------------------------------------------------------------
  // Move dialog - a real Bootstrap modal via PluginApi's React/ReactDOM,
  // mounted imperatively into a detached container (same pattern other
  // plugins use for dashboards/settings panels), so it looks and behaves
  // like a native Stash dialog instead of a raw prompt().
  // ---------------------------------------------------------------------

  function MoveFileModal(props) {
    var useState = React.useState;
    var useEffect = React.useEffect;

    var folderState = useState(props.initialFolder || '');
    var folder = folderState[0];
    var setFolder = folderState[1];

    var busyState = useState(false);
    var busy = busyState[0];
    var setBusy = busyState[1];

    var errorState = useState(null);
    var error = errorState[0];
    var setError = errorState[1];

    useEffect(
      function () {
        setFolder(props.initialFolder || '');
        setError(null);
      },
      [props.initialFolder, props.show]
    );

    var count = props.fileIds.length;
    var usesTask = count > getTaskThreshold();

    function handleMove() {
      var destination = folder.trim();
      if (!destination) {
        setError('Destination folder is required.');
        return;
      }
      setBusy(true);
      setError(null);

      var action = usesTask
        ? runMoveTask(
            props.fileIds,
            destination,
            'Move ' + count + ' file(s) to ' + destination
          ).then(function () {
            return { queued: true };
          })
        : moveFilesDirect(props.fileIds, destination).then(function () {
            return { queued: false };
          });

      action
        .then(function (result) {
          setBusy(false);
          props.onClose();
          if (result.queued) {
            window.alert(
              'Queued a background task to move ' + count + ' file(s) to ' + destination +
                '. Check the Task Queue for progress.'
            );
          } else {
            // moveFiles updates the database in the same transaction, so a
            // reload is enough to reflect it - no separate rescan needed.
            window.location.reload();
          }
        })
        .catch(function (err) {
          setBusy(false);
          setError((err && err.message) || String(err));
        });
    }

    return React.createElement(
      Modal,
      { show: props.show, onHide: props.onClose },
      React.createElement(
        Modal.Header,
        { closeButton: true },
        React.createElement(Modal.Title, null, 'Move ' + props.itemLabel)
      ),
      React.createElement(
        Modal.Body,
        null,
        error ? React.createElement(Alert, { variant: 'danger' }, error) : null,
        React.createElement(
          Form.Group,
          null,
          React.createElement(Form.Label, null, 'Destination folder'),
          React.createElement(Form.Control, {
            type: 'text',
            value: folder,
            autoFocus: true,
            placeholder: '/path/to/destination',
            disabled: busy,
            onChange: function (e) {
              setFolder(e.target.value);
            },
            onKeyDown: function (e) {
              if (e.key === 'Enter') handleMove();
            },
          })
        ),
        usesTask
          ? React.createElement(
              'div',
              { className: 'text-muted mt-2', style: { fontSize: '0.85em' } },
              count + ' files - this will run as a background Task Queue job instead of blocking the browser.'
            )
          : null
      ),
      React.createElement(
        Modal.Footer,
        null,
        React.createElement(
          Button,
          { variant: 'secondary', onClick: props.onClose, disabled: busy },
          'Cancel'
        ),
        React.createElement(
          Button,
          { variant: 'primary', onClick: handleMove, disabled: busy },
          busy ? 'Moving…' : 'Move'
        )
      )
    );
  }

  var modalContainer = null;

  function openMoveModal(fileIds, initialFolder, itemLabel) {
    if (!modalContainer || !document.body.contains(modalContainer)) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'movefile-modal-root';
      document.body.appendChild(modalContainer);
    }

    function render(show) {
      ReactDOM.render(
        React.createElement(MoveFileModal, {
          show: show,
          fileIds: fileIds,
          initialFolder: initialFolder,
          itemLabel: itemLabel,
          onClose: function () {
            render(false);
          },
        }),
        modalContainer
      );
    }
    render(true);
  }

  // ---------------------------------------------------------------------
  // Single-scene entry point: a "Move File" button next to the existing
  // "reveal in file manager" button in the scene's file info panel - the
  // most stable selector available there (not locale-dependent, unlike
  // the "Path" field's translated label).
  // ---------------------------------------------------------------------

  var REVEAL_BUTTON_SELECTOR = '.reveal-in-filesystem-button';

  function decorateRevealButton(btn) {
    if (btn.dataset.movefileDecorated) return;
    btn.dataset.movefileDecorated = '1';

    var moveBtn = document.createElement('button');
    moveBtn.type = 'button';
    moveBtn.className = 'btn btn-secondary minimal movefile-button';
    moveBtn.title = 'Move File';
    moveBtn.textContent = 'Move';
    moveBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var match = window.location.pathname.match(/\/scenes\/(\d+)/);
      if (!match) return;
      var sceneId = match[1];
      findSceneFiles(sceneId)
        .then(function (files) {
          if (!files.length) {
            window.alert('No files found for this scene.');
            return;
          }
          var file = files[0];
          openMoveModal([file.id], parentFolderOf(file.path), '1 file');
        })
        .catch(function (err) {
          window.alert('Failed to load scene file info: ' + err.message);
        });
    });
    if (btn.parentNode) {
      btn.parentNode.insertBefore(moveBtn, btn.nextSibling);
    }
  }

  // ---------------------------------------------------------------------
  // Bulk entry point: a "Move Files…" item in the scene list's "..."
  // operations dropdown, shown only while there's a selection - mirroring
  // the native Edit/Delete buttons, which are gated the same way.
  // ---------------------------------------------------------------------

  var OPERATIONS_MENU_SELECTOR = '.scene-list-operations-dropdown';
  var currentSelectedSceneIds = new Set();

  // SceneList receives the live selection as a prop on every render - this
  // is a read-only observer (returns props unchanged) purely to capture
  // that Set, since the bulk operations menu (built in a sibling component,
  // FilteredSceneList) has no official extension point of its own.
  PluginApi.patch.before('SceneList', function (props) {
    if (props && props.selectedIds) {
      currentSelectedSceneIds = props.selectedIds;
    }
    syncAllOperationsDropdowns();
    return [props];
  });

  function syncAllOperationsDropdowns() {
    document.querySelectorAll(OPERATIONS_MENU_SELECTOR).forEach(syncOperationsDropdownItem);
  }

  function syncOperationsDropdownItem(menu) {
    var count = currentSelectedSceneIds.size;
    var existing = menu.querySelector('.movefile-dropdown-item');

    if (count === 0) {
      if (existing) existing.remove();
      return;
    }

    var label = 'Move ' + count + ' File' + (count > 1 ? 's' : '') + '…';
    if (existing) {
      existing.textContent = label;
      return;
    }

    var item = document.createElement('a');
    item.href = '#';
    item.className = 'dropdown-item bg-secondary text-white movefile-dropdown-item';
    item.textContent = label;
    item.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var ids = Array.from(currentSelectedSceneIds.values());
      findScenesFiles(ids)
        .then(function (scenes) {
          var fileIds = [];
          scenes.forEach(function (s) {
            (s.files || []).forEach(function (f) {
              fileIds.push(f.id);
            });
          });
          if (!fileIds.length) {
            window.alert('No files found for the selected scenes.');
            return;
          }
          openMoveModal(fileIds, '', fileIds.length + ' file' + (fileIds.length > 1 ? 's' : ''));
        })
        .catch(function (err) {
          window.alert('Failed to load selected files: ' + err.message);
        });
      // The injected item is a plain DOM node, not a react-bootstrap
      // Dropdown.Item, so react-bootstrap's own "close on select" wiring
      // doesn't apply to it. A click squarely on <body> (an ancestor of
      // the portaled menu, not a descendant of it) reads as an "outside"
      // click to react-bootstrap's own listener, which closes the menu.
      document.body.click();
    });
    menu.appendChild(item);
  }

  // ---------------------------------------------------------------------
  // Wire up the MutationObserver (same approach as RenameFile) to catch
  // both elements whenever they first appear in the DOM.
  // ---------------------------------------------------------------------

  function handleMutations(mutationsList) {
    for (var i = 0; i < mutationsList.length; i++) {
      var addedNodes = mutationsList[i].addedNodes;
      for (var j = 0; j < addedNodes.length; j++) {
        var node = addedNodes[j];
        if (node.nodeType !== Node.ELEMENT_NODE) continue;

        var revealBtn = node.matches && node.matches(REVEAL_BUTTON_SELECTOR)
          ? node
          : node.querySelector && node.querySelector(REVEAL_BUTTON_SELECTOR);
        if (revealBtn) decorateRevealButton(revealBtn);

        var opsMenu = node.matches && node.matches(OPERATIONS_MENU_SELECTOR)
          ? node
          : node.querySelector && node.querySelector(OPERATIONS_MENU_SELECTOR);
        if (opsMenu) syncOperationsDropdownItem(opsMenu);
      }
    }
  }

  var observer = new MutationObserver(handleMutations);
  observer.observe(document.body, { childList: true, subtree: true });

  document.querySelectorAll(REVEAL_BUTTON_SELECTOR).forEach(decorateRevealButton);
  syncAllOperationsDropdowns();
})();

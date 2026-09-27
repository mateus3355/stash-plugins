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
  var ApolloProvider = PluginApi.libraries.Apollo.ApolloProvider;
  var getApolloClient = PluginApi.utils.StashService.getClient;
  var IntlProvider = PluginApi.libraries.Intl.IntlProvider;

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

  function runMoveTask(fileIds, sourceFolders, destinationFolder, description) {
    return gql(
      'mutation MoveFileRunTask($pluginId: ID!, $description: String, $args: Map) { ' +
        'runPluginTask(plugin_id: $pluginId, description: $description, args_map: $args) }',
      {
        pluginId: PLUGIN_ID,
        description: description,
        args: {
          mode: 'move_files',
          file_ids: fileIds,
          destination_folder: destinationFolder,
          source_folders: sourceFolders,
        },
      }
    ).then(function (data) {
      return data.runPluginTask;
    });
  }

  function runPluginOperation(argsMap) {
    return gql(
      'mutation MoveFileRunOperation($pluginId: ID!, $args: Map) { ' +
        'runPluginOperation(plugin_id: $pluginId, args: $args) }',
      { pluginId: PLUGIN_ID, args: argsMap }
    ).then(function (data) {
      return data.runPluginOperation;
    });
  }

  function cleanEmptySourceFolders(sourceFolders, destinationFolder) {
    // The browser can't touch the filesystem itself - this runs the same
    // "is it actually empty on disk, and not a library path" check the
    // background task path uses, just synchronously via
    // runPluginOperation instead of as part of a queued task.
    if (!sourceFolders || !sourceFolders.length) {
      return Promise.resolve();
    }
    return runPluginOperation({
      mode: 'clean_empty_folders',
      source_folders: sourceFolders,
      destination_folder: destinationFolder,
    });
  }

  function autoTagFolder(destinationFolder) {
    // performers/studios/tags are match CRITERIA, not just scope - an
    // omitted list means "don't match against this category" (tag
    // nothing), not "match everything". "*" is the documented wildcard
    // for "all", and is exactly what the native Auto Tag button always
    // sends alongside paths - without it this queues a job that's scoped
    // to the folder but has nothing to actually match against.
    return gql(
      'mutation MoveFileAutoTag($input: AutoTagMetadataInput!) { metadataAutoTag(input: $input) }',
      { input: { paths: [destinationFolder], performers: ['*'], studios: ['*'], tags: ['*'] } }
    ).then(function (data) {
      return data.metadataAutoTag;
    });
  }

  // ---------------------------------------------------------------------
  // Settings (Background Task Threshold, Auto Tag After Move, Delete
  // Empty Source Folders) - fetched once at load and cached; falls back
  // to the defaults if not loaded yet or unset.
  // ---------------------------------------------------------------------

  var cachedThreshold = null;
  var cachedAutoTagAfterMove = null;
  var cachedDeleteEmptySourceFolders = null;

  function getTaskThreshold() {
    return typeof cachedThreshold === 'number' ? cachedThreshold : DEFAULT_TASK_THRESHOLD;
  }

  function getAutoTagAfterMove() {
    return typeof cachedAutoTagAfterMove === 'boolean' ? cachedAutoTagAfterMove : true;
  }

  function getDeleteEmptySourceFolders() {
    return typeof cachedDeleteEmptySourceFolders === 'boolean' ? cachedDeleteEmptySourceFolders : true;
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
        if (typeof settings.autoTagAfterMove === 'boolean') {
          cachedAutoTagAfterMove = settings.autoTagAfterMove;
        }
        if (typeof settings.deleteEmptySourceFolders === 'boolean') {
          cachedDeleteEmptySourceFolders = settings.deleteEmptySourceFolders;
        }
      })
      .catch(function (e) {
        console.error('[MoveFile] Failed to load plugin settings:', e);
      });
  }
  loadThreshold();

  // Library root paths, shown as the starting suggestions in the folder
  // browser (matching how Stash's own DirectorySelectionDialog seeds it
  // with configuration.general.stashes).
  var cachedLibraryPaths = [];

  function loadLibraryPaths() {
    gql('query MoveFileLibraryPaths { configuration { general { stashes { path } } } }')
      .then(function (data) {
        var stashes = (data.configuration && data.configuration.general && data.configuration.general.stashes) || [];
        cachedLibraryPaths = stashes.map(function (s) {
          return s.path;
        });
      })
      .catch(function (e) {
        console.error('[MoveFile] Failed to load library paths:', e);
      });
  }
  loadLibraryPaths();

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
            props.sourceFolders,
            destination,
            'Move ' + count + ' file(s) to ' + destination
          ).then(function () {
            return { queued: true };
          })
        : moveFilesDirect(props.fileIds, destination).then(function () {
            // Best-effort follow-ups: the move itself already succeeded,
            // so a failure in either of these shouldn't be treated as a
            // failure of the whole action - just log it and still reload.
            var followUps = [];
            if (getAutoTagAfterMove()) {
              followUps.push(
                autoTagFolder(destination).catch(function (e) {
                  console.error('[MoveFile] Failed to queue Auto Tag for ' + destination + ':', e);
                })
              );
            }
            if (getDeleteEmptySourceFolders()) {
              followUps.push(
                cleanEmptySourceFolders(props.sourceFolders, destination).catch(function (e) {
                  console.error('[MoveFile] Failed to clean up empty source folder(s):', e);
                })
              );
            }
            return Promise.all(followUps).then(function () {
              return { queued: false };
            });
          });

      action
        .then(function (result) {
          setBusy(false);
          props.onClose();
          if (result.queued) {
            window.alert(
              'Queued a background task to move ' + count + ' file(s) to ' + destination +
                (getAutoTagAfterMove() ? ', followed by Auto Tag' : '') +
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

    // Reuse Stash's own folder browser (the same component behind the
    // native "Select folders" dialog) when it's available, rather than a
    // plain text field - it browses real directories server-side via
    // useDirectory(), instead of the user having to type an exact path.
    // It's a registered PatchComponent, but only once something in the
    // main app has actually loaded that module, so fall back to a plain
    // input if it isn't there yet.
    function renderFolderInput() {
      var FolderSelect = PluginApi.components.FolderSelect;
      if (!FolderSelect) {
        return React.createElement(Form.Control, {
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
        });
      }
      return React.createElement(FolderSelect, {
        currentDirectory: folder,
        onChangeDirectory: setFolder,
        defaultDirectories: cachedLibraryPaths,
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
          renderFolderInput()
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

  function openMoveModal(fileIds, sourceFolders, initialFolder, itemLabel) {
    if (!modalContainer || !document.body.contains(modalContainer)) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'movefile-modal-root';
      document.body.appendChild(modalContainer);
    }

    function render(show) {
      ReactDOM.render(
        // FolderSelect's directory browsing runs an Apollo query
        // (useDirectory) and calls useIntl() for its labels, and this
        // component tree is mounted via its own ReactDOM.render call into
        // a detached container - a separate React root, outside the main
        // app's <ApolloProvider> and <IntlProvider>. Wrapping it here
        // (Apollo with the app's own client instance; Intl with a bare
        // English-only provider, since we don't have access to the app's
        // actual loaded message catalog) gives it both contexts back.
        React.createElement(
          ApolloProvider,
          { client: getApolloClient() },
          React.createElement(
            IntlProvider,
            { locale: 'en', defaultLocale: 'en', messages: {}, onError: function () {} },
            React.createElement(MoveFileModal, {
              show: show,
              fileIds: fileIds,
              sourceFolders: sourceFolders,
              initialFolder: initialFolder,
              itemLabel: itemLabel,
              onClose: function () {
                render(false);
              },
            })
          )
        ),
        modalContainer
      );
    }
    render(true);
  }

  // ---------------------------------------------------------------------
  // Single-scene entry point: a "Move File" button appended to the file
  // info panel. SceneFileInfoPanel is a real PatchComponent, and its
  // props already carry the scene's file id/path directly - no DOM
  // scraping, no extra GraphQL round trip, and (unlike anchoring to the
  // "reveal in file manager" button) it works regardless of whether
  // Stash considers this a localhost session: RevealInFilesystemButton
  // renders nothing at all on a remote/reverse-proxied instance, since
  // "open in this machine's file manager" is meaningless there - but
  // moving the file server-side is still perfectly valid, so it
  // shouldn't be tied to that check.
  // ---------------------------------------------------------------------

  // NOTE: React always calls function components with a second "legacy
  // context" argument (an empty {} for components that don't use legacy
  // context, which this one doesn't) - the patch system forwards the
  // ORIGINAL call arguments before appending the render result, so an
  // `after` callback here actually receives (props, legacyContext,
  // result), not (props, result). Confirmed against how the community
  // tagCopyPaste plugin does the same thing.
  PluginApi.patch.after('SceneFileInfoPanel', function (props, _legacyContext, result) {
    var scene = props && props.scene;
    var file = scene && scene.files && scene.files[0];
    if (!file) return result;

    var button = React.createElement(
      Button,
      {
        className: 'minimal movefile-button',
        title: 'Move File',
        onClick: function () {
          var folder = parentFolderOf(file.path);
          openMoveModal([file.id], [folder], folder, '1 file');
        },
      },
      'Move File'
    );

    return React.createElement(React.Fragment, null, result, button);
  });

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
          var sourceFoldersSet = {};
          scenes.forEach(function (s) {
            (s.files || []).forEach(function (f) {
              fileIds.push(f.id);
              sourceFoldersSet[parentFolderOf(f.path)] = true;
            });
          });
          if (!fileIds.length) {
            window.alert('No files found for the selected scenes.');
            return;
          }
          var sourceFolders = Object.keys(sourceFoldersSet);
          openMoveModal(fileIds, sourceFolders, '', fileIds.length + ' file' + (fileIds.length > 1 ? 's' : ''));
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

        var opsMenu = node.matches && node.matches(OPERATIONS_MENU_SELECTOR)
          ? node
          : node.querySelector && node.querySelector(OPERATIONS_MENU_SELECTOR);
        if (opsMenu) syncOperationsDropdownItem(opsMenu);
      }
    }
  }

  var observer = new MutationObserver(handleMutations);
  observer.observe(document.body, { childList: true, subtree: true });

  syncAllOperationsDropdowns();
})();

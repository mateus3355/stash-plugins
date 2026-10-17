(function () {
  'use strict';

  var PluginApi = window.PluginApi;
  var React = PluginApi.React;
  var GQL = PluginApi.GQL;
  var Bootstrap = PluginApi.libraries.Bootstrap;
  var Nav = Bootstrap.Nav;
  var Button = Bootstrap.Button;
  var Spinner = Bootstrap.Spinner;
  var Alert = Bootstrap.Alert;
  var Card = Bootstrap.Card;
  var Modal = Bootstrap.Modal;
  var Form = Bootstrap.Form;
  var ReactRouterDOM = PluginApi.libraries.ReactRouterDOM;
  var NavLink = ReactRouterDOM.NavLink;
  var useHistory = ReactRouterDOM.useHistory;
  var useLocation = ReactRouterDOM.useLocation;
  var FontAwesomeIcon = PluginApi.libraries.ReactFontAwesome.FontAwesomeIcon;
  var FA = PluginApi.libraries.FontAwesomeSolid;
  var getApolloClient = PluginApi.utils.StashService.getClient;

  var ROUTE_PATH = '/plugin/folder-browser';
  var PAGE_SIZE = 40;

  // ---------------------------------------------------------------------
  // GraphQL - plain fetch for simple queries/mutations (same-origin, so
  // the browser's own session cookie already authenticates it).
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

  function findFolderByPath(path) {
    return gql(
      'query FolderBrowserFindFolder($path: String!) { findFolder(path: $path) { ' +
        'id path basename ' +
        'parent_folders { id path basename } ' +
        'sub_folders { id path basename } ' +
        '} }',
      { path: path }
    ).then(function (data) {
      return data.findFolder;
    });
  }

  function getLibraryPaths() {
    return gql('query FolderBrowserLibraryPaths { configuration { general { stashes { path } } } }').then(
      function (data) {
        var stashes = (data.configuration && data.configuration.general && data.configuration.general.stashes) || [];
        return stashes.map(function (s) {
          return s.path;
        });
      }
    );
  }

  // ---------------------------------------------------------------------
  // Path helpers
  // ---------------------------------------------------------------------

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Matches a file path that is "folderPath" + exactly one path separator
  // + a basename with no further separator - i.e. files directly inside
  // this folder, not in any subfolder. Stash's `path` filter (scenes,
  // images, and galleries all support it, including folder-based
  // galleries, which compare the pattern against the gallery's own
  // folder path directly) matches this regex server-side (see
  // pkg/sqlite/criterion_handlers.go and gallery_filter.go), so
  // pagination/counts come back correct without fetching everything
  // under this folder and filtering client-side.
  function exactFolderRegex(folderPath) {
    return '^' + escapeRegExp(folderPath) + '[/\\\\][^/\\\\]+$';
  }

  // ---------------------------------------------------------------------
  // Content type registry - Scenes/Images/Galleries each follow the same
  // shape (find query, destroy mutation, bulk-update mutation), just with
  // different field/mutation names, so every tab is driven generically
  // off this table rather than three near-duplicate code paths.
  // ---------------------------------------------------------------------

  var CONTENT_TYPES = {
    scenes: {
      label: 'Scenes',
      findDocument: function () { return GQL.FindScenesDocument; },
      filterVar: 'scene_filter',
      resultKey: 'findScenes',
      itemsKey: 'scenes',
      gridComponent: 'SceneCardGrid',
      destroyMutation: 'mutation FolderBrowserScenesDestroy($input: ScenesDestroyInput!) { scenesDestroy(input: $input) }',
      destroyResultKey: 'scenesDestroy',
      bulkUpdateMutation: 'mutation FolderBrowserBulkSceneUpdate($input: BulkSceneUpdateInput!) { bulkSceneUpdate(input: $input) { id } }',
      bulkUpdateResultKey: 'bulkSceneUpdate',
    },
    images: {
      label: 'Images',
      findDocument: function () { return GQL.FindImagesDocument; },
      filterVar: 'image_filter',
      resultKey: 'findImages',
      itemsKey: 'images',
      gridComponent: 'ImageCardGrid',
      destroyMutation: 'mutation FolderBrowserImagesDestroy($input: ImagesDestroyInput!) { imagesDestroy(input: $input) }',
      destroyResultKey: 'imagesDestroy',
      bulkUpdateMutation: 'mutation FolderBrowserBulkImageUpdate($input: BulkImageUpdateInput!) { bulkImageUpdate(input: $input) { id } }',
      bulkUpdateResultKey: 'bulkImageUpdate',
    },
    galleries: {
      label: 'Galleries',
      findDocument: function () { return GQL.FindGalleriesDocument; },
      filterVar: 'gallery_filter',
      resultKey: 'findGalleries',
      itemsKey: 'galleries',
      gridComponent: 'GalleryCardGrid',
      destroyMutation: 'mutation FolderBrowserGalleryDestroy($input: GalleryDestroyInput!) { galleryDestroy(input: $input) }',
      destroyResultKey: 'galleryDestroy',
      bulkUpdateMutation: 'mutation FolderBrowserBulkGalleryUpdate($input: BulkGalleryUpdateInput!) { bulkGalleryUpdate(input: $input) { id } }',
      bulkUpdateResultKey: 'bulkGalleryUpdate',
    },
  };
  var TAB_ORDER = ['scenes', 'images', 'galleries'];

  function findItemsInFolder(contentType, folderPath, page) {
    var config = CONTENT_TYPES[contentType];
    var variables = {
      filter: { page: page, per_page: PAGE_SIZE, sort: 'path', direction: 'ASC' },
    };
    variables[config.filterVar] = {
      path: { modifier: 'MATCHES_REGEX', value: exactFolderRegex(folderPath) },
    };
    return getApolloClient()
      .query({ query: config.findDocument(), variables: variables, fetchPolicy: 'network-only' })
      .then(function (result) {
        var data = result.data[config.resultKey];
        return { items: data[config.itemsKey], count: data.count };
      });
  }

  function destroySelected(contentType, ids, deleteFile) {
    var config = CONTENT_TYPES[contentType];
    return gql(config.destroyMutation, {
      input: { ids: ids, delete_file: !!deleteFile, delete_generated: true },
    }).then(function (data) {
      return data[config.destroyResultKey];
    });
  }

  // edits: { rating100?: number, organized?: boolean, addTagIds?: string[] }
  function bulkUpdateSelected(contentType, ids, edits) {
    var config = CONTENT_TYPES[contentType];
    var input = { ids: ids };
    if (typeof edits.rating100 === 'number') input.rating100 = edits.rating100;
    if (typeof edits.organized === 'boolean') input.organized = edits.organized;
    if (edits.addTagIds && edits.addTagIds.length) {
      input.tag_ids = { mode: 'ADD', ids: edits.addTagIds };
    }
    return gql(config.bulkUpdateMutation, { input: input }).then(function (data) {
      return data[config.bulkUpdateResultKey];
    });
  }

  // ---------------------------------------------------------------------
  // Scene queue - lets SceneCard's "continue to next scene" work from a
  // folder listing, the same way it does from the native Scenes page.
  // SceneQueue itself (src/models/sceneQueue.ts) isn't exposed via
  // PluginApi, but SceneCard only ever calls queue.makeLink(id, options),
  // so a plain object with a matching makeLink is enough - this mirrors
  // SceneQueue.fromSceneIDList()'s exact URL format (?qs=<id>&qs=<id>...)
  // so the native scene player (SceneQueue.fromQueryParameters) parses it
  // identically.
  // ---------------------------------------------------------------------

  function makeSceneQueue(sceneIds) {
    var qs = sceneIds.map(function (id) { return 'qs=' + encodeURIComponent(id); }).join('&');
    return {
      makeLink: function (sceneID, options) {
        options = options || {};
        var params = [qs];
        if (options.autoPlay) params.push('autoplay=true');
        if (options.continue !== undefined) params.push('continue=' + options.continue);
        if (options.start !== undefined) params.push('t=' + options.start);
        return '/scenes/' + sceneID + (params.length ? '?' + params.join('&') : '');
      },
    };
  }

  // ---------------------------------------------------------------------
  // Bulk action dialogs - rendered as part of FolderBrowserPage's own
  // tree (registered via PluginApi.register.route, so - unlike Move
  // File's modal, which is mounted into its own detached ReactDOM.render
  // root - this is already inside the real app's component tree and has
  // full access to Apollo/Intl/Router context without needing to wrap
  // anything itself).
  // ---------------------------------------------------------------------

  function BulkDeleteModal(props) {
    var useState = React.useState;
    var deleteFileState = useState(false);
    var deleteFile = deleteFileState[0];
    var setDeleteFile = deleteFileState[1];
    var busyState = useState(false);
    var busy = busyState[0];
    var setBusy = busyState[1];
    var errorState = useState(null);
    var error = errorState[0];
    var setError = errorState[1];

    function handleDelete() {
      setBusy(true);
      setError(null);
      destroySelected(props.contentType, props.ids, deleteFile)
        .then(function () {
          setBusy(false);
          props.onDone();
        })
        .catch(function (e) {
          setBusy(false);
          setError((e && e.message) || String(e));
        });
    }

    return React.createElement(
      Modal,
      { show: true, onHide: props.onClose },
      React.createElement(Modal.Header, { closeButton: true }, React.createElement(Modal.Title, null, 'Delete ' + props.ids.length + ' ' + CONTENT_TYPES[props.contentType].label)),
      React.createElement(
        Modal.Body,
        null,
        error ? React.createElement(Alert, { variant: 'danger' }, error) : null,
        React.createElement(
          Form.Check,
          {
            type: 'checkbox',
            label: 'Also delete the file(s) from disk',
            checked: deleteFile,
            onChange: function (e) { setDeleteFile(e.target.checked); },
          }
        )
      ),
      React.createElement(
        Modal.Footer,
        null,
        React.createElement(Button, { variant: 'secondary', onClick: props.onClose, disabled: busy }, 'Cancel'),
        React.createElement(Button, { variant: 'danger', onClick: handleDelete, disabled: busy }, busy ? 'Deleting…' : 'Delete')
      )
    );
  }

  function BulkEditModal(props) {
    var useState = React.useState;
    var ratingState = useState('');
    var rating = ratingState[0];
    var setRating = ratingState[1];
    var organizedState = useState('');
    var organized = organizedState[0];
    var setOrganized = organizedState[1];
    var tagIdsState = useState([]);
    var tagIds = tagIdsState[0];
    var setTagIds = tagIdsState[1];
    var busyState = useState(false);
    var busy = busyState[0];
    var setBusy = busyState[1];
    var errorState = useState(null);
    var error = errorState[0];
    var setError = errorState[1];

    var TagSelect = PluginApi.components.TagSelect;

    function handleApply() {
      var edits = {};
      if (rating !== '') edits.rating100 = Math.max(0, Math.min(100, Number(rating)));
      if (organized !== '') edits.organized = organized === 'yes';
      if (tagIds.length) edits.addTagIds = tagIds;
      if (!Object.keys(edits).length) {
        setError('Change at least one field before applying.');
        return;
      }
      setBusy(true);
      setError(null);
      bulkUpdateSelected(props.contentType, props.ids, edits)
        .then(function () {
          setBusy(false);
          props.onDone();
        })
        .catch(function (e) {
          setBusy(false);
          setError((e && e.message) || String(e));
        });
    }

    return React.createElement(
      Modal,
      { show: true, onHide: props.onClose },
      React.createElement(Modal.Header, { closeButton: true }, React.createElement(Modal.Title, null, 'Edit ' + props.ids.length + ' ' + CONTENT_TYPES[props.contentType].label)),
      React.createElement(
        Modal.Body,
        null,
        error ? React.createElement(Alert, { variant: 'danger' }, error) : null,
        React.createElement(
          Form.Group,
          null,
          React.createElement(Form.Label, null, 'Rating (0-100, leave blank to not change)'),
          React.createElement(Form.Control, {
            type: 'number',
            min: 0,
            max: 100,
            value: rating,
            placeholder: 'Don’t change',
            onChange: function (e) { setRating(e.target.value); },
          })
        ),
        React.createElement(
          Form.Group,
          null,
          React.createElement(Form.Label, null, 'Organized'),
          React.createElement(
            Form.Control,
            { as: 'select', value: organized, onChange: function (e) { setOrganized(e.target.value); } },
            React.createElement('option', { value: '' }, "Don't change"),
            React.createElement('option', { value: 'yes' }, 'Mark organized'),
            React.createElement('option', { value: 'no' }, 'Mark not organized')
          )
        ),
        React.createElement(
          Form.Group,
          null,
          React.createElement(Form.Label, null, 'Add tags'),
          TagSelect
            ? React.createElement(TagSelect, { ids: tagIds, isMulti: true, onSelect: function (items) { setTagIds(items.map(function (i) { return i.id; })); } })
            : React.createElement(Alert, { variant: 'warning' }, 'Tag picker is not loaded yet - visit the Tags page once, then come back here.')
        )
      ),
      React.createElement(
        Modal.Footer,
        null,
        React.createElement(Button, { variant: 'secondary', onClick: props.onClose, disabled: busy }, 'Cancel'),
        React.createElement(Button, { variant: 'primary', onClick: handleApply, disabled: busy }, busy ? 'Applying…' : 'Apply')
      )
    );
  }

  // ---------------------------------------------------------------------
  // Page component
  // ---------------------------------------------------------------------

  function FolderBrowserPage() {
    var useState = React.useState;
    var useEffect = React.useEffect;

    var history = useHistory();
    var location = useLocation();
    var currentPath = new URLSearchParams(location.search).get('path') || '';

    var tabState = useState('scenes');
    var activeTab = tabState[0];
    var setActiveTab = tabState[1];

    var libraryPathsState = useState(null);
    var libraryPaths = libraryPathsState[0];
    var setLibraryPaths = libraryPathsState[1];

    var folderState = useState(null);
    var folder = folderState[0];
    var setFolder = folderState[1];

    var itemsResultState = useState({ items: [], count: 0 });
    var itemsResult = itemsResultState[0];
    var setItemsResult = itemsResultState[1];

    var pageState = useState(1);
    var page = pageState[0];
    var setPage = pageState[1];

    var selectedIdsState = useState(function () { return new Set(); });
    var selectedIds = selectedIdsState[0];
    var setSelectedIds = selectedIdsState[1];

    var loadingState = useState(true);
    var loading = loadingState[0];
    var setLoading = loadingState[1];

    var errorState = useState(null);
    var error = errorState[0];
    var setError = errorState[1];

    var modalState = useState(null); // null | 'edit' | 'delete'
    var modal = modalState[0];
    var setModal = modalState[1];

    // Library root picker only needs loading once.
    useEffect(function () {
      getLibraryPaths()
        .then(setLibraryPaths)
        .catch(function (e) {
          console.error('[FolderBrowser] Failed to load library paths:', e);
          setLibraryPaths([]);
        });
    }, []);

    // Reset to page 1 and clear selection whenever the folder or tab changes.
    useEffect(
      function () {
        setPage(1);
        setSelectedIds(new Set());
      },
      [currentPath, activeTab]
    );

    function reload() {
      if (!currentPath) {
        setFolder(null);
        setItemsResult({ items: [], count: 0 });
        setLoading(false);
        setError(null);
        return function () {};
      }

      var cancelled = false;
      setLoading(true);
      setError(null);

      Promise.all([findFolderByPath(currentPath), findItemsInFolder(activeTab, currentPath, page)])
        .then(function (results) {
          if (cancelled) return;
          setFolder(results[0]);
          setItemsResult(results[1]);
        })
        .catch(function (e) {
          if (cancelled) return;
          setError((e && e.message) || String(e));
          setFolder(null);
          setItemsResult({ items: [], count: 0 });
        })
        .finally(function () {
          if (!cancelled) setLoading(false);
        });

      return function () {
        cancelled = true;
      };
    }

    useEffect(reload, [currentPath, activeTab, page]);

    function navigateTo(path) {
      if (path) {
        history.push(ROUTE_PATH + '?path=' + encodeURIComponent(path));
      } else {
        history.push(ROUTE_PATH);
      }
    }

    function onSelectChange(id, selected) {
      setSelectedIds(function (prev) {
        var next = new Set(prev);
        if (selected) {
          next.add(id);
        } else {
          next.delete(id);
        }
        return next;
      });
    }

    function onBulkActionDone() {
      setModal(null);
      setSelectedIds(new Set());
      reload();
    }

    function renderBreadcrumb() {
      var crumbs = [
        React.createElement(
          Button,
          { key: 'root', variant: 'link', className: 'folder-browser-crumb', onClick: function () { navigateTo(''); } },
          'Library'
        ),
      ];

      if (folder) {
        var ancestors = (folder.parent_folders || []).slice().reverse();
        ancestors.concat([folder]).forEach(function (f) {
          crumbs.push(React.createElement(FontAwesomeIcon, { key: f.id + '-sep', icon: FA.faChevronRight, className: 'fa-icon folder-browser-crumb-sep' }));
          crumbs.push(
            React.createElement(
              Button,
              {
                key: f.id,
                variant: 'link',
                className: 'folder-browser-crumb',
                disabled: f.id === folder.id,
                onClick: function () { navigateTo(f.path); },
              },
              f.basename || f.path
            )
          );
        });
      }

      return React.createElement('div', { className: 'folder-browser-breadcrumb' }, crumbs);
    }

    function renderLibraryRoots() {
      if (libraryPaths === null) {
        return React.createElement(Spinner, { animation: 'border' });
      }
      if (!libraryPaths.length) {
        return React.createElement(Alert, { variant: 'warning' }, 'No library paths are configured.');
      }
      return React.createElement(
        'div',
        { className: 'folder-browser-tiles' },
        libraryPaths.map(function (p) {
          return React.createElement(
            Card,
            { key: p, className: 'folder-browser-tile', onClick: function () { navigateTo(p); } },
            React.createElement(FontAwesomeIcon, { icon: FA.faFolderOpen, className: 'fa-icon folder-browser-tile-icon' }),
            React.createElement('div', { className: 'folder-browser-tile-label' }, p)
          );
        })
      );
    }

    function renderSubFolders() {
      if (!folder || !folder.sub_folders || !folder.sub_folders.length) return null;
      return React.createElement(
        'div',
        { className: 'folder-browser-tiles' },
        folder.sub_folders
          .slice()
          .sort(function (a, b) { return a.basename.localeCompare(b.basename); })
          .map(function (f) {
            return React.createElement(
              Card,
              { key: f.id, className: 'folder-browser-tile', onClick: function () { navigateTo(f.path); } },
              React.createElement(FontAwesomeIcon, { icon: FA.faFolder, className: 'fa-icon folder-browser-tile-icon' }),
              React.createElement('div', { className: 'folder-browser-tile-label' }, f.basename)
            );
          })
      );
    }

    function renderTabs() {
      return React.createElement(
        Nav,
        { variant: 'tabs', activeKey: activeTab, onSelect: function (key) { if (key) setActiveTab(key); }, className: 'folder-browser-tabs' },
        TAB_ORDER.map(function (key) {
          return React.createElement(Nav.Item, { key: key }, React.createElement(Nav.Link, { eventKey: key }, CONTENT_TYPES[key].label));
        })
      );
    }

    function renderBulkToolbar() {
      if (selectedIds.size === 0) return null;
      return React.createElement(
        'div',
        { className: 'folder-browser-bulk-toolbar' },
        React.createElement('span', null, selectedIds.size + ' selected'),
        React.createElement(Button, { variant: 'secondary', size: 'sm', onClick: function () { setModal('edit'); } }, 'Edit'),
        React.createElement(Button, { variant: 'danger', size: 'sm', onClick: function () { setModal('delete'); } }, 'Delete')
      );
    }

    function renderPagination() {
      var Pagination = PluginApi.components.Pagination;
      if (Pagination) {
        return React.createElement(Pagination, {
          itemsPerPage: PAGE_SIZE,
          currentPage: page,
          totalItems: itemsResult.count,
          onChangePage: function (p) { setPage(p); },
          metadataByline: itemsResult.count + ' ' + (itemsResult.count === 1 ? CONTENT_TYPES[activeTab].label.replace(/s$/, '') : CONTENT_TYPES[activeTab].label),
        });
      }
      // Fallback, in case Pagination hasn't been loaded into
      // PluginApi.components yet in this session.
      var totalPages = Math.max(1, Math.ceil(itemsResult.count / PAGE_SIZE));
      return React.createElement(
        'div',
        { className: 'folder-browser-pagination' },
        React.createElement(Button, { variant: 'secondary', disabled: page <= 1, onClick: function () { setPage(page - 1); } }, 'Previous'),
        React.createElement('span', { className: 'folder-browser-page-indicator' }, 'Page ' + page + ' of ' + totalPages + ' (' + itemsResult.count + ')'),
        React.createElement(Button, { variant: 'secondary', disabled: page >= totalPages, onClick: function () { setPage(page + 1); } }, 'Next')
      );
    }

    function renderItems() {
      var config = CONTENT_TYPES[activeTab];
      var GridComponent = PluginApi.components[config.gridComponent];
      if (!GridComponent) {
        return React.createElement(Alert, { variant: 'warning' }, config.gridComponent + ' is not loaded yet - visit the ' + config.label + ' page once, then come back here.');
      }
      if (!itemsResult.items.length) {
        return React.createElement('div', { className: 'text-muted folder-browser-empty' }, 'No ' + config.label.toLowerCase() + ' directly in this folder.');
      }

      var gridProps = {
        selectedIds: selectedIds,
        zoomIndex: 1,
        onSelectChange: onSelectChange,
      };
      if (activeTab === 'scenes') {
        gridProps.scenes = itemsResult.items;
        gridProps.queue = makeSceneQueue(itemsResult.items.map(function (s) { return s.id; }));
      } else if (activeTab === 'images') {
        gridProps.images = itemsResult.items;
        gridProps.onPreview = function (index) {
          history.push('/images/' + itemsResult.items[index].id);
        };
      } else {
        gridProps.galleries = itemsResult.items;
      }

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(GridComponent, gridProps),
        renderPagination()
      );
    }

    return React.createElement(
      'div',
      { className: 'folder-browser-page container-fluid' },
      React.createElement('h3', null, 'Folder Browser'),
      renderBreadcrumb(),
      error ? React.createElement(Alert, { variant: 'danger', className: 'mt-2' }, error) : null,
      loading
        ? React.createElement(Spinner, { animation: 'border', className: 'mt-3' })
        : React.createElement(
            React.Fragment,
            null,
            !currentPath ? renderLibraryRoots() : renderSubFolders(),
            currentPath
              ? React.createElement(
                  React.Fragment,
                  null,
                  renderTabs(),
                  renderBulkToolbar(),
                  renderItems()
                )
              : null
          ),
      modal === 'delete'
        ? React.createElement(BulkDeleteModal, {
            contentType: activeTab,
            ids: Array.from(selectedIds),
            onClose: function () { setModal(null); },
            onDone: onBulkActionDone,
          })
        : null,
      modal === 'edit'
        ? React.createElement(BulkEditModal, {
            contentType: activeTab,
            ids: Array.from(selectedIds),
            onClose: function () { setModal(null); },
            onDone: onBulkActionDone,
          })
        : null
    );
  }

  // ---------------------------------------------------------------------
  // Registration: nav link + route
  // ---------------------------------------------------------------------

  PluginApi.register.route(ROUTE_PATH, FolderBrowserPage);

  // MainNavBar.MenuItems is a real PatchComponent (just <Nav>{children}</Nav>) -
  // before() lets us append an extra child to props.children, the same way
  // registerRoute() appends an extra <Route> to PluginRoutes' children.
  //
  // This runs on EVERY page (the nav bar is global), so it's wrapped
  // defensively: if anything in here ever throws - a library/version
  // mismatch we didn't anticipate, a future Stash UI change, whatever -
  // the worst outcome must be "the Folders link doesn't appear", never
  // "the whole app is broken". Never let a nav-bar patch be able to take
  // down every page.
  PluginApi.patch.before('MainNavBar.MenuItems', function (props) {
    try {
      var navLink = React.createElement(
        Nav.Link,
        { key: 'folder-browser', as: 'div', className: 'col-4 col-sm-3 col-md-2 col-lg-auto' },
        React.createElement(
          NavLink,
          { exact: true, to: ROUTE_PATH, activeClassName: 'active' },
          React.createElement(
            Button,
            { className: 'minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center' },
            React.createElement(FontAwesomeIcon, { icon: FA.faFolderOpen, className: 'fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0' }),
            React.createElement('span', null, 'Folders')
          )
        )
      );

      return [
        Object.assign({}, props, {
          children: React.createElement(React.Fragment, null, props.children, navLink),
        }),
      ];
    } catch (e) {
      console.error('[FolderBrowser] Failed to add nav link, leaving the nav bar unmodified:', e);
      return [props];
    }
  });
})();

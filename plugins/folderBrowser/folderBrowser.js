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
  var ReactRouterDOM = PluginApi.libraries.ReactRouterDOM;
  var NavLink = ReactRouterDOM.NavLink;
  var useHistory = ReactRouterDOM.useHistory;
  var useLocation = ReactRouterDOM.useLocation;
  var FontAwesomeIcon = PluginApi.libraries.ReactFontAwesome.FontAwesomeIcon;
  var faFolderOpen = PluginApi.libraries.FontAwesomeSolid.faFolderOpen;
  var faFolder = PluginApi.libraries.FontAwesomeSolid.faFolder;
  var faChevronRight = PluginApi.libraries.FontAwesomeSolid.faChevronRight;
  var getApolloClient = PluginApi.utils.StashService.getClient;

  var ROUTE_PATH = '/plugin/folder-browser';
  var PAGE_SIZE = 40;

  // ---------------------------------------------------------------------
  // GraphQL
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

  // Scenes directly inside a folder (not in any subfolder), via the real
  // Apollo Client and Stash's own compiled FindScenesDocument - so the
  // returned scenes have exactly the shape SceneCardGrid/SceneCard expect,
  // with zero guesswork about which fields to request.
  function findScenesInFolder(folderPath, page) {
    return getApolloClient()
      .query({
        query: GQL.FindScenesDocument,
        variables: {
          filter: { page: page, per_page: PAGE_SIZE, sort: 'path', direction: 'ASC' },
          scene_filter: {
            path: { modifier: 'MATCHES_REGEX', value: exactFolderRegex(folderPath) },
          },
        },
        fetchPolicy: 'network-only',
      })
      .then(function (result) {
        return result.data.findScenes;
      });
  }

  // ---------------------------------------------------------------------
  // Path helpers
  // ---------------------------------------------------------------------

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Matches a file path that is "folderPath" + exactly one path separator
  // + a basename with no further separator - i.e. files directly inside
  // this folder, not in any subfolder. Stash's `path` scene filter
  // compares this regex against the full folder+basename path server-side
  // (see pkg/sqlite/criterion_handlers.go), so pagination/counts come back
  // correct without fetching everything under this folder and filtering
  // client-side.
  function exactFolderRegex(folderPath) {
    return '^' + escapeRegExp(folderPath) + '[/\\\\][^/\\\\]+$';
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

    var libraryPathsState = useState(null);
    var libraryPaths = libraryPathsState[0];
    var setLibraryPaths = libraryPathsState[1];

    var folderState = useState(null);
    var folder = folderState[0];
    var setFolder = folderState[1];

    var scenesState = useState({ scenes: [], count: 0 });
    var scenesResult = scenesState[0];
    var setScenesResult = scenesState[1];

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

    // Library root picker only needs loading once.
    useEffect(function () {
      getLibraryPaths()
        .then(setLibraryPaths)
        .catch(function (e) {
          console.error('[FolderBrowser] Failed to load library paths:', e);
          setLibraryPaths([]);
        });
    }, []);

    // Reset to page 1 and clear selection whenever the folder changes.
    useEffect(
      function () {
        setPage(1);
        setSelectedIds(new Set());
      },
      [currentPath]
    );

    useEffect(
      function () {
        if (!currentPath) {
          setFolder(null);
          setScenesResult({ scenes: [], count: 0 });
          setLoading(false);
          setError(null);
          return;
        }

        var cancelled = false;
        setLoading(true);
        setError(null);

        Promise.all([findFolderByPath(currentPath), findScenesInFolder(currentPath, page)])
          .then(function (results) {
            if (cancelled) return;
            setFolder(results[0]);
            setScenesResult(results[1]);
          })
          .catch(function (e) {
            if (cancelled) return;
            setError((e && e.message) || String(e));
            setFolder(null);
            setScenesResult({ scenes: [], count: 0 });
          })
          .finally(function () {
            if (!cancelled) setLoading(false);
          });

        return function () {
          cancelled = true;
        };
      },
      [currentPath, page]
    );

    function navigateTo(path) {
      if (path) {
        history.push(ROUTE_PATH + '?path=' + encodeURIComponent(path));
      } else {
        history.push(ROUTE_PATH);
      }
    }

    function onSelectChange(id, selected, shiftKey) {
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
          crumbs.push(React.createElement(FontAwesomeIcon, { key: f.id + '-sep', icon: faChevronRight, className: 'folder-browser-crumb-sep' }));
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
            React.createElement(FontAwesomeIcon, { icon: faFolderOpen, className: 'folder-browser-tile-icon' }),
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
              React.createElement(FontAwesomeIcon, { icon: faFolder, className: 'folder-browser-tile-icon' }),
              React.createElement('div', { className: 'folder-browser-tile-label' }, f.basename)
            );
          })
      );
    }

    function renderScenes() {
      var SceneCardGrid = PluginApi.components.SceneCardGrid;
      if (!SceneCardGrid) {
        return React.createElement(Alert, { variant: 'warning' }, 'Scene grid component is not loaded yet - visit the Scenes page once, then come back here.');
      }
      if (!scenesResult.scenes.length) {
        return React.createElement('div', { className: 'text-muted folder-browser-empty' }, 'No scenes directly in this folder.');
      }
      var totalPages = Math.max(1, Math.ceil(scenesResult.count / PAGE_SIZE));
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(SceneCardGrid, {
          scenes: scenesResult.scenes,
          selectedIds: selectedIds,
          zoomIndex: 1,
          onSelectChange: onSelectChange,
        }),
        totalPages > 1
          ? React.createElement(
              'div',
              { className: 'folder-browser-pagination' },
              React.createElement(
                Button,
                { variant: 'secondary', disabled: page <= 1, onClick: function () { setPage(page - 1); } },
                'Previous'
              ),
              React.createElement('span', { className: 'folder-browser-page-indicator' }, 'Page ' + page + ' of ' + totalPages + ' (' + scenesResult.count + ' scenes)'),
              React.createElement(
                Button,
                { variant: 'secondary', disabled: page >= totalPages, onClick: function () { setPage(page + 1); } },
                'Next'
              )
            )
          : React.createElement('div', { className: 'folder-browser-page-indicator' }, scenesResult.count + ' scene' + (scenesResult.count === 1 ? '' : 's'))
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
            currentPath ? renderScenes() : null
          )
    );
  }

  // ---------------------------------------------------------------------
  // Registration: nav link + route
  // ---------------------------------------------------------------------

  PluginApi.register.route(ROUTE_PATH, FolderBrowserPage);

  // MainNavBar.MenuItems is a real PatchComponent (just <Nav>{children}</Nav>) -
  // before() lets us append an extra child to props.children, the same way
  // registerRoute() appends an extra <Route> to PluginRoutes' children.
  PluginApi.patch.before('MainNavBar.MenuItems', function (props) {
    var navLink = React.createElement(
      Nav.Link,
      { key: 'folder-browser', as: 'div', className: 'col-4 col-sm-3 col-md-2 col-lg-auto' },
      React.createElement(
        NavLink,
        { exact: true, to: ROUTE_PATH, activeClassName: 'active' },
        React.createElement(
          Button,
          { className: 'minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center' },
          React.createElement(FontAwesomeIcon, { icon: faFolderOpen, className: 'nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0' }),
          React.createElement('span', null, 'Folders')
        )
      )
    );

    return [
      Object.assign({}, props, {
        children: React.createElement(React.Fragment, null, props.children, navLink),
      }),
    ];
  });
})();

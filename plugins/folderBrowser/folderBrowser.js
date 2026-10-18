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
  var ButtonGroup = Bootstrap.ButtonGroup;
  var Modal = Bootstrap.Modal;
  var Form = Bootstrap.Form;
  var ReactRouterDOM = PluginApi.libraries.ReactRouterDOM;
  var NavLink = ReactRouterDOM.NavLink;
  var Link = ReactRouterDOM.Link;
  var useLocation = ReactRouterDOM.useLocation;
  var FontAwesomeIcon = PluginApi.libraries.ReactFontAwesome.FontAwesomeIcon;
  var FA = PluginApi.libraries.FontAwesomeSolid;
  var getApolloClient = PluginApi.utils.StashService.getClient;
  var useLightbox = PluginApi.hooks.useLightbox;

  // Deliberately NOT under /plugin/... - the Go backend mounts a dedicated
  // router at that prefix (internal/api/routes_plugin.go, serving each
  // plugin's javascript/css/assets) that only matches /plugin/{id}/javascript,
  // /css, and /assets - a bare /plugin/<anything-else> 404s from THAT router
  // before the request ever reaches the SPA's catch-all handler that would
  // serve index.html (internal/api/server.go's r.HandleFunc("/*", ...)).
  // That 404 happens server-side, so no amount of fixing this plugin's own
  // JS can work around it - a direct/hard navigation to a /plugin/... route
  // this plugin registers will always 404 before React even loads.
  var ROUTE_PATH = '/folder-browser';
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

  // Shared by the folder Links (so ctrl/cmd/middle-click can open a folder
  // in a new tab, which a plain onClick-driven history.push can't) and
  // anywhere else that needs this page's URL for a given folder.
  function folderUrl(path) {
    return path ? ROUTE_PATH + '?path=' + encodeURIComponent(path) : ROUTE_PATH;
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
  // Hand-rolled card grids, instead of reusing the native
  // SceneCardGrid/ImageCardGrid/GalleryCardGrid/Pagination/TagSelect
  // components via PluginApi.components. Those only get registered once
  // their defining module has actually been evaluated somewhere - normally
  // by visiting the matching native page first - and forcing that to
  // happen via PluginApi.hooks.useLoadComponents still left a visit to the
  // Scenes page as a practical prerequisite. stash-tv
  // (.tmp/stash-tv/packages/tv-ui) hits the exact same problem and solves
  // it the same way: it never touches PluginApi.components at all, and
  // instead builds its own card/slide UI straight from GraphQL data. This
  // does the same thing, reusing Stash's own CSS classes (grid-card,
  // scene-card, rating-banner, studio-overlay, ...) so cards still look
  // consistent with the native app, without depending on its lazy-loaded
  // component registry for anything.
  // ---------------------------------------------------------------------

  function fileNameFromPath(path) {
    if (!path) return '';
    var parts = path.split(/[\\/]/);
    return parts[parts.length - 1];
  }

  function sceneTitle(scene) {
    if (scene.title) return scene.title;
    if (scene.files && scene.files.length) return fileNameFromPath(scene.files[0].path);
    return '';
  }

  function imageTitleOf(image) {
    if (image.title) return image.title;
    if (image.visual_files && image.visual_files.length) return fileNameFromPath(image.visual_files[0].path);
    return '';
  }

  function galleryTitleOf(gallery) {
    if (gallery.title) return gallery.title;
    if (gallery.files && gallery.files.length) return fileNameFromPath(gallery.files[0].path);
    if (gallery.folder) return fileNameFromPath(gallery.folder.path);
    return '';
  }

  function formatDuration(seconds) {
    if (seconds === null || seconds === undefined) return '';
    seconds = Math.round(seconds);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = seconds % 60;
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    return h > 0 ? h + ':' + pad(m) + ':' + pad(s) : m + ':' + pad(s);
  }

  function renderSelectCheckbox(id, selected, onSelectChange) {
    return React.createElement(
      'div',
      { className: 'card-controls' },
      React.createElement(
        'label',
        { className: 'folder-browser-card-check', onClick: function (e) { e.stopPropagation(); } },
        React.createElement('input', {
          type: 'checkbox',
          checked: selected,
          onChange: function (e) { onSelectChange(id, e.target.checked); },
        })
      )
    );
  }

  function renderRatingBanner(rating100) {
    if (!rating100) return null;
    return React.createElement('div', { className: 'rating-banner rating-100-' + rating100 }, rating100 + '%');
  }

  function renderStudioOverlay(studio) {
    if (!studio) return null;
    return React.createElement(
      'div',
      { className: 'studio-overlay' },
      studio.image_path
        ? React.createElement('img', { className: 'image-thumbnail', src: studio.image_path, alt: studio.name })
        : studio.name
    );
  }

  function renderCardPopovers(item) {
    var parts = [];
    if (item.tags && item.tags.length) {
      parts.push(React.createElement(Button, { key: 'tags', className: 'minimal', disabled: true }, React.createElement(FontAwesomeIcon, { icon: FA.faTag, className: 'fa-icon' }), React.createElement('span', null, item.tags.length)));
    }
    if (item.performers && item.performers.length) {
      parts.push(React.createElement(Button, { key: 'performers', className: 'minimal', disabled: true }, React.createElement(FontAwesomeIcon, { icon: FA.faUser, className: 'fa-icon' }), React.createElement('span', null, item.performers.length)));
    }
    if (item.o_counter) {
      parts.push(React.createElement(Button, { key: 'ocounter', className: 'minimal', disabled: true }, React.createElement(FontAwesomeIcon, { icon: FA.faEye, className: 'fa-icon' }), React.createElement('span', null, item.o_counter)));
    }
    if (item.organized) {
      parts.push(React.createElement(Button, { key: 'organized', className: 'minimal', disabled: true }, React.createElement(FontAwesomeIcon, { icon: FA.faBox, className: 'fa-icon' })));
    }
    if (!parts.length) return null;
    return React.createElement(React.Fragment, null, React.createElement('hr'), React.createElement(ButtonGroup, { className: 'card-popovers' }, parts));
  }

  var SCENE_ZOOM_WIDTHS = [280, 340, 480, 640];

  function SimpleSceneCardGrid(props) {
    return React.createElement(
      'div',
      { className: 'row justify-content-center' },
      props.scenes.map(function (scene) {
        var title = sceneTitle(scene);
        var file = scene.files && scene.files[0];
        var selected = props.selectedIds.has(scene.id);
        var link = props.queue ? props.queue.makeLink(scene.id, {}) : '/scenes/' + scene.id;
        return React.createElement(
          Card,
          { key: scene.id, className: 'grid-card scene-card zoom-' + props.zoomIndex, style: { width: SCENE_ZOOM_WIDTHS[props.zoomIndex] || SCENE_ZOOM_WIDTHS[1] } },
          renderSelectCheckbox(scene.id, selected, props.onSelectChange),
          React.createElement(
            'div',
            { className: 'thumbnail-section video-section' },
            React.createElement(
              Link,
              { to: link, className: 'scene-card-link' },
              React.createElement(
                'div',
                { className: 'scene-card-preview' },
                React.createElement('img', { className: 'scene-card-preview-image', src: (scene.paths && scene.paths.screenshot) || '', alt: title })
              )
            ),
            renderRatingBanner(scene.rating100),
            renderStudioOverlay(scene.studio),
            file
              ? React.createElement(
                  'div',
                  { className: 'scene-specs-overlay' },
                  React.createElement('span', { className: 'overlay-resolution' }, file.width && file.height ? file.width + 'x' + file.height : ''),
                  React.createElement('span', { className: 'overlay-duration' }, formatDuration(file.duration))
                )
              : null
          ),
          React.createElement(
            'div',
            { className: 'card-section' },
            React.createElement('h5', { className: 'card-section-title' }, title),
            renderCardPopovers(scene)
          )
        );
      })
    );
  }

  function SimpleImageCardGrid(props) {
    return React.createElement(
      'div',
      { className: 'row justify-content-center' },
      props.images.map(function (image, index) {
        var title = imageTitleOf(image);
        var selected = props.selectedIds.has(image.id);
        var source = (image.paths && (image.paths.preview || image.paths.thumbnail)) || '';
        var isVideo = source.indexOf('preview') !== -1;
        return React.createElement(
          Card,
          {
            key: image.id,
            className: 'grid-card image-card zoom-' + props.zoomIndex,
            onClick: function () { props.onPreview(index); },
          },
          renderSelectCheckbox(image.id, selected, props.onSelectChange),
          React.createElement(
            'div',
            { className: 'thumbnail-section' },
            React.createElement(
              'div',
              { className: 'image-card-preview' },
              isVideo
                ? React.createElement('video', { className: 'image-card-preview-image', src: source, loop: true, autoPlay: true, playsInline: true })
                : React.createElement('img', { className: 'image-card-preview-image', src: source, alt: title })
            ),
            renderRatingBanner(image.rating100),
            renderStudioOverlay(image.studio)
          ),
          React.createElement(
            'div',
            { className: 'card-section' },
            React.createElement('h5', { className: 'card-section-title' }, title),
            renderCardPopovers(image)
          )
        );
      })
    );
  }

  function SimpleGalleryCardGrid(props) {
    return React.createElement(
      'div',
      { className: 'row justify-content-center' },
      props.galleries.map(function (gallery) {
        var title = galleryTitleOf(gallery);
        var selected = props.selectedIds.has(gallery.id);
        return React.createElement(
          Card,
          { key: gallery.id, className: 'grid-card gallery-card zoom-' + props.zoomIndex },
          renderSelectCheckbox(gallery.id, selected, props.onSelectChange),
          React.createElement(
            'div',
            { className: 'thumbnail-section' },
            React.createElement(
              Link,
              { to: '/galleries/' + gallery.id, className: 'gallery-card-header' },
              React.createElement(
                'div',
                { className: 'gallery-card-cover' },
                React.createElement('img', { className: 'gallery-card-image', src: (gallery.paths && gallery.paths.cover) || '', alt: title })
              )
            ),
            renderRatingBanner(gallery.rating100),
            renderStudioOverlay(gallery.studio)
          ),
          React.createElement(
            'div',
            { className: 'card-section' },
            React.createElement('h5', { className: 'card-section-title' }, title),
            React.createElement('div', { className: 'text-muted' }, gallery.image_count + (gallery.image_count === 1 ? ' image' : ' images')),
            renderCardPopovers(gallery)
          )
        );
      })
    );
  }

  var GRID_COMPONENTS = {
    scenes: SimpleSceneCardGrid,
    images: SimpleImageCardGrid,
    galleries: SimpleGalleryCardGrid,
  };

  // ---------------------------------------------------------------------
  // Content type registry - Scenes/Images/Galleries each follow the same
  // shape (find query, destroy mutation, bulk-update mutation), just with
  // different field/mutation names, so every tab is driven generically
  // off this table rather than three near-duplicate code paths.
  // ---------------------------------------------------------------------

  // sortFields mirror the real per-type lists in
  // src/models/list-filter/{scenes,images,galleries}.ts - a reduced, useful
  // subset (the full lists also include e.g. interactive/duplicate-specific
  // fields that don't make much sense in a plain folder listing).
  var CONTENT_TYPES = {
    scenes: {
      label: 'Scenes',
      findDocument: function () { return GQL.FindScenesDocument; },
      filterVar: 'scene_filter',
      resultKey: 'findScenes',
      itemsKey: 'scenes',
      destroyMutation: 'mutation FolderBrowserScenesDestroy($input: ScenesDestroyInput!) { scenesDestroy(input: $input) }',
      destroyResultKey: 'scenesDestroy',
      bulkUpdateMutation: 'mutation FolderBrowserBulkSceneUpdate($input: BulkSceneUpdateInput!) { bulkSceneUpdate(input: $input) { id } }',
      bulkUpdateResultKey: 'bulkSceneUpdate',
      defaultSort: 'path',
      sortFields: [
        { value: 'path', label: 'Path' },
        { value: 'title', label: 'Title' },
        { value: 'date', label: 'Date' },
        { value: 'rating', label: 'Rating' },
        { value: 'duration', label: 'Duration' },
        { value: 'filesize', label: 'File size' },
        { value: 'o_counter', label: 'O-Counter' },
        { value: 'random', label: 'Random' },
      ],
    },
    images: {
      label: 'Images',
      findDocument: function () { return GQL.FindImagesDocument; },
      filterVar: 'image_filter',
      resultKey: 'findImages',
      itemsKey: 'images',
      destroyMutation: 'mutation FolderBrowserImagesDestroy($input: ImagesDestroyInput!) { imagesDestroy(input: $input) }',
      destroyResultKey: 'imagesDestroy',
      bulkUpdateMutation: 'mutation FolderBrowserBulkImageUpdate($input: BulkImageUpdateInput!) { bulkImageUpdate(input: $input) { id } }',
      bulkUpdateResultKey: 'bulkImageUpdate',
      defaultSort: 'path',
      sortFields: [
        { value: 'path', label: 'Path' },
        { value: 'title', label: 'Title' },
        { value: 'date', label: 'Date' },
        { value: 'rating', label: 'Rating' },
        { value: 'filesize', label: 'File size' },
        { value: 'o_counter', label: 'O-Counter' },
        { value: 'random', label: 'Random' },
      ],
    },
    galleries: {
      label: 'Galleries',
      findDocument: function () { return GQL.FindGalleriesDocument; },
      filterVar: 'gallery_filter',
      resultKey: 'findGalleries',
      itemsKey: 'galleries',
      destroyMutation: 'mutation FolderBrowserGalleryDestroy($input: GalleryDestroyInput!) { galleryDestroy(input: $input) }',
      destroyResultKey: 'galleryDestroy',
      bulkUpdateMutation: 'mutation FolderBrowserBulkGalleryUpdate($input: BulkGalleryUpdateInput!) { bulkGalleryUpdate(input: $input) { id } }',
      bulkUpdateResultKey: 'bulkGalleryUpdate',
      defaultSort: 'path',
      sortFields: [
        { value: 'path', label: 'Path' },
        { value: 'title', label: 'Title' },
        { value: 'date', label: 'Date' },
        { value: 'rating', label: 'Rating' },
        { value: 'images_count', label: 'Image count' },
        { value: 'random', label: 'Random' },
      ],
    },
  };
  var TAB_ORDER = ['scenes', 'images', 'galleries'];

  function findItemsInFolder(contentType, folderPath, page, searchQuery, sortBy, sortDirection) {
    var config = CONTENT_TYPES[contentType];
    var variables = {
      filter: { page: page, per_page: PAGE_SIZE, sort: sortBy || config.defaultSort, direction: sortDirection || 'ASC' },
    };
    if (searchQuery) {
      variables.filter.q = searchQuery;
    }
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
    var useEffect = React.useEffect;
    var ratingState = useState('');
    var rating = ratingState[0];
    var setRating = ratingState[1];
    var organizedState = useState('');
    var organized = organizedState[0];
    var setOrganized = organizedState[1];
    // {id, name} pairs, built up from the hand-rolled tag search below
    // rather than the native TagSelect component (see the note on
    // GRID_COMPONENTS - same cold-load problem, same fix).
    var selectedTagsState = useState([]);
    var selectedTags = selectedTagsState[0];
    var setSelectedTags = selectedTagsState[1];
    var tagSearchState = useState('');
    var tagSearch = tagSearchState[0];
    var setTagSearch = tagSearchState[1];
    var tagResultsState = useState([]);
    var tagResults = tagResultsState[0];
    var setTagResults = tagResultsState[1];
    var busyState = useState(false);
    var busy = busyState[0];
    var setBusy = busyState[1];
    var errorState = useState(null);
    var error = errorState[0];
    var setError = errorState[1];

    useEffect(
      function () {
        if (!tagSearch.trim()) {
          setTagResults([]);
          return;
        }
        var cancelled = false;
        var timer = setTimeout(function () {
          getApolloClient()
            .query({
              query: GQL.FindTagsDocument,
              variables: { filter: { q: tagSearch.trim(), per_page: 10, sort: 'name', direction: 'ASC' } },
              fetchPolicy: 'network-only',
            })
            .then(function (result) {
              if (!cancelled) setTagResults(result.data.findTags.tags);
            });
        }, 300);
        return function () {
          cancelled = true;
          clearTimeout(timer);
        };
      },
      [tagSearch]
    );

    function addTag(tag) {
      setSelectedTags(selectedTags.concat([tag]));
      setTagSearch('');
      setTagResults([]);
    }

    function removeTag(id) {
      setSelectedTags(selectedTags.filter(function (t) { return t.id !== id; }));
    }

    function handleApply() {
      var edits = {};
      if (rating !== '') edits.rating100 = Math.max(0, Math.min(100, Number(rating)));
      if (organized !== '') edits.organized = organized === 'yes';
      if (selectedTags.length) edits.addTagIds = selectedTags.map(function (t) { return t.id; });
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
          selectedTags.length
            ? React.createElement(
                'div',
                { className: 'folder-browser-tag-chips' },
                selectedTags.map(function (t) {
                  return React.createElement(
                    'span',
                    { key: t.id, className: 'folder-browser-tag-chip' },
                    t.name,
                    React.createElement(
                      Button,
                      { variant: 'link', className: 'folder-browser-tag-chip-remove', onClick: function () { removeTag(t.id); } },
                      React.createElement(FontAwesomeIcon, { icon: FA.faTimes, className: 'fa-icon' })
                    )
                  );
                })
              )
            : null,
          React.createElement(Form.Control, {
            type: 'text',
            placeholder: 'Search tags by name…',
            value: tagSearch,
            onChange: function (e) { setTagSearch(e.target.value); },
          }),
          tagResults.length
            ? React.createElement(
                'div',
                { className: 'folder-browser-tag-results' },
                tagResults
                  .filter(function (t) { return !selectedTags.some(function (s) { return s.id === t.id; }); })
                  .map(function (t) {
                    return React.createElement(
                      Button,
                      { key: t.id, variant: 'secondary', size: 'sm', className: 'folder-browser-tag-result', onClick: function () { addTag(t); } },
                      t.name
                    );
                  })
              )
            : null
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

    // tab is tagged onto itemsResult (rather than relying on activeTab
    // directly) because switching tabs re-renders with the new activeTab
    // before the refetch for that tab resolves - without this tag,
    // renderItems() would momentarily hand the *previous* tab's items (e.g.
    // images) to the new tab's real grid component (e.g. SceneCardGrid,
    // which indexes into scene.files), crashing the whole page. That render
    // happens synchronously, so an effect clearing stale state afterwards is
    // too late - this has to be checked at render time instead.
    var itemsResultState = useState({ items: [], count: 0, tab: null });
    var itemsResult = itemsResultState[0];
    var setItemsResult = itemsResultState[1];

    // Only feed the lightbox images while actually on the Images tab (and
    // only once itemsResult is tagged for it - see the tab-mismatch comment
    // above) so switching away doesn't leave it primed with stale images.
    // The effect inside useLightbox depends on each field individually
    // (not this object's identity), so a fresh literal here each render is
    // fine and doesn't cause extra lightbox-context updates.
    var showLightbox = useLightbox(
      {
        images: activeTab === 'images' && itemsResult.tab === 'images' ? itemsResult.items : [],
        showNavigation: true,
        slideshowEnabled: false,
      },
      []
    );

    var pageState = useState(1);
    var page = pageState[0];
    var setPage = pageState[1];

    var searchInputState = useState('');
    var searchInput = searchInputState[0];
    var setSearchInput = searchInputState[1];

    var searchQueryState = useState('');
    var searchQuery = searchQueryState[0];
    var setSearchQuery = searchQueryState[1];

    var sortByState = useState(CONTENT_TYPES.scenes.defaultSort);
    var sortBy = sortByState[0];
    var setSortBy = sortByState[1];

    var sortDirState = useState('ASC');
    var sortDir = sortDirState[0];
    var setSortDir = sortDirState[1];

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

    // Reset to page 1, clear selection, and clear any search/sort whenever
    // the folder or tab changes - a search term or sort field from one
    // folder/tab shouldn't silently keep filtering/ordering a different one,
    // and each content type has its own valid sort fields.
    useEffect(
      function () {
        setPage(1);
        setSelectedIds(new Set());
        setSearchInput('');
        setSearchQuery('');
        setSortBy(CONTENT_TYPES[activeTab].defaultSort);
        setSortDir('ASC');
      },
      [currentPath, activeTab]
    );

    // Debounce the search box so every keystroke doesn't trigger a query.
    useEffect(
      function () {
        var timer = setTimeout(function () {
          setSearchQuery(searchInput.trim());
        }, 400);
        return function () {
          clearTimeout(timer);
        };
      },
      [searchInput]
    );

    // A new search term or sort order restarts pagination from page 1.
    useEffect(
      function () {
        setPage(1);
      },
      [searchQuery, sortBy, sortDir]
    );

    function reload() {
      var tabAtRequestTime = activeTab;

      if (!currentPath) {
        setFolder(null);
        setItemsResult({ items: [], count: 0, tab: tabAtRequestTime });
        setLoading(false);
        setError(null);
        return function () {};
      }

      var cancelled = false;
      setLoading(true);
      setError(null);

      Promise.all([findFolderByPath(currentPath), findItemsInFolder(activeTab, currentPath, page, searchQuery, sortBy, sortDir)])
        .then(function (results) {
          if (cancelled) return;
          setFolder(results[0]);
          setItemsResult({ items: results[1].items, count: results[1].count, tab: tabAtRequestTime });
        })
        .catch(function (e) {
          if (cancelled) return;
          setError((e && e.message) || String(e));
          setFolder(null);
          setItemsResult({ items: [], count: 0, tab: tabAtRequestTime });
        })
        .finally(function () {
          if (!cancelled) setLoading(false);
        });

      return function () {
        cancelled = true;
      };
    }

    useEffect(reload, [currentPath, activeTab, page, searchQuery, sortBy, sortDir]);

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
        folder
          ? React.createElement(Link, { key: 'root', to: folderUrl(''), className: 'btn btn-link folder-browser-crumb' }, 'Library')
          : React.createElement('span', { key: 'root', className: 'folder-browser-crumb folder-browser-crumb-current' }, 'Library'),
      ];

      if (folder) {
        var ancestors = (folder.parent_folders || []).slice().reverse();
        ancestors.concat([folder]).forEach(function (f) {
          crumbs.push(React.createElement(FontAwesomeIcon, { key: f.id + '-sep', icon: FA.faChevronRight, className: 'fa-icon folder-browser-crumb-sep' }));
          crumbs.push(
            f.id === folder.id
              ? React.createElement('span', { key: f.id, className: 'folder-browser-crumb folder-browser-crumb-current' }, f.basename || f.path)
              : React.createElement(Link, { key: f.id, to: folderUrl(f.path), className: 'btn btn-link folder-browser-crumb' }, f.basename || f.path)
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
            Link,
            { key: p, to: folderUrl(p), className: 'folder-browser-tile' },
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
              Link,
              { key: f.id, to: folderUrl(f.path), className: 'folder-browser-tile' },
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

    function renderSearchBox() {
      return React.createElement(
        'div',
        { className: 'folder-browser-search' },
        React.createElement(FontAwesomeIcon, { icon: FA.faSearch, className: 'fa-icon folder-browser-search-icon' }),
        React.createElement(Form.Control, {
          type: 'text',
          className: 'folder-browser-search-input',
          placeholder: 'Search ' + CONTENT_TYPES[activeTab].label.toLowerCase() + ' in this folder…',
          value: searchInput,
          onChange: function (e) { setSearchInput(e.target.value); },
        }),
        searchInput
          ? React.createElement(
              Button,
              { variant: 'link', className: 'folder-browser-search-clear', onClick: function () { setSearchInput(''); } },
              React.createElement(FontAwesomeIcon, { icon: FA.faTimes, className: 'fa-icon' })
            )
          : null
      );
    }

    function renderSortControl() {
      var fields = CONTENT_TYPES[activeTab].sortFields;
      return React.createElement(
        'div',
        { className: 'folder-browser-sort' },
        React.createElement(
          Form.Control,
          {
            as: 'select',
            className: 'folder-browser-sort-select',
            value: sortBy,
            onChange: function (e) { setSortBy(e.target.value); },
          },
          fields.map(function (f) {
            return React.createElement('option', { key: f.value, value: f.value }, f.label);
          })
        ),
        React.createElement(
          Button,
          {
            variant: 'secondary',
            className: 'folder-browser-sort-direction',
            title: sortDir === 'ASC' ? 'Ascending' : 'Descending',
            onClick: function () { setSortDir(sortDir === 'ASC' ? 'DESC' : 'ASC'); },
          },
          React.createElement(FontAwesomeIcon, { icon: sortDir === 'ASC' ? FA.faSortAmountUp : FA.faSortAmountDown, className: 'fa-icon' })
        )
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
      // Hand-rolled rather than reusing the native Pagination component -
      // see the "Why this page builds its own card grids" note in the
      // README: anything reached only through PluginApi.components has the
      // same cold-load problem the grids did, so this page doesn't depend
      // on that registry for anything anymore.
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
      // itemsResult can still hold the PREVIOUS tab's items for one render
      // right after switching tabs, before the new tab's fetch resolves -
      // handing those to this tab's grid component would crash it (e.g. a
      // real image passed to SimpleSceneCardGrid, which expects scene.files).
      if (itemsResult.tab !== activeTab) {
        return React.createElement(Spinner, { animation: 'border', className: 'mt-3' });
      }
      var GridComponent = GRID_COMPONENTS[activeTab];
      if (!itemsResult.items.length) {
        var emptyMessage = searchQuery
          ? 'No ' + config.label.toLowerCase() + ' matching "' + searchQuery + '" directly in this folder.'
          : 'No ' + config.label.toLowerCase() + ' directly in this folder.';
        return React.createElement('div', { className: 'text-muted folder-browser-empty' }, emptyMessage);
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
        // Unlike the native Images page (card click -> detail page, a
        // separate hover "preview" button -> lightbox), the whole card
        // opens the lightbox here - there's no hand-rolled image detail
        // page to link to, and the lightbox is the more useful default.
        gridProps.onPreview = function (index) {
          showLightbox({ initialIndex: index });
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
      // Tabs and the search box stay mounted across reloads (e.g. a debounced
      // search firing) so the input never loses focus mid-keystroke.
      currentPath
        ? React.createElement(
            React.Fragment,
            null,
            renderTabs(),
            React.createElement('div', { className: 'folder-browser-toolbar' }, renderSearchBox(), renderSortControl())
          )
        : null,
      loading
        ? React.createElement(Spinner, { animation: 'border', className: 'mt-3' })
        : React.createElement(
            React.Fragment,
            null,
            !currentPath ? renderLibraryRoots() : renderSubFolders(),
            currentPath
              ? React.createElement(React.Fragment, null, renderBulkToolbar(), renderItems())
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

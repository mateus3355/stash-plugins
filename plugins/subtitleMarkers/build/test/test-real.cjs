const fs = require('fs');
const { JSDOM } = require('jsdom');

async function run() {
  const dom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost:9999/',
    runScripts: 'dangerously',
  });
  const window = dom.window;
  const document = window.document;
  global.window = window;
  global.document = document;
  global.navigator = window.navigator;
  global.Node = window.Node;
  global.MutationObserver = window.MutationObserver;
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  window.requestAnimationFrame = global.requestAnimationFrame;
  window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
  window.matchMedia = window.matchMedia || function () {
    return { matches: false, media: '', onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; } };
  };
  global.IntersectionObserver = window.IntersectionObserver = class {
    observe() {} unobserve() {} disconnect() {} takeRecords() { return []; }
  };

  const React = require('react');
  const ReactDOM = require('react-dom');
  const TestUtils = require('react-dom/test-utils');
  const ReactBootstrap = require('react-bootstrap');
  const ReactIntl = require('react-intl');
  // react-select's Option components are styled with emotion, which otherwise can't find
  // its cache context in this bare jsdom environment (no Provider is set up automatically
  // outside a full app shell) - without this, clicking a real option crashes.
  const { CacheProvider: EmotionCacheProvider } = require('@emotion/react');
  const createEmotionCache = require('@emotion/cache').default;
  const ReactRouterDOM = require('react-router-dom');
  const Apollo = require('@apollo/client');
  const FontAwesomeSolid = require('@fortawesome/free-solid-svg-icons');
  const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
  const ReactSelect = require('react-select');

  const configuration = {
    __typename: 'ConfigResult',
    general: { __typename: 'ConfigGeneralResult', stashes: [{ __typename: 'StashConfig', path: '/lib', excludeVideo: false, excludeImage: false }], databasePath: '', backupDirectoryPath: '', generatedPath: '', metadataPath: '', scrapersPath: '', pluginsPath: '', cachePath: '', calculateMD5: true, videoFileNamingAlgorithm: 'OSHASH', parallelTasks: 1, previewAudio: true, previewSegments: 12, previewSegmentDuration: 0.75, previewExcludeStart: '0', previewExcludeEnd: '0', previewPreset: 'SLOW', maxTranscodeSize: null, maxStreamingTranscodeSize: null, writeImageThumbnails: true, apiKey: '', username: '', password: '', maxSessionAge: 0, logFile: null, logOut: true, logLevel: 'Info', logAccessLevel: 'Info', createGalleriesFromFolders: false, galleryCoverRegex: '', videoExtensions: [], imageExtensions: [], galleryExtensions: [], gallery_cover_regex: '', excludes: [], imageExcludes: [], customPerformerImageLocation: null, scraperUserAgent: null, scraperCertCheck: true, scraperCDPPath: null, stashBoxes: [], transcodeHardwareAcceleration: false, transcodeInputArgs: [], transcodeOutputArgs: [], liveTranscodeInputArgs: [], liveTranscodeOutputArgs: [], drawFunscriptHeatmapRange: true, transcodeHevcCopyForHlsEnabled: false },
    interface: { __typename: 'ConfigInterfaceResult', menuItems: ['scenes', 'images', 'galleries', 'performers', 'tags', 'studios', 'groups'], soundOnPreview: false, wallShowTitle: true, showStudioAsText: false, css: null, cssEnabled: false, javascript: null, javascriptEnabled: false, customLocales: null, customLocalesEnabled: false, language: 'en-US', slideshowDelay: 5000, imageLightboxOptions: { __typename: 'ConfigImageLightboxResult', slideshowDelay: 5000, displayMode: 'FIT_XY', scaleUp: false, resetZoomOnNav: false, scrollMode: 'ZOOM', scrollAttemptsBeforeChange: 5 }, disabledDropdownCreate: {}, disableDropdownCreate: { __typename: 'ConfigDisableDropdownCreate', performer: false, studio: false, tag: false, movie: false }, handyKey: null, funscriptOffset: 0, useStashHostedFunscript: false, continuePlaylistDefault: false, noBrowser: false, notificationsEnabled: true, showScrubber: true, disableCustomizations: false },
    dlna: { __typename: 'ConfigDLNAResult', serverName: '', enabled: false, whitelistedIPs: [], interfaces: [], videoSortOrder: 'title' },
    scraping: { __typename: 'ConfigScrapingResult', scraperUserAgent: null, scraperCertCheck: true, scraperCDPPath: null, excludeTagPatterns: [] },
    defaults: { __typename: 'ConfigDefaultSettingsResult', scan: null, autoTag: null, generate: null, deleteFile: false, deleteGenerated: true },
    ui: { maxOptionsShown: 200, ratingSystemOptions: { type: 'decimal', starPrecision: 'full' } },
    plugins: {},
  };

  const tags = [
    {
      __typename: 'Tag', id: 't1', name: 'Knock Knock', sort_name: null, favorite: false, description: '',
      aliases: [], image_path: '', parents: [], stash_ids: [],
    },
  ];

  // The library's filesystem, for FolderSelect's own Directory query to browse.
  const directories = {
    '': { path: '', parent: null, directories: ['/lib'] },
    '/lib': { path: '/lib', parent: '', directories: ['/lib/A'] },
  };

  // Full SlimSceneDataFragment-shaped scenes, for the real SceneCard each search result now
  // renders - minimal but complete (every field SceneCard/GridCard actually reads), not just
  // {id, title} like the plugin's own SearchResult.
  function makeMockScene(overrides) {
    return Object.assign(
      {
        __typename: 'Scene', id: '1', title: 'Ember Evening', code: null, details: '', director: null, urls: [], date: '2024-01-01',
        rating100: null, o_counter: 0, organized: false, interactive: false, interactive_speed: null, resume_time: null, play_duration: null, play_count: null,
        files: [{ __typename: 'VideoFile', id: 'f1', path: '/lib/A/one.mp4', size: 1000, mod_time: '2024-01-01', duration: 300, video_codec: 'h264', audio_codec: 'aac', width: 1920, height: 1080, frame_rate: 30, bit_rate: 1000, fingerprints: [] }],
        paths: { __typename: 'ScenePathsType', screenshot: '/scene/1/screenshot', preview: '/scene/1/preview', stream: '', webp: '', vtt: '', sprite: '', funscript: '', interactive_heatmap: '', caption: null },
        scene_markers: [], galleries: [], studio: null, groups: [], tags: [{ __typename: 'Tag', id: 'tag-1', name: 'Knock Knock' }], performers: [], stash_ids: [],
      },
      overrides
    );
  }
  const scenesByID = {
    '1': makeMockScene({}),
    '2': makeMockScene({ id: '2', title: 'Morning Light', tags: [] }),
  };

  const apolloCalls = [];

  const apolloLink = new Apollo.ApolloLink((operation) => {
    return new Apollo.Observable((observer) => {
      const name = operation.operationName;
      apolloCalls.push({ name, variables: operation.variables });
      try {
        let data;
        if (name === 'Configuration') {
          data = { configuration };
        } else if (name === 'Directory') {
          const path = (operation.variables && operation.variables.path) || '';
          const dir = directories[path] || { path, parent: null, directories: [] };
          data = { directory: { __typename: 'Directory', ...dir } };
        } else {
          throw new Error('unmocked apollo operation: ' + name);
        }
        observer.next({ data });
        observer.complete();
      } catch (e) {
        observer.error(e);
      }
    });
  });

  const apolloClient = new Apollo.ApolloClient({
    link: apolloLink,
    cache: new Apollo.InMemoryCache(),
  });

  // The plugin's own plain-fetch GraphQL calls (runPluginTask / findJob / runPluginOperation) -
  // separate from the Apollo client above, which TagIDSelect and the Configuration query use
  // instead. Simulates a job that reports RUNNING once, then FINISHED.
  const graphqlCalls = [];
  let findJobCallCount = 0;
  window.fetch = function (url, opts) {
    const body = JSON.parse(opts.body);
    const name = body.operationName || /\b(mutation|query)\s+(\w+)/.exec(body.query)[2];
    graphqlCalls.push({ name, variables: body.variables });
    let data;
    if (name === 'SubtitleMarkersRunTask') {
      data = { runPluginTask: 'job-1' };
    } else if (name === 'SubtitleMarkersFindJob') {
      findJobCallCount++;
      data = findJobCallCount === 1
        ? { findJob: { status: 'RUNNING', progress: 0.5, error: null } }
        : { findJob: { status: 'FINISHED', progress: 1, error: null } };
    } else if (name === 'SubtitleMarkersSearch') {
      data = {
        runPluginOperation: {
          results: [
            { sceneId: '1', sceneTitle: 'Ember Evening', seconds: 12.5, text: 'Someone said knock knock' },
            // Second hit in the SAME scene, later on - exercises the in-place seek path.
            { sceneId: '1', sceneTitle: 'Ember Evening', seconds: 40, text: 'Knock knock again' },
            // Third hit in a DIFFERENT scene - exercises the cross-scene navigation path.
            { sceneId: '2', sceneTitle: 'Morning Light', seconds: 5, text: 'One more knock knock' },
          ],
          matchedCues: 3,
          unmatchedSrt: 0,
        },
      };
    } else if (name === 'FindScenes') {
      // queryFindScenesByID's own query, for the real SceneCard each search result renders.
      const ids = (body.variables.scene_ids || []).map(String);
      const scenes = ids.map((id) => scenesByID[id]).filter(Boolean);
      data = { findScenes: { __typename: 'FindScenesResultType', count: scenes.length, filesize: 0, duration: 0, scenes } };
    } else if (name === 'FindSceneMarkers') {
      // "Play All (Filtered)"'s own query, through the same internal StashService client as
      // FindTagsForSelect below - mirrors a filter matching 2 markers across 2 scenes.
      data = {
        findSceneMarkers: {
          __typename: 'FindSceneMarkersResultType',
          count: 2,
          scene_markers: [
            {
              __typename: 'SceneMarker', id: 'marker-1', title: '', seconds: 30, end_seconds: null, stream: '', preview: '', screenshot: '',
              scene: { __typename: 'Scene', id: '1', title: 'Ember Evening', files: [], performers: [] },
              primary_tag: { __typename: 'Tag', id: 'tag-1', name: 'Knock Knock' },
              tags: [],
            },
            {
              __typename: 'SceneMarker', id: 'marker-2', title: 'Custom title', seconds: 90, end_seconds: null, stream: '', preview: '', screenshot: '',
              scene: { __typename: 'Scene', id: '3', title: '', files: [], performers: [] },
              primary_tag: { __typename: 'Tag', id: 'tag-1', name: 'Knock Knock' },
              tags: [],
            },
          ],
        },
      };
    } else if (name === 'FindTagsForSelect' || name === 'FindTagsByIDForSelect') {
      // TagIDSelect's own search/by-id queries go through a separate Apollo client this
      // bundle's compiled copy of src/core/StashService creates for itself (an HttpLink
      // backed by the real window.fetch) - not the in-memory apolloLink above, which only
      // the React-context-aware GQL.useConfigurationQuery() hook actually uses.
      const ids = operation_ids(body.variables);
      const matched = ids ? tags.filter((t) => ids.includes(t.id)) : tags;
      data = { findTags: { __typename: 'FindTagsResultType', count: matched.length, tags: matched } };
    } else {
      return Promise.reject(new Error('unhandled fetch: ' + body.query));
    }
    // A real Response, not a plain {json: ...} stub - the StashService Apollo client's own
    // HttpLink parses it like a real fetch result (status, .text(), etc.), not just .json().
    return Promise.resolve(new Response(JSON.stringify({ data }), { status: 200, headers: { 'content-type': 'application/json' } }));
  };
  function operation_ids(variables) {
    return (variables && variables.ids) || null;
  }

  window.PluginApi = {
    React, ReactDOM,
    libraries: {
      ReactRouterDOM, Bootstrap: ReactBootstrap, Apollo, Intl: ReactIntl,
      FontAwesomeSolid, ReactFontAwesome: { FontAwesomeIcon }, ReactSelect,
    },
    utils: {
      StashService: { getClient: () => apolloClient },
    },
    register: { route: (path, component) => { window.__registeredPath = path; window.__registeredComponent = component; } },
    patch: {
      before: (name, fn) => {
        if (name === 'MainNavBar.MenuItems') window.__navBeforeFn = fn;
        if (name === 'FilteredSceneMarkerList') window.__filteredSceneMarkerListBeforeFn = fn;
      },
    },
  };

  // Tests the actual deployed file (plugins/subtitleMarkers/subtitleMarkers.js), not a
  // local dist/ copy, so a `build` that wasn't followed by `test` can't silently leave a
  // stale bundle looking "tested" (same discipline as the Folder Browser plugin's test).
  const code = fs.readFileSync(__dirname + '/../../subtitleMarkers.js', 'utf8');
  window.eval(code);

  console.log('A) route registered at /subtitle-markers:', window.__registeredPath === '/subtitle-markers');
  console.log('B) nav patch registered:', typeof window.__navBeforeFn === 'function');

  const navResult = window.__navBeforeFn({ children: [React.createElement('span', { className: 'native' }, 'native')] });
  console.log('C) nav patch did not throw, returned props array:', Array.isArray(navResult));

  // Render just the nav link this patch adds, to check its actual label text and icon -
  // not just that patching succeeded.
  const navContainer = document.createElement('div');
  await TestUtils.act(async () => {
    ReactDOM.render(
      React.createElement(ReactRouterDOM.MemoryRouter, null, React.createElement(ReactBootstrap.Nav, null, navResult[0].children)),
      navContainer
    );
  });
  console.log('C2) nav link label is exactly "Marker":', navContainer.textContent.trim() === 'nativeMarker');
  console.log('C3) nav link keeps its closed-captioning icon:', !!navContainer.querySelector('svg.nav-menu-icon'));

  // ---------------------------------------------------------------------
  // "Play All (Filtered)" on Stash's own native Markers list (FilteredSceneMarkerList's
  // extraOperations prop) - exercised directly against the captured before() hook, the same
  // real queryFindSceneMarkers (src/core/StashService) this plugin calls, rather than
  // rendering the whole native page (which isn't this plugin's own component to own).
  // ---------------------------------------------------------------------

  function makeMockFilter(props) {
    return Object.assign(
      {
        currentPage: 1,
        itemsPerPage: 40,
        taggedOnly: false,
        clone() {
          return Object.assign({}, this);
        },
        // The real ListFilterModel methods queryFindSceneMarkers actually calls.
        makeFindFilter() {
          return { page: this.currentPage, per_page: this.itemsPerPage };
        },
        makeFilter() {
          return { taggedOnly: this.taggedOnly };
        },
      },
      props
    );
  }

  console.log('C4) "FilteredSceneMarkerList" patch registered:', typeof window.__filteredSceneMarkerListBeforeFn === 'function');

  const patchedProps = window.__filteredSceneMarkerListBeforeFn({ extraOperations: [{ text: 'existing op' }] })[0];
  console.log('C5) an existing extraOperations entry is kept, not replaced:', patchedProps.extraOperations.some((o) => o.text === 'existing op'));
  const playAllFilteredOp = patchedProps.extraOperations.find((o) => o.text === 'Play All (Filtered)');
  console.log('C6) a "Play All (Filtered)" operation is added:', !!playAllFilteredOp);

  console.log('C7) isDisplayed is false with no matching markers:', playAllFilteredOp.isDisplayed({ data: { findSceneMarkers: { count: 0 } } }) === false);
  console.log('C8) isDisplayed is true once something matches:', playAllFilteredOp.isDisplayed({ data: { findSceneMarkers: { count: 2 } } }) === true);

  window.sessionStorage.clear();
  const openCalls = [];
  const realOpen = window.open;
  window.open = (url) => openCalls.push(url);

  graphqlCalls.length = 0;
  await playAllFilteredOp.onClick({}, makeMockFilter({ currentPage: 5, itemsPerPage: 20 }));

  const findMarkersCall = graphqlCalls.find((c) => c.name === 'FindSceneMarkers');
  console.log(
    'C9) clicking it queries every matching marker, not just the current page:',
    !!findMarkersCall && findMarkersCall.variables.filter.page === 1 && findMarkersCall.variables.filter.per_page === 1000
  );

  const queueFromMarkers = JSON.parse(window.sessionStorage.getItem('subtitleMarkersQueue') || 'null');
  console.log(
    'C10) the queue is built from the real query response (2 markers, 2 different scenes):',
    !!queueFromMarkers && queueFromMarkers.items.length === 2 && queueFromMarkers.index === 0
  );
  console.log(
    'C11) a marker with no title falls back to its primary tag\'s name:',
    queueFromMarkers.items[0].sceneId === '1' && queueFromMarkers.items[0].text === 'Knock Knock'
  );
  console.log(
    'C12) a marker with its own title uses that instead:',
    queueFromMarkers.items[1].sceneId === '3' && queueFromMarkers.items[1].text === 'Custom title'
  );
  console.log('C13) it opens the first item in a new tab:', openCalls.length === 1 && openCalls[0] === '/scenes/1?t=30&continue=true&autoplay=true');

  // --- A page's own filterHook (e.g. a Tag's "Markers" tab, constraining to that tag) is
  // re-applied here too, not silently dropped - see the comment on the before() hook itself.
  window.sessionStorage.clear();
  graphqlCalls.length = 0;
  const hookedProps = window.__filteredSceneMarkerListBeforeFn({ filterHook: (f) => { const h = f.clone(); h.taggedOnly = true; return h; } })[0];
  const hookedOp = hookedProps.extraOperations.find((o) => o.text === 'Play All (Filtered)');
  await hookedOp.onClick({}, makeMockFilter());
  const hookedCall = graphqlCalls.find((c) => c.name === 'FindSceneMarkers');
  console.log('C14) a page\'s own filterHook is applied before querying, not ignored:', !!hookedCall && hookedCall.variables.scene_marker_filter.taggedOnly === true);

  window.open = realOpen;
  window.sessionStorage.clear();

  const emotionCache = createEmotionCache({ key: 'css' });
  // Captures the real history object SubtitleMarkersPage's own useHistory() call resolves -
  // SubtitleMarkersPage needs a real Router ancestor for that to work at all (it always has
  // one for real, registered via PluginApi.register.route into the app's own top-level
  // Router), and MemoryRouter (unlike a real browser) keeps its location purely in memory,
  // never touching window.location - this is how the test observes where it navigated to.
  function HistoryCapture() {
    window.__testHistory = ReactRouterDOM.useHistory();
    return null;
  }
  function Shell({ children }) {
    return React.createElement(
      EmotionCacheProvider,
      { value: emotionCache },
      React.createElement(
        ReactIntl.IntlProvider,
        { locale: 'en', messages: {}, onError: () => {} },
        React.createElement(
          Apollo.ApolloProvider,
          { client: apolloClient },
          React.createElement(
            ReactRouterDOM.MemoryRouter,
            { initialEntries: ['/subtitle-markers'] },
            React.createElement(HistoryCapture),
            children
          )
        )
      )
    );
  }

  const Page = window.__registeredComponent;
  const container = document.createElement('div');
  document.body.appendChild(container);

  let renderError = null;
  try {
    await TestUtils.act(async () => {
      ReactDOM.render(React.createElement(Shell, null, React.createElement(Page)), container);
      await new Promise((r) => setTimeout(r, 50));
    });
  } catch (e) {
    renderError = e;
  }

  if (renderError) {
    console.log('D) CRASHED rendering the real page:', renderError.message);
    console.log(renderError.stack);
    process.exit(1);
  }
  console.log('D) page rendered without crashing');

  const pathInput = container.querySelector('.subtitle-markers-folder input');
  const searchInput = Array.from(container.querySelectorAll('input[type="text"]')).find((i) => i.placeholder.includes('subtitle lines'));
  console.log('E) path (real FolderSelect)/search inputs present:', !!pathInput && !!searchInput);
  console.log('F2) real FolderSelect shows the library path as a starting point:', container.textContent.includes('/lib'));

  // "Also create scene markers" is off by default - no tag/title fields, no marker-only UI.
  console.log('F5) tag select is NOT shown by default (marker creation is opt-in):', !container.querySelector('.tag-select'));

  let runButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Search' || b.textContent === 'Searching…');
  console.log('G) Run button starts disabled (no path/search filled yet):', runButton.disabled === true);

  // Navigate the real folder browser: click the library path, then the subfolder under it -
  // the same clicking-through-tiles interaction a user gets, not typing a raw path by hand.
  function folderTile(label) {
    return Array.from(container.querySelectorAll('.folder-list-item button')).find((b) => b.textContent.trim() === label);
  }
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(folderTile('/lib'));
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('F3) navigating into /lib shows its real subfolder (/lib/A) from the Directory query:', !!folderTile('/lib/A'));
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(folderTile('/lib/A'));
  });
  console.log('F4) FolderSelect\'s input reflects the folder navigated into:', pathInput.value === '/lib/A');

  await TestUtils.act(async () => {
    TestUtils.Simulate.change(searchInput, { target: { value: 'knock knock' } });
  });

  console.log('I) Run button enabled once path/search are filled, with no tag needed:', runButton.disabled === false);

  // --- Default mode: search only, no marker created ---
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(runButton);
    await new Promise((r) => setTimeout(r, 20));
  });

  const searchCall = graphqlCalls.find((c) => c.name === 'SubtitleMarkersSearch');
  console.log(
    'P) clicking Search called runPluginOperation with mode "search" and the form\'s values:',
    !!searchCall
      && searchCall.variables.plugin_id === 'subtitleMarkers'
      && searchCall.variables.args.mode === 'search'
      && searchCall.variables.args.path === '/lib/A'
      && searchCall.variables.args.search === 'knock knock'
  );
  console.log('Q) no marker-creation calls were made in search-only mode:', !graphqlCalls.some((c) => c.name === 'SubtitleMarkersRunTask'));

  // The real SceneCard needs its own scene data (tags, preview, etc.) - a separate fetch,
  // after the search itself, so wait for that too before checking what's actually rendered.
  // (There's a real "Loading scene previews…" state for the gap between the two - not
  // asserted here since the mocked fetch resolves too fast to reliably observe it.)
  await TestUtils.act(async () => {
    await new Promise((r) => setTimeout(r, 20));
  });
  const findScenesCall = graphqlCalls.find((c) => c.name === 'FindScenes');
  console.log('R) it fetches the real scene data for every unique scene id among the results:', !!findScenesCall && findScenesCall.variables.scene_ids.sort().join(',') === '1,2');

  const resultCards = Array.from(container.querySelectorAll('.subtitle-markers-result-card'));
  console.log('S) a real SceneCard is rendered for each result (not a plain link):', resultCards.length === 3 && !!container.querySelector('.scene-card'));
  console.log('S2) it shows the scene\'s title and a hover-preview video/image, not just plain text:', container.textContent.includes('Ember Evening') && !!container.querySelector('.scene-card-preview-video'));
  console.log('S3) it shows the scene\'s real tags, not just the matched subtitle text:', !!container.querySelector('.tag-count') && container.textContent.includes('knock knock'));
  console.log('S4) the matched subtitle text/timestamp is still shown alongside the card:', resultCards[0].textContent.includes('Someone said knock knock'));

  // Regression: a long matched line, with no explicit width constraint of its own, used to
  // stretch this whole column wider than the SceneCard above it instead of wrapping - fixed
  // by giving the wrapper the same cardWidth the SceneCard itself uses, and clamping the
  // caption to 2 lines (TruncatedText) rather than one unbroken line of arbitrary length.
  console.log('S8) the card wrapper is given an explicit width, matching the card\'s own:', resultCards[0].style.width === '340px');
  const captionEl = resultCards[0].querySelector('.subtitle-markers-result-text');
  console.log('S9) the caption text is clamped (TruncatedText), not left to grow unbounded:', captionEl.classList.contains('TruncatedText') && captionEl.style.webkitLineClamp === '2');

  // GridCard renders both the thumbnail and the title as a <Link> to the plain scene URL
  // (/scenes/1, no timestamp) - clicking either must still land on *this* result's own
  // timestamp instead, not the scene generally.
  const firstCardThumbnailLink = resultCards[0].querySelector('a.scene-card-link');
  console.log('S5) the underlying thumbnail link, unclicked, still points at the plain scene URL:', firstCardThumbnailLink.getAttribute('href') === '/scenes/1');
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(firstCardThumbnailLink);
  });
  console.log(
    'S6) clicking the thumbnail navigates to this result\'s own timestamp instead:',
    window.__testHistory.location.pathname === '/scenes/1' && window.__testHistory.location.search === '?t=12.5'
  );

  // A tag-count popover click (not a navigating link) must be left alone - not hijacked into
  // navigating anywhere, since it isn't inside the thumbnail or title link at all.
  await TestUtils.act(async () => {
    window.__testHistory.push('/subtitle-markers');
  });
  const tagCountButton = resultCards[0].querySelector('.tag-count button');
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(tagCountButton);
  });
  console.log('S7) clicking the tag-count popover (not a navigating link) does not navigate away:', window.__testHistory.location.pathname === '/subtitle-markers');

  // ---------------------------------------------------------------------
  // "Play All in Queue" - plays through all 3 results in order: two hits in 1 (an
  // in-place seek between them), then one in 2 (a real navigation). window.location
  // can't actually navigate in jsdom (and its .assign can't be mocked - Location is
  // non-configurable even here), so "arriving" at each scene is simulated with
  // history.pushState, same as the browser would leave window.location after a real one.
  // ---------------------------------------------------------------------

  window.sessionStorage.clear();
  const playAllButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Play All in Queue');
  console.log('U) "Play All in Queue" button is shown with results:', !!playAllButton);

  TestUtils.Simulate.click(playAllButton);
  const queueAfterPlayAll = JSON.parse(window.sessionStorage.getItem('subtitleMarkersQueue') || 'null');
  console.log(
    'V) clicking it saves all 3 results as the queue, starting at index 0:',
    !!queueAfterPlayAll && queueAfterPlayAll.items.length === 3 && queueAfterPlayAll.index === 0
  );

  // The MutationObserver only sees actual DOM mutations, not history.pushState/sessionStorage
  // changes on their own - a real cross-scene queue advance is a real navigation (full page
  // load, re-running this whole script, which checks for an active queue unconditionally at
  // the end), which this harmless no-op mutation stands in for after each simulated arrival.
  function nudgeObserver() {
    document.body.appendChild(document.createElement('span')).remove();
  }

  // Simulate having arrived at 1 (the first queue item) - a real video.js player
  // structure, so the "ended"-listener/seek code can find the real <video> element.
  window.history.pushState({}, '', '/scenes/1');
  const videoJsContainer = document.createElement('div');
  videoJsContainer.className = 'video-js';
  const video = document.createElement('video');
  videoJsContainer.appendChild(video);
  document.body.appendChild(videoJsContainer); // itself a real mutation - no nudge needed here
  video.currentTime = 0;
  video.play = () => Promise.resolve();
  await new Promise((r) => setTimeout(r, 0));

  function widgetText() {
    const el = document.getElementById('subtitle-markers-queue-widget');
    return el ? el.textContent : '';
  }
  console.log('W) the queue widget appears on the first item, showing its position and text:', widgetText().includes('Marker 1 of 3') && widgetText().includes('Someone said knock knock'));

  function widgetButton(label) {
    const el = document.getElementById('subtitle-markers-queue-widget');
    return el ? Array.from(el.querySelectorAll('button')).find((b) => b.textContent === label) : null;
  }
  console.log('X) Prev is disabled on the first item:', widgetButton('Prev').disabled === true);

  // --- Next: same scene (1, item 2) - should seek in place, no navigation ---
  TestUtils.Simulate.click(widgetButton('Next'));
  console.log('Y) advancing to the same scene\'s second hit seeks the real <video> element:', video.currentTime === 40);
  console.log('Z) ...without actually navigating away:', window.location.pathname === '/scenes/1');
  console.log('AA) the widget updates to show the second item:', widgetText().includes('Marker 2 of 3') && widgetText().includes('Knock knock again'));

  // --- Next again: 2, item 3 - a different scene, so a real navigation is attempted.
  // sessionStorage is updated before that happens either way (goToQueueIndex saves first) -
  // and the widget disappears once we're (simulated as) still on 1 but the queue now
  // points at 2, since ensureQueueWidget correctly treats that as "not this page".
  TestUtils.Simulate.click(widgetButton('Next'));
  const queueAfterCrossSceneNext = JSON.parse(window.sessionStorage.getItem('subtitleMarkersQueue') || 'null');
  console.log('AB) the queue advances to index 2 (2) even though navigation is simulated:', !!queueAfterCrossSceneNext && queueAfterCrossSceneNext.index === 2);
  console.log('AC) the widget is removed once the page no longer matches the queue\'s current item:', !document.getElementById('subtitle-markers-queue-widget'));

  // Simulate actually arriving at 2 (what a real navigation would have done).
  window.history.pushState({}, '', '/scenes/2');
  nudgeObserver();
  await new Promise((r) => setTimeout(r, 0));
  console.log('AD) the widget reappears once on the right scene, showing the last item:', widgetText().includes('Marker 3 of 3') && widgetText().includes('One more knock knock'));
  console.log('AE) Next is disabled on the last item:', widgetButton('Next').disabled === true);

  // --- Ending the video on the last item empties the queue entirely ---
  const endedEvent = new window.Event('ended', { bubbles: false });
  video.dispatchEvent(endedEvent);
  console.log('AF) the video "ending" on the last item clears the queue:', window.sessionStorage.getItem('subtitleMarkersQueue') === null);
  console.log('AG) ...and removes the widget:', !document.getElementById('subtitle-markers-queue-widget'));

  // --- Stop button also clears an in-progress queue ---
  window.history.pushState({}, '', '/scenes/1');
  window.sessionStorage.setItem('subtitleMarkersQueue', JSON.stringify({ items: queueAfterPlayAll.items, index: 0 }));
  nudgeObserver();
  await new Promise((r) => setTimeout(r, 0));
  const stopButton = widgetButton('Stop');
  console.log('AH) the widget reappears for a freshly (re)started queue:', !!stopButton);
  TestUtils.Simulate.click(stopButton);
  console.log('AI) Stop clears the queue and removes the widget:', window.sessionStorage.getItem('subtitleMarkersQueue') === null && !document.getElementById('subtitle-markers-queue-widget'));

  // ---------------------------------------------------------------------
  // Regression: the auto-advance preview timer used to run on a fixed wall-clock schedule
  // regardless of whether the video was actually playing - pausing to read/think didn't stop
  // the countdown, so it could silently fire (and, for a same-scene advance, force-call
  // video.play()) moments later, "unpausing" a video the user had deliberately paused. It's
  // now driven by the video's own play/pause events instead. Speeds up just this plugin's
  // preview-countdown setTimeout calls (20000ms) so the test doesn't really wait 20s - other
  // timers (e.g. the job-polling interval later in this file) are left alone.
  // ---------------------------------------------------------------------
  const realSetTimeout = window.setTimeout;
  window.setTimeout = (cb, delay, ...args) => (delay === 20000 ? realSetTimeout(cb, 40, ...args) : realSetTimeout(cb, delay, ...args));

  // jsdom doesn't implement real media playback - dispatching a "play"/"pause" Event alone
  // doesn't change a <video>'s own .paused (it stays permanently true, the default, since
  // nothing ever really plays) - .paused itself has to be driven the same way for these two
  // simulated helpers to mean what they say.
  let videoPlaying = false;
  Object.defineProperty(video, 'paused', { get: () => !videoPlaying, configurable: true });
  function simulatePlay() {
    videoPlaying = true;
    video.dispatchEvent(new window.Event('play'));
  }
  function simulatePause() {
    videoPlaying = false;
    video.dispatchEvent(new window.Event('pause'));
  }

  window.history.pushState({}, '', '/scenes/1');
  window.sessionStorage.setItem('subtitleMarkersQueue', JSON.stringify({ items: queueAfterPlayAll.items, index: 0 }));
  nudgeObserver();
  await new Promise((r) => realSetTimeout(r, 0));

  video.currentTime = 12.5;
  simulatePlay();
  simulatePause();
  // Paused immediately after playing - well past the (sped-up) countdown, confirm it never
  // fired: still on the first item, video untouched.
  await new Promise((r) => realSetTimeout(r, 60));
  console.log(
    'AJ) pausing cancels the pending auto-advance - it does not fire while paused:',
    JSON.parse(window.sessionStorage.getItem('subtitleMarkersQueue')).index === 0 && video.currentTime === 12.5
  );

  // Resuming starts a fresh countdown, which (still playing throughout) does fire this time.
  simulatePlay();
  await new Promise((r) => realSetTimeout(r, 60));
  console.log(
    'AK) resuming schedules a new countdown, which fires (and only now) while actually playing:',
    JSON.parse(window.sessionStorage.getItem('subtitleMarkersQueue')).index === 1 && video.currentTime === 40
  );

  window.setTimeout = realSetTimeout;
  window.sessionStorage.clear();
  document.getElementById('subtitle-markers-queue-widget')?.remove();

  // Clean up the injected video-js fixture and go back to the search page's own route before
  // the rest of the test continues interacting with `container`.
  videoJsContainer.remove();
  window.history.pushState({}, '', '/subtitle-markers');
  window.sessionStorage.clear();

  // --- Turning on "Also create scene markers" reveals the tag/title fields and switches the
  // button back to the existing background-job marker-creation flow ---
  const createMarkersCheckbox = container.querySelector('#subtitle-markers-create-markers');
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(createMarkersCheckbox, { target: { checked: true } });
  });
  console.log('T) checking "Also create scene markers" reveals the real TagIDSelect:', !!container.querySelector('.tag-select'));

  runButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent.includes('Search & Create Markers'));
  console.log('G2) Run button is disabled again until a tag is chosen:', runButton.disabled === true);

  // Pick the tag through the real react-select control, the same way a user would: type to
  // search (its options load async via loadOptions, debounced 100ms), then click the result.
  const tagSelectInput = container.querySelector('.tag-select input');
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(tagSelectInput, { target: { value: 'Knock' } });
    await new Promise((r) => setTimeout(r, 200));
  });
  const tagOption = Array.from(document.querySelectorAll('[class*="-option"]')).find((o) => o.textContent.includes('Knock Knock'));
  if (tagOption) {
    await TestUtils.act(async () => {
      TestUtils.Simulate.click(tagOption);
    });
  }
  console.log('H) tag picked from the real dropdown:', !!tagOption);

  console.log('I2) Run button enabled once path/search/tag are filled:', runButton.disabled === false);

  await TestUtils.act(async () => {
    TestUtils.Simulate.click(runButton);
    // Lets runPluginTask resolve (setting jobId) and its effect's first findJob poll - fired
    // immediately, not after the 1s interval - complete, without yet waiting out the 1s
    // delay before the next one.
    await new Promise((r) => setTimeout(r, 50));
  });

  const runCall = graphqlCalls.find((c) => c.name === 'SubtitleMarkersRunTask');
  console.log(
    'J) clicking Run sent runPluginTask with the form\'s values:',
    !!runCall
      && runCall.variables.plugin_id === 'subtitleMarkers'
      && runCall.variables.args_map.path === '/lib/A'
      && runCall.variables.args_map.search === 'knock knock'
      && runCall.variables.args_map.tagId === 't1'
  );

  // First poll already landed (RUNNING at 50%) - a progress bar should be showing.
  console.log('K) shows a progress bar while the job is running:', !!container.querySelector('.progress-bar'));
  console.log('L) Run button disabled again while the job runs:', runButton.disabled === true);

  // The second poll, scheduled 1s after the first, returns FINISHED.
  await new Promise((r) => setTimeout(r, 1100));
  console.log('M) shows "Done." once the job finishes:', container.textContent.includes('Done.'));
  console.log('N) Run button re-enabled once finished:', runButton.disabled === false);

  // --- A failed runPluginTask call should surface its error, not crash the page ---
  window.fetch = function (url, opts) {
    const body = JSON.parse(opts.body);
    if (/SubtitleMarkersRunTask/.test(body.query)) {
      return Promise.resolve({ json: () => Promise.resolve({ errors: [{ message: 'plugin is disabled' }] }) });
    }
    return Promise.reject(new Error('unexpected call'));
  };
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(runButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('O) a failed run shows the error instead of crashing:', container.textContent.includes('plugin is disabled'));
}

run().then(() => process.exit(0)).catch((e) => { console.error('FATAL', e); process.exit(1); });

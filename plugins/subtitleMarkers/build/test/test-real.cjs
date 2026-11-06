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
        if (name === 'ScenePage.Tabs') window.__scenePageTabsBeforeFn = fn;
        if (name === 'ScenePage.TabContent') window.__scenePageTabContentBeforeFn = fn;
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

  // The queue is now a real native SceneQueue link - built straight from the query response
  // (2 markers, 2 different scenes) and opened in exactly one new tab, with both entries'
  // own scene id/start time encoded (qs=1&qs=3, qt=30&qt=90, aligned by position), not just
  // the first - split into two parallel lists rather than qs=1:30 so anything parsing qs= as
  // a plain id list on its own (e.g. Stash TV's "open in Stash TV" button) still works.
  console.log('C10) it opens exactly one new tab (not one per marker):', openCalls.length === 1);
  console.log(
    'C13) it\'s a real native SceneQueue link with both markers\' own scene/time entries:',
    openCalls[0] === '/scenes/1?qs=1&qs=3&qt=30&qt=90&qi=0&autoplay=true&continue=true&t=30'
  );

  // --- A page's own filterHook (e.g. a Tag's "Markers" tab, constraining to that tag) is
  // re-applied here too, not silently dropped - see the comment on the before() hook itself.
  graphqlCalls.length = 0;
  const hookedProps = window.__filteredSceneMarkerListBeforeFn({ filterHook: (f) => { const h = f.clone(); h.taggedOnly = true; return h; } })[0];
  const hookedOp = hookedProps.extraOperations.find((o) => o.text === 'Play All (Filtered)');
  await hookedOp.onClick({}, makeMockFilter());
  const hookedCall = graphqlCalls.find((c) => c.name === 'FindSceneMarkers');
  console.log('C14) a page\'s own filterHook is applied before querying, not ignored:', !!hookedCall && hookedCall.variables.scene_marker_filter.taggedOnly === true);

  window.open = realOpen;
  window.sessionStorage.clear();

  const emotionCache = createEmotionCache({ key: 'css' });
  // SceneCard needs a real Router ancestor (GridCard's <Link>, and SceneCard's own
  // useHistory() for its scrubber click) - it always has one for real, registered via
  // PluginApi.register.route into the app's own top-level Router.
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

  const wholeWordCheckbox = container.querySelector('#subtitle-markers-whole-word');
  console.log('F6) "Match whole word only" checkbox is present and unchecked by default:', !!wholeWordCheckbox && wholeWordCheckbox.checked === false);

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
  console.log('P2) wholeWord defaults to "false" (unchecked) in the args sent:', searchCall.variables.args.wholeWord === 'false');

  // Checking "Match whole word only" and searching again sends wholeWord: "true" - then
  // unchecked again, so the rest of this test continues from the same default state.
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(wholeWordCheckbox, { target: { checked: true } });
  });
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(runButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  const wholeWordSearchCall = graphqlCalls.filter((c) => c.name === 'SubtitleMarkersSearch').pop();
  console.log('P3) checking it sends wholeWord: "true" on the next search:', !!wholeWordSearchCall && wholeWordSearchCall.variables.args.wholeWord === 'true');
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(wholeWordCheckbox, { target: { checked: false } });
    await new Promise((r) => setTimeout(r, 20));
  });
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
  console.log('S1) the cards row has a gap between cards:', container.querySelector('.subtitle-markers-result-cards').style.gap === '12px');
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
  // (/scenes/1, no timestamp) - clicking either must still open *this* result's own
  // timestamp in a new tab instead (not history.push - consistent with the plain result
  // links below the card, and with "Play All in Queue", both of which already open in a
  // new tab rather than navigating the search page itself away).
  const firstCardThumbnailLink = resultCards[0].querySelector('a.scene-card-link');
  console.log('S5) the underlying thumbnail link, unclicked, still points at the plain scene URL:', firstCardThumbnailLink.getAttribute('href') === '/scenes/1');

  const cardOpenCalls = [];
  const realOpenForCards = window.open;
  window.open = (url) => cardOpenCalls.push(url);

  await TestUtils.act(async () => {
    TestUtils.Simulate.click(firstCardThumbnailLink);
  });
  console.log(
    'S6) clicking the thumbnail opens this result\'s own timestamp in a new tab instead:',
    cardOpenCalls.length === 1 && cardOpenCalls[0] === '/scenes/1?t=12.5'
  );

  // A tag-count popover click (not a navigating link) must be left alone - not hijacked into
  // opening anything, since it isn't inside the thumbnail or title link at all.
  cardOpenCalls.length = 0;
  const tagCountButton = resultCards[0].querySelector('.tag-count button');
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(tagCountButton);
  });
  console.log('S7) clicking the tag-count popover (not a navigating link) does not open anything:', cardOpenCalls.length === 0);
  window.open = realOpenForCards;

  // ---------------------------------------------------------------------
  // "Play All in Queue" - builds a real native SceneQueue link (Stash core now understands a
  // per-entry start time, and the same scene id appearing more than once, natively) and opens
  // it in a new tab. Everything after that - position, Prev/Next, "Continue", seeking in
  // place for the same scene's next entry - is the native Queue tab's job now, not this
  // plugin's; nothing left here to test but that the right link gets opened.
  // ---------------------------------------------------------------------

  const playAllButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Play All in Queue');
  console.log('U) "Play All in Queue" button is shown with results:', !!playAllButton);

  const queueOpenCalls = [];
  const realOpenForQueue = window.open;
  window.open = (url) => queueOpenCalls.push(url);

  TestUtils.Simulate.click(playAllButton);
  console.log(
    // These 3 results include two hits in the same scene (1) - qs= can only ever list a
    // scene once (Stash's own backend rejects a literal duplicate id), so this is the
    // qs=(deduped)/qe=(index:start) encoding, not the simpler qt= one.
    'V) clicking it opens a real native SceneQueue link with no duplicate qs= entries, even with two hits in the same scene:',
    queueOpenCalls.length === 1 && queueOpenCalls[0] === '/scenes/1?qs=1&qs=2&qe=0:12.5&qe=0:40&qe=1:5&qi=0&autoplay=true&continue=true&t=12.5'
  );
  const vQsValues = new URLSearchParams(queueOpenCalls[0].split('?')[1]).getAll('qs');
  console.log('V2) qs= itself has no repeats - the actual thing the Stash backend rejects:', new Set(vQsValues).size === vQsValues.length);
  window.open = realOpenForQueue;

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
  console.log('J2) ...including wholeWord: "false" (left unchecked for this run):', runCall.variables.args_map.wholeWord === 'false');

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

  // ---------------------------------------------------------------------
  // "Subtitles" tab on the scene player (ScenePage.Tabs/ScenePage.TabContent) - exercised
  // directly against the captured before() hooks, with a real (mocked) <video>/TextTrack so
  // the cue list, click-to-seek and sync-offset mutation are all checked against the exact
  // objects the real player's native captions render from, not a parallel re-implementation.
  // ---------------------------------------------------------------------

  console.log('W) "ScenePage.Tabs"/"ScenePage.TabContent" patches registered:',
    typeof window.__scenePageTabsBeforeFn === 'function' && typeof window.__scenePageTabContentBeforeFn === 'function');

  const SUBTITLES_TAB_KEY = 'subtitle-markers-subtitles-tab';

  // A scene with no caption track at all - both patches must leave props completely
  // untouched (same reference back), not just "no visible change".
  const noCaptionScene = { id: '99', captions: [], paths: { caption: null } };
  const tabsPropsNoCaptions = { scene: noCaptionScene, children: [React.createElement('span', { key: 'x' }, 'x')] };
  const tabsResultNoCaptions = window.__scenePageTabsBeforeFn(tabsPropsNoCaptions);
  console.log('X) no Subtitles nav tab is added for a scene with no captions:', tabsResultNoCaptions[0] === tabsPropsNoCaptions);
  const tabContentPropsNoCaptions = { scene: noCaptionScene, children: [React.createElement('span', { key: 'x' }, 'x')] };
  const tabContentResultNoCaptions = window.__scenePageTabContentBeforeFn(tabContentPropsNoCaptions);
  console.log('X2) no Subtitles pane is added for a scene with no captions:', tabContentResultNoCaptions[0] === tabContentPropsNoCaptions);

  // A mock .video-js wrapper + inner <video> + TextTrack, standing in for the real player -
  // jsdom doesn't implement addTextTrack()/VTTCue, so tracks are supplied directly as plain
  // mock objects exposing the same shape findCaptionTrack/the panel's effects actually read
  // (kind/language/mode/cues/addEventListener), and plain {startTime,endTime,text} cues (the
  // panel only ever reads/mutates those 3 fields on a real VTTCue, never constructs one).
  //
  // Deliberately reached via the *.video-js wrapper's* own .player.textTracks(), never the
  // inner <video> tag's - confirmed against a real deployment that video.js's Html5 tech
  // clones the original tag via cloneNode() (a workaround for a Safari/iOS quirk), and
  // cloneNode() never copies custom JS properties like `.player`, so the <video> element
  // actually left in the DOM has lost it even though the wrapper's own `.player` (set once,
  // never replaced) is unaffected - this mock leaves the inner <video> with no `.player` at
  // all, the same as a real page, so this also doubles as the regression test for that exact
  // real-world bug.
  function makeMockCue(start, end, text) {
    return { startTime: start, endTime: end, text };
  }
  function makeMockTrack(kind, language, initialCues) {
    const listeners = {};
    return {
      kind,
      language,
      mode: 'disabled',
      cues: initialCues || null,
      addEventListener(ev, fn) { (listeners[ev] = listeners[ev] || []).push(fn); },
      removeEventListener(ev, fn) {
        if (listeners[ev]) listeners[ev] = listeners[ev].filter((f) => f !== fn);
      },
      _setCues(cues) {
        this.cues = cues;
        (listeners.loadeddata || []).slice().forEach((fn) => fn());
      },
    };
  }
  function setMockPlayerTracks(videoJs, tracks) {
    videoJs.player = { textTracks: () => tracks };
  }

  const videoJsEl = document.createElement('div');
  videoJsEl.className = 'video-js';
  const mockVideo = document.createElement('video');
  videoJsEl.appendChild(mockVideo);
  document.body.appendChild(videoJsEl);

  const enTrack = makeMockTrack('captions', 'en', [
    makeMockCue(10, 12, '<i>Hello</i> there'),
    makeMockCue(50, 52, 'World'),
  ]);
  setMockPlayerTracks(videoJsEl, [enTrack]);
  console.log(
    'W2) the mock inner <video> tag has no .player of its own (the real cloneNode() case) yet the track is still found via the .video-js wrapper:',
    mockVideo.player === undefined
  );

  const subtitleScene = {
    id: '42',
    captions: [{ language_code: 'en', caption_type: 'srt' }],
    paths: { caption: '/scene/42/caption' },
  };
  const setTimestampCalls = [];
  const setTimestampSpy = (value, autoPlay) => setTimestampCalls.push({ value, autoPlay });

  const existingNavItem = React.createElement(ReactBootstrap.Nav.Item, { key: 'existing-nav' }, React.createElement(ReactBootstrap.Nav.Link, { eventKey: 'details' }, 'Details'));
  const existingPane = React.createElement(ReactBootstrap.Tab.Pane, { key: 'existing-pane', eventKey: 'details' }, 'Details content');

  const tabsProps = { scene: subtitleScene, children: [existingNavItem] };
  const tabsResult = window.__scenePageTabsBeforeFn(tabsProps)[0];
  const tabContentProps = { scene: subtitleScene, setTimestamp: setTimestampSpy, children: [existingPane] };
  const tabContentResult = window.__scenePageTabContentBeforeFn(tabContentProps)[0];

  console.log('Y) a real captioned scene keeps the existing nav tab(s), adding a new one:', React.Children.toArray(tabsResult.children).length === 2);
  console.log('Y2) a real captioned scene keeps the existing pane(s), adding a new one:', React.Children.toArray(tabContentResult.children).length === 2);

  const subContainer = document.createElement('div');
  document.body.appendChild(subContainer);

  await TestUtils.act(async () => {
    ReactDOM.render(
      React.createElement(
        ReactBootstrap.Tab.Container,
        { activeKey: SUBTITLES_TAB_KEY },
        React.createElement(ReactBootstrap.Nav, null, tabsResult.children),
        React.createElement(ReactBootstrap.Tab.Content, null, tabContentResult.children)
      ),
      subContainer
    );
    await new Promise((r) => setTimeout(r, 20));
  });

  console.log('Z) the new nav link is labeled "Subtitles":', Array.from(subContainer.querySelectorAll('.nav-link')).some((a) => a.textContent === 'Subtitles'));
  console.log('Z1) the panel renders the real track\'s cues, VTT tags stripped:', subContainer.textContent.includes('Hello there') && !subContainer.textContent.includes('<i>'));
  console.log('Z2) each cue shows its formatted start timestamp:', subContainer.textContent.includes('0:10') && subContainer.textContent.includes('0:50'));
  console.log('Z3) the (previously disabled) track was switched to "hidden" so the browser actually loads it:', enTrack.mode === 'hidden');
  console.log('Z4) a single caption track shows no language selector:', !subContainer.querySelector('select'));

  // Clicking a cue seeks the real player, autoplaying through the jump (continuing the same
  // way a queue advance does), not just scrolling a list.
  const cueEls = Array.from(subContainer.querySelectorAll('.subtitle-markers-subtitles-cue'));
  console.log('Z5) one list entry per real cue:', cueEls.length === 2);
  setTimestampCalls.length = 0;
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(cueEls[1]);
  });
  console.log('AA) clicking a cue seeks+autoplays to its exact (un-offset) start time:', setTimestampCalls.length === 1 && setTimestampCalls[0].value === 50 && setTimestampCalls[0].autoPlay === true);

  // The sync offset actually mutates the real cue objects the player renders from - not just
  // what this list displays - and persists per scene+language+type.
  const minusOneButton = Array.from(subContainer.querySelectorAll('button')).find((b) => b.textContent === '-1s');
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(minusOneButton);
  });
  console.log('AB) "-1s" mutates the real cue\'s startTime/endTime (not just a display value):', enTrack.cues[0].startTime === 9 && enTrack.cues[0].endTime === 11);
  console.log('AC) ...leaving the other real cue shifted the same way:', enTrack.cues[1].startTime === 49);
  console.log('AD) the list itself reflects the shifted time too:', subContainer.textContent.includes('0:09'));

  let storedOffset = null;
  try {
    storedOffset = window.localStorage.getItem('subtitleMarkersOffset:42:en:srt');
  } catch {}
  console.log('AE) the offset is persisted to localStorage under a scene+language+type key:', storedOffset === '-1');

  const resetButton = Array.from(subContainer.querySelectorAll('button')).find((b) => b.textContent === 'Reset');
  console.log('AF) a "Reset" control appears once the offset is non-zero:', !!resetButton);
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(resetButton);
  });
  console.log('AG) "Reset" puts the real cue back to its original, un-offset time:', enTrack.cues[0].startTime === 10);

  ReactDOM.unmountComponentAtNode(subContainer);
  subContainer.remove();

  // Reopening the same scene (a fresh mount) picks the persisted offset back up and applies
  // it to the (freshly-created) track's cues immediately, with no further clicks.
  try {
    window.localStorage.setItem('subtitleMarkersOffset:42:en:srt', '2');
  } catch {}
  const enTrack2 = makeMockTrack('captions', 'en', [makeMockCue(10, 12, 'Hello there'), makeMockCue(50, 52, 'World')]);
  setMockPlayerTracks(videoJsEl, [enTrack2]);

  const tabContentResult2 = window.__scenePageTabContentBeforeFn({ scene: subtitleScene, setTimestamp: setTimestampSpy, children: [] })[0];
  const subContainer2 = document.createElement('div');
  document.body.appendChild(subContainer2);
  await TestUtils.act(async () => {
    ReactDOM.render(
      React.createElement(ReactBootstrap.Tab.Container, { activeKey: SUBTITLES_TAB_KEY }, React.createElement(ReactBootstrap.Tab.Content, null, tabContentResult2.children)),
      subContainer2
    );
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('AH) reopening the scene re-applies the remembered offset to the real cues automatically:', enTrack2.cues[0].startTime === 12 && enTrack2.cues[1].startTime === 52);
  ReactDOM.unmountComponentAtNode(subContainer2);
  subContainer2.remove();

  // A scene with more than one caption track shows a language picker, and switching it swaps
  // which real TextTrack's cues are shown.
  try { window.localStorage.removeItem('subtitleMarkersOffset:42:en:srt'); } catch {}
  try { window.localStorage.removeItem('subtitleMarkersOffset:42:pt:srt'); } catch {}
  const ptTrack = makeMockTrack('captions', 'pt', [makeMockCue(5, 7, 'Ola mundo')]);
  const enTrack3 = makeMockTrack('captions', 'en', [makeMockCue(10, 12, 'Hello there')]);
  setMockPlayerTracks(videoJsEl, [enTrack3, ptTrack]);

  const multiScene = {
    id: '42',
    captions: [{ language_code: 'en', caption_type: 'srt' }, { language_code: 'pt', caption_type: 'srt' }],
    paths: { caption: '/scene/42/caption' },
  };
  const multiTabContentResult = window.__scenePageTabContentBeforeFn({ scene: multiScene, setTimestamp: setTimestampSpy, children: [] })[0];
  const subContainer3 = document.createElement('div');
  document.body.appendChild(subContainer3);
  await TestUtils.act(async () => {
    ReactDOM.render(
      React.createElement(ReactBootstrap.Tab.Container, { activeKey: SUBTITLES_TAB_KEY }, React.createElement(ReactBootstrap.Tab.Content, null, multiTabContentResult.children)),
      subContainer3
    );
    await new Promise((r) => setTimeout(r, 20));
  });
  const langSelect = subContainer3.querySelector('select');
  console.log('AI) two caption tracks show a language selector:', !!langSelect && langSelect.options.length === 2);
  console.log('AJ) it defaults to the first language\'s real cues:', subContainer3.textContent.includes('Hello there') && !subContainer3.textContent.includes('Ola mundo'));
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(langSelect, { target: { value: '1' } });
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('AK) switching language swaps to that real track\'s own cues:', subContainer3.textContent.includes('Ola mundo') && !subContainer3.textContent.includes('Hello there'));
  ReactDOM.unmountComponentAtNode(subContainer3);
  subContainer3.remove();

  // A track whose cues aren't loaded yet (the common real-player case - cues are empty until
  // something forces the browser to actually fetch/parse the VTT) shows a loading state, then
  // picks the cues up once the browser's own "load" event fires - not a fixed poll alone.
  const lazyTrack = makeMockTrack('captions', 'en', null);
  setMockPlayerTracks(videoJsEl, [lazyTrack]);
  const lazyScene = { id: '77', captions: [{ language_code: 'en', caption_type: 'vtt' }], paths: { caption: '/scene/77/caption' } };
  const lazyTabContentResult = window.__scenePageTabContentBeforeFn({ scene: lazyScene, setTimestamp: setTimestampSpy, children: [] })[0];
  const subContainer4 = document.createElement('div');
  document.body.appendChild(subContainer4);
  await TestUtils.act(async () => {
    ReactDOM.render(
      React.createElement(ReactBootstrap.Tab.Container, { activeKey: SUBTITLES_TAB_KEY }, React.createElement(ReactBootstrap.Tab.Content, null, lazyTabContentResult.children)),
      subContainer4
    );
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('AL) a track with no cues loaded yet shows a loading state instead of "no cues":', subContainer4.textContent.includes('Loading subtitles'));
  await TestUtils.act(async () => {
    lazyTrack._setCues([makeMockCue(3, 4, 'Just loaded')]);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('AM) once the track\'s "load" event fires, its cues appear:', subContainer4.textContent.includes('Just loaded'));
  ReactDOM.unmountComponentAtNode(subContainer4);
  subContainer4.remove();
}

run().then(() => process.exit(0)).catch((e) => { console.error('FATAL', e); process.exit(1); });

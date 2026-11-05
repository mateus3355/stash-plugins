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

  // The plugin's own plain-fetch GraphQL calls (runPluginTask / findJob) - separate from
  // the Apollo client above, which TagIDSelect and the Configuration query use instead.
  // Simulates a job that reports RUNNING once, then FINISHED.
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
    patch: { before: (name, fn) => { if (name === 'MainNavBar.MenuItems') window.__navBeforeFn = fn; } },
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

  const emotionCache = createEmotionCache({ key: 'css' });
  function Shell({ children }) {
    return React.createElement(
      EmotionCacheProvider,
      { value: emotionCache },
      React.createElement(
        ReactIntl.IntlProvider,
        { locale: 'en', messages: {}, onError: () => {} },
        React.createElement(Apollo.ApolloProvider, { client: apolloClient }, children)
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
  const titleInput = Array.from(container.querySelectorAll('input[type="text"]')).find((i) => i.placeholder.includes('Marker title'));
  console.log('E) path (real FolderSelect)/search/title inputs present:', !!pathInput && !!searchInput && !!titleInput);
  console.log('F) real TagIDSelect (react-select) rendered:', !!container.querySelector('.tag-select, [class*="-control"]'));
  console.log('F2) real FolderSelect shows the library path as a starting point:', container.textContent.includes('/lib'));

  const runButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent.includes('Search & Create Markers'));
  console.log('G) Run button starts disabled (no path/search/tag filled yet):', runButton.disabled === true);

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

  // Pick the tag through the real react-select control, the same way a user would: type to
  // search (its options load async via loadOptions, debounced 100ms), then click the result.
  const tagSelectInput = container.querySelector('.tag-select input, [class*="-control"] input');
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

  console.log('I) Run button enabled once path/search/tag are filled:', runButton.disabled === false);

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

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
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
  window.requestAnimationFrame = global.requestAnimationFrame;
  window.matchMedia = window.matchMedia || function () {
    return { matches: false, media: '', onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; } };
  };
  // Controllable from the test below: Clear asks for confirmation first via window.confirm,
  // which jsdom doesn't implement on its own.
  let confirmReturnValue = true;
  window.confirm = () => confirmReturnValue;
  global.IntersectionObserver = window.IntersectionObserver = class {
    observe() {} unobserve() {} disconnect() {} takeRecords() { return []; }
  };

  const React = require('react');
  const ReactDOM = require('react-dom');
  const TestUtils = require('react-dom/test-utils');
  const ReactBootstrap = require('react-bootstrap');
  const ReactIntl = require('react-intl');
  const ReactRouterDOM = require('react-router-dom');
  const Apollo = require('@apollo/client');
  const FontAwesomeSolid = require('@fortawesome/free-solid-svg-icons');
  const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');

  // Simulates the real transcriber.service: RUNNING at first, then stopped once "Stop" is
  // clicked - and a status.json/failed.json shape matching the real transcriber.py's output.
  let serviceActive = 'active';
  const statusJson = {
    state: 'transcribing',
    current_file: 'Amadores/one.mp4',
    file_progress_pct: 42.5,
    files_done: 3,
    files_total: 10,
    files_failed: 1,
    overall_progress_pct: 30.0,
    audio_hours_transcribed: 1.25,
  };
  const failedJson = { count: 1, recent: [{ path: '/lib/A/silent.mp4', error: 'NoAudio: video has no audio stream', when: '2026-01-01T00:00:00' }] };
  // The currently configured folder/language - what plugin.py's get_current_config() would
  // parse back out of the real transcriber.service unit file.
  let serviceConfig = { inputDir: '/lib/A', language: 'en' };

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

  // The library's filesystem, for FolderSelect's own Directory query to browse.
  const directories = {
    '': { path: '', parent: null, directories: ['/lib'] },
    '/lib': { path: '/lib', parent: '', directories: ['/lib/A', '/lib/B'] },
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
  const apolloClient = new Apollo.ApolloClient({ link: apolloLink, cache: new Apollo.InMemoryCache() });

  const graphqlCalls = [];
  window.fetch = function (url, opts) {
    const body = JSON.parse(opts.body);
    const name = body.operationName || /\b(mutation|query)\s+(\w+)/.exec(body.query)[2];
    graphqlCalls.push({ name, variables: body.variables });
    if (name !== 'TranscriberOperation') {
      return Promise.reject(new Error('unhandled fetch: ' + body.query));
    }
    const mode = body.variables.args.mode;
    let data;
    if (mode === 'status') {
      data = { runPluginOperation: { status: statusJson, failed: failedJson, serviceActive, config: serviceConfig } };
    } else if (mode === 'start' || mode === 'restart') {
      serviceActive = 'active';
      data = { runPluginOperation: { ok: true } };
    } else if (mode === 'stop') {
      serviceActive = 'inactive';
      data = { runPluginOperation: { ok: true } };
    } else if (mode === 'configure') {
      serviceConfig = { inputDir: body.variables.args.inputDir, language: body.variables.args.language };
      data = { runPluginOperation: { ok: true, config: serviceConfig } };
    } else if (mode === 'clear') {
      for (const k of Object.keys(statusJson)) delete statusJson[k];
      failedJson.count = 0;
      failedJson.recent = [];
      serviceActive = 'active';
      data = { runPluginOperation: { ok: true } };
    } else {
      return Promise.resolve({ json: () => Promise.resolve({ errors: [{ message: 'unknown mode: ' + mode }] }) });
    }
    return Promise.resolve({ json: () => Promise.resolve({ data }) });
  };

  window.PluginApi = {
    React, ReactDOM,
    libraries: {
      ReactRouterDOM, Bootstrap: ReactBootstrap, Apollo, Intl: ReactIntl,
      FontAwesomeSolid, ReactFontAwesome: { FontAwesomeIcon },
    },
    register: { route: (path, component) => { window.__registeredPath = path; window.__registeredComponent = component; } },
    patch: { before: (name, fn) => { if (name === 'MainNavBar.MenuItems') window.__navBeforeFn = fn; } },
  };

  // Tests the actual deployed file (plugins/transcriber/transcriber.js), not a local dist/
  // copy, so a `build` that wasn't followed by `test` can't silently leave a stale bundle
  // looking "tested" (same discipline as the other plugins built this session).
  const code = fs.readFileSync(__dirname + '/../../transcriber.js', 'utf8');
  window.eval(code);

  console.log('A) route registered at /transcriber:', window.__registeredPath === '/transcriber');
  console.log('B) nav patch registered:', typeof window.__navBeforeFn === 'function');

  const navResult = window.__navBeforeFn({ children: [React.createElement('span', { className: 'native' }, 'native')] });
  console.log('C) nav patch did not throw, returned props array:', Array.isArray(navResult));

  const navContainer = document.createElement('div');
  await TestUtils.act(async () => {
    ReactDOM.render(
      React.createElement(ReactRouterDOM.MemoryRouter, null, React.createElement(ReactBootstrap.Nav, null, navResult[0].children)),
      navContainer
    );
  });
  console.log('C2) nav link label is "Transcriber":', navContainer.textContent.trim() === 'nativeTranscriber');

  function Shell({ children }) {
    return React.createElement(
      ReactIntl.IntlProvider,
      { locale: 'en', messages: {}, onError: () => {} },
      React.createElement(Apollo.ApolloProvider, { client: apolloClient }, children)
    );
  }

  const Page = window.__registeredComponent;
  const container = document.createElement('div');
  document.body.appendChild(container);

  let renderError = null;
  try {
    await TestUtils.act(async () => {
      ReactDOM.render(React.createElement(Shell, null, React.createElement(ReactRouterDOM.MemoryRouter, null, React.createElement(Page))), container);
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

  const statusCall = graphqlCalls.find((c) => c.name === 'TranscriberOperation' && c.variables.args.mode === 'status');
  console.log('E) polled status on mount:', !!statusCall && statusCall.variables.plugin_id === 'transcriber');
  console.log('F) shows the service badge:', container.textContent.includes('active'));
  console.log('G) shows the current state and file:', container.textContent.includes('transcribing') && container.textContent.includes('Amadores/one.mp4'));
  console.log('H) shows a progress bar for the current file:', !!container.querySelector('.progress-bar'));
  console.log('I) shows overall done/total counts:', container.textContent.includes('3 / 10') && container.textContent.includes('1 failed'));
  console.log('J) shows the failed file and its error:', container.textContent.includes('/lib/A/silent.mp4') && container.textContent.includes('NoAudio'));

  // --- Stop ---
  const stopButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Stop');
  graphqlCalls.length = 0;
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(stopButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  const stopCall = graphqlCalls.find((c) => c.variables.args.mode === 'stop');
  console.log('K) clicking Stop called runPluginOperation with mode "stop":', !!stopCall);
  console.log('L) the service badge reflects the new state after stopping:', container.textContent.includes('inactive'));

  // --- Start again ---
  const startButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Start');
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(startButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('M) the service badge reflects "active" again after starting:', container.textContent.includes('active') && !container.textContent.includes('inactive'));

  // --- A failed control action surfaces its error, not a crash ---
  const previousFetch = window.fetch;
  window.fetch = function (url, opts) {
    const body = JSON.parse(opts.body);
    if (/TranscriberOperation/.test(body.query) && body.variables.args.mode === 'restart') {
      return Promise.resolve({ json: () => Promise.resolve({ errors: [{ message: 'sudo: a password is required' }] }) });
    }
    return previousFetch(url, opts);
  };
  const restartButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Restart');
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(restartButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('N) a failed control action shows its error instead of crashing:', container.textContent.includes('sudo: a password is required'));
  window.fetch = previousFetch;

  // --- Keeps polling on its own (not just after a button click) ---
  statusJson.files_done = 4;
  await new Promise((r) => setTimeout(r, 3100));
  console.log('O) status keeps refreshing on its own poll interval:', container.textContent.includes('4 / 10'));

  // --- Clear status & logs - declining the confirmation does nothing ---
  confirmReturnValue = false;
  let clearButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Clear Status & Logs');
  graphqlCalls.length = 0;
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(clearButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('O2) declining the confirmation does not call runPluginOperation:', !graphqlCalls.some((c) => c.variables.args.mode === 'clear'));
  console.log('O3) the failed file is still shown (nothing cleared):', container.textContent.includes('/lib/A/silent.mp4'));

  // --- Clear status & logs - confirming clears status/failed and restarts ---
  confirmReturnValue = true;
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(clearButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  const clearCall = graphqlCalls.find((c) => c.variables.args.mode === 'clear');
  console.log('O4) confirming Clear called runPluginOperation with mode "clear":', !!clearCall && clearCall.variables.plugin_id === 'transcriber');
  console.log('O5) the failed-file list is gone after clearing:', !container.textContent.includes('/lib/A/silent.mp4') && !container.textContent.includes('failed file'));
  console.log('O6) the current-file progress is gone after clearing:', !container.textContent.includes('Amadores/one.mp4'));

  // ---------------------------------------------------------------------
  // Folder/language picker - the real FolderSelect, seeded from the service's own config.
  // ---------------------------------------------------------------------

  const pathInput = container.querySelector('.transcriber-folder input');
  console.log('P) real FolderSelect is shown for the watched folder:', !!pathInput);
  console.log('Q) it is seeded with the currently configured folder, not blank:', pathInput.value === '/lib/A');

  const languageSelect = container.querySelector('.transcriber-language select');
  console.log('R) language dropdown is seeded with the currently configured language:', !!languageSelect && languageSelect.value === 'en');

  let applyButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Apply');
  console.log('S) Apply starts disabled - nothing changed yet:', !!applyButton && applyButton.disabled === true);

  function folderTile(label) {
    return Array.from(container.querySelectorAll('.folder-list-item button')).find((b) => b.textContent.trim() === label);
  }
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(folderTile('/lib'));
    await new Promise((r) => setTimeout(r, 20));
  });
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(folderTile('/lib/B'));
  });
  console.log('T) navigating the real folder browser updates the picker input:', pathInput.value === '/lib/B');

  applyButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Apply');
  console.log('U) Apply becomes enabled once the folder actually changed:', applyButton.disabled === false);

  graphqlCalls.length = 0;
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(applyButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  const configureCall = graphqlCalls.find((c) => c.variables.args.mode === 'configure');
  console.log(
    'V) clicking Apply called runPluginOperation with mode "configure" and the new folder:',
    !!configureCall && configureCall.variables.plugin_id === 'transcriber' && configureCall.variables.args.inputDir === '/lib/B' && configureCall.variables.args.language === 'en'
  );
  console.log('W) shows a confirmation after applying:', container.textContent.includes('watching this folder'));

  applyButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Apply');
  console.log('X) Apply goes back to disabled once applied (form matches the new config again):', applyButton.disabled === true);

  // --- A failed configure call surfaces its error, not a crash ---
  const fetchBeforeFailure = window.fetch;
  window.fetch = function (url, opts) {
    const body = JSON.parse(opts.body);
    if (/TranscriberOperation/.test(body.query) && body.variables.args.mode === 'configure') {
      return Promise.resolve({ json: () => Promise.resolve({ errors: [{ message: 'ERROR: folder not found: /lib/C' }] }) });
    }
    return fetchBeforeFailure(url, opts);
  };
  await TestUtils.act(async () => {
    // FolderSelect's input reads e.currentTarget.value (not e.target.value) - React's
    // TestUtils.Simulate only overrides the synthetic event's `target`, not `currentTarget`
    // (which stays bound to the real node), so the node's own value has to be set directly.
    pathInput.value = '/lib/C';
    TestUtils.Simulate.change(pathInput);
  });
  applyButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Apply');
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(applyButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('Y) a failed configure call shows its error instead of crashing:', container.textContent.includes('folder not found: /lib/C'));
  window.fetch = fetchBeforeFailure;
}

run().then(() => process.exit(0)).catch((e) => { console.error('FATAL', e); process.exit(1); });

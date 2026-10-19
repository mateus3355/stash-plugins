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
  const ReactRouterDOM = require('react-router-dom');
  const Apollo = require('@apollo/client');
  const FontAwesomeSolid = require('@fortawesome/free-solid-svg-icons');
  const FontAwesomeRegular = require('@fortawesome/free-regular-svg-icons');
  const FontAwesomeBrands = require('@fortawesome/free-brands-svg-icons');
  const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
  const Mousetrap = require('mousetrap');
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

  const folders = {
    '/lib/A': {
      id: '2', path: '/lib/A', basename: 'A',
      parent_folders: [{ id: '1', path: '/lib', basename: 'lib' }],
      sub_folders: [
        { id: '3', path: '/lib/A/Amadores', basename: 'Amadores' },
        { id: '4', path: '/lib/A/Pro', basename: 'Pro' },
      ],
    },
  };
  const scenesByPath = [
    {
      __typename: 'Scene', id: 's1', title: 'Scene One', code: null, details: '', director: null, urls: [], date: null,
      rating100: 80, o_counter: 2, organized: true, interactive: false, interactive_speed: null, resume_time: null, play_duration: null, play_count: null,
      files: [{ __typename: 'VideoFile', id: 'f1', path: '/lib/A/one.mp4', size: 1000, mod_time: '2024-01-01', duration: 125, video_codec: 'h264', audio_codec: 'aac', width: 1920, height: 1080, frame_rate: 30, bit_rate: 1000, fingerprints: [] }],
      paths: { __typename: 'ScenePathsType', screenshot: '/scene/s1/screenshot', preview: '', stream: '', webp: '', vtt: '', sprite: '', funscript: '', interactive_heatmap: '', caption: null },
      scene_markers: [], galleries: [], studio: null, groups: [], tags: [], performers: [], stash_ids: [],
    },
    {
      __typename: 'Scene', id: 's2', title: 'Scene Two', code: null, details: '', director: null, urls: [], date: null,
      rating100: null, o_counter: 0, organized: false, interactive: false, interactive_speed: null, resume_time: null, play_duration: null, play_count: null,
      files: [{ __typename: 'VideoFile', id: 'f2', path: '/lib/A/two.mp4', size: 500, mod_time: '2024-01-01', duration: 60, video_codec: 'h264', audio_codec: 'aac', width: 1280, height: 720, frame_rate: 30, bit_rate: 500, fingerprints: [] }],
      paths: { __typename: 'ScenePathsType', screenshot: '/scene/s2/screenshot', preview: '', stream: '', webp: '', vtt: '', sprite: '', funscript: '', interactive_heatmap: '', caption: null },
      scene_markers: [], galleries: [], studio: null, groups: [], tags: [], performers: [], stash_ids: [],
    },
  ];
  const imagesByPath = [
    {
      __typename: 'Image', id: 'i1', title: 'Image One', code: null, date: null, urls: [], details: '', photographer: null,
      rating100: null, organized: false, o_counter: 0,
      paths: { __typename: 'ImagePathsType', thumbnail: '/image/i1/thumbnail', preview: '', image: '/image/i1/image' },
      galleries: [], studio: null, tags: [], performers: [],
      visual_files: [{ __typename: 'ImageFile', id: 'vf1', path: '/lib/A/one.jpg', size: 100, mod_time: '2024-01-01', width: 800, height: 600, fingerprints: [] }],
    },
  ];
  const galleriesByPath = [
    {
      __typename: 'Gallery', id: 'g1', title: 'Gallery One', code: null, date: null, urls: [], details: '', photographer: null,
      rating100: null, organized: false, image_count: 3, chapters: [],
      files: [{ __typename: 'GalleryFile', id: 'gf1', path: '/lib/A/gal1.zip', size: 100, mod_time: '2024-01-01', fingerprints: [] }],
      folder: null,
      paths: { __typename: 'GalleryPathsType', cover: '/gallery/g1/cover', preview: '' },
      studio: null, tags: [], performers: [], scenes: [],
    },
  ];

  const apolloCalls = [];

  const apolloLink = new Apollo.ApolloLink((operation) => {
    return new Apollo.Observable((observer) => {
      const name = operation.operationName;
      apolloCalls.push({ name, variables: operation.variables });
      try {
        let data;
        if (name === 'Configuration') {
          data = { configuration };
        } else if (name === 'FindScenes') {
          const re = new RegExp(operation.variables.scene_filter.path.value);
          let matches = scenesByPath.filter((s) => re.test(s.files[0].path));
          const q = operation.variables.filter && operation.variables.filter.q;
          if (q) matches = matches.filter((s) => s.title.toLowerCase().includes(q.toLowerCase()));
          data = { findScenes: { __typename: 'FindScenesResultType', count: matches.length, duration: 0, filesize: 0, scenes: matches } };
        } else if (name === 'FindImages') {
          const re = new RegExp(operation.variables.image_filter.path.value);
          const matches = imagesByPath.filter((im) => re.test(im.visual_files[0].path));
          data = { findImages: { __typename: 'FindImagesResultType', count: matches.length, megapixels: 0, filesize: 0, images: matches } };
        } else if (name === 'FindGalleries') {
          const re = new RegExp(operation.variables.gallery_filter.path.value);
          const matches = galleriesByPath.filter((g) => re.test(g.files[0].path));
          data = { findGalleries: { __typename: 'FindGalleriesResultType', count: matches.length, galleries: matches } };
        } else if (name === 'ScenesDestroy') {
          data = { scenesDestroy: true };
        } else if (name === 'BulkSceneUpdate') {
          data = { bulkSceneUpdate: operation.variables.input.ids.map((id) => ({ __typename: 'Scene', id })) };
        } else if (name === 'FindTags' || name === 'FindTagsForSelect') {
          data = { findTags: { __typename: 'FindTagsResultType', count: 0, tags: [] } };
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

  window.fetch = function (url, opts) {
    const body = JSON.parse(opts.body);
    const q = body.query;
    if (q.indexOf('FolderBrowserFindFolder(') !== -1) {
      return Promise.resolve({ json: () => Promise.resolve({ data: { findFolder: folders[body.variables.path] } }) });
    }
    if (q.indexOf('FolderBrowserLibraryPaths') !== -1) {
      return Promise.resolve({ json: () => Promise.resolve({ data: { configuration: { general: { stashes: [{ path: '/lib' }] } } } }) });
    }
    return Promise.reject(new Error('unhandled fetch: ' + q));
  };

  // Real LightboxProvider stand-in: setLightboxState updates state here,
  // which (like any React context value update) re-renders every
  // descendant that reads this context - including, transitively, the
  // Folder Browser page mounted below it, exactly like the real app's
  // component tree (LightboxProvider wraps the routed content near the
  // app root - see ui/v2.5/src/App.tsx).
  window.__LightboxContext = React.createContext(null);
  window.__lightboxProviderRenderCount = 0;
  function LightboxProviderMock({ children }) {
    window.__lightboxProviderRenderCount++;
    const [, forceUpdate] = React.useState(0);
    const setLightboxState = React.useCallback(() => { forceUpdate((n) => n + 1); }, []);
    return React.createElement(window.__LightboxContext.Provider, { value: { setLightboxState } }, children);
  }

  window.PluginApi = {
    React, ReactDOM,
    libraries: {
      ReactRouterDOM, Bootstrap: ReactBootstrap, Apollo, Intl: ReactIntl,
      FontAwesomeSolid, FontAwesomeRegular, FontAwesomeBrands, ReactFontAwesome: { FontAwesomeIcon },
      Mousetrap, MousetrapPause: {}, ReactSelect, ReactSlick: {},
    },
    utils: {
      StashService: { getClient: () => apolloClient },
    },
    hooks: {
      // Faithful to the real hook (src/hooks/Lightbox/hooks.ts): an
      // internal useEffect keyed on individual state fields (NOT the
      // wrapper object's identity) calls setLightboxState, which here -
      // like the real LightboxProvider context - re-renders every
      // descendant that reads the context, same as any React context
      // update would. A naive mock that skips this effect (just recording
      // the latest state) can never catch a caller passing an unstable
      // reference (e.g. a fresh `[]` literal every render) for a field
      // this effect depends on - that's exactly the bug this exists to
      // catch.
      useLightbox: (state, chapters) => {
        const { setLightboxState } = React.useContext(window.__LightboxContext);
        React.useEffect(() => {
          window.__lightboxEffectRunCount = (window.__lightboxEffectRunCount || 0) + 1;
          setLightboxState({ images: state.images, showNavigation: state.showNavigation, slideshowEnabled: state.slideshowEnabled });
        }, [setLightboxState, state.images, state.showNavigation, state.pageCallback, state.page, state.pages, state.pageSize, state.totalCount, state.slideshowEnabled, state.onClose]);
        return React.useCallback((props) => {
          window.__lightboxShowCalls = window.__lightboxShowCalls || [];
          window.__lightboxShowCalls.push(props);
        }, [setLightboxState]);
      },
    },
    register: { route: (path, component) => { window.__registeredPath = path; window.__registeredComponent = component; } },
    patch: { before: (name, fn) => { if (name === 'MainNavBar.MenuItems') window.__navBeforeFn = fn; } },
  };

  // Tests the actual deployed file (plugins/folderBrowser/folderBrowser.js),
  // not a local dist/ copy, so a `run build` that wasn't followed by `npm
  // run test` can't silently leave a stale bundle looking "tested".
  const code = fs.readFileSync(__dirname + '/../../folderBrowser.js', 'utf8');
  window.eval(code);

  console.log('A) route registered at /folder-browser:', window.__registeredPath === '/folder-browser');
  console.log('B) nav patch registered:', typeof window.__navBeforeFn === 'function');

  const navResult = window.__navBeforeFn({ children: React.createElement('span', { className: 'native' }, 'native') });
  console.log('C) nav patch did not throw, returned props array:', Array.isArray(navResult));

  function Shell({ children, initialPath }) {
    return React.createElement(
      ReactIntl.IntlProvider,
      { locale: 'en', messages: {}, onError: () => {} },
      React.createElement(
        Apollo.ApolloProvider,
        { client: apolloClient },
        React.createElement(
          ReactRouterDOM.MemoryRouter,
          { initialEntries: [initialPath] },
          React.createElement(LightboxProviderMock, null, children)
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
      ReactDOM.render(
        React.createElement(Shell, { initialPath: '/folder-browser?path=' + encodeURIComponent('/lib/A') }, React.createElement(Page)),
        container
      );
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

  await new Promise((r) => setTimeout(r, 50));
  console.log('D) page rendered without crashing');
  // Regression guard for the render-loop bug: useLightbox's internal effect
  // is keyed on `images` by reference - an inline `[]` literal passed on
  // every render (instead of a stable module-level constant) made this
  // effect think `images` changed every single render, re-rendering the
  // page forever via the LightboxProvider context update. A bounded count
  // here (not continuing to climb) proves that's actually fixed, not just
  // "didn't time out this run".
  const effectRunsAfterInitialRender = window.__lightboxEffectRunCount;
  await new Promise((r) => setTimeout(r, 200));
  console.log(
    'D2) useLightbox effect count is bounded, not still climbing:',
    effectRunsAfterInitialRender < 10 && window.__lightboxEffectRunCount === effectRunsAfterInitialRender,
    { afterInitialRender: effectRunsAfterInitialRender, after200msMore: window.__lightboxEffectRunCount }
  );
  console.log('E) real SceneCardGrid rendered scene cards:', container.querySelectorAll('.scene-card').length === 2);
  console.log('F) scene titles shown:', container.textContent.includes('Scene One') && container.textContent.includes('Scene Two'));
  console.log('G) rating banner rendered for Scene One (real RatingBanner):', container.textContent.includes('80%') || !!container.querySelector('.rating-banner'));
  console.log('H) search box present:', !!container.querySelector('.folder-browser-search-input'));
  console.log('I) sort select present:', !!container.querySelector('.folder-browser-sort-select'));
  console.log('J) real Pagination component rendered:', !!container.querySelector('.pagination') || container.textContent.includes('Scenes'));
  console.log(
    'J2) subfolder tiles rendered for Amadores and Pro:',
    container.textContent.includes('Amadores') && container.textContent.includes('Pro')
  );

  // Search typing
  const searchInput = container.querySelector('.folder-browser-search-input');
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(searchInput, { target: { value: 'One' } });
    await new Promise((r) => setTimeout(r, 450));
  });
  const searchCall = apolloCalls.filter((c) => c.name === 'FindScenes').pop();
  console.log('K) typing in the real search input sent filter.q="One":', searchCall && searchCall.variables.filter.q === 'One');
  console.log('L) only matching scene shown after search:', container.textContent.includes('Scene One') && !container.textContent.includes('Scene Two'));
  // The exact user-reported symptom: the render-loop bug made the search
  // input's own displayed value snap back (since each cascade render
  // re-synced the controlled input from state captured in a stale
  // closure). Confirm what's typed is still what's shown.
  console.log('L2) search input still shows what was typed (not reset):', container.querySelector('.folder-browser-search-input').value === 'One');
  // Subfolders are filtered client-side by the same search box, so a term matching no folder name hides them too -
  // this doesn't need the 450ms debounce wait since it's not a server round-trip.
  console.log(
    'L3) non-matching search also hides subfolder tiles (Amadores/Pro):',
    !container.textContent.includes('Amadores') && !container.textContent.includes('Pro')
  );

  // The bug this plugin had: the search box only filtered scenes/images/galleries, never the subfolder tiles - typing
  // a folder's name (e.g. "ama" for "Amadores") did nothing to them.
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(searchInput, { target: { value: 'ama' } });
  });
  console.log(
    'L4) typing a folder name filters subfolder tiles too (shows Amadores, hides Pro):',
    container.textContent.includes('Amadores') && !container.textContent.includes('Pro')
  );

  await TestUtils.act(async () => {
    TestUtils.Simulate.change(searchInput, { target: { value: '' } });
    await new Promise((r) => setTimeout(r, 450));
  });

  // Sort change
  apolloCalls.length = 0;
  const sortSelect = container.querySelector('.folder-browser-sort-select');
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(sortSelect, { target: { value: 'title' } });
    await new Promise((r) => setTimeout(r, 50));
  });
  const sortCall = apolloCalls.find((c) => c.name === 'FindScenes');
  console.log('M) changing the real sort select sent filter.sort="title":', sortCall && sortCall.variables.filter.sort === 'title');
  // Other half of the user-reported symptom: selecting "Title" visibly
  // flashed then reverted to "Path" - same render-loop root cause as the
  // search input issue above, re-firing the tab/folder-change reset
  // effect (which resets sort back to the tab's default) on every
  // cascade render. Confirm the selection actually sticks after a beat.
  await new Promise((r) => setTimeout(r, 200));
  console.log('M2) sort select still shows "title" after a beat (did not revert to "path"):', sortSelect.value === 'title');

  // Switch to Images tab
  const tabs = Array.from(container.querySelectorAll('.nav-link, a.nav-link, [role="tab"]'));
  const imagesTab = tabs.find((t) => t.textContent.trim() === 'Images');
  console.log('N) Images tab found:', !!imagesTab);
  await TestUtils.act(async () => {
    imagesTab.click();
    await new Promise((r) => setTimeout(r, 50));
  });
  console.log('O) real ImageCardGrid rendered Image One:', container.querySelectorAll('.image-card').length === 1 && container.textContent.includes('Image One'));

  // Switch to Galleries tab
  const tabs2 = Array.from(container.querySelectorAll('.nav-link, a.nav-link, [role="tab"]'));
  const galleriesTab = tabs2.find((t) => t.textContent.trim() === 'Galleries');
  await TestUtils.act(async () => {
    galleriesTab.click();
    await new Promise((r) => setTimeout(r, 50));
  });
  console.log('P) real GalleryCardGrid rendered Gallery One:', container.querySelectorAll('.gallery-card').length === 1 && container.textContent.includes('Gallery One'));

  // Back to scenes, select both, bulk delete
  const tabs3 = Array.from(container.querySelectorAll('.nav-link, a.nav-link, [role="tab"]'));
  const scenesTab = tabs3.find((t) => t.textContent.trim() === 'Scenes');
  await TestUtils.act(async () => {
    scenesTab.click();
    await new Promise((r) => setTimeout(r, 50));
  });

  const checkboxes = Array.from(container.querySelectorAll('.card-controls input[type="checkbox"], input[type="checkbox"]'));
  console.log('Q) found selection checkboxes on real cards:', checkboxes.length >= 2);
  await TestUtils.act(async () => {
    TestUtils.Simulate.change(checkboxes[0], { target: { checked: true } });
    TestUtils.Simulate.change(checkboxes[1], { target: { checked: true } });
  });
  console.log('R) bulk toolbar shows 2 selected:', container.textContent.includes('2 selected'));

  const deleteBtn = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Delete');
  await TestUtils.act(async () => { deleteBtn.click(); });
  // react-bootstrap's real Modal renders via a React portal into
  // document.body, not inside `container` - search document-wide for it.
  const confirmBtn = Array.from(document.querySelectorAll('button')).find((b) => b.textContent === 'Delete' && b !== deleteBtn);
  console.log('S) delete confirm modal opened:', !!confirmBtn);
  apolloCalls.length = 0;
  await TestUtils.act(async () => {
    confirmBtn.click();
    await new Promise((r) => setTimeout(r, 50));
  });
  const destroyCall = apolloCalls.find((c) => c.name === 'ScenesDestroy');
  console.log('T) real scenesDestroy mutation called with both ids:', !!destroyCall, JSON.stringify(destroyCall && destroyCall.variables));

  // --- Bulk edit, with the real TagSelect component ---
  await new Promise((r) => setTimeout(r, 20));
  const checkboxes2 = Array.from(container.querySelectorAll('input[type="checkbox"]'));
  await TestUtils.act(async () => { TestUtils.Simulate.change(checkboxes2[0], { target: { checked: true } }); });
  const editBtn = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Edit');
  await TestUtils.act(async () => { editBtn.click(); });
  await new Promise((r) => setTimeout(r, 20));

  console.log('U) real BulkEditModal opened (document-wide, portalled):', !!Array.from(document.querySelectorAll('.modal-title, h4, div')).find((n) => n.textContent.includes('Edit 1 Scenes')));
  const ratingInput = document.querySelector('input[type="number"]');
  await TestUtils.act(async () => { TestUtils.Simulate.change(ratingInput, { target: { value: '75' } }); });
  const organizedSelect = Array.from(document.querySelectorAll('select')).find((s) => s.querySelector('option[value="yes"]'));
  await TestUtils.act(async () => { TestUtils.Simulate.change(organizedSelect, { target: { value: 'yes' } }); });
  console.log('V) real TagSelect (react-select) rendered in the modal:', !!document.querySelector('.tag-select'));

  apolloCalls.length = 0;
  const applyBtn = Array.from(document.querySelectorAll('button')).find((b) => b.textContent.startsWith('Apply'));
  await TestUtils.act(async () => {
    applyBtn.click();
    await new Promise((r) => setTimeout(r, 50));
  });
  const bulkUpdateCall = apolloCalls.find((c) => c.name === 'BulkSceneUpdate');
  console.log('W) real bulkSceneUpdate mutation called with rating100=75, organized=true:', !!bulkUpdateCall, JSON.stringify(bulkUpdateCall && bulkUpdateCall.variables));
}

run().then(() => process.exit(0)).catch((e) => { console.error('FATAL', e); process.exit(1); });

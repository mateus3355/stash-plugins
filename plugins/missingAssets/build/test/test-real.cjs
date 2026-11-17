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
  window.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  window.cancelAnimationFrame = (id) => clearTimeout(id);

  const React = require('react');
  const ReactDOM = require('react-dom');
  const TestUtils = require('react-dom/test-utils');
  const ReactBootstrap = require('react-bootstrap');
  const ReactRouterDOM = require('react-router-dom');
  const FontAwesomeSolid = require('@fortawesome/free-solid-svg-icons');
  const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');

  const graphqlCalls = [];
  let nextScanResult = null;
  let nextScanError = null;
  window.fetch = function (url, opts) {
    const body = JSON.parse(opts.body);
    const name = /\b(mutation|query)\s+(\w+)/.exec(body.query)[2];
    graphqlCalls.push({ name, variables: body.variables });
    if (name === 'MissingAssetsScan') {
      if (nextScanError) {
        return Promise.resolve({
          json: () => Promise.resolve({ errors: [{ message: nextScanError }] }),
        });
      }
      return Promise.resolve({
        json: () => Promise.resolve({ data: { runPluginOperation: nextScanResult } }),
      });
    }
    return Promise.reject(new Error('unhandled fetch: ' + body.query));
  };

  window.PluginApi = {
    React, ReactDOM,
    libraries: {
      ReactRouterDOM, Bootstrap: ReactBootstrap,
      FontAwesomeSolid, ReactFontAwesome: { FontAwesomeIcon },
    },
    register: { route: (path, component) => { window.__registeredPath = path; window.__registeredComponent = component; } },
    patch: {
      before: (name, fn) => {
        if (name === 'MainNavBar.MenuItems') window.__navBeforeFn = fn;
      },
    },
  };

  // Tests the actual deployed file (plugins/missingAssets/missingAssets.js), not a local
  // dist/ copy, so a `build` that wasn't followed by `test` can't silently leave a stale
  // bundle looking "tested" (same discipline as this fork's other plugins).
  const code = fs.readFileSync(__dirname + '/../../missingAssets.js', 'utf8');
  window.eval(code);

  console.log('A) route registered at /missing-assets:', window.__registeredPath === '/missing-assets');
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
  console.log('C2) nav link label is exactly "Missing Assets":', navContainer.textContent.trim() === 'nativeMissing Assets');

  const Page = window.__registeredComponent;
  const container = document.createElement('div');
  document.body.appendChild(container);

  let renderError = null;
  try {
    await TestUtils.act(async () => {
      ReactDOM.render(React.createElement(Page), container);
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

  let scanButton = Array.from(container.querySelectorAll('button')).find((b) => b.textContent === 'Scan Library' || b.textContent === 'Scanning…');
  console.log('E) "Scan Library" button is present:', !!scanButton);

  // --- A scan that finds nothing wrong ---
  nextScanResult = {
    totalScanned: 5,
    missingCover: [],
    missingPhash: [],
    missingSprite: [],
    missingPreview: [],
    missingMarkerPreview: [],
    noMarkers: [],
    noFingerprint: [],
  };
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(scanButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('F) a clean scan sends runPluginOperation for this plugin:', graphqlCalls.some((c) => c.name === 'MissingAssetsScan' && c.variables.plugin_id === 'missingAssets'));
  console.log('G) a clean scan shows the "nothing missing" message:', container.textContent.includes('Nothing missing'));
  console.log('H) ...and the scanned count:', container.textContent.includes('Scanned 5 scene'));

  // --- A scan with real findings in every category ---
  graphqlCalls.length = 0;
  nextScanResult = {
    totalScanned: 42,
    missingCover: [{ id: '1', title: 'No Cover Scene' }],
    missingPhash: [{ id: '2', title: 'No Phash Scene' }],
    missingSprite: [{ id: '3', title: 'No Sprite Scene' }],
    missingPreview: [{ id: '4', title: 'No Preview Scene' }],
    missingMarkerPreview: [{ sceneId: '5', sceneTitle: 'Marker Scene', markerId: 'm1', seconds: 75 }],
    noMarkers: [{ id: '6', title: 'No Markers Scene' }],
    noFingerprint: [{ id: '7', title: '' }],
  };
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(scanButton);
    await new Promise((r) => setTimeout(r, 20));
  });

  console.log('I) shows the missing-cover scene, linked to the plain scene URL:', !!Array.from(container.querySelectorAll('a')).find((a) => a.getAttribute('href') === '/scenes/1' && a.textContent === 'No Cover Scene'));
  console.log('J) shows the missing-phash scene:', container.textContent.includes('No Phash Scene'));
  console.log('K) shows the missing-sprite scene:', container.textContent.includes('No Sprite Scene'));
  console.log('L) shows the missing-preview scene:', container.textContent.includes('No Preview Scene'));
  console.log('M) shows the no-markers scene:', container.textContent.includes('No Markers Scene'));
  console.log('N) a scene with no title at all falls back to "Scene <id>":', container.textContent.includes('Scene 7'));

  const markerLink = Array.from(container.querySelectorAll('a')).find((a) => a.getAttribute('href') === '/scenes/5?t=75');
  console.log('O) the missing marker preview links straight to that marker\'s own timestamp:', !!markerLink);
  console.log('P) ...formatted as a real timestamp (1:15), not a raw seconds count:', !!markerLink && markerLink.textContent.includes('1:15'));

  console.log('Q) the "nothing missing" message is NOT shown once something is found:', !container.textContent.includes('Nothing missing'));

  // --- A failed scan shows its error instead of crashing ---
  graphqlCalls.length = 0;
  nextScanError = 'boom';
  await TestUtils.act(async () => {
    TestUtils.Simulate.click(scanButton);
    await new Promise((r) => setTimeout(r, 20));
  });
  console.log('R) a failed scan shows the error instead of crashing:', container.textContent.includes('boom'));
}

run().then(() => process.exit(0)).catch((e) => { console.error('FATAL', e); process.exit(1); });

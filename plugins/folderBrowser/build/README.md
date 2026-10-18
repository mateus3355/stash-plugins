# Folder Browser build

`../folderBrowser.js` (the file Stash actually loads, per `../folderBrowser.yml`)
is a compiled bundle, not hand-written. This directory is its source.

## Why

Folder Browser reuses Stash's own `SceneCardGrid`/`ImageCardGrid`/
`GalleryCardGrid`/`Pagination`/`TagIDSelect` components for real, rather
than re-implementing lighter equivalents. Earlier versions tried reusing
them via `window.PluginApi.components.<Name>` (a runtime registry Stash
populates lazily, as each component's module happens to get loaded by
whatever page you visit) and ran into that registry not reliably having
what this page needed on a cold visit. The fix, modelled on how
`.tmp/stash-tv` solves the identical problem: compile the real components
directly into this plugin's own bundle, so they're always present
regardless of what else has loaded. `react`/`react-dom`/`react-bootstrap`/
`react-router-dom`/`react-intl`/`@apollo/client`/the FontAwesome packages/
`mousetrap`/`react-select` are all marked `external` in `vite.config.ts` and
resolved at runtime from `window.PluginApi.React`/`.ReactDOM`/
`.libraries.*` instead of being bundled - there's exactly one copy of React
(the host app's), so this is safe to mount inside the existing app tree via
`PluginApi.register.route()`, same as before.

## Rebuilding

Requires a local checkout of the Stash monorepo (`ui/v2.5/src` is imported
directly via the `src/*` alias in `vite.config.ts` and `tsconfig.json` -
both currently point at `/workspaces/stash/ui/v2.5`; change `STASH_SRC` /
`baseUrl` if yours lives elsewhere). The exact source your Stash instance is
actually running is what you want here - a vendored/pinned copy (the
`stash-tv` approach) would drift from your real deployment over time.

```sh
npm install --legacy-peer-deps
npm run typecheck   # tsc --noEmit - catches real type errors; vite build itself doesn't type-check
npm run build        # vite build, then copies dist/folderBrowser.js over ../folderBrowser.js
npm run test          # exercises the actual deployed ../folderBrowser.js against real
                       # react-bootstrap/react-router-dom/react-intl/@apollo/client in jsdom -
                       # not simplified stubs, since the whole point is the real components
```

`--legacy-peer-deps` is needed because `react-intl`'s peer dependency range
doesn't include the TypeScript version this installs otherwise; it's a
peer-dependency metadata mismatch, not an actual incompatibility.

`npm run build` only copies the `.js` - this page doesn't need its own CSS
beyond `../folderBrowser.css` (plain hand-written chrome for the folder
tiles/breadcrumb/toolbar; everything else uses Stash's own global
stylesheet, already loaded by the host app regardless of what this bundle
does). If a future version here pulls in a component that genuinely needs
its own CSS (e.g. something using `react-datepicker`, which doesn't ship
styles via CSS-in-JS the way `react-select` does), check `dist/style.css`
for anything worth merging in - the version at the time of writing was
exclusively leftover `react-datepicker` rules from a bundled-but-unused
import; Stash's own global stylesheet already has it, so it was dropped.

## What's intentionally not here

No submodule, no CI pipeline, no automatic rebuild. `folderBrowser.js`
commits as a normal file, same as any other build artifact in version
control - updating it after a future Stash upgrade changes a component's
props/behavior means re-running the steps above by hand and reviewing the
diff, not something that happens automatically. See the main README's
"Why this page reuses the real native components" section for the fuller
trade-off discussion.

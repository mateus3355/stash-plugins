# Folder Browser

Adds a **Folders** item to the main nav bar (alongside Scenes, Images, Groups, ...)
leading to a page for navigating your library by folder, like a file explorer -
browse into subfolders and see the scenes, images, and galleries directly
inside each one, rendered using Stash's actual `SceneCardGrid`/`ImageCardGrid`/
`GalleryCardGrid`/`Pagination`/`TagIDSelect` components - not look-alikes. See
"Why this page compiles in the real native components" below for how and why.

Pure frontend plugin - no Python backend, no settings. Everything is read-only
GraphQL queries, except the bulk Edit/Delete actions described below, which
use the same mutations the native bulk-selection toolbar uses.

**`folderBrowser.js` is a compiled bundle, not hand-written** - see
`build/README.md` for the source and how to rebuild it.

## How it works

- At the root (`/folder-browser`, no `path` in the URL) it shows your
  configured library paths as top-level "drives" to pick from, the same idea as
  "This PC" in Windows Explorer.
- Picking a folder shows its direct subfolders as clickable tiles, a breadcrumb
  trail back to the library root, and - via **Scenes / Images / Galleries**
  tabs - whichever content lives **directly** in that folder (not in any
  subfolder - those show up when you navigate into the subfolder itself).
- The current folder's path lives in the URL (`?path=...`), so back/forward and
  bookmarking work normally. Switching tabs or folders resets the page number
  and clears the current selection.
- Clicking a scene's selection checkbox (or an image's/gallery's) shows a bulk
  toolbar with **Edit** and **Delete**, same as the native list pages:
  - **Edit** can set Rating and Organized, and add tags (scenes/images/galleries
    all support this) - each field is only changed if you touch it.
  - **Delete** asks whether to also delete the underlying file(s) from disk
    (off by default) before calling the same `scenesDestroy`/`imagesDestroy`/
    `galleryDestroy` mutations the native UI uses.
- Scene cards use the real `SceneQueue`, so opening one and finishing it
  auto-advances to the next scene in that folder listing, the same as
  queuing up the native Scenes page.
- Pagination is the real `Pagination` component (page-jump control, item
  count byline) - the same one the native list pages use.
- A search box filters the active tab's content to this folder using Stash's
  own free-text search (the same `filter.q` the native search bar writes to),
  debounced so it doesn't query on every keystroke.
- A sort dropdown + direction toggle reorders the active tab (Path, Title,
  Date, Rating, ... - see "Why there's no native filter/sort toolbar" below
  for why this is a custom control rather than the real one).
- Folder tiles and breadcrumb crumbs are real links (`react-router-dom`'s
  `Link`, not `onClick`-only buttons), so ctrl/cmd/middle-click opens a
  folder in a new tab, same as any other link in the app.
- Clicking an image card opens it in the native lightbox (left/right
  navigation across the current page's images), rather than a detail page -
  there's no image detail page here to link to, and the lightbox is more
  useful as the default anyway.

## Why it needed more than a simple path filter

Stash's `SceneFilterType.path` field only supports substring/exact/regex
matching against each scene's *full* file path - there's no "files whose
parent folder is exactly X" filter. A naive `INCLUDES` match on the folder
path would also match every file in every subfolder, which breaks both the
file-explorer semantics (a subfolder's scenes would incorrectly show up in
every ancestor folder too) and pagination (a folder showing "page 1 of 2" when
most of what matched was actually buried in nested subfolders, so a filtered
view could show far fewer than 40 results per page or even look empty while
real matches exist on a later page).

Instead this uses the `MATCHES_REGEX` modifier with a pattern like
`^/library/A[/\\][^/\\]+$` - "this exact folder path, then one path separator,
then a basename with no further separator." That's matched **server-side**
against the scene's full file path (see `pkg/sqlite/criterion_handlers.go`),
so counts and pagination are correct without fetching more than one page's
worth of data at a time, and without any client-side filtering.

## Why there's no native filter/sort toolbar

The full toolbar on the native Scenes/Images/Galleries pages (search box,
funnel-icon criteria builder, sort dropdown, display-mode switcher, ...) is
rendered by a single component per type - `FilteredSceneList` /
`FilteredImageList` / `FilteredGalleryList`. Now that this plugin compiles in
real components for the cards (see above), compiling these in too is at
least *technically* possible the same way - but still not a good trade-off
here:

- It's driven by a `ListFilterModel` instance and `Criterion` subclasses
  (`PathCriterion`, `TagsCriterion`, ...) from `src/models/list-filter/`,
  plus a `View` enum used for persisting filter state. Compiling the classes
  in is no longer the blocker it once was, but *correctly constructing* one
  (replicating how the real app turns a URL's `c=` param into live
  `Criterion` instances, defaults, sort-option metadata, etc.) to express
  "show me exactly this folder" is real, non-trivial logic to reimplement
  faithfully - a different kind of problem than importing a component.
- The container also pulls in a large chunk of the app at once -
  `EditScenesDialog`, `DeleteScenesDialog`, the Tagger, Generate/Export
  dialogs, the full filter sidebar - each with its own further dependency
  tree, for a page that only needs a folder-scoped search and a sort order.

So: real data, real card components, real pagination - just a hand-built
toolbar instead of the real one for search/sort, which stays intentionally
lighter-weight than replicating the native filter sidebar's full criteria
model.

## Why this page compiles in the real native components

Two earlier approaches were tried and abandoned before this one:

1. **Reuse via `PluginApi.components.<Name>`** - these are real
   `PatchComponent`s, technically reachable from plugin JS, but they only get
   *registered* into that object once their defining module has actually
   been evaluated somewhere - normally by visiting the matching native page
   first in the same session. On a cold visit to this page (new tab,
   bookmark, first page opened all session) they simply weren't there yet,
   and the page fell back to a "not loaded yet, visit the X page first"
   warning.
2. **Forcing the lazy chunks to load** via `PluginApi.hooks.useLoadComponents(...)`
   - didn't reliably fix the cold-load problem in practice either.
3. **Hand-rolled lookalike cards** built from raw GraphQL data, reusing
   Stash's CSS class names for visual consistency - this worked and had no
   cold-load problem, but came with a real cost: a simplified visual subset
   missing hover popovers, interactive heatmaps, preview scrubbing, and more,
   with no path to closing that gap short of re-implementing SceneCard/
   ImageCard/GalleryCard from scratch.

The approach actually in use now is modelled on how `.tmp/stash-tv` (a
separate, much larger Stash-adjacent project in this repo) solves the
identical cold-load problem: it doesn't touch `PluginApi.components` at all.
It vendors a pinned copy of Stash's source and compiles it directly into its
own bundle, so the components it needs are always present regardless of
what else has loaded that session.

This plugin does the same thing, but against **the Stash checkout this
plugin was built from** (see `build/README.md`) rather than a separately
vendored/pinned copy, since staying in sync with whatever Stash version is
actually deployed matters more here than it does for stash-tv's
standalone app. `build/vite.config.ts` imports `SceneCardGrid`/
`ImageCardGrid`/`GalleryCardGrid`/`Pagination`/`TagIDSelect` (and whatever
they themselves pull in - `SceneCard`, `GridCard`, `RatingBanner`,
`StudioOverlay`, the whole dependency graph) straight from `ui/v2.5/src` and
compiles them into `folderBrowser.js`, while marking `react`, `react-dom`,
`react-bootstrap`, `react-router-dom`, `react-intl`, `@apollo/client`, the
FontAwesome packages, `mousetrap`, and `react-select` as `external` -
resolved at runtime from `window.PluginApi.React`/`.ReactDOM`/
`.libraries.*` instead of being bundled. That means there's still exactly
one copy of React in the page (the host app's), so this remains safe to
mount inside the existing app tree via `PluginApi.register.route()`, same
as every earlier version of this plugin.

A couple of consequences worth knowing:

- Two React Contexts the real components depend on
  (`useConfigurationContext`, `useToast`) are recreated fresh inside this
  bundle's own compiled copy of `src/hooks/Config`/`src/hooks/Toast` - they
  do **not** share the host app's own instances of those contexts (unlike
  `react-router-dom`/`@apollo/client`/`react-intl`'s contexts, which *are*
  shared, since those packages are external rather than bundled). The page
  component wraps itself in its own `<ConfigurationProvider>` (fed by a real
  `GQL.useConfigurationQuery()` call - which *does* share the host's Apollo
  cache, since `@apollo/client` is external) and `<ToastProvider>` to supply
  these.
- `itemsResult` is tagged with the tab it was fetched for. Switching tabs
  re-renders with the new `activeTab` before that tab's refetch resolves, so
  without the tag, the grid for the new tab would briefly be handed the old
  tab's items (e.g. images passed into `SceneCardGrid`, which indexes into
  `scene.files`) - that crashes during render/commit, before any effect gets
  a chance to clean the stale state up, so it has to be guarded at render
  time instead.
- The lightbox is driven by `PluginApi.hooks.useLightbox` (the exact hook the
  native Images page uses - see `src/components/Images/ImageList.tsx`), fed
  `itemsResult.items` only while actually on the Images tab (and only once
  it's tagged for that tab, for the same stale-data reason as above), so
  switching away clears it rather than leaving it primed with a different
  folder/tab's images.
- The **Folders** nav link is injected via
  `PluginApi.patch.before("MainNavBar.MenuItems", ...)` - a real
  `PatchComponent` that just renders `<Nav>{children}</Nav>` - by appending
  one more child to `props.children`, the same technique
  `PluginApi.register.route()` itself uses internally to add a `<Route>` to
  `PluginRoutes`.

## Notes / current limitations

- Bulk Edit is a simplified subset of the native Edit dialog - Rating,
  Organized, and adding tags (via the real `TagIDSelect` component, so full
  search/autocomplete/create-new-tag parity there) - but not full parity
  with the dialog as a whole (e.g. no removing tags, no performers/studio
  editing). The real `EditScenesDialog`/`DeleteScenesDialog` aren't
  registered `PatchComponent`s at all (so compiling them in the way the
  cards are compiled in would mean pulling in their own, separate
  dependency trees - a larger undertaking than this page's bulk actions
  need), so this reimplements just the common case directly against the
  `bulkSceneUpdate`/`bulkImageUpdate`/`bulkGalleryUpdate` mutations.
- The nav bar patch is wrapped in a try/catch that falls back to the
  unmodified nav bar on any error, so a problem here can never take down
  every page - see `filemonitor`/`moveFile`'s equivalent patches for the same
  defensive pattern, adopted project-wide after an earlier plugin install
  caused an app-wide crash.

## Why the page is at `/folder-browser`, not `/plugin/folder-browser`

It used to register its frontend route at `/plugin/folder-browser`, which
worked when navigated to from inside the already-loaded app (clicking the
**Folders** nav link) but 404'd on a hard reload or when opened directly in a
new tab. The cause turned out to be server-side, not anything about plugin
JS loading order: the Go backend mounts a dedicated router at the `/plugin`
prefix (`internal/api/routes_plugin.go`, via `r.Mount("/plugin", ...)` in
`internal/api/server.go`) that serves each plugin's own assets - it only has
handlers for `/plugin/{id}/javascript`, `/plugin/{id}/css`, and
`/plugin/{id}/assets`. A `Mount` fully delegates any request under that
prefix to its sub-router, so a bare `/plugin/folder-browser` (no matching
sub-route) 404s from *that* router - before the request ever reaches the
SPA's catch-all handler (`r.HandleFunc("/*", ...)` in `server.go`) that
would otherwise serve `index.html` and let React Router take over. No amount
of fixing this plugin's own `.js` could work around that, since the request
never got far enough to run any JS at all.

The fix was simply to register the page somewhere that isn't under
`/plugin/...` - `/folder-browser` doesn't collide with that mount or with
any native route (`/scenes`, `/images`, `/performers`, ... - see
`ui/v2.5/src/App.tsx`), so it falls through to the SPA catch-all correctly on
a direct load. Any future Stash plugin route should avoid the `/plugin/...`
prefix for the same reason.

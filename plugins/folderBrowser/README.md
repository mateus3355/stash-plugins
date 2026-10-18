# Folder Browser

Adds a **Folders** item to the main nav bar (alongside Scenes, Images, Groups, ...)
leading to a page for navigating your library by folder, like a file explorer -
browse into subfolders and see the scenes, images, and galleries directly
inside each one, rendered using the exact same card-grid components as the
native Scenes/Images/Galleries pages.

Pure frontend plugin - no Python backend, no settings. Everything is read-only
GraphQL queries, except the bulk Edit/Delete actions described below, which
use the same mutations the native bulk-selection toolbar uses.

## How it works

- At the root (`/plugin/folder-browser`, no `path` in the URL) it shows your
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
- Scene cards get a real queue, so opening one and finishing it auto-advances
  to the next scene in that folder listing, the same as queuing up the native
  Scenes page.
- Pagination uses the native `Pagination` component (page-jump control, item
  count byline), falling back to simple Previous/Next buttons only if that
  component hasn't been loaded into `PluginApi.components` yet this session.
- A search box filters the active tab's content to this folder using Stash's
  own free-text search (the same `filter.q` the native search bar writes to),
  debounced so it doesn't query on every keystroke.
- A sort dropdown + direction toggle reorders the active tab (Path, Title,
  Date, Rating, ... - see "Why there's no native filter/sort toolbar" below
  for why this is a custom control rather than the real one).
- Folder tiles and breadcrumb crumbs are real links (`react-router-dom`'s
  `Link`, not `onClick`-only buttons), so ctrl/cmd/middle-click opens a
  folder in a new tab, same as any other link in the app.
- Clicking an image's hover "preview" (magnifying-glass) button opens it in
  the native lightbox, with left/right navigation across the current page's
  images - matching the native Images page exactly (clicking the rest of the
  card still goes to the image's own detail page there too, since that's
  baked into the reused `ImageCardGrid`/`GridCard` markup, not something
  this plugin controls).

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
`FilteredImageList` / `FilteredGalleryList` - which *is* technically reachable
via `PluginApi.components`. In practice it can't be reused here:

- It's driven by a `ListFilterModel` instance and `Criterion` subclasses
  (`PathCriterion`, `TagsCriterion`, ...) from `src/models/list-filter/`, plus
  a `View` enum used for persisting filter state - none of these classes are
  exposed on `PluginApi` (only plain data/presentational pieces like
  `SceneCardGrid` and `Pagination` are), so there's no supported way to hand
  it "show me exactly this folder" from plugin JS.
- Even if that were solved, the container pulls in a large chunk of the app -
  `EditScenesDialog`, `DeleteScenesDialog`, the Tagger, Generate/Export
  dialogs, the full filter sidebar - all at once. Given this plugin install
  already caused one app-wide crash earlier (see the defensive try/catch note
  below), taking on that much surface for a plugin page felt like the wrong
  trade-off versus a small, purpose-built search box and sort dropdown that
  talk to the same GraphQL fields (`filter.q`, `filter.sort`,
  `filter.direction`) the real toolbar uses under the hood.

So: real data, real card components, real pagination - just a hand-built
toolbar instead of the real one, which is intentionally lighter-weight than
replicating the native filter sidebar.

## Reused native components (why this looks like the real Scenes/Images/Galleries pages)

- **`SceneCardGrid`**, **`ImageCardGrid`**, and **`GalleryCardGrid`** are all
  registered `PatchComponent`s, so they're reachable from plugin JS via
  `PluginApi.components.<Name>` - the exact same components the native pages
  use, so tiles look and behave identically (thumbnails, hover overlay,
  rating, o-counter, duration, click to open, ...). Similarly, `Pagination`
  and `TagSelect` (used in the bulk Edit dialog's "Add tags" field) are reused
  the same way.
- Content data comes from Stash's own compiled query documents
  (`GQL.FindScenesDocument`/`FindImagesDocument`/`FindGalleriesDocument`), run
  through the app's real Apollo Client (`PluginApi.utils.StashService.getClient()`),
  rather than hand-built queries. That guarantees the returned data has
  exactly the shape each grid component expects, with no risk of missing a
  field it needs.
- The **Folders** nav link is injected via
  `PluginApi.patch.before("MainNavBar.MenuItems", ...)` - a real
  `PatchComponent` that just renders `<Nav>{children}</Nav>` - by appending
  one more child to `props.children`, the same technique
  `PluginApi.register.route()` itself uses internally to add a `<Route>` to
  `PluginRoutes`.
- The scene queue is a plain object shaped like `SceneQueue`
  (`makeLink(sceneID, options)`), built from the current folder listing's
  scene IDs in the same `?qs=<id>&qs=<id>...` URL format `SceneQueue.fromSceneIDList()`
  produces - `SceneQueue` itself isn't exposed via `PluginApi`, but `SceneCard`
  only ever calls `queue.makeLink()`, so this is enough for "continue to next
  scene" playback to work identically to the native Scenes page.
- `itemsResult` is tagged with the tab it was fetched for. Switching tabs
  re-renders with the new `activeTab` before that tab's refetch resolves, so
  without the tag, the grid for the new tab would briefly be handed the old
  tab's items (e.g. images passed into `SceneCardGrid`, which indexes into
  `scene.files` and isn't shaped to tolerate that) - that crashes during
  render/commit, before any effect gets a chance to clean the stale state up,
  so it has to be guarded at render time instead.
- The lightbox is driven by `PluginApi.hooks.useLightbox` (the exact hook the
  native Images page uses - see `src/components/Images/ImageList.tsx`), fed
  `itemsResult.items` only while actually on the Images tab (and only once
  it's tagged for that tab, for the same stale-data reason as above), so
  switching away clears it rather than leaving it primed with a different
  folder/tab's images.

## Notes / current limitations

- Bulk Edit is a simplified subset of the native Edit dialog - Rating,
  Organized, and adding tags - not full parity (e.g. no removing tags, no
  performers/studio editing). The real `EditScenesDialog`/`DeleteScenesDialog`
  aren't registered `PatchComponent`s, so they're not reachable via
  `PluginApi.components` at all; this reimplements just the common case
  directly against the `bulkSceneUpdate`/`bulkImageUpdate`/`bulkGalleryUpdate`
  mutations.
- The nav bar patch is wrapped in a try/catch that falls back to the
  unmodified nav bar on any error, so a problem here can never take down
  every page - see `filemonitor`/`moveFile`'s equivalent patches for the same
  defensive pattern, adopted project-wide after an earlier plugin install
  caused an app-wide crash.

## Hard-reloading / opening `/plugin/folder-browser` directly in a new tab

If this doesn't work reliably for you, it isn't something this plugin's own
code controls, and per Stash's actual loading code it's not expected to fail:

- Plugin `.js`/`.css` files are injected as `<script>`/`<link>` tags by a
  `useEffect` after the app starts mounting (`src/hooks/useScript.tsx`), but
  the app deliberately renders only a loading spinner - not the route table,
  not this page - until *every* plugin script has fired its `load` event
  (`PluginsLoader` in `src/plugins.tsx`). This gate exists specifically so a
  route a plugin registers is available by the time anything tries to match
  against it, and it applies identically no matter which URL the tab started
  on - there's nothing route-specific here that would make a direct
  hard-load of `/plugin/folder-browser` behave differently from a hard-load
  of `/`.
- A real bug in that loader *could* produce exactly this symptom, though:
  `useScript.tsx` treats a script's `error` event the same as its `load`
  event, so if a plugin `.js` file 404s, fails to parse, or is blocked for
  any reason on a given page load, the app silently finishes "loading" and
  renders anyway - with that plugin's route never registered, and no visible
  error. If you can reproduce this, check the Network tab on a failing hard
  load for a non-200 response (or unusually slow/timed-out request) for this
  plugin's `.js` file, and check the browser console for an error that got
  swallowed by this.
- This is Stash-core behavior (`src/plugins.tsx`, `src/hooks/useScript.tsx`),
  not something a plugin's own `.js` file can work around - fixing the
  underlying bug means patching and rebuilding Stash's own frontend, which is
  out of scope for a plugin living in this repo.

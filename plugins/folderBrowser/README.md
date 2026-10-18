# Folder Browser

Adds a **Folders** item to the main nav bar (alongside Scenes, Images, Groups, ...)
leading to a page for navigating your library by folder, like a file explorer -
browse into subfolders and see the scenes, images, and galleries directly
inside each one. Card tiles are hand-rolled (not the native
`SceneCardGrid`/etc. components - see "Why this page builds its own card
grids" below) but built from the same GraphQL data and reuse Stash's own CSS
classes, so they look and feel consistent with the native pages.

Pure frontend plugin - no Python backend, no settings. Everything is read-only
GraphQL queries, except the bulk Edit/Delete actions described below, which
use the same mutations the native bulk-selection toolbar uses.

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
- Scene cards get a real queue, so opening one and finishing it auto-advances
  to the next scene in that folder listing, the same as queuing up the native
  Scenes page.
- Pagination is a simple hand-rolled Previous/Next control with a page/count
  indicator (see "Why this page builds its own card grids" below).
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
  there's no hand-rolled image detail page to link to, and the lightbox is
  more useful as the default here anyway.

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
  exposed on `PluginApi`, so there's no supported way to hand it "show me
  exactly this folder" from plugin JS.
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

## Why this page builds its own card grids

Earlier versions of this plugin reused the native `SceneCardGrid`/
`ImageCardGrid`/`GalleryCardGrid`/`Pagination`/`TagSelect` components via
`PluginApi.components.<Name>` - real `PatchComponent`s, technically reachable
from plugin JS. The problem: those only get *registered* into that object
once their defining module has actually been evaluated somewhere, normally
by visiting the matching native page first in the same session. On a cold
visit to this page (new tab, bookmark, first page opened all session) they
simply weren't there yet, and the page fell back to a "not loaded yet, visit
the X page first" warning.

Forcing the lazy chunks to load via `PluginApi.hooks.useLoadComponents(...)`
(what this plugin tried first) didn't reliably fix it in practice. Looking at
how `.tmp/stash-tv` (a separate, much larger Stash-adjacent project in this
repo) solves the exact same problem was the deciding factor: it doesn't
touch `PluginApi.components` *at all*. It's technically a Stash plugin too,
but the actual UI is a fully separate app with its own React root, built by
vendoring a pinned copy of Stash's source and compiling it directly into its
own bundle - and even then, it doesn't reuse the native card components,
building its own slide/card UI from raw GraphQL data instead. That's the
model this page now follows, at plugin scale: build simple cards from data
this page is fetching anyway, rather than depend on the native app's
lazily-loaded component registry for anything. The trade-off is simpler and
more reliable (no more cold-load race, no more build pipeline needed either)
at the cost of being a simplified visual subset of the real cards (see
"Notes / current limitations").

What's still genuinely reused, because it doesn't have this problem:

- **CSS classes** - `grid-card`, `scene-card`/`image-card`/`gallery-card`,
  `zoom-N`, `rating-banner`, `studio-overlay`, `scene-specs-overlay`,
  `card-popovers`, `row.justify-content-center`, etc. Stash's global
  stylesheet is always loaded regardless of code-splitting (only the React
  *components* are code-split, not the CSS), so hand-rolled markup using
  these same classes still looks visually consistent with the native app.
- **GraphQL data** - content still comes from Stash's own compiled query
  documents (`GQL.FindScenesDocument`/`FindImagesDocument`/
  `FindGalleriesDocument`/`FindTagsDocument`), run through the app's real
  Apollo Client (`PluginApi.utils.StashService.getClient()`), not hand-built
  queries - this never had the lazy-loading problem, since compiled
  documents and the Apollo Client are both present from the start.
- The **Folders** nav link is injected via
  `PluginApi.patch.before("MainNavBar.MenuItems", ...)` - a real
  `PatchComponent` that just renders `<Nav>{children}</Nav>` - by appending
  one more child to `props.children`, the same technique
  `PluginApi.register.route()` itself uses internally to add a `<Route>` to
  `PluginRoutes`.
- The scene queue is a plain object shaped like `SceneQueue`
  (`makeLink(sceneID, options)`), built from the current folder listing's
  scene IDs in the same `?qs=<id>&qs=<id>...` URL format `SceneQueue.fromSceneIDList()`
  produces - `SceneQueue` itself isn't exposed via `PluginApi`, but the hand-rolled
  scene card only ever calls `queue.makeLink()`, so this is enough for
  "continue to next scene" playback to work identically to the native Scenes
  page.
- `itemsResult` is tagged with the tab it was fetched for. Switching tabs
  re-renders with the new `activeTab` before that tab's refetch resolves, so
  without the tag, the grid for the new tab would briefly be handed the old
  tab's items (e.g. images passed into the hand-rolled scene card, which
  indexes into `scene.files` and isn't shaped to tolerate that) - that could
  still render wrong/broken content during the gap, so it has to be guarded
  at render time rather than cleaned up afterwards by an effect.
- The lightbox is driven by `PluginApi.hooks.useLightbox` (the exact hook the
  native Images page uses - see `src/components/Images/ImageList.tsx`), fed
  `itemsResult.items` only while actually on the Images tab (and only once
  it's tagged for that tab, for the same stale-data reason as above), so
  switching away clears it rather than leaving it primed with a different
  folder/tab's images.

## Notes / current limitations

- Bulk Edit is a simplified subset of the native Edit dialog - Rating,
  Organized, and adding tags (via a small hand-rolled search-as-you-type
  picker against `GQL.FindTagsDocument`, not the native `TagSelect`) - not
  full parity (e.g. no removing tags, no performers/studio editing). The real
  `EditScenesDialog`/`DeleteScenesDialog` aren't registered `PatchComponent`s
  at all, so this reimplements just the common case directly against the
  `bulkSceneUpdate`/`bulkImageUpdate`/`bulkGalleryUpdate` mutations.
- Cards are a simplified visual subset of the real ones: thumbnail, title,
  rating, studio name/logo, tag/performer/o-counter/organized counts (as
  plain counts, not the native hover popovers listing names), and for
  scenes, resolution + duration. No hover-preview scrubbing, no interactive
  heatmap, no file-path display, no click-through from the studio badge or
  the count badges (the native versions link to the studio page / open a
  popover of names - these are display-only here).
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

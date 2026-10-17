# Folder Browser

Adds a **Folders** item to the main nav bar (alongside Scenes, Images, Groups, ...)
leading to a page for navigating your library by folder, like a file explorer -
browse into subfolders and see the scenes directly inside each one, rendered
using the exact same `SceneCardGrid`/`SceneCard` components as the native Scenes
page.

Pure frontend plugin - no Python backend, no settings. Everything is read-only
GraphQL queries.

## How it works

- At the root (`/plugin/folder-browser`, no `path` in the URL) it shows your
  configured library paths as top-level "drives" to pick from, the same idea as
  "This PC" in Windows Explorer.
- Picking a folder shows its direct subfolders as clickable tiles, a breadcrumb
  trail back to the library root, and the scenes whose file lives **directly**
  in that folder (not in any subfolder - those show up when you navigate into
  the subfolder itself).
- The current folder's path lives in the URL (`?path=...`), so back/forward and
  bookmarking work normally.

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

## Reused native components (why this looks like the real Scenes page)

- **`SceneCardGrid`** (and therefore `SceneCard`/`GridCard` underneath) is a
  registered `PatchComponent`, so it's reachable from plugin JS via
  `PluginApi.components.SceneCardGrid` - the exact same component the real
  Scenes page uses, so scene tiles look and behave identically (thumbnails,
  hover overlay, rating, o-counter, duration, click to open the scene, ...).
- Scene data comes from `GQL.FindScenesDocument` - Stash's own compiled
  `findScenes` query document - run through the app's real Apollo Client
  (`PluginApi.utils.StashService.getClient()`), rather than a hand-built
  query. That guarantees the returned scenes have exactly the shape
  `SceneCardGrid` expects, with no risk of missing a field it needs.
- The **Folders** nav link is injected via
  `PluginApi.patch.before("MainNavBar.MenuItems", ...)` - a real
  `PatchComponent` that just renders `<Nav>{children}</Nav>` - by appending
  one more child to `props.children`, the same technique
  `PluginApi.register.route()` itself uses internally to add a `<Route>` to
  `PluginRoutes`.

## Notes / current limitations

- Scopes to **scenes** only, matching what was asked for ("similar to the
  scene view"). Images/galleries could be added the same way later.
- No selection/bulk actions wired up yet (`SceneCardGrid` requires a
  `selectedIds`/`onSelectChange` pair, so clicking a card's checkbox does
  visually toggle selection, but nothing currently reads it).
- Scene cards don't get a `queue`, so clicking one opens the scene normally
  but without "continue to the next scene in this folder" playback - that
  would need building a `SceneQueue` from the current folder's listing.
- Pagination is a simple Previous/Next, not the native page-jump control.

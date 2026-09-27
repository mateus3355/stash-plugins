# Move File

A frontend for Stash's `moveFiles` mutation, which has existed in the backend since
[#3557](https://github.com/stashapp/stash/pull/3557) but has no UI of its own in
core Stash. Adds:

- A **Move File** button on a scene's File Info tab, for moving that one scene's
  file (parallels how `RenameFile` lets you rename the current scene's file from
  the Edit tab).
- A **Move N Files…** item in the scene list's `...` bulk-operations dropdown,
  shown whenever one or more scenes are selected - for moving every selected
  scene's file(s) to the same destination folder in one go.

Both open the same small dialog asking for a destination folder - using Stash's
own folder browser component (the same one behind the native "Select folders"
dialog in Settings, browsing real directories server-side rather than a plain
text field) - then call Stash's `moveFiles` mutation, which moves the file(s) on
disk **and** updates the database in one transaction, so there's no rescan needed
and the DB never points at a stale path (same approach the community
`sceneRename` plugin uses). On success, it also queues an **Auto Tag** job
scoped to the destination folder, so anything that belongs there based on
filename matching gets tagged without a separate manual step - and if a
source folder ends up completely empty on disk, it gets deleted.

## Small vs. large moves

- **Small selections** (at or below the **Background Task Threshold** setting,
  default 20) call `moveFiles` directly from the browser and reload the page once
  it completes.
- **Large selections** instead call `runPluginTask` with the file ids and
  destination baked into its `args_map` (no fixed task definition needed - Stash
  runs the plugin with exactly those arguments), so the move happens as a job in
  the **Task Queue** instead of holding the browser on a long request. You'll see
  a confirmation and can check progress/logs there.

The Python side (`moveFile.py`) also chunks large batches into groups of 50 before
calling `moveFiles` - the mutation runs as a single database transaction, so one
bad file (e.g. a name collision at the destination) would otherwise roll back the
entire batch; chunking means it only takes out its own chunk, and the log says
which one failed.

## Settings

- **Background Task Threshold** (number, default 20) - moves larger than this run
  as a background task instead of a direct call.
- **Auto Tag After Move** (boolean, default on) - after a successful move, queue
  an Auto Tag job scoped to `paths: [destinationFolder]` (`metadataAutoTag`).
  Also sends `performers: ["*"], studios: ["*"], tags: ["*"]` alongside `paths` -
  those are match *criteria*, not just scope, and an omitted list means "don't
  match this category" rather than "match everything" (confirmed against what
  the native Auto Tag button itself always sends). Without the wildcards this
  silently queued a job that had nothing to match against and tagged nothing.
  For a direct move this is a second GraphQL call made right after `moveFiles`
  succeeds (a failure here is logged to the console but doesn't affect the move
  itself, which already completed); for a background task move, `moveFile.py`
  queues it itself once the move batch(es) finish, so it shows up as the same
  kind of follow-up job in the Task Queue log. Either way it only fires if at
  least one file actually moved.
- **Delete Empty Source Folders** (boolean, default on) - after a successful
  move, deletes each folder the moved file(s) came from if it's left completely
  empty. Since the browser can't touch the filesystem itself, a direct move
  triggers this via `runPluginOperation` (an immediate, synchronous plugin
  call - see the schema's `runPluginOperation` docs: it runs right away rather
  than going through the Task Queue); a background task move does the same
  check itself as the last step of that same job. Several safety checks apply
  before anything is deleted:
  - "Empty" is checked with a real `os.listdir()` on the actual folder, not
    just Stash's database view - a folder holding files Stash never scanned
    (subtitle sidecars, `.nfo` files, whatever) is left alone.
  - A folder that matches one of your configured library paths is **never**
    deleted, no matter what it contains.
  - The deletion itself uses `os.rmdir()` (not a recursive remove), which by
    itself only ever succeeds on a genuinely empty directory - a safety net
    in its own right even if the emptiness check above raced with something.
  - Only the immediate source folder(s) are checked - it doesn't cascade
    upward to newly-empty parent directories.

## Notes / current limitations

- Scoped to **scenes** only for now - the bulk dropdown item targets the main
  Scenes list specifically. The same approach could be extended to Images/
  Galleries if wanted.
- The destination folder field is Stash's own `FolderSelect` component when it's
  available (browses real directories server-side, seeded with your configured
  library paths as starting suggestions) - it falls back to a plain text field
  only if that component hasn't been loaded by the main app yet in this session.
  Either way, `moveFiles` itself validates the path is within a library path and
  the dialog shows the error if it isn't.
- For a single scene, the current folder is pre-filled as the default so an
  in-place rename-of-folder-only isn't necessary just to see where the file
  currently lives.
- The single-scene button hooks `SceneFileInfoPanel` directly via
  `PluginApi.patch.after(...)` - it's a real `PatchComponent`, and its props
  already carry the scene's file id/path, so no DOM scraping or extra GraphQL
  query is needed. (An earlier version anchored to the "reveal in file manager"
  button instead, which turned out to be a bad choice: that button renders
  nothing at all unless Stash detects it's being accessed via `localhost` -
  meaning it - and Move File's button - would silently vanish on any
  remote/reverse-proxied setup.)
- The bulk dropdown item is injected as a plain DOM node (not a real
  react-bootstrap `Dropdown.Item`), because the scene list's operations menu has
  no official plugin extension point - `otherOperations` is built inline inside
  `FilteredSceneList` and never passed down as a patchable prop. The live
  selection itself *is* exposed as a prop on the `SceneList` component though, so
  that part is captured cleanly via `PluginApi.patch.before("SceneList", ...)`
  rather than scraped from checkboxes in the DOM.
- `FolderSelect` runs its directory browsing through an Apollo query, and this
  plugin's modal is mounted into its own detached `ReactDOM.render` root
  (outside the main app's `<ApolloProvider>`), so it's wrapped in its own
  `ApolloProvider` using the same client instance the app itself uses
  (`PluginApi.utils.StashService.getClient()`).

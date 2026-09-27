# Move File

A frontend for Stash's `moveFiles` mutation, which has existed in the backend since
[#3557](https://github.com/stashapp/stash/pull/3557) but has no UI of its own in
core Stash. Adds:

- A **Move** button next to the existing "reveal in file manager" button on a scene's
  file info panel, for moving that one scene's file (parallels how `RenameFile` lets
  you rename the current scene's file from the Edit tab).
- A **Move N Files…** item in the scene list's `...` bulk-operations dropdown,
  shown whenever one or more scenes are selected - for moving every selected
  scene's file(s) to the same destination folder in one go.

Both open the same small dialog asking for a destination folder, then call Stash's
`moveFiles` mutation - which moves the file(s) on disk **and** updates the database
in one transaction, so there's no rescan needed and the DB never points at a stale
path (same approach the community `sceneRename` plugin uses).

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

## Notes / current limitations

- Scoped to **scenes** only for now - the bulk dropdown item targets the main
  Scenes list specifically. The same approach could be extended to Images/
  Galleries if wanted.
- The destination folder is a plain text field (an absolute path within one of
  your library paths - `moveFiles` itself validates this and the dialog will show
  the error if it doesn't match). There's no folder browser/autocomplete yet.
- For a single scene, the current folder is pre-filled as the default so an
  in-place rename-of-folder-only isn't necessary just to see where the file
  currently lives.
- The single-scene button is anchored to the `.reveal-in-filesystem-button`
  element (a stable, locale-independent selector) rather than the "Path" field's
  label, which is translated and would break in non-English locales.
- The bulk dropdown item is injected as a plain DOM node (not a real
  react-bootstrap `Dropdown.Item`), because the scene list's operations menu has
  no official plugin extension point - `otherOperations` is built inline inside
  `FilteredSceneList` and never passed down as a patchable prop. The live
  selection itself *is* exposed as a prop on the `SceneList` component though, so
  that part is captured cleanly via `PluginApi.patch.before("SceneList", ...)`
  rather than scraped from checkboxes in the DOM.

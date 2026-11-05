# Subtitle Markers

Adds a **Marker** item to the main nav bar, leading to a page where you pick
a folder (browsing it the same way Stash's own Scan/Clean folder picker
does) and a phrase to search for; the plugin then searches every `.srt`
subtitle file under that folder (recursively, including subfolders) for the
phrase, and creates a scene marker wherever it's found - on the scene whose
video file the subtitle belongs to, using the tag and title you choose -
then queues marker preview generation for whatever it created.

Useful for turning something only written in a scene's subtitles (a line of
dialogue, a safe word, a specific phrase) into markers you can filter/jump to
like any other marker, without watching the whole thing or editing scenes by
hand one at a time.

## How it works

- **Folder picking is Stash's own real `FolderSelect` component** (the same
  one used in the Scan/Clean task dialogs) - type a path or click your way
  down through subfolders, starting from your configured library paths.
- **Matching text to a scene**: a subtitle file is matched to its video using
  the same convention Stash itself uses for captions - `movie.srt` or
  `movie.en.srt` next to `movie.mp4` belongs to that scene. The scene has to
  already be in your library (scanned in) for a marker to be created.
- **The search is plain text, case-insensitive** - not a regex. It's matched
  against each subtitle cue's text (multi-line cues are joined into one line
  first).
- **A marker is created at each matching cue's start time**, except where
  that would be a near-duplicate (within 3 seconds) of another marker already
  created - either earlier in the same run, or from a previous run with the
  same tag. That's what makes re-running the task on the same folder safe,
  and keeps one spoken line split across several cues from producing a
  marker for every cue.
- **Malformed subtitle files don't stop the run** - a block that doesn't
  parse as a valid cue is skipped, not fatal; the same goes for a subtitle
  with no matching scene in your library (logged and skipped, not an error).
- **Marker preview generation is queued automatically** once the run
  finishes, scoped to only the marker(s) it actually created (Stash's
  `metadataGenerate` mutation with `markerIDs` set) - nothing else in your
  library gets touched. Skipped entirely if nothing was created. Covers the
  marker card's static thumbnail, animated hover preview, and video preview
  (`markerScreenshots`/`markerImagePreviews`/`markers`) - without
  `markerScreenshots` the card's thumbnail is left showing as pending
  indefinitely, since the video preview alone doesn't cover it.
- **Respects `.stashignore`** - a folder (or individual subtitle file) a
  `.stashignore` excludes is skipped, the same way Stash's own library scan
  skips it: gitignore-style patterns, applied hierarchically from the folder
  you pick down into each subfolder, with full support for negation
  (`!pattern`), `**`, and anchored vs. basename-at-any-depth matching. An
  ignored folder is never even walked into, not just filtered out afterwards.
- Runs as a background job (visible in Stash's task queue), since searching
  every subtitle under a folder can take a while on a large library. The page
  shows its progress and final status; per-marker detail (what was created,
  what was skipped and why) goes to Stash's own server log
  (Settings → Logs), the same as any other plugin task.

## Two parts

- **UI** (`subtitleMarkers.js`, compiled - see `build/README.md`): the form
  (folder, search text, tag, title) and job-progress display, using Stash's
  real `FolderSelect` and `TagIDSelect` components, not look-alikes.
- **Server-side task** (`subtitleMarkers.py`): does the actual work - walking
  the filesystem, parsing `.srt` files, and creating markers via Stash's
  GraphQL API. This runs on the Stash server itself (same as any other
  Python plugin task), since reading arbitrary files off disk isn't
  something a browser-side plugin can do - only the server can. Requires
  `requests` to be installed for the Python interpreter Stash uses to run
  plugins.

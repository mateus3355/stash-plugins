# Missing Assets

Three plugin tasks (Settings → Tasks → Plugin Tasks), no nav bar item or
custom page - just tags.

- **Scan and Tag** - scans every scene in your library and tags each one
  found missing something under a **Missing Assets** parent tag, with one
  child tag per missing-asset type:
  - **Missing Cover** - no cover image set for the scene at all.
  - **Missing Phash** - no perceptual hash fingerprint (duplicate detection
    can't compare this scene against others without one).
  - **Missing Sprite** - the hover-scrub thumbnail sprite hasn't been
    generated.
  - **Missing Scene Preview** - the scene's own hover-preview video hasn't
    been generated.
  - **Missing Marker Preview** - at least one of the scene's markers is
    missing its own preview video/image/screenshot.
  - **No Markers** - the scene has no scene markers at all.
  - **No Fingerprint** - the scene has no checksum/oshash of whatever type
    your server names generated files after, so sprite/preview/
    marker-preview can't be looked up on disk for it at all (cover and
    phash are unaffected - those come straight from the database).

  Creates the tags first if they don't already exist. Re-running keeps
  every tag's membership in sync - a scene that no longer qualifies (its
  preview got generated since the last run, say) has the tag taken back
  off, not just left stale - so you can tag, fix some, re-scan, and watch
  the counts shrink. Once tagged, use Stash's own Tags page (or the Scenes
  page, filtered by tag) to browse, select, and bulk-generate whatever each
  child tag is missing - this plugin only finds and labels them, it doesn't
  generate anything itself.
- **Create Tags** - creates the parent and child tags on their own,
  without scanning or tagging anything yet.
- **Remove Tags** - removes every tag this plugin created (untagging every
  scene first), including the parent. Leaves everything else in your
  library untouched.

## Disabling individual types (Settings → Plugins → Missing Assets)

Every type above is tracked by default. Each one has its own **Disable
<type>** checkbox (e.g. "Disable Missing Sprite") - check it to stop
**Scan and Tag** scanning for and tagging that one type entirely. A
disabled type's existing tag and whatever it's already applied to are left
exactly as they are - disabling only pauses further scanning/syncing for
it, it doesn't untag or delete anything. Re-enable it (uncheck the box) and
the next **Scan and Tag** picks it back up, bringing it back in sync.

These checkboxes show unchecked by default even though every type starts
out enabled - that's Stash's own Settings UI (an unset checkbox always
renders unchecked), not this plugin disabling anything on its own; nothing
is actually off until you explicitly check one.

## How it works

- **Cover and phash are checked against the database itself**, via Stash's
  own native `is_missing` scene filter (`cover`/`phash`) - both are real
  database columns/rows (`scenes.cover_blob`, the `fingerprints` table), so
  the database already knows the full list without walking every scene.
- **Scrubber sprite, scene preview, and marker previews are plain generated
  files** - Stash doesn't track their existence anywhere; `scene.paths.*`
  always builds a URL for them regardless of whether the file is actually
  there, and the route just 404s if it's missing when something requests
  it. The only way to know ahead of time is to check the filesystem
  directly, the same way this fork's Subtitle Markers plugin reads
  subtitle files directly rather than going through the API for them.
  Generated files are named after the scene's own hash (whichever one your
  server is configured to name them after - MD5 checksum or oshash,
  `Settings → Library → Generated file naming`) - read off the scene's
  *primary file's* own fingerprints (`Scene.checksum`/`.oshash` no longer
  exist on the GraphQL schema, despite still being in its raw `.graphql`
  source), not round-tripped through a second lookup. This plugin builds
  the exact same path Stash's own generator would have written to
  (`<generatedPath>/vtt/<hash>_sprite.jpg`,
  `<generatedPath>/screenshots/<hash>.mp4`,
  `<generatedPath>/markers/<hash>/<seconds>.jpg`, with `<seconds>`
  truncated toward zero, exactly like Stash's own marker generator does).
  A scene with no fingerprint of the active algorithm at all can't be
  checked this way, and gets its own "No Fingerprint" tag instead of
  silently being skipped.
- **Tagging is done in bulk** (`bulkSceneUpdate`), a handful of GraphQL
  calls total regardless of library size - not one mutation per scene.
- **Runs as a tracked background job** (`runPluginTask`, the same as any
  other plugin task) - progress and a final summary go to Settings → Logs,
  the same as this fork's other task-only plugins (e.g. List Error Files).

## Parts

- **`missingAssets.py`** - the task itself: paging through every scene via
  Stash's GraphQL API, checking the filesystem directly for whatever isn't
  tracked in the database, and creating/syncing the tags. Requires
  `requests` to be installed for the Python interpreter Stash uses to run
  plugins, and runs on the Stash server itself (the only place that can
  read its own generated-content folder directly).
- **`stash_interface.py`** - the small GraphQL client the task uses
  (configuration, this plugin's own settings, tag CRUD, scene paging, bulk
  tag updates).

No UI/JavaScript at all - everything here is a plain Python task, the same
shape as List Error Files.

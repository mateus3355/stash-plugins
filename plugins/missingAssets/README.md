# Missing Assets

Adds a **Missing Assets** item to the main nav bar, leading to a page with a
single **Scan Library** button. Scanning walks every scene in your library
and reports, in separate sections, anything missing:

- **Cover** - no cover image set for the scene at all.
- **Phash** - no perceptual hash fingerprint (duplicate detection can't
  compare this scene against others without one).
- **Scrubber sprite** - the hover-scrub thumbnail sprite hasn't been
  generated.
- **Scene preview** - the scene's own hover-preview video hasn't been
  generated.
- **Marker preview** - one of the scene's markers is missing its own
  preview video/image/screenshot.
- **No markers** - the scene has no scene markers at all.
- **Can't be checked (no fingerprint)** - the scene has no checksum/oshash
  of whatever type your server names generated files after, so sprite/
  preview/marker-preview can't be looked up on disk for it at all (cover and
  phash are unaffected - those come straight from the database).

Every entry links straight to that scene (`/scenes/<id>`), and a missing
marker preview links straight to that marker's own timestamp
(`/scenes/<id>?t=<seconds>`) - opened in a new tab, so the report itself
stays put.

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
  directly, the same way this plugin's companion, Subtitle Markers, reads
  subtitle files directly rather than going through the API for them.
  Generated files are named after the scene's own hash (whichever one your
  server is configured to name them after - MD5 checksum or oshash,
  `Settings → Library → Generated file naming`), so this plugin reads that
  setting and your `generatedPath`, and builds the exact same path Stash's
  own generator would have written to
  (`<generatedPath>/vtt/<hash>_sprite.jpg`,
  `<generatedPath>/screenshots/<hash>.mp4`,
  `<generatedPath>/markers/<hash>/<seconds>.jpg`, with `<seconds>`
  truncated toward zero, exactly like Stash's own marker generator does).
  A scene with no fingerprint of the active algorithm at all can't be
  checked this way, and shows up under its own section instead of silently
  being skipped.
- **Runs as a single synchronous operation** (`runPluginOperation`), not a
  tracked background job - this is a read-only report, and a background
  job's result isn't retrievable afterwards (only its log output is), so
  getting the full, structured result back to the page needs the
  synchronous call instead (same reasoning Subtitle Markers' own
  search-only mode uses it for).
- **A section that found nothing is hidden entirely** - if everything comes
  back clean, you get a plain "Nothing missing" message instead of six empty
  headings.

## Two parts

- **UI** (`missingAssets.js`, compiled - see `build/README.md`): the
  "Scan Library" button and the results list.
- **Server-side task** (`missingAssets.py`): does the actual work - paging
  through every scene via Stash's GraphQL API, and checking the filesystem
  directly for whatever isn't tracked in the database. Requires `requests`
  to be installed for the Python interpreter Stash uses to run plugins, and
  runs on the Stash server itself (the only place that can read its own
  generated-content folder directly).

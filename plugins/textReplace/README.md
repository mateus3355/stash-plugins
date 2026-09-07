# Text Replace

Finds a string across your library's text metadata and replaces every occurrence -
**directly against Stash's SQLite database**, not through the GraphQL API.

**Scope:** only Stash's database. Never renames or moves files on disk.

## What's covered

| Entity          | Fields                                                                 |
|-----------------|-------------------------------------------------------------------------|
| Tag             | name, sort name, description, aliases                                  |
| Performer       | name, disambiguation, details, aliases, ethnicity, country, eye color, hair color, measurements, fake tits, tattoos, piercings |
| Studio          | name, details, aliases                                                  |
| Group/Movie     | name, synopsis, aliases, director                                       |
| Scene           | title, details, code, director                                         |
| Gallery         | title, details, code, photographer, chapter titles                     |
| Image           | title, details, code, photographer                                     |
| Scene Marker    | title                                                                   |
| (all of the above) | saved URLs - **off by default**, see [Include URLs](#include-urls) below |

Each entity type can be turned off individually in the plugin settings.

## What's deliberately NOT covered

This is not a sweep of every text-typed column in the database - some columns that
look like plain text are actually structural data that must stay untouched:

- **File/folder paths and filenames** (`files.basename`, `folders.path`) - these are
  how Stash finds your actual files on disk. Editing them here without renaming the
  real file would break playback. (This plugin never touches files on disk, by design.)
- **Technical/reference values**: checksums, hashes, `stash_ids`, codec/format
  strings, image blob references, enum-like fields (e.g. performer gender,
  circumcised).
- **Custom fields** (`*_custom_fields.value`): stored as an opaquely-encoded value,
  not plain text, so a safe substring replace would need to decode its exact
  encoding first. Skipped to avoid corrupting it.
- **Group-to-subgroup relationship descriptions** (`groups_relations.description`):
  a composite-key table with no single row id; low value, skipped for now.
- **Saved filter names**: a UI convenience list, not library content.

If you need one of these covered, ask - some (like custom fields) are possible to
add carefully, just not included by default given the extra risk.

### Include URLs

Saved URLs (performer/studio/scene/gallery/image/group) are matched and replaced
like everything else, but **only when you turn on the "Include URLs" setting** -
it's off by default. Replacing a substring inside a URL can break a working link
more easily than in a description field (e.g. searching for a word that happens to
also appear in a domain name), so this is opt-in rather than bundled into the
per-entity toggles.

## Usage

1. Go to **Settings -> Plugins -> Plugins -> Text Replace** and fill in:
   - **Find Text** (required) - the text to search for.
   - **Replace Text** - what to replace it with (leave empty to delete occurrences).
   - **Case Sensitive** / **Whole Word Only** toggles.
   - Which entity types to include (all on by default), and **Include URLs** if wanted.
2. Run the **Preview Replace** task first (Settings -> Plugins -> Plugins -> Text
   Replace -> [Preview Replace]). This opens the database **read-only** and makes
   **no changes** - it logs every field that would change and writes a CSV report
   (`textReplace_preview_<timestamp>.csv`) into the plugin folder so you can review it.
3. Once you're happy with the preview, run **Apply Replace**. It performs the same
   matching and writes directly to the database, then writes an `..._apply_...csv`
   report of every change made (useful if you ever need to manually revert something).

## Why direct SQL instead of the GraphQL API

Talking to the database directly is much faster for a library-wide operation like this
(no per-page network round trips), but it means Stash's own Go application logic -
validation, `updated_at` bookkeeping, plugin hooks - is bypassed entirely. This plugin
was built by inspecting Stash's actual schema and validation code directly (not just
the GraphQL types) to compensate for that:

- Every `UPDATE` also bumps `updated_at`, matching what the API would do.
- **Tag names have no uniqueness constraint at the database level at all** - Stash
  enforces it purely in application code (checked against other tags' names *and*
  aliases, case-insensitively). Studios have the same name-vs-alias check layered on
  top of a real `UNIQUE` index. This plugin replicates both checks by hand before
  writing a name/alias change, and skips (logging an error) anything that would
  collide - so it won't silently create two tags with the same name. Performer names
  are protected by a genuine `UNIQUE(name, disambiguation)` index, so a collision
  there is simply caught as a database error and skipped the same way.
- Tag/Performer/Studio aliases, and all URL fields, live in separate join tables, not
  a column on the main row - handled accordingly.
- A Group's `synopsis` in the GraphQL API is the `description` column in the
  database; a Group's `aliases` is a single string column (unlike Tag/Performer/
  Studio, which each support a list of aliases in their own table).

**Trade-off to be aware of:** because this bypasses the API layer, anything else that
hooks into Stash's normal update events (other plugins, hooks) won't see these
changes as "updates" the way a GraphQL mutation would trigger them. The UI will
reflect the changes immediately on next load either way, since Stash queries the
database fresh per request.

## Notes

- The database is opened with the same busy-timeout approach Stash itself uses, and
  relies on Stash's database already being in WAL mode (the default) to write safely
  while Stash's own server process is running at the same time.
- The full set of matches for a given field is read into memory before any writes
  happen, so a change made partway through a run can't cause rows to be skipped or
  reprocessed - this matters in particular if Replace Text itself contains Find Text
  (e.g. "cat" -> "category").
- The search is applied per-field independently - if a tag's `name` and `aliases`
  both match, that shows up as two rows in the report, but is still counted as one
  changed tag in the summary line.
- Only `requests` is required as a pip dependency (used solely for two safe,
  read-only lookups: your plugin settings and the database file path) - `sqlite3` is
  part of the Python standard library.

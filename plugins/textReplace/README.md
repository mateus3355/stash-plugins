# Text Replace

Finds a string across your library's text metadata and replaces every occurrence.

**Scope:** only Stash's database. Never renames or moves files on disk.

Fields covered:

| Entity        | Fields                                          |
|---------------|--------------------------------------------------|
| Tag           | name, description, aliases                       |
| Performer     | name, disambiguation, details, aliases            |
| Studio        | name, details, aliases                            |
| Group/Movie   | name, synopsis                                    |
| Scene         | title, details                                    |
| Gallery       | title, details                                    |
| Image         | title, details                                    |
| Scene Marker  | title                                             |

Each entity type can be turned off individually in the plugin settings if you want to
narrow the scope.

## Usage

1. Go to **Settings -> Plugins -> Plugins -> Text Replace** and fill in:
   - **Find Text** (required) - the text to search for.
   - **Replace Text** - what to replace it with (leave empty to delete occurrences).
   - **Case Sensitive** / **Whole Word Only** toggles.
   - Which entity types to include (all on by default).
2. Run the **Preview Replace** task first (Settings -> Plugins -> Plugins -> Text
   Replace -> [Preview Replace]). This makes **no changes** - it logs every field
   that would change and writes a CSV report (`textReplace_preview_<timestamp>.csv`)
   into the plugin folder so you can review it.
3. Once you're happy with the preview, run **Apply Replace**. It performs the same
   matching and actually updates your library, writing an `..._apply_...csv` report
   of every change made (useful if you ever need to manually revert something).

## Notes

- The search is applied per-field independently - if a tag's `name` and `aliases`
  both match, that shows up as two rows in the report, but is still counted as one
  changed tag in the summary line.
- If applying a change would violate a uniqueness constraint (e.g. renaming two
  different tags so they'd end up with the same name), that one update is skipped
  and logged as an error; the rest of the run continues normally.
- Only `requests` is required (no `stashapp-tools`/`watchdog`/etc. dependency) -
  this plugin doesn't need `pip install` if you already have another Python plugin
  installed that depends on `requests`.

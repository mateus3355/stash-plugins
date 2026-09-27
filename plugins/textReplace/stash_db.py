# ---------------------------------------------------------------------------
# Schema reference (verified directly against a real, migrated Stash SQLite
# database - not guessed from GraphQL). This module is deliberately explicit
# about which columns it touches, rather than sweeping every text-typed
# column in the database: a lot of columns that look like plain text are
# actually structural/technical data that must never be substring-replaced -
# `files.basename` / `folders.path` (the on-disk paths Stash uses to find
# your actual files - editing these desyncs the DB from disk without
# renaming anything), checksums/hashes, `stash_ids`, codec/format strings,
# blob checksum references (`image_blob`, `cover_blob`, ...), and enum-like
# columns (`performers.gender`, `performers.circumcised`). Those are never
# touched, on purpose.
#
# Two entity-specific quirks:
#   - Tag/Performer/Studio aliases live in separate join tables
#     (tag_aliases, performer_aliases, studio_aliases) with a composite
#     primary key of (entity_id, alias) - not a column on the main table.
#     Group aliases are the exception: `groups.aliases` is a plain string
#     column, not a join table.
#   - `tags.name` has only a plain (non-unique) index - Stash enforces tag
#     name/alias uniqueness entirely in application code
#     (pkg/tag/update.go: EnsureTagNameUnique), not the database. Studios
#     have the same app-level name-vs-alias cross-check on top of a real
#     UNIQUE index. Performers rely solely on a genuine
#     UNIQUE(name, disambiguation) index, with no alias cross-check.
# Since raw SQL bypasses that Go application layer entirely, this module
# replicates the Tag/Studio uniqueness check by hand (see name_conflicts /
# child_value_conflicts) rather than silently allowing duplicate names.
#
# NOT covered, on purpose, beyond the file/technical columns above:
#   - `*_custom_fields.value`: an opaquely-encoded BLOB (not plain text),
#     so a safe substring replace would require decoding its exact
#     encoding first. Skipped rather than risk corrupting it.
#   - `groups_relations.description`: a composite-key table (no single id
#     column) describing a sub-group relationship; low value, skipped for
#     now.
#   - `saved_filters.name`: a UI convenience list, not library content.
# ---------------------------------------------------------------------------

ENTITIES = {
    "tag": {
        "label": "Tag",
        "table": "tags",
        "scalar_fields": ["name", "sort_name", "description"],
        "child_tables": [
            {"table": "tag_aliases", "id_col": "tag_id", "value_col": "alias", "check_uniqueness": True},
        ],
        "check_name_alias_uniqueness": True,
        "setting": "includeTags",
    },
    "performer": {
        "label": "Performer",
        "table": "performers",
        "scalar_fields": [
            "name", "disambiguation", "details", "ethnicity", "country",
            "eye_color", "hair_color", "measurements", "fake_tits",
            "tattoos", "piercings",
        ],
        "child_tables": [
            {"table": "performer_aliases", "id_col": "performer_id", "value_col": "alias", "check_uniqueness": False},
            {"table": "performer_urls", "id_col": "performer_id", "value_col": "url", "check_uniqueness": False, "gated_by": "includeUrls"},
        ],
        "check_name_alias_uniqueness": False,
        "setting": "includePerformers",
    },
    "studio": {
        "label": "Studio",
        "table": "studios",
        "scalar_fields": ["name", "details"],
        "child_tables": [
            {"table": "studio_aliases", "id_col": "studio_id", "value_col": "alias", "check_uniqueness": True},
            {"table": "studio_urls", "id_col": "studio_id", "value_col": "url", "check_uniqueness": False, "gated_by": "includeUrls"},
        ],
        "check_name_alias_uniqueness": True,
        "setting": "includeStudios",
    },
    "group": {
        "label": "Group",
        "table": "groups",
        # NOTE: DB column is `description`; GraphQL exposes it as `synopsis`.
        # `aliases` is a plain scalar column here, not a join table.
        "scalar_fields": ["name", "description", "aliases", "director"],
        "child_tables": [
            {"table": "group_urls", "id_col": "group_id", "value_col": "url", "check_uniqueness": False, "gated_by": "includeUrls"},
        ],
        "check_name_alias_uniqueness": False,
        "setting": "includeGroups",
    },
    "scene": {
        "label": "Scene",
        "table": "scenes",
        "scalar_fields": ["title", "details", "code", "director"],
        "child_tables": [
            {"table": "scene_urls", "id_col": "scene_id", "value_col": "url", "check_uniqueness": False, "gated_by": "includeUrls"},
        ],
        "check_name_alias_uniqueness": False,
        "setting": "includeScenes",
    },
    "gallery": {
        "label": "Gallery",
        "table": "galleries",
        "scalar_fields": ["title", "details", "code", "photographer"],
        "child_tables": [
            {"table": "gallery_urls", "id_col": "gallery_id", "value_col": "url", "check_uniqueness": False, "gated_by": "includeUrls"},
        ],
        "check_name_alias_uniqueness": False,
        "setting": "includeGalleries",
    },
    "gallery_chapter": {
        "label": "Gallery Chapter",
        "table": "galleries_chapters",
        "scalar_fields": ["title"],
        "child_tables": [],
        "check_name_alias_uniqueness": False,
        # Chapters belong to a gallery - fold into the same toggle rather
        # than adding a separate setting for it.
        "setting": "includeGalleries",
    },
    "image": {
        "label": "Image",
        "table": "images",
        "scalar_fields": ["title", "details", "code", "photographer"],
        "child_tables": [
            {"table": "image_urls", "id_col": "image_id", "value_col": "url", "check_uniqueness": False, "gated_by": "includeUrls"},
        ],
        "check_name_alias_uniqueness": False,
        "setting": "includeImages",
    },
}

MARKER_TABLE = "scene_markers"


def like_pattern(find_text):
    """Builds a LIKE pattern for find_text, escaping LIKE's own wildcard
    characters (% and _) so a literal '%' or '_' in the search text is
    matched literally instead of acting as a wildcard."""
    escaped = find_text.replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_")
    return f"%{escaped}%"


class StashDB:
    """Runs all SQL through Stash's own querySQL/execSQL GraphQL mutations
    (see stash_interface.py) instead of opening a separate connection to
    the database file. That means every statement goes through the same
    live connection and transaction handling the rest of the server
    already uses - no database file to locate, no WAL/busy-timeout
    juggling of our own."""

    def __init__(self, stash, read_only):
        self.stash = stash
        self.read_only = read_only

    def close(self):
        pass  # nothing to close - stash's own connection handles that.

    def _query(self, sql, args):
        return self.stash.query_sql(sql, args)

    def _exec(self, sql, args):
        if self.read_only:
            # Defense in depth: dry runs should never reach this. If they
            # do (a coding mistake), fail loudly rather than write anyway.
            raise RuntimeError(f"Refusing to exec SQL during a read-only (preview) run: {sql}")
        return self.stash.exec_sql(sql, args)

    # -- scalar fields (a single column on the entity's own table) --------

    def find_scalar_matches(self, table, field, find_text):
        rows = self._query(
            f"SELECT id, {field} AS value FROM {table} WHERE {field} LIKE ? ESCAPE '\\'",
            [like_pattern(find_text)],
        )
        return [(row["id"], row["value"]) for row in rows]

    def update_scalar_field(self, table, field, entity_id, new_value):
        self._exec(
            f"UPDATE {table} SET {field} = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
            [new_value, entity_id],
        )

    # -- child text tables: aliases (tag_aliases, ...) and urls (scene_urls, ...) --
    # Both shapes are (entity_id, text_value, ...) with the text value part
    # of the primary key, so they share the same find/update logic.

    def find_child_matches(self, table, id_col, value_col, find_text):
        rows = self._query(
            f"SELECT {id_col} AS entity_id, {value_col} AS value FROM {table} WHERE {value_col} LIKE ? ESCAPE '\\'",
            [like_pattern(find_text)],
        )
        return [(row["entity_id"], row["value"]) for row in rows]

    def update_child_value(self, table, id_col, value_col, entity_id, old_value, new_value):
        self._exec(
            f"UPDATE {table} SET {value_col} = ? WHERE {id_col} = ? AND {value_col} = ?",
            [new_value, entity_id, old_value],
        )

    # -- Tag/Studio name<->alias uniqueness (see module docstring) --------

    def name_conflicts(self, table, alias_table, entity_id, candidate_name):
        """True if candidate_name (case-insensitive) is already the name of
        a DIFFERENT row in `table`, or the alias of ANY row in
        `alias_table` (including this one, mirroring EnsureTagNameUnique's
        symmetric name<->alias check)."""
        rows = self._query(
            f"SELECT id FROM {table} WHERE id != ? AND name = ? COLLATE NOCASE",
            [entity_id, candidate_name],
        )
        if rows:
            return True
        rows = self._query(
            f"SELECT 1 FROM {alias_table} WHERE alias = ? COLLATE NOCASE",
            [candidate_name],
        )
        return len(rows) > 0

    def child_value_conflicts(self, table, child_table, id_col, value_col, entity_id, candidate_value):
        """True if candidate_value (case-insensitive) is already some row's
        name in `table`, or already this same value in a DIFFERENT entity's
        row of `child_table`. Only meaningful for check_uniqueness=True
        child tables (i.e. Tag/Studio aliases)."""
        rows = self._query(
            f"SELECT 1 FROM {table} WHERE name = ? COLLATE NOCASE",
            [candidate_value],
        )
        if rows:
            return True
        rows = self._query(
            f"SELECT 1 FROM {child_table} WHERE {value_col} = ? COLLATE NOCASE AND {id_col} != ?",
            [candidate_value, entity_id],
        )
        return len(rows) > 0

    # -- Scene markers (own table, no aliases) -----------------------------

    def find_all_marker_titles(self):
        rows = self._query(f"SELECT id, title AS value FROM {MARKER_TABLE}", [])
        return [(row["id"], row["value"]) for row in rows]

    def update_marker_title(self, marker_id, new_title):
        self._exec(
            f"UPDATE {MARKER_TABLE} SET title = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
            [new_title, marker_id],
        )

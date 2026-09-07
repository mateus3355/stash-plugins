import sqlite3

# ---------------------------------------------------------------------------
# Schema reference (verified directly against a real, migrated Stash SQLite
# database - not guessed from GraphQL). Notable gotchas vs. the GraphQL API:
#   - Tag/Performer/Studio aliases live in separate join tables
#     (tag_aliases, performer_aliases, studio_aliases) with a composite
#     primary key of (entity_id, alias) - NOT a column on the main table.
#   - Group aliases are the one exception: `groups.aliases` is a plain
#     string column, not a join table.
#   - What the GraphQL API calls a Group's "synopsis" is the `description`
#     column in the database.
#   - `tags.name` has only a plain (non-unique) index - Stash enforces tag
#     name/alias uniqueness entirely in application code
#     (pkg/tag/update.go: EnsureTagNameUnique), not the database. Studios
#     have the same app-level name-vs-alias cross-check on top of their
#     real UNIQUE index. Performers rely solely on a genuine
#     UNIQUE(name, disambiguation) index, with no alias cross-check.
# Since raw SQL bypasses that Go application layer entirely, this module
# replicates the Tag/Studio uniqueness check by hand (see _name_conflicts /
# _alias_conflicts) rather than silently allowing duplicate names.
# ---------------------------------------------------------------------------

ENTITIES = {
    "tag": {
        "label": "Tag",
        "table": "tags",
        "scalar_fields": ["name", "description"],
        "alias_table": "tag_aliases",
        "alias_id_col": "tag_id",
        "check_name_alias_uniqueness": True,
        "setting": "includeTags",
    },
    "performer": {
        "label": "Performer",
        "table": "performers",
        "scalar_fields": ["name", "disambiguation", "details"],
        "alias_table": "performer_aliases",
        "alias_id_col": "performer_id",
        "check_name_alias_uniqueness": False,
        "setting": "includePerformers",
    },
    "studio": {
        "label": "Studio",
        "table": "studios",
        "scalar_fields": ["name", "details"],
        "alias_table": "studio_aliases",
        "alias_id_col": "studio_id",
        "check_name_alias_uniqueness": True,
        "setting": "includeStudios",
    },
    "group": {
        "label": "Group",
        "table": "groups",
        # NOTE: DB column is `description`; GraphQL exposes it as `synopsis`.
        # `aliases` is a plain scalar column here, not a join table.
        "scalar_fields": ["name", "description", "aliases"],
        "alias_table": None,
        "alias_id_col": None,
        "check_name_alias_uniqueness": False,
        "setting": "includeGroups",
    },
    "scene": {
        "label": "Scene",
        "table": "scenes",
        "scalar_fields": ["title", "details"],
        "alias_table": None,
        "alias_id_col": None,
        "check_name_alias_uniqueness": False,
        "setting": "includeScenes",
    },
    "gallery": {
        "label": "Gallery",
        "table": "galleries",
        "scalar_fields": ["title", "details"],
        "alias_table": None,
        "alias_id_col": None,
        "check_name_alias_uniqueness": False,
        "setting": "includeGalleries",
    },
    "image": {
        "label": "Image",
        "table": "images",
        "scalar_fields": ["title", "details"],
        "alias_table": None,
        "alias_id_col": None,
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
    def __init__(self, path, read_only):
        self.read_only = read_only
        if read_only:
            self.conn = sqlite3.connect(f"file:{path}?mode=ro", uri=True)
        else:
            self.conn = sqlite3.connect(path)
        # Stash itself uses a 5s busy timeout for the same reason: this
        # connection and Stash's own live server connection(s) both write
        # to this file concurrently. WAL mode (already enabled by Stash)
        # is what makes that workable; the busy timeout covers the rest.
        self.conn.execute("PRAGMA busy_timeout = 8000")
        self.conn.row_factory = sqlite3.Row

    def close(self):
        self.conn.close()

    # -- scalar fields (a single column on the entity's own table) --------

    def find_scalar_matches(self, table, field, find_text):
        rows = self.conn.execute(
            f"SELECT id, {field} AS value FROM {table} WHERE {field} LIKE ? ESCAPE '\\'",
            (like_pattern(find_text),),
        ).fetchall()
        return [(row["id"], row["value"]) for row in rows]

    def update_scalar_field(self, table, field, entity_id, new_value):
        self.conn.execute(
            f"UPDATE {table} SET {field} = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
            (new_value, entity_id),
        )
        self.conn.commit()

    # -- alias join tables (tag_aliases / performer_aliases / studio_aliases) --

    def find_alias_matches(self, alias_table, id_col, find_text):
        rows = self.conn.execute(
            f"SELECT {id_col} AS entity_id, alias FROM {alias_table} WHERE alias LIKE ? ESCAPE '\\'",
            (like_pattern(find_text),),
        ).fetchall()
        return [(row["entity_id"], row["alias"]) for row in rows]

    def update_alias(self, alias_table, id_col, entity_id, old_alias, new_alias):
        self.conn.execute(
            f"UPDATE {alias_table} SET alias = ? WHERE {id_col} = ? AND alias = ?",
            (new_alias, entity_id, old_alias),
        )
        self.conn.commit()

    # -- Tag/Studio name<->alias uniqueness (see module docstring) --------

    def name_conflicts(self, table, alias_table, entity_id, candidate_name):
        """True if candidate_name (case-insensitive) is already the name of
        a DIFFERENT row in `table`, or the alias of ANY row in
        `alias_table` (including this one, mirroring EnsureTagNameUnique's
        symmetric name<->alias check)."""
        row = self.conn.execute(
            f"SELECT id FROM {table} WHERE id != ? AND name = ? COLLATE NOCASE",
            (entity_id, candidate_name),
        ).fetchone()
        if row:
            return True
        row = self.conn.execute(
            f"SELECT 1 FROM {alias_table} WHERE alias = ? COLLATE NOCASE",
            (candidate_name,),
        ).fetchone()
        return row is not None

    def alias_conflicts(self, table, alias_table, id_col, entity_id, candidate_alias):
        """True if candidate_alias (case-insensitive) is already some row's
        name in `table`, or already an alias of a DIFFERENT entity."""
        row = self.conn.execute(
            f"SELECT 1 FROM {table} WHERE name = ? COLLATE NOCASE",
            (candidate_alias,),
        ).fetchone()
        if row:
            return True
        row = self.conn.execute(
            f"SELECT 1 FROM {alias_table} WHERE alias = ? COLLATE NOCASE AND {id_col} != ?",
            (candidate_alias, entity_id),
        ).fetchone()
        return row is not None

    # -- Scene markers (own table, no aliases) -----------------------------

    def find_all_marker_titles(self):
        rows = self.conn.execute(f"SELECT id, title AS value FROM {MARKER_TABLE}").fetchall()
        return [(row["id"], row["value"]) for row in rows]

    def update_marker_title(self, marker_id, new_title):
        self.conn.execute(
            f"UPDATE {MARKER_TABLE} SET title = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
            (new_title, marker_id),
        )
        self.conn.commit()

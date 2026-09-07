import sys
import json
import os
import re
import csv
import time
import sqlite3

import log
from stash_interface import StashInterface
from stash_db import StashDB, ENTITIES

PLUGIN_ID = "textReplace"


def main():
    json_input = json.loads(sys.stdin.read())
    mode = json_input["args"]["mode"]  # "preview" or "apply"
    server_connection = json_input["server_connection"]
    plugin_dir = server_connection.get("PluginDir") or os.path.dirname(os.path.abspath(__file__))
    dry_run = mode != "apply"

    stash = StashInterface(server_connection)
    settings = stash.get_plugin_settings(PLUGIN_ID)
    find_text = get_str_setting(settings, "findText")
    replace_text = get_str_setting(settings, "replaceText")
    case_sensitive = get_bool_setting(settings, "caseSensitive", True)
    whole_word = get_bool_setting(settings, "wholeWord", False)

    if not find_text:
        msg = "Find Text setting is empty. Set it under Settings > Plugins > Plugins > Text Replace, then run again."
        log.error(msg)
        print(json.dumps({"output": f"error: {msg}"}))
        return

    if (find_text == replace_text) if case_sensitive else (find_text.lower() == replace_text.lower()):
        log.warning("Find Text and Replace Text are the same - nothing to do.")
        print(json.dumps({"output": "ok - nothing to do"}))
        return

    db_path = stash.get_database_path()
    log.info(f"Opening database at {db_path} ({'read-only' if dry_run else 'read-write'}).")
    db = StashDB(db_path, read_only=dry_run)

    try:
        report_rows = []
        total_matched = 0

        log.info(
            f"{'Previewing' if dry_run else 'Applying'} replace: {find_text!r} -> {replace_text!r} "
            f"(case_sensitive={case_sensitive}, whole_word={whole_word})"
        )

        entity_items = list(ENTITIES.items())
        total_steps = len(entity_items) + 1  # +1 for scene markers
        for step, (entity_key, cfg) in enumerate(entity_items):
            log.progress(step / total_steps)
            if not get_bool_setting(settings, cfg["setting"], True):
                log.debug(f"Skipping {cfg['label']} (disabled in settings).")
                continue
            count = process_entity_type(db, cfg, settings, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows)
            if count:
                log.info(f"{cfg['label']}: {count} matched.")
            total_matched += count

        log.progress(len(entity_items) / total_steps)
        if get_bool_setting(settings, "includeMarkers", True):
            count = process_scene_markers(db, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows)
            if count:
                log.info(f"Scene Marker: {count} matched.")
            total_matched += count
        log.progress(1)
    finally:
        db.close()

    report_path = write_report(plugin_dir, report_rows, dry_run)

    summary = (
        f"{'Preview' if dry_run else 'Apply'} complete. "
        f"{total_matched} item(s) {'would be' if dry_run else 'were'} changed "
        f"({len(report_rows)} field replacement(s) total)."
    )
    if report_path:
        summary += f" Report: {report_path}"
    log.info(summary)

    print(json.dumps({"output": summary}))


# ---------------------------------------------------------------------------
# Settings helpers
# ---------------------------------------------------------------------------

def get_str_setting(settings, key, default=""):
    value = settings.get(key)
    return default if value is None else str(value)


def get_bool_setting(settings, key, default=True):
    value = settings.get(key)
    return default if value is None else bool(value)


# ---------------------------------------------------------------------------
# Matching / replacing
# ---------------------------------------------------------------------------

def do_replace(text, find_text, replace_text, case_sensitive, whole_word):
    if not text:
        return text
    pattern = re.escape(find_text)
    if whole_word:
        pattern = r"\b" + pattern + r"\b"
    flags = 0 if case_sensitive else re.IGNORECASE
    return re.sub(pattern, lambda m: replace_text, text, flags=flags)


def process_entity_type(db, cfg, settings, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows):
    """For each in-scope field of this entity type, fetches every row whose
    value LIKE-matches find_text (a superset - SQLite's LIKE is
    case-insensitive for ASCII regardless of our case_sensitive setting),
    then applies the exact case_sensitive/whole_word check client-side via
    do_replace. The whole match set per field is fetched up front, before
    any UPDATE runs, for the same reason the earlier GraphQL version did
    this: mutating a row while still paginating/matching against it could
    cause it to be skipped or (if replace_text itself contains find_text)
    re-processed.
    """
    label = cfg["label"]
    table = cfg["table"]
    seen_ids = set()

    for field in cfg["scalar_fields"]:
        matches = db.find_scalar_matches(table, field, find_text)
        for entity_id, old_value in matches:
            new_value = do_replace(old_value, find_text, replace_text, case_sensitive, whole_word)
            if new_value == old_value:
                continue

            if field == "name" and cfg["check_name_alias_uniqueness"]:
                alias_table = next(c["table"] for c in cfg["child_tables"] if c["check_uniqueness"])
                if db.name_conflicts(table, alias_table, entity_id, new_value):
                    log.error(
                        f"[{label}#{entity_id}] Skipped renaming to {new_value!r}: "
                        f"already in use as another {label.lower()}'s name or alias."
                    )
                    continue

            seen_ids.add(entity_id)
            report_rows.append([label, entity_id, field, old_value, new_value])
            if dry_run:
                log.info(f"[PREVIEW][{label}#{entity_id}] {field}: {old_value!r} -> {new_value!r}")
                continue
            try:
                db.update_scalar_field(table, field, entity_id, new_value)
                log.info(f"[{label}#{entity_id}] {field}: {old_value!r} -> {new_value!r}")
            except sqlite3.IntegrityError as e:
                # Most likely a uniqueness violation (e.g. two performers ending up
                # with the same name+disambiguation) - log it and keep going
                # instead of aborting the whole run.
                log.error(f"[{label}#{entity_id}] Failed to update field '{field}': {e}")
            except sqlite3.OperationalError as e:
                log.error(f"[{label}#{entity_id}] Database error updating field '{field}': {e}")

    for child in cfg["child_tables"]:
        if child.get("gated_by") and not get_bool_setting(settings, child["gated_by"], False):
            continue
        child_table, id_col, value_col = child["table"], child["id_col"], child["value_col"]
        field_label = value_col + "s" if value_col == "alias" else value_col
        matches = db.find_child_matches(child_table, id_col, value_col, find_text)
        for entity_id, old_value in matches:
            new_value = do_replace(old_value, find_text, replace_text, case_sensitive, whole_word)
            if new_value == old_value:
                continue

            if child["check_uniqueness"]:
                if db.child_value_conflicts(table, child_table, id_col, value_col, entity_id, new_value):
                    log.error(
                        f"[{label}#{entity_id}] Skipped {field_label} {old_value!r} -> {new_value!r}: "
                        f"already in use as a {label.lower()} name or another alias."
                    )
                    continue

            seen_ids.add(entity_id)
            report_rows.append([label, entity_id, field_label, old_value, new_value])
            if dry_run:
                log.info(f"[PREVIEW][{label}#{entity_id}] {field_label}: {old_value!r} -> {new_value!r}")
                continue
            try:
                db.update_child_value(child_table, id_col, value_col, entity_id, old_value, new_value)
                log.info(f"[{label}#{entity_id}] {field_label}: {old_value!r} -> {new_value!r}")
            except sqlite3.IntegrityError as e:
                log.error(f"[{label}#{entity_id}] Failed to update {field_label} {old_value!r}: {e}")
            except sqlite3.OperationalError as e:
                log.error(f"[{label}#{entity_id}] Database error updating {field_label} {old_value!r}: {e}")

    return len(seen_ids)


def process_scene_markers(db, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows):
    # No index worth filtering on for a one-off text search over a table
    # that's typically small - fetch every title and match client-side.
    seen_ids = set()
    for marker_id, old_value in db.find_all_marker_titles():
        new_value = do_replace(old_value, find_text, replace_text, case_sensitive, whole_word)
        if new_value == old_value:
            continue
        seen_ids.add(marker_id)
        report_rows.append(["Scene Marker", marker_id, "title", old_value, new_value])
        if dry_run:
            log.info(f"[PREVIEW][Scene Marker#{marker_id}] title: {old_value!r} -> {new_value!r}")
            continue
        try:
            db.update_marker_title(marker_id, new_value)
            log.info(f"[Scene Marker#{marker_id}] title: {old_value!r} -> {new_value!r}")
        except sqlite3.OperationalError as e:
            log.error(f"[Scene Marker#{marker_id}] Database error updating title: {e}")
    return len(seen_ids)


# ---------------------------------------------------------------------------
# Report
# ---------------------------------------------------------------------------

def write_report(plugin_dir, rows, dry_run):
    if not rows:
        return None
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    kind = "preview" if dry_run else "apply"
    filename = f"textReplace_{kind}_{timestamp}.csv"
    path = os.path.join(plugin_dir, filename)
    try:
        with open(path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["entity_type", "id", "field", "old_value", "new_value"])
            writer.writerows(rows)
        return path
    except Exception as e:
        log.error(f"Failed to write report file: {e}")
        return None


if __name__ == "__main__":
    log.info("Starting Text Replace plugin...")
    main()

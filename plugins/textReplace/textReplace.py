import sys
import json
import os
import re
import csv
import time

import log
from stash_interface import StashInterface

stash = None
PLUGIN_ID = "textReplace"
PER_PAGE = 100


def main():
    global stash

    json_input = json.loads(sys.stdin.read())
    mode = json_input["args"]["mode"]  # "preview" or "apply"
    server_connection = json_input["server_connection"]
    stash = StashInterface(server_connection)
    plugin_dir = server_connection.get("PluginDir") or os.path.dirname(os.path.abspath(__file__))

    settings = stash.get_plugin_settings(PLUGIN_ID)
    find_text = get_str_setting(settings, "findText")
    replace_text = get_str_setting(settings, "replaceText")
    case_sensitive = get_bool_setting(settings, "caseSensitive", True)
    whole_word = get_bool_setting(settings, "wholeWord", False)
    dry_run = mode != "apply"

    if not find_text:
        msg = "Find Text setting is empty. Set it under Settings > Plugins > Plugins > Text Replace, then run again."
        log.error(msg)
        print(json.dumps({"output": f"error: {msg}"}))
        return

    if case_sensitive:
        same = find_text == replace_text
    else:
        same = find_text.lower() == replace_text.lower()
    if same:
        log.warning("Find Text and Replace Text are the same - nothing to do.")
        print(json.dumps({"output": "ok - nothing to do"}))
        return

    entity_configs = build_entity_configs()
    total_steps = len(entity_configs) + 1  # +1 for scene markers
    report_rows = []
    total_matched = 0

    log.info(
        f"{'Previewing' if dry_run else 'Applying'} replace: {find_text!r} -> {replace_text!r} "
        f"(case_sensitive={case_sensitive}, whole_word={whole_word})"
    )

    for step, (entity_key, cfg) in enumerate(entity_configs.items()):
        log.progress(step / total_steps)
        if not get_bool_setting(settings, cfg["setting"], True):
            log.debug(f"Skipping {cfg['label']} (disabled in settings).")
            continue
        count = process_entity_type(entity_key, cfg, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows)
        if count:
            log.info(f"{cfg['label']}: {count} matched.")
        total_matched += count

    log.progress(len(entity_configs) / total_steps)
    if get_bool_setting(settings, "includeMarkers", True):
        count = process_scene_markers(find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows)
        if count:
            log.info(f"Scene Marker: {count} matched.")
        total_matched += count
    log.progress(1)

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
# Entity configuration - which fields on each entity type are in scope, and
# which Stash API calls to use to find/update them. Only free-text metadata
# fields are touched here - filenames/paths on disk are never modified.
# ---------------------------------------------------------------------------

def build_entity_configs():
    return {
        "tag": {
            "label": "Tag",
            "find_fn": stash.find_tags,
            "update_fn": stash.update_tag,
            "fields": ["name", "description"],
            "alias_field": "aliases",
            "setting": "includeTags",
        },
        "performer": {
            "label": "Performer",
            "find_fn": stash.find_performers,
            "update_fn": stash.update_performer,
            "fields": ["name", "disambiguation", "details"],
            "alias_field": "aliases",
            "setting": "includePerformers",
        },
        "studio": {
            "label": "Studio",
            "find_fn": stash.find_studios,
            "update_fn": stash.update_studio,
            "fields": ["name", "details"],
            "alias_field": "aliases",
            "setting": "includeStudios",
        },
        "group": {
            "label": "Group",
            "find_fn": stash.find_groups,
            "update_fn": stash.update_group,
            "fields": ["name", "synopsis"],
            "alias_field": None,
            "setting": "includeGroups",
        },
        "scene": {
            "label": "Scene",
            "find_fn": stash.find_scenes,
            "update_fn": stash.update_scene,
            "fields": ["title", "details"],
            "alias_field": None,
            "setting": "includeScenes",
        },
        "gallery": {
            "label": "Gallery",
            "find_fn": stash.find_galleries,
            "update_fn": stash.update_gallery,
            "fields": ["title", "details"],
            "alias_field": None,
            "setting": "includeGalleries",
        },
        "image": {
            "label": "Image",
            "find_fn": stash.find_images,
            "update_fn": stash.update_image,
            "fields": ["title", "details"],
            "alias_field": None,
            "setting": "includeImages",
        },
    }


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


def collect_matches(cfg, field, find_text, page_size=PER_PAGE):
    """Fetches every entity whose `field` matches find_text server-side
    (a case-insensitive superset - the exact case_sensitive/whole_word check
    happens client-side in do_replace), fully paginating BEFORE anything is
    mutated. This matters: if we mutated while still paging through this
    same filtered query, an updated entity could immediately drop out of
    (or, if replace_text itself contains find_text, stay stuck in) the
    result set and shift the page window, causing entities to be skipped
    or re-processed. Collecting the full snapshot first avoids all of that.
    """
    results = []
    page = 1
    entity_filter = {field: {"modifier": "INCLUDES", "value": find_text}}
    while True:
        try:
            batch = cfg["find_fn"](entity_filter, page, page_size)
        except Exception as e:
            log.error(f"[{cfg['label']}] Failed to query by field '{field}': {e}")
            break
        if not batch:
            break
        results.extend(batch)
        if len(batch) < page_size:
            break
        page += 1
    return results


def apply_field_change(cfg, field, entity, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows, seen_ids):
    is_alias = field == cfg.get("alias_field")
    if is_alias:
        old_value = entity.get(field) or []
        new_value = [do_replace(a, find_text, replace_text, case_sensitive, whole_word) for a in old_value]
        changed = new_value != old_value
        old_display, new_display = ", ".join(old_value), ", ".join(new_value)
    else:
        old_value = entity.get(field)
        new_value = do_replace(old_value, find_text, replace_text, case_sensitive, whole_word)
        changed = new_value != old_value
        old_display, new_display = old_value, new_value

    if not changed:
        return

    seen_ids.add(entity["id"])
    report_rows.append([cfg["label"], entity["id"], field, old_display, new_display])
    if dry_run:
        log.info(f"[PREVIEW][{cfg['label']}#{entity['id']}] {field}: {old_display!r} -> {new_display!r}")
        return
    try:
        cfg["update_fn"]({"id": entity["id"], field: new_value})
        log.info(f"[{cfg['label']}#{entity['id']}] {field}: {old_display!r} -> {new_display!r}")
    except Exception as e:
        # Most likely a uniqueness violation (e.g. two tags ending up with the
        # same name) - log it and keep going instead of aborting the whole run.
        log.error(f"[{cfg['label']}#{entity['id']}] Failed to update field '{field}': {e}")


def process_entity_type(entity_key, cfg, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows):
    seen_ids = set()
    fields_to_check = list(cfg["fields"])
    if cfg.get("alias_field"):
        fields_to_check.append(cfg["alias_field"])
    for field in fields_to_check:
        for entity in collect_matches(cfg, field, find_text):
            apply_field_change(cfg, field, entity, find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows, seen_ids)
    return len(seen_ids)


def process_scene_markers(find_text, replace_text, case_sensitive, whole_word, dry_run, report_rows):
    # Scene markers have no server-side text filter on title, so page through
    # all of them (unfiltered - safe to paginate normally, see collect_matches
    # docstring) and match client-side.
    markers = []
    page = 1
    while True:
        try:
            batch = stash.find_scene_markers(page, PER_PAGE)
        except Exception as e:
            log.error(f"[Scene Marker] Failed to query: {e}")
            break
        if not batch:
            break
        markers.extend(batch)
        if len(batch) < PER_PAGE:
            break
        page += 1

    seen_ids = set()
    for marker in markers:
        old_value = marker.get("title")
        new_value = do_replace(old_value, find_text, replace_text, case_sensitive, whole_word)
        if new_value == old_value:
            continue
        seen_ids.add(marker["id"])
        report_rows.append(["Scene Marker", marker["id"], "title", old_value, new_value])
        if dry_run:
            log.info(f"[PREVIEW][Scene Marker#{marker['id']}] title: {old_value!r} -> {new_value!r}")
            continue
        try:
            stash.update_scene_marker({"id": marker["id"], "title": new_value})
            log.info(f"[Scene Marker#{marker['id']}] title: {old_value!r} -> {new_value!r}")
        except Exception as e:
            log.error(f"[Scene Marker#{marker['id']}] Failed to update title: {e}")
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

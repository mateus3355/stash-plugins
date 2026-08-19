import sys
import json
import os

import log
from stash_interface import StashInterface

stash = None

# Custom field key used to persist each performer/tag's known content
# folders. Stored as a JSON-encoded string, because Stash custom fields
# only accept scalar values (not lists) — see update_content_folders().
CONTENT_FOLDERS_FIELD = "content_folders"


def main():
    global stash

    json_input = json.loads(sys.stdin.read())
    mode = json_input["args"]["mode"]
    stash = StashInterface(json_input["server_connection"])

    if mode == "scan_performers":
        scan_all_entity_folders("performer")
    elif mode == "scan_tags":
        scan_all_entity_folders("tag")
    elif mode == "update_content_folders":
        update_content_folders("performer")
        update_content_folders("tag")

    print(json.dumps({"output": "ok"}))


# ---------------------------------------------------------------------------
# Folder helpers
# ---------------------------------------------------------------------------

def common_folder(file_paths):
    """Return the deepest common ancestor directory of a list of file paths."""
    # print the file paths for debugging
    log.info(f"Finding common folder for paths: {file_paths}")
    if not file_paths:
        return None
    dirs = [os.path.dirname(p) for p in file_paths]
    if not dirs:
        return None
    common = os.path.commonpath(dirs)
    return common if common else None


# ---------------------------------------------------------------------------
# Bulk entity scan
# ---------------------------------------------------------------------------

def scan_all_entity_folders(entity_type):
    if entity_type == "performer":
        entities = stash.find_all_performers()
        filter_key = "performers"
    else:
        entities = stash.find_all_tags()
        filter_key = "tags"

    total = len(entities)
    log.info(f"Found {total} {entity_type}(s). Collecting folder paths…")

    scan_paths = set()
    skipped = 0

    for j, entity in enumerate(entities):
        log.progress(j / total if total > 0 else 1)

        scene_filter = {filter_key: {"modifier": "INCLUDES", "value": [entity["id"]]}}
        paths = stash.find_scene_paths(scene_filter, limit=10)

        if not paths:
            skipped += 1
            continue

        folder = common_folder(paths)
        if folder:
            scan_paths.add(folder)

    log.progress(1)

    if not scan_paths:
        log.info(f"No scannable folders found for any {entity_type}.")
        return

    log.info(
        f"Triggering scan of {len(scan_paths)} unique folder(s) "
        f"({skipped} {entity_type}(s) had no scenes and were skipped)."
    )

    job_id = stash.metadata_scan(list(scan_paths))
    log.info(f"Scan job queued (job ID: {job_id}).")


# ---------------------------------------------------------------------------
# Content-folders maintenance task
# ---------------------------------------------------------------------------

def update_content_folders(entity_type):
    """Iterates every performer or tag, collects the full set of unique
    folders backing its scenes/images/galleries, and stores that list as
    a custom field ("content_folders") on the entity. Fast Scan (the
    per-entity button) reads this field to know the complete folder set
    for Generate/AutoTag, instead of guessing from a handful of scenes.
    """
    entities = (
        stash.find_all_performers() if entity_type == "performer" else stash.find_all_tags()
    )
    total = len(entities)
    log.info(f"Updating content folders for {total} {entity_type}(s)…")

    updated = 0
    cleared = 0
    for i, entity in enumerate(entities):
        log.progress(i / total if total > 0 else 1)

        folders = stash.find_entity_folders(entity_type, entity["id"])
        stash.set_custom_field(
            entity_type, entity["id"], CONTENT_FOLDERS_FIELD, json.dumps(folders)
        )
        if folders:
            updated += 1
            log.debug(
                f"[{entity_type}] '{entity['name']}': {len(folders)} folder(s)."
            )
        else:
            cleared += 1

    log.progress(1)
    log.info(
        f"Done. {updated} {entity_type}(s) have content folders; "
        f"{cleared} {entity_type}(s) had none (field cleared)."
    )


if __name__ == "__main__":
    log.info("Starting fast scan plugin...")
    main()

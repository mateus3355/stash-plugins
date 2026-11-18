import sys
import json
import os

import log
from stash_interface import StashInterface

# How many scenes (or missing-cover/missing-phash hits) to fetch per GraphQL page - just a
# batch size, not a cap on how many are found.
PAGE_SIZE = 500

PARENT_TAG_NAME = "Missing Assets"
PARENT_TAG_DESCRIPTION = (
    "Parent tag for scenes missing a generated asset - see which child tag(s) a scene has "
    "for which one. Created/maintained by the Missing Assets plugin's tasks."
)

# (result key, tag name, tag description) - the result key matches scan()'s own return dict,
# and is also the id each find_scenes_* page is grouped by in scan_and_tag().
CHILD_TAGS = [
    ("missingCover", "Missing Cover", "No cover image set for this scene at all."),
    ("missingPhash", "Missing Phash", "No perceptual hash fingerprint for this scene."),
    ("missingSprite", "Missing Sprite", "The hover-scrub thumbnail sprite hasn't been generated for this scene."),
    ("missingPreview", "Missing Scene Preview", "The scene's own hover-preview video hasn't been generated."),
    ("missingMarkerPreview", "Missing Marker Preview", "At least one of this scene's markers is missing its own preview video/image/screenshot."),
    ("noMarkers", "No Markers", "This scene has no scene markers at all."),
    ("noFingerprint", "No Fingerprint", "No checksum/oshash of this server's active naming algorithm - sprite/preview/marker-preview can't be checked for this scene at all."),
]


# ---------------------------------------------------------------------------
# Hash / generated-path helpers
# ---------------------------------------------------------------------------


def primary_file(scene):
    """The scene's primary VideoFile dict, or None if it has no files at all. There's no
    primary_file_id on Scene (despite being in the raw .graphql schema source - that part of
    it is stale, no resolver actually backs it), so files[0] is the closest available
    stand-in - the same file a single-file scene (the overwhelming majority) would resolve
    to either way."""
    files = scene.get("files") or []
    return files[0] if files else None


def scene_hash(scene, algorithm):
    """The hash a generated file for this scene would be named after - same hash Stash
    itself uses (models.Scene.GetHash): the primary file's checksum (MD5) or oshash
    fingerprint, depending on the server's own videoFileNamingAlgorithm setting. None if
    that scene has no file, or no fingerprint of the relevant type at all."""
    f = primary_file(scene)
    if not f:
        return None
    fp_type = "md5" if algorithm == "MD5" else "oshash"
    for fp in f.get("fingerprints") or []:
        if fp["type"] == fp_type:
            return fp["value"]
    return None


def sprite_path(generated_path, h):
    return os.path.join(generated_path, "vtt", f"{h}_sprite.jpg")


def preview_path(generated_path, h):
    return os.path.join(generated_path, "screenshots", f"{h}.mp4")


def marker_screenshot_path(generated_path, h, seconds):
    # int(), not round() - this truncates toward zero, same as Stash's own marker generator
    # (internal/manager/task_generate_markers.go: `seconds := int(sceneMarker.Seconds)`), so
    # e.g. a marker at 12.9s is looked for at "12.jpg", not "13.jpg".
    return os.path.join(generated_path, "markers", h, f"{int(seconds)}.jpg")


def _entry(scene):
    return {"id": scene["id"], "title": scene.get("title") or ""}


# ---------------------------------------------------------------------------
# The scan itself
# ---------------------------------------------------------------------------


def _collect_missing_pages(stash, field, total_count, page_size=PAGE_SIZE):
    """Every {id, title} for a native is_missing field (cover/phash) - these are real
    database columns/rows, so the database already knows the full list; no need to walk
    every scene to find them, unlike the file-based checks below."""
    if total_count <= 0:
        return []
    results = []
    page = 1
    while True:
        scenes = stash.find_scenes_missing_page(field, page, page_size)
        if not scenes:
            break
        results.extend(scenes)
        if len(scenes) < page_size:
            break
        page += 1
    return results


def scan(stash, page_size=PAGE_SIZE):
    """Walks the whole library once, cross-referencing the database against what's actually
    on disk in the generated-content folder, for everything that isn't itself tracked in the
    database (sprite/scene-preview/marker-preview files are plain generated files - Stash
    doesn't record whether they exist, only builds a URL for them unconditionally, so the
    only way to know is to check the filesystem directly). Cover and phash *are* tracked in
    the database (scenes.cover_blob, the fingerprints table), so those two use Stash's own
    native is_missing filter instead of a file check - faster, and the authoritative source."""
    config = stash.get_configuration()
    generated_path = config.get("generatedPath") or ""
    algorithm = config.get("videoFileNamingAlgorithm") or "OSHASH"

    missing_cover = _collect_missing_pages(
        stash, "cover", stash.count_scenes_missing("cover"), page_size
    )
    missing_phash = _collect_missing_pages(
        stash, "phash", stash.count_scenes_missing("phash"), page_size
    )

    missing_sprite = []
    missing_preview = []
    missing_marker_preview = []
    no_markers = []
    no_fingerprint = []

    page = 1
    total = None
    scanned = 0
    while True:
        result = stash.find_scenes_page(page, page_size)
        if total is None:
            total = result["count"]
        scenes = result["scenes"]
        if not scenes:
            break

        for scene in scenes:
            scanned += 1
            log.progress(scanned / total if total else 1)

            h = scene_hash(scene, algorithm)
            if not h:
                no_fingerprint.append(_entry(scene))
                continue

            if not os.path.isfile(sprite_path(generated_path, h)):
                missing_sprite.append(_entry(scene))
            if not os.path.isfile(preview_path(generated_path, h)):
                missing_preview.append(_entry(scene))

            markers = scene.get("scene_markers") or []
            if not markers:
                no_markers.append(_entry(scene))
                continue
            for marker in markers:
                if not os.path.isfile(marker_screenshot_path(generated_path, h, marker["seconds"])):
                    missing_marker_preview.append(
                        {
                            "sceneId": scene["id"],
                            "sceneTitle": scene.get("title") or "",
                            "markerId": marker["id"],
                            "seconds": marker["seconds"],
                        }
                    )

        if len(scenes) < page_size:
            break
        page += 1

    log.progress(1)
    log.info(
        f"Scanned {scanned} scene(s). Missing: cover={len(missing_cover)} phash={len(missing_phash)} "
        f"sprite={len(missing_sprite)} preview={len(missing_preview)} "
        f"marker preview={len(missing_marker_preview)} no markers={len(no_markers)} "
        f"no fingerprint={len(no_fingerprint)}"
    )

    return {
        "totalScanned": scanned,
        "missingCover": missing_cover,
        "missingPhash": missing_phash,
        "missingSprite": missing_sprite,
        "missingPreview": missing_preview,
        "missingMarkerPreview": missing_marker_preview,
        "noMarkers": no_markers,
        "noFingerprint": no_fingerprint,
    }


# ---------------------------------------------------------------------------
# Tag tasks
# ---------------------------------------------------------------------------


def ensure_tags(stash):
    """Finds or creates the "Missing Assets" parent tag and its 7 children, and returns
    {result key: tag id}. Safe to call every time (scan_and_tag does, so tags always exist
    even if "Create Tags" was never run on its own first) - a tag that already exists is
    left exactly as it is, never recreated or duplicated."""
    parent = stash.find_tag(PARENT_TAG_NAME)
    if parent is None:
        parent = stash.create_tag(PARENT_TAG_NAME, PARENT_TAG_DESCRIPTION)
        log.info(f"Created parent tag '{PARENT_TAG_NAME}' (ID: {parent['id']})")
    else:
        log.info(f"Parent tag already exists: '{PARENT_TAG_NAME}' (ID: {parent['id']})")

    tag_ids = {}
    for key, name, description in CHILD_TAGS:
        tag = stash.find_tag(name)
        if tag is None:
            tag = stash.create_tag(name, description, parent_ids=[parent["id"]])
            log.info(f"Created tag '{name}' (ID: {tag['id']})")
        else:
            log.info(f"Tag already exists: '{name}' (ID: {tag['id']})")
        tag_ids[key] = tag["id"]
    return tag_ids


def scan_and_tag(stash):
    """Scans the library, then brings each child tag's membership exactly in line with
    what's actually missing right now - adding it to scenes newly found, and taking it back
    off scenes that no longer qualify (e.g. a preview that's since been generated), so
    re-running this after fixing some of them keeps the tags accurate instead of just
    accumulating."""
    tag_ids = ensure_tags(stash)
    found = scan(stash)

    category_scene_ids = {
        "missingCover": {e["id"] for e in found["missingCover"]},
        "missingPhash": {e["id"] for e in found["missingPhash"]},
        "missingSprite": {e["id"] for e in found["missingSprite"]},
        "missingPreview": {e["id"] for e in found["missingPreview"]},
        "missingMarkerPreview": {m["sceneId"] for m in found["missingMarkerPreview"]},
        "noMarkers": {e["id"] for e in found["noMarkers"]},
        "noFingerprint": {e["id"] for e in found["noFingerprint"]},
    }

    for key, name, _ in CHILD_TAGS:
        tag_id = tag_ids[key]
        should_have = category_scene_ids[key]
        currently_tagged = stash.find_scene_ids_with_tag(tag_id)

        to_add = should_have - currently_tagged
        to_remove = currently_tagged - should_have

        if to_add:
            stash.bulk_set_tag(sorted(to_add, key=int), tag_id, "ADD")
        if to_remove:
            stash.bulk_set_tag(sorted(to_remove, key=int), tag_id, "REMOVE")

        log.info(
            f"'{name}': {len(should_have)} scene(s) tagged (+{len(to_add)} / -{len(to_remove)})."
        )

    log.info(f"Done. Scanned {found['totalScanned']} scene(s).")


def remove_tags(stash):
    """Removes every tag this plugin created (untagging every scene first), and the parent
    tag too - leaves anything else in the library completely alone."""
    for key, name, _ in CHILD_TAGS:
        tag = stash.find_tag(name)
        if tag is None:
            log.info(f"Tag '{name}' doesn't exist - nothing to remove.")
            continue
        tagged = stash.find_scene_ids_with_tag(tag["id"])
        if tagged:
            stash.bulk_set_tag(sorted(tagged, key=int), tag["id"], "REMOVE")
        stash.destroy_tag(tag["id"])
        log.info(f"Removed tag '{name}' (untagged {len(tagged)} scene(s)).")

    parent = stash.find_tag(PARENT_TAG_NAME)
    if parent is None:
        log.info(f"Tag '{PARENT_TAG_NAME}' doesn't exist - nothing to remove.")
        return
    stash.destroy_tag(parent["id"])
    log.info(f"Removed parent tag '{PARENT_TAG_NAME}'.")


def main():
    json_input = json.loads(sys.stdin.read())
    mode = json_input.get("args", {}).get("mode", "scan_and_tag")
    stash = StashInterface(json_input["server_connection"])

    try:
        if mode == "create_tags":
            ensure_tags(stash)
        elif mode == "remove_tags":
            remove_tags(stash)
        else:
            scan_and_tag(stash)
    except Exception as e:
        log.error(f"Task failed: {e}")
        print(json.dumps({"error": str(e)}))
        return

    # Task-mode plugins (runPluginTask) don't have their return value retrieved anywhere -
    # only their log output does (Settings -> Logs) - so this is just a trivial, unused
    # success marker, same convention as this fork's other task-only plugins (listErrorFiles).
    print(json.dumps({"output": "ok"}))


if __name__ == "__main__":
    main()

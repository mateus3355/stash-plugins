import sys
import json
import os

import log
from stash_interface import StashInterface

# How many scenes (or missing-cover/missing-phash hits) to fetch per GraphQL page - just a
# batch size, not a cap on how many are reported.
PAGE_SIZE = 500


def scene_hash(scene, algorithm):
    """The hash a generated file for this scene would be named after - same hash Stash
    itself uses (models.Scene.GetHash): the scene's checksum (MD5) or oshash, depending on
    the server's own videoFileNamingAlgorithm setting. None if that scene has no fingerprint
    of the relevant type at all (nothing to check against - scene_hash is only comparable with
    the scene's own OWN hash algorithm already fixed, not guessable from the other one)."""
    if algorithm == "MD5":
        return scene.get("checksum") or None
    return scene.get("oshash") or None


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


def _collect_missing_pages(stash, field, total_count, page_size=PAGE_SIZE):
    """Every {id, title} for a native is_missing field (cover/phash) - these are real
    database columns/rows, so the database itself already knows the full list; no need to
    walk every scene in the library to find them, unlike the file-based checks below."""
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


def main():
    json_input = json.loads(sys.stdin.read())
    stash = StashInterface(json_input["server_connection"])

    try:
        result = scan(stash)
    except Exception as e:
        log.error(f"Scan failed: {e}")
        print(json.dumps({"error": str(e)}))
        return

    # Matches the JSON-RPC shape Stash expects from a plugin process (pkg/plugin/common/msg.go
    # PluginOutput) - this is what runPluginOperation's GraphQL response is built from, so the
    # UI's result comes back directly as this dict.
    print(json.dumps({"output": result}))


if __name__ == "__main__":
    main()

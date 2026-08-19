import sys
import json

import log
from stash_interface import StashInterface

TAG_NAME = "No Sound"
TAG_DESCRIPTION = (
    "Scene file has no audio track — the audio codec reported by ffprobe is empty."
)

stash = None


def main():
    global stash

    json_input = json.loads(sys.stdin.read())
    mode_arg = json_input["args"]["mode"]

    stash = StashInterface(json_input["server_connection"])

    if mode_arg == "tag_silent":
        tag_silent_files()
    elif mode_arg == "create_tag":
        create_no_sound_tag()
    elif mode_arg == "remove_tag":
        remove_no_sound_tag()

    print(json.dumps({"output": "ok"}))


# ---------------------------------------------------------------------------
# Tag helpers
# ---------------------------------------------------------------------------

def get_or_create_no_sound_tag():
    tag = stash.find_tag(TAG_NAME)
    if tag is None:
        tag = stash.create_tag(TAG_NAME, TAG_DESCRIPTION)
        if tag:
            log.info(f"Created tag '{TAG_NAME}' (ID: {tag['id']})")
        else:
            log.error(f"Failed to create tag '{TAG_NAME}'")
    return tag


def create_no_sound_tag():
    tag = stash.find_tag(TAG_NAME)
    if tag:
        log.info(f"Tag already exists: '{TAG_NAME}' (ID: {tag['id']})")
    else:
        tag = stash.create_tag(TAG_NAME, TAG_DESCRIPTION)
        if tag:
            log.info(f"Created tag '{TAG_NAME}' (ID: {tag['id']})")
        else:
            log.error(f"Failed to create tag '{TAG_NAME}'")


def remove_no_sound_tag():
    tag = stash.find_tag(TAG_NAME)
    if tag is None:
        log.info(f"Tag '{TAG_NAME}' does not exist — nothing to remove.")
        return

    tag_id = tag["id"]

    count, tagged_scenes = stash.find_scenes_by_tag(tag_id)
    log.info(f"Removing '{TAG_NAME}' from {count} scene(s)…")

    for j, scene in enumerate(tagged_scenes):
        log.progress(j / count if count > 0 else 1)
        remaining_ids = [t["id"] for t in scene.get("tags", []) if t["id"] != tag_id]
        stash.update_scene(scene["id"], remaining_ids)

    log.progress(1)
    stash.destroy_tag(tag_id)
    log.info(f"Deleted tag '{TAG_NAME}' (ID: {tag_id})")


# ---------------------------------------------------------------------------
# Core scan task
# ---------------------------------------------------------------------------

def tag_silent_files():
    no_sound_tag = get_or_create_no_sound_tag()
    if no_sound_tag is None:
        log.error("Could not obtain the 'No Sound' tag. Aborting.")
        return

    no_sound_tag_id = no_sound_tag["id"]

    # Scenes whose primary file has an empty audio_codec have no audio track.
    scene_count, scenes = stash.find_scenes(
        scene_filter={"audio_codec": {"modifier": "EQUALS", "value": ""}},
        filter_opts={"per_page": -1},
    )

    if scene_count == 0:
        log.info("No silent scenes found in the library.")
        log.progress(1)
        return

    log.info(f"Found {scene_count} scene(s) with no audio track.")

    tagged = 0
    skipped = 0

    for j, scene in enumerate(scenes):
        log.progress(j / scene_count)

        existing_tag_ids = [t["id"] for t in scene.get("tags", [])]

        if no_sound_tag_id in existing_tag_ids:
            skipped += 1
            continue

        new_tag_ids = existing_tag_ids + [no_sound_tag_id]
        result = stash.update_scene(scene["id"], new_tag_ids)

        scene_title = scene.get("title") or f"(ID: {scene['id']})"
        if result:
            files = scene.get("files", [])
            file_path = f" — {files[0]['path']}" if files else ""
            log.info(f"Tagged: {scene_title}{file_path}")
            tagged += 1
        else:
            log.error(f"Failed to tag scene {scene_title}")

    log.progress(1)
    log.info(
        f"Done. Newly tagged: {tagged} | Already tagged: {skipped} "
        f"| Total silent: {scene_count}"
    )


if __name__ == "__main__":
    main()

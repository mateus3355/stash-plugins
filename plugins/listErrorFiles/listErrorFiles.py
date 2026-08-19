import sys
import json
import re
import subprocess
import time
from datetime import datetime, timedelta

import log
from stash_interface import StashInterface

TAG_NAME = "Corrupted File"
TAG_DESCRIPTION = (
    "Scene file could not be properly scanned — possibly corrupted, "
    "truncated, or unreadable by ffmpeg/ffprobe."
)

# systemd unit that runs Stash — adjust if yours is named differently.
JOURNAL_UNIT = "stash"

# Job statuses that mean the generate task is done (success or not).
TERMINAL_JOB_STATUSES = {"FINISHED", "CANCELLED", "FAILED"}

# Only lines that look like an error get inspected for a file path.
ERROR_LINE_RE = re.compile(r"error", re.IGNORECASE)

# Path-looking token ending in a common video extension.
PATH_RE = re.compile(
    r'(/[^\s"\']+\.(?:mp4|mkv|avi|mov|wmv|flv|webm|m4v|mpg|mpeg|ts|m2ts|3gp))',
    re.IGNORECASE,
)

stash = None


def main():
    global stash

    json_input = json.loads(sys.stdin.read())
    mode_arg = json_input["args"]["mode"]

    stash = StashInterface(json_input["server_connection"])

    if mode_arg == "tag_corrupted":
        tag_corrupted_files()
    elif mode_arg == "create_tag":
        create_error_tag()
    elif mode_arg == "remove_tag":
        remove_error_tag()

    print(json.dumps({"output": "ok"}))


# ---------------------------------------------------------------------------
# Tag helpers
# ---------------------------------------------------------------------------

def get_or_create_error_tag():
    tag = stash.find_tag(TAG_NAME)
    if tag is None:
        tag = stash.create_tag(TAG_NAME, TAG_DESCRIPTION)
        if tag:
            log.info(f"Created tag '{TAG_NAME}' (ID: {tag['id']})")
        else:
            log.error(f"Failed to create tag '{TAG_NAME}'")
    return tag


def create_error_tag():
    tag = stash.find_tag(TAG_NAME)
    if tag:
        log.info(f"Tag already exists: '{TAG_NAME}' (ID: {tag['id']})")
    else:
        tag = stash.create_tag(TAG_NAME, TAG_DESCRIPTION)
        if tag:
            log.info(f"Created tag '{TAG_NAME}' (ID: {tag['id']})")
        else:
            log.error(f"Failed to create tag '{TAG_NAME}'")


def remove_error_tag():
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
# Generate job helpers
# ---------------------------------------------------------------------------

def wait_for_job(job_id, poll_interval=2):
    """Polls findJob until the generate task reaches a terminal status,
    mirroring its progress into our own log.progress()."""
    while True:
        job = stash.find_job(job_id)
        if job is None:
            log.warning(f"Job {job_id} disappeared from the queue — assuming it finished.")
            return

        progress = job.get("progress")
        if progress is not None:
            log.progress(progress)

        status = job.get("status")
        if status in TERMINAL_JOB_STATUSES:
            if status == "FAILED":
                log.warning(f"Generate job reported FAILED: {job.get('error')}")
            return

        time.sleep(poll_interval)


def scan_journal_for_error_paths(since):
    """Streams `journalctl -u <unit>` for the generate job's time window and
    returns the set of file paths mentioned on error lines.

    The log for a large library can be huge, so we never buffer it whole:
    journalctl is run without -f (it exits once it reaches "now"), and we
    iterate its stdout one line at a time, discarding each line as soon as
    it's been checked.
    """
    since_str = since.strftime("%Y-%m-%d %H:%M:%S")
    cmd = [
        "journalctl", "-u", JOURNAL_UNIT,
        "--since", since_str,
        "-o", "cat", "--no-pager",
    ]

    found_paths = set()

    try:
        proc = subprocess.Popen(
            cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True,
        )
    except FileNotFoundError:
        log.error(
            "`journalctl` is not available on this system — cannot scan logs "
            "for errors. This mode requires Stash to run under systemd."
        )
        return found_paths

    try:
        for line in proc.stdout:  # one line at a time, never the whole log
            if not ERROR_LINE_RE.search(line):
                continue
            for match in PATH_RE.findall(line):
                found_paths.add(match)
    finally:
        proc.stdout.close()
        stderr_output = proc.stderr.read()
        proc.stderr.close()
        proc.wait()

    if proc.returncode != 0:
        log.error(f"journalctl exited with code {proc.returncode}: {stderr_output.strip()}")

    return found_paths


# ---------------------------------------------------------------------------
# Core scan task
# ---------------------------------------------------------------------------

def tag_corrupted_files():
    error_tag = get_or_create_error_tag()
    if error_tag is None:
        log.error("Could not obtain the error tag. Aborting.")
        return

    error_tag_id = error_tag["id"]

    log.info("Indexing scene file paths...")
    _, scenes = stash.find_scenes(filter_opts={"per_page": -1})
    path_to_scene = {
        f["path"]: scene for scene in scenes for f in scene.get("files", [])
    }
    log.info(f"Indexed {len(path_to_scene)} file path(s) across {len(scenes)} scene(s).")

    # A few seconds of slack in case the journal write lags the API call.
    since = datetime.now() - timedelta(minutes=10)

    # log.info("Triggering a generate task to force ffmpeg to read every file...")
    # job_id = stash.metadata_generate()
    # if not job_id:
    #     log.error("Failed to queue the generate task. Aborting.")
    #     return

    # log.info(f"Generate job queued (ID: {job_id}). Waiting for it to finish...")
    # wait_for_job(job_id)
    # log.progress(1)

    log.info("Scanning journalctl for error paths reported during the generate job...")
    error_paths = scan_journal_for_error_paths(since)

    if not error_paths:
        log.info("No errors found in the logs for this run.")
        return

    log.info(f"Found {len(error_paths)} error path(s) in the log.")

    tagged = 0
    skipped = 0
    unmatched = 0

    for path in error_paths:
        scene = path_to_scene.get(path)
        if scene is None:
            unmatched += 1
            continue

        existing_tag_ids = [t["id"] for t in scene.get("tags", [])]
        if error_tag_id in existing_tag_ids:
            skipped += 1
            continue

        new_tag_ids = existing_tag_ids + [error_tag_id]
        result = stash.update_scene(scene["id"], new_tag_ids)

        scene_title = scene.get("title") or f"(ID: {scene['id']})"
        if result:
            log.info(f"Tagged: {scene_title} — {path}")
            tagged += 1
        else:
            log.error(f"Failed to tag scene {scene_title}")

    log.info(
        f"Done. Newly tagged: {tagged} | Already tagged: {skipped} "
        f"| Error paths without a matching scene: {unmatched}"
    )


if __name__ == "__main__":
    main()

import sys
import json
import os

import log
from stash_interface import StashInterface

# Kept well under any reasonable request/timeout limit, and - more
# importantly - moveFiles runs as a single database transaction: if one
# file in the batch fails (e.g. a name collision at the destination), the
# WHOLE call rolls back. Chunking means one bad file only takes out its own
# chunk instead of the entire selection.
CHUNK_SIZE = 50
PLUGIN_ID = "moveFile"


def main():
    json_input = json.loads(sys.stdin.read())
    args = json_input["args"]
    mode = args["mode"]
    stash = StashInterface(json_input["server_connection"])

    if mode == "move_files":
        move_files(stash, args)
    elif mode == "clean_empty_folders":
        clean_empty_folders(stash, args)
    else:
        log.error(f"Unknown mode: {mode}")

    print(json.dumps({"output": "ok"}))


def get_bool_setting(settings, key, default):
    value = settings.get(key)
    return default if value is None else bool(value)


def move_files(stash, args):
    file_ids = args.get("file_ids") or []
    destination_folder = args.get("destination_folder")

    if not file_ids:
        log.error("move_files called with no file_ids.")
        return
    if not destination_folder:
        log.error("move_files called with no destination_folder.")
        return

    total = len(file_ids)
    log.info(f"Moving {total} file(s) to '{destination_folder}'.")

    moved = 0
    failed = 0
    chunks = [file_ids[i : i + CHUNK_SIZE] for i in range(0, total, CHUNK_SIZE)]
    for i, chunk in enumerate(chunks):
        log.progress(i / len(chunks))
        try:
            stash.move_files(chunk, destination_folder)
            moved += len(chunk)
            log.info(f"Moved {len(chunk)} file(s) (batch {i + 1}/{len(chunks)}).")
        except Exception as e:
            failed += len(chunk)
            log.error(
                f"Failed to move batch {i + 1}/{len(chunks)} ({len(chunk)} file(s)) "
                f"to '{destination_folder}': {e}"
            )
    log.progress(1)

    if failed:
        log.error(f"Done with errors: {moved} moved, {failed} failed. Check the log above for which batch(es) failed.")
    else:
        log.info(f"Done: {moved} file(s) moved to '{destination_folder}'.")

    if not moved:
        return

    settings = stash.get_plugin_settings(PLUGIN_ID)

    if get_bool_setting(settings, "autoTagAfterMove", True):
        try:
            job_id = stash.auto_tag([destination_folder])
            log.info(f"Queued Auto Tag for '{destination_folder}' (job {job_id}).")
        except Exception as e:
            log.error(f"Failed to queue Auto Tag for '{destination_folder}': {e}")

    if get_bool_setting(settings, "deleteEmptySourceFolders", True):
        do_clean_empty_folders(stash, args.get("source_folders") or [], destination_folder)


def clean_empty_folders(stash, args):
    """Entry point for the standalone clean_empty_folders operation, used
    by the direct (non-task) move path in moveFile.js via
    runPluginOperation - the browser can't touch the filesystem itself, so
    this runs the same check server-side right after a direct moveFiles
    call succeeds."""
    settings = stash.get_plugin_settings(PLUGIN_ID)
    if not get_bool_setting(settings, "deleteEmptySourceFolders", True):
        return
    source_folders = args.get("source_folders") or []
    destination_folder = args.get("destination_folder") or ""
    do_clean_empty_folders(stash, source_folders, destination_folder)


def do_clean_empty_folders(stash, source_folders, destination_folder):
    if not source_folders:
        return

    try:
        library_paths = {os.path.normpath(p) for p in stash.get_library_paths()}
    except Exception as e:
        log.error(f"Failed to fetch library paths; skipping empty-folder cleanup for safety: {e}")
        return

    dest_norm = os.path.normpath(destination_folder) if destination_folder else None
    seen = set()
    for folder in source_folders:
        if not folder or folder in seen:
            continue
        seen.add(folder)
        norm = os.path.normpath(folder)

        if norm == dest_norm:
            # Files just landed here - by definition not empty.
            continue
        if norm in library_paths:
            log.warning(f"Not deleting '{folder}': it's a configured library path.")
            continue
        if not os.path.isdir(folder):
            # Already gone (e.g. two moves emptied the same folder; the
            # first one already removed it), or never existed.
            continue

        try:
            if os.listdir(folder):
                log.debug(f"Leaving '{folder}' - not empty (untracked files or subfolders remain).")
                continue
        except OSError as e:
            log.error(f"Failed to check whether '{folder}' is empty, leaving it in place: {e}")
            continue

        try:
            # rmdir (rather than a recursive remove) only ever succeeds on
            # a truly empty directory - a safety net in its own right even
            # if the listdir check above raced with something.
            os.rmdir(folder)
            log.info(f"Deleted empty source folder '{folder}'.")
        except OSError as e:
            log.error(f"Failed to delete empty source folder '{folder}': {e}")


if __name__ == "__main__":
    log.info("Starting Move File plugin...")
    main()

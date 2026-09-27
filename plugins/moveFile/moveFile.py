import sys
import json

import log
from stash_interface import StashInterface

# Kept well under any reasonable request/timeout limit, and - more
# importantly - moveFiles runs as a single database transaction: if one
# file in the batch fails (e.g. a name collision at the destination), the
# WHOLE call rolls back. Chunking means one bad file only takes out its own
# chunk instead of the entire selection.
CHUNK_SIZE = 50


def main():
    json_input = json.loads(sys.stdin.read())
    args = json_input["args"]
    mode = args["mode"]
    stash = StashInterface(json_input["server_connection"])

    if mode == "move_files":
        move_files(stash, args)
    else:
        log.error(f"Unknown mode: {mode}")

    print(json.dumps({"output": "ok"}))


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


if __name__ == "__main__":
    log.info("Starting Move File plugin...")
    main()

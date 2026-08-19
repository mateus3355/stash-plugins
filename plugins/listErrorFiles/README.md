# List Error Files

Tags scenes whose files are corrupted or otherwise unreadable.

## How "Tag Corrupted Scenes" works

1. Indexes every scene's file path (id + tags) up front.
2. Triggers a Stash **Generate** task (covers/previews/sprites/image
   previews) — this forces ffmpeg to actually decode each file, which is a
   much stronger corruption signal than a missing `video_codec` value from
   scan alone.
3. Polls `findJob` until the generate task finishes.
4. Streams `journalctl -u stash` for the time window covering the job (one
   line at a time — the log is never loaded into memory as a whole, which
   matters since a full-library generate run can produce a very large log)
   and pulls out file paths mentioned on error lines.
5. Matches those paths against the indexed scenes and tags the matches with
   `Corrupted File`.

### Requirements

- Stash must run under systemd as a unit named `stash` (`journalctl -u
  stash` must work). If your unit has a different name, edit
  `JOURNAL_UNIT` in `listErrorFiles.py`.
- The user running the plugin needs permission to read the journal (root,
  or membership in the `systemd-journal` group).
- Linux only — there's no journalctl equivalent used on other platforms.
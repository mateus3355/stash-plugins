# Transcriber

A dashboard and remote control, inside Stash, for the Whisper GPU video
transcriber service (`transcriber.py`) that already runs on this machine via
systemd. **This plugin doesn't transcribe anything itself** - `transcriber.py`
keeps running exactly as it did before, watching your library and writing
`.srt`/`.txt` next to each video via its own systemd service
(`transcriber.service`, installed with `install_service.sh`, unchanged by
this plugin). The plugin just reads that service's `state/status.json` /
`state/failed.json` and shows them in Stash, and can start/stop/restart the
service.

Pairs naturally with the **Subtitle Markers** plugin in this same repo -
`transcriber.py` is what produces the `.srt` files that plugin searches.

## What the dashboard shows

- The systemd service's own state (`active` / `inactive` / `failed` / ...,
  from `systemctl is-active`).
- Live progress from `status.json`: current state (`idle` / `watching` /
  `transcribing` / ...), the file currently being transcribed and its
  progress, and the overall done/total/failed counts for the current batch.
- A summary of `failed.json` - total count plus the most recent entries
  (path, error, when). **Not the whole file** - on a large library this can
  grow to thousands of entries, and the dashboard polls every few seconds,
  so only a count and a capped, most-recent-first sample are ever sent over
  the wire. See `plugin.py`'s `RECENT_FAILED_LIMIT`.
- **Start** / **Stop** / **Restart** buttons for `transcriber.service`.
- A **Clear Status & Logs** button - asks for confirmation, then resets
  `status.json`/`failed.json` to empty, deletes `logs/transcriber.log` (and
  its rotated `.1`-`.5` backups), and restarts the service. The restart is
  necessary, not optional: `transcriber.py` only reads `failed.json` once at
  startup and keeps its own in-memory copy from then on, so clearing the
  files without restarting would just get overwritten by its very next
  write. Useful after clearing out a batch of real failures (e.g. once
  you've fixed whatever was causing them) instead of waiting for them to
  scroll out of the "most recent" list naturally.
- A **folder/language picker** - the same real folder browser Subtitle
  Markers' own picker uses, seeded with the currently watched folder/
  language. Applying it re-runs `install_service.sh` as root, same as
  running it by hand (see "Manual control" below), and restarts the service.

## Setup: the sudo rules this plugin needs

**If Stash itself already runs as root** (common in a root-only container),
skip this whole section - `plugin.py` checks `os.geteuid()` and runs
`systemctl`/`install_service.sh` directly with no `sudo` prefix at all in
that case, since there's nothing to elevate to (and no guarantee `sudo` is
even installed on a root-only box - many aren't). Start/Stop/Restart and
the folder/language picker just work as-is.

Otherwise: Stash's plugin process runs as whatever non-root user runs the
Stash server, so it can't control a systemd unit, or rewrite its own unit
file, without being explicitly allowed to. Without the rules below,
Start/Stop/Restart and the folder/language picker will fail with a
permissions/password error (which the dashboard shows, rather than hanging
or crashing - `plugin.py` calls `sudo -n` in this case, which fails
immediately instead of waiting for a password that can never come
non-interactively).

1. Find the user Stash itself runs as (e.g. check your Stash systemd unit's
   `User=` line, or `ps -o user= -p "$(pgrep -f '[s]tash$' | head -1)'`).
2. Find the full path to `systemctl` (`which systemctl` - usually
   `/usr/bin/systemctl`) and to this plugin's own `install_service.sh` (the
   path it's actually installed at, e.g.
   `/path/to/stash/plugins/transcriber/install_service.sh`).
3. Create `/etc/sudoers.d/transcriber-plugin` (as root, with `visudo -f
   /etc/sudoers.d/transcriber-plugin` so a syntax error can't lock you out
   of `sudo`) containing one line:

   ```
   stash_user ALL=(root) NOPASSWD: /usr/bin/systemctl start transcriber.service, /usr/bin/systemctl stop transcriber.service, /usr/bin/systemctl restart transcriber.service, /path/to/stash/plugins/transcriber/install_service.sh *
   ```

   Replace `stash_user`, the `systemctl` path, and the `install_service.sh`
   path with what you found in steps 1-2.

   The first three commands are narrowly scoped to exactly those three
   invocations on this one unit. The last is broader by necessity - the
   folder/language picker re-runs `install_service.sh` with whatever folder
   is picked in the dashboard, so the sudo rule can't pin its arguments the
   way it can for `systemctl`. The blast radius is still bounded by what
   `install_service.sh` itself does: it's one fixed script (not an arbitrary
   command), its arguments are passed as an argv list (never through a
   shell, so no injection via the folder path), and it only validates a
   folder exists, writes `transcriber.service`'s `ExecStart`/`User=` to
   point at it, and restarts the service - the same thing running it by
   hand already does. Skip this last entry (and the picker just won't work)
   if that's not an acceptable trade-off for your setup.

Reading status needs no special permission - `systemctl is-active` and
reading `state/status.json`/`state/failed.json` work as whatever user Stash
already runs as (assuming that user can read files `transcriber.service`'s
own `User=` writes them as - same machine, so usually fine; if status shows
blank, check file permissions on `state/`).

## Manual control (outside the dashboard)

`transcriber.service` is a normal systemd unit either way - the dashboard
is a convenience, not the only way to control or watch it:

```sh
journalctl -u transcriber -f      # follow live logs
systemctl stop transcriber
systemctl start transcriber
./install_service.sh /path/to/videos [en|pt|auto]   # change the watched folder/language;
                                                     # re-run any time, restarts the service
```

## Two parts

- **UI** (`transcriber.js`, compiled - see `build/README.md`): the
  dashboard page and nav link. Mostly plain Bootstrap primitives, plus the
  real `FolderSelect` component for the folder picker (see `build/README.md`
  for what that pulls in).
- **Server-side script** (`plugin.py`): reads the state files, shells out to
  `systemctl`/`sudo systemctl`, and (for the folder/language picker) to
  `sudo install_service.sh` - run via `runPluginOperation` (not
  `runPluginTask`, a tracked background job), since every call here is
  already fast on its own (or, for `configure`, has its own generous
  timeout) and the dashboard needs its result back directly, the same
  reasoning as Subtitle Markers' own search-only mode.

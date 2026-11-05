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

## Setup: the sudo rule Start/Stop/Restart need

Stash's plugin process runs as whatever user runs the Stash server itself -
not root - so it can't control a systemd unit it doesn't own without being
explicitly allowed to. Without this, Start/Stop/Restart will fail with a
permissions/password error (which the dashboard shows, rather than hanging
or crashing - `plugin.py` calls `sudo -n`, which fails immediately instead
of waiting for a password that can never come non-interactively).

1. Find the user Stash itself runs as (e.g. check your Stash systemd unit's
   `User=` line, or `ps -o user= -p "$(pgrep -f '[s]tash$' | head -1)'`).
2. Find the full path to `systemctl` (`which systemctl` - usually
   `/usr/bin/systemctl`).
3. Create `/etc/sudoers.d/transcriber-plugin` (as root, with `visudo -f
   /etc/sudoers.d/transcriber-plugin` so a syntax error can't lock you out
   of `sudo`) containing one line, narrowly scoped to exactly these three
   invocations on this one unit - **not** broad `systemctl` access:

   ```
   stash_user ALL=(root) NOPASSWD: /usr/bin/systemctl start transcriber.service, /usr/bin/systemctl stop transcriber.service, /usr/bin/systemctl restart transcriber.service
   ```

   Replace `stash_user` and the `systemctl` path with what you found in
   steps 1-2.

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
  dashboard page and nav link. Pure Bootstrap primitives, no real Stash
  components compiled in (unlike Folder Browser/Subtitle Markers) - nothing
  here needs `TagIDSelect`/`FolderSelect`/Apollo-backed data, so the bundle
  stays tiny.
- **Server-side script** (`plugin.py`): reads the state files and shells out
  to `systemctl`/`sudo systemctl` - run via `runPluginOperation` (not
  `runPluginTask`, a tracked background job), since every call here is
  already fast on its own and the dashboard needs its result back directly,
  the same reasoning as Subtitle Markers' own search-only mode.

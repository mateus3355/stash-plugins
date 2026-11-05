# Transcriber build

`../transcriber.js` (the UI file Stash actually loads, per
`../transcriber.yml`) is a compiled bundle, not hand-written. This
directory is its source.

Unlike Folder Browser/Subtitle Markers, nothing here imports real Stash
components (`ui/v2.5/src`) - the dashboard is plain `react-bootstrap`
primitives, so there's no `src/*` alias to configure and the bundle stays
small (a few KB, vs. hundreds for the other two).

`../plugin.py` (the server-side script Stash actually runs) is plain,
hand-written Python - nothing here builds it.

## Rebuilding the UI

```sh
yarn install
yarn typecheck   # tsc --noEmit - catches real type errors; vite build itself doesn't type-check
yarn build        # vite build, then copies dist/transcriber.js over ../transcriber.js
yarn test          # exercises the deployed ../transcriber.js in jsdom against real
                    # react-bootstrap/react-router-dom (not simplified stubs), then runs the
                    # Python unit tests for plugin.py
```

## Testing the Python side alone

```sh
python3 -m unittest discover -s test -p 'test_*.py'
```

Tests `plugin.py`'s own logic (reading/summarizing state files, the
start/stop/restart dispatch, the JSON-RPC output envelope) with a fake
`run()` (the `subprocess.run` call) and a temp state directory - no real
systemd, no real `sudo`, no network calls.

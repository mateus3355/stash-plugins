# Transcriber build

`../transcriber.js` (the UI file Stash actually loads, per
`../transcriber.yml`) is a compiled bundle, not hand-written. This
directory is its source.

Most of this is plain `react-bootstrap` primitives, same as before. The one
exception is the folder/language picker, which uses Stash's own real
`FolderSelect` (`src/components/Shared/FolderSelect/FolderSelect` - same
component Scan/Clean task dialogs use, and the same one Subtitle Markers'
own picker uses), so there is a `src/*` alias and `@apollo/client`/
`react-intl` externals after all (FolderSelect's `useDirectory` is an Apollo
query; it also calls `useIntl()`). The bundle is still much smaller than
Folder Browser/Subtitle Markers since nothing else here pulls in Stash's
generated GraphQL types/TagSelect/etc.

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

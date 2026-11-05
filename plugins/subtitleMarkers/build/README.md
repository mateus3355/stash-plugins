# Subtitle Markers build

`../subtitleMarkers.js` (the UI file Stash actually loads, per
`../subtitleMarkers.yml`) is a compiled bundle, not hand-written. This
directory is its source - modelled on the Folder Browser plugin's own
`build/` (see its README for the fuller rationale on compiling real Stash
components in rather than re-implementing look-alikes).

`../subtitleMarkers.py` (the server-side task that does the actual work) is
plain, hand-written Python - nothing here builds it.

## Rebuilding the UI

Requires a local checkout of the Stash monorepo (`ui/v2.5/src` is imported
directly via the `src/*` alias in `vite.config.ts` and `tsconfig.json` -
both currently point at `/workspaces/stash/ui/v2.5`; change `STASH_SRC` /
`baseUrl` if yours lives elsewhere).

```sh
yarn install
yarn typecheck   # tsc --noEmit - catches real type errors; vite build itself doesn't type-check
yarn build        # vite build, then copies dist/subtitleMarkers.js over ../subtitleMarkers.js
yarn test          # exercises the deployed ../subtitleMarkers.js in jsdom against real
                    # react-bootstrap/react-router-dom/@apollo/client/react-select (not
                    # simplified stubs), then runs the Python unit tests for subtitleMarkers.py
```

## Testing the Python side alone

```sh
python3 -m unittest discover -s test -p 'test_*.py'
```

Only tests `subtitleMarkers.py`'s own logic (parsing, matching, dedup) via a
fake `StashInterface` - no real Stash server or network calls. `requests`
(a real runtime dependency of `stash_interface.py`) is imported lazily
inside `StashInterface.__init__`, specifically so these tests don't need it
installed.

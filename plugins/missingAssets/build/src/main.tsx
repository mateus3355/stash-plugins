import TextUtils from "src/utils/text";

import type ReactNS from "react";

declare global {
  interface Window {
    // Only the `React` field is typed precisely (needed for useState<T>()
    // generics below) - everything else on PluginApi is dynamic/loosely
    // documented, so typing the rest would just be restating `any`.
    PluginApi: { React: typeof ReactNS } & Record<string, any>;
  }
}

const { PluginApi } = window;
const { React } = PluginApi;
const { useState } = React;
const Bootstrap = PluginApi.libraries.Bootstrap;
const { Nav, Button, Alert, Spinner } = Bootstrap;
const { NavLink } = PluginApi.libraries.ReactRouterDOM;
const { FontAwesomeIcon } = PluginApi.libraries.ReactFontAwesome;
const FA = PluginApi.libraries.FontAwesomeSolid;

// Must match the plugin's yml filename (without extension) - that's how Stash derives a
// plugin's id (pkg/plugin/config.go, loadPluginFromYAMLFile).
const PLUGIN_ID = "missingAssets";

// Deliberately NOT under /plugin/... - a bare /plugin/<anything-else> 404s before reaching
// the SPA's catch-all route handler (see folderBrowser's README for the full story).
const ROUTE_PATH = "/missing-assets";

interface SceneEntry {
  id: string;
  title: string;
}

interface MarkerEntry {
  sceneId: string;
  sceneTitle: string;
  markerId: string;
  seconds: number;
}

interface ScanResult {
  totalScanned: number;
  missingCover: SceneEntry[];
  missingPhash: SceneEntry[];
  missingSprite: SceneEntry[];
  missingPreview: SceneEntry[];
  missingMarkerPreview: MarkerEntry[];
  noMarkers: SceneEntry[];
  noFingerprint: SceneEntry[];
}

// ---------------------------------------------------------------------
// GraphQL - plain fetch, same-origin so the browser's own session cookie covers auth, same
// pattern as the other plugins in this fork (subtitleMarkers, transcriber).
// ---------------------------------------------------------------------

function gql(query: string, variables?: Record<string, unknown>): Promise<any> {
  return fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) {
        throw new Error(res.errors.map((e: any) => e.message).join("; "));
      }
      return res.data;
    });
}

// A single synchronous call, not a tracked background job (runPluginTask) - this is a
// read-only report, and a job's result isn't retrievable afterwards (only its log output
// is), so returning the full, structured scan result back to the UI needs runPluginOperation
// instead, the same reasoning subtitleMarkers' own search mode uses it for.
function runScan(): Promise<ScanResult> {
  return gql(
    `mutation MissingAssetsScan($plugin_id: ID!) {
      runPluginOperation(plugin_id: $plugin_id, args: {})
    }`,
    { plugin_id: PLUGIN_ID }
  ).then((data) => data.runPluginOperation);
}

// ---------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------

interface Section {
  key: string;
  label: string;
  help: string;
  entries: SceneEntry[];
}

function sceneEntries(result: ScanResult): Section[] {
  return [
    {
      key: "missingCover",
      label: "Missing cover",
      help: "No cover image set for this scene at all (scenes.cover_blob).",
      entries: result.missingCover,
    },
    {
      key: "missingPhash",
      label: "Missing phash",
      help: "No perceptual hash fingerprint - duplicate detection can't compare this scene against others.",
      entries: result.missingPhash,
    },
    {
      key: "missingSprite",
      label: "Missing scrubber sprite",
      help: "The hover-scrub thumbnail sprite hasn't been generated for this scene.",
      entries: result.missingSprite,
    },
    {
      key: "missingPreview",
      label: "Missing scene preview",
      help: "The scene's own hover-preview video hasn't been generated.",
      entries: result.missingPreview,
    },
    {
      key: "noMarkers",
      label: "No markers",
      help: "This scene has no scene markers at all.",
      entries: result.noMarkers,
    },
    {
      key: "noFingerprint",
      label: "Can't be checked (no fingerprint)",
      help: "No checksum/oshash of the type this server names generated files after - sprite/preview/marker-preview can't be looked up on disk for these at all.",
      entries: result.noFingerprint,
    },
  ];
}

function SceneLink({ entry }: { entry: SceneEntry }) {
  return (
    <a href={`/scenes/${entry.id}`} target="_blank" rel="noreferrer">
      {entry.title || `Scene ${entry.id}`}
    </a>
  );
}

function SceneSection({ section }: { section: Section }) {
  if (section.entries.length === 0) return null;
  return (
    <details className="missing-assets-section mb-3" open>
      <summary>
        <strong>{section.label}</strong> ({section.entries.length})
      </summary>
      <p className="text-muted mb-2">{section.help}</p>
      <ul className="missing-assets-list">
        {section.entries.map((entry) => (
          <li key={entry.id}>
            <SceneLink entry={entry} />
          </li>
        ))}
      </ul>
    </details>
  );
}

function MarkerSection({ entries }: { entries: MarkerEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <details className="missing-assets-section mb-3" open>
      <summary>
        <strong>Missing marker preview</strong> ({entries.length})
      </summary>
      <p className="text-muted mb-2">
        This marker's own preview video/image/screenshot hasn't been generated.
      </p>
      <ul className="missing-assets-list">
        {entries.map((entry) => (
          <li key={entry.markerId}>
            <a
              href={`/scenes/${entry.sceneId}?t=${entry.seconds}`}
              target="_blank"
              rel="noreferrer"
            >
              {entry.sceneTitle || `Scene ${entry.sceneId}`} @{" "}
              {TextUtils.secondsToTimestamp(entry.seconds)}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

function MissingAssetsPage() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleScan() {
    setScanning(true);
    setError(null);
    setResult(null);
    runScan()
      .then((r) => {
        setScanning(false);
        setResult(r);
      })
      .catch((e: any) => {
        setScanning(false);
        setError(String(e && e.message ? e.message : e));
      });
  }

  const sections = result ? sceneEntries(result) : [];
  const nothingMissing =
    result &&
    sections.every((s) => s.entries.length === 0) &&
    result.missingMarkerPreview.length === 0;

  return (
    <div className="missing-assets-page container mt-3">
      <h3>Missing Assets</h3>
      <p className="text-muted">
        Scans every scene for a missing cover, phash, scrubber sprite, scene preview, or
        marker preview, and scenes with no markers at all - each entry links straight to it
        (markers jump to their exact timestamp).
      </p>

      <Button onClick={handleScan} disabled={scanning}>
        {scanning ? "Scanning…" : "Scan Library"}
      </Button>

      {scanning && (
        <div className="mt-3 text-muted">
          <Spinner animation="border" size="sm" className="mr-2" />
          Scanning - this walks every scene in your library, so it may take a moment on a
          large one…
        </div>
      )}

      {error ? (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      ) : null}

      {result && (
        <div className="mt-3">
          <p className="text-muted">Scanned {result.totalScanned} scene(s).</p>
          {nothingMissing ? (
            <Alert variant="success">Nothing missing - every scene checked out.</Alert>
          ) : (
            <>
              {sections.map((section) => (
                <SceneSection key={section.key} section={section} />
              ))}
              <MarkerSection entries={result.missingMarkerPreview} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------
// Registration: nav link + route
// ---------------------------------------------------------------------

PluginApi.register.route(ROUTE_PATH, MissingAssetsPage);

// MainNavBar.MenuItems is a real PatchComponent (just <Nav>{children}</Nav>) - before() lets
// us append an extra child to props.children. This runs on EVERY page (the nav bar is
// global), so it's wrapped defensively: if anything in here ever throws, the worst outcome
// must be "the link doesn't appear", never "the whole app is broken".
PluginApi.patch.before("MainNavBar.MenuItems", (props: any) => {
  try {
    const navLink = (
      <Nav.Link key="missing-assets" as="div" className="col-4 col-sm-3 col-md-2 col-lg-auto">
        <NavLink exact to={ROUTE_PATH} activeClassName="active">
          <Button className="minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center">
            <FontAwesomeIcon
              icon={FA.faTriangleExclamation}
              className="fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0"
            />
            <span>Missing Assets</span>
          </Button>
        </NavLink>
      </Nav.Link>
    );
    // props.children isn't reliably an array - another plugin's own before() may have
    // already wrapped it in a single <>...</> fragment, which [...x] can't spread (throws
    // "x is not iterable", silently dropping this link since the catch below swallows it).
    // Children.toArray() flattens whatever shape it's in into a real array, so this works
    // regardless of plugin load order.
    return [{ ...props, children: [...React.Children.toArray(props.children), navLink] }];
  } catch (e) {
    console.error("[MissingAssets] Failed to patch nav bar:", e);
    return [props];
  }
});

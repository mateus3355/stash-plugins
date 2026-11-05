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
const { useState, useEffect } = React;
const Bootstrap = PluginApi.libraries.Bootstrap;
const { Nav, Button, ProgressBar, Alert, Badge } = Bootstrap;
const { NavLink } = PluginApi.libraries.ReactRouterDOM;
const { FontAwesomeIcon } = PluginApi.libraries.ReactFontAwesome;
const FA = PluginApi.libraries.FontAwesomeSolid;

// Must match the plugin's yml filename (without extension) - that's how Stash derives a
// plugin's id (pkg/plugin/config.go, loadPluginFromYAMLFile).
const PLUGIN_ID = "transcriber";

// Deliberately NOT under /plugin/... - the Go backend mounts a dedicated router at that
// prefix (internal/api/routes_plugin.go) that only matches /plugin/{id}/javascript, /css,
// and /assets - a bare /plugin/<anything-else> 404s before the SPA's catch-all handler ever
// gets a chance to serve index.html. See Folder Browser's README for the full writeup.
const ROUTE_PATH = "/transcriber";

const POLL_INTERVAL_MS = 3000;

interface StatusJson {
  state?: string;
  current_file?: string | null;
  file_progress_pct?: number;
  file_eta_s?: number;
  files_done?: number;
  files_total?: number;
  files_failed?: number;
  overall_progress_pct?: number;
  overall_eta?: string;
  audio_hours_transcribed?: number;
  updated?: string;
}

interface FailedEntry {
  path: string;
  error: string | null;
  when: string | null;
}

interface StatusResult {
  status: StatusJson | null;
  // failed.json can hold thousands of entries over a large library - plugin.py sends a
  // count plus a capped, most-recent-first sample, not the whole thing, every poll.
  failed: { count: number; recent: FailedEntry[] };
  serviceActive: string;
}

type ControlAction = "start" | "stop" | "restart";

// ---------------------------------------------------------------------
// GraphQL - plain fetch, same-origin so the browser's own session cookie
// already authenticates it (same approach as the other plugins built this session).
// ---------------------------------------------------------------------

function gql(query: string, variables?: unknown) {
  return fetch("/graphql", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  })
    .then((r) => r.json())
    .then((res) => {
      if (res.errors && res.errors.length) {
        throw new Error(res.errors.map((e: { message: string }) => e.message).join("; "));
      }
      return res.data;
    });
}

// runPluginOperation (not runPluginTask) runs the plugin process immediately and returns
// whatever it printed as "output" directly - no job to poll. Fits this dashboard well: every
// call here (read status, or start/stop/restart) is already fast on its own (reading small
// JSON files, or a single systemctl invocation), so there's nothing to track progress on.
function runPluginOperation(args: Record<string, string>): Promise<any> {
  return gql(
    `mutation TranscriberOperation($plugin_id: ID!, $args: Map) { runPluginOperation(plugin_id: $plugin_id, args: $args) }`,
    { plugin_id: PLUGIN_ID, args }
  ).then((data) => data.runPluginOperation);
}

function fetchStatus(): Promise<StatusResult> {
  return runPluginOperation({ mode: "status" });
}

function controlService(action: ControlAction): Promise<void> {
  return runPluginOperation({ mode: action }).then(() => undefined);
}

// ---------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------

const SERVICE_BADGE_VARIANT: Record<string, string> = {
  active: "success",
  inactive: "secondary",
  failed: "danger",
  activating: "info",
  deactivating: "info",
};

function serviceBadgeVariant(serviceActive: string) {
  return SERVICE_BADGE_VARIANT[serviceActive] || (serviceActive.startsWith("unknown") ? "secondary" : "danger");
}

function TranscriberPage() {
  const [result, setResult] = useState<StatusResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyAction, setBusyAction] = useState<ControlAction | null>(null);

  useEffect(() => {
    let cancelled = false;
    function poll() {
      fetchStatus()
        .then((r: StatusResult) => {
          if (cancelled) return;
          setResult(r);
          setError(null);
        })
        .catch((e: any) => {
          if (cancelled) return;
          setError(String(e && e.message ? e.message : e));
        });
    }
    poll();
    const timer = setInterval(poll, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  function handleControl(action: ControlAction) {
    setBusyAction(action);
    setError(null);
    controlService(action)
      .then(() => fetchStatus())
      .then((r: StatusResult) => setResult(r))
      .catch((e: any) => setError(String(e && e.message ? e.message : e)))
      .finally(() => setBusyAction(null));
  }

  const status = result && result.status;
  const failed = result && result.failed;
  const serviceActive = result && result.serviceActive;
  const busy = !!busyAction;

  function renderServiceBadge() {
    if (!serviceActive) return null;
    return (
      <Badge variant={serviceBadgeVariant(serviceActive)} className="transcriber-service-badge ml-2">
        {serviceActive}
      </Badge>
    );
  }

  function renderStatus() {
    if (!status) {
      return (
        <p className="text-muted">
          No status yet - either the service hasn't run since this was installed, or its state
          files aren't readable by Stash.
        </p>
      );
    }
    const filePct = status.file_progress_pct;
    const overallPct = status.overall_progress_pct;
    return (
      <div className="transcriber-status">
        <p>
          <strong>State:</strong> {status.state || "unknown"}
        </p>
        {status.current_file ? (
          <>
            <p className="transcriber-current-file">
              <strong>Current file:</strong> {status.current_file}
            </p>
            {typeof filePct === "number" && (
              <ProgressBar now={filePct} label={`${filePct}%`} className="mb-3" animated={filePct < 100} />
            )}
          </>
        ) : null}
        {typeof overallPct === "number" && (
          <>
            <p className="text-muted mb-1">
              Overall: {status.files_done ?? 0} / {status.files_total ?? 0} done
              {status.files_failed ? `, ${status.files_failed} failed` : ""}
            </p>
            <ProgressBar now={overallPct} label={`${overallPct}%`} />
          </>
        )}
        {typeof status.audio_hours_transcribed === "number" && (
          <p className="text-muted mt-2">{status.audio_hours_transcribed} hours of audio transcribed so far.</p>
        )}
      </div>
    );
  }

  function renderFailed() {
    if (!failed || failed.count === 0) return null;
    const hiddenCount = failed.count - failed.recent.length;
    return (
      <div className="transcriber-failed mt-4">
        <h5>
          {failed.count} failed file{failed.count === 1 ? "" : "s"}
        </h5>
        <ul className="list-unstyled">
          {failed.recent.map((f) => (
            <li key={f.path} className="transcriber-failed-entry">
              <div className="transcriber-failed-path">{f.path}</div>
              <div className="text-muted">
                {f.error}
                {f.when ? ` — ${f.when}` : ""}
              </div>
            </li>
          ))}
        </ul>
        {hiddenCount > 0 && <p className="text-muted">...and {hiddenCount} more.</p>}
      </div>
    );
  }

  return (
    <div className="transcriber-page container-fluid">
      <h3>
        Transcriber
        {renderServiceBadge()}
      </h3>
      <p className="text-muted">
        Dashboard for the Whisper GPU video transcriber service - this page only shows its
        status and controls it; the actual transcription keeps running via its own systemd
        service, exactly as it did before this plugin existed.
      </p>

      {error ? <Alert variant="danger">{error}</Alert> : null}

      <div className="transcriber-controls mb-3">
        <Button onClick={() => handleControl("start")} disabled={busy} className="mr-2">
          {busyAction === "start" ? "Starting…" : "Start"}
        </Button>
        <Button onClick={() => handleControl("stop")} disabled={busy} variant="secondary" className="mr-2">
          {busyAction === "stop" ? "Stopping…" : "Stop"}
        </Button>
        <Button onClick={() => handleControl("restart")} disabled={busy} variant="secondary">
          {busyAction === "restart" ? "Restarting…" : "Restart"}
        </Button>
      </div>

      {renderStatus()}
      {renderFailed()}
    </div>
  );
}

// ---------------------------------------------------------------------
// Registration: nav link + route
// ---------------------------------------------------------------------

PluginApi.register.route(ROUTE_PATH, TranscriberPage);

// MainNavBar.MenuItems is a real PatchComponent (just <Nav>{children}</Nav>) - before() lets
// us append an extra child to props.children. This runs on EVERY page (the nav bar is
// global), so it's wrapped defensively: if anything in here ever throws, the worst outcome
// must be "the Transcriber link doesn't appear", never "the whole app is broken".
PluginApi.patch.before("MainNavBar.MenuItems", (props: any) => {
  try {
    const navLink = (
      <Nav.Link key="transcriber" as="div" className="col-4 col-sm-3 col-md-2 col-lg-auto">
        <NavLink exact to={ROUTE_PATH} activeClassName="active">
          <Button className="minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={FA.faMicrophone} className="fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0" />
            <span>Transcriber</span>
          </Button>
        </NavLink>
      </Nav.Link>
    );
    // Returning children as an array (not a <>...</> fragment) matters: another plugin's
    // own before() may run after this one and do [...props.children], which throws on a
    // single fragment element ("x is not iterable") rather than an array - Children.toArray
    // also means this plugin itself tolerates whatever shape children arrives in.
    return [
      {
        ...props,
        children: [...React.Children.toArray(props.children), navLink],
      },
    ];
  } catch (e) {
    console.error("[Transcriber] Failed to add nav link, leaving the nav bar unmodified:", e);
    return [props];
  }
});

import * as GQL from "src/core/generated-graphql";
import { ConfigurationProvider } from "src/hooks/Config";
import { ToastProvider } from "src/hooks/Toast";
import { TagIDSelect } from "src/components/Tags/TagSelect";
import { FolderSelect } from "src/components/Shared/FolderSelect/FolderSelect";
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
const { useState, useEffect } = React;
const Bootstrap = PluginApi.libraries.Bootstrap;
const { Nav, Button, Form, Alert, ProgressBar, Spinner } = Bootstrap;
const { NavLink } = PluginApi.libraries.ReactRouterDOM;
const { FontAwesomeIcon } = PluginApi.libraries.ReactFontAwesome;
const FA = PluginApi.libraries.FontAwesomeSolid;

// Must match the plugin's yml filename (without extension) - that's how Stash derives a
// plugin's id (pkg/plugin/config.go, loadPluginFromYAMLFile).
const PLUGIN_ID = "subtitleMarkers";

// Deliberately NOT under /plugin/... - see folderBrowser's README for why a bare
// /plugin/<anything-else> 404s before reaching the SPA's catch-all route handler.
const ROUTE_PATH = "/subtitle-markers";

// How often to re-check the job's status while it's running.
const POLL_INTERVAL_MS = 1000;

type JobStatus = "READY" | "RUNNING" | "FINISHED" | "STOPPING" | "CANCELLED" | "FAILED";

interface Job {
  status: JobStatus;
  progress: number | null;
  error: string | null;
}

interface SearchResult {
  sceneId: string;
  sceneTitle: string;
  seconds: number;
  text: string;
}

// ---------------------------------------------------------------------
// GraphQL - plain fetch, same-origin so the browser's own session cookie
// already authenticates it (same approach as the Folder Browser plugin).
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

function runPluginTask(args: Record<string, string>, description: string): Promise<string> {
  return gql(
    `mutation SubtitleMarkersRunTask($plugin_id: ID!, $description: String, $args_map: Map) {
      runPluginTask(plugin_id: $plugin_id, description: $description, args_map: $args_map)
    }`,
    { plugin_id: PLUGIN_ID, description, args_map: args }
  ).then((data) => data.runPluginTask);
}

function findJob(id: string): Promise<Job | null> {
  return gql(
    `query SubtitleMarkersFindJob($id: ID!) { findJob(input: { id: $id }) { status progress error } }`,
    { id }
  ).then((data) => data.findJob);
}

// Unlike runPluginTask (a background job, polled via findJob), runPluginOperation runs the
// plugin process immediately and waits for it, returning whatever it printed as its
// "output" directly - no job to poll, but the whole search has to finish before this
// resolves. Used for the no-marker "just find it and link to it" mode, which doesn't need
// a job's progress tracking the way the (slower, writes-to-the-database) marker-creation
// mode does.
function runPluginOperation(args: Record<string, string>): Promise<any> {
  return gql(
    `mutation SubtitleMarkersSearch($plugin_id: ID!, $args: Map) {
      runPluginOperation(plugin_id: $plugin_id, args: $args)
    }`,
    { plugin_id: PLUGIN_ID, args }
  ).then((data) => data.runPluginOperation);
}

// ---------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------

const RUNNING_STATUSES: JobStatus[] = ["READY", "RUNNING", "STOPPING"];

const STATUS_LABEL: Record<JobStatus, string> = {
  READY: "Starting…",
  RUNNING: "Searching…",
  STOPPING: "Stopping…",
  FINISHED: "Done.",
  CANCELLED: "Cancelled.",
  FAILED: "Failed.",
};

function SubtitleMarkersPage({ libraryPaths }: { libraryPaths: string[] }) {
  const [path, setPath] = useState("");
  const [search, setSearch] = useState("");
  const [createMarkers, setCreateMarkers] = useState(false);
  const [tagId, setTagId] = useState("");
  const [title, setTitle] = useState("");
  const [starting, setStarting] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const jobRunning = starting || (job !== null && RUNNING_STATUSES.includes(job.status));
  const busy = jobRunning || searching;
  const canRun = !!path.trim() && !!search.trim() && (!createMarkers || !!tagId) && !busy;

  // Poll the job until it stops running. A fresh effect per jobId, so starting a new run
  // (a new jobId) cleanly replaces whatever polling the previous one was doing.
  useEffect(() => {
    if (!jobId) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const poll = () => {
      findJob(jobId)
        .then((j) => {
          if (cancelled) return;
          setJob(j);
          if (j && RUNNING_STATUSES.includes(j.status)) {
            timer = setTimeout(poll, POLL_INTERVAL_MS);
          }
        })
        .catch((e: any) => {
          if (cancelled) return;
          setJob({ status: "FAILED", progress: null, error: String(e && e.message ? e.message : e) });
        });
    };
    poll();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [jobId]);

  function handleRun() {
    const searchTrimmed = search.trim();
    setStarting(true);
    setJob(null);
    runPluginTask(
      { path: path.trim(), search: searchTrimmed, tagId, title: title.trim() },
      `Searching subtitles for "${searchTrimmed}"`
    )
      .then((newJobId: string) => {
        setStarting(false);
        setJobId(newJobId);
      })
      .catch((e: any) => {
        setStarting(false);
        setJob({ status: "FAILED", progress: null, error: String(e && e.message ? e.message : e) });
      });
  }

  function handleSearch() {
    setSearching(true);
    setSearchError(null);
    setResults(null);
    runPluginOperation({ mode: "search", path: path.trim(), search: search.trim() })
      .then((output: { results: SearchResult[] }) => {
        setSearching(false);
        setResults(output.results);
      })
      .catch((e: any) => {
        setSearching(false);
        setSearchError(String(e && e.message ? e.message : e));
      });
  }

  function handleRunClick() {
    if (createMarkers) {
      handleRun();
    } else {
      handleSearch();
    }
  }

  function renderStatus() {
    if (!job) return null;
    const percent = Math.round((job.progress || 0) * 100);
    return (
      <div className="subtitle-markers-status mt-3">
        {RUNNING_STATUSES.includes(job.status) && (
          <ProgressBar now={percent} label={`${percent}%`} animated />
        )}
        <p className={job.status === "FAILED" ? "text-danger" : "text-muted"}>
          {STATUS_LABEL[job.status]}
          {job.status === "FINISHED" &&
            " Marker preview generation has been queued for anything created. See Settings → Logs for how many markers were created."}
        </p>
        {job.error ? <Alert variant="danger">{job.error}</Alert> : null}
      </div>
    );
  }

  function renderResults() {
    if (searching) {
      return (
        <div className="subtitle-markers-results mt-3 text-muted">
          <Spinner animation="border" size="sm" className="mr-2" />
          Searching…
        </div>
      );
    }
    if (searchError) return <Alert variant="danger" className="mt-3">{searchError}</Alert>;
    if (results === null) return null;
    if (results.length === 0) {
      return <p className="subtitle-markers-results mt-3 text-muted">No matches found.</p>;
    }
    return (
      <div className="subtitle-markers-results mt-3">
        <p className="text-muted">
          {results.length} match{results.length === 1 ? "" : "es"}:
        </p>
        <ul className="list-unstyled">
          {results.map((r, i) => (
            <li key={i} className="subtitle-markers-result">
              <a href={`/scenes/${r.sceneId}?t=${r.seconds}`} target="_blank" rel="noreferrer">
                {r.sceneTitle || `Scene ${r.sceneId}`} @ {TextUtils.secondsToTimestamp(r.seconds)}
              </a>
              <div className="text-muted subtitle-markers-result-text">{r.text}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="subtitle-markers-page container-fluid">
      <h3>Subtitle Markers</h3>
      <p className="text-muted">
        Searches every .srt file under a folder (and its subfolders) for a phrase - matched to
        the video file next to each subtitle, the same way Stash itself associates captions.
        Either jump straight to each match's timestamp, or (optionally) create a scene marker for
        each one, with preview generation queued automatically afterwards.
      </p>

      <Form.Group className="subtitle-markers-folder">
        <Form.Label>Folder</Form.Label>
        <FolderSelect
          currentDirectory={path}
          onChangeDirectory={setPath}
          defaultDirectories={libraryPaths}
        />
        <Form.Text className="text-muted">Searched recursively, including subfolders.</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Search text</Form.Label>
        <Form.Control
          type="text"
          value={search}
          placeholder="Text to find in subtitle lines"
          onChange={(e: any) => setSearch(e.target.value)}
          disabled={busy}
        />
        <Form.Text className="text-muted">Case-insensitive, matched as plain text.</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          id="subtitle-markers-create-markers"
          label="Also create scene markers"
          checked={createMarkers}
          disabled={busy}
          onChange={(e: any) => setCreateMarkers(e.target.checked)}
        />
        <Form.Text className="text-muted">
          Off by default: just search, and link to each match's timestamp. Turn this on to also
          create a scene marker for each match, using the tag and title below.
        </Form.Text>
      </Form.Group>

      {createMarkers && (
        <>
          <Form.Group>
            <Form.Label>Tag</Form.Label>
            <TagIDSelect
              ids={tagId ? [tagId] : []}
              isDisabled={busy}
              onSelect={(items: { id: string }[]) => setTagId(items[0]?.id || "")}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Marker title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder={search || "Marker title"}
              onChange={(e: any) => setTitle(e.target.value)}
              disabled={busy}
            />
            <Form.Text className="text-muted">Defaults to the search text if left blank.</Form.Text>
          </Form.Group>
        </>
      )}

      <Button onClick={handleRunClick} disabled={!canRun}>
        {jobRunning ? "Running…" : searching ? "Searching…" : createMarkers ? "Search & Create Markers" : "Search"}
      </Button>

      {createMarkers ? renderStatus() : renderResults()}
    </div>
  );
}

// SubtitleMarkersPage uses TagIDSelect, which calls useConfigurationContext() - that's a
// real app-internal React Context, recreated fresh in this bundle's own compiled copy of
// src/hooks/Config (and src/hooks/Toast, for its tag-creation feedback), so it needs its
// own Provider here even though this page mounts inside the host app's tree.
function SubtitleMarkersPageWithConfig() {
  const { data } = GQL.useConfigurationQuery();
  if (!data?.configuration) return <Spinner animation="border" className="mt-3" />;
  const libraryPaths = data.configuration.general.stashes.map((s: { path: string }) => s.path);
  return (
    <ToastProvider>
      <ConfigurationProvider configuration={data.configuration}>
        <SubtitleMarkersPage libraryPaths={libraryPaths} />
      </ConfigurationProvider>
    </ToastProvider>
  );
}

// ---------------------------------------------------------------------
// Registration: nav link + route
// ---------------------------------------------------------------------

PluginApi.register.route(ROUTE_PATH, SubtitleMarkersPageWithConfig);

// MainNavBar.MenuItems is a real PatchComponent (just <Nav>{children}</Nav>) -
// before() lets us append an extra child to props.children. This runs on
// EVERY page (the nav bar is global), so it's wrapped defensively: if
// anything in here ever throws, the worst outcome must be "the link
// doesn't appear", never "the whole app is broken".
PluginApi.patch.before("MainNavBar.MenuItems", (props: any) => {
  try {
    const navLink = (
      <Nav.Link key="subtitle-markers" as="div" className="col-4 col-sm-3 col-md-2 col-lg-auto">
        <NavLink exact to={ROUTE_PATH} activeClassName="active">
          <Button className="minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={FA.faClosedCaptioning} className="fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0" />
            <span>Marker</span>
          </Button>
        </NavLink>
      </Nav.Link>
    );
    // props.children isn't reliably an array - another plugin's own before() may have
    // already wrapped it in a single <>...</> fragment, which [...x] can't spread (throws
    // "x is not iterable", silently dropping this link since the catch below swallows it).
    // Children.toArray() flattens whatever shape it's in (array, single element, nested
    // fragment) into a real array, so this works regardless of plugin load order.
    return [{ ...props, children: [...React.Children.toArray(props.children), navLink] }];
  } catch (e) {
    console.error("[SubtitleMarkers] Failed to patch nav bar:", e);
    return [props];
  }
});

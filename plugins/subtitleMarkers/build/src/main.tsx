import * as GQL from "src/core/generated-graphql";
import { ConfigurationProvider } from "src/hooks/Config";
import { ToastProvider } from "src/hooks/Toast";
import { TagIDSelect } from "src/components/Tags/TagSelect";
import { FolderSelect } from "src/components/Shared/FolderSelect/FolderSelect";
import { SceneCard } from "src/components/Scenes/SceneCard";
import { useCardWidth, useContainerDimensions } from "src/components/Shared/GridCard/GridCard";
import { queryFindSceneMarkers, queryFindScenesByID } from "src/core/StashService";
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
const { NavLink, useHistory } = PluginApi.libraries.ReactRouterDOM;
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
  // The real scene data (tags, performers, preview, etc.) each result's SceneCard needs -
  // fetched separately, after the search itself resolves, keyed by scene id (several results
  // can point at the same scene, at different timestamps - fetched once each either way).
  const [sceneMap, setSceneMap] = useState<Map<string, GQL.SlimSceneDataFragment> | null>(null);
  const [sceneMapError, setSceneMapError] = useState<string | null>(null);
  const history = useHistory();
  const [cardsContainerRef, { width: cardsContainerWidth }] = useContainerDimensions();
  const cardWidth = useCardWidth(cardsContainerWidth, 1, [280, 340, 480, 640]);

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
    setSceneMap(null);
    setSceneMapError(null);
    runPluginOperation({ mode: "search", path: path.trim(), search: search.trim() })
      .then((output: { results: SearchResult[] }) => {
        setSearching(false);
        setResults(output.results);
        loadSceneCardData(output.results);
      })
      .catch((e: any) => {
        setSearching(false);
        setSearchError(String(e && e.message ? e.message : e));
      });
  }

  // Separate from the search itself - the search already tells us everything needed for a
  // plain link (scene id, title, timestamp); this is purely to get the extra data a real
  // SceneCard needs (tags, performers, preview paths, etc.) to show something richer.
  function loadSceneCardData(searchResults: SearchResult[]) {
    const ids = Array.from(new Set(searchResults.map((r) => Number(r.sceneId)))).filter((n) => !Number.isNaN(n));
    if (ids.length === 0) {
      setSceneMap(new Map());
      return;
    }
    queryFindScenesByID(ids)
      .then((res: any) => {
        const map = new Map<string, GQL.SlimSceneDataFragment>();
        (res.data?.findScenes?.scenes ?? []).forEach((s: GQL.SlimSceneDataFragment) => map.set(s.id, s));
        setSceneMap(map);
      })
      .catch((e: any) => {
        setSceneMapError(String(e && e.message ? e.message : e));
        setSceneMap(new Map());
      });
  }

  // GridCard renders both the thumbnail and the title as a real react-router <Link> to the
  // plain scene URL (no per-result timestamp - it has no idea this card represents one
  // specific subtitle hit, not the scene generally). Capture-phase, so this runs *before*
  // that Link's own click handler does, and can stop it from navigating there instead.
  // Scoped to just those two elements (by the classes GridCard/SceneCard actually render -
  // .scene-card-link for the thumbnail, the title's own .card-section-title) rather than the
  // whole card, so a click on a tag/performer popover, the organized icon, etc. (none of
  // which are inside either) is left completely alone.
  function handleResultCardClickCapture(e: any, result: SearchResult) {
    const target = e.target as HTMLElement;
    if (!target.closest(".scene-card-link") && !target.closest(".card-section-title")) return;
    e.preventDefault();
    e.stopPropagation();
    history.push(`/scenes/${result.sceneId}?t=${result.seconds}`);
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
        <Button size="sm" variant="secondary" className="mb-2" onClick={() => handlePlayAllInQueue(results)}>
          Play All in Queue
        </Button>
        {sceneMapError ? (
          <Alert variant="warning" className="mt-2">
            Couldn't load scene previews ({sceneMapError}) - showing plain links instead.
          </Alert>
        ) : null}
        {!sceneMap ? (
          <div className="text-muted mt-2">
            <Spinner animation="border" size="sm" className="mr-2" />
            Loading scene previews…
          </div>
        ) : (
          <div className="row justify-content-center subtitle-markers-result-cards" ref={cardsContainerRef}>
            {results.map((r, i) => {
              const scene = sceneMap.get(r.sceneId);
              // No scene data for this result (deleted since being indexed, or the lookup
              // above failed) - fall back to the plain link rather than silently dropping it.
              if (!scene) {
                return (
                  <div key={i} className="subtitle-markers-result subtitle-markers-result-fallback">
                    <a href={`/scenes/${r.sceneId}?t=${r.seconds}`} target="_blank" rel="noreferrer">
                      {r.sceneTitle || `Scene ${r.sceneId}`} @ {TextUtils.secondsToTimestamp(r.seconds)}
                    </a>
                    <div className="text-muted subtitle-markers-result-text">{r.text}</div>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className="subtitle-markers-result-card"
                  onClickCapture={(e: any) => handleResultCardClickCapture(e, r)}
                >
                  <SceneCard scene={scene} width={cardWidth} />
                  <div className="text-muted subtitle-markers-result-text">
                    @ {TextUtils.secondsToTimestamp(r.seconds)} — {r.text}
                  </div>
                </div>
              );
            })}
          </div>
        )}
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

// ---------------------------------------------------------------------
// "Play All in Queue" - plays through every search result in order, each
// seeking to its own timestamp, with a short preview window per hit before
// auto-advancing. Stash's own scene queue (SceneQueue/continuePlaylist,
// src/models/sceneQueue.ts) only ever restarts each *subsequent* scene from
// 0 - it has no concept of a per-item start time - so it can't drive this on
// its own; this plugin tracks queue position itself instead.
//
// The widget/listeners below aren't a real PatchComponent (nothing patches
// "the scene player page" as a whole) - same situation, and same fix, as
// Folder Browser's "open containing folder" button: watch the DOM for the
// scene player with a MutationObserver and inject into it directly, outside
// React's own tree. That also means cross-scene advances use a real
// navigation (window.location.assign), not history.push - there's no Router
// context out here to push through, same reasoning Folder Browser's own
// README gives for using a plain <a href>.
// ---------------------------------------------------------------------

const QUEUE_STORAGE_KEY = "subtitleMarkersQueue";
const QUEUE_WIDGET_ID = "subtitle-markers-queue-widget";
// How long to let each hit play before auto-advancing - a fixed preview window, not the
// subtitle cue's own (often much shorter) duration, so there's enough context around the
// moment to actually place it. Still capped by the video's own natural end for a hit near
// the end of a short clip (the "ended" listener below fires first in that case).
const QUEUE_PREVIEW_SECONDS = 20;

interface QueueState {
  items: SearchResult[];
  index: number;
}

function loadQueue(): QueueState | null {
  try {
    const raw = window.sessionStorage.getItem(QUEUE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items) || typeof parsed.index !== "number") return null;
    if (parsed.index < 0 || parsed.index >= parsed.items.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveQueue(queue: QueueState) {
  try {
    window.sessionStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(queue));
  } catch {
    // sessionStorage can be unavailable (private browsing, quota) - the only cost is the
    // queue not surviving a reload, not a crash.
  }
}

function clearQueue() {
  try {
    window.sessionStorage.removeItem(QUEUE_STORAGE_KEY);
  } catch {
    // ignore
  }
}

function currentQueueSceneId(): string | null {
  const m = window.location.pathname.match(/^\/scenes\/([^/?]+)/);
  return m ? m[1] : null;
}

function queueSceneLink(item: SearchResult) {
  // continue=true matters here: Scene.tsx only disables its own native looping when
  // continuePlaylist is true (permitLoop={!continuePlaylist}), and HTML5 video never fires
  // "ended" while looping - without this, a hit in a scene shorter than
  // QUEUE_PREVIEW_SECONDS would just loop forever instead of ever advancing.
  return `/scenes/${item.sceneId}?t=${item.seconds}&continue=true&autoplay=true`;
}

function startQueue(items: SearchResult[]) {
  if (!items || items.length === 0) return;
  saveQueue({ items, index: 0 });
  // Opens in a new tab (not window.location.assign) so the page that started the queue -
  // the search results, or the filtered markers list - stays open. A new tab opened this
  // way (no noopener/noreferrer, same origin) inherits a cloned copy of sessionStorage at
  // the moment it opens, which is how its own copy of this script finds the queue just
  // saved above. Every advance *after* that first jump still happens within that one new
  // tab (goToQueueIndex below), not a fresh tab per hit.
  window.open(queueSceneLink(items[0]), "_blank");
}

function handlePlayAllInQueue(results: SearchResult[]) {
  startQueue(results);
}

let queueAdvanceTimer: ReturnType<typeof setTimeout> | null = null;

function clearQueueAdvanceTimer() {
  if (queueAdvanceTimer !== null) {
    clearTimeout(queueAdvanceTimer);
    queueAdvanceTimer = null;
  }
}

function removeQueueWidget() {
  clearQueueAdvanceTimer();
  const existing = document.getElementById(QUEUE_WIDGET_ID);
  if (existing) existing.remove();
}

// Jumps to a queue index: seeks in place when it's the scene already on screen (navigating
// to the same route with just a different ?t= doesn't reliably re-seek an already-mounted
// player), or does a real navigation otherwise.
function goToQueueIndex(queue: QueueState, index: number) {
  clearQueueAdvanceTimer();
  if (index < 0 || index >= queue.items.length) {
    clearQueue();
    removeQueueWidget();
    return;
  }
  const item = queue.items[index];
  saveQueue({ items: queue.items, index });
  if (item.sceneId === currentQueueSceneId()) {
    const video = document.querySelector<HTMLVideoElement>(".video-js video");
    if (video) {
      video.currentTime = item.seconds;
      video.play().catch(() => {});
    }
    ensureQueueWidget();
  } else {
    // Navigating away is effectively immediate in a real browser (the page unloads, taking
    // this widget with it), but remove it explicitly rather than leaving it visible - and
    // clickable, in a now-stale position - for however long that takes.
    removeQueueWidget();
    window.location.assign(queueSceneLink(item));
  }
}

function handleQueueVideoEnded(e: Event) {
  const target = e.target as HTMLElement | null;
  if (!target || target.tagName !== "VIDEO") return;
  const queue = loadQueue();
  if (!queue || queue.items[queue.index].sceneId !== currentQueueSceneId()) return;
  goToQueueIndex(queue, queue.index + 1);
}

// Starts (or restarts) the preview countdown - called whenever the video actually starts
// playing (including an autoplay-triggered start), never on a fixed schedule independent of
// playback. Pausing to read/think no longer costs anything off the countdown; it's just not
// running while paused, same as the preview itself isn't advancing.
function scheduleQueueAdvance() {
  clearQueueAdvanceTimer();
  const queue = loadQueue();
  if (!queue || queue.items[queue.index].sceneId !== currentQueueSceneId()) return;
  queueAdvanceTimer = setTimeout(() => {
    queueAdvanceTimer = null;
    const latest = loadQueue();
    if (!latest || latest.items[latest.index].sceneId !== currentQueueSceneId()) return;
    // Belt and suspenders: the pause handler below should already have cleared this timer,
    // but never advance (and never call .play() from goToQueueIndex) on a paused video.
    const video = document.querySelector<HTMLVideoElement>(".video-js video");
    if (video && video.paused) return;
    goToQueueIndex(latest, latest.index + 1);
  }, QUEUE_PREVIEW_SECONDS * 1000);
}

function handleQueueVideoPlay(e: Event) {
  const target = e.target as HTMLElement | null;
  if (!target || target.tagName !== "VIDEO") return;
  scheduleQueueAdvance();
}

function handleQueueVideoPause(e: Event) {
  const target = e.target as HTMLElement | null;
  if (!target || target.tagName !== "VIDEO") return;
  clearQueueAdvanceTimer();
}

// capture: true - none of "ended"/"play"/"pause" bubble, so a listener on document only ever
// sees them this way.
document.addEventListener("ended", handleQueueVideoEnded, true);
document.addEventListener("play", handleQueueVideoPlay, true);
document.addEventListener("pause", handleQueueVideoPause, true);

function ensureQueueWidget() {
  try {
    const queue = loadQueue();
    const sceneId = currentQueueSceneId();
    if (!queue || !sceneId || sceneId !== queue.items[queue.index].sceneId) {
      removeQueueWidget();
      return;
    }

    let widget = document.getElementById(QUEUE_WIDGET_ID);
    if (!widget) {
      widget = document.createElement("div");
      widget.id = QUEUE_WIDGET_ID;
      document.body.appendChild(widget);
    }

    // This runs on every DOM mutation the observer below sees - constantly, during playback
    // (time display, buffered bar, etc). Only re-render when the item actually being shown
    // changed - the auto-advance timer itself is scheduled from the video's own "play" event
    // (handleQueueVideoPlay above), not from here, so it only ever runs while actually playing.
    const key = sceneId + ":" + queue.index;
    if (widget.dataset.subtitleMarkersQueueKey === key) return;
    widget.dataset.subtitleMarkersQueueKey = key;

    const item = queue.items[queue.index];
    // Covers a video that was already playing (autoplay already fired its "play" event,
    // perhaps before this key even changed) when this item became current - schedules
    // nothing new if it's paused (nothing to override: handleQueueVideoPlay will pick it up
    // whenever it next actually starts).
    const existingVideo = document.querySelector<HTMLVideoElement>(".video-js video");
    if (existingVideo && !existingVideo.paused) {
      scheduleQueueAdvance();
    } else {
      clearQueueAdvanceTimer();
    }

    const widgetStyle: Record<string, string> = {
      position: "fixed",
      right: "16px",
      bottom: "16px",
      zIndex: "2000",
      background: "rgba(0, 0, 0, 0.85)",
      color: "#fff",
      padding: "10px 14px",
      borderRadius: "6px",
      maxWidth: "320px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
    };

    PluginApi.ReactDOM.render(
      <div className="subtitle-markers-queue-widget" style={widgetStyle}>
        <div className="subtitle-markers-queue-position">
          <strong>
            Marker {queue.index + 1} of {queue.items.length}
          </strong>
        </div>
        <div className="subtitle-markers-queue-text text-truncate" style={{ opacity: 0.85, margin: "4px 0" }}>
          {item.text}
        </div>
        <div className="subtitle-markers-queue-controls">
          <Button
            size="sm"
            variant="secondary"
            className="mr-1"
            disabled={queue.index === 0}
            onClick={() => goToQueueIndex(queue, queue.index - 1)}
          >
            Prev
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="mr-1"
            disabled={queue.index === queue.items.length - 1}
            onClick={() => goToQueueIndex(queue, queue.index + 1)}
          >
            Next
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              clearQueue();
              removeQueueWidget();
            }}
          >
            Stop
          </Button>
        </div>
      </div>,
      widget
    );
  } catch (e) {
    console.error("[SubtitleMarkers] Failed to update the queue widget:", e);
    removeQueueWidget();
  }
}

new MutationObserver(ensureQueueWidget).observe(document.body, { childList: true, subtree: true });
// Covers the page already being on the right scene when this script first runs - which is
// exactly how this plugin advances between different scenes (a real navigation, not an SPA
// route change), so this is reached on every cross-scene queue advance, not just a fresh load.
ensureQueueWidget();

// ---------------------------------------------------------------------
// "Play All (Filtered)" - the same queue, started from Stash's own native Markers list (and
// a Tag's "Markers" tab, which reuses the same component) instead of a search result list.
// Plays through every marker matching whatever's currently filtered, not just the current
// page - FilteredSceneMarkerList ("the real PatchComponent for this, unlike the scene player
// page above) takes an extraOperations prop that becomes an entry in its "..." dropdown
// (alongside "Play Random" etc.) - before() here adds one more to whatever a page already
// passed in.
// ---------------------------------------------------------------------

// A generous cap, not a real limit on how many markers can match a filter - queueing
// everything beyond this would make for an unreasonably large sessionStorage payload and an
// hours-long queue; this is already far more than "Play Random"'s own per-page query size.
const MAX_QUEUE_MARKERS = 1000;

async function playAllFilteredMarkers(result: any, filter: any, filterHook?: (f: any) => any) {
  try {
    const effectiveFilter = filterHook ? filterHook(filter.clone()) : filter;
    const filterCopy = effectiveFilter.clone();
    filterCopy.currentPage = 1;
    filterCopy.itemsPerPage = MAX_QUEUE_MARKERS;
    const queryResult = await queryFindSceneMarkers(filterCopy);
    const markers = queryResult.data?.findSceneMarkers?.scene_markers ?? [];
    const items: SearchResult[] = markers.map((m: any) => ({
      sceneId: m.scene.id,
      sceneTitle: m.scene.title || `Scene ${m.scene.id}`,
      seconds: m.seconds,
      text: m.title || m.primary_tag?.name || "",
    }));
    startQueue(items);
  } catch (e) {
    console.error("[SubtitleMarkers] Failed to start the filtered-markers queue:", e);
  }
}

PluginApi.patch.before("FilteredSceneMarkerList", (props: any) => {
  try {
    // Captured here, not read from the (result, filter, selectedIds) arguments
    // extraOperations' onClick is actually called with below - those come from this
    // component's *raw* `filter` state, not effectiveFilter (filterHook already applied) -
    // see this component's own convertedExtraOperations mapping. A page that passes its own
    // filterHook (the Tag markers tab does, to constrain to that tag) would otherwise have
    // it silently ignored here, querying every marker instead of just that tag's.
    // Re-applying it ourselves, the same way this component's own effectiveFilter does,
    // fixes that.
    const filterHook = props.filterHook;
    const playAllFilteredOperation = {
      text: "Play All (Filtered)",
      onClick: (result: any, filter: any) => playAllFilteredMarkers(result, filter, filterHook),
      isDisplayed: (result: any) => (result?.data?.findSceneMarkers?.count ?? 0) > 0,
    };
    return [{ ...props, extraOperations: [...(props.extraOperations || []), playAllFilteredOperation] }];
  } catch (e) {
    console.error("[SubtitleMarkers] Failed to add the \"Play All (Filtered)\" operation:", e);
    return [props];
  }
});

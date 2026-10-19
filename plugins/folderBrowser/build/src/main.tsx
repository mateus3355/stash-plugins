import * as GQL from "src/core/generated-graphql";
import { ConfigurationProvider } from "src/hooks/Config";
import { ToastProvider } from "src/hooks/Toast";
import { SceneQueue } from "src/models/sceneQueue";
import { SceneCardGrid } from "src/components/Scenes/SceneCardGrid";
import { ImageCardGrid } from "src/components/Images/ImageCardGrid";
import { GalleryCardGrid } from "src/components/Galleries/GalleryCardGrid";
import { Pagination } from "src/components/List/Pagination";
import { TagIDSelect } from "src/components/Tags/TagSelect";

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
const { Nav, Button, Spinner, Alert, Modal, Form } = Bootstrap;
const { NavLink, Link, useLocation } = PluginApi.libraries.ReactRouterDOM;
const { FontAwesomeIcon } = PluginApi.libraries.ReactFontAwesome;
const FA = PluginApi.libraries.FontAwesomeSolid;
const getApolloClient = PluginApi.utils.StashService.getClient;
const useLightbox = PluginApi.hooks.useLightbox;

// useLightbox's internal effect depends on `images` (its first argument's
// `images` field) by reference (see src/hooks/Lightbox/hooks.ts), so an
// inline `[]` literal for "no images right now" would be a fresh array
// every render - the effect would never stop seeing it as "changed",
// firing setLightboxState every render, which (like any React context
// update) re-renders this page as a descendant of LightboxProvider, which
// renders again with another fresh `[]`... an infinite render loop. A
// module-level constant is a stable reference. Also reused for the second
// (chapters) argument, which the hook's returned callback's own identity
// depends on - not a render-loop risk the way `images` is, but unstable
// for no reason otherwise.
const EMPTY_ARRAY: any[] = [];

// Deliberately NOT under /plugin/... - the Go backend mounts a dedicated
// router at that prefix (internal/api/routes_plugin.go, serving each
// plugin's javascript/css/assets) that only matches /plugin/{id}/javascript,
// /css, and /assets - a bare /plugin/<anything-else> 404s from THAT router
// before the request ever reaches the SPA's catch-all handler that would
// serve index.html. See the README for the full writeup.
const ROUTE_PATH = "/folder-browser";
const PAGE_SIZE = 40;

// ---------------------------------------------------------------------
// GraphQL - plain fetch for simple queries/mutations not covered by a
// generated document (folder lookups, library paths), same-origin so the
// browser's own session cookie already authenticates it.
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

interface FolderRef {
  id: string;
  path: string;
  basename: string;
  parent_folders?: FolderRef[];
  sub_folders?: FolderRef[];
}

function findFolderByPath(path: string): Promise<FolderRef> {
  return gql(
    `query FolderBrowserFindFolder($path: String!) { findFolder(path: $path) { ` +
      `id path basename ` +
      `parent_folders { id path basename } ` +
      `sub_folders { id path basename } ` +
      `} }`,
    { path }
  ).then((data) => data.findFolder);
}

function getLibraryPaths(): Promise<string[]> {
  return gql(
    "query FolderBrowserLibraryPaths { configuration { general { stashes { path } } } }"
  ).then((data) => {
    const stashes = data?.configuration?.general?.stashes || [];
    return stashes.map((s: { path: string }) => s.path);
  });
}

// ---------------------------------------------------------------------
// Path helpers
// ---------------------------------------------------------------------

function folderUrl(path: string) {
  return path ? ROUTE_PATH + "?path=" + encodeURIComponent(path) : ROUTE_PATH;
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Matches a file path that is "folderPath" + exactly one path separator +
// a basename with no further separator - i.e. files directly inside this
// folder, not in any subfolder. Stash's `path` filter matches this regex
// server-side (pkg/sqlite/criterion_handlers.go, gallery_filter.go), so
// counts/pagination are correct without fetching more than one page at a
// time or filtering client-side.
function exactFolderRegex(folderPath: string) {
  return "^" + escapeRegExp(folderPath) + "[/\\\\][^/\\\\]+$";
}

// ---------------------------------------------------------------------
// Content type registry - Scenes/Images/Galleries each follow the same
// shape, just with different field/document/mutation names, so every tab
// is driven generically off this table.
// ---------------------------------------------------------------------

type TabKey = "scenes" | "images" | "galleries";

const CONTENT_TYPES: Record<
  TabKey,
  {
    label: string;
    findDocument: any;
    filterVar: string;
    resultKey: string;
    itemsKey: string;
    destroyDocument: any;
    destroyResultKey: string;
    bulkUpdateDocument: any;
    bulkUpdateResultKey: string;
    defaultSort: string;
    sortFields: { value: string; label: string }[];
  }
> = {
  scenes: {
    label: "Scenes",
    findDocument: GQL.FindScenesDocument,
    filterVar: "scene_filter",
    resultKey: "findScenes",
    itemsKey: "scenes",
    destroyDocument: GQL.ScenesDestroyDocument,
    destroyResultKey: "scenesDestroy",
    bulkUpdateDocument: GQL.BulkSceneUpdateDocument,
    bulkUpdateResultKey: "bulkSceneUpdate",
    defaultSort: "path",
    sortFields: [
      { value: "path", label: "Path" },
      { value: "title", label: "Title" },
      { value: "date", label: "Date" },
      { value: "rating", label: "Rating" },
      { value: "duration", label: "Duration" },
      { value: "filesize", label: "File size" },
      { value: "o_counter", label: "O-Counter" },
      { value: "random", label: "Random" },
    ],
  },
  images: {
    label: "Images",
    findDocument: GQL.FindImagesDocument,
    filterVar: "image_filter",
    resultKey: "findImages",
    itemsKey: "images",
    destroyDocument: GQL.ImagesDestroyDocument,
    destroyResultKey: "imagesDestroy",
    bulkUpdateDocument: GQL.BulkImageUpdateDocument,
    bulkUpdateResultKey: "bulkImageUpdate",
    defaultSort: "path",
    sortFields: [
      { value: "path", label: "Path" },
      { value: "title", label: "Title" },
      { value: "date", label: "Date" },
      { value: "rating", label: "Rating" },
      { value: "filesize", label: "File size" },
      { value: "o_counter", label: "O-Counter" },
      { value: "random", label: "Random" },
    ],
  },
  galleries: {
    label: "Galleries",
    findDocument: GQL.FindGalleriesDocument,
    filterVar: "gallery_filter",
    resultKey: "findGalleries",
    itemsKey: "galleries",
    destroyDocument: GQL.GalleryDestroyDocument,
    destroyResultKey: "galleryDestroy",
    bulkUpdateDocument: GQL.BulkGalleryUpdateDocument,
    bulkUpdateResultKey: "bulkGalleryUpdate",
    defaultSort: "path",
    sortFields: [
      { value: "path", label: "Path" },
      { value: "title", label: "Title" },
      { value: "date", label: "Date" },
      { value: "rating", label: "Rating" },
      { value: "images_count", label: "Image count" },
      { value: "random", label: "Random" },
    ],
  },
};
const TAB_ORDER: TabKey[] = ["scenes", "images", "galleries"];

function findItemsInFolder(
  contentType: TabKey,
  folderPath: string,
  page: number,
  searchQuery: string,
  sortBy: string,
  sortDirection: string
) {
  const config = CONTENT_TYPES[contentType];
  const variables: any = {
    filter: { page, per_page: PAGE_SIZE, sort: sortBy || config.defaultSort, direction: sortDirection || "ASC" },
  };
  if (searchQuery) variables.filter.q = searchQuery;
  variables[config.filterVar] = {
    path: { modifier: "MATCHES_REGEX", value: exactFolderRegex(folderPath) },
  };
  return getApolloClient()
    .query({ query: config.findDocument, variables, fetchPolicy: "network-only" })
    .then((result: any) => {
      const data = result.data[config.resultKey];
      return { items: data[config.itemsKey], count: data.count };
    });
}

function destroySelected(contentType: TabKey, ids: string[], deleteFile: boolean) {
  const config = CONTENT_TYPES[contentType];
  return getApolloClient()
    .mutate({
      mutation: config.destroyDocument,
      variables: { input: { ids, delete_file: !!deleteFile, delete_generated: true } },
    })
    .then((result: any) => result.data[config.destroyResultKey]);
}

interface BulkEdits {
  rating100?: number;
  organized?: boolean;
  addTagIds?: string[];
}

function bulkUpdateSelected(contentType: TabKey, ids: string[], edits: BulkEdits) {
  const config = CONTENT_TYPES[contentType];
  const input: any = { ids };
  if (typeof edits.rating100 === "number") input.rating100 = edits.rating100;
  if (typeof edits.organized === "boolean") input.organized = edits.organized;
  if (edits.addTagIds && edits.addTagIds.length) {
    input.tag_ids = { mode: "ADD", ids: edits.addTagIds };
  }
  return getApolloClient()
    .mutate({ mutation: config.bulkUpdateDocument, variables: { input } })
    .then((result: any) => result.data[config.bulkUpdateResultKey]);
}

// ---------------------------------------------------------------------
// Bulk action dialogs
// ---------------------------------------------------------------------

function BulkDeleteModal(props: { contentType: TabKey; ids: string[]; onClose: () => void; onDone: () => void }) {
  const [deleteFile, setDeleteFile] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleDelete() {
    setBusy(true);
    setError(null);
    destroySelected(props.contentType, props.ids, deleteFile)
      .then(() => {
        setBusy(false);
        props.onDone();
      })
      .catch((e: any) => {
        setBusy(false);
        setError((e && e.message) || String(e));
      });
  }

  return (
    <Modal show onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {"Delete " + props.ids.length + " " + CONTENT_TYPES[props.contentType].label}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? <Alert variant="danger">{error}</Alert> : null}
        <Form.Check
          type="checkbox"
          label="Also delete the file(s) from disk"
          checked={deleteFile}
          onChange={(e: any) => setDeleteFile(e.target.checked)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose} disabled={busy}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete} disabled={busy}>
          {busy ? "Deleting…" : "Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function BulkEditModal(props: { contentType: TabKey; ids: string[]; onClose: () => void; onDone: () => void }) {
  const [rating, setRating] = useState("");
  const [organized, setOrganized] = useState("");
  const [tagIds, setTagIds] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleApply() {
    const edits: BulkEdits = {};
    if (rating !== "") edits.rating100 = Math.max(0, Math.min(100, Number(rating)));
    if (organized !== "") edits.organized = organized === "yes";
    if (tagIds.length) edits.addTagIds = tagIds;
    if (!Object.keys(edits).length) {
      setError("Change at least one field before applying.");
      return;
    }
    setBusy(true);
    setError(null);
    bulkUpdateSelected(props.contentType, props.ids, edits)
      .then(() => {
        setBusy(false);
        props.onDone();
      })
      .catch((e: any) => {
        setBusy(false);
        setError((e && e.message) || String(e));
      });
  }

  return (
    <Modal show onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{"Edit " + props.ids.length + " " + CONTENT_TYPES[props.contentType].label}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? <Alert variant="danger">{error}</Alert> : null}
        <Form.Group>
          <Form.Label>Rating (0-100, leave blank to not change)</Form.Label>
          <Form.Control
            type="number"
            min={0}
            max={100}
            value={rating}
            placeholder="Don't change"
            onChange={(e: any) => setRating(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Organized</Form.Label>
          <Form.Control as="select" value={organized} onChange={(e: any) => setOrganized(e.target.value)}>
            <option value="">Don't change</option>
            <option value="yes">Mark organized</option>
            <option value="no">Mark not organized</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Add tags</Form.Label>
          <TagIDSelect ids={tagIds} isMulti onSelect={(items: { id: string }[]) => setTagIds(items.map((i) => i.id))} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose} disabled={busy}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleApply} disabled={busy}>
          {busy ? "Applying…" : "Apply"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// ---------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------

interface ItemsResult {
  items: any[];
  count: number;
  tab: TabKey | null;
}

function FolderBrowserPage() {
  const location = useLocation();
  const currentPath = new URLSearchParams(location.search).get("path") || "";

  const [activeTab, setActiveTab] = useState<TabKey>("scenes");
  const [libraryPaths, setLibraryPaths] = useState<string[] | null>(null);
  const [folder, setFolder] = useState<FolderRef | null>(null);
  // tab is tagged onto itemsResult (rather than relying on activeTab
  // directly) because switching tabs re-renders with the new activeTab
  // before the refetch for that tab resolves - without this tag,
  // renderItems() would momentarily hand the *previous* tab's items (e.g.
  // images) to the new tab's grid component. That render happens
  // synchronously, so an effect clearing stale state afterwards is too
  // late - this has to be checked at render time instead.
  const [itemsResult, setItemsResult] = useState<ItemsResult>({ items: [], count: 0, tab: null });
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(CONTENT_TYPES.scenes.defaultSort);
  const [sortDir, setSortDir] = useState("ASC");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<null | "edit" | "delete">(null);

  // Only feed the lightbox images while actually on the Images tab (and
  // only once itemsResult is tagged for it), so switching away doesn't
  // leave it primed with stale images.
  const showLightbox = useLightbox(
    {
      images: activeTab === "images" && itemsResult.tab === "images" ? itemsResult.items : EMPTY_ARRAY,
      showNavigation: true,
      slideshowEnabled: false,
    },
    EMPTY_ARRAY
  );

  // Library root picker only needs loading once.
  useEffect(() => {
    getLibraryPaths()
      .then(setLibraryPaths)
      .catch((e: any) => {
        console.error("[FolderBrowser] Failed to load library paths:", e);
        setLibraryPaths([]);
      });
  }, []);

  // Reset to page 1, clear selection, and clear any search/sort whenever
  // the folder or tab changes.
  useEffect(() => {
    setPage(1);
    setSelectedIds(new Set());
    setSearchInput("");
    setSearchQuery("");
    setSortBy(CONTENT_TYPES[activeTab].defaultSort);
    setSortDir("ASC");
  }, [currentPath, activeTab]);

  // Debounce the search box so every keystroke doesn't trigger a query.
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(searchInput.trim()), 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // A new search term or sort order restarts pagination from page 1.
  useEffect(() => {
    setPage(1);
  }, [searchQuery, sortBy, sortDir]);

  function reload() {
    const tabAtRequestTime = activeTab;

    if (!currentPath) {
      setFolder(null);
      setItemsResult({ items: [], count: 0, tab: tabAtRequestTime });
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([findFolderByPath(currentPath), findItemsInFolder(activeTab, currentPath, page, searchQuery, sortBy, sortDir)])
      .then(([f, result]) => {
        if (cancelled) return;
        setFolder(f);
        setItemsResult({ items: result.items, count: result.count, tab: tabAtRequestTime });
      })
      .catch((e: any) => {
        if (cancelled) return;
        setError((e && e.message) || String(e));
        setFolder(null);
        setItemsResult({ items: [], count: 0, tab: tabAtRequestTime });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }

  useEffect(reload, [currentPath, activeTab, page, searchQuery, sortBy, sortDir]);

  function onSelectChange(id: string, selected: boolean) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (selected) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  function onBulkActionDone() {
    setModal(null);
    setSelectedIds(new Set());
    reload();
  }

  function renderBreadcrumb() {
    const crumbs = [
      folder ? (
        <Link key="root" to={folderUrl("")} className="btn btn-link folder-browser-crumb">
          Library
        </Link>
      ) : (
        <span key="root" className="folder-browser-crumb folder-browser-crumb-current">
          Library
        </span>
      ),
    ];

    if (folder) {
      const ancestors = (folder.parent_folders || []).slice().reverse();
      ancestors.concat([folder]).forEach((f) => {
        crumbs.push(
          <FontAwesomeIcon key={f.id + "-sep"} icon={FA.faChevronRight} className="fa-icon folder-browser-crumb-sep" />
        );
        crumbs.push(
          f.id === folder.id ? (
            <span key={f.id} className="folder-browser-crumb folder-browser-crumb-current">
              {f.basename || f.path}
            </span>
          ) : (
            <Link key={f.id} to={folderUrl(f.path)} className="btn btn-link folder-browser-crumb">
              {f.basename || f.path}
            </Link>
          )
        );
      });
    }

    return <div className="folder-browser-breadcrumb">{crumbs}</div>;
  }

  function renderLibraryRoots() {
    if (libraryPaths === null) return <Spinner animation="border" />;
    if (!libraryPaths.length) return <Alert variant="warning">No library paths are configured.</Alert>;
    return (
      <div className="folder-browser-tiles">
        {libraryPaths.map((p) => (
          <Link key={p} to={folderUrl(p)} className="folder-browser-tile">
            <FontAwesomeIcon icon={FA.faFolderOpen} className="fa-icon folder-browser-tile-icon" />
            <div className="folder-browser-tile-label">{p}</div>
          </Link>
        ))}
      </div>
    );
  }

  function renderSubFolders() {
    if (!folder || !folder.sub_folders || !folder.sub_folders.length) return null;
    // Subfolders are already loaded client-side (unlike scenes/images/galleries, which are paged from the server),
    // so filter them by the search box directly - no need to wait for the debounced searchQuery.
    const query = searchInput.trim().toLowerCase();
    const matches = query ? folder.sub_folders.filter((f) => f.basename.toLowerCase().includes(query)) : folder.sub_folders;
    if (!matches.length) return null;
    return (
      <div className="folder-browser-tiles">
        {matches
          .slice()
          .sort((a, b) => a.basename.localeCompare(b.basename))
          .map((f) => (
            <Link key={f.id} to={folderUrl(f.path)} className="folder-browser-tile">
              <FontAwesomeIcon icon={FA.faFolder} className="fa-icon folder-browser-tile-icon" />
              <div className="folder-browser-tile-label">{f.basename}</div>
            </Link>
          ))}
      </div>
    );
  }

  function renderTabs() {
    return (
      <Nav
        variant="tabs"
        activeKey={activeTab}
        onSelect={(key: string | null) => {
          if (key) setActiveTab(key as TabKey);
        }}
        className="folder-browser-tabs"
      >
        {TAB_ORDER.map((key) => (
          <Nav.Item key={key}>
            <Nav.Link eventKey={key}>{CONTENT_TYPES[key].label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    );
  }

  function renderSearchBox() {
    return (
      <div className="folder-browser-search">
        <FontAwesomeIcon icon={FA.faSearch} className="fa-icon folder-browser-search-icon" />
        <Form.Control
          type="text"
          className="folder-browser-search-input"
          placeholder={"Search folders and " + CONTENT_TYPES[activeTab].label.toLowerCase() + "…"}
          value={searchInput}
          onChange={(e: any) => setSearchInput(e.target.value)}
        />
        {searchInput ? (
          <Button variant="link" className="folder-browser-search-clear" onClick={() => setSearchInput("")}>
            <FontAwesomeIcon icon={FA.faTimes} className="fa-icon" />
          </Button>
        ) : null}
      </div>
    );
  }

  function renderSortControl() {
    const fields = CONTENT_TYPES[activeTab].sortFields;
    return (
      <div className="folder-browser-sort">
        <Form.Control
          as="select"
          className="folder-browser-sort-select"
          value={sortBy}
          onChange={(e: any) => setSortBy(e.target.value)}
        >
          {fields.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </Form.Control>
        <Button
          variant="secondary"
          className="folder-browser-sort-direction"
          title={sortDir === "ASC" ? "Ascending" : "Descending"}
          onClick={() => setSortDir(sortDir === "ASC" ? "DESC" : "ASC")}
        >
          <FontAwesomeIcon icon={sortDir === "ASC" ? FA.faSortAmountUp : FA.faSortAmountDown} className="fa-icon" />
        </Button>
      </div>
    );
  }

  function renderBulkToolbar() {
    if (selectedIds.size === 0) return null;
    return (
      <div className="folder-browser-bulk-toolbar">
        <span>{selectedIds.size + " selected"}</span>
        <Button variant="secondary" size="sm" onClick={() => setModal("edit")}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => setModal("delete")}>
          Delete
        </Button>
      </div>
    );
  }

  function renderPagination() {
    const label = CONTENT_TYPES[activeTab].label;
    return (
      <Pagination
        itemsPerPage={PAGE_SIZE}
        currentPage={page}
        totalItems={itemsResult.count}
        onChangePage={(p: number) => setPage(p)}
        metadataByline={itemsResult.count + " " + (itemsResult.count === 1 ? label.replace(/s$/, "") : label)}
      />
    );
  }

  function renderItems() {
    const config = CONTENT_TYPES[activeTab];
    // itemsResult can still hold the PREVIOUS tab's items for one render
    // right after switching tabs, before the new tab's fetch resolves -
    // handing those to this tab's grid component would be wrong (e.g. an
    // image handed to SceneCardGrid). Guard at render time, not via an
    // effect afterwards, since the bad render already happened by then.
    if (itemsResult.tab !== activeTab) {
      return <Spinner animation="border" className="mt-3" />;
    }
    if (!itemsResult.items.length) {
      const emptyMessage = searchQuery
        ? 'No ' + config.label.toLowerCase() + ' matching "' + searchQuery + '" directly in this folder.'
        : "No " + config.label.toLowerCase() + " directly in this folder.";
      return <div className="text-muted folder-browser-empty">{emptyMessage}</div>;
    }

    if (activeTab === "scenes") {
      const queue = SceneQueue.fromSceneIDList(itemsResult.items.map((s) => s.id));
      return (
        <>
          <SceneCardGrid scenes={itemsResult.items} queue={queue} selectedIds={selectedIds} zoomIndex={1} onSelectChange={onSelectChange} />
          {renderPagination()}
        </>
      );
    }
    if (activeTab === "images") {
      return (
        <>
          <ImageCardGrid
            images={itemsResult.items}
            selectedIds={selectedIds}
            zoomIndex={1}
            onSelectChange={onSelectChange}
            onPreview={(index: number) => showLightbox({ initialIndex: index })}
          />
          {renderPagination()}
        </>
      );
    }
    return (
      <>
        <GalleryCardGrid galleries={itemsResult.items} selectedIds={selectedIds} zoomIndex={1} onSelectChange={onSelectChange} />
        {renderPagination()}
      </>
    );
  }

  return (
    <div className="folder-browser-page container-fluid">
      <h3>Folder Browser</h3>
      {renderBreadcrumb()}
      {error ? (
        <Alert variant="danger" className="mt-2">
          {error}
        </Alert>
      ) : null}
      {currentPath ? (
        <>
          {renderTabs()}
          <div className="folder-browser-toolbar">
            {renderSearchBox()}
            {renderSortControl()}
          </div>
        </>
      ) : null}
      {loading ? (
        <Spinner animation="border" className="mt-3" />
      ) : (
        <>
          {!currentPath ? renderLibraryRoots() : renderSubFolders()}
          {currentPath ? (
            <>
              {renderBulkToolbar()}
              {renderItems()}
            </>
          ) : null}
        </>
      )}
      {modal === "delete" ? (
        <BulkDeleteModal
          contentType={activeTab}
          ids={Array.from(selectedIds)}
          onClose={() => setModal(null)}
          onDone={onBulkActionDone}
        />
      ) : null}
      {modal === "edit" ? (
        <BulkEditModal
          contentType={activeTab}
          ids={Array.from(selectedIds)}
          onClose={() => setModal(null)}
          onDone={onBulkActionDone}
        />
      ) : null}
    </div>
  );
}

// FolderBrowserPage uses components (TagSelect, SceneCard, RatingBanner,
// ...) that call useConfigurationContext() - that's a real app-internal
// React Context, recreated fresh in this bundle's own compiled copy of
// src/hooks/Config (and src/hooks/Toast, for useToast), so they need their
// own Provider here even though this page mounts inside the host app's
// tree (unlike react-router-dom/@apollo/client/react-intl's own contexts,
// which ARE shared with the host since those packages are externalized
// rather than bundled).
function FolderBrowserPageWithConfig() {
  const { data } = GQL.useConfigurationQuery();
  if (!data?.configuration) return <Spinner animation="border" className="mt-3" />;
  return (
    <ToastProvider>
      <ConfigurationProvider configuration={data.configuration}>
        <FolderBrowserPage />
      </ConfigurationProvider>
    </ToastProvider>
  );
}

// ---------------------------------------------------------------------
// Registration: nav link + route
// ---------------------------------------------------------------------

PluginApi.register.route(ROUTE_PATH, FolderBrowserPageWithConfig);

// MainNavBar.MenuItems is a real PatchComponent (just <Nav>{children}</Nav>) -
// before() lets us append an extra child to props.children. This runs on
// EVERY page (the nav bar is global), so it's wrapped defensively: if
// anything in here ever throws, the worst outcome must be "the Folders
// link doesn't appear", never "the whole app is broken".
PluginApi.patch.before("MainNavBar.MenuItems", (props: any) => {
  try {
    const navLink = (
      <Nav.Link key="folder-browser" as="div" className="col-4 col-sm-3 col-md-2 col-lg-auto">
        <NavLink exact to={ROUTE_PATH} activeClassName="active">
          <Button className="minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center">
            <FontAwesomeIcon icon={FA.faFolderOpen} className="fa-icon nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0" />
            <span>Folders</span>
          </Button>
        </NavLink>
      </Nav.Link>
    );

    return [
      {
        ...props,
        children: (
          <>
            {props.children}
            {navLink}
          </>
        ),
      },
    ];
  } catch (e) {
    console.error("[FolderBrowser] Failed to add nav link, leaving the nav bar unmodified:", e);
    return [props];
  }
});

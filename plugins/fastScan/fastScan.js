(function () {
  "use strict";

  const PluginApi = window.PluginApi;
  const React = PluginApi.React;
  const { Button } = PluginApi.libraries.Bootstrap;

  // ---------------------------------------------------------------------------
  // GraphQL helpers
  // ---------------------------------------------------------------------------

  function getBaseURL() {
    return document.querySelector("base")?.getAttribute("href") ?? "/";
  }

  async function callGQL(query, variables) {
    const res = await fetch(`${getBaseURL()}graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);
    return json.data;
  }

  // Get up to `limit` scenes for a given scene_filter, returning their file paths.
  async function getSceneFilePaths(sceneFilter, limit = 10) {
    const data = await callGQL(
      `query FastScanGetPaths($sf: SceneFilterType, $f: FindFilterType) {
        findScenes(scene_filter: $sf, filter: $f) {
          scenes { files { path } }
        }
      }`,
      {
        sf: sceneFilter,
        f: { per_page: limit, sort: "date", direction: "DESC" },
      }
    );
    return data.findScenes.scenes.flatMap((s) => s.files.map((f) => f.path));
  }

  // Unique parent directories from a list of file paths.
  // Each file's containing folder is added — no ancestor guessing.
  function uniqueFolders(filePaths) {
    const dirs = filePaths.map((p) => {
      const normalised = p.replace(/\\/g, "/");
      const slash = normalised.lastIndexOf("/");
      return slash > 0 ? normalised.slice(0, slash) : normalised;
    });
    return [...new Set(dirs)].filter(Boolean);
  }

  // Drops any folder that's a subdirectory of another folder already in
  // the set. Stash matches `paths` with a `LIKE 'folder/%'` prefix, so a
  // parent folder already covers every descendant. More importantly, each
  // extra path adds one more nested `OR (...)` to Stash's generated SQL —
  // a few dozen paths is enough to blow SQLite's parser stack ("parser
  // stack overflow"), so this isn't just tidiness, it avoids that failure.
  function collapseToMinimalFolders(folders) {
    const ordered = [...new Set(folders.map((f) => f.replace(/\/+$/, "")))].sort();
    const minimal = [];
    for (const folder of ordered) {
      const parent = minimal[minimal.length - 1];
      if (parent && (folder === parent || folder.startsWith(parent + "/"))) continue;
      minimal.push(folder);
    }
    return minimal;
  }

  // Custom field key the "Update Content Folders" plugin task writes to
  // (see fastScan.py). Stored as a JSON-encoded string array, since Stash
  // custom fields only accept scalar values.
  const CONTENT_FOLDERS_FIELD = "content_folders";

  // Read the entity's stored content-folders custom field, if any. This is
  // the FULL folder set built by the "Update Content Folders" maintenance
  // task, as opposed to the live sample below which only looks at the
  // 10 most recent scenes.
  async function getStoredFolders(entityType, entityId) {
    const query =
      entityType === "performer"
        ? `query FastScanStoredFolders($id: ID!) {
            findPerformer(id: $id) { custom_fields }
          }`
        : `query FastScanStoredFolders($id: ID!) {
            findTag(id: $id) { custom_fields }
          }`;
    const data = await callGQL(query, { id: entityId });
    const entity = entityType === "performer" ? data.findPerformer : data.findTag;
    const raw = entity?.custom_fields?.[CONTENT_FOLDERS_FIELD];
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn("[FastScan] could not parse stored content_folders:", e);
      return [];
    }
  }

  // Enqueue a metadata scan restricted to the given folder paths.
  // IMPORTANT: passing an empty array to metadataScan triggers a full library
  // scan, so this must only be called with a non-empty list.
  async function triggerScan(folders) {
    if (!folders.length) throw new Error("triggerScan called with empty list");
    return callGQL(
      `mutation FastScan($input: ScanMetadataInput!) {
        metadataScan(input: $input)
      }`,
      {
        input: {
          paths: folders,
          rescan: false,
          scanGenerateClipPreviews: false,
          scanGenerateCovers: true,
          scanGenerateImagePreviews: false,
          scanGeneratePhashes: true,
          scanGeneratePreviews: false,
          scanGenerateSprites: true,
          scanGenerateThumbnails: false,
        },
      }
    );
  }

  // Enqueue a Generate run (covers, sprites, phashes, markers) restricted
  // to the given folder paths. Same empty-list caveat as triggerScan.
  async function triggerGenerate(folders) {
    if (!folders.length) throw new Error("triggerGenerate called with empty list");
    return callGQL(
      `mutation FastScanGenerate($input: GenerateMetadataInput!) {
        metadataGenerate(input: $input)
      }`,
      {
        input: {
          paths: folders,
          covers: true,
          sprites: true,
          phashes: true,
          imagePhashes: true,
          markers: true,
          markerScreenshots: true,
          previews: false,
          imagePreviews: false,
          transcodes: false,
        },
      }
    );
  }

  // Enqueue an autotag for a specific performer or tag id, restricted to
  // the given folder paths.
  async function triggerAutoTag(entityType, entityId, folders) {
    const input =
      entityType === "performer"
        ? { performers: [entityId], paths: folders }
        : { tags: [entityId], paths: folders };
    return callGQL(
      `mutation FastScanAutoTag($input: AutoTagMetadataInput!) {
        metadataAutoTag(input: $input)
      }`,
      { input }
    );
  }

  // ---------------------------------------------------------------------------
  // Shared scan logic (entity type + id → collect file folders → scan)
  // ---------------------------------------------------------------------------

  async function scanEntity(entityType, entityId) {
    const sceneFilter =
      entityType === "performer"
        ? { performers: { modifier: "INCLUDES", value: [entityId] } }
        : { tags: { modifier: "INCLUDES", value: [entityId] } };

    // Combine the full folder set from the "Update Content Folders"
    // maintenance task with a live sample of the most recent scenes, so
    // brand-new content is covered even before that task next runs.
    const [storedFolders, filePaths] = await Promise.all([
      getStoredFolders(entityType, entityId),
      getSceneFilePaths(sceneFilter),
    ]);

    const combined = [...new Set([...storedFolders, ...uniqueFolders(filePaths)])];
    const folders = collapseToMinimalFolders(combined);
    if (!folders.length) {
      return { ok: false, reason: filePaths.length ? "no_folder" : "no_scenes" };
    }

    console.log("[FastScan] folders to scan/generate/autotag:", folders);
    await triggerScan(folders);
    await triggerGenerate(folders);
    await triggerAutoTag(entityType, entityId, folders);
    return { ok: true, folders };
  }

  // ---------------------------------------------------------------------------
  // React button component (used for the performer page via patch API)
  // ---------------------------------------------------------------------------

  function ScanButton({ entityType, entityId }) {
    const [state, setState] = React.useState("idle");
    // idle | scanning | done | no_scenes | no_folder | error

    async function handleClick() {
      setState("scanning");
      try {
        const result = await scanEntity(entityType, entityId);
        setState(result.ok ? "done" : result.reason);
      } catch (e) {
        console.error("[FastScan] error:", e);
        setState("error");
      }
    }

    const label = {
      idle: "Fast Scan Folder",
      scanning: "Scanning…",
      done: "Scan + Generate + AutoTag Queued ✓",
      no_scenes: "No Scenes Found",
      no_folder: "Folder Not Found",
      error: "Scan Failed",
    }[state];

    const variant =
      state === "done"
        ? "success"
        : state === "idle" || state === "scanning"
        ? "secondary"
        : "warning";

    return React.createElement(
      "div",
      { className: "fast-scan-btn-wrapper" },
      React.createElement(
        Button,
        {
          variant,
          size: "sm",
          className: "fast-scan-btn",
          onClick: handleClick,
          disabled: state === "scanning",
          title: "Scan the folder containing this entity's videos",
        },
        label
      )
    );
  }

  // ---------------------------------------------------------------------------
  // Performer page: inject via PluginApi patch (gives us the performer object)
  // ---------------------------------------------------------------------------

  if (window.__fastScanPatched) return;
  window.__fastScanPatched = true;

  PluginApi.patch.before("PerformerDetailsPanel.DetailGroup", function (props) {
    if (!props.performer?.id) return [{ children: props.children }];

    return [
      {
        children: React.createElement(
          React.Fragment,
          null,
          props.children,
          React.createElement(ScanButton, {
            entityType: "performer",
            entityId: props.performer.id,
          })
        ),
      },
    ];
  });

  // ---------------------------------------------------------------------------
  // Tag page: inject via location listener + DOM (no patchable component exists)
  // ---------------------------------------------------------------------------

  function waitForElement(selector, callback, maxMs) {
    maxMs = maxMs ?? 5000;
    const el = document.querySelector(selector);
    if (el) { callback(el); return () => {}; }
    const start = Date.now();
    const t = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) { clearInterval(t); callback(el); }
      else if (Date.now() - start > maxMs) clearInterval(t);
    }, 150);
    return () => clearInterval(t);
  }

  let cancelPendingTagInject = null;

  function injectTagButton(tagId) {
    // Cancel any in-flight waitForElement from a previous call
    if (cancelPendingTagInject) { cancelPendingTagInject(); cancelPendingTagInject = null; }

    // Clean up any button left from a previous tag navigation
    document.querySelectorAll(".fast-scan-tag-btn-wrapper").forEach((el) =>
      el.remove()
    );

    const wrapper = document.createElement("div");
    wrapper.className = "fast-scan-tag-btn-wrapper";

    const btn = document.createElement("button");
    btn.className = "fast-scan-tag-btn btn btn-secondary btn-sm";
    btn.textContent = "Fast Scan Folder";
    btn.title = "Scan the folder containing this tag's videos";
    wrapper.appendChild(btn);

    btn.addEventListener("click", async () => {
      btn.disabled = true;
      btn.textContent = "Scanning…";
      try {
        const result = await scanEntity("tag", tagId);
        if (result.ok) {
          btn.textContent = "Scan + Generate + AutoTag Queued ✓";
          btn.className = "fast-scan-tag-btn btn btn-success btn-sm";
        } else {
          btn.textContent =
            result.reason === "no_scenes" ? "No Scenes Found" : "Folder Not Found";
          btn.className = "fast-scan-tag-btn btn btn-warning btn-sm";
          btn.disabled = false;
        }
      } catch (e) {
        console.error("[FastScan] tag error:", e);
        btn.textContent = "Scan Failed";
        btn.className = "fast-scan-tag-btn btn btn-warning btn-sm";
        btn.disabled = false;
      }
    });

    // Inject inside the .details-edit navbar (present on all detail pages)
    cancelPendingTagInject = waitForElement(".details-edit", (navBar) => {
      cancelPendingTagInject = null;
      // Guard against a second racing call that slipped through
      if (navBar.querySelector(".fast-scan-tag-btn-wrapper")) return;
      navBar.appendChild(wrapper);
    });
  }

  function handleLocationChange(pathname) {
    const tagMatch = pathname.match(/^\/tags\/(\d+)/);
    if (tagMatch) {
      injectTagButton(tagMatch[1]);
    }
  }

  // React to SPA navigation
  PluginApi.Event.addEventListener("stash:location", (e) => {
    handleLocationChange(e.detail.data.location.pathname);
  });

  // Handle direct page load / refresh
  handleLocationChange(window.location.pathname);
})();

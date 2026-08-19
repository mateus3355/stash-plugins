(function () {
  "use strict";

  if (window.__spriteThumbsPatched) return;
  window.__spriteThumbsPatched = true;

  const PluginApi = window.PluginApi;
  if (!PluginApi) {
    console.error("[spriteThumbs] PluginApi not found - aborting");
    return;
  }

  const STORAGE_KEY = "spriteThumbs.enabled";

  function isEnabled() {
    return localStorage.getItem(STORAGE_KEY) === "true";
  }

  function setEnabled(value) {
    localStorage.setItem(STORAGE_KEY, value ? "true" : "false");
  }

  // ------------------------------------------------------------------
  // SceneCard.Image renders <img class="scene-card-preview-image"> with
  // scene.paths.screenshot as its src. There's no DOM trace of a scene's
  // sprite URL otherwise, so this "before" patch is used only to passively
  // record it (never altering what's rendered). The actual swap is applied
  // directly to the DOM below, so toggling takes effect instantly on
  // already-mounted cards instead of waiting for a React re-render.
  // ------------------------------------------------------------------
  const spriteBySceneId = new Map();

  PluginApi.patch.before("SceneCard.Image", function (props) {
    const sprite = props.scene?.paths?.sprite;
    if (props.scene?.id && sprite) {
      spriteBySceneId.set(props.scene.id, sprite);
    }
    return [props];
  });

  function sceneIdFromImg(img) {
    const link = img.closest("a.scene-card-link");
    if (!link) return null;
    const m = (link.getAttribute("href") || "").match(/\/scenes\/(\d+)/);
    return m ? m[1] : null;
  }

  function applyToImage(img) {
    if (!img.dataset.spriteThumbOriginal) {
      img.dataset.spriteThumbOriginal = img.src;
    }

    if (isEnabled()) {
      const id = sceneIdFromImg(img);
      const sprite = id && spriteBySceneId.get(id);
      if (sprite && img.src !== sprite) img.src = sprite;
    } else if (img.src !== img.dataset.spriteThumbOriginal) {
      img.src = img.dataset.spriteThumbOriginal;
    }
  }

  function applyAll() {
    document
      .querySelectorAll("img.scene-card-preview-image")
      .forEach(applyToImage);
  }

  // ------------------------------------------------------------------
  // Toggle button, injected into the toolbar above the scene grid.
  // ------------------------------------------------------------------
  function updateButton(btn) {
    const on = isEnabled();
    btn.textContent = on ? "Sprite Thumbnails: On" : "Sprite Thumbnails: Off";
    btn.classList.toggle("btn-success", on);
    btn.classList.toggle("btn-secondary", !on);
  }

  function injectButton(toolbar) {
    if (toolbar.querySelector(".sprite-thumbs-toggle")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sprite-thumbs-toggle btn btn-sm";
    updateButton(btn);

    btn.addEventListener("click", function () {
      setEnabled(!isEnabled());
      updateButton(btn);
      applyAll();
    });

    toolbar.appendChild(btn);
  }

  function scanForToolbar() {
    document
      .querySelectorAll(".scene-list .filtered-list-toolbar")
      .forEach(injectButton);
  }

  // ------------------------------------------------------------------
  // Single observer drives both the toolbar button and the image swap,
  // debounced to once per animation frame.
  // ------------------------------------------------------------------
  let rafPending = false;
  function scheduleScan() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(function () {
      rafPending = false;
      scanForToolbar();
      applyAll();
    });
  }

  new MutationObserver(scheduleScan).observe(document.body, {
    childList: true,
    subtree: true,
  });
  scheduleScan();

  // ------------------------------------------------------------------
  // Hover zoom: pans/scales into the sprite tile under the cursor so
  // individual frames become legible. Scoped to images actually showing a
  // sprite (see applyToImage above), so it's a no-op while disabled.
  // ------------------------------------------------------------------
  document.addEventListener(
    "mousemove",
    function (e) {
      const img = e.target;
      if (!(img instanceof HTMLImageElement)) return;
      if (!img.classList.contains("scene-card-preview-image")) return;
      if (!img.src.includes("_sprite.jpg")) return;

      const rect = img.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${xPct}% ${yPct}%`;
    },
    true
  );
})();

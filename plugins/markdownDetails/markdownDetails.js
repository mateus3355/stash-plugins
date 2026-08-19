// console.log("[markdownDetails] script loading…");

(function () {
  "use strict";

  if (window.__markdownDetailsPatched) {
    // console.log("[markdownDetails] already patched, skipping");
    return;
  }
  window.__markdownDetailsPatched = true;
//   console.log("[markdownDetails] initialising");

  const PluginApi = window.PluginApi;

  if (!PluginApi) {
    console.error("[markdownDetails] PluginApi not found – aborting");
    return;
  }

  // ── Helpers ──────────────────────────────────────────────────────────────────

  function isHtml(text) {
    return /^\s*<[a-z][\s\S]*/i.test(text);
  }

  function setReactTextareaValue(textarea, value) {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLTextAreaElement.prototype,
      "value"
    ).set;
    setter.call(textarea, value);
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  }

  // ── View mode selectors ───────────────────────────────────────────────────────
  //
  //  Performer, Studio → id="details"     → .detail-item.details .detail-item-value.details
  //  Tag               → id="description" → .detail-item.description .detail-item-value.description
  //  Group             → id="synopsis"    → .detail-item.synopsis .detail-item-value.synopsis
  //  Scene             → .scene-details p.pre
  //  Gallery           → .gallery-details p.pre
  //  Image             → .image-details p.pre
  //
  const VIEW_SELECTORS = [
    ".detail-item.details .detail-item-value.details",
    ".detail-item.description .detail-item-value.description",
    ".detail-item.synopsis .detail-item-value.synopsis",
    ".scene-details p.pre",
    ".gallery-details p.pre",
    ".image-details p.pre",
  ];

  // ── Edit mode selectors ───────────────────────────────────────────────────────
  //
  //  formikUtils.renderField() sets data-field="{name}" on the Form.Group div.
  //  details     → Scene, Performer, Studio, Gallery, Image
  //  description → Tag
  //  synopsis    → Group
  //
  const EDIT_SELECTORS = [
    '[data-field="details"] textarea',
    '[data-field="description"] textarea',
    '[data-field="synopsis"] textarea',
  ];

  // ── Diagnostics ──────────────────────────────────────────────────────────────

  function dumpPageState() {
    // Show all data-field elements present right now
    const fields = Array.from(document.querySelectorAll("[data-field]"))
      .map(function (el) { return el.getAttribute("data-field"); });
    // console.log("[markdownDetails] DIAG: data-field elements on page:", fields.length ? fields : "(none)");

    // Show all textareas
    const textareas = Array.from(document.querySelectorAll("textarea"))
      .map(function (el) {
        return {
          id: el.id,
          name: el.name,
          className: el.className,
          dataField: el.closest("[data-field]")
            ? el.closest("[data-field]").getAttribute("data-field")
            : "n/a",
        };
      });
    // console.log("[markdownDetails] DIAG: textareas on page:", textareas.length ? textareas : "(none)");

    // Show detail-item elements
    const detailItems = Array.from(document.querySelectorAll(".detail-item"))
      .map(function (el) { return el.className; });
    // console.log("[markdownDetails] DIAG: .detail-item classes:", detailItems.length ? detailItems : "(none)");
  }

  // ── View mode ─────────────────────────────────────────────────────────────────

  function renderDetailElement(el) {
    if (el.dataset.mdDetailRendered) return;
    el.dataset.mdDetailRendered = "1";

    const raw = el.textContent ?? "";
    if (!raw.trim()) {
    //   console.log("[markdownDetails] view: element empty, skipping", el);
      return;
    }

    if (isHtml(raw)) {
      // The element is a <span> (DetailItem) or <p> (scene/gallery/image) –
      // neither can legally contain block-level HTML like <p>, <ul>, <ol>.
      // Hide the original and insert a <div> sibling with the rendered content.
    //   console.log("[markdownDetails] view: rendering HTML alongside", el.className);
      el.style.display = "none";
      const div = document.createElement("div");
      div.className = "md-details-view";
      div.innerHTML = raw;
      el.parentNode.insertBefore(div, el.nextSibling);
    } else {
    //   console.log("[markdownDetails] view: plain-text in", el.className, "→ no change");
      el.classList.add("md-details-plain");
    }
  }

  function processViewElements() {
    VIEW_SELECTORS.forEach(function (sel) {
      const matches = document.querySelectorAll(sel);
      if (matches.length) {
        // console.log("[markdownDetails] view: found", matches.length, "element(s) for:", sel);
        matches.forEach(renderDetailElement);
      }
    });
  }

  // ── Controls reorder ──────────────────────────────────────────────────────────
  // Move .details-edit (Edit/Delete/etc. buttons) to sit above the .detail-group
  // so the controls appear before the description, not after.

  function repositionControls() {
    const controls = document.querySelector(".details-edit");
    if (!controls || controls.dataset.mdReordered) return;

    const detailGroup = document.querySelector(".detail-group");
    if (!detailGroup) return;

    // Only move if controls are currently a later sibling of detail-group.
    const parent = detailGroup.parentNode;
    if (!parent || !parent.contains(controls)) return;

    controls.dataset.mdReordered = "1";
    parent.insertBefore(controls, detailGroup);
  }

  // ── Edit mode ─────────────────────────────────────────────────────────────────

  const QUILL_TOOLBAR = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link"],
    ["clean"],
  ];

  function injectQuillEditor(textarea) {
    if (textarea.dataset.quillInjected) return;

    if (typeof window.Quill === "undefined") {
      console.warn("[markdownDetails] edit: Quill not loaded yet");
      return;
    }

    const fieldName = textarea.closest("[data-field]")
      ? textarea.closest("[data-field]").getAttribute("data-field")
      : "unknown";

    // console.log("[markdownDetails] edit: injecting Quill for field='" + fieldName + "'", textarea);
    textarea.dataset.quillInjected = "1";

    textarea.style.cssText =
      "position:absolute;width:1px;height:1px;opacity:0;overflow:hidden;pointer-events:none;";

    const container = document.createElement("div");
    container.className = "md-details-editor-container";
    textarea.parentNode.insertBefore(container, textarea.nextSibling);

    const quill = new window.Quill(container, {
      theme: "snow",
      placeholder: "Enter details…",
      modules: { toolbar: QUILL_TOOLBAR },
    });

    const initial = textarea.value ?? "";
    // console.log("[markdownDetails] edit: initial value length =", initial.length, ", isHtml =", isHtml(initial));

    if (initial.trim()) {
      if (isHtml(initial)) {
        quill.root.innerHTML = initial;
      } else {
        quill.root.innerHTML = initial
          .split("\n")
          .map(function (line) { return "<p>" + (line.trim() ? line : "<br>") + "</p>"; })
          .join("");
      }
    }

    quill.on("text-change", function () {
      const html =
        quill.root.innerHTML === "<p><br></p>" ? "" : quill.root.innerHTML;
    //   console.log("[markdownDetails] edit: text-change → syncing to textarea, html.length =", html.length);
      setReactTextareaValue(textarea, html);
    });

    // console.log("[markdownDetails] edit: Quill injected ✓ for field='" + fieldName + "'");
  }

  function processEditElements() {
    let found = 0;
    EDIT_SELECTORS.forEach(function (sel) {
      const matches = document.querySelectorAll(sel);
      if (matches.length) {
        // console.log("[markdownDetails] edit: found", matches.length, "textarea(s) for:", sel);
        found += matches.length;
        matches.forEach(injectQuillEditor);
      }
    });
    if (!found) {
      // Dump page state so we can see what IS in the DOM
      dumpPageState();
    }
  }

  // ── DOM observation ───────────────────────────────────────────────────────────

  let rafPending = false;

  const observer = new MutationObserver(function () {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(function () {
      rafPending = false;
      processViewElements();
      processEditElements();
      repositionControls();
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
//   console.log("[markdownDetails] MutationObserver active");

  // ── SPA navigation ────────────────────────────────────────────────────────────

  PluginApi.Event.addEventListener("stash:location", function (e) {
    // console.log("[markdownDetails] stash:location →", e.detail?.data?.location?.pathname ?? e.detail);
    setTimeout(function () {
    //   console.log("[markdownDetails] post-navigation scan");
      processViewElements();
      processEditElements();
      repositionControls();
    }, 500);
  });

  // ── Initial run ───────────────────────────────────────────────────────────────

//   console.log("[markdownDetails] initial scan");
  processViewElements();
  processEditElements();
  repositionControls();
//   console.log("[markdownDetails] ready");
})();

"use strict";

// ------------------------------------------------------
// UTEIS
// ------------------------------------------------------

async function callGQL(reqData) {
  const options = {
    method: 'POST',
    body: JSON.stringify(reqData),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await window.fetch('/graphql', options);
    return res.json();
  }
  catch (err) {
    console.error(err);
  }
}

async function fetchSceneZoom(sceneId) {
  const res = await callGQL({
    query: `query FindScene($id: ID!) { findScene(id: $id) { custom_fields } }`,
    variables: { id: sceneId }
  });
  const raw = res?.data?.findScene?.custom_fields?.stashZoom;
  try { return raw ? JSON.parse(raw) : null; }
  catch (e) { return null; }
}

async function saveSceneZoom(sceneId, x, y, scale) {
  await callGQL({
    query: `mutation SceneUpdate($input: SceneUpdateInput!) { sceneUpdate(input: $input) { id } }`,
    variables: {
      input: {
        id: sceneId,
        custom_fields: { partial: { stashZoom: JSON.stringify({ x, y, scale }) } }
      }
    }
  });
}

async function clearSceneZoom(sceneId) {
  await callGQL({
    query: `mutation SceneUpdate($input: SceneUpdateInput!) { sceneUpdate(input: $input) { id } }`,
    variables: {
      input: {
        id: sceneId,
        custom_fields: { remove: ["stashZoom"] }
      }
    }
  });
}

function getTheThing() {
  const allRows = document.querySelectorAll(".row.form-group");
  let rowToApeendAfter = null;
  allRows.forEach((row) => {
    if (row.querySelector("span").innerHTML === "Scale") {
      rowToApeendAfter = row;
    }
  })
  return rowToApeendAfter;
}


function updateDefaultFilter(value, player, inputContainer = null) {
  const root = document.documentElement;
  root.style.setProperty('--scale', value / 100);
  player.style.setProperty('transform', '');
  if(inputContainer){
    const input = inputContainer.querySelector("input");
    input.value = value;
    const text = inputContainer.querySelector(".filter-slider-value div");
    text.textContent = `${value}%`;
  }

}


function main() {
  setTimeout(async () => {
    if (window.location.pathname.startsWith("/scenes/")) {
      const sceneId = window.location.pathname.split("/scenes/")[1]?.split("/")[0];
      const rootApollo = window.__APOLLO_CLIENT__.cache.data.data.ROOT_QUERY

      const forbiddenConfig = {
          // export root config
          root: rootApollo,
          // plugin settings dictionary
          pluginSettings: rootApollo.configuration.plugins,
          // get plugin settings
          getPluginSetting: (pluginName, settingName, fallback) => rootApollo.configuration.plugins?.[pluginName]?.[settingName] ?? fallback,
          // graphQL apikey
          gqlKey: rootApollo.configuration.general.apiKey
      }


      const root = document.documentElement;
      const jsonToParse = forbiddenConfig.getPluginSetting("stashZoom", "persistent", "{}");
      let parsedJson = null;
      try { parsedJson = JSON.parse(jsonToParse) } catch (e) { }

      // ------------------------------------------------------
      // CREATE THE ELEMENTS
      // ------------------------------------------------------

      window.csLib.waitForElement(".container.scene-video-filter", async (el) => {
        const xSlider = document.createElement("div");
        xSlider.classList.add("row", "form-group");
        xSlider.innerHTML = `
          <span class="col-sm-3">X Slider</span>
          <span class="col-sm-7">
            <input min="-200" max="200" type="range" class="filter-slider d-inline-flex ml-sm-3 undefined form-control-range" value="0">
          </span>
          <span class="col-sm-2 filter-slider-value" role="presentation">
            <div class="TruncatedText" style="-webkit-line-clamp: 1;">0</div>
          </span>
        `
        const xSliderText = xSlider.querySelector(".filter-slider-value div");
        const xInput = xSlider.querySelector("input");

        const ySlider = document.createElement("div");
        ySlider.classList.add("row", "form-group");
        ySlider.innerHTML = `
          <span class="col-sm-3">Y Slider</span>
          <span class="col-sm-7">
            <input min="-200" max="200" type="range" class="filter-slider d-inline-flex ml-sm-3 undefined form-control-range" value="0">
          </span>
          <span class="col-sm-2 filter-slider-value" role="presentation">
            <div class="TruncatedText" style="-webkit-line-clamp: 1;">0</div>
          </span>
        `
        const ySliderText = ySlider.querySelector(".filter-slider-value div");
        const yInput = ySlider.querySelector("input");

        const player = document.querySelector("video-js").player.children_[0];
        player.classList.add("stash-zoom");

        const updateCSSVariables = (xValue, yValue) => {
          root.style.setProperty('--x-offset', `${xValue}%`);
          root.style.setProperty('--y-offset', `${yValue}%`);
          xSliderText.textContent = `${xValue}%`;
          ySliderText.textContent = `${yValue}%`;
          xInput.value = xValue;
          yInput.value = yValue;
        }

        xInput.addEventListener("input", (e) => {
          const value = e.target.value;
          updateCSSVariables(value, yInput.value);
        });
        xSlider.querySelector(".filter-slider-value").addEventListener("click", (e) => {
          updateCSSVariables("0", yInput.value);
          e.stopPropagation();
        });
        yInput.addEventListener("input", (e) => {
          const value = e.target.value;
          updateCSSVariables(xInput.value, value);
        });
        ySlider.querySelector(".filter-slider-value").addEventListener("click", (e) => {
          updateCSSVariables(xInput.value, "0");
          e.stopPropagation();
        });

        const scaleInput = getTheThing();
        if (scaleInput) {
          scaleInput.insertAdjacentElement("afterend", ySlider);
          scaleInput.insertAdjacentElement("afterend", xSlider);
        } else {
          console.warn("Could not find the row to append after.");
          el.appendChild(ySlider);
          el.appendChild(xSlider);
        }
        scaleInput.addEventListener("input", (e) => {
          const value = e.target.value;
          const text = scaleInput.querySelector(".filter-slider-value div");
          text.textContent = `${value}%`;
        });
        scaleInput.querySelector(".filter-slider-value").addEventListener("click", (e) => {
          updateDefaultFilter("100", player, scaleInput);
          e.stopPropagation();
        });

        el.childNodes.forEach((child) => {
          if (child.querySelector("span")?.textContent === "Scale") {
            const scaleInput = child.querySelector("input");
            if (scaleInput) {
              scaleInput.setAttribute("min", "50");
              scaleInput.setAttribute("max", "400");
            }
          }
        })



        // ------------------------------------------------------
        // CONFIG
        // ------------------------------------------------------


        /*
        Config presets Exemple
        [
            {
                "name": "Brasileiras",
                "x": "23%",
                "y": "0%",
                "scale": "100%"
            }
        ]
        */

        // create a select element with the presets (parsedJson)
        if (parsedJson && Array.isArray(parsedJson) && parsedJson.length > 0) {
          const select = document.createElement("select");
          select.classList.add("form-control", "mb-4");
          const defaultOption = document.createElement("option");
          defaultOption.textContent = "Normal";
          defaultOption.value = "";
          select.appendChild(defaultOption);

          parsedJson.forEach((preset, index) => {
            const option = document.createElement("option");
            option.textContent = preset.name || `Preset ${index + 1}`;
            option.value = index;
            select.appendChild(option);
          });

          select.addEventListener("change", (e) => {
            const selectedIndex = e.target.value;
            if (selectedIndex !== "") {
              const preset = parsedJson[selectedIndex];
              updateCSSVariables(preset.x.replace("%", ""), preset.y.replace("%", ""));
              updateDefaultFilter(preset.scale.replace("%", ""), player, scaleInput);
            } else{
              // reset to default
              updateCSSVariables("0", "0");
              updateDefaultFilter("100", player);
            }
          });

          //insert as the first child of el.parentNode
          el.parentNode.insertBefore(select, el);
        }


        // ------------------------------------------------------
        // SAVE / LOAD PER SCENE
        // ------------------------------------------------------

        const btnRow = document.createElement("div");
        btnRow.classList.add("row", "form-group");
        btnRow.innerHTML = `
          <span class="col-sm-9 d-flex gap-2">
            <button class="btn btn-primary btn-sm stash-zoom-save">Save Zoom</button>
            <button class="btn btn-secondary btn-sm stash-zoom-clear">Clear Saved</button>
          </span>
        `;
        el.insertAdjacentElement("afterbegin", btnRow);

        btnRow.querySelector(".stash-zoom-save").addEventListener("click", async (e) => {
          const btn = e.currentTarget;
          const scale = scaleInput.querySelector("input")?.value ?? "100";
          await saveSceneZoom(sceneId, xInput.value, yInput.value, scale);
          btn.textContent = "Saved!";
          setTimeout(() => btn.textContent = "Save Zoom", 1500);
        });

        btnRow.querySelector(".stash-zoom-clear").addEventListener("click", async (e) => {
          const btn = e.currentTarget;
          await clearSceneZoom(sceneId);
          btn.textContent = "Cleared!";
          setTimeout(() => btn.textContent = "Clear Saved", 1500);
        });

        // ------------------------------------------------------
        // STICKY PLAYER
        // ------------------------------------------------------

        const stickyRow = document.createElement("div");
        stickyRow.classList.add("row", "form-group");
        stickyRow.innerHTML = `
          <span class="col-sm-3">Sticky Player</span>
          <span class="col-sm-9">
            <input type="checkbox" class="stash-zoom-sticky-checkbox">
          </span>
        `;
        el.insertAdjacentElement("afterbegin", stickyRow);

        const playerContainer = document.querySelector(".scene-player-container");
        const stickyCheckbox = stickyRow.querySelector(".stash-zoom-sticky-checkbox");
        // reflect whatever the actual current state is, rather than assuming
        // unchecked - this panel can be rebuilt (new scene, tab re-open) while
        // the player container itself keeps its existing sticky state
        stickyCheckbox.checked = playerContainer?.classList.contains("position-sticky") ?? false;
        stickyCheckbox.addEventListener("change", (e) => {
          playerContainer?.classList.toggle("position-sticky", e.target.checked);
        });

        // Auto-load saved zoom for this scene
        const savedZoom = sceneId ? await fetchSceneZoom(sceneId) : null;
        if (savedZoom && typeof savedZoom === "object") {
          updateCSSVariables(savedZoom.x ?? "0", savedZoom.y ?? "0");
          updateDefaultFilter(savedZoom.scale ?? "100", player, scaleInput);
        } else {
          updateCSSVariables("0", "0");
          updateDefaultFilter("100", player);
        }

        let scaleValue = savedZoom?.scale ?? "100";

        //keyboard shortcuts
        //shift a = decrease x offset
        //shift d = increase x offset
        //shift w = decrease y offset
        //shift s = increase y offset
        //shift z = decrease scale
        //shift x = increase scale
        document.addEventListener("keydown", (e) => {
          if (e.shiftKey) {
            const key = e.key.toLowerCase(); // Normalize to lowercase
            switch (key) {
              case "a":
                xInput.value = parseInt(xInput.value) + 1;
                updateCSSVariables(xInput.value, yInput.value);
                break;
              case "d":
                xInput.value = parseInt(xInput.value) - 1;
                updateCSSVariables(xInput.value, yInput.value);
                break;
              case "w":
                yInput.value = parseInt(yInput.value) + 1;
                updateCSSVariables(xInput.value, yInput.value);
                break;
              case "s":
                yInput.value = parseInt(yInput.value) - 1;
                updateCSSVariables(xInput.value, yInput.value);
                break;
              case "z":
                scaleValue = parseInt(scaleValue) + 1;
                updateDefaultFilter(scaleValue, player, scaleInput);
                break;
              case "x":
                scaleValue = parseInt(scaleValue) - 1;
                updateDefaultFilter(scaleValue, player, scaleInput);
                break;
            }
          }
        });
      })
    }
  }, 200)

};

// ------------------------------------------------------
// AB-LOOP: reset on scene change
// ------------------------------------------------------
//
// Everything this used to do by hand - forcing "Loop Off" per scene, faking clicks on
// the Start/End buttons to force a full-video loop range, patching touch support onto
// those buttons, and running its own 'ended' handler to decide loop-vs-advance - is now
// handled natively by Stash itself (as of the mobile AB-loop work): the player resets
// AB-loop on skip, loops the whole video correctly when enabled with nothing set, and
// its dedicated mobile controls already support touch.
//
// The one gap that's left: Stash only resets AB-loop when you leave a scene via the
// player's own skip button/hotkey - not when you click a different scene in the queue
// sidebar, a related scene, browser back/forward, etc. This keeps just that, using the
// real plugin API instead of finding-and-clicking DOM buttons.
let stashZoomLoopSceneId = null;

function stashZoomResetLoopForNewScene() {
  const videoJs = PluginApi.utils.InteractiveUtils.getPlayer();
  const opts = videoJs?.abLoopPlugin?.getOptions?.();
  if (opts?.enabled) {
    videoJs.abLoopPlugin.setOptions({ ...opts, start: 0, end: false, enabled: false });
  }
}

function fixLoopButton() {
  const path = window.location.pathname;
  if (path.startsWith("/scenes/")) {
    stashZoomLoopSceneId = path.split("/scenes/")[1]?.split("/")[0];
  }
  setTimeout(stashZoomResetLoopForNewScene, 200);
}

const observerPlayer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.matches("video-js")) {
          main();
          fixLoopButton();
        }
      });
    }
  });
});

observerPlayer.observe(document.body, { childList: true, subtree: true });

// Reliable scene-switch signal (covers manual next/prev, queue clicks, browser nav) -
// far sturdier than guessing which DOM node/attribute video.js mutates on a source change.
if (window.PluginApi?.Event) {
  PluginApi.Event.addEventListener("stash:location", (e) => {
    const pathname = e.detail?.data?.location?.pathname ?? "";
    if (!pathname.startsWith("/scenes/")) return;
    const sceneId = pathname.split("/scenes/")[1]?.split("/")[0];
    if (sceneId === stashZoomLoopSceneId) return;
    stashZoomLoopSceneId = sceneId;
    setTimeout(stashZoomResetLoopForNewScene, 200);
  });
}

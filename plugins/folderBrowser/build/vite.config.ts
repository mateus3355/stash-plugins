import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const STASH_SRC = "/workspaces/stash/ui/v2.5/src";

// Everything here is also exposed on window.PluginApi at runtime - these are
// NOT bundled into the output at all, just referenced, so there's exactly
// one copy of React (and friends) shared with the host app. The global
// names are UMD-style dotted-path lookups resolved at load time (see the
// `globals` function below), not plain identifiers.
const EXTERNALS: Record<string, string> = {
  react: "React",
  "react-dom": "ReactDOM",
  "react-bootstrap": "Bootstrap",
  "react-router-dom": "ReactRouterDOM",
  "react-intl": "Intl",
  "@apollo/client": "Apollo",
  "@fortawesome/react-fontawesome": "ReactFontAwesome",
  "@fortawesome/free-solid-svg-icons": "FontAwesomeSolid",
  "@fortawesome/free-regular-svg-icons": "FontAwesomeRegular",
  "@fortawesome/free-brands-svg-icons": "FontAwesomeBrands",
  mousetrap: "Mousetrap",
  "mousetrap-pause": "MousetrapPause",
  "@ant-design/react-slick": "ReactSlick",
  "react-select": "ReactSelect",
};

export default defineConfig({
  plugins: [react({ babel: { compact: true } })],
  resolve: {
    alias: [{ find: /^src\//, replacement: STASH_SRC + "/" }],
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "FolderBrowserPlugin",
      formats: ["iife"],
      fileName: () => "folderBrowser.js",
    },
    rollupOptions: {
      external: Object.keys(EXTERNALS),
      output: {
        // react/react-dom resolve off window.PluginApi.React/.ReactDOM;
        // everything else off window.PluginApi.libraries.<Name>.
        globals: (id) => {
          if (id === "react") return "PluginApi.React";
          if (id === "react-dom") return "PluginApi.ReactDOM";
          return "PluginApi.libraries." + EXTERNALS[id];
        },
        extend: true,
        // Stash's own generated-graphql.ts module is large and only used
        // for its compiled query/mutation DocumentNodes and types here -
        // no need to split it into its own chunk for an IIFE single-file
        // plugin bundle.
        inlineDynamicImports: true,
      },
    },
  },
});

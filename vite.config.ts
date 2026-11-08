import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), viteReact()],
  optimizeDeps: {
    // @base-ui/utils .mjs files named-import the CJS shim; the optimizer
    // must interop it or dev serves "no export named useSyncExternalStore".
    // zustand/react-redux use the .js-suffixed specifiers — same treatment.
    include: [
      "use-sync-external-store/shim",
      "use-sync-external-store/shim/with-selector",
      "use-sync-external-store/shim/with-selector.js",
      "use-sync-external-store/with-selector.js",
      // mermaid (via @streamdown/mermaid in @ktbhealth/ui ai-elements) is
      // served unbundled and its CJS deps (dayjs, debug, katex, cytoscape
      // plugins) break in the browser. It's a direct devDep + dedupe so all
      // importers share one copy that esbuild prebundles with its deps.
      "mermaid",
    ],
  },
  resolve: {
    dedupe: ["mermaid"],
  },
});

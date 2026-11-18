import tailwindcss from "@tailwindcss/vite";
import { arch } from "@ktbhealth/workspace/eslint-config-arch";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [tailwindcss(), viteReact()],
  lint: {
    // arch/no-hardcoded-colors: theme tokens are the only color source —
    // palette utilities and literal color values bypass the derived
    // token set. pluginSpecifier is required: the plugin resolves
    // through the @ktbhealth/workspace git dep, not a bare
    // `eslint-plugin-arch` package.
    ...arch.ui({
      pluginSpecifier: "@ktbhealth/workspace/eslint-plugin-arch",
      // This repo is a flat app: all UI lives under src/ (demos, blocks,
      // pages); there is no packages/ or stories/ tree.
      sources: ["src/**/*.{ts,tsx}"],
      tests: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    }),
  },
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
      // micromark (via streamdown) imports debug — CJS-only package.
      "debug",
      // streamdown (via @ktbhealth/ui ai-elements markdown) pulls the
      // unified/remark tree whose CJS leaves (extend, debug, ...) break
      // when served raw. Prebundling the entry interops the whole graph.
      "streamdown",
      // @rive-app/react-webgl2 (persona demo) is CJS; served raw its named
      // exports (useRive, ...) fail and take down the whole demos chunk.
      "@rive-app/react-webgl2",
      // ansi-to-react (via ai-elements/terminal) is CJS.
      "ansi-to-react",
    ],
  },
  resolve: {
    dedupe: ["mermaid", "debug", "streamdown", "@rive-app/react-webgl2", "ansi-to-react"],
  },
});

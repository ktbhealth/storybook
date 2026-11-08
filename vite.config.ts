import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), viteReact()],
  optimizeDeps: {
    // @base-ui/utils .mjs files named-import the CJS shim; the optimizer
    // must interop it or dev serves "no export named useSyncExternalStore".
    include: ["use-sync-external-store/shim", "use-sync-external-store/shim/with-selector"],
  },
});

import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { AppShell } from "./shell";
import { OverviewPage } from "./pages/OverviewPage";
import { CatalogIndexPage } from "./pages/CatalogIndexPage";
import { ComponentPage } from "./pages/ComponentPage";
import { BlocksIndexPage } from "./pages/BlocksIndexPage";
import { BlockPage } from "./pages/BlockPage";
import { TokensPage } from "./pages/TokensPage";

const rootRoute = createRootRoute({
  component: AppShell,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: OverviewPage,
});

const tokensRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tokens",
  component: TokensPage,
});

const componentsIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/components",
  component: CatalogIndexPage,
});

const componentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/components/$",
  component: ComponentPage,
});

const blocksIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blocks",
  component: BlocksIndexPage,
});

const blockRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blocks/$name",
  component: BlockPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  tokensRoute,
  componentsIndexRoute,
  componentRoute,
  blocksIndexRoute,
  blockRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

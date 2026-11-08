import { useParams } from "@tanstack/react-router";
import {
  Component as ReactComponent,
  lazy,
  Suspense,
  useMemo,
  type ComponentType,
  type ReactNode,
} from "react";
import { CATALOG, type CatalogEntry } from "../catalog/manifest";
import { DEMOS } from "../demos";
import { CatalogIndexPage } from "./CatalogIndexPage";
import { DemoStage, PageHeader } from "../shell";

class ErrorBoundary extends ReactComponent<
  { children: ReactNode; resetKey: string },
  { error: Error | null }
> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidUpdate(prev: { resetKey: string }) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }
  render() {
    if (this.state.error) {
      return (
        <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
          <p className="font-medium text-destructive">
            This component needs extra setup to render standalone.
          </p>
          <p className="mt-1 text-muted-foreground">{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function pickComponent(mod: unknown, entry: CatalogEntry): ComponentType | null {
  const m = mod as Record<string, unknown>;
  for (const name of [entry.primary, ...entry.exports]) {
    const v = m[name];
    if (typeof v === "function") return v as ComponentType;
  }
  return null;
}

function GenericDemo({ entry }: { entry: CatalogEntry }) {
  const Lazy = useMemo(
    () =>
      lazy(async () => {
        const mod = await entry.loader();
        const C = pickComponent(mod, entry);
        if (!C) throw new Error("No component export found in module");
        return { default: C };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entry.id],
  );
  return (
    <Suspense fallback={<p className="text-sm text-muted-foreground">Loading component…</p>}>
      <ErrorBoundary resetKey={entry.id}>
        <DemoStage>
          <Lazy />
        </DemoStage>
      </ErrorBoundary>
    </Suspense>
  );
}

export function ComponentPage() {
  const params = useParams({ strict: false }) as { _splat?: string };
  const id = params._splat ?? "";
  const entry = CATALOG.find((c) => c.id === id);

  // The `/components/$` splat also matches `/components` itself (empty
  // splat), outranking the index route — render the catalog there.
  if (!id) {
    return <CatalogIndexPage />;
  }

  if (!entry) {
    return (
      <div>
        <PageHeader title="Component not found" />
        <p className="px-8 py-8 text-sm text-muted-foreground">
          No component named <code>{id}</code> in the catalog.
        </p>
      </div>
    );
  }

  const Demo = DEMOS[entry.id];
  return (
    <div>
      <PageHeader title={entry.label} description={`${entry.family} · ${entry.importPath}`} />
      <div className="space-y-6 px-8 py-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-xs">
            {entry.importPath}
          </span>
          {Demo ? (
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              hand-written demo
            </span>
          ) : (
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              generic demo (default props)
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {entry.exports.map((e) => (
            <span
              key={e}
              className="rounded-md border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {e}
            </span>
          ))}
        </div>
        {Demo ? <Demo /> : <GenericDemo entry={entry} />}
        {!Demo ? (
          <p className="text-xs text-muted-foreground">
            Rendered <code>{entry.primary}</code> with default props. If it needs a provider or
            required props it will show an error above.
          </p>
        ) : null}
      </div>
    </div>
  );
}

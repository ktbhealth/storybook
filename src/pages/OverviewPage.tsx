import { Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, Component, Github } from "lucide-react";
import { ComponentLink, PageHeader } from "../shell";
import { BLOCKS } from "../blocks";
import { CATALOG, FAMILY_LABELS, FAMILY_ORDER } from "../catalog/manifest";

export function OverviewPage() {
  return (
    <div>
      <PageHeader
        title="KTB Health UI Catalog"
        description="A component catalog for the KTB Health design system, rendered from @ktbhealth/ui (React, Tailwind v4)."
      />
      <div className="space-y-10 px-8 py-8">
        <section className="grid gap-4 sm:grid-cols-3">
          <Link
            to="/components"
            className="rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <Component className="size-5 text-primary" />
            <p className="mt-3 text-sm font-semibold">Components</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {CATALOG.length} React components from{" "}
              <code className="text-xs">@ktbhealth/ui/components/*</code>
            </p>
          </Link>
          <Link
            to="/blocks"
            className="rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <Blocks className="size-5 text-primary" />
            <p className="mt-3 text-sm font-semibold">Blocks</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {BLOCKS.length} composed examples (WIP)
            </p>
          </Link>
          <a
            href="https://github.com/ktbhealth/ui"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <Github className="size-5 text-primary" />
            <p className="mt-3 text-sm font-semibold">Source</p>
            <p className="mt-1 text-sm text-muted-foreground">github.com/ktbhealth/ui</p>
          </a>
        </section>

        <section>
          <h2 className="text-sm font-semibold">Families</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {FAMILY_ORDER.map((family) => {
              const count = CATALOG.filter((c) => c.family === family).length;
              const first = CATALOG.find((c) => c.family === family);
              return (
                <ComponentLink
                  key={family}
                  id={first?.id ?? ""}
                  className="group rounded-xl border bg-card p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{FAMILY_LABELS[family]}</p>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-1 text-2xl font-semibold">{count}</p>
                  <p className="mt-1 text-xs text-muted-foreground">components</p>
                </ComponentLink>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl border bg-muted/30 p-5 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Note:</strong> this catalog renders the React build
            of <code className="text-xs">@ktbhealth/ui</code> installed from the{" "}
            <code className="text-xs">v0.1.0@react</code> git tag. Components without a hand-written
            demo render with default props inside an error boundary; anything needing complex
            providers is flagged.
          </p>
        </section>
      </div>
    </div>
  );
}

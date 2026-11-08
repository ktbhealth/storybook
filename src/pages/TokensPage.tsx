import { useEffect, useState, type ReactNode } from "react";
import { PageHeader } from "../shell";

const COLOR_TOKENS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "border",
  "input",
  "ring",
] as const;

const CHART_TOKENS = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"] as const;

const SIDEBAR_TOKENS = [
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
] as const;

const SHADOW_TOKENS = ["2xs", "xs", "sm", "", "md", "lg", "xl", "2xl"] as const;

// Mirrors the radius scale defined in @theme inline in @ktbhealth/ui globals.css.
const RADIUS_STEPS: [string, number][] = [
  ["sm", 0.6],
  ["md", 0.8],
  ["lg", 1],
  ["xl", 1.4],
  ["2xl", 1.8],
  ["3xl", 2.2],
  ["4xl", 2.6],
];

const FONT_TOKENS = ["font-heading", "font-sans", "font-mono", "font-body"] as const;

function useTokenValue(name: string): string {
  const read = () =>
    getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
  const [value, setValue] = useState(read);
  useEffect(() => {
    const observer = new MutationObserver(() => setValue(read()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return value;
}

function TokenValue({ name, children }: { name: string; children?: ReactNode }) {
  const value = useTokenValue(name);
  return (
    <p className="truncate font-mono text-[11px] text-muted-foreground" title={value || undefined}>
      {children ?? `--${name}: ${value || "—"}`}
    </p>
  );
}

function ColorSwatch({ name }: { name: string }) {
  const value = useTokenValue(name);
  return (
    <div className="rounded-lg border bg-card p-3">
      <div
        className="h-12 rounded-md border"
        style={{ background: `var(--${name})` }}
        aria-hidden
      />
      <p className="mt-2 truncate font-mono text-xs font-medium">{name}</p>
      <p
        className="truncate font-mono text-[11px] text-muted-foreground"
        title={value || undefined}
      >
        {value || "—"}
      </p>
      <p className="mt-1 truncate font-mono text-[11px] text-muted-foreground/70">--color-{name}</p>
    </div>
  );
}

function ColorSection({ title, tokens }: { title: string; tokens: readonly string[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tokens.map((name) => (
          <ColorSwatch key={name} name={name} />
        ))}
      </div>
    </section>
  );
}

export function TokensPage() {
  return (
    <div>
      <PageHeader
        title="Tokens"
        description="Design tokens from @ktbhealth/ui, resolved from the active theme (light/dark)."
      />
      <div className="space-y-10 px-8 py-8">
        <ColorSection title="Colors" tokens={COLOR_TOKENS} />
        <ColorSection title="Chart" tokens={CHART_TOKENS} />
        <ColorSection title="Sidebar" tokens={SIDEBAR_TOKENS} />

        <section>
          <h2 className="text-sm font-semibold">Radius</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Base <code className="font-mono">--radius</code> scales the steps below.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {RADIUS_STEPS.map(([step, factor]) => (
              <div key={step} className="rounded-lg border bg-card p-3">
                <div
                  className="flex h-12 items-center justify-center border bg-muted/40"
                  style={{ borderRadius: `calc(var(--radius) * ${factor})` }}
                  aria-hidden
                >
                  <div
                    className="size-4 bg-primary"
                    style={{ borderRadius: `calc(var(--radius) * ${factor})` }}
                  />
                </div>
                <p className="mt-2 font-mono text-xs font-medium">rounded-{step}</p>
                <p className="truncate font-mono text-[11px] text-muted-foreground">
                  calc(var(--radius) * {factor})
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <TokenValue name="radius" />
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold">Shadows</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {SHADOW_TOKENS.map((step) => {
              const name = `shadow${step ? `-${step}` : ""}`;
              return (
                <div key={name} className="rounded-lg border bg-card p-3">
                  <div className="flex h-12 items-center justify-center rounded-md bg-muted/40">
                    <div
                      className="size-8 rounded-md border bg-card"
                      style={{ boxShadow: `var(--${name})` }}
                      aria-hidden
                    />
                  </div>
                  <p className="mt-2 font-mono text-xs font-medium">{name}</p>
                  <TokenValue name={name} />
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold">Typography</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {FONT_TOKENS.map((name) => (
              <div key={name} className="rounded-lg border bg-card p-4">
                <p className="text-lg" style={{ fontFamily: `var(--${name})` }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="mt-2 font-mono text-xs font-medium">{name}</p>
                <TokenValue name={name} />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border bg-muted/30 p-5 text-sm text-muted-foreground">
          <p>
            Tokens are defined as CSS custom properties in{" "}
            <code className="text-xs">@ktbhealth/ui/packages/tailwind/src/globals.css</code> and
            mapped to Tailwind utilities via <code className="text-xs">@theme inline</code>. Values
            shown are the resolved custom properties for the current theme.
          </p>
        </section>
      </div>
    </div>
  );
}

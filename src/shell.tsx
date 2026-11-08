import { Link, Outlet } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BLOCKS } from "./blocks";
import { CATALOG, FAMILY_LABELS, FAMILY_ORDER } from "./catalog/manifest";

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("ktb-theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

function NavLink({
  to,
  params,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
}) {
  // TanStack Link `to` is typed against the route tree; cast keeps the sidebar
  // data-driven while remaining type-safe at the route level.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LinkAny = Link as any;
  return (
    <LinkAny
      to={to}
      params={params}
      className="block truncate rounded-md px-2 py-1 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      activeProps={{
        className: "bg-muted text-foreground font-medium",
      }}
      activeOptions={{ exact: false }}
    >
      {children}
    </LinkAny>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="px-2 pt-4 pb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export function AppShell() {
  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r bg-sidebar">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div>
            <p className="text-sm font-semibold">KTB Health</p>
            <p className="text-xs text-muted-foreground">UI Catalog</p>
          </div>
          <ThemeToggle />
        </div>
        <nav className="flex-1 overflow-y-auto px-2 pb-6">
          <SectionLabel>Get started</SectionLabel>
          <NavLink to="/">Overview</NavLink>
          <NavLink to="/components">All components</NavLink>
          <NavLink to="/blocks">Blocks</NavLink>

          {FAMILY_ORDER.map((family) => (
            <div key={family}>
              <SectionLabel>{FAMILY_LABELS[family]}</SectionLabel>
              {CATALOG.filter((c) => c.family === family).map((c) => (
                <NavLink key={c.id} to="/components/$" params={{ _splat: c.id }}>
                  {c.label}
                </NavLink>
              ))}
            </div>
          ))}

          <SectionLabel>Blocks (WIP)</SectionLabel>
          {BLOCKS.map((b) => (
            <NavLink key={b.id} to="/blocks/$name" params={{ name: b.id }}>
              {b.title}
            </NavLink>
          ))}
        </nav>
        <div className="border-t px-4 py-3 text-[11px] text-muted-foreground">
          @ktbhealth/ui v0.1.0
        </div>
      </aside>
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export function PageHeader({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <header className="border-b bg-background/80 px-8 py-6 backdrop-blur">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
          {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        </div>
      </div>
    </header>
  );
}

/** Link to a catalog entry. The splat route param is intentionally untyped here
 *  so sidebar/catalog data can drive navigation. */
export function ComponentLink({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LinkAny = Link as any;
  return (
    <LinkAny to="/components/$" params={{ _splat: id }} className={className}>
      {children}
    </LinkAny>
  );
}

export function DemoStage({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border bg-card p-8 text-card-foreground">{children}</div>;
}

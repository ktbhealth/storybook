import { Link } from "@tanstack/react-router";
import { PageHeader } from "../shell";
import { BLOCKS } from "../blocks";

export function BlocksIndexPage() {
  return (
    <div>
      <PageHeader
        title="Blocks"
        description="Composed examples built from @ktbhealth/ui components. All blocks here are WIP."
      />
      <div className="grid gap-4 px-8 py-8 sm:grid-cols-2">
        {BLOCKS.map((b) => {
          return (
            <Link
              key={b.id}
              to="/blocks/$name"
              params={{ name: b.id }}
              className="rounded-xl border bg-card p-5 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-amber-600 uppercase dark:text-amber-400">
                  WIP
                </span>
              </div>
              <p className="mt-2 font-mono text-sm font-medium">{b.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

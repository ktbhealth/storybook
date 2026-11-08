import { Link } from "@tanstack/react-router";
import { PageHeader } from "../shell";
import { ComponentPreview } from "../ComponentPreview";
import { BLOCKS } from "../blocks";

export function BlocksIndexPage() {
  return (
    <div>
      <PageHeader
        title="Blocks"
        description="Composed examples built from @ktbhealth/ui components. All blocks here are WIP."
      />
      <div className="grid grid-cols-1 gap-3 px-8 py-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOCKS.map((b) => (
          <Link
            key={b.id}
            to="/blocks/$name"
            params={{ name: b.id }}
            className="block rounded-xl border bg-card p-2 transition-colors hover:bg-muted/50"
          >
            <ComponentPreview Demo={b.component} className="h-56" />
            <div className="px-2 pb-1 pt-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-amber-600 uppercase dark:text-amber-400">
                  WIP
                </span>
                <span className="truncate font-mono text-sm font-medium">{b.title}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

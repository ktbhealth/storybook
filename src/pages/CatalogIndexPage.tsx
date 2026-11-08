import { ComponentLink, PageHeader } from "../shell";
import { ComponentPreview } from "../ComponentPreview";
import { CATALOG, FAMILY_LABELS, FAMILY_ORDER } from "../catalog/manifest";
import { DEMOS } from "../demos";

export function CatalogIndexPage() {
  return (
    <div>
      <PageHeader
        title="Components"
        description={`${CATALOG.length} exports grouped by family. Hand-written demos are marked.`}
      />
      <div className="space-y-10 px-8 py-8">
        {FAMILY_ORDER.map((family) => {
          const items = CATALOG.filter((c) => c.family === family);
          return (
            <section key={family}>
              <h2 className="text-sm font-semibold">
                {FAMILY_LABELS[family]}
                <span className="ml-2 font-normal text-muted-foreground">{items.length}</span>
              </h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((c) => {
                  const Demo = DEMOS[c.id];
                  return (
                    <ComponentLink
                      key={c.id}
                      id={c.id}
                      className="block rounded-lg border bg-card p-2 transition-colors hover:bg-muted/50"
                    >
                      {Demo ? <ComponentPreview Demo={Demo} /> : null}
                      <div className="flex items-center justify-between gap-2 px-1.5 pb-1 pt-2">
                        <span className="truncate font-mono text-[13px]">{c.id}</span>
                        {Demo ? (
                          <span className="shrink-0 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                            demo
                          </span>
                        ) : null}
                      </div>
                      <p className="truncate px-1.5 pb-1.5 text-xs text-muted-foreground">
                        {c.exports.slice(0, 4).join(", ")}
                        {c.exports.length > 4 ? ` +${c.exports.length - 4}` : ""}
                      </p>
                    </ComponentLink>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

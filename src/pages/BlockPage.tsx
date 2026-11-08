import { useParams } from "@tanstack/react-router";
import { PageHeader } from "../shell";
import { BLOCKS } from "../blocks";

export function BlockPage() {
  const { name } = useParams({ strict: false }) as { name?: string };
  const block = BLOCKS.find((b) => b.id === name);
  if (!block) {
    return (
      <div>
        <PageHeader title="Block not found" />
        <p className="px-8 py-8 text-sm text-muted-foreground">
          No block named <code>{name}</code>.
        </p>
      </div>
    );
  }
  const Block = block.component;
  return (
    <div>
      <PageHeader title={block.title} description={`${block.description} (WIP example)`} />
      <div className="px-8 py-8">
        <div className="rounded-xl border bg-card p-8">
          <Block />
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">src/blocks/{block.title}.tsx</p>
      </div>
    </div>
  );
}

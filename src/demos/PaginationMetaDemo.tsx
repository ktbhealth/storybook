import { Button } from "@ktbhealth/ui/components/button";
import { PaginationMeta, PaginationRange } from "@ktbhealth/ui/components/pagination-meta";
import { DemoStage } from "../shell";

export function PaginationMetaDemo() {
  return (
    <DemoStage>
      <div className="w-full overflow-hidden rounded-lg border">
        <div className="p-4 text-sm text-muted-foreground">Table rows…</div>
        <PaginationMeta meta={<PaginationRange page={3} pageSize={10} total={142} />}>
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </PaginationMeta>
      </div>
      <PaginationRange page={1} pageSize={25} total={0} className="text-sm text-muted-foreground" />
    </DemoStage>
  );
}

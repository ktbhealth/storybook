import { Skeleton } from "@ktbhealth/ui/components/skeleton";
import { DemoStage } from "../shell";

export function SkeletonDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-2/5" />
            <Skeleton className="h-3 w-3/5" />
          </div>
        </div>
        <Skeleton className="h-24 w-full rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </DemoStage>
  );
}

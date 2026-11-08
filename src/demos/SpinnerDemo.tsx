import { Spinner } from "@ktbhealth/ui/components/spinner";
import { DemoStage } from "../shell";

export function SpinnerDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap items-center gap-6">
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8 text-primary" />
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Spinner className="size-4" /> Loading patient chart…
        </span>
      </div>
    </DemoStage>
  );
}

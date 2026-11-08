import { Separator } from "@ktbhealth/ui/components/separator";
import { DemoStage } from "../shell";

export function SeparatorDemo() {
  return (
    <DemoStage>
      <div className="max-w-md space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-medium">Patient information</p>
          <p className="text-sm text-muted-foreground">Horizontal separator below.</p>
        </div>
        <Separator />
        <div className="flex h-16 items-center gap-4">
          <span className="text-sm">Left</span>
          <Separator orientation="vertical" className="h-full" />
          <span className="text-sm">Middle</span>
          <Separator orientation="vertical" className="h-full" />
          <span className="text-sm">Right</span>
        </div>
      </div>
    </DemoStage>
  );
}

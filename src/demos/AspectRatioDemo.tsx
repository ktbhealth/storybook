import { AspectRatio } from "@ktbhealth/ui/components/aspect-ratio";
import { DemoStage } from "../shell";

export function AspectRatioDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-sm gap-6">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            16:9 telemedicine preview
          </div>
        </AspectRatio>
        <AspectRatio ratio={1} className="overflow-hidden rounded-lg bg-muted">
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            1:1 profile photo
          </div>
        </AspectRatio>
      </div>
    </DemoStage>
  );
}

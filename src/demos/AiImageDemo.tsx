import { Image } from "@ktbhealth/ui/components/ai-elements/image";
import { DemoStage } from "../shell";

// 1x1 red PNG
const PNG_1PX =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

export function AiImageDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-xs gap-4">
        <Image
          base64={PNG_1PX}
          mediaType="image/png"
          alt="Sample generated image"
          className="rounded-lg border"
          uint8Array={new Uint8Array()}
        />
        <p className="text-xs text-muted-foreground">
          Renders a generated image from base64 + media type (1×1 placeholder PNG here).
        </p>
      </div>
    </DemoStage>
  );
}

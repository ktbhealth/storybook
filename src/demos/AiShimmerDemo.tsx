import { Shimmer } from "@ktbhealth/ui/components/ai-elements/shimmer";
import { DemoStage } from "../shell";

export function AiShimmerDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-4 text-sm">
        <Shimmer>Analyzing patient history…</Shimmer>
        <Shimmer as="h3" className="text-base font-medium">
          Generating visit summary
        </Shimmer>
        <Shimmer duration={3} spread={4}>
          Streaming a longer response with a slower shimmer
        </Shimmer>
      </div>
    </DemoStage>
  );
}

import { Slider } from "@ktbhealth/ui/components/slider";
import { DemoStage } from "../shell";

export function SliderDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-8">
        <Slider defaultValue={40} />
        <Slider defaultValue={[20, 80]} />
        <Slider defaultValue={60} disabled />
      </div>
    </DemoStage>
  );
}

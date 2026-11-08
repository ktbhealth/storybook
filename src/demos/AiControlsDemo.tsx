import { Canvas } from "@ktbhealth/ui/components/ai-elements/canvas";
import { Controls } from "@ktbhealth/ui/components/ai-elements/controls";
import { DemoStage } from "../shell";

const nodes = [{ id: "n1", position: { x: 80, y: 60 }, data: { label: "Node" } }];

export function AiControlsDemo() {
  return (
    <DemoStage className="p-0">
      <div className="h-64">
        <Canvas nodes={nodes} edges={[]}>
          <Controls />
        </Canvas>
      </div>
    </DemoStage>
  );
}

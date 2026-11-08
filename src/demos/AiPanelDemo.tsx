import { Canvas } from "@ktbhealth/ui/components/ai-elements/canvas";
import { Panel } from "@ktbhealth/ui/components/ai-elements/panel";
import { DemoStage } from "../shell";

const nodes = [{ id: "n1", position: { x: 100, y: 80 }, data: { label: "Agent" } }];

export function AiPanelDemo() {
  return (
    <DemoStage className="p-0">
      <div className="h-72">
        <Canvas nodes={nodes} edges={[]}>
          <Panel position="bottom-right">
            <span className="px-3 py-1.5 text-xs text-muted-foreground">
              1 node · pipeline status: idle
            </span>
          </Panel>
        </Canvas>
      </div>
    </DemoStage>
  );
}

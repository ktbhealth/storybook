import { Canvas } from "@ktbhealth/ui/components/ai-elements/canvas";
import { Connection } from "@ktbhealth/ui/components/ai-elements/connection";
import { DemoStage } from "../shell";

const nodes = [
  { id: "a", position: { x: 60, y: 60 }, data: { label: "Source" } },
  { id: "b", position: { x: 320, y: 60 }, data: { label: "Target" } },
];

// Connection is a ReactFlow connection-line component: it renders while the
// user drags a new edge between two nodes inside a Canvas.
export function AiConnectionDemo() {
  return (
    <DemoStage className="p-0">
      <div className="h-72">
        <Canvas nodes={nodes} edges={[]} connectionLineComponent={Connection} />
      </div>
      <p className="p-4 text-xs text-muted-foreground">
        Drag from a node handle to preview the connection line.
      </p>
    </DemoStage>
  );
}

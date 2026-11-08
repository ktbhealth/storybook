import { Canvas } from "@ktbhealth/ui/components/ai-elements/canvas";
import { Toolbar } from "@ktbhealth/ui/components/ai-elements/toolbar";
import {
  Node,
  NodeContent,
  NodeHeader,
  NodeTitle,
} from "@ktbhealth/ui/components/ai-elements/node";
import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

// Toolbar is a ReactFlow NodeToolbar: it only renders inside a custom node
// within <Canvas>.
function ToolbarNode() {
  return (
    <Node handles={{ target: true, source: true }} className="w-48">
      <NodeHeader>
        <NodeTitle className="text-sm">Agent step</NodeTitle>
      </NodeHeader>
      <NodeContent>
        <p className="text-xs text-muted-foreground">Hover to see the toolbar.</p>
      </NodeContent>
      <Toolbar>
        <Button size="xs" variant="ghost">
          Run
        </Button>
        <Button size="xs" variant="ghost">
          Logs
        </Button>
        <Button size="xs" variant="ghost">
          Delete
        </Button>
      </Toolbar>
    </Node>
  );
}

const nodes = [{ id: "n1", position: { x: 100, y: 60 }, type: "ktb", data: {} }];

export function AiToolbarDemo() {
  return (
    <DemoStage className="p-0">
      <div className="h-80">
        <Canvas nodes={nodes} edges={[]} nodeTypes={{ ktb: ToolbarNode }} />
      </div>
    </DemoStage>
  );
}

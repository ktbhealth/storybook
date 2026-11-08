import { Canvas } from "@ktbhealth/ui/components/ai-elements/canvas";
import {
  Node,
  NodeAction,
  NodeContent,
  NodeDescription,
  NodeFooter,
  NodeHeader,
  NodeTitle,
} from "@ktbhealth/ui/components/ai-elements/node";
import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

function DemoNode() {
  return (
    <Node handles={{ target: true, source: true }} className="w-56">
      <NodeHeader>
        <NodeTitle>Fetch vitals</NodeTitle>
        <NodeDescription>tool · patient-chart</NodeDescription>
        <NodeAction>
          <Badge variant="secondary" className="text-xs">
            ready
          </Badge>
        </NodeAction>
      </NodeHeader>
      <NodeContent>
        <p className="text-xs text-muted-foreground">
          Pulls the latest BP/HR readings for the selected patient.
        </p>
      </NodeContent>
      <NodeFooter className="flex gap-2">
        <Button size="xs" variant="outline">
          Run
        </Button>
        <Button size="xs" variant="ghost">
          Logs
        </Button>
      </NodeFooter>
    </Node>
  );
}

const nodes = [{ id: "n1", position: { x: 60, y: 60 }, type: "ktb", data: {} }];

// Node renders a Card with ReactFlow Handles — it only works as a custom node
// type inside <Canvas> (ReactFlow), not standalone.
export function AiNodeDemo() {
  return (
    <DemoStage className="p-0">
      <div className="h-72">
        <Canvas nodes={nodes} edges={[]} nodeTypes={{ ktb: DemoNode }} />
      </div>
    </DemoStage>
  );
}

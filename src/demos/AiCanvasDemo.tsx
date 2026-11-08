import { Canvas } from "@ktbhealth/ui/components/ai-elements/canvas";
import { Edge } from "@ktbhealth/ui/components/ai-elements/edge";
import {
  Node,
  NodeContent,
  NodeDescription,
  NodeFooter,
  NodeHeader,
  NodeTitle,
} from "@ktbhealth/ui/components/ai-elements/node";
import { Controls } from "@ktbhealth/ui/components/ai-elements/controls";
import { Panel } from "@ktbhealth/ui/components/ai-elements/panel";
import { Toolbar } from "@ktbhealth/ui/components/ai-elements/toolbar";
import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

const nodes = [
  { id: "triage", position: { x: 40, y: 60 }, type: "ktb", data: {} },
  { id: "labs", position: { x: 340, y: 60 }, type: "ktb", data: {} },
  { id: "summary", position: { x: 340, y: 220 }, type: "ktb", data: {} },
];

const edges = [
  { id: "e1", source: "triage", target: "labs", type: "animated" },
  { id: "e2", source: "labs", target: "summary", type: "temporary" },
];

function KtbNode() {
  return (
    <Node handles={{ target: true, source: true }} className="w-48">
      <NodeHeader>
        <NodeTitle className="text-sm">Step</NodeTitle>
        <NodeDescription className="text-xs">agent task</NodeDescription>
      </NodeHeader>
      <NodeContent>
        <p className="text-xs text-muted-foreground">Runs a tool and returns structured output.</p>
      </NodeContent>
      <NodeFooter>
        <Toolbar>
          <Button size="xs" variant="ghost">
            Run
          </Button>
          <Button size="xs" variant="ghost">
            Inspect
          </Button>
        </Toolbar>
      </NodeFooter>
    </Node>
  );
}

export function AiCanvasDemo() {
  return (
    <DemoStage className="p-0">
      <div className="h-96">
        <Canvas
          nodes={nodes}
          edges={edges}
          nodeTypes={{ ktb: KtbNode }}
          edgeTypes={{ animated: Edge.Animated, temporary: Edge.Temporary }}
          fitView
        >
          <Controls />
          <Panel position="top-left">
            <span className="px-2 py-1 text-xs text-muted-foreground">Patient triage pipeline</span>
          </Panel>
        </Canvas>
      </div>
    </DemoStage>
  );
}

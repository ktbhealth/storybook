import { Canvas } from "@ktbhealth/ui/components/ai-elements/canvas";
import { Edge } from "@ktbhealth/ui/components/ai-elements/edge";
import {
  Node,
  NodeContent,
  NodeHeader,
  NodeTitle,
} from "@ktbhealth/ui/components/ai-elements/node";
import { DemoStage } from "../shell";

function DemoNode() {
  return (
    <Node handles={{ target: true, source: true }} className="w-44">
      <NodeHeader>
        <NodeTitle className="text-sm">Step</NodeTitle>
      </NodeHeader>
      <NodeContent>
        <p className="text-xs text-muted-foreground">Pipeline step</p>
      </NodeContent>
    </Node>
  );
}

const nodes = [
  { id: "a", position: { x: 40, y: 40 }, type: "ktb", data: {} },
  { id: "b", position: { x: 280, y: 40 }, type: "ktb", data: {} },
];

const edges = [
  { id: "e1", source: "a", target: "b", type: "animated" },
  { id: "e2", source: "b", target: "a", type: "temporary" },
];

// Edge.Animated / Edge.Temporary are ReactFlow edge types; they only render
// inside a <Canvas> (ReactFlow) with matching `type` on edges.
export function AiEdgeDemo() {
  return (
    <DemoStage className="p-0">
      <div className="h-72">
        <Canvas
          nodes={nodes}
          edges={edges}
          nodeTypes={{ ktb: DemoNode }}
          edgeTypes={{ animated: Edge.Animated, temporary: Edge.Temporary }}
        />
      </div>
    </DemoStage>
  );
}

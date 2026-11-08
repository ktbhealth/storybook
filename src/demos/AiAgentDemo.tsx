import {
  Agent,
  AgentContent,
  AgentHeader,
  AgentInstructions,
  AgentOutput,
  AgentTool,
  AgentTools,
} from "@ktbhealth/ui/components/ai-elements/agent";
import { DemoStage } from "../shell";

const TOOLS = [
  {
    description: "Search the patient records index",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
    },
  },
  {
    description: "Fetch lab results for a patient",
    inputSchema: {
      type: "object",
      properties: { patientId: { type: "string" } },
      required: ["patientId"],
    },
  },
];

const OUTPUT_SCHEMA = `interface VisitSummary {
  patientId: string;
  findings: string[];
  followUpDays: number;
}`;

export function AiAgentDemo() {
  return (
    <DemoStage>
      <Agent className="max-w-xl">
        <AgentHeader name="Care assistant" model="ktb-clinical-2" />
        <AgentContent>
          <AgentInstructions>
            You are a clinical assistant. Summarize vitals, flag anomalies, and always cite the
            source record for every claim.
          </AgentInstructions>
          <AgentTools defaultValue={["t1"]}>
            {TOOLS.map((tool, i) => (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <AgentTool key={i} tool={tool as any} value={`t${i + 1}`} />
            ))}
          </AgentTools>
          <AgentOutput schema={OUTPUT_SCHEMA} />
        </AgentContent>
      </Agent>
    </DemoStage>
  );
}

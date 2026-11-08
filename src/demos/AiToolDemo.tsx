import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@ktbhealth/ui/components/ai-elements/tool";
import { DemoStage } from "../shell";

export function AiToolDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-xl gap-6">
        <Tool defaultOpen>
          <ToolHeader type="tool-fetchVitals" state="output-available" title="Fetch vitals" />
          <ToolContent>
            <ToolInput input={{ patientId: "ms-1042", range: "90d" }} />
            <ToolOutput
              output={{ systolic: 118, diastolic: 76, heartRate: 72 }}
              errorText={undefined}
            />
          </ToolContent>
        </Tool>
        <Tool>
          <ToolHeader type="dynamic-tool" toolName="searchGuidelines" state="input-available" />
          <ToolContent>
            <ToolInput input={{ query: "hypertension first-line therapy" }} />
          </ToolContent>
        </Tool>
        <Tool>
          <ToolHeader type="tool-sendFax" state="output-error" title="Send referral fax" />
          <ToolContent>
            <ToolInput input={{ to: "+55 11 3000-0000" }} />
            <ToolOutput output={undefined} errorText="Fax provider returned 503" />
          </ToolContent>
        </Tool>
      </div>
    </DemoStage>
  );
}

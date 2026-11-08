import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@ktbhealth/ui/components/ai-elements/reasoning";
import { DemoStage } from "../shell";

export function AiReasoningDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-6">
        <Reasoning defaultOpen duration={4}>
          <ReasoningTrigger>Thought for 4 seconds</ReasoningTrigger>
          <ReasoningContent>
            The patient&apos;s systolic pressure dropped 11 mmHg over six weeks while on the new
            losartan dose. No adverse effects reported. I&apos;ll recommend continuing the current
            regimen and rechecking labs in four weeks.
          </ReasoningContent>
        </Reasoning>
        <Reasoning isStreaming>
          <ReasoningTrigger>Thinking…</ReasoningTrigger>
          <ReasoningContent>
            Streaming reasoning content appears here as it is generated.
          </ReasoningContent>
        </Reasoning>
      </div>
    </DemoStage>
  );
}

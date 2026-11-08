import {
  Context,
  ContextCacheUsage,
  ContextContent,
  ContextContentBody,
  ContextContentFooter,
  ContextContentHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger,
} from "@ktbhealth/ui/components/ai-elements/context";
import { DemoStage } from "../shell";

export function AiContextDemo() {
  return (
    <DemoStage>
      <Context usedTokens={48200} maxTokens={200000} modelId="ktb-clinical-2">
        <ContextTrigger>48.2k / 200k tokens</ContextTrigger>
        <ContextContent>
          <ContextContentHeader>Context window</ContextContentHeader>
          <ContextContentBody>
            <ContextInputUsage />
            <ContextOutputUsage />
            <ContextReasoningUsage />
          </ContextContentBody>
          <ContextContentFooter>
            <ContextCacheUsage />
          </ContextContentFooter>
        </ContextContent>
      </Context>
    </DemoStage>
  );
}

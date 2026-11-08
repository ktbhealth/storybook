import {
  OpenIn,
  OpenInChatGPT,
  OpenInClaude,
  OpenInContent,
  OpenInCursor,
  OpenInItem,
  OpenInLabel,
  OpenInScira,
  OpenInSeparator,
  OpenInTrigger,
} from "@ktbhealth/ui/components/ai-elements/open-in-chat";
import { DemoStage } from "../shell";

export function AiOpenInDemo() {
  return (
    <DemoStage>
      <OpenIn query="Summarize Maria Silva's vitals trend">
        <OpenInTrigger />
        <OpenInContent>
          <OpenInLabel>Open in chat</OpenInLabel>
          <OpenInChatGPT />
          <OpenInClaude />
          <OpenInCursor />
          <OpenInSeparator />
          <OpenInScira />
          <OpenInItem>Copy query</OpenInItem>
        </OpenInContent>
      </OpenIn>
    </DemoStage>
  );
}

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@ktbhealth/ui/components/ai-elements/conversation";
import {
  Message,
  MessageActions,
  MessageAction,
  MessageContent,
  MessageResponse,
} from "@ktbhealth/ui/components/ai-elements/message";
import { CopyIcon, RefreshCwIcon } from "lucide-react";
import { DemoStage } from "../shell";

const MESSAGES = [
  { role: "user" as const, text: "Summarize Maria Silva's last three visits." },
  {
    role: "assistant" as const,
    text: "**Visit summary**\n\n- 12 Nov: follow-up, BP 118/76 — stable\n- 29 Oct: labs reviewed, HbA1c 6.1%\n- 14 Oct: initial consult, medication started",
  },
  { role: "user" as const, text: "Any medication changes since October?" },
  {
    role: "assistant" as const,
    text: "Losartan was increased from 50mg to 75mg on 3 Nov. Metformin unchanged at 500mg.",
  },
];

export function AiConversationDemo() {
  return (
    <DemoStage className="p-0">
      <Conversation className="h-96 rounded-xl border">
        <ConversationContent>
          {MESSAGES.map((m, i) => (
            <Message key={i} from={m.role}>
              <MessageContent>
                {m.role === "user" ? m.text : <MessageResponse>{m.text}</MessageResponse>}
              </MessageContent>
              {m.role === "assistant" && (
                <MessageActions>
                  <MessageAction tooltip="Copy" aria-label="Copy">
                    <CopyIcon className="size-3.5" />
                  </MessageAction>
                  <MessageAction tooltip="Regenerate" aria-label="Regenerate">
                    <RefreshCwIcon className="size-3.5" />
                  </MessageAction>
                </MessageActions>
              )}
            </Message>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
    </DemoStage>
  );
}

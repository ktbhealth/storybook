import {
  PromptInput,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuItem,
  PromptInputActionMenuTrigger,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@ktbhealth/ui/components/ai-elements/prompt-input";
import { PaperclipIcon, SendIcon, SquareIcon } from "lucide-react";
import { useState } from "react";
import { DemoStage } from "../shell";

export function AiPromptInputDemo() {
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">("ready");
  const [last, setLast] = useState("");
  return (
    <DemoStage>
      <div className="grid max-w-xl gap-4">
        <PromptInput
          className="rounded-xl border"
          onSubmit={(message) => {
            setLast(message.text);
            setStatus("streaming");
            setTimeout(() => setStatus("ready"), 1500);
          }}
        >
          <PromptInputBody>
            <PromptInputTextarea placeholder="Ask about a patient, visit, or lab result…" />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger>
                  <PaperclipIcon className="size-4" />
                </PromptInputActionMenuTrigger>
                <PromptInputActionMenuContent>
                  <PromptInputActionMenuItem>Attach file</PromptInputActionMenuItem>
                  <PromptInputActionMenuItem>Attach image</PromptInputActionMenuItem>
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputButton variant="ghost" size="sm">
                ktb-clinical-2
              </PromptInputButton>
            </PromptInputTools>
            <PromptInputSubmit status={status} onStop={() => setStatus("ready")}>
              {status === "streaming" ? (
                <SquareIcon className="size-4" />
              ) : (
                <SendIcon className="size-4" />
              )}
            </PromptInputSubmit>
          </PromptInputFooter>
        </PromptInput>
        {last ? <p className="text-xs text-muted-foreground">Last submitted: {last}</p> : null}
      </div>
    </DemoStage>
  );
}

import {
  Message,
  MessageAction,
  MessageActions,
  MessageBranch,
  MessageBranchContent,
  MessageBranchNext,
  MessageBranchPage,
  MessageBranchPrevious,
  MessageBranchSelector,
  MessageContent,
  MessageResponse,
  MessageToolbar,
} from "@ktbhealth/ui/components/ai-elements/message";
import { CopyIcon, RefreshCwIcon } from "lucide-react";
import { DemoStage } from "../shell";

export function AiMessageDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-lg gap-8">
        <Message from="user">
          <MessageContent>What changed in the latest vitals report?</MessageContent>
        </Message>
        <Message from="assistant">
          <MessageContent>
            <MessageResponse>
              Systolic dropped **11 mmHg** over six weeks. The trend suggests the new dosage is
              working.
            </MessageResponse>
          </MessageContent>
          <MessageActions>
            <MessageAction tooltip="Copy" aria-label="Copy">
              <CopyIcon className="size-3.5" />
            </MessageAction>
            <MessageAction tooltip="Regenerate" aria-label="Regenerate">
              <RefreshCwIcon className="size-3.5" />
            </MessageAction>
          </MessageActions>
        </Message>
        <Message from="assistant">
          <MessageBranch defaultBranch={0}>
            <MessageBranchContent>
              <MessageContent>
                <MessageResponse>
                  Option A: continue current dose, recheck in 4 weeks.
                </MessageResponse>
              </MessageContent>
              <MessageContent>
                <MessageResponse>Option B: increase dose and add a diuretic.</MessageResponse>
              </MessageContent>
            </MessageBranchContent>
            <MessageToolbar>
              <MessageBranchSelector>
                <MessageBranchPrevious aria-label="Previous" />
                <MessageBranchPage />
                <MessageBranchNext aria-label="Next" />
              </MessageBranchSelector>
            </MessageToolbar>
          </MessageBranch>
        </Message>
      </div>
    </DemoStage>
  );
}

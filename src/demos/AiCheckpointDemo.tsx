import {
  Checkpoint,
  CheckpointIcon,
  CheckpointTrigger,
} from "@ktbhealth/ui/components/ai-elements/checkpoint";
import { TooltipProvider } from "@ktbhealth/ui/components/tooltip";
import { GitCommitHorizontal } from "lucide-react";
import { DemoStage } from "../shell";

export function AiCheckpointDemo() {
  return (
    <DemoStage>
      <TooltipProvider>
        <Checkpoint className="gap-2">
          <CheckpointIcon>
            <GitCommitHorizontal className="size-4" />
          </CheckpointIcon>
          <CheckpointTrigger tooltip="Restore this checkpoint">abc1234</CheckpointTrigger>
          <span className="text-xs text-muted-foreground">2h ago</span>
          <CheckpointTrigger tooltip="Compare">Compare</CheckpointTrigger>
        </Checkpoint>
      </TooltipProvider>
    </DemoStage>
  );
}

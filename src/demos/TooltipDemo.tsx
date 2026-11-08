import { Button } from "@ktbhealth/ui/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ktbhealth/ui/components/tooltip";
import { DemoStage } from "../shell";

export function TooltipDemo() {
  return (
    <DemoStage>
      <TooltipProvider>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
            <TooltipContent>Helpful tooltip text</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="Info" />}>
              i
            </TooltipTrigger>
            <TooltipContent side="right">
              Tooltips explain actions without cluttering the UI.
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </DemoStage>
  );
}

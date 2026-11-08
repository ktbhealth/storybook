import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@ktbhealth/ui/components/resizable";
import { DemoStage } from "../shell";

export function ResizableDemo() {
  return (
    <DemoStage>
      <ResizablePanelGroup orientation="horizontal" className="h-48 max-w-2xl rounded-lg border">
        <ResizablePanel defaultSize={30} minSize={20}>
          <div className="flex h-full items-center justify-center bg-muted/40 text-sm text-muted-foreground">
            Patient list
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Visit notes
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <ResizablePanelGroup orientation="vertical" className="mt-4 h-40 max-w-2xl rounded-lg border">
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center bg-muted/40 text-sm text-muted-foreground">
            Chart summary
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Activity log
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </DemoStage>
  );
}

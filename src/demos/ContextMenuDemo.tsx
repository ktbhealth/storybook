import { Button } from "@ktbhealth/ui/components/button";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@ktbhealth/ui/components/context-menu";
import { DemoStage } from "../shell";

export function ContextMenuDemo() {
  return (
    <DemoStage>
      <ContextMenu>
        <ContextMenuTrigger
          render={
            <div className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Right-click this patient card
            </div>
          }
        />
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuLabel>Patient</ContextMenuLabel>
            <ContextMenuItem>
              Open record
              <ContextMenuShortcut>↵</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Edit details</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Copy link</ContextMenuItem>
                <ContextMenuItem>Email summary</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem checked>Pin to dashboard</ContextMenuCheckboxItem>
            <ContextMenuRadioGroup value="cardiology">
              <ContextMenuRadioItem value="cardiology">Cardiology</ContextMenuRadioItem>
              <ContextMenuRadioItem value="general">General</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Archive patient</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="mt-4">
        <Button variant="outline" size="sm">
          Right-click the card above
        </Button>
      </div>
    </DemoStage>
  );
}

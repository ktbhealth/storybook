import { Button } from "@ktbhealth/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@ktbhealth/ui/components/dropdown-menu";
import { DemoStage } from "../shell";

export function DropdownMenuDemo() {
  return (
    <DemoStage>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          Visit actions
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appointment</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Reschedule
              <DropdownMenuShortcut>R</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Send reminder</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Export</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>PDF summary</DropdownMenuItem>
                <DropdownMenuItem>ICS calendar file</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Include in weekly report</DropdownMenuCheckboxItem>
          <DropdownMenuRadioGroup value="video">
            <DropdownMenuRadioItem value="video">Video call</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="in-person">In person</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Cancel visit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </DemoStage>
  );
}

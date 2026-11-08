import { Button } from "@ktbhealth/ui/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@ktbhealth/ui/components/command";
import { CalendarDays, FileText, Settings, Users } from "lucide-react";
import { DemoStage } from "../shell";

export function CommandDemo() {
  return (
    <DemoStage>
      <Command className="max-w-sm rounded-lg border shadow-sm">
        <CommandInput placeholder="Search patients, visits…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem>
              <CalendarDays className="size-4" />
              Appointments
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Users className="size-4" />
              Patients
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FileText className="size-4" />
              Visit notes
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem>
              <Settings className="size-4" />
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <div className="mt-4">
        <Button variant="outline" size="sm">
          Open command palette
        </Button>
      </div>
    </DemoStage>
  );
}

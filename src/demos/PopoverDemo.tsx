import { Button } from "@ktbhealth/ui/components/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@ktbhealth/ui/components/popover";
import { DemoStage } from "../shell";

export function PopoverDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap items-start gap-6">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>Visit details</PopoverTrigger>
          <PopoverContent className="w-72">
            <PopoverHeader>
              <PopoverTitle>Follow-up appointment</PopoverTitle>
              <PopoverDescription>Thu 20 Nov · 10:00 · Room 2A</PopoverDescription>
            </PopoverHeader>
            <div className="grid gap-2 pt-2 text-sm">
              <p className="text-muted-foreground">
                Bring your home BP log for the last two weeks.
              </p>
              <Button size="sm">Add to calendar</Button>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="ghost" size="icon" aria-label="Notes" />}>
            📝
          </PopoverTrigger>
          <PopoverContent side="right" className="w-64">
            <PopoverHeader>
              <PopoverTitle>Quick note</PopoverTitle>
              <PopoverDescription>Saved to the patient chart.</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>
    </DemoStage>
  );
}

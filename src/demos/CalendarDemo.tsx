import { Button } from "@ktbhealth/ui/components/button";
import { Calendar } from "@ktbhealth/ui/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@ktbhealth/ui/components/popover";
import { useState } from "react";
import { DemoStage } from "../shell";

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 12));
  return (
    <DemoStage>
      <div className="flex flex-wrap items-start gap-8">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>Pick a date</PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" className="p-2" />
          </PopoverContent>
        </Popover>
      </div>
    </DemoStage>
  );
}

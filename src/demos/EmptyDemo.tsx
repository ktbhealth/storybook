import { Button } from "@ktbhealth/ui/components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@ktbhealth/ui/components/empty";
import { CalendarDays } from "lucide-react";
import { DemoStage } from "../shell";

export function EmptyDemo() {
  return (
    <DemoStage>
      <Empty className="max-w-md border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <CalendarDays className="size-6" />
          </EmptyMedia>
          <EmptyTitle>No upcoming visits</EmptyTitle>
          <EmptyDescription>
            You don&apos;t have any appointments scheduled in the next 30 days.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Schedule a visit</Button>
        </EmptyContent>
      </Empty>
    </DemoStage>
  );
}

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ktbhealth/ui/components/hover-card";
import { Badge } from "@ktbhealth/ui/components/badge";
import { DemoStage } from "../shell";

export function HoverCardDemo() {
  return (
    <DemoStage>
      <HoverCard>
        <HoverCardTrigger
          render={<span className="cursor-help font-medium underline decoration-dotted" />}
        >
          Dr. Ana Souza
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Cardiology</p>
              <Badge variant="secondary">Attending</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              14 years of experience · fluent in Portuguese and English. Next available slot: Tue
              09:30.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </DemoStage>
  );
}

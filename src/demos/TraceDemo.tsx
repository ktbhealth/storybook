import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@ktbhealth/ui/components/trace";
import { CheckCircle2, Database, Loader2, XCircle } from "lucide-react";
import { DemoStage } from "../shell";

export function TraceDemo() {
  return (
    <DemoStage>
      <Trace className="max-w-md">
        <TraceLine>
          <TraceIcon>
            <CheckCircle2 className="size-4 text-primary" />
          </TraceIcon>
          <TraceTitle>Fetched patient chart</TraceTitle>
          <TraceDescription>312ms</TraceDescription>
        </TraceLine>
        <TraceLine status="running">
          <TraceIcon>
            <Loader2 className="size-4 animate-spin" />
          </TraceIcon>
          <TraceTitle>Analyzing lab trends</TraceTitle>
        </TraceLine>
        <TraceLine status="pending">
          <TraceIcon>
            <Database className="size-4" />
          </TraceIcon>
          <TraceTitle>Syncing with insurer</TraceTitle>
        </TraceLine>
        <TraceLine status="error">
          <TraceIcon>
            <XCircle className="size-4" />
          </TraceIcon>
          <TraceTitle>Failed to load imaging</TraceTitle>
          <TraceDescription>404 — study not found</TraceDescription>
        </TraceLine>
        <TraceCollapsible>
          <TraceCollapsibleTrigger>
            <TraceLine>
              <TraceIcon>
                <Database className="size-4" />
              </TraceIcon>
              <TraceTitle>Raw tool output</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            {`{
  "patient": "Maria Silva",
  "visits": 12,
  "adherence": 0.94
}`}
          </TraceCollapsibleContent>
        </TraceCollapsible>
      </Trace>
    </DemoStage>
  );
}

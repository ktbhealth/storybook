import { Marker, MarkerContent, MarkerIcon } from "@ktbhealth/ui/components/marker";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { DemoStage } from "../shell";

export function MarkerDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-3">
        <Marker>
          <MarkerIcon>
            <CheckCircle2 className="text-primary" />
          </MarkerIcon>
          <MarkerContent>Vitals synced 5 minutes ago.</MarkerContent>
        </Marker>
        <Marker>
          <MarkerIcon>
            <AlertTriangle className="text-amber-500" />
          </MarkerIcon>
          <MarkerContent>Blood pressure above target — review medication.</MarkerContent>
        </Marker>
        <Marker variant="separator">Today</Marker>
        <Marker variant="border">
          <MarkerIcon>
            <Info className="text-muted-foreground" />
          </MarkerIcon>
          <MarkerContent>Insurance card expires in 30 days.</MarkerContent>
        </Marker>
      </div>
    </DemoStage>
  );
}

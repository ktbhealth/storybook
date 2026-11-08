import { Input } from "@ktbhealth/ui/components/input";
import { Label } from "@ktbhealth/ui/components/label";
import { DemoStage } from "../shell";

export function LabelDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-sm gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="demo-label-name">Patient name</Label>
          <Input id="demo-label-name" placeholder="Full name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="demo-label-note">Appointment note</Label>
          <Input id="demo-label-note" placeholder="Optional note" />
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Label renders a styled native label; associate it with controls via htmlFor.
      </p>
    </DemoStage>
  );
}

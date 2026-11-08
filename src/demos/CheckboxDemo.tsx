import { Checkbox } from "@ktbhealth/ui/components/checkbox";
import { Label } from "@ktbhealth/ui/components/label";
import { DemoStage } from "../shell";

export function CheckboxDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-sm gap-4">
        <div className="flex items-center gap-2">
          <Checkbox id="demo-c1" defaultChecked />
          <Label htmlFor="demo-c1">SMS appointment reminders</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="demo-c2" />
          <Label htmlFor="demo-c2">Share records with specialist</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="demo-c3" disabled />
          <Label htmlFor="demo-c3" className="text-muted-foreground">
            Mandatory consent (locked)
          </Label>
        </div>
      </div>
    </DemoStage>
  );
}

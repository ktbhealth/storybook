import { Label } from "@ktbhealth/ui/components/label";
import { Switch } from "@ktbhealth/ui/components/switch";
import { DemoStage } from "../shell";

export function SwitchDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-sm gap-5">
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="demo-s1">Email notifications</Label>
          <Switch id="demo-s1" defaultChecked />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="demo-s2">Two-factor authentication</Label>
          <Switch id="demo-s2" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="demo-s3" className="text-muted-foreground">
            Marketing emails
          </Label>
          <Switch id="demo-s3" disabled />
        </div>
      </div>
    </DemoStage>
  );
}

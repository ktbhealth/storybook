import { Label } from "@ktbhealth/ui/components/label";
import { Textarea } from "@ktbhealth/ui/components/textarea";
import { DemoStage } from "../shell";

export function TextareaDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="demo-notes">Clinical notes</Label>
          <Textarea
            id="demo-notes"
            placeholder="Add observations from the consultation..."
            rows={4}
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="demo-disabled">Disabled</Label>
          <Textarea id="demo-disabled" disabled rows={3} />
        </div>
      </div>
    </DemoStage>
  );
}

import { Badge } from "@ktbhealth/ui/components/badge";
import { DemoStage } from "../shell";

export function BadgeDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="text-muted-foreground">In context:</span>
        <Badge>New patient</Badge>
        <Badge variant="secondary">Follow-up due</Badge>
        <Badge variant="destructive">Allergy alert</Badge>
        <Badge variant="outline">Insurance: Unimed</Badge>
      </div>
    </DemoStage>
  );
}

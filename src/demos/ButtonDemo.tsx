import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

export function ButtonDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap items-center gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Settings">
          ⚙
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </DemoStage>
  );
}

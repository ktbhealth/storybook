import { Toggle } from "@ktbhealth/ui/components/toggle";
import { ToggleGroup, ToggleGroupItem } from "@ktbhealth/ui/components/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";
import { DemoStage } from "../shell";

export function ToggleDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap items-center gap-4">
        <Toggle aria-label="Bold">
          <Bold className="size-4" />
        </Toggle>
        <Toggle aria-label="Italic" defaultPressed>
          <Italic className="size-4" />
        </Toggle>
        <Toggle aria-label="Underline" variant="outline">
          <Underline className="size-4" />
        </Toggle>
        <Toggle disabled>Disabled</Toggle>
      </div>
    </DemoStage>
  );
}

export function ToggleGroupDemo() {
  return (
    <DemoStage>
      <div className="flex flex-col gap-6">
        <ToggleGroup multiple defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup defaultValue={["list"]}>
          <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="table">Table</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup variant="outline" spacing={2} orientation="vertical">
          <ToggleGroupItem value="day">Day</ToggleGroupItem>
          <ToggleGroupItem value="week">Week</ToggleGroupItem>
          <ToggleGroupItem value="month">Month</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </DemoStage>
  );
}

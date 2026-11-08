import { Kbd, KbdGroup } from "@ktbhealth/ui/components/kbd";
import { DemoStage } from "../shell";

export function KbdDemo() {
  return (
    <DemoStage>
      <div className="flex flex-col gap-4 text-sm text-muted-foreground">
        <p>
          Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
        </p>
        <p>
          Navigate with{" "}
          <KbdGroup>
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
          </KbdGroup>{" "}
          and confirm with <Kbd>↵</Kbd>.
        </p>
        <p>
          Save a draft with <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>.
        </p>
      </div>
    </DemoStage>
  );
}

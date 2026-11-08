import { DirectionProvider } from "@ktbhealth/ui/components/direction";
import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

function Inner() {
  return (
    <div className="flex items-center gap-3" dir="auto">
      <Button variant="outline" size="sm">
        Salvar
      </Button>
      <p className="text-sm text-muted-foreground">
        DirectionProvider sets text direction for RTL locales via <code>useDirection()</code>.
      </p>
    </div>
  );
}

export function DirectionDemo() {
  return (
    <DemoStage>
      <div className="grid gap-6">
        <DirectionProvider direction="ltr">
          <Inner />
        </DirectionProvider>
        <DirectionProvider direction="rtl">
          <Inner />
        </DirectionProvider>
      </div>
    </DemoStage>
  );
}

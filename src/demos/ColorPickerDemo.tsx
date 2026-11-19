import { useState } from "react";
import { ColorPicker } from "@ktbhealth/ui/components/color-picker";
import { Label } from "@ktbhealth/ui/components/label";
import { DemoStage } from "../shell";

export function ColorPickerDemo() {
  const [accent, setAccent] = useState("#0ea5e9");
  const [brand, setBrand] = useState("oklch(0.62 0.19 250)");

  return (
    <DemoStage>
      <div className="grid max-w-sm gap-5">
        <div className="grid gap-1.5">
          <Label>Default (hex)</Label>
          <ColorPicker value="#10b981" className="w-full" />
        </div>
        <div className="grid gap-1.5">
          <Label>CSS color (oklch)</Label>
          <ColorPicker value="oklch(0.62 0.19 250)" className="w-full" />
        </div>
        <div className="grid gap-1.5">
          <Label>CSS color (hsl)</Label>
          <ColorPicker value="hsl(340 82% 52%)" className="w-full" />
        </div>
        <div className="grid gap-1.5">
          <Label>Controlled</Label>
          <ColorPicker value={accent} onChange={setAccent} className="w-full" />
          <p className="text-xs text-muted-foreground">
            Current value: <span className="font-mono">{accent}</span>
          </p>
        </div>
        <div className="grid gap-1.5">
          <Label>Controlled (CSS color)</Label>
          <ColorPicker value={brand} onChange={setBrand} className="w-full" />
          <p className="text-xs text-muted-foreground">
            Current value: <span className="font-mono">{brand}</span>
          </p>
        </div>
        <div className="grid gap-1.5">
          <Label className="text-muted-foreground">Disabled</Label>
          <ColorPicker value="#64748b" disabled className="w-full" />
        </div>
      </div>
    </DemoStage>
  );
}

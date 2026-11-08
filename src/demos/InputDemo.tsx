import { Input } from "@ktbhealth/ui/components/input";
import { Label } from "@ktbhealth/ui/components/label";
import { DemoStage } from "../shell";

export function InputDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="demo-name">Full name</Label>
          <Input id="demo-name" placeholder="Maria Rodrigues" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="demo-email">Email</Label>
          <Input id="demo-email" type="email" placeholder="maria@example.com" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="demo-cpf">CPF</Label>
          <Input id="demo-cpf" placeholder="000.000.000-00" inputMode="numeric" />
          <p className="text-xs text-muted-foreground">Used for SUS integration.</p>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="demo-disabled">Disabled</Label>
          <Input id="demo-disabled" disabled placeholder="Not editable" />
        </div>
      </div>
    </DemoStage>
  );
}

import { Label } from "@ktbhealth/ui/components/label";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@ktbhealth/ui/components/native-select";
import { DemoStage } from "../shell";

export function NativeSelectDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-xs gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="ns-specialty">Specialty</Label>
          <NativeSelect id="ns-specialty" defaultValue="cardiology">
            <NativeSelectOption value="cardiology">Cardiology</NativeSelectOption>
            <NativeSelectOption value="dermatology">Dermatology</NativeSelectOption>
            <NativeSelectOption value="general">General practice</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="ns-clinic">Clinic</Label>
          <NativeSelect id="ns-clinic" size="sm">
            <NativeSelectOptGroup label="São Paulo">
              <NativeSelectOption value="sp-1">Clínica Paulista</NativeSelectOption>
              <NativeSelectOption value="sp-2">Clínica Jardins</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Rio de Janeiro">
              <NativeSelectOption value="rj-1">Clínica Leblon</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </div>
      </div>
    </DemoStage>
  );
}

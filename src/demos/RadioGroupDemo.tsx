import { Label } from "@ktbhealth/ui/components/label";
import { RadioGroup, RadioGroupItem } from "@ktbhealth/ui/components/radio-group";
import { DemoStage } from "../shell";

export function RadioGroupDemo() {
  return (
    <DemoStage>
      <RadioGroup defaultValue="video" className="grid max-w-sm gap-3">
        {[
          { value: "video", label: "Video call", hint: "Join from any device" },
          { value: "in-person", label: "In person", hint: "Clinic, room 3B" },
          { value: "phone", label: "Phone", hint: "Doctor calls you" },
        ].map((opt) => (
          <Label
            key={opt.value}
            htmlFor={`rg-${opt.value}`}
            className="flex cursor-pointer items-start gap-3 rounded-lg border p-3 has-checked:border-primary has-checked:bg-primary/5"
          >
            <RadioGroupItem id={`rg-${opt.value}`} value={opt.value} className="mt-0.5" />
            <span>
              <span className="block text-sm font-medium">{opt.label}</span>
              <span className="block text-xs text-muted-foreground">{opt.hint}</span>
            </span>
          </Label>
        ))}
      </RadioGroup>
    </DemoStage>
  );
}

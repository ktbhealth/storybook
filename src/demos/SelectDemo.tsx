import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ktbhealth/ui/components/select";
import { DemoStage } from "../shell";

const SPECIALTIES = {
  cardiology: "Cardiology",
  dermatology: "Dermatology",
  endocrinology: "Endocrinology",
  general: "General practice",
  pediatrics: "Pediatrics",
} as const;

export function SelectDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-xs gap-4">
        <Select items={SPECIALTIES} defaultValue="cardiology">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Specialty" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(SPECIALTIES).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select items={SPECIALTIES}>
          <SelectTrigger size="sm" className="w-full">
            <SelectValue placeholder="Small, empty" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(SPECIALTIES).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </DemoStage>
  );
}

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ktbhealth/ui/components/combobox";
import { DemoStage } from "../shell";

const SPECIALTIES = [
  { value: "cardiology", label: "Cardiology" },
  { value: "dermatology", label: "Dermatology" },
  { value: "endocrinology", label: "Endocrinology" },
  { value: "general", label: "General practice" },
  { value: "pediatrics", label: "Pediatrics" },
];

export function ComboboxDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-xs gap-4">
        <Combobox items={SPECIALTIES}>
          <ComboboxInput placeholder="Filter specialty…" className="w-full" />
          <ComboboxContent>
            <ComboboxEmpty>No specialty found.</ComboboxEmpty>
            <ComboboxList>
              {(item: (typeof SPECIALTIES)[number]) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Combobox items={SPECIALTIES} defaultValue={SPECIALTIES[0]}>
          <ComboboxInput placeholder="Selected specialty" className="w-full" />
          <ComboboxContent>
            <ComboboxEmpty>No specialty found.</ComboboxEmpty>
            <ComboboxList>
              {(item: (typeof SPECIALTIES)[number]) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </DemoStage>
  );
}

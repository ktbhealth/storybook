import { Button } from "@ktbhealth/ui/components/button";
import { Input } from "@ktbhealth/ui/components/input";
import { NativeSelect, NativeSelectOption } from "@ktbhealth/ui/components/native-select";
import { Plus } from "lucide-react";

/**
 * WIP example block: patient step of a new consultation — pick an existing
 * patient or register one inline with just name + age (stored as a
 * year-only FHIR birth date), then complete the full record later.
 */
export function QuickPatientCreate() {
  return (
    <div className="w-full max-w-xl space-y-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <label htmlFor="q-patient" className="text-sm font-semibold">
        Patient
      </label>
      <NativeSelect id="q-patient" defaultValue="1" className="w-full">
        <NativeSelectOption value="">Select a patient</NativeSelectOption>
        <NativeSelectOption value="1">Maria Silva · Female · 42 years</NativeSelectOption>
        <NativeSelectOption value="2">Joana Pereira · Female · 29 years</NativeSelectOption>
      </NativeSelect>
      <div className="flex items-center gap-2">
        <Input placeholder="new patient" aria-label="New patient name" />
        <Input type="number" placeholder="age" aria-label="New patient age" className="w-20" />
        <Button variant="outline">
          <Plus data-icon="inline-start" />
          Patient
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Registered with name and age only.{" "}
        <span className="font-medium text-foreground underline">Complete the record</span>
      </p>
    </div>
  );
}

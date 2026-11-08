import { Checkbox } from "@ktbhealth/ui/components/checkbox";
import { Input } from "@ktbhealth/ui/components/input";
import { Switch } from "@ktbhealth/ui/components/switch";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@ktbhealth/ui/components/field";
import { DemoStage } from "../shell";

export function FieldDemo() {
  return (
    <DemoStage>
      <FieldSet className="max-w-md">
        <FieldLegend>Insurance details</FieldLegend>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="field-same" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="field-same">Same as primary contact</FieldLabel>
              <FieldDescription>Copy contact details to the insurance holder.</FieldDescription>
            </FieldContent>
          </Field>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="field-plan">Plan number</FieldLabel>
            <Input id="field-plan" placeholder="KTB-2026-0042" />
            <FieldDescription>Found on the back of your insurance card.</FieldDescription>
            <FieldError>Plan number is required to submit claims.</FieldError>
          </Field>
          <Field orientation="horizontal">
            <Switch id="field-authorize" defaultChecked />
            <FieldContent>
              <FieldTitle>Authorize data sharing</FieldTitle>
              <FieldDescription>Share visit summaries with your insurer.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </DemoStage>
  );
}

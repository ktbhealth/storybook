import { Alert } from "@ktbhealth/ui/components/alert";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@ktbhealth/ui/components/field";
import { Input } from "@ktbhealth/ui/components/input";
import { NativeSelect, NativeSelectOption } from "@ktbhealth/ui/components/native-select";
import { Asterisk } from "lucide-react";
import type { ReactNode } from "react";

/** Required-field marker (decorative — inputs carry the semantics). */
function Required() {
  return <Asterisk className="size-3 text-destructive" aria-hidden="true" />;
}

function Section({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <FieldSet className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <FieldLegend>{legend}</FieldLegend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </FieldSet>
  );
}

function Text({
  id,
  label,
  value = "",
  required,
  wide,
  error,
  description,
  placeholder,
}: {
  id: string;
  label: string;
  value?: string;
  required?: boolean;
  wide?: boolean;
  error?: string;
  description?: string;
  placeholder?: string;
}) {
  return (
    <Field data-invalid={error ? true : undefined} className={wide ? "sm:col-span-2" : undefined}>
      <FieldLabel htmlFor={id}>
        {label}
        {required ? <Required /> : null}
      </FieldLabel>
      <Input
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
      />
      {description ? <FieldDescription>{description}</FieldDescription> : null}
      <FieldError>{error}</FieldError>
    </Field>
  );
}

function Select({
  id,
  label,
  value,
  options,
}: {
  id: string;
  label: string;
  value?: string;
  options: string[];
}) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <NativeSelect id={id} defaultValue={value ?? ""} className="w-full">
        <NativeSelectOption value="">—</NativeSelectOption>
        {options.map((o) => (
          <NativeSelectOption key={o} value={o}>
            {o}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </Field>
  );
}

/**
 * WIP example block: patient registration form — HL7 FHIR R4 Patient with
 * the Brazilian RNDS / BR Core extensions (CPF, CNS, social name, mother's
 * name, IBGE race/color). Only name and birth date (or age) are required;
 * shown here with an inline validation error on CPF.
 */
export function PatientRegistrationForm() {
  return (
    <form className="w-full max-w-3xl" onSubmit={(e) => e.preventDefault()} noValidate>
      <h2 className="text-2xl font-bold tracking-tight">New patient</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Record based on HL7 FHIR R4 Patient with the Brazilian RNDS extensions. Only name and birth
        date (or age) are required.
      </p>

      <div className="mt-6 space-y-6">
        <Section legend="Identification">
          <Text id="b-name" label="Full name" value="João Pereira" required wide />
          <Text
            id="b-social"
            label="Social name"
            value="Joana Pereira"
            description="Name the patient goes by; shown first when set."
            wide
          />
          <Select
            id="b-gender"
            label="Sex (administrative)"
            value="Female"
            options={["Female", "Male", "Other", "Unknown"]}
          />
          <Field>
            <FieldLabel htmlFor="b-birth">
              Birth date
              <Required />
            </FieldLabel>
            <div className="flex items-center gap-2">
              <Input id="b-birth" type="date" defaultValue="1997-06-21" />
              <span className="text-xs text-muted-foreground">or</span>
              <Input type="number" placeholder="age" aria-label="Age in years" className="w-20" />
            </div>
          </Field>
        </Section>

        <Section legend="Identifiers">
          <Text id="b-cpf" label="CPF" value="123.456.789-00" error="Invalid CPF." />
          <Text id="b-cns" label="CNS (Cartão SUS)" value="100 0000 0000 0007" />
          <Text id="b-passport" label="Passport / foreign ID" />
        </Section>

        <Section legend="Contact">
          <Text id="b-phone" label="Phone" value="+55 81 98765-4321" />
          <Text id="b-email" label="Email" value="joana@example.com" />
          <Select
            id="b-lang"
            label="Preferred language"
            value="Portuguese (Brazil)"
            options={["Portuguese (Brazil)", "English", "Spanish"]}
          />
        </Section>

        <Section legend="Address">
          <Select id="b-country" label="Country" value="Brazil" options={["Brazil", "Portugal"]} />
          <Text id="b-cep" label="CEP" value="50050-000" />
          <Text id="b-street" label="Street" value="Rua da Aurora" wide />
          <Text id="b-number" label="Number" value="100" />
          <Text id="b-compl" label="Complement" value="apto 12" />
          <Text id="b-district" label="District" value="Boa Vista" />
          <Text id="b-city" label="City" value="Recife" />
          <Select id="b-state" label="State" value="PE" options={["PE", "PB", "SP"]} />
        </Section>

        <Section legend="Family and demographics">
          <Text id="b-mother" label="Mother's name" value="Josefa Pereira" wide />
          <Select
            id="b-marital"
            label="Marital status"
            value="Never married"
            options={["Never married", "Married", "Domestic partner", "Divorced", "Widowed"]}
          />
          <Select
            id="b-race"
            label="Race / color (IBGE)"
            value="Parda (mixed)"
            options={[
              "Branca (white)",
              "Preta (black)",
              "Parda (mixed)",
              "Amarela (East Asian)",
              "Indígena (indigenous)",
              "Not informed",
            ]}
          />
          <Select id="b-nat" label="Nationality" value="Brazil" options={["Brazil", "Portugal"]} />
        </Section>

        <Section legend="Emergency contact">
          <Text id="b-ec-name" label="Name" value="Pedro Pereira" />
          <Text id="b-ec-rel" label="Relationship" value="brother" />
          <Text id="b-ec-phone" label="Phone" value="81 3333-4444" />
        </Section>
      </div>

      <Alert variant="destructive" className="mt-6 px-3 py-2 text-sm">
        Please fix the highlighted fields.
      </Alert>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Register patient</Button>
      </div>
    </form>
  );
}

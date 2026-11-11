import { Alert } from "@ktbhealth/ui/components/alert";
import { Button } from "@ktbhealth/ui/components/button";
import { Pencil, Plus } from "lucide-react";

const SECTIONS: Array<[string, Array<[string, string]>]> = [
  [
    "Identification",
    [
      ["Full name", "Maria Aparecida Silva"],
      ["Social name", "Cida"],
      ["Birth date", "05/03/1984 (42 years)"],
    ],
  ],
  [
    "Identifiers",
    [
      ["CPF", "529.982.247-25"],
      ["CNS", "100 0000 0000 0007"],
    ],
  ],
  [
    "Contact",
    [
      ["Phone", "+55 81 98765-4321"],
      ["Email", "cida@example.com"],
      ["Preferred language", "Portuguese (Brazil)"],
    ],
  ],
  [
    "Address",
    [
      ["Street", "Rua da Aurora, 100 · apto 12"],
      ["City", "Recife / PE"],
      ["Postal code", "50050-000"],
    ],
  ],
  [
    "Emergency contact",
    [
      ["Name", "Pedro Silva · son"],
      ["Phone", "81 3333-4444"],
    ],
  ],
];

const CONSULTATIONS = [
  { date: "05/11/2026", meta: "#12", complaint: "Cefaleia há 3 dias, pior pela manhã." },
  { date: "14/09/2026", meta: "#9", complaint: "Retorno: controle de pressão arterial." },
  { date: "02/07/2026", meta: "#4 · no anamnesis", complaint: "No chief complaint recorded." },
];

/**
 * WIP example block: patient record page — FHIR sections with only recorded
 * fields shown, plus the patient's consultations and a "new consultation"
 * action that preselects the patient. The amber alert is the incomplete
 * state (legacy name-only patients without a birth date).
 */
export function PatientRecord() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-primary/5 text-lg font-semibold text-primary">
            C
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Cida</h2>
            <p className="mt-0.5 text-sm text-muted-foreground">Female · 42 years</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Pencil data-icon="inline-start" />
            Edit record
          </Button>
          <Button>
            <Plus data-icon="inline-start" />
            New consultation
          </Button>
        </div>
      </div>

      <Alert className="mt-5 border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
        This record is incomplete: birth date is missing.{" "}
        <span className="font-medium underline">Complete the record</span>
      </Alert>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <section className="space-y-4">
          {SECTIONS.map(([title, rows]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-sm font-semibold">{title}</h3>
              <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
                {rows.map(([label, value]) => (
                  <div key={label} className="contents">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-lg font-semibold">
            Consultations <span className="text-sm font-normal text-muted-foreground">(3)</span>
          </h3>
          <div className="mt-3 space-y-2">
            {CONSULTATIONS.map((c) => (
              <article
                key={c.meta}
                className="rounded-xl border border-border bg-card p-3 shadow-sm transition hover:border-foreground/20"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium">{c.date}</span>
                  <span className="text-xs text-muted-foreground">{c.meta}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.complaint}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

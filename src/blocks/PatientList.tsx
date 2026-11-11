import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import { Input } from "@ktbhealth/ui/components/input";
import { Plus, Search } from "lucide-react";

const PATIENTS = [
  {
    initials: "MS",
    name: "Maria Silva",
    hint: null,
    details: "Female · 42 years · CPF 529.982.247-25",
    badges: [],
  },
  {
    initials: "JP",
    name: "Joana Pereira",
    hint: "(João Pereira)",
    details: "Female · 29 years · CNS 100 0000 0000 0007",
    badges: [],
  },
  {
    initials: "RA",
    name: "Roberto Alves",
    hint: null,
    details: "No demographics recorded",
    badges: ["Incomplete record"],
  },
  {
    initials: "CL",
    name: "Carlos Lima",
    hint: null,
    details: "Male · ~67 years",
    badges: ["Inactive"],
  },
];

/**
 * WIP example block: patient registry list (FHIR R4 Patient + RNDS). Social
 * name leads with the civil name as a hint; search covers name, CPF and CNS.
 */
export function PatientList() {
  return (
    <div className="w-full max-w-2xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Patients</h2>
          <p className="mt-1 text-sm text-muted-foreground">4 patients registered.</p>
        </div>
        <Button>
          <Plus data-icon="inline-start" />
          New patient
        </Button>
      </div>
      <div className="relative mt-5 w-full max-w-sm">
        <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by name, CPF, or CNS…"
          aria-label="Search patients"
          className="pl-8"
        />
      </div>
      <div className="mt-4 space-y-3">
        {PATIENTS.map((p) => (
          <article
            key={p.name}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition hover:border-foreground/20 hover:shadow"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-primary/5 text-sm font-semibold text-primary">
              {p.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-semibold">{p.name}</span>
                {p.hint ? <span className="text-xs text-muted-foreground">{p.hint}</span> : null}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{p.details}</p>
            </div>
            <div className="flex shrink-0 gap-1.5">
              {p.badges.map((b) => (
                <Badge key={b} variant="outline">
                  {b}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

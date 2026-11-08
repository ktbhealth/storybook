import type { ComponentType } from "react";
import { AppointmentCard } from "./AppointmentCard";
import { ConsultationSummaryCard } from "./ConsultationSummaryCard";
import { PatientHeader } from "./PatientHeader";
import { VisitHistoryRow } from "./VisitHistoryRow";

export interface BlockEntry {
  id: string;
  title: string;
  description: string;
  component: ComponentType;
}

/** WIP example blocks composed from @ktbhealth/ui components. */
export const BLOCKS: BlockEntry[] = [
  {
    id: "patient-header",
    title: "PatientHeader",
    description: "Patient identity card with contact details and quick actions.",
    component: PatientHeader,
  },
  {
    id: "consultation-summary-card",
    title: "ConsultationSummaryCard",
    description: "AI-assisted consultation summary with coverage progress.",
    component: ConsultationSummaryCard,
  },
  {
    id: "visit-history-row",
    title: "VisitHistoryRow",
    description: "List rows for a patient visit and appointment history.",
    component: VisitHistoryRow,
  },
  {
    id: "appointment-card",
    title: "AppointmentCard",
    description: "Upcoming appointment card with provider and join action.",
    component: AppointmentCard,
  },
];

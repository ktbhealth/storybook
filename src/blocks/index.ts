import type { ComponentType } from "react";
import { AppointmentCard } from "./AppointmentCard";
import { ConsultationSummaryCard } from "./ConsultationSummaryCard";
import { JobsBoard } from "./JobsBoard";
import { PatientHeader } from "./PatientHeader";
import { PatientList } from "./PatientList";
import { PatientRecord } from "./PatientRecord";
import { PatientRegistrationForm } from "./PatientRegistrationForm";
import { PlatformConsole } from "./PlatformConsole";
import { PlatformShell } from "./PlatformShell";
import { QuickPatientCreate } from "./QuickPatientCreate";
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
    id: "patient-list",
    title: "PatientList",
    description: "Patient registry list with search by name, CPF, or CNS and record badges.",
    component: PatientList,
  },
  {
    id: "patient-registration-form",
    title: "PatientRegistrationForm",
    description: "FHIR R4 + RNDS patient registration form with inline validation.",
    component: PatientRegistrationForm,
  },
  {
    id: "patient-record",
    title: "PatientRecord",
    description: "Patient record sections alongside the patient's consultations.",
    component: PatientRecord,
  },
  {
    id: "quick-patient-create",
    title: "QuickPatientCreate",
    description: "Pick or register a patient (name + age) when starting a consultation.",
    component: QuickPatientCreate,
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
  {
    id: "jobs-board",
    title: "JobsBoard",
    description: "Background job board with live statuses, progress and metadata.",
    component: JobsBoard,
  },
  {
    id: "platform-console",
    title: "PlatformConsole",
    description: "Full app shell dashboard with sidebar, stats, chart and table.",
    component: PlatformConsole,
  },
  {
    id: "platform-shell",
    title: "PlatformShell",
    description: "Inset-variant app shell chrome with grouped navigation.",
    component: PlatformShell,
  },
];

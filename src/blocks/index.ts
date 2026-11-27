import type { ComponentType } from "react";
import { AnamnesisPanel } from "./AnamnesisPanel";
import {
  AnamnesisReviewInPerson,
  AnamnesisReviewNeedsCorrection,
  AnamnesisReviewParts,
  AnamnesisReviewPendingData,
  AnamnesisReviewTelemedicine,
} from "./AnamnesisReviewBlocks";
import { AppointmentCard } from "./AppointmentCard";
import { ConsultationSummaryCard } from "./ConsultationSummaryCard";
import { ConsultationWorkspace } from "./ConsultationWorkspace";
import { JobsBoard } from "./JobsBoard";
import {
  LiveConsultationEarlyVisit,
  LiveConsultationEnded,
  LiveConsultationFollowUp,
  LiveConsultationPaused,
  LiveConsultationPediatricVisit,
  LiveConsultationTelemedicine,
} from "./LiveConsultationBlocks";
import { PatientHeader } from "./PatientHeader";
import { PatientList } from "./PatientList";
import { PatientRecord } from "./PatientRecord";
import { PatientRegistrationForm } from "./PatientRegistrationForm";
import {
  PreconsultationRoomAudioTest,
  PreconsultationRoomInPerson,
  PreconsultationRoomPediatric,
  PreconsultationRoomReady,
  PreconsultationRoomTelemedicine,
} from "./PreconsultationRoomBlocks";
import { PlatformConsole } from "./PlatformConsole";
import { PlatformShell } from "./PlatformShell";
import { QuickPatientCreate } from "./QuickPatientCreate";
import { TranscriptChat } from "./TranscriptChat";
import {
  TranscriptReviewFollowUp,
  TranscriptReviewInPerson,
  TranscriptReviewMidReview,
  TranscriptReviewNeedsCorrection,
  TranscriptReviewTelemedicine,
} from "./TranscriptReviewBlocks";
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
    id: "consultation-workspace",
    title: "ConsultationWorkspace",
    description:
      "Full capture workspace: patient context bar, live diarized transcript as chat turns, and the AI anamnesis drawer.",
    component: ConsultationWorkspace,
  },
  {
    id: "transcript-chat",
    title: "TranscriptChat",
    description:
      "Diarized transcript panel — speaker turns as chat bubbles with stamped paragraphs, recording cluster, LGPD note.",
    component: TranscriptChat,
  },
  {
    id: "anamnesis-panel",
    title: "AnamnesisPanel",
    description:
      "AI-structured anamnesis sections with confidence status, risk factor, CID hypotheses and conduct checklist.",
    component: AnamnesisPanel,
  },
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
  {
    id: "anamnesis-review-in-person",
    title: "AnamnesisReview — In-person homologation",
    description:
      "Structured record review: QP/HDA, CID hypotheses, conduct, pending data, audio + support transcript, homologation bar.",
    component: AnamnesisReviewInPerson,
  },
  {
    id: "anamnesis-review-telemedicine",
    title: "AnamnesisReview — Telemedicine (tab audio)",
    description:
      "Same review screen for a telemedicine consult — meeting-tab audio capture badge and telemetry.",
    component: AnamnesisReviewTelemedicine,
  },
  {
    id: "anamnesis-review-pending",
    title: "AnamnesisReview — Pending data",
    description: "Unconfirmed sections, multiple pending data items, approve held with reason.",
    component: AnamnesisReviewPendingData,
  },
  {
    id: "anamnesis-review-needs-correction",
    title: "AnamnesisReview — Needs correction",
    description: "Low-confidence record with uncertain transcript markers and held homologation.",
    component: AnamnesisReviewNeedsCorrection,
  },
  {
    id: "anamnesis-review-parts",
    title: "AnamnesisReview — Composite parts",
    description: "Audio card, support transcript and homologation bar composed standalone.",
    component: AnamnesisReviewParts,
  },
  {
    id: "transcript-review-in-person",
    title: "TranscriptReview — In-person, high confidence",
    description:
      "Review cockpit: clinical playback, 99%+ confidence banner, diarized feed, confirm CTA.",
    component: TranscriptReviewInPerson,
  },
  {
    id: "transcript-review-telemedicine",
    title: "TranscriptReview — Telemedicine",
    description:
      "Tab-audio loopback labels and telemetry for a meeting captured from the browser tab.",
    component: TranscriptReviewTelemedicine,
  },
  {
    id: "transcript-review-needs-correction",
    title: "TranscriptReview — Needs correction",
    description: "Low confidence, flagged segments and anomalies — confirm CTA disabled.",
    component: TranscriptReviewNeedsCorrection,
  },
  {
    id: "transcript-review-mid-review",
    title: "TranscriptReview — Mid-review (controlled)",
    description: "Controlled audio state paused mid-playback, demonstrating the player API.",
    component: TranscriptReviewMidReview,
  },
  {
    id: "transcript-review-followup",
    title: "TranscriptReview — Follow-up visit",
    description:
      "Different patient and short visit with a flagged phrase and pending anamnesis tab.",
    component: TranscriptReviewFollowUp,
  },
  {
    id: "preconsultation-room-in-person",
    title: "PreconsultationRoom — In-person, consent pending",
    description:
      "Meet-style green room: modality selector, audio preview, patient card, consent gating start.",
    component: PreconsultationRoomInPerson,
  },
  {
    id: "preconsultation-room-ready",
    title: "PreconsultationRoom — Ready to start",
    description: "In-person with consent checked and microphone active.",
    component: PreconsultationRoomReady,
  },
  {
    id: "preconsultation-room-telemedicine",
    title: "PreconsultationRoom — Telemedicine",
    description:
      "External meeting tool — captures meeting-tab audio only, stereo loopback telemetry.",
    component: PreconsultationRoomTelemedicine,
  },
  {
    id: "preconsultation-room-audio-test",
    title: "PreconsultationRoom — Audio test / muted",
    description: "Telemedicine with muted mic and simulated audio-level test in progress.",
    component: PreconsultationRoomAudioTest,
  },
  {
    id: "preconsultation-room-pediatric",
    title: "PreconsultationRoom — Pediatric patient",
    description: "Different physician/patient pair (child patient) exercising the quick-ID card.",
    component: PreconsultationRoomPediatric,
  },
  {
    id: "live-consultation-early-visit",
    title: "LiveConsultation — Early visit (in-person)",
    description: "Live diarized transcript, live timer, control bar, anamnesis drawer closed.",
    component: LiveConsultationEarlyVisit,
  },
  {
    id: "live-consultation-telemedicine",
    title: "LiveConsultation — Telemedicine",
    description: "Meeting-tab audio capture with the AI anamnesis drawer open.",
    component: LiveConsultationTelemedicine,
  },
  {
    id: "live-consultation-follow-up",
    title: "LiveConsultation — Advanced stage",
    description: "Later-stage consult with more turns and higher anamnesis topic coverage.",
    component: LiveConsultationFollowUp,
  },
  {
    id: "live-consultation-paused",
    title: "LiveConsultation — Transcription paused",
    description: "Paused state: amber pill, muted VU bars, paused copy.",
    component: LiveConsultationPaused,
  },
  {
    id: "live-consultation-ended",
    title: "LiveConsultation — Ended",
    description: "Post-consultation state with transcription controls wound down.",
    component: LiveConsultationEnded,
  },
  {
    id: "live-consultation-pediatric",
    title: "LiveConsultation — Pediatric patient",
    description: "Different patient exercising speaker tones and anamnesis sections.",
    component: LiveConsultationPediatricVisit,
  },
];

import { useState } from "react";
import {
  TranscriptReview,
  type ReviewAudioHandlers,
  type ReviewAudioState,
  type ReviewTurn,
} from "@ktbhealth/ui/components/transcript-review";

/**
 * WIP example blocks for the Transcript Review Cockpit — the
 * post-consultation audio review screen (player bar, AI confidence
 * banner, diarized transcript feed, confirm CTA). Each export covers a
 * different review scenario; all playback is simulated by the
 * composite unless a controlled `audio` state is passed.
 */

const LUIS_PATIENT = {
  name: "Luís Fernando Silva",
  age: "42 anos",
  consultationNumber: "#17",
  consultedAt: "26/11/2026 22:51",
  durationSec: 47,
};

const MARIA_PATIENT = {
  name: "Maria Aparecida Souza",
  age: "67 anos",
  consultationNumber: "#23",
  consultedAt: "27/11/2026 09:14",
  durationSec: 312,
};

const HIGH_CONFIDENCE_TURNS: ReviewTurn[] = [
  {
    id: "t1",
    speaker: "SPEAKER_00",
    name: "Dr. Emmanuel",
    role: "physician",
    roleLabel: "Physician",
    time: "0:00",
    segments: [
      {
        time: "0:00",
        startSec: 0,
        endSec: 12,
        text: "Boa tarde, sou o doutor Emmanuel. Estou avaliando o paciente Luís, ele relata dor...",
      },
    ],
  },
  {
    id: "t2",
    speaker: "SPEAKER_01",
    name: "Luís Fernando",
    role: "patient",
    roleLabel: "Patient",
    time: "0:18",
    segments: [
      {
        time: "0:18",
        startSec: 18,
        endSec: 30,
        label: "Chief Complaint",
        text: "...na pélvis, pois quando ele estava se exercitando, sentiu dores ao agachar, nunca tinha sentido isso antes.",
      },
      {
        time: "0:32",
        startSec: 32,
        endSec: 41,
        label: "Symptom Evolution",
        text: "Começou pelo quadril, depois subiu para o pescoço, ele utiliza tênis falsificado.",
      },
      {
        time: "0:42",
        startSec: 42,
        endSec: 47,
        label: "Footwear / Biomechanics",
        text: "Logo a palmilha é torta, a pisada é torta e pode acarretar nas dores.",
      },
    ],
  },
];

const LOW_CONFIDENCE_TURNS: ReviewTurn[] = [
  {
    id: "t1",
    speaker: "SPEAKER_00",
    name: "Dr. Ricardo",
    role: "physician",
    roleLabel: "Physician",
    time: "0:00",
    segments: [
      {
        time: "0:00",
        startSec: 0,
        endSec: 9,
        text: "Bom dia, senhora Maria. O que traz a senhora à consulta hoje?",
      },
    ],
  },
  {
    id: "t2",
    speaker: "SPEAKER_01",
    name: "Maria Aparecida",
    role: "patient",
    roleLabel: "Patient",
    time: "0:12",
    segments: [
      {
        time: "0:12",
        startSec: 12,
        endSec: 24,
        label: "Chief Complaint",
        flagged: true,
        text: "Estou com dor no peito ao subir a escada, e também uma tosse [inaudível] seca há duas semanas.",
      },
      {
        time: "0:26",
        startSec: 26,
        endSec: 38,
        label: "History",
        flagged: true,
        text: "Tomo [medicação não identificada] para pressão, e a senhora disse que o remédio é losartana, mas o áudio está sobreposto.",
      },
      {
        time: "0:40",
        startSec: 40,
        endSec: 55,
        label: "Medication",
        text: "Anotado: losartana 50mg, uso contínuo, sem queixas de efeito colateral.",
      },
    ],
  },
];

const TELEMED_TURNS: ReviewTurn[] = [
  {
    id: "t1",
    speaker: "SPEAKER_00",
    name: "Dr. Camila",
    role: "physician",
    roleLabel: "Physician",
    time: "0:00",
    text: "Olá João, consegui te ouvir bem. Me conta o que está acontecendo.",
  },
  {
    id: "t2",
    speaker: "SPEAKER_01",
    name: "João Pedro",
    role: "patient",
    roleLabel: "Patient",
    time: "0:15",
    segments: [
      {
        time: "0:15",
        startSec: 15,
        endSec: 28,
        label: "Chief Complaint",
        text: "Desde ontem à noite estou com febre e dor de garganta forte, sem conseguir engolir direito.",
      },
      {
        time: "0:30",
        startSec: 30,
        endSec: 44,
        label: "Associated Symptoms",
        text: "Sem tosse, sem falta de ar. Tomei dipirona e a febre baixou um pouco.",
      },
    ],
  },
];

/**
 * In-person consultation, high-confidence transcript (99.4%, zero
 * anomalies) — the happy path ready to confirm.
 * Suggested id: `transcript-review-in-person`
 */
export function TranscriptReviewInPerson() {
  return (
    <TranscriptReview
      patient={LUIS_PATIENT}
      queueCount={1}
      confidence={{
        confidence: 99.4,
        anomalies: 0,
        description:
          "No uncertain phonetic terms or severe overlap detected. Optional spot-check suggested before finishing.",
      }}
      turns={HIGH_CONFIDENCE_TURNS}
      audioSource="mic"
      durationSec={47}
      onPostpone={() => {}}
      onQueue={() => {}}
      onConfirm={() => {}}
    />
  );
}

/**
 * Telemedicine consultation — audio captured only from the external
 * meeting tab (stereo loopback labels instead of the room mic).
 * Suggested id: `transcript-review-telemedicine`
 */
export function TranscriptReviewTelemedicine() {
  return (
    <TranscriptReview
      patient={{
        name: "João Pedro Almeida",
        age: "29 anos",
        consultationNumber: "#31",
        consultedAt: "28/11/2026 15:02",
        durationSec: 46,
      }}
      queueCount={3}
      confidence={{
        confidence: 96.1,
        anomalies: 0,
        description:
          "Meeting-tab loopback captured both sides cleanly. Speaker attribution verified against the calendar invite.",
      }}
      turns={TELEMED_TURNS}
      audioSource="tab"
      modelLabel="Whisper-Large-v3 Turbo"
      sampleRate="48kHz stereo"
      durationSec={46}
      onPostpone={() => {}}
      onQueue={() => {}}
      onConfirm={() => {}}
    />
  );
}

/**
 * Low-confidence transcript needing correction — flagged segments,
 * 4 anomalies and warning styling on the confidence banner.
 * Suggested id: `transcript-review-needs-correction`
 */
export function TranscriptReviewNeedsCorrection() {
  return (
    <TranscriptReview
      title="Review Mode — flagged"
      patient={MARIA_PATIENT}
      queueCount={2}
      confidence={{
        confidence: 58,
        anomalies: 4,
        description:
          "Two segments contain inaudible or overlapping speech and one medication name could not be resolved. Correct flagged segments before confirming.",
      }}
      turns={LOW_CONFIDENCE_TURNS}
      audioSource="mic"
      durationSec={55}
      confirmDisabled
      onPostpone={() => {}}
      onQueue={() => {}}
      onConfirm={() => {}}
    />
  );
}

/**
 * Mid-review state — controlled playback paused at 1:12 of a 5:12
 * recording, transcript step in progress. Demonstrates the controlled
 * `audio` + `handlers` API.
 * Suggested id: `transcript-review-mid-review`
 */
export function TranscriptReviewMidReview() {
  const [audio, setAudio] = useState<ReviewAudioState>({
    playing: false,
    positionSec: 72,
    durationSec: 312,
    speed: 1,
    volume: 0.8,
    muted: false,
  });
  const handlers: ReviewAudioHandlers = {
    onPlayPause: () => setAudio((a) => ({ ...a, playing: !a.playing })),
    onSeek: (sec) => setAudio((a) => ({ ...a, positionSec: sec })),
    onSkip: (delta) =>
      setAudio((a) => ({
        ...a,
        positionSec: Math.min(Math.max(a.positionSec + delta, 0), a.durationSec),
      })),
    onSpeedChange: (rate) => setAudio((a) => ({ ...a, speed: rate })),
    onVolumeChange: (volume) => setAudio((a) => ({ ...a, volume })),
    onMutedChange: (muted) => setAudio((a) => ({ ...a, muted })),
  };
  return (
    <TranscriptReview
      patient={MARIA_PATIENT}
      audio={audio}
      handlers={handlers}
      queueCount={2}
      confidence={{
        confidence: 87.2,
        anomalies: 1,
        description:
          "Mostly clean capture — one uncertain term around 4:10 flagged for a quick listen.",
      }}
      turns={LOW_CONFIDENCE_TURNS}
      audioSource="mic"
      durationSec={312}
      onPostpone={() => {}}
      onQueue={() => {}}
      onConfirm={() => {}}
    />
  );
}

/**
 * Alternative patient/consultation dataset — a shorter follow-up visit
 * with a single speaker turn per side and a moderate confidence score.
 * Suggested id: `transcript-review-followup`
 */
export function TranscriptReviewFollowUp() {
  const turns: ReviewTurn[] = [
    {
      id: "t1",
      speaker: "SPEAKER_00",
      name: "Dra. Beatriz",
      role: "physician",
      roleLabel: "Physician",
      time: "0:00",
      text: "Bom dia, dona Lúcia. Como está se sentindo com o tratamento desta semana?",
    },
    {
      id: "t2",
      speaker: "SPEAKER_01",
      name: "Lúcia Helena",
      role: "patient",
      roleLabel: "Patient",
      time: "0:09",
      segments: [
        {
          time: "0:09",
          startSec: 9,
          endSec: 22,
          label: "Treatment Response",
          text: "Melhorou bastante, as dores de cabeça diminuíram e durmo melhor à noite.",
        },
        {
          time: "0:24",
          startSec: 24,
          endSec: 31,
          label: "Next Steps",
          flagged: true,
          text: "Só fico um pouco tonta quando [a medicação] é tomada em jejum.",
        },
      ],
    },
  ];
  return (
    <TranscriptReview
      patient={{
        name: "Lúcia Helena Prado",
        age: "58 anos",
        consultationNumber: "#12",
        consultedAt: "29/11/2026 10:40",
        durationSec: 31,
      }}
      queueCount={5}
      completedSteps={{ transcript: false }}
      confidence={{
        confidence: 92.7,
        anomalies: 1,
        description: "Short follow-up visit — one flagged phrase about fasting medication intake.",
      }}
      turns={turns}
      audioSource="tab"
      sampleRate="48kHz"
      durationSec={31}
      onPostpone={() => {}}
      onQueue={() => {}}
      onConfirm={() => {}}
    />
  );
}

import {
  PreconsultationRoom,
  type PreconsultationRoomLabels,
} from "@ktbhealth/ui/components/preconsultation-room";

/**
 * WIP example blocks: "Pre-consultation Room" — a Google Meet-style green
 * room shown before a consultation starts. Covers the in-person (room mic)
 * and telemedicine (meeting-tab audio / stereo loopback) capture modes, the
 * LGPD/CFM consent gate on the start CTA, mic mute, and the 3s audio test.
 */

const ptBR: Partial<PreconsultationRoomLabels> = {
  roomTitle: "Sala de Consulta",
  readyTitle: "Pronto para iniciar a consulta?",
  consentTitle: "Consentimento Informado do Paciente",
  consentDescription:
    "Declaro que o paciente foi devidamente informado e consentiu com a gravação e transcrição médica automatizada (em conformidade com a LGPD e CFM).",
  changePatient: "Trocar",
  testAudio: "Testar áudio (3s)",
  testingAudio: "Testando áudio…",
  calibratedAudio: "Áudio calibrado",
  startSession: "Sessão em Andamento",
  startingSession: "Iniciando gravação e transcrição…",
  secondaryAction: "Ditado Rápido Pós-Consulta",
  modalityInPerson: "Consulta Presencial",
  modalityTelemedicine: "Teleconsulta",
  captureInPerson: "Microfone do Consultório Ativo",
  captureTelemedicine: "Captura Estéreo (Médico + Aba Meet)",
  deviceInPerson: "Microfone do consultório",
  deviceTelemedicine: "Aba do Google Meet — somente áudio",
  engineInPerson: "Whisper Local • 48 kHz",
  engineTelemedicine: "Diarização Dual • Stereo Loopback",
  audioStatus: {
    ready: "Áudio pronto",
    muted: "Microfone mudo",
    testing: "Testando áudio…",
    calibrated: "Áudio calibrado",
  },
  networkStatus: "Status da Rede",
  encryption: "Criptografado ponta a ponta",
  connectionStable: "Conexão estável",
};

const physician = {
  name: "Dr. Emmanuel",
  credentials: "CRM-SP 184920 · Cardio",
};

const inPersonDevices = [
  { id: "mic-1", label: "Realtek HD Audio (Built-in)", kind: "microphone" },
  { id: "mic-2", label: "USB Conference Mic", kind: "microphone" },
];

const telemedicineDevices = [
  { id: "tab", label: "Google Meet tab — audio only", kind: "tab-audio" },
  { id: "mic", label: "Room microphone (physician)", kind: "microphone" },
];

const frame = "h-[720px] overflow-hidden rounded-xl border bg-background";

/** In-person consult, consent unchecked — start CTA disabled. */
export function PreconsultationRoomInPerson() {
  return (
    <PreconsultationRoom
      className={frame}
      physician={physician}
      patient={{
        name: "Luís Fernando Silva",
        age: 42,
        condition: "Hipertensão leve",
      }}
      modality="in-person"
      telemetry={{ version: "KTB Health ClinicalPulse v2.5", latencyMs: 24 }}
      devices={inPersonDevices}
      selectedDeviceId="mic-1"
      labels={ptBR}
    />
  );
}

/** In-person consult, consent checked, mic active — start CTA enabled. */
export function PreconsultationRoomReady() {
  return (
    <PreconsultationRoom
      className={frame}
      physician={physician}
      patient={{
        name: "Luís Fernando Silva",
        age: 42,
        condition: "Hipertensão leve",
      }}
      modality="in-person"
      defaultConsentChecked
      telemetry={{ version: "KTB Health ClinicalPulse v2.5", latencyMs: 18 }}
      devices={inPersonDevices}
      selectedDeviceId="mic-2"
      labels={ptBR}
    />
  );
}

/**
 * Telemedicine — captures the Google Meet tab audio (stereo loopback)
 * instead of the patient-side mic; consent checked.
 */
export function PreconsultationRoomTelemedicine() {
  return (
    <PreconsultationRoom
      className={frame}
      physician={physician}
      patient={{
        name: "Mariana Costa Ribeiro",
        age: 35,
        condition: "Enxaqueca crônica",
      }}
      modality="telemedicine"
      defaultConsentChecked
      telemetry={{ version: "KTB Health ClinicalPulse v2.5", latencyMs: 31 }}
      devices={telemedicineDevices}
      selectedDeviceId="tab"
      labels={ptBR}
    />
  );
}

/** Telemedicine with the mic muted and the 3s audio test in "testing" state. */
export function PreconsultationRoomAudioTest() {
  return (
    <PreconsultationRoom
      className={frame}
      physician={physician}
      patient={{
        name: "Mariana Costa Ribeiro",
        age: 35,
        condition: "Enxaqueca crônica",
      }}
      modality="telemedicine"
      micMuted
      audioStatus="testing"
      defaultConsentChecked
      telemetry={{ version: "KTB Health ClinicalPulse v2.5", latencyMs: 42 }}
      devices={telemedicineDevices}
      selectedDeviceId="tab"
      labels={ptBR}
    />
  );
}

/** Different patient — pediatric quick-ID card. */
export function PreconsultationRoomPediatric() {
  return (
    <PreconsultationRoom
      className={frame}
      physician={{
        name: "Dra. Camila Nunes",
        credentials: "CRM-RJ 98211 · Pediatria",
      }}
      patient={{
        name: "Theo Almeida",
        age: 8,
        condition: "Alergia alimentar",
      }}
      modality="in-person"
      defaultConsentChecked
      telemetry={{ version: "KTB Health ClinicalPulse v2.5", latencyMs: 12 }}
      devices={inPersonDevices}
      selectedDeviceId="mic-1"
      labels={ptBR}
    />
  );
}

import {
  AnamnesisReview,
  ConsultationAudioCard,
  HomologationBar,
  SupportTranscript,
  type AnamnesisReviewProps,
  type AnamnesisReviewSections,
} from "@ktbhealth/ui/components/anamnesis-review";

const noop = () => {};

const LUIS_PATIENT = {
  name: "Luís Fernando Silva",
  demographics: "42 anos (Masc)",
  consultationId: "Consulta #17",
  date: "hoje, 14:32",
};

const LUIS_PHYSICIAN = { name: "Dr. Emmanuel", credential: "CRM/SP 184.920" };

const LUIS_HISTORY =
  "Paciente relata início dos sintomas durante atividade de musculação recente ao realizar agachamento livre. Refere irradiação da dor com início em quadril/pelve estendendo-se até a região cervical. Associa o início ao uso de calçado novo com palmilha ortopédica sem prescrição médica especializada, referindo sensação de pisada pronada que acentua a dor lombar.";

const LUIS_TURNS = [
  {
    id: "t1",
    speaker: "Dr. Emmanuel",
    role: "doctor" as const,
    text: "Boa tarde, seu Luís. Estou avaliando seu caso hoje. O senhor relatou incômodo doloroso na região pélvica, correto? Me conte como começou.",
  },
  {
    id: "t2",
    speaker: "Luís Fernando",
    role: "patient" as const,
    time: "00:18",
    text: "Olá, doutor. Pois é... Sinto dores na pelve quando estava me exercitando na academia. Senti pontadas ao agachar, nunca tinha sentido isso antes.",
  },
  {
    id: "t3",
    speaker: "Luís Fernando",
    role: "patient" as const,
    time: "00:32",
    text: "Começou no quadril e repuxou até a cervical. Comecei a usar um tênis novo com palmilha ortopédica e sinto que minha pisada torta piora a dor.",
    onSeek: noop,
  },
];

const LUIS_SECTIONS: AnamnesisReviewSections = {
  chiefComplaint: {
    confidence: "high",
    confidenceLabel: "Alta confiança",
    text: "Dor pélvica e lombar de início súbito durante esforço físico (agachamento livre), com irradiação ascendente para o segmento cervical.",
  },
  history: {
    confidence: "high",
    confidenceLabel: "Alta confiança",
    paragraphs: [LUIS_HISTORY],
    audioSegment: { range: "00:18 - 00:42", label: "Ouvir trecho correspondente", onSeek: noop },
  },
  hypotheses: {
    confidence: "medium",
    confidenceLabel: "Confiança média",
    items: [
      { label: "Lombociatalgia mecânica", cid: "CID M54.4" },
      { label: "Impacto femoroacetabular", cid: "CID M25.5" },
    ],
  },
  conduct: {
    confidence: "high",
    confidenceLabel: "Alta confiança",
    items: [
      "Suspensão temporária do uso de palmilha sem prescrição",
      "Exame físico postural e de marcha presencial",
      "Prescrição analgésica sintomática e reavaliação em 7 dias",
    ],
  },
  pending: {
    title: "Dados não informados / pendentes",
    items: [
      "Antecedentes: Nega cirurgias",
      "Alergias: Nenhuma relatada",
      "Medicamentos: Nenhum de uso contínuo",
    ],
  },
};

const LUIS_LABELS = {
  chiefComplaint: "Queixa Principal (QP)",
  history: "História da Doença Atual (HDA)",
  hypotheses: "Hipóteses Diagnósticas",
  conduct: "Conduta Recomendada",
};

function ReviewFrame({ props }: { props: AnamnesisReviewProps }) {
  return (
    <div className="w-full">
      <AnamnesisReview {...props} />
    </div>
  );
}

/**
 * In-person consultation, high-confidence anamnesis ready for
 * homologation — mirrors the approved review-mode mockup.
 */
export function AnamnesisReviewInPerson() {
  return (
    <ReviewFrame
      props={{
        patient: LUIS_PATIENT,
        physician: LUIS_PHYSICIAN,
        modality: "in-person",
        title: "Prontuário estruturado para validação",
        description: "Revise e ajuste as informações antes da homologação final.",
        onBack: noop,
        backLabel: "Fila de atendimento",
        onEditAll: noop,
        editAllLabel: "Editar tudo",
        labels: LUIS_LABELS,
        sections: LUIS_SECTIONS,
        audio: {
          title: "Áudio da consulta",
          position: 18,
          duration: 47,
          playing: true,
          onTogglePlay: noop,
          audioSource: "mic",
          telemetry: "Captura microfone + áudio do sistema",
        },
        transcript: {
          title: "Transcrição de apoio",
          participantsLabel: "Dr. Emmanuel & Paciente",
          turns: LUIS_TURNS,
        },
        homologation: {
          onRegenerate: noop,
          onApprove: noop,
          regenerateLabel: "Re-analisar com IA",
          approveLabel: "Homologar e assinar prontuário",
        },
      }}
    />
  );
}

/**
 * Telemedicine consultation — the recording captures only the meeting
 * tab's audio (Google Meet etc.), surfaced via modality + source badges.
 */
export function AnamnesisReviewTelemedicine() {
  return (
    <ReviewFrame
      props={{
        patient: {
          name: "Mariana Costa Ribeiro",
          demographics: "34 anos (Fem)",
          consultationId: "Consulta #23",
          date: "hoje, 09:15",
        },
        physician: { name: "Dra. Camila Fontes", credential: "CRM/RJ 98.412" },
        modality: "telemedicine",
        modalityLabels: { "in-person": "Presencial", telemedicine: "Telemedicina" },
        title: "Prontuário estruturado para validação",
        description: "Revise e ajuste as informações antes da homologação final.",
        labels: {
          chiefComplaint: "Queixa Principal (QP)",
          history: "História da Doença Atual (HDA)",
          hypotheses: "Hipóteses Diagnósticas",
          conduct: "Conduta Recomendada",
        },
        sections: {
          chiefComplaint: {
            confidence: "high",
            confidenceLabel: "Alta confiança",
            text: "Cefaleia pulsátil em hemi-crânio direito associada a fotofobia e náusea, com crises há 2 anos, piora nos últimos 3 meses.",
          },
          history: {
            confidence: "medium",
            confidenceLabel: "Confiança média",
            text: "Paciente relata crises de cefaleia com aura visual (escotomas cintilantes) precedendo a dor em ~20 minutos. Nega uso de analgésicos diários; refere consumo ocasional de cafeína. Histórico familiar de enxaqueca materna. Episódios desencadeados por telas e privação de sono.",
            audioSegment: {
              range: "04:10 - 04:38",
              label: "Ouvir trecho correspondente",
              onSeek: noop,
            },
          },
          hypotheses: {
            confidence: "medium",
            confidenceLabel: "Confiança média",
            items: [
              { label: "Enxaqueca com aura", cid: "CID G43.1" },
              { label: "Cefaleia tensional crônica", cid: "CID G44.2" },
            ],
          },
          conduct: {
            confidence: "high",
            confidenceLabel: "Alta confiança",
            items: [
              "Diário de crises por 30 dias para confirmar padrão",
              "Ressonância magnética de crânio para exclusão",
              "Orientações de higiene do sono e gatilhos alimentares",
            ],
          },
          pending: {
            title: "Dados não informados / pendentes",
            items: [
              "Alergias: Aguardando confirmação",
              "Medicamentos: Dipirona SOS relatado",
              "Hábitos: Tabagismo negado",
            ],
          },
        },
        audio: {
          title: "Áudio da consulta",
          position: 250,
          duration: 612,
          playing: false,
          onTogglePlay: noop,
          audioSource: "tab",
          telemetry:
            "Captura apenas o áudio da aba da reunião — voz e áudio do sistema fora do Meet não são gravados.",
        },
        transcript: {
          title: "Transcrição de apoio",
          participantsLabel: "Dra. Camila & Mariana",
          turns: [
            {
              id: "m1",
              speaker: "Dra. Camila",
              role: "doctor",
              text: "Olá Mariana, me conta: como têm sido essas dores de cabeça ultimamente?",
            },
            {
              id: "m2",
              speaker: "Mariana",
              role: "patient",
              time: "00:12",
              text: "Doutora, piorou bastante. Antes era uma vez por mês, agora são quase toda semana, sempre do lado direito.",
            },
            {
              id: "m3",
              speaker: "Mariana",
              role: "patient",
              time: "00:41",
              text: "E antes da dor eu vejo uns brilhos na lateral do olho por uns 20 minutos. É bem assustador.",
            },
          ],
        },
        homologation: {
          onRegenerate: noop,
          onApprove: noop,
          regenerateLabel: "Re-analisar com IA",
          approveLabel: "Homologar e assinar prontuário",
        },
      }}
    />
  );
}

/**
 * Record with missing/pending data emphasized — several sections stay
 * unconfirmed and the approve action is held until gaps are resolved.
 */
export function AnamnesisReviewPendingData() {
  return (
    <ReviewFrame
      props={{
        patient: {
          name: "Carlos Eduardo Nogueira",
          demographics: "58 anos (Masc)",
          consultationId: "Consulta #31",
          date: "ontem, 16:05",
        },
        physician: { name: "Dr. Rafael Antunes", credential: "CRM/SP 152.330" },
        modality: "in-person",
        title: "Prontuário estruturado para validação",
        description: "Há seções sem evidência suficiente — revise antes de homologar.",
        labels: {
          chiefComplaint: "Queixa Principal (QP)",
          history: "História da Doença Atual (HDA)",
          hypotheses: "Hipóteses Diagnósticas",
          conduct: "Conduta Recomendada",
        },
        sections: {
          chiefComplaint: {
            confidence: "medium",
            confidenceLabel: "Confiança média",
            text: "Tontura rotatória associada a sudorese e náusea, com episódios recorrentes nos últimos 15 dias.",
          },
          history: {
            confidence: "unconfirmed",
            confidenceLabel: "Não confirmado",
            text: "Paciente refere episódios de tontura com sensação de desequilíbrio, mais frequentes pela manhã. Nega trauma craniano. História de hipertensão arterial autorreferida — exames não apresentados na consulta.",
            edited: true,
          },
          hypotheses: {
            confidence: "low",
            confidenceLabel: "Baixa confiança",
            items: [
              { label: "Vertigem posicional paroxística benigna", cid: "CID H81.1" },
              { label: "Hipotensão ortostática", cid: "CID I95.1" },
            ],
          },
          conduct: {
            confidence: "low",
            confidenceLabel: "Baixa confiança",
            items: [
              "Aguardando exames de imagem e laboratório",
              "Encaminhamento para otorrinolaringologia",
              "Acompanhamento da pressão arterial em casa",
            ],
          },
          pending: {
            title: "Dados não informados / pendentes",
            items: [
              "Exames anteriores: Não apresentados",
              "Medicações em uso: Não relatado",
              "Antecedentes familiares: Não informado",
              "Alergias: Sem informação",
            ],
          },
        },
        audio: {
          title: "Áudio da consulta",
          position: 95,
          duration: 1240,
          playing: false,
          onTogglePlay: noop,
          audioSource: "mic",
        },
        transcript: {
          title: "Transcrição de apoio",
          participantsLabel: "Dr. Rafael & Paciente",
          turns: [
            {
              id: "p1",
              speaker: "Dr. Rafael",
              role: "doctor",
              text: "Carlos, preciso entender melhor esses episódios de tontura. Quando foi a última vez que sentiu?",
            },
            {
              id: "p2",
              speaker: "Carlos",
              role: "patient",
              time: "02:05",
              text: "Acho que foi terça-feira de manhã, doutor. Levantei da cama e o mundo girou.",
            },
          ],
        },
        homologation: {
          onRegenerate: noop,
          onApprove: noop,
          approveDisabled: true,
          regenerateLabel: "Re-analisar com IA",
          approveLabel: "Homologar e assinar prontuário",
          description:
            "Aprovação bloqueada: 2 seções com baixa confiança e dados pendentes de confirmação.",
        },
      }}
    />
  );
}

/**
 * Low-confidence / needs-correction state — unconfirmed sections,
 * uncertain transcript markers and a held homologation.
 */
export function AnamnesisReviewNeedsCorrection() {
  return (
    <ReviewFrame
      props={{
        patient: {
          name: "Ana Beatriz Mendonça",
          demographics: "29 anos (Fem)",
          consultationId: "Consulta #12",
          date: "ontem, 11:48",
        },
        physician: { name: "Dr. Tiago Salles", credential: "CRM/MG 88.201" },
        modality: "in-person",
        title: "Prontuário estruturado para validação",
        description: "A IA marcou trechos incertos — confira o áudio antes de aprovar.",
        labels: {
          chiefComplaint: "Queixa Principal (QP)",
          history: "História da Doença Atual (HDA)",
          hypotheses: "Hipóteses Diagnósticas",
          conduct: "Conduta Recomendada",
        },
        sections: {
          chiefComplaint: {
            confidence: "medium",
            confidenceLabel: "Confiança média",
            text: "Dor torácica atípica em região precordial, de curta duração, associada a palpitações.",
          },
          history: {
            confidence: "low",
            confidenceLabel: "Baixa confiança",
            paragraphs: [
              "Paciente refere episódios de aperto torácico em repouso, com duração de minutos. Áudio do trecho correspondente está com baixa qualidade — trecho 12:04-12:31 marcado como incerto na transcrição.",
            ],
            audioSegment: {
              range: "12:04 - 12:31",
              label: "Ouvir trecho correspondente",
              onSeek: noop,
            },
          },
          hypotheses: {
            confidence: "unconfirmed",
            confidenceLabel: "Não confirmado",
            items: [
              { label: "Angina instável", cid: "CID I20.0" },
              { label: "Ansiedade com sintomas somáticos", cid: "CID F41.1" },
            ],
          },
          conduct: {
            confidence: "unconfirmed",
            confidenceLabel: "Não confirmado",
            items: [
              "Não é possível confirmar a conduta — trecho de áudio incerto",
              "Sugerido: repetir ausculta e solicitar ECG",
            ],
          },
          pending: {
            title: "Dados não informados / pendentes",
            items: [
              "Hábitos de vida: Não informados",
              "História familiar cardíaca: Não informada",
              "Medicamentos: Não relatado",
            ],
          },
        },
        audio: {
          title: "Áudio da consulta",
          position: 724,
          duration: 980,
          playing: false,
          onTogglePlay: noop,
          audioSource: "mic",
          telemetry: "Trecho 12:04–12:31 com confiança baixa na transcrição.",
        },
        transcript: {
          title: "Transcrição de apoio",
          participantsLabel: "Dr. Tiago & Paciente",
          turns: [
            {
              id: "n1",
              speaker: "Dr. Tiago",
              role: "doctor",
              text: "Ana, esse aperto no peito acontece também quando você está em repouso?",
            },
            {
              id: "n2",
              speaker: "Ana",
              role: "patient",
              time: "12:04",
              text: "Sim, às vezes à noite... e eu sinto o coração acelerado junto.",
              uncertain: true,
            },
            {
              id: "n3",
              speaker: "Dr. Tiago",
              role: "doctor",
              time: "12:31",
              text: "Entendi. Precisamos de um eletrocardiograma antes de qualquer conclusão.",
            },
          ],
        },
        homologation: {
          onRegenerate: noop,
          onApprove: noop,
          approveDisabled: true,
          regenerateLabel: "Re-analisar com IA",
          approveLabel: "Homologar e assinar prontuário",
          description:
            "Trechos incertos na transcrição — ouça o áudio e corrija antes de homologar.",
        },
      }}
    />
  );
}

/**
 * Composite pieces in isolation: section subcomponents composed by hand
 * (audio card + transcript + homologation bar) for layout reference.
 */
export function AnamnesisReviewParts() {
  return (
    <div className="flex w-full flex-col gap-4">
      <ConsultationAudioCardStandalone />
      <SupportTranscriptStandalone />
      <HomologationBarStandalone />
    </div>
  );
}

function ConsultationAudioCardStandalone() {
  return (
    <ConsultationAudioCard
      title="Áudio da consulta"
      position={18}
      duration={47}
      playing
      onTogglePlay={noop}
      audioSource="mic"
      telemetry="Captura microfone + áudio do sistema"
    />
  );
}

function SupportTranscriptStandalone() {
  return (
    <SupportTranscript
      title="Transcrição de apoio"
      participantsLabel="Dr. Emmanuel & Paciente"
      turns={LUIS_TURNS}
    />
  );
}

function HomologationBarStandalone() {
  return (
    <HomologationBar
      physicianName="Dr. Emmanuel"
      credential="CRM/SP 184.920"
      signatureLabel="Assinatura ICP-Brasil"
      onRegenerate={noop}
      onApprove={noop}
      regenerateLabel="Re-analisar com IA"
      approveLabel="Homologar e assinar prontuário"
    />
  );
}

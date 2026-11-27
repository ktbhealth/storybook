import {
  LiveConsultation,
  type AnamnesisSectionData,
  type LiveConsultationPatient,
  type LiveConsultationTurn,
} from "@ktbhealth/ui/components/live-consultation";
import { useState } from "react";

/**
 * Live Consultation blocks — variants of the real-time diarized
 * transcription screen (ui `LiveConsultation` composite). Demo copy is
 * pt-BR; all screen copy is overridable via the `labels` prop upstream.
 */

const noop = () => {};

function useAnamnesis(initial: boolean) {
  const [open, setOpen] = useState(initial);
  return { open, onOpenChange: setOpen };
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[720px] overflow-hidden rounded-xl border bg-background">
      {children}
    </div>
  );
}

// ---------- shared demo data ----------

const LUIS: LiveConsultationPatient = {
  name: "Luís Fernando Silva",
  age: 42,
  recordNumber: "4092",
  condition: "Hipertensão leve",
};

const ANA: LiveConsultationPatient = {
  name: "Ana Beatriz Rocha",
  age: 34,
  recordNumber: "5177",
  condition: "Enxaqueca crônica",
};

const EARLY_TURNS: LiveConsultationTurn[] = [
  {
    speaker: 0,
    name: "Dr. Emmanuel",
    role: "Médico",
    paragraphs: [
      {
        time: "00:05",
        text: "Olá Luís, boa tarde! Seja bem-vindo. Como posso ajudar você hoje? O que motivou a nossa consulta?",
      },
      {
        time: "00:08",
        text: "Fique à vontade para detalhar qualquer sintoma ou incômodo recente.",
      },
    ],
  },
  {
    speaker: 1,
    name: "Luís Fernando (Paciente)",
    role: "Paciente",
    paragraphs: [
      {
        time: "00:18",
        text: "Boa tarde Doutor. Eu comecei a sentir muitas dores na região do quadril e pelve há cerca de 3 semanas, principalmente quando vou me agachar ou depois de caminhar do trabalho até o metrô.",
      },
    ],
  },
  {
    speaker: 0,
    name: "Dr. Emmanuel",
    role: "Médico",
    paragraphs: [
      {
        time: "01:02",
        text: "Entendido. Essa dor irradia para as pernas ou sobe em direção à coluna? Você mudou sua rotina física ou comprou algum calçado novo recentemente?",
      },
    ],
  },
];

const FULL_TURNS: LiveConsultationTurn[] = [
  ...EARLY_TURNS,
  {
    speaker: 1,
    name: "Luís Fernando (Paciente)",
    role: "Paciente",
    paragraphs: [
      {
        time: "01:25",
        text: "Começou bem no quadril e depois parecia que subia pelo meio das costas até a base do pescoço.",
      },
      {
        time: "01:38",
        text: "E comprei uma palmilha ortopédica pela internet, mas percebi que o formato dela é torto. Sinto que isso pode ter piorado as dores.",
      },
    ],
  },
  {
    speaker: 0,
    name: "Dr. Emmanuel",
    role: "Médico",
    paragraphs: [
      {
        time: "02:10",
        text: "Anotado. Vou solicitar uma radiografia de bacia e coluna lombar em ortostase para investigarmos a origem. Enquanto isso, suspenda o uso das palmilhas imediatamente.",
      },
      {
        time: "02:24",
        text: "Também vou encaminhar você para baropodometria computadorizada — ela vai mostrar o desnível de carga entre os pés.",
      },
    ],
  },
  {
    speaker: 1,
    name: "Luís Fernando (Paciente)",
    role: "Paciente",
    paragraphs: [
      {
        time: "03:01",
        text: "Perfeito, Doutor. E sobre o retorno — devo voltar em quanto tempo para reavaliar?",
      },
    ],
  },
];

const ANAMNESIS_SECTIONS: AnamnesisSectionData[] = [
  {
    title: "Queixa Principal",
    status: (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-success">
        Confirmado
      </span>
    ),
    accent: "bg-primary",
    body: (
      <p className="text-foreground">
        Dor progressiva em região de quadril e lombar há aproximadamente 3 semanas, exacerbada após
        agachamentos e caminhadas.
      </p>
    ),
  },
  {
    title: "História da Moléstia Atual",
    status: (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-success">
        98% Confiança
      </span>
    ),
    accent: "bg-primary",
    body: (
      <p className="mb-2.5 text-foreground">
        Paciente relata início há 3 semanas na pelve e quadril, com irradiação ascendente até a
        transição cervicotorácica.
      </p>
    ),
    callout: {
      tone: "warning",
      title: "Fator Relevante:",
      children:
        "Uso de palmilha ortopédica recente não prescrita, com desnível acentuado relatado.",
    },
  },
  {
    title: "Hipóteses Diagnósticas",
    status: (
      <span className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
        Sugestão
      </span>
    ),
    accent: "bg-primary",
    body: (
      <ul className="space-y-1.5 text-foreground">
        <li className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          <span>
            <strong>M54.5:</strong> Dor lombar baixa / Sacroileíte a esclarecer.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          <span>
            <strong>M79.1:</strong> Síndrome Miofascial com sobrecarga postural secundária.
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Conduta Recomendada",
    accent: "bg-info",
    body: (
      <div className="space-y-2 text-foreground">
        {[
          "Suspender imediatamente o uso das palmilhas não prescritas.",
          "Solicitar Radiografia de Bacia e Coluna Lombar em ortostase.",
          "Encaminhar para Baropodometria Computadorizada e Fisioterapia analgésica.",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-info" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const baseProps = {
  onEndConsultation: noop,
  onCopyTranscript: noop,
  onExportTranscript: noop,
  onSeek: noop,
  onOpenSettings: noop,
  onAddNote: noop,
  onToggleTranscription: noop,
};

// ---------- blocks ----------

/**
 * Early in-person visit: few turns captured, anamnesis drawer closed,
 * 2 topics detected so far.
 */
export function LiveConsultationEarlyVisit() {
  const anamnesis = useAnamnesis(false);
  return (
    <Frame>
      <LiveConsultation
        {...baseProps}
        patient={LUIS}
        modality="in-person"
        status="live"
        elapsed="04:12"
        turns={EARLY_TURNS}
        anamnesis={{
          ...anamnesis,
          sections: ANAMNESIS_SECTIONS.slice(0, 2),
          topicCount: 2,
          onGeneratePrescription: noop,
          onEdit: noop,
          onSave: noop,
          onConclude: noop,
        }}
      />
    </Frame>
  );
}

/**
 * Telemedicine visit: patient side comes from an external meeting tool —
 * the header pill and status strip show "Meeting tab audio". Anamnesis
 * drawer open with all four structured sections.
 */
export function LiveConsultationTelemedicine() {
  const anamnesis = useAnamnesis(true);
  return (
    <Frame>
      <LiveConsultation
        {...baseProps}
        patient={ANA}
        modality="telemedicine"
        status="live"
        elapsed="18:36"
        turns={FULL_TURNS.map((t, i) =>
          i % 2 === 1
            ? { ...t, name: "Ana Beatriz (Paciente)", speaker: 2 }
            : { ...t, name: "Dra. Camila", speaker: 0 },
        )}
        anamnesis={{
          ...anamnesis,
          sections: ANAMNESIS_SECTIONS,
          topicCount: 4,
          onGeneratePrescription: noop,
          onEdit: noop,
          onSave: noop,
          onConclude: noop,
        }}
      />
    </Frame>
  );
}

/**
 * Later-stage in-person consultation: fuller transcript, higher topic
 * coverage (4), anamnesis drawer available but closed.
 */
export function LiveConsultationFollowUp() {
  const anamnesis = useAnamnesis(false);
  return (
    <Frame>
      <LiveConsultation
        {...baseProps}
        patient={LUIS}
        modality="in-person"
        status="live"
        elapsed="32:47"
        turns={FULL_TURNS}
        anamnesis={{
          ...anamnesis,
          sections: ANAMNESIS_SECTIONS,
          topicCount: 4,
          synced: true,
          onGeneratePrescription: noop,
          onEdit: noop,
          onSave: noop,
          onConclude: noop,
        }}
      />
    </Frame>
  );
}

/**
 * Paused transcription: amber "PAUSADA" pill, muted VU bars and paused
 * status copy; audio capture continues in the background.
 */
export function LiveConsultationPaused() {
  const anamnesis = useAnamnesis(true);
  return (
    <Frame>
      <LiveConsultation
        {...baseProps}
        patient={LUIS}
        modality="in-person"
        status="paused"
        elapsed="21:03"
        turns={FULL_TURNS}
        anamnesis={{
          ...anamnesis,
          sections: ANAMNESIS_SECTIONS,
          topicCount: 4,
          onGeneratePrescription: noop,
          onEdit: noop,
          onSave: noop,
          onConclude: noop,
        }}
      />
    </Frame>
  );
}

/**
 * Ended consultation: muted "ENCERRADA" pill, no listening indicator,
 * transcription controls hidden — review/export affordances remain.
 */
export function LiveConsultationEnded() {
  const anamnesis = useAnamnesis(false);
  return (
    <Frame>
      <LiveConsultation
        {...baseProps}
        patient={ANA}
        modality="telemedicine"
        status="ended"
        elapsed="44:18"
        turns={FULL_TURNS}
        anamnesis={{
          ...anamnesis,
          sections: ANAMNESIS_SECTIONS,
          topicCount: 4,
          synced: true,
          onGeneratePrescription: noop,
          onEdit: noop,
          onSave: noop,
          onConclude: noop,
        }}
      />
    </Frame>
  );
}

/**
 * Different patient: pediatric visit, in-person, anamnesis drawer open
 * showing only the early sections (1 topic confirmed so far).
 */
export function LiveConsultationPediatricVisit() {
  const anamnesis = useAnamnesis(true);
  const child: LiveConsultationPatient = {
    name: "Maria Clara Souza",
    age: 8,
    recordNumber: "3301",
    condition: "Febre + tosse",
  };
  const turns: LiveConsultationTurn[] = [
    {
      speaker: 0,
      name: "Dr. Rafael",
      role: "Médico",
      paragraphs: [
        {
          time: "00:04",
          text: "Oi Maria! Vamos conversar rapidinho sobre o que está te deixando indisposta hoje. O que está doendo ou te incomodando?",
        },
      ],
    },
    {
      speaker: 1,
      name: "Maria Clara (Paciente)",
      role: "Paciente",
      paragraphs: [
        {
          time: "00:21",
          text: "Estou com febre desde ontem e minha garganta está doendo muito quando eu engulo.",
        },
        {
          time: "00:33",
          text: "E eu também estou tossindo bastante de noite.",
        },
      ],
    },
    {
      speaker: 0,
      name: "Dr. Rafael",
      role: "Médico",
      paragraphs: [
        {
          time: "00:58",
          text: "Entendi. A febre chegou a quanto? E ela subiu ou ficou estável durante a noite?",
        },
      ],
    },
  ];
  const sections: AnamnesisSectionData[] = [
    {
      title: "Queixa Principal",
      status: (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-success">
          Confirmado
        </span>
      ),
      accent: "bg-primary",
      body: (
        <p className="text-foreground">
          Febre e odinofagia (dor de garganta) iniciadas há ~24h, com tosse noturna associada.
        </p>
      ),
    },
  ];
  return (
    <Frame>
      <LiveConsultation
        {...baseProps}
        patient={child}
        modality="in-person"
        status="live"
        elapsed="02:14"
        turns={turns}
        anamnesis={{
          ...anamnesis,
          sections,
          topicCount: 1,
          onGeneratePrescription: noop,
          onEdit: noop,
          onSave: noop,
          onConclude: noop,
        }}
      />
    </Frame>
  );
}

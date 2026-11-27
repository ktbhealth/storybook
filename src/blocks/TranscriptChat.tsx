import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import { Bubble, BubbleContent } from "@ktbhealth/ui/components/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@ktbhealth/ui/components/message";
import { Card } from "@ktbhealth/ui/components/card";
import { ScrollArea } from "@ktbhealth/ui/components/scroll-area";
import { cn } from "@ktbhealth/ui/lib/utils";
import { Check, Copy, Download, Lock, Pause } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Cyclic per-speaker palette built on semantic tokens (primary ≈ brand
 * accent, success/warning/info/destructive). Speaker N maps to
 * SPEAKER_TONES[N % len] — stable across renders, no hardcoded colors.
 */
const SPEAKER_TONES = [
  { avatar: "bg-primary/15 text-primary border-primary/40", name: "text-primary" },
  { avatar: "bg-success/15 text-success border-success/40", name: "text-success" },
  { avatar: "bg-warning/15 text-warning border-warning/40", name: "text-warning" },
  { avatar: "bg-info/15 text-info border-info/40", name: "text-info" },
] as const;

function speakerTone(speaker: number) {
  return SPEAKER_TONES[speaker % SPEAKER_TONES.length]!;
}

function speakerInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export interface TranscriptTurn {
  speaker: number;
  name: string;
  role?: string;
  /** Each paragraph optionally carries its own mm:ss seek stamp. */
  paragraphs: { time: string; text: string }[];
}

/** One speaker turn: avatar + name/time/role header + bubble with stamped paragraphs. */
export function TranscriptChatRow({ turn }: { turn: TranscriptTurn }) {
  const tone = speakerTone(turn.speaker);
  return (
    <Message>
      <MessageAvatar className="self-start">
        <Avatar className={cn("size-8 rounded-xl border", tone.avatar)}>
          <AvatarFallback className={cn("rounded-xl text-xs font-bold", tone.avatar)}>
            {speakerInitials(turn.name)}
          </AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader className="mb-1.5 flex items-center gap-2">
          <span className={cn("text-xs font-bold", tone.name)}>{turn.name}</span>
          <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
            {turn.paragraphs[0]!.time}
          </span>
          {turn.role ? (
            <Badge variant="outline" className="px-1.5 py-0 text-[10px] font-normal">
              {turn.role}
            </Badge>
          ) : null}
        </MessageHeader>
        <Bubble variant="secondary" className="max-w-full">
          <BubbleContent className="w-full rounded-2xl rounded-tl-none border-border/60 px-3.5 py-3">
            <div className="space-y-2.5">
              {turn.paragraphs.map((p, i) =>
                i === 0 ? (
                  <p key={i} className="leading-relaxed">
                    {p.text}
                  </p>
                ) : (
                  <div key={i} className="flex items-start gap-2 border-t border-border/50 pt-2">
                    <span className="mt-0.5 font-mono text-[10px] text-muted-foreground tabular-nums">
                      {p.time}
                    </span>
                    <p className="flex-1 leading-relaxed">{p.text}</p>
                  </div>
                ),
              )}
            </div>
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}

/** Animated waveform bars for the live recording indicator. */
function AudioBars({ className }: { className?: string }) {
  return (
    <span className={cn("flex h-3 items-center gap-0.5", className)} aria-hidden>
      {[0, 0.15, 0.3, 0.45].map((delay) => (
        <span
          key={delay}
          className="w-0.5 rounded-full bg-destructive animate-[recbar_1.2s_ease-in-out_infinite]"
          style={{ animationDelay: `${delay}s`, height: "8px" }}
        />
      ))}
      <style>{`@keyframes recbar { 0%,100% { height: 6px } 50% { height: 14px } }`}</style>
    </span>
  );
}

/** Recording cluster: pulsing dot + mono timer + wave bars + pause. */
function RecordingIndicator({ elapsed = "14:28" }: { elapsed?: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-card px-2.5 py-1">
      <span className="size-2 rounded-full bg-destructive animate-pulse" />
      <span className="font-mono text-xs font-bold tabular-nums">{elapsed}</span>
      <AudioBars />
      <Button variant="ghost" size="icon" className="size-6" title="Pausar gravação">
        <Pause className="size-3" />
      </Button>
    </div>
  );
}

/** Centered security note shown above the transcript. */
export function EncryptionPill({ children }: { children: ReactNode }) {
  return (
    <div className="my-1 flex items-center justify-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-info/30 bg-info/10 px-3 py-1 text-[11px] text-info shadow-sm">
        <Lock className="size-2.5" />
        {children}
      </span>
    </div>
  );
}

/** Bottom "listening" status inside the transcript stream. */
export function ListeningIndicator({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2.5 rounded-xl border border-primary/20 bg-card/60 p-3 text-xs text-primary/90 shadow-sm">
      <span className="size-2 rounded-full bg-primary animate-ping" />
      <span className="font-medium italic">{children}</span>
    </div>
  );
}

const TURNS: TranscriptTurn[] = [
  {
    speaker: 0,
    name: "Dr. Emmanuel",
    role: "Médico",
    paragraphs: [
      {
        time: "00:05",
        text: "Olá Luís, boa tarde! Seja bem-vindo ao consultório virtual. Como posso ajudar você hoje? O que motivou a nossa consulta?",
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
        text: "Boa tarde Doutor. Então, eu comecei a sentir muitas dores na região do quadril e pelve há cerca de 3 semanas. Principalmente quando vou me agachar ou depois de caminhar do trabalho até o metrô. Nunca tive nada parecido antes.",
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
        text: "Entendido. Essa dor irradia para as pernas ou sobe em direção à coluna lombar ou pescoço? Você mudou sua rotina física ou comprou algum calçado novo recentemente?",
      },
    ],
  },
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
        text: "E sobre calçado, comprei uma palmilha ortopédica pela internet, mas percebi que o formato dela é torto, parece falsificada. Sinto que isso pode ter piorado as dores.",
      },
    ],
  },
];

/** Transcript panel header: status + title on the left, recording cluster + actions on the right. */
export function TranscriptPanelHeader({ live = true }: { live?: boolean }) {
  return (
    <div className="flex shrink-0 items-center justify-between border-b bg-card/60 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "size-2 rounded-full",
            live ? "bg-primary animate-pulse" : "bg-muted-foreground",
          )}
        />
        <h2 className="text-xs font-bold tracking-wider uppercase">
          Transcrição da Consulta{live ? " (Ao Vivo)" : ""}
        </h2>
      </div>
      <div className="flex items-center gap-1.5">
        {live ? <RecordingIndicator /> : null}
        <Button variant="outline" size="sm" className="h-7 gap-1 px-2 text-[11px]">
          <Copy className="size-3" /> Copiar
        </Button>
        <Button variant="outline" size="sm" className="h-7 gap-1 px-2 text-[11px]">
          <Download className="size-3" /> Exportar
        </Button>
      </div>
    </div>
  );
}

/** Scrollable transcript body: encryption pill, speaker turns, listening status. */
export function TranscriptChatBody({
  turns = TURNS,
  listening = true,
}: {
  turns?: TranscriptTurn[];
  listening?: boolean;
}) {
  return (
    <div className="space-y-4 p-4">
      <EncryptionPill>
        Consulta criptografada de ponta a ponta e segura (LGPD Compliant)
      </EncryptionPill>
      {turns.map((turn, i) => (
        <TranscriptChatRow key={i} turn={turn} />
      ))}
      {listening ? (
        <ListeningIndicator>
          Ouvindo diálogo e transcrevendo com IA Whisper em tempo real...
        </ListeningIndicator>
      ) : null}
    </div>
  );
}

/**
 * WIP example block: diarized consultation transcript as a chat stream —
 * one bubble per speaker turn with stamped paragraphs, panel header with
 * the live recording cluster, LGPD note and listening indicator.
 */
export function TranscriptChat() {
  return (
    <Card className="flex h-[560px] flex-col gap-0 overflow-hidden p-0">
      <TranscriptPanelHeader />
      <ScrollArea className="min-h-0 flex-1">
        <TranscriptChatBody />
      </ScrollArea>
      <div className="flex shrink-0 items-center justify-end gap-2 border-t px-3 py-2 text-[11px] text-muted-foreground">
        <Check className="size-3 text-success" /> Sincronizado
      </div>
    </Card>
  );
}

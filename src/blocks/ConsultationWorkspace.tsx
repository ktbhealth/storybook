import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import { Card } from "@ktbhealth/ui/components/card";
import { ScrollArea } from "@ktbhealth/ui/components/scroll-area";
import { Sheet, SheetContent, SheetTitle } from "@ktbhealth/ui/components/sheet";
import { ArrowLeft, ChevronRight, Cpu, History, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  AnamnesisPanelContent,
  AnamnesisPanelFooter,
  AnamnesisPanelHeader,
} from "./AnamnesisPanel";
import { TranscriptChatBody, TranscriptPanelHeader } from "./TranscriptChat";

/** Breadcrumb strip with consultation status pill and global actions. */
function WorkspaceHeader() {
  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b px-5">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="cursor-pointer transition-colors hover:text-foreground">Consultas</span>
        <ChevronRight className="size-2.5" />
        <span className="font-medium text-foreground">Luís Fernando Silva</span>
        <Badge
          variant="outline"
          className="ml-2 gap-1.5 border-success/25 bg-success/10 text-success"
        >
          <span className="size-1.5 rounded-full bg-success animate-pulse" />
          Em andamento
        </Badge>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-2 rounded-lg border bg-card px-2.5 py-1 text-[11px] text-muted-foreground">
          <Cpu className="size-3 text-primary" />
          IA Clínica Ativa
          <span className="size-1.5 rounded-full bg-success" />
        </span>
        <Button variant="outline" size="sm" className="h-7 gap-2 text-xs">
          <ArrowLeft className="size-3" /> Voltar
        </Button>
      </div>
    </header>
  );
}

/** Patient context strip: identity + record link + alert chip + drawer actions. */
function PatientContextBar({ onOpenAnamnesis }: { onOpenAnamnesis: () => void }) {
  return (
    <section className="flex shrink-0 items-center justify-between gap-3 rounded-xl border bg-card px-4 py-2 shadow-sm">
      <div className="flex items-center gap-3">
        <Avatar className="size-7 border border-primary/40 bg-primary/20">
          <AvatarFallback className="bg-primary/20 text-xs font-bold text-primary">
            LF
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-semibold">Luís Fernando Silva</span>
          <Dot />
          <span className="text-xs text-muted-foreground">42 anos</span>
          <Dot />
          <span className="cursor-pointer text-xs text-muted-foreground transition-colors hover:text-primary">
            Prontuário #4092
          </span>
          <Badge
            variant="outline"
            className="ml-1 border-warning/25 bg-warning/10 px-2 py-0 text-[10px] font-medium text-warning"
          >
            Hipertensão leve
          </Badge>
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs">
        <button
          type="button"
          className="flex items-center gap-1 text-[11px] font-medium text-primary transition-colors hover:opacity-80"
        >
          <History className="size-3" /> Ver Histórico
        </button>
        <Button
          size="sm"
          className="h-7 gap-1.5 border border-primary/40 bg-primary/15 text-[11px] font-semibold text-primary shadow-sm hover:bg-primary/25"
          variant="ghost"
          onClick={onOpenAnamnesis}
        >
          <Sparkles className="size-2.5" />
          Anamnese IA
          <span className="size-1.5 rounded-full bg-primary" />
        </Button>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="text-xs text-muted-foreground">•</span>;
}

/**
 * WIP example block: full consultation-capture workspace — fixed chrome,
 * patient context bar, live diarized transcript as chat turns, and the
 * AI anamnesis in a right-side drawer (open it from the patient bar).
 */
export function ConsultationWorkspace() {
  const [anamnesisOpen, setAnamnesisOpen] = useState(true);
  return (
    <div className="flex h-[720px] flex-col overflow-hidden rounded-xl border bg-background">
      <WorkspaceHeader />
      <div className="flex min-h-0 flex-1 flex-col gap-3 p-4">
        <PatientContextBar onOpenAnamnesis={() => setAnamnesisOpen(true)} />
        <Card className="flex min-h-0 flex-1 flex-col gap-0 overflow-hidden p-0">
          <TranscriptPanelHeader />
          <ScrollArea className="min-h-0 flex-1">
            <TranscriptChatBody />
          </ScrollArea>
        </Card>
      </div>

      <Sheet open={anamnesisOpen} onOpenChange={setAnamnesisOpen}>
        <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-[540px]">
          <SheetTitle className="sr-only">Anamnese Estruturada por IA</SheetTitle>
          <AnamnesisPanelHeader onClose={() => setAnamnesisOpen(false)} />
          <ScrollArea className="min-h-0 flex-1">
            <AnamnesisPanelContent />
          </ScrollArea>
          <AnamnesisPanelFooter />
        </SheetContent>
      </Sheet>
    </div>
  );
}

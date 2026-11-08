import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ktbhealth/ui/components/card";
import { Progress, ProgressLabel, ProgressValue } from "@ktbhealth/ui/components/progress";
import { Stethoscope } from "lucide-react";

/** WIP example block: AI-assisted consultation summary. */
export function ConsultationSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Stethoscope className="size-4" />
          </div>
          <div className="space-y-1">
            <CardTitle>Consultation summary</CardTitle>
            <CardDescription>Telemedicine visit · 12 Nov 2026 · 24 min</CardDescription>
          </div>
        </div>
        <CardAction>
          <Badge variant="secondary">Draft</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Patient reports intermittent headaches for three weeks, worse in the morning. No visual
          aura, no nausea. Blood pressure today: 138/86 mmHg. Plan: continue current medication,
          request fundoscopy, follow-up in 30 days.
        </p>
        <Progress value={72}>
          <ProgressLabel>Transcript coverage</ProgressLabel>
          <ProgressValue />
        </Progress>
        <div className="flex gap-2">
          <Button size="sm">Edit summary</Button>
          <Button size="sm" variant="outline">
            Export PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

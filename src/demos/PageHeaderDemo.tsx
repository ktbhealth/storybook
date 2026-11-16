import { PageHeader } from "@ktbhealth/ui/components/page-header";
import { Button } from "@ktbhealth/ui/components/button";
import { Stethoscope } from "lucide-react";
import { DemoStage } from "../shell";

export function PageHeaderDemo() {
  return (
    <DemoStage>
      <PageHeader
        eyebrow="Consultations"
        icon={<Stethoscope />}
        title="Today's schedule"
        description="4 appointments · 2 awaiting transcription review."
        actions={
          <>
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button size="sm">New consultation</Button>
          </>
        }
      />
      <PageHeader title="Minimal header" description="No icon, eyebrow, or actions." />
    </DemoStage>
  );
}

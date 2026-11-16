import { PageContainer } from "@ktbhealth/ui/components/page-container";
import { PageHeader } from "@ktbhealth/ui/components/page-header";
import { Button } from "@ktbhealth/ui/components/button";
import { Users } from "lucide-react";
import { DemoStage } from "../shell";

export function PageContainerDemo() {
  return (
    <DemoStage className="p-0">
      <PageContainer>
        <PageHeader
          eyebrow="Directory"
          icon={<Users />}
          title="Patients"
          description="All registered patients across clinics."
          actions={<Button size="sm">New patient</Button>}
        />
        <div className="rounded-lg border bg-card p-6 text-sm text-muted-foreground">
          Page content goes here.
        </div>
      </PageContainer>
    </DemoStage>
  );
}

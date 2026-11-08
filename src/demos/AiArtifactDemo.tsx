import {
  Artifact,
  ArtifactAction,
  ArtifactActions,
  ArtifactClose,
  ArtifactContent,
  ArtifactDescription,
  ArtifactHeader,
  ArtifactTitle,
} from "@ktbhealth/ui/components/ai-elements/artifact";
import { Button } from "@ktbhealth/ui/components/button";
import { Download, FileText, Share2 } from "lucide-react";
import { DemoStage } from "../shell";

export function AiArtifactDemo() {
  return (
    <DemoStage>
      <Artifact className="max-w-xl">
        <ArtifactHeader>
          <div>
            <ArtifactTitle>visit-summary.md</ArtifactTitle>
            <ArtifactDescription>Generated 2 minutes ago</ArtifactDescription>
          </div>
          <ArtifactActions>
            <ArtifactAction tooltip="Download" label="Download" icon={Download} />
            <ArtifactAction tooltip="Share" label="Share" icon={Share2} />
            <ArtifactClose aria-label="Close artifact" />
          </ArtifactActions>
        </ArtifactHeader>
        <ArtifactContent>
          <div className="rounded-lg border bg-muted/40 p-4 text-sm">
            <p className="font-medium">Visit summary — Maria Silva</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>BP 118/76, HR 72 — within target</li>
              <li>Reports improved sleep since medication change</li>
              <li>Follow-up scheduled in 4 weeks with labs</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline">
                <FileText className="size-3.5" /> Attach to chart
              </Button>
            </div>
          </div>
        </ArtifactContent>
      </Artifact>
    </DemoStage>
  );
}

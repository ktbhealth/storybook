import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@ktbhealth/ui/components/ai-elements/sources";
import { DemoStage } from "../shell";

export function AiSourcesDemo() {
  return (
    <DemoStage>
      <Sources className="max-w-md">
        <SourcesTrigger count={3}>Sources</SourcesTrigger>
        <SourcesContent>
          <ul className="grid gap-2">
            <li>
              <Source
                href="https://academic.oup.com/eurheartj"
                title="ESC hypertension guidelines 2024"
              >
                ESC/ESH hypertension guidelines — treatment targets and first-line therapy.
              </Source>
            </li>
            <li>
              <Source href="https://www.uptodate.com" title="UpToDate: resistant hypertension">
                Evaluation of patients with blood pressure above target on 3 agents.
              </Source>
            </li>
            <li>
              <Source href="https://www.who.int" title="WHO cardiovascular risk">
                WHO HEARTS technical package for primary care.
              </Source>
            </li>
          </ul>
        </SourcesContent>
      </Sources>
    </DemoStage>
  );
}

import {
  Snippet,
  SnippetAddon,
  SnippetCopyButton,
  SnippetInput,
  SnippetText,
} from "@ktbhealth/ui/components/ai-elements/snippet";
import { TerminalIcon } from "lucide-react";
import { DemoStage } from "../shell";

const COMMAND = "bunx ktb visit create --patient maria-silva --type video";

export function AiSnippetDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-lg gap-4">
        <Snippet code={COMMAND}>
          <SnippetAddon>
            <TerminalIcon className="size-4 text-muted-foreground" />
          </SnippetAddon>
          <SnippetInput />
          <SnippetCopyButton />
        </Snippet>
        <Snippet code="SELECT * FROM visits WHERE patient_id = 'ms-1';">
          <SnippetText />
          <SnippetCopyButton />
        </Snippet>
      </div>
    </DemoStage>
  );
}

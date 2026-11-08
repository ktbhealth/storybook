import {
  Terminal,
  TerminalActions,
  TerminalClearButton,
  TerminalContent,
  TerminalCopyButton,
  TerminalHeader,
  TerminalStatus,
  TerminalTitle,
} from "@ktbhealth/ui/components/ai-elements/terminal";
import { useState } from "react";
import { DemoStage } from "../shell";

const OUTPUT = `$ ktb visit list --today
Maria Silva    09:30  video   Dr. Ana Souza
João Ribeiro   10:15  in-person  Dr. Ana Souza
Ana Costa      11:00  video   Dr. Pedro Lima

3 visits scheduled`;

export function AiTerminalDemo() {
  const [output, setOutput] = useState(OUTPUT);
  return (
    <DemoStage>
      <Terminal output={output} onClear={() => setOutput("")} className="max-w-2xl">
        <TerminalHeader>
          <TerminalTitle>ktb-cli</TerminalTitle>
          <div className="flex items-center gap-1">
            <TerminalStatus />
            <TerminalActions>
              <TerminalCopyButton />
              <TerminalClearButton />
            </TerminalActions>
          </div>
        </TerminalHeader>
        <TerminalContent />
      </Terminal>
    </DemoStage>
  );
}

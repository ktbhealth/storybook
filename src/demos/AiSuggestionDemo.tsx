import { Suggestion, Suggestions } from "@ktbhealth/ui/components/ai-elements/suggestion";
import { useState } from "react";
import { DemoStage } from "../shell";

const SUGGESTIONS = [
  "Summarize today's appointments",
  "Flag abnormal lab results",
  "Draft a follow-up message",
  "Compare BP trend vs baseline",
];

export function AiSuggestionDemo() {
  const [picked, setPicked] = useState("");
  return (
    <DemoStage>
      <div className="grid max-w-xl gap-4">
        <Suggestions>
          {SUGGESTIONS.map((s) => (
            <Suggestion key={s} suggestion={s} onClick={setPicked} />
          ))}
        </Suggestions>
        {picked ? <p className="text-xs text-muted-foreground">Selected: {picked}</p> : null}
      </div>
    </DemoStage>
  );
}

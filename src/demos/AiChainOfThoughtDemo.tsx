import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtSearchResult,
  ChainOfThoughtSearchResults,
  ChainOfThoughtStep,
} from "@ktbhealth/ui/components/ai-elements/chain-of-thought";
import { SearchIcon } from "lucide-react";
import { DemoStage } from "../shell";

export function AiChainOfThoughtDemo() {
  return (
    <DemoStage>
      <ChainOfThought defaultOpen className="max-w-xl">
        <ChainOfThoughtHeader>Reasoning about lab trends</ChainOfThoughtHeader>
        <ChainOfThoughtContent>
          <ChainOfThoughtStep
            icon={SearchIcon}
            label="Searched clinical references"
            description="Searched 3 clinical references"
            status="complete"
          >
            <ChainOfThoughtSearchResults>
              <ChainOfThoughtSearchResult>ESC hypertension 2024</ChainOfThoughtSearchResult>
              <ChainOfThoughtSearchResult>UpToDate: BP targets</ChainOfThoughtSearchResult>
            </ChainOfThoughtSearchResults>
          </ChainOfThoughtStep>
          <ChainOfThoughtStep
            label="Compared systolic trend vs. baseline"
            description="Down 11 mmHg over 6 weeks."
            status="complete"
          >
            Down 11 mmHg over 6 weeks.
          </ChainOfThoughtStep>
          <ChainOfThoughtStep label="Drafting recommendation" status="active">
            Suggest continuing current dose; recheck in 4 weeks.
          </ChainOfThoughtStep>
        </ChainOfThoughtContent>
      </ChainOfThought>
    </DemoStage>
  );
}

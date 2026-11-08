import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorSeparator,
  ModelSelectorShortcut,
  ModelSelectorTrigger,
} from "@ktbhealth/ui/components/ai-elements/model-selector";
import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

export function AiModelSelectorDemo() {
  return (
    <DemoStage>
      <ModelSelector>
        <ModelSelectorTrigger
          render={
            <Button variant="outline" size="sm">
              <ModelSelectorLogoGroup>
                <ModelSelectorLogo provider="openai" />
              </ModelSelectorLogoGroup>
              ktb-clinical-2
            </Button>
          }
        />
        <ModelSelectorContent>
          <ModelSelectorInput placeholder="Search models…" />
          <ModelSelectorList>
            <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
            <ModelSelectorGroup heading="Clinical">
              <ModelSelectorItem value="ktb-clinical-2">
                <ModelSelectorLogo provider="openai" />
                <ModelSelectorName>ktb-clinical-2</ModelSelectorName>
                <ModelSelectorShortcut>⌘1</ModelSelectorShortcut>
              </ModelSelectorItem>
              <ModelSelectorItem value="ktb-clinical-fast">
                <ModelSelectorLogo provider="openai" />
                <ModelSelectorName>ktb-clinical-fast</ModelSelectorName>
                <ModelSelectorShortcut>⌘2</ModelSelectorShortcut>
              </ModelSelectorItem>
            </ModelSelectorGroup>
            <ModelSelectorSeparator />
            <ModelSelectorGroup heading="General">
              <ModelSelectorItem value="ktb-general">
                <ModelSelectorLogo provider="anthropic" />
                <ModelSelectorName>ktb-general</ModelSelectorName>
              </ModelSelectorItem>
            </ModelSelectorGroup>
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </DemoStage>
  );
}

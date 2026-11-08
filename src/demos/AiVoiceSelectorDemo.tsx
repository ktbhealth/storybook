import {
  VoiceSelector,
  VoiceSelectorAccent,
  VoiceSelectorAge,
  VoiceSelectorAttributes,
  VoiceSelectorBullet,
  VoiceSelectorContent,
  VoiceSelectorDescription,
  VoiceSelectorDialog,
  VoiceSelectorEmpty,
  VoiceSelectorGender,
  VoiceSelectorGroup,
  VoiceSelectorInput,
  VoiceSelectorItem,
  VoiceSelectorList,
  VoiceSelectorName,
  VoiceSelectorPreview,
  VoiceSelectorSeparator,
  VoiceSelectorTrigger,
} from "@ktbhealth/ui/components/ai-elements/voice-selector";
import { Button } from "@ktbhealth/ui/components/button";
import { MicIcon } from "lucide-react";
import { DemoStage } from "../shell";

export function AiVoiceSelectorDemo() {
  return (
    <DemoStage>
      <VoiceSelector>
        <VoiceSelectorTrigger
          render={
            <Button variant="outline" size="sm">
              <MicIcon className="size-4" />
              Choose voice
            </Button>
          }
        />
        <VoiceSelectorContent>
          <VoiceSelectorDialog>
            <VoiceSelectorInput placeholder="Search voices…" />
            <VoiceSelectorList>
              <VoiceSelectorEmpty>No voices found.</VoiceSelectorEmpty>
              <VoiceSelectorGroup heading="Recommended">
                <VoiceSelectorItem value="aria">
                  <VoiceSelectorName>Aria</VoiceSelectorName>
                  <VoiceSelectorGender value="female" />
                  <VoiceSelectorAccent value="american" />
                  <VoiceSelectorAge>Young</VoiceSelectorAge>
                  <VoiceSelectorDescription>Warm, conversational</VoiceSelectorDescription>
                  <VoiceSelectorAttributes>
                    <VoiceSelectorBullet />
                    <span>Calm</span>
                    <VoiceSelectorBullet />
                    <span>Clear</span>
                  </VoiceSelectorAttributes>
                  <VoiceSelectorPreview />
                </VoiceSelectorItem>
                <VoiceSelectorItem value="roger">
                  <VoiceSelectorName>Roger</VoiceSelectorName>
                  <VoiceSelectorGender value="male" />
                  <VoiceSelectorAccent value="american" />
                  <VoiceSelectorAge>Middle-aged</VoiceSelectorAge>
                  <VoiceSelectorDescription>Deep, authoritative</VoiceSelectorDescription>
                  <VoiceSelectorAttributes>
                    <VoiceSelectorBullet />
                    <span>Confident</span>
                  </VoiceSelectorAttributes>
                  <VoiceSelectorPreview />
                </VoiceSelectorItem>
              </VoiceSelectorGroup>
              <VoiceSelectorSeparator />
              <VoiceSelectorGroup heading="Portuguese">
                <VoiceSelectorItem value="antonio">
                  <VoiceSelectorName>Antônio</VoiceSelectorName>
                  <VoiceSelectorGender value="male" />
                  <VoiceSelectorAccent value="brazilian" />
                  <VoiceSelectorDescription>Natural pt-BR</VoiceSelectorDescription>
                  <VoiceSelectorPreview />
                </VoiceSelectorItem>
              </VoiceSelectorGroup>
            </VoiceSelectorList>
          </VoiceSelectorDialog>
        </VoiceSelectorContent>
      </VoiceSelector>
    </DemoStage>
  );
}

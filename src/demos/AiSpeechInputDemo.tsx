import { SpeechInput } from "@ktbhealth/ui/components/ai-elements/speech-input";
import { useState } from "react";
import { DemoStage } from "../shell";

export function AiSpeechInputDemo() {
  const [text, setText] = useState("");
  return (
    <DemoStage>
      <div className="grid max-w-md gap-3">
        <div className="flex items-center gap-3">
          <SpeechInput
            onTranscriptionChange={setText}
            onAudioRecorded={async () => "transcribed via service"}
            aria-label="Voice input"
          />
          <span className="text-xs text-muted-foreground">
            {text ? `Heard: ${text}` : "Click to dictate (uses Web Speech API or MediaRecorder)."}
          </span>
        </div>
      </div>
    </DemoStage>
  );
}

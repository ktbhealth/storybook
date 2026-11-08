import {
  Transcription,
  TranscriptionSegment,
} from "@ktbhealth/ui/components/ai-elements/transcription";
import { DemoStage } from "../shell";

const SEGMENTS = [
  { text: "Good morning,", startSecond: 0, endSecond: 0.8 },
  { text: "how are you feeling today?", startSecond: 0.8, endSecond: 2.1 },
  { text: "Much better —", startSecond: 2.4, endSecond: 3.0 },
  { text: "the new medication is helping.", startSecond: 3.0, endSecond: 5.2 },
];

export function AiTranscriptionDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-lg gap-6">
        <Transcription segments={SEGMENTS} currentTime={3.4}>
          {(segment, index) => <TranscriptionSegment key={index} segment={segment} index={index} />}
        </Transcription>
        <Transcription segments={SEGMENTS}>
          {(segment, index) => <TranscriptionSegment key={index} segment={segment} index={index} />}
        </Transcription>
      </div>
    </DemoStage>
  );
}

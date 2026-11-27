import { TranscriptReviewInPerson } from "../blocks/TranscriptReviewBlocks";
import { DemoStage } from "../shell";

export function TranscriptReviewDemo() {
  return (
    <DemoStage className="p-0">
      <TranscriptReviewInPerson />
    </DemoStage>
  );
}

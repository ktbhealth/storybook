import {
  Attachment,
  AttachmentInfo,
  AttachmentPreview,
  AttachmentRemove,
  Attachments,
} from "@ktbhealth/ui/components/ai-elements/attachments";
import { DemoStage } from "../shell";

const FILES = [
  { id: "1", type: "file" as const, mediaType: "image/png", filename: "ecg-strip.png", url: "" },
  {
    id: "2",
    type: "file" as const,
    mediaType: "application/pdf",
    filename: "lab-results.pdf",
    url: "",
  },
  {
    id: "3",
    type: "source-document" as const,
    sourceId: "s1",
    mediaType: "text/html",
    title: "WHO hypertension guideline",
  },
  {
    id: "4",
    type: "file" as const,
    mediaType: "audio/mpeg",
    filename: "consultation.mp3",
    url: "",
  },
];

export function AiAttachmentsDemo() {
  return (
    <DemoStage>
      <div className="grid gap-6">
        <Attachments variant="grid">
          {FILES.map((data) => (
            <Attachment key={data.id} data={data} onRemove={() => {}}>
              <AttachmentPreview />
              <AttachmentInfo />
              <AttachmentRemove />
            </Attachment>
          ))}
        </Attachments>
        <Attachments variant="inline">
          {FILES.slice(0, 3).map((data) => (
            <Attachment key={data.id} data={data}>
              <AttachmentPreview />
              <AttachmentInfo />
            </Attachment>
          ))}
        </Attachments>
        <Attachments variant="list">
          {FILES.slice(0, 2).map((data) => (
            <Attachment key={data.id} data={data}>
              <AttachmentPreview />
              <AttachmentInfo />
              <AttachmentRemove />
            </Attachment>
          ))}
        </Attachments>
      </div>
    </DemoStage>
  );
}

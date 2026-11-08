import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@ktbhealth/ui/components/attachment";
import { FileText, ImageIcon } from "lucide-react";
import { DemoStage } from "../shell";

export function AttachmentDemo() {
  return (
    <DemoStage>
      <div className="grid gap-6">
        <div className="flex flex-wrap gap-3">
          <Attachment state="done">
            <AttachmentMedia>
              <FileText className="size-4" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>lab-results.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB · uploaded</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment state="uploading">
            <AttachmentMedia>
              <ImageIcon className="size-4" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>ecg-strip.png</AttachmentTitle>
              <AttachmentDescription>Uploading… 64%</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment state="error">
            <AttachmentMedia>
              <FileText className="size-4" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>insurance-card.jpg</AttachmentTitle>
              <AttachmentDescription>Upload failed</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove">×</AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </div>
        <AttachmentGroup>
          {["vitals-log.csv", "referral.pdf", "photo-id.png"].map((f) => (
            <Attachment key={f} size="sm">
              <AttachmentMedia>
                <FileText className="size-3.5" />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>{f}</AttachmentTitle>
                <AttachmentDescription>Done</AttachmentDescription>
              </AttachmentContent>
              <AttachmentTrigger aria-label={`Open ${f}`} />
            </Attachment>
          ))}
        </AttachmentGroup>
      </div>
    </DemoStage>
  );
}

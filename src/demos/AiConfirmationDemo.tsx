import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationAction,
  ConfirmationActions,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@ktbhealth/ui/components/ai-elements/confirmation";
import { DemoStage } from "../shell";

export function AiConfirmationDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-6">
        <Confirmation state="approval-requested" approval={{ id: "appr-1" }}>
          <ConfirmationTitle>
            The agent wants to update the patient&apos;s medication list.
          </ConfirmationTitle>
          <ConfirmationRequest>
            <ConfirmationActions>
              <ConfirmationAction variant="outline" size="sm">
                Reject
              </ConfirmationAction>
              <ConfirmationAction size="sm">Approve</ConfirmationAction>
            </ConfirmationActions>
          </ConfirmationRequest>
          <ConfirmationAccepted>Approved — change applied.</ConfirmationAccepted>
          <ConfirmationRejected>Rejected — change skipped.</ConfirmationRejected>
        </Confirmation>
        <Confirmation state="approval-responded" approval={{ id: "appr-2", approved: true }}>
          <ConfirmationTitle>Delete draft visit note?</ConfirmationTitle>
          <ConfirmationAccepted>Deleted.</ConfirmationAccepted>
          <ConfirmationRejected>Kept.</ConfirmationRejected>
        </Confirmation>
      </div>
    </DemoStage>
  );
}

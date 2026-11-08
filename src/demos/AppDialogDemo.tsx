import { Button } from "@ktbhealth/ui/components/button";
import { Dialog as AppDialog } from "@ktbhealth/ui/components/app-dialog";
import { useState } from "react";
import { DemoStage } from "../shell";

export function AppDialogDemo() {
  const [open, setOpen] = useState(false);
  const [tone, setTone] = useState<"success" | "error">("success");
  return (
    <DemoStage>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() => {
            setTone("success");
            setOpen(true);
          }}
        >
          Success dialog
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            setTone("error");
            setOpen(true);
          }}
        >
          Error dialog
        </Button>
      </div>
      <AppDialog
        open={open}
        onClose={() => setOpen(false)}
        tone={tone}
        title={tone === "success" ? "Visit confirmed" : "Payment failed"}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
              Dismiss
            </Button>
            <Button size="sm" onClick={() => setOpen(false)}>
              {tone === "success" ? "Done" : "Retry"}
            </Button>
          </>
        }
      >
        {tone === "success"
          ? "Your follow-up with Dr. Ana Souza is booked for Thu 20 Nov at 10:00. A calendar invite was sent to your email."
          : "We could not process the card on file. Update your payment method to keep the subscription active."}
      </AppDialog>
    </DemoStage>
  );
}

import { useState } from "react";
import { Button } from "@ktbhealth/ui/components/button";
import { ConfirmDialog } from "@ktbhealth/ui/components/confirm-dialog";
import { DemoStage } from "../shell";

export function ConfirmDialogDemo() {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(0);
  return (
    <DemoStage>
      <div className="grid gap-3">
        <div>
          <Button onClick={() => setOpen(true)}>Delete patient record</Button>
        </div>
        <p className="text-sm text-muted-foreground">Confirmed {confirmed} time(s).</p>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Delete patient record?"
          description="This action cannot be undone. The consultation history will be archived."
          confirmLabel="Delete"
          variant="destructive"
          onConfirm={() => setConfirmed((n) => n + 1)}
        />
      </div>
    </DemoStage>
  );
}

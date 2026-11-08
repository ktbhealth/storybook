import { useState } from "react";
import { Button } from "@ktbhealth/ui/components/button";
import { Toast, type ToastData } from "@ktbhealth/ui/components/app-toast";
import { DemoStage } from "../shell";

export function AppToastDemo() {
  const [toast, setToast] = useState<ToastData | null>(null);
  return (
    <DemoStage>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() => setToast({ id: Date.now(), text: "Appointment confirmed for Tue 14:00" })}
        >
          Show confirmation toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setToast({
              id: Date.now(),
              text: "Visit summary exported",
              actionLabel: "Undo",
              onAction: () => setToast(null),
            })
          }
        >
          Show toast with action
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        AppToast renders a fixed bottom-center popup; it is controlled by the parent via toast data.
      </p>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </DemoStage>
  );
}

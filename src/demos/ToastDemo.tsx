import { Button } from "@ktbhealth/ui/components/button";
import { Toaster, toast } from "@ktbhealth/ui/components/toast";
import { DemoStage } from "../shell";

export function ToastDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Appointment confirmed",
              description: "Video visit with Dr. Ana Souza on Thu 20 Nov at 10:00.",
            })
          }
        >
          Show toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Lab results ready",
              description: "Blood panel for Maria Silva is available.",
              type: "success",
            })
          }
        >
          Success toast
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.add({
              title: "Sync failed",
              description: "Could not reach the records server. Retry?",
              type: "error",
            })
          }
        >
          Error toast
        </Button>
      </div>
      <Toaster />
    </DemoStage>
  );
}

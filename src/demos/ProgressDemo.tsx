import { Progress, ProgressLabel, ProgressValue } from "@ktbhealth/ui/components/progress";
import { DemoStage } from "../shell";

export function ProgressDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-6">
        <Progress value={35}>
          <ProgressLabel>Intake form</ProgressLabel>
          <ProgressValue />
        </Progress>
        <Progress value={72}>
          <ProgressLabel>Care plan completion</ProgressLabel>
          <ProgressValue />
        </Progress>
        <Progress value={100}>
          <ProgressLabel>Onboarding</ProgressLabel>
          <ProgressValue />
        </Progress>
        <Progress value={12}>
          <ProgressLabel>Indeterminate-ish low value</ProgressLabel>
        </Progress>
      </div>
    </DemoStage>
  );
}

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@ktbhealth/ui/components/alert";
import { Button } from "@ktbhealth/ui/components/button";
import { CircleCheck, Info, TriangleAlert } from "lucide-react";
import { DemoStage } from "../shell";

export function AlertDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-lg gap-4">
        <Alert>
          <Info />
          <AlertTitle>New intake form submitted</AlertTitle>
          <AlertDescription>
            Maria Rodrigues completed her pre-visit questionnaire.
          </AlertDescription>
        </Alert>
        <Alert>
          <CircleCheck />
          <AlertTitle>Lab results available</AlertTitle>
          <AlertDescription>Hemogram from 10 Nov is ready for review.</AlertDescription>
          <AlertAction>
            <Button size="sm" variant="outline">
              View
            </Button>
          </AlertAction>
        </Alert>
        <Alert variant="destructive">
          <TriangleAlert />
          <AlertTitle>Allergy interaction detected</AlertTitle>
          <AlertDescription>
            Prescribed medication conflicts with a recorded allergy.
          </AlertDescription>
        </Alert>
      </div>
    </DemoStage>
  );
}

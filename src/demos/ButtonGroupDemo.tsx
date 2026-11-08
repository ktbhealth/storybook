import { Button } from "@ktbhealth/ui/components/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@ktbhealth/ui/components/button-group";
import { DemoStage } from "../shell";

export function ButtonGroupDemo() {
  return (
    <DemoStage>
      <div className="flex flex-col gap-6">
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button>Month</Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText>Follow-up in</ButtonGroupText>
          <Button variant="outline" size="icon" aria-label="Decrease">
            −
          </Button>
          <ButtonGroupSeparator />
          <Button variant="outline" size="icon" aria-label="Increase">
            +
          </Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical" className="w-40">
          <Button variant="ghost" className="justify-start">
            View record
          </Button>
          <Button variant="ghost" className="justify-start">
            Edit details
          </Button>
          <Button variant="ghost" className="justify-start text-destructive">
            Archive
          </Button>
        </ButtonGroup>
      </div>
    </DemoStage>
  );
}

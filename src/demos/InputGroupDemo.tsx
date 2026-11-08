import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@ktbhealth/ui/components/input-group";
import { Button } from "@ktbhealth/ui/components/button";
import { DemoStage } from "../shell";

export function InputGroupDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-sm gap-4">
        <InputGroup>
          <InputGroupAddon>
            <Search className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search patients…" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" variant="ghost" aria-label="Clear">
              ×
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="clinic.ktbhealth.com" />
        </InputGroup>
        <InputGroup>
          <InputGroupTextarea placeholder="Reason for visit…" rows={3} />
          <InputGroupAddon align="block-end">
            <Button size="sm" variant="secondary">
              Attach file
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </DemoStage>
  );
}

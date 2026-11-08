import { Button } from "@ktbhealth/ui/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@ktbhealth/ui/components/collapsible";
import { ChevronDown } from "lucide-react";
import { DemoStage } from "../shell";

export function CollapsibleDemo() {
  return (
    <DemoStage>
      <Collapsible className="max-w-md">
        <CollapsibleTrigger
          render={
            <Button variant="outline" className="w-full justify-between">
              Visit summary — Dr. Ana Souza
              <ChevronDown className="size-4" />
            </Button>
          }
        />
        <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
          BP 118/76, HR 72. Patient reports improved sleep; continue current medication. Follow-up
          in 4 weeks with updated labs.
        </CollapsibleContent>
      </Collapsible>
    </DemoStage>
  );
}

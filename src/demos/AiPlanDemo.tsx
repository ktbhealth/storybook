import {
  Plan,
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanFooter,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@ktbhealth/ui/components/ai-elements/plan";
import { Button } from "@ktbhealth/ui/components/button";
import { CheckCircle2Icon, CircleIcon } from "lucide-react";
import { DemoStage } from "../shell";

const STEPS = [
  { label: "Fetch patient chart", done: true },
  { label: "Compare vitals trend", done: true },
  { label: "Draft follow-up note", done: false },
  { label: "Send summary to patient", done: false },
];

export function AiPlanDemo() {
  return (
    <DemoStage>
      <Plan defaultOpen className="max-w-md">
        <PlanHeader>
          <div>
            <PlanTitle>Follow-up plan — Maria Silva</PlanTitle>
            <PlanDescription>2 of 4 steps completed</PlanDescription>
          </div>
          <PlanAction>
            <PlanTrigger aria-label="Toggle plan" />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <ul className="grid gap-2 text-sm">
            {STEPS.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                {s.done ? (
                  <CheckCircle2Icon className="size-4 text-primary" />
                ) : (
                  <CircleIcon className="size-4 text-muted-foreground" />
                )}
                <span className={s.done ? "text-muted-foreground line-through" : ""}>
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </PlanContent>
        <PlanFooter>
          <Button size="sm" variant="outline">
            Approve remaining steps
          </Button>
        </PlanFooter>
      </Plan>
    </DemoStage>
  );
}

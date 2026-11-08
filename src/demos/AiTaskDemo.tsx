import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@ktbhealth/ui/components/ai-elements/task";
import { DemoStage } from "../shell";

export function AiTaskDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-4">
        <Task defaultOpen>
          <TaskTrigger title="Analyzed patient chart" />
          <TaskContent>
            <TaskItem>Read vitals history</TaskItem>
            <TaskItemFile>vitals-log.csv</TaskItemFile>
            <TaskItem>Compared 6-week BP trend</TaskItem>
            <TaskItemFile>trend-report.json</TaskItemFile>
          </TaskContent>
        </Task>
        <Task>
          <TaskTrigger title="Drafted follow-up note" />
          <TaskContent>
            <TaskItem>Generated summary</TaskItem>
            <TaskItem>Queued for doctor review</TaskItem>
          </TaskContent>
        </Task>
      </div>
    </DemoStage>
  );
}

import {
  Question,
  QuestionActions,
  QuestionDescription,
  QuestionInput,
  QuestionOption,
  QuestionOptions,
  QuestionPrompt,
  QuestionSubmit,
} from "@ktbhealth/ui/components/ai-elements/question";
import { useState } from "react";
import { DemoStage } from "../shell";

export function AiQuestionDemo() {
  const [answered, setAnswered] = useState<string>("");
  return (
    <DemoStage>
      <div className="grid max-w-md gap-4">
        <Question
          selectionMode="single"
          onSubmit={(response) => setAnswered(response.selectedValues.join(", ") || "(skipped)")}
        >
          <QuestionPrompt>How would you rate your sleep this week?</QuestionPrompt>
          <QuestionDescription>Pick the closest match.</QuestionDescription>
          <QuestionOptions>
            <QuestionOption value="poor">Poor</QuestionOption>
            <QuestionOption value="fair">Fair</QuestionOption>
            <QuestionOption value="good">Good</QuestionOption>
            <QuestionOption value="great">Great</QuestionOption>
          </QuestionOptions>
          <QuestionInput placeholder="Optional comment…" />
          <QuestionActions>
            <QuestionSubmit>Submit answer</QuestionSubmit>
          </QuestionActions>
        </Question>
        {answered ? <p className="text-xs text-muted-foreground">Answered: {answered}</p> : null}
      </div>
    </DemoStage>
  );
}

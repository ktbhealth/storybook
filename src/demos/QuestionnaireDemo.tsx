import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@ktbhealth/ui/components/questionnaire";
import { DemoStage } from "../shell";

const ITEMS = [
  {
    name: "symptoms",
    required: true,
    choices: [
      { value: "fatigue" },
      { value: "headache" },
      { value: "dizziness" },
      { value: "none" },
    ],
  },
  {
    name: "duration",
    required: true,
    choices: [{ value: "days", disabled: false }, { value: "weeks" }, { value: "months" }],
  },
  {
    name: "notes",
    choices: [],
  },
];

export function QuestionnaireDemo() {
  return (
    <DemoStage>
      <Questionnaire items={ITEMS} className="max-w-md">
        <QuestionnaireProgress />
        <QuestionnaireItem name="symptoms" multiple>
          <QuestionnaireTitle>Which symptoms are you experiencing?</QuestionnaireTitle>
          <QuestionnaireDescription>Select all that apply.</QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="fatigue">
              Fatigue
              <QuestionnaireChoiceDescription>
                Low energy during the day
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="headache">
              Headache
              <QuestionnaireChoiceDescription>
                Recurring or persistent
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="dizziness">
              Dizziness
              <QuestionnaireChoiceDescription>
                When standing up quickly
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="none">None of the above</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="duration">
          <QuestionnaireTitle>How long have you had these symptoms?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="days">A few days</QuestionnaireChoice>
            <QuestionnaireChoice value="weeks">A few weeks</QuestionnaireChoice>
            <QuestionnaireChoice value="months">Several months</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="notes">
          <QuestionnaireTitle>Anything else to share?</QuestionnaireTitle>
          <QuestionnaireDescription>Optional — helps the doctor prepare.</QuestionnaireDescription>
          <QuestionnaireInput placeholder="e.g. started after a long trip…" />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Submit</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </DemoStage>
  );
}

import {
  EnvironmentVariable,
  EnvironmentVariableCopyButton,
  EnvironmentVariableGroup,
  EnvironmentVariables,
  EnvironmentVariablesContent,
  EnvironmentVariablesHeader,
  EnvironmentVariablesTitle,
  EnvironmentVariablesToggle,
} from "@ktbhealth/ui/components/ai-elements/environment-variables";
import { DemoStage } from "../shell";

export function AiEnvironmentVariablesDemo() {
  return (
    <DemoStage>
      <EnvironmentVariables defaultShowValues className="max-w-md">
        <EnvironmentVariablesHeader>
          <EnvironmentVariablesTitle>.env.local</EnvironmentVariablesTitle>
          <EnvironmentVariablesToggle />
        </EnvironmentVariablesHeader>
        <EnvironmentVariablesContent>
          <EnvironmentVariableGroup>
            <EnvironmentVariable name="OPENAI_API_KEY" value="sk-••••••••••••">
              <EnvironmentVariableCopyButton />
            </EnvironmentVariable>
            <EnvironmentVariable name="APP_URL" value="https://app.ktbhealth.com">
              <EnvironmentVariableCopyButton copyFormat="export" />
            </EnvironmentVariable>
            <EnvironmentVariable name="FEATURE_FLAGS" value="triage-v2,ai-summary">
              <EnvironmentVariableCopyButton copyFormat="export" />
            </EnvironmentVariable>
          </EnvironmentVariableGroup>
        </EnvironmentVariablesContent>
      </EnvironmentVariables>
    </DemoStage>
  );
}

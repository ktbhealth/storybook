import {
  Test,
  TestError,
  TestErrorMessage,
  TestErrorStack,
  TestResults,
  TestResultsContent,
  TestResultsDuration,
  TestResultsHeader,
  TestResultsProgress,
  TestResultsSummary,
  TestSuite,
  TestSuiteContent,
  TestSuiteName,
  TestSuiteStats,
} from "@ktbhealth/ui/components/ai-elements/test-results";
import { DemoStage } from "../shell";

export function AiTestResultsDemo() {
  return (
    <DemoStage>
      <TestResults
        summary={{ passed: 18, failed: 2, skipped: 1, total: 21, duration: 4.2 }}
        className="max-w-2xl"
      >
        <TestResultsHeader>
          <TestResultsSummary />
          <TestResultsDuration />
        </TestResultsHeader>
        <TestResultsProgress className="px-4" />
        <TestResultsContent>
          <TestSuite name="vitals.test.ts" status="failed">
            <TestSuiteName />
            <TestSuiteStats />
            <TestSuiteContent>
              <Test name="parses systolic/diastolic" status="passed" duration={12} />
              <Test name="rejects malformed reading" status="passed" duration={8} />
              <Test name="handles missing diastolic" status="failed" duration={21}>
                <TestError>
                  <TestErrorMessage>expected 76, received undefined</TestErrorMessage>
                  <TestErrorStack>{`at parseVitals (vitals.ts:12:4)`}</TestErrorStack>
                </TestError>
              </Test>
              <Test name="clamps out-of-range values" status="skipped" />
            </TestSuiteContent>
          </TestSuite>
          <TestSuite name="patient-card.test.tsx" status="passed">
            <TestSuiteName />
            <TestSuiteStats />
            <TestSuiteContent>
              <Test name="renders name and next visit" status="passed" duration={34} />
              <Test name="shows adherence badge" status="passed" duration={19} />
            </TestSuiteContent>
          </TestSuite>
        </TestResultsContent>
      </TestResults>
    </DemoStage>
  );
}

import {
  StackTrace,
  StackTraceActions,
  StackTraceContent,
  StackTraceCopyButton,
  StackTraceError,
  StackTraceErrorMessage,
  StackTraceErrorType,
  StackTraceExpandButton,
  StackTraceFrames,
  StackTraceHeader,
} from "@ktbhealth/ui/components/ai-elements/stack-trace";
import { DemoStage } from "../shell";

const TRACE = `TypeError: Cannot read properties of undefined (reading 'systolic')
    at parseVitals (/app/src/lib/vitals.ts:12:18)
    at VisitCard (/app/src/components/VisitCard.tsx:44:9)
    at renderWithHooks (/app/node_modules/react-dom/cjs/react-dom.development.js:14985:18)
    at processChild (/app/node_modules/react-dom/cjs/react-dom.development.js:18396:12)`;

export function AiStackTraceDemo() {
  return (
    <DemoStage>
      <StackTrace trace={TRACE} defaultOpen className="max-w-2xl">
        <StackTraceHeader>
          <StackTraceError>
            <StackTraceErrorType />
            <StackTraceErrorMessage />
          </StackTraceError>
          <StackTraceActions>
            <StackTraceExpandButton />
            <StackTraceCopyButton />
          </StackTraceActions>
        </StackTraceHeader>
        <StackTraceContent>
          <StackTraceFrames />
        </StackTraceContent>
      </StackTrace>
    </DemoStage>
  );
}

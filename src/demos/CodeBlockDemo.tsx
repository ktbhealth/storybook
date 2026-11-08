import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFooter,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@ktbhealth/ui/components/code-block";
import { DemoStage } from "../shell";

const TS_SNIPPET = `export function parseVitals(raw: string) {
  const [sys, dia] = raw.split("/").map(Number);
  if (!sys || !dia) throw new Error("invalid reading");
  return { systolic: sys, diastolic: dia };
}`;

export function CodeBlockDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-xl gap-6">
        <CodeBlock>
          <CodeBlockHeader>
            <CodeBlockTitle>vitals.ts</CodeBlockTitle>
            <CodeBlockActions>
              <CodeBlockCopyButton value={TS_SNIPPET} />
            </CodeBlockActions>
          </CodeBlockHeader>
          <CodeBlockContent lineNumbers>{TS_SNIPPET}</CodeBlockContent>
          <CodeBlockFooter>TypeScript · 5 lines</CodeBlockFooter>
        </CodeBlock>
        <CodeBlock variant="destructive">
          <CodeBlockHeader>
            <CodeBlockTitle>error.log</CodeBlockTitle>
          </CodeBlockHeader>
          <CodeBlockContent>{`Error: connection refused
  at fetchVitals (vitals.ts:12:4)`}</CodeBlockContent>
        </CodeBlock>
      </div>
    </DemoStage>
  );
}

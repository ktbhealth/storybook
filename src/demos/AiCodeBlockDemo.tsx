import {
  CodeBlockActions,
  CodeBlockContainer,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockLanguageSelector,
  CodeBlockLanguageSelectorContent,
  CodeBlockLanguageSelectorItem,
  CodeBlockLanguageSelectorTrigger,
  CodeBlockLanguageSelectorValue,
  CodeBlockTitle,
} from "@ktbhealth/ui/components/ai-elements/code-block";
import { DemoStage } from "../shell";

const CODE = `def greet(name: str) -> str:
    return f"Hello, {name}! Welcome to KTB Health."`;

export function AiCodeBlockDemo() {
  return (
    <DemoStage>
      <CodeBlockContainer className="max-w-lg" language="python">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <CodeBlockFilename>greet.py</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockLanguageSelector
              items={{ python: "Python", typescript: "TypeScript" }}
              defaultValue="python"
            >
              <CodeBlockLanguageSelectorTrigger>
                <CodeBlockLanguageSelectorValue />
              </CodeBlockLanguageSelectorTrigger>
              <CodeBlockLanguageSelectorContent>
                <CodeBlockLanguageSelectorItem value="python">Python</CodeBlockLanguageSelectorItem>
                <CodeBlockLanguageSelectorItem value="typescript">
                  TypeScript
                </CodeBlockLanguageSelectorItem>
              </CodeBlockLanguageSelectorContent>
            </CodeBlockLanguageSelector>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent code={CODE} language="python" />
      </CodeBlockContainer>
    </DemoStage>
  );
}

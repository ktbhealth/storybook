import {
  FileTree,
  FileTreeFile,
  FileTreeFolder,
} from "@ktbhealth/ui/components/ai-elements/file-tree";
import { DemoStage } from "../shell";

export function AiFileTreeDemo() {
  return (
    <DemoStage>
      <FileTree
        defaultExpanded={new Set(["src", "src/components"])}
        selectedPath="src/components/VitalsChart.tsx"
        className="max-w-xs rounded-lg border p-3 text-sm"
      >
        <FileTreeFolder path="src" name="src">
          <FileTreeFolder path="src/components" name="components">
            <FileTreeFile path="src/components/VitalsChart.tsx" name="VitalsChart.tsx" />
            <FileTreeFile path="src/components/PatientCard.tsx" name="PatientCard.tsx" />
          </FileTreeFolder>
          <FileTreeFolder path="src/lib" name="lib">
            <FileTreeFile path="src/lib/vitals.ts" name="vitals.ts" />
          </FileTreeFolder>
          <FileTreeFile path="src/main.tsx" name="main.tsx" />
        </FileTreeFolder>
        <FileTreeFolder path="docs" name="docs">
          <FileTreeFile path="docs/api.md" name="api.md" />
        </FileTreeFolder>
      </FileTree>
    </DemoStage>
  );
}

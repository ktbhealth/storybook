import { JSXPreview, JSXPreviewContent } from "@ktbhealth/ui/components/ai-elements/jsx-preview";
import { DemoStage } from "../shell";

export function AiJsxPreviewDemo() {
  return (
    <DemoStage>
      <JSXPreview
        jsx={`<div className="rounded-lg border p-4">
  <h3 className="font-semibold">Vitals card</h3>
  <p className="text-sm text-muted-foreground">BP 118/76 · HR 72</p>
</div>`}
        className="max-w-sm"
      >
        <JSXPreviewContent />
      </JSXPreview>
    </DemoStage>
  );
}

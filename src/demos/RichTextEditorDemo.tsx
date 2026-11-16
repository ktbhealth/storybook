import { RichTextEditor } from "@ktbhealth/ui/components/rich-text-editor";
import { useState } from "react";
import { DemoStage } from "../shell";

const INITIAL_HTML = `<h2>Patient instructions</h2><p>Take <strong>one tablet</strong> every <em>8 hours</em> with food.</p><ul><li>Avoid alcohol while on this medication.</li><li>Store below 25°C, away from light.</li></ul><p>Questions? Contact the clinic at <a href="mailto:care@ktb.health">care@ktb.health</a>.</p>`;

export function RichTextEditorDemo() {
  const [html, setHtml] = useState(INITIAL_HTML);
  return (
    <DemoStage>
      <div className="grid max-w-2xl gap-4">
        <RichTextEditor value={html} onChange={setHtml} aria-label="Message editor" />
        <div className="grid gap-1.5">
          <p className="text-xs font-medium text-muted-foreground">Serialized HTML</p>
          <pre className="max-h-48 overflow-auto rounded-lg border bg-muted/50 p-3 text-xs">
            {html || "(empty)"}
          </pre>
        </div>
      </div>
    </DemoStage>
  );
}

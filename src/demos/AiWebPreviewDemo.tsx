import {
  WebPreview,
  WebPreviewBody,
  WebPreviewConsole,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
} from "@ktbhealth/ui/components/ai-elements/web-preview";
import { ArrowLeftIcon, ArrowRightIcon, RotateCwIcon } from "lucide-react";
import { DemoStage } from "../shell";

// WebPreview renders a browser-chrome frame around an iframe. The iframe src is
// driven by the url bar; console panel toggles via the context.
export function AiWebPreviewDemo() {
  return (
    <DemoStage className="p-0">
      <WebPreview defaultUrl="https://example.com" className="h-96 rounded-none border-0">
        <WebPreviewNavigation>
          <WebPreviewNavigationButton aria-label="Back">
            <ArrowLeftIcon className="size-4" />
          </WebPreviewNavigationButton>
          <WebPreviewNavigationButton aria-label="Forward">
            <ArrowRightIcon className="size-4" />
          </WebPreviewNavigationButton>
          <WebPreviewNavigationButton aria-label="Reload">
            <RotateCwIcon className="size-4" />
          </WebPreviewNavigationButton>
          <WebPreviewUrl placeholder="https://…" />
        </WebPreviewNavigation>
        <WebPreviewBody src="https://example.com" loading="eager" />
        <WebPreviewConsole
          logs={[
            { level: "log", message: "App mounted", timestamp: new Date("2026-11-12T09:00:00Z") },
            {
              level: "warn",
              message: "Deprecated API usage",
              timestamp: new Date("2026-11-12T09:00:01Z"),
            },
          ]}
        />
      </WebPreview>
    </DemoStage>
  );
}

import {
  MicSelector,
  MicSelectorContent,
  MicSelectorEmpty,
  MicSelectorInput,
  MicSelectorItem,
  MicSelectorLabel,
  MicSelectorList,
  MicSelectorTrigger,
  MicSelectorValue,
} from "@ktbhealth/ui/components/ai-elements/mic-selector";
import { Button } from "@ktbhealth/ui/components/button";
import { MicIcon } from "lucide-react";
import { DemoStage } from "../shell";

export function AiMicSelectorDemo() {
  return (
    <DemoStage>
      <MicSelector>
        <MicSelectorTrigger render={<Button variant="outline" size="sm" />}>
          <MicIcon className="size-4" />
          <MicSelectorValue />
        </MicSelectorTrigger>
        <MicSelectorContent>
          <MicSelectorInput />
          <MicSelectorList>
            {(devices) =>
              devices.length === 0 ? (
                <MicSelectorEmpty />
              ) : (
                devices.map((device) => (
                  <MicSelectorItem key={device.deviceId} value={device.deviceId}>
                    <MicSelectorLabel device={device} />
                  </MicSelectorItem>
                ))
              )
            }
          </MicSelectorList>
        </MicSelectorContent>
      </MicSelector>
      <p className="mt-3 text-xs text-muted-foreground">
        Lists audio input devices via navigator.mediaDevices (permission prompt on open).
      </p>
    </DemoStage>
  );
}

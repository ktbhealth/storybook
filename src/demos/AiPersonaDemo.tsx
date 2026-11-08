import { Persona } from "@ktbhealth/ui/components/ai-elements/persona";
import { DemoStage } from "../shell";

const STATES = ["idle", "listening", "thinking", "speaking"] as const;

export function AiPersonaDemo() {
  return (
    <DemoStage>
      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          {STATES.map((state) => (
            <div key={state} className="flex flex-col items-center gap-2">
              <Persona state={state} variant="opal" className="size-16" />
              <span className="text-xs text-muted-foreground">{state}</span>
            </div>
          ))}
        </div>
        <p className="max-w-md text-xs text-muted-foreground">
          Persona renders an animated Rive avatar (loaded from a hosted .riv asset). If the asset
          fails to load it falls back to a static ring.
        </p>
      </div>
    </DemoStage>
  );
}

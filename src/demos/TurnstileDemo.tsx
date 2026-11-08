import { Button } from "@ktbhealth/ui/components/button";
import { Turnstile, TURNSTILE_SITE_KEY } from "@ktbhealth/ui/components/turnstile";
import { useState } from "react";
import { DemoStage } from "../shell";

export function TurnstileDemo() {
  const [token, setToken] = useState<string | null>(null);
  return (
    <DemoStage>
      <div className="grid max-w-md gap-4">
        <p className="text-sm text-muted-foreground">
          Cloudflare Turnstile widget. Uses <code>VITE_TURNSTILE_SITE_KEY</code> when no{" "}
          <code>siteKey</code> is passed.
          {!TURNSTILE_SITE_KEY ? " (no site key configured — renders nothing by default)" : ""}
        </p>
        <Turnstile siteKey="1x00000000000000000000AA" onToken={setToken} />
        <p className="text-xs text-muted-foreground">
          {token ? `Token received: ${token.slice(0, 24)}…` : "Waiting for verification…"}
        </p>
        <div>
          <Button size="sm" disabled={!token}>
            Continue
          </Button>
        </div>
      </div>
    </DemoStage>
  );
}

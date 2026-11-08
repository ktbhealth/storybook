import {
  Sandbox,
  SandboxContent,
  SandboxHeader,
  SandboxTabContent,
  SandboxTabs,
  SandboxTabsBar,
  SandboxTabsList,
  SandboxTabsTrigger,
} from "@ktbhealth/ui/components/ai-elements/sandbox";
import { DemoStage } from "../shell";

export function AiSandboxDemo() {
  return (
    <DemoStage>
      <Sandbox defaultOpen className="max-w-xl">
        <SandboxHeader title="dev-server" state="output-available" />
        <SandboxContent>
          <SandboxTabs defaultValue="logs">
            <SandboxTabsBar>
              <SandboxTabsList>
                <SandboxTabsTrigger value="logs">Logs</SandboxTabsTrigger>
                <SandboxTabsTrigger value="files">Files</SandboxTabsTrigger>
                <SandboxTabsTrigger value="env">Env</SandboxTabsTrigger>
              </SandboxTabsList>
            </SandboxTabsBar>
            <SandboxTabContent value="logs">
              <pre className="p-3 font-mono text-xs text-muted-foreground">
                {`$ bun dev --port 3100
vite v7 ready in 412ms
➜ Local: http://localhost:3100/
GET /components/button 200 12ms`}
              </pre>
            </SandboxTabContent>
            <SandboxTabContent value="files">
              <p className="p-3 text-sm text-muted-foreground">src/main.tsx, src/router.tsx…</p>
            </SandboxTabContent>
            <SandboxTabContent value="env">
              <p className="p-3 text-sm text-muted-foreground">NODE_ENV=development</p>
            </SandboxTabContent>
          </SandboxTabs>
        </SandboxContent>
      </Sandbox>
    </DemoStage>
  );
}

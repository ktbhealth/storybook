import {
  PackageInfo,
  PackageInfoContent,
  PackageInfoDependencies,
  PackageInfoDependency,
  PackageInfoDescription,
  PackageInfoHeader,
  PackageInfoName,
  PackageInfoVersion,
} from "@ktbhealth/ui/components/ai-elements/package-info";
import { DemoStage } from "../shell";

export function AiPackageInfoDemo() {
  return (
    <DemoStage>
      <PackageInfo
        name="@ktbhealth/ui"
        currentVersion="0.1.0"
        newVersion="0.2.0"
        changeType="minor"
        className="max-w-md"
      >
        <PackageInfoHeader>
          <PackageInfoName />
          <PackageInfoVersion />
        </PackageInfoHeader>
        <PackageInfoDescription>
          Design system: Tailwind v4 tokens + shadcn/Base UI React components.
        </PackageInfoDescription>
        <PackageInfoContent>
          <PackageInfoDependencies>
            <PackageInfoDependency name="@base-ui/react" version="^1.9.0" />
            <PackageInfoDependency name="tailwindcss" version="^4.3.5" />
            <PackageInfoDependency name="lucide-react" version="^0.544.0" />
          </PackageInfoDependencies>
        </PackageInfoContent>
      </PackageInfo>
    </DemoStage>
  );
}

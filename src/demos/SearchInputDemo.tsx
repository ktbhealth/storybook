import { SearchInput } from "@ktbhealth/ui/components/search-input";
import { DemoStage } from "../shell";

export function SearchInputDemo() {
  return (
    <DemoStage>
      <div className="grid max-w-md gap-4">
        <SearchInput placeholder="Search patients, CPF, or CNS…" />
        <SearchInput placeholder="Disabled" disabled />
        <SearchInput placeholder="Custom width" className="w-48" />
      </div>
    </DemoStage>
  );
}

import { Button } from "@ktbhealth/ui/components/button";
import { DataToolbar } from "@ktbhealth/ui/components/data-toolbar";
import { SearchInput } from "@ktbhealth/ui/components/search-input";
import { DemoStage } from "../shell";

export function DataToolbarDemo() {
  return (
    <DemoStage>
      <DataToolbar
        className="w-full"
        search={<SearchInput placeholder="Search patients…" className="w-64" />}
        filters={
          <>
            <Button variant="outline" size="sm">
              Specialty
            </Button>
            <Button variant="outline" size="sm">
              Status
            </Button>
          </>
        }
        resultCount={{ shown: 12, total: 48 }}
        actions={
          <Button size="sm" variant="secondary">
            Export
          </Button>
        }
      />
    </DemoStage>
  );
}

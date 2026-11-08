import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ktbhealth/ui/components/tabs";
import { DemoStage } from "../shell";

export function TabsDemo() {
  return (
    <DemoStage>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="visits">Visits</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
          Patient overview: last visit 12 Nov 2026, adherence 94%, no open alerts.
        </TabsContent>
        <TabsContent value="visits" className="pt-4 text-sm text-muted-foreground">
          3 visits in the last 90 days: 2 telemedicine, 1 in-person.
        </TabsContent>
        <TabsContent value="prescriptions" className="pt-4 text-sm text-muted-foreground">
          2 active prescriptions: losartan 50mg, metformin 500mg.
        </TabsContent>
      </Tabs>
    </DemoStage>
  );
}

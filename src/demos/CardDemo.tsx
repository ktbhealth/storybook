import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ktbhealth/ui/components/card";
import { DemoStage } from "../shell";

export function CardDemo() {
  return (
    <DemoStage>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Appointment</CardTitle>
            <CardDescription>Telemedicine follow-up with Dr. Ana Souza</CardDescription>
            <CardAction>
              <Badge variant="secondary">Tomorrow</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">14:00 - 14:30 · Cardiology · Room 3B</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">Join call</Button>
            <Button size="sm" variant="outline">
              Reschedule
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Patient stats</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Visits</dt>
                <dd className="text-lg font-semibold">12</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Adherence</dt>
                <dd className="text-lg font-semibold">94%</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </DemoStage>
  );
}

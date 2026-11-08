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
    </DemoStage>
  );
}

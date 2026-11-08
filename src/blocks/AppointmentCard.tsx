import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ktbhealth/ui/components/card";
import { Separator } from "@ktbhealth/ui/components/separator";
import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import { CalendarDays, Clock, Video } from "lucide-react";

/** WIP example block: upcoming appointment card for the patient dashboard. */
export function AppointmentCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="gap-1">
            <Video className="size-3" /> Telemedicine
          </Badge>
          <span className="text-xs text-muted-foreground">In 3 days</span>
        </div>
        <CardTitle className="text-lg">Follow-up consultation</CardTitle>
        <CardDescription>With Dr. Ana Souza · Cardiology</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <CalendarDays className="size-4" /> Tue, 18 Nov 2026
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Clock className="size-4" /> 14:00 - 14:30
          </span>
        </div>
        <Separator />
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-sm">
            <p className="font-medium">Dr. Ana Souza</p>
            <p className="text-muted-foreground">CRM 123456 · SP</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Reschedule
            </Button>
            <Button size="sm">Join call</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

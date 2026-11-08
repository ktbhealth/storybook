import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ktbhealth/ui/components/card";
import { Mail, Phone, MapPin } from "lucide-react";

/** WIP example block: patient identity header used across KTB Health screens. */
export function PatientHeader() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="size-14">
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <CardTitle>Maria Rodrigues</CardTitle>
              <Badge variant="secondary">Active</Badge>
              <Badge variant="outline">SUS</Badge>
            </div>
            <CardDescription>CPF 123.456.789-00 · Born 14 Mar 1988</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Phone className="size-4" /> (11) 98765-4321
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Mail className="size-4" /> maria.rodrigues@example.com
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-4" /> São Paulo, SP
        </span>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm">
            Message
          </Button>
          <Button size="sm">New visit</Button>
        </div>
      </CardContent>
    </Card>
  );
}

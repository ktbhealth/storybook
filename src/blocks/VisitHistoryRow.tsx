import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@ktbhealth/ui/components/item";
import { CalendarClock, FileText, Video } from "lucide-react";

/** WIP example block: one row in a patient visit/appointment history list. */
export function VisitHistoryRow() {
  return (
    <div className="w-full max-w-xl space-y-2">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Video />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Telemedicine follow-up</ItemTitle>
          <ItemDescription>Dr. Ana Souza · 12 Nov 2026 · 24 min · SOAP note signed</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">Completed</Badge>
          <Button variant="ghost" size="icon-sm" aria-label="View note">
            <FileText />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <CalendarClock />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>In-person checkup</ItemTitle>
          <ItemDescription>Dr. Paulo Lima · Scheduled 10 Dec 2026 · 09:30</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="outline">Scheduled</Badge>
        </ItemActions>
      </Item>
    </div>
  );
}

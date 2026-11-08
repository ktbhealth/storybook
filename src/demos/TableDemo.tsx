import { Badge } from "@ktbhealth/ui/components/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@ktbhealth/ui/components/table";
import { DemoStage } from "../shell";

const ROWS = [
  { name: "Maria Silva", visit: "12 Nov", type: "Follow-up", status: "Completed" },
  { name: "João Ribeiro", visit: "13 Nov", type: "Initial", status: "Scheduled" },
  { name: "Ana Costa", visit: "14 Nov", type: "Lab review", status: "Scheduled" },
  { name: "Pedro Lima", visit: "15 Nov", type: "Telemedicine", status: "Pending" },
];

export function TableDemo() {
  return (
    <DemoStage>
      <Table>
        <TableCaption>Upcoming appointments — week of 12 Nov</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map((r) => (
            <TableRow key={r.name}>
              <TableCell className="font-medium">{r.name}</TableCell>
              <TableCell>{r.visit}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell className="text-right">
                <Badge variant={r.status === "Completed" ? "secondary" : "outline"}>
                  {r.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">4 visits</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DemoStage>
  );
}

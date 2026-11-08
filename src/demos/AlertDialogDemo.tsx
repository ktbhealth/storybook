import { Button } from "@ktbhealth/ui/components/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@ktbhealth/ui/components/alert-dialog";
import { TriangleAlert } from "lucide-react";
import { DemoStage } from "../shell";

export function AlertDialogDemo() {
  return (
    <DemoStage>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" />}>
          Delete patient record
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <TriangleAlert className="size-4 text-destructive" />
              Delete record?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This permanently removes the patient record and all associated visit notes. This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep record</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DemoStage>
  );
}

import { Button } from "@ktbhealth/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ktbhealth/ui/components/dialog";
import { Input } from "@ktbhealth/ui/components/input";
import { Label } from "@ktbhealth/ui/components/label";
import { DemoStage } from "../shell";

export function DialogDemo() {
  return (
    <DemoStage>
      <Dialog>
        <DialogTrigger render={<Button />}>Schedule visit</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule a visit</DialogTitle>
            <DialogDescription>Pick a date and time for the next consultation.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="demo-dialog-date">Date</Label>
              <Input id="demo-dialog-date" type="date" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="demo-dialog-time">Time</Label>
              <Input id="demo-dialog-time" type="time" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DemoStage>
  );
}

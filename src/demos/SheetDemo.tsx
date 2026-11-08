import { Button } from "@ktbhealth/ui/components/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ktbhealth/ui/components/sheet";
import { Input } from "@ktbhealth/ui/components/input";
import { Label } from "@ktbhealth/ui/components/label";
import { DemoStage } from "../shell";

export function SheetDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap gap-3">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>Edit profile</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit patient profile</SheetTitle>
              <SheetDescription>Update contact and insurance details.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-3 px-4">
              <div className="grid gap-1.5">
                <Label htmlFor="sheet-phone">Phone</Label>
                <Input id="sheet-phone" defaultValue="+55 11 98888-1234" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="sheet-email">Email</Label>
                <Input id="sheet-email" defaultValue="maria.silva@example.com" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose render={<Button />}>Save changes</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" />}>Side sheet</SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Quick links to chart sections.</SheetDescription>
            </SheetHeader>
            <ul className="px-4 text-sm text-muted-foreground">
              <li className="py-2">Overview</li>
              <li className="py-2">Vitals</li>
              <li className="py-2">Medications</li>
              <li className="py-2">Documents</li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </DemoStage>
  );
}

import { Button } from "@ktbhealth/ui/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@ktbhealth/ui/components/drawer";
import { Input } from "@ktbhealth/ui/components/input";
import { Label } from "@ktbhealth/ui/components/label";
import { DemoStage } from "../shell";

export function DrawerDemo() {
  return (
    <DemoStage>
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>Open filters</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Visit filters</DrawerTitle>
            <DrawerDescription>Narrow down the appointment list.</DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-3 px-4">
            <div className="grid gap-1.5">
              <Label htmlFor="drawer-from">From</Label>
              <Input id="drawer-from" type="date" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="drawer-to">To</Label>
              <Input id="drawer-to" type="date" />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Apply filters</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </DemoStage>
  );
}

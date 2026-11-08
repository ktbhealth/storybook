import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@ktbhealth/ui/components/navigation-menu";
import { DemoStage } from "../shell";

export function NavigationMenuDemo() {
  return (
    <DemoStage>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Patients</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-64 gap-1 p-3 text-sm">
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block rounded-md px-2 py-1.5 hover:bg-muted"
                  >
                    Directory
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block rounded-md px-2 py-1.5 hover:bg-muted"
                  >
                    Admissions
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block rounded-md px-2 py-1.5 hover:bg-muted"
                  >
                    Care plans
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Visits</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1 p-3 text-sm">
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block rounded-md px-2 py-1.5 hover:bg-muted"
                  >
                    Today&apos;s schedule
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    href="#"
                    className="block rounded-md px-2 py-1.5 hover:bg-muted"
                  >
                    Video calls
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Reports</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Settings</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </DemoStage>
  );
}

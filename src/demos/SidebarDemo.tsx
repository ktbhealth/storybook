import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@ktbhealth/ui/components/sidebar";
import { CalendarDays, LayoutDashboard, Pill, Users } from "lucide-react";
import { DemoStage } from "../shell";

export function SidebarDemo() {
  return (
    <DemoStage className="p-0">
      {/* collapsible="none" renders the sidebar in-flow; the default
          offcanvas variant is position:fixed + h-svh and escapes the card. */}
      <div className="h-[26rem] overflow-hidden">
        <SidebarProvider className="h-full min-h-0">
          <Sidebar collapsible="none">
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg">
                    <LayoutDashboard className="size-4" />
                    <span className="font-semibold">KTB Health</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Care</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <CalendarDays className="size-4" />
                        Appointments
                      </SidebarMenuButton>
                      <SidebarMenuBadge>12</SidebarMenuBadge>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Users className="size-4" />
                        Patients
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Pill className="size-4" />
                        Prescriptions
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <p className="px-2 text-xs text-muted-foreground">Signed in as Dr. Ana Souza</p>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header className="flex h-12 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <span className="text-sm font-medium">Today's schedule</span>
            </header>
            <div className="flex flex-1 items-center justify-center p-8 text-sm text-muted-foreground">
              Main content area.
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </DemoStage>
  );
}

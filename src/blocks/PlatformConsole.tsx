import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import { Badge } from "@ktbhealth/ui/components/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ktbhealth/ui/components/breadcrumb";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ktbhealth/ui/components/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@ktbhealth/ui/components/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ktbhealth/ui/components/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@ktbhealth/ui/components/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ktbhealth/ui/components/table";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Bell,
  type LucideIcon,
  CalendarDays,
  ChevronRight,
  Download,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  UserCog,
  Users,
  UsersRound,
} from "lucide-react";

const NAV_GROUPS: {
  label: string;
  items: { label: string; icon: LucideIcon; active?: boolean }[];
}[] = [
  {
    label: "Overview",
    items: [{ label: "Dashboard", icon: LayoutDashboard, active: true }],
  },
  {
    label: "Domains",
    items: [
      { label: "Patients", icon: Users },
      { label: "Consultations", icon: Stethoscope },
    ],
  },
  {
    label: "Access",
    items: [
      { label: "Users", icon: UserCog },
      { label: "Groups", icon: UsersRound },
    ],
  },
];

const STATS = [
  { label: "Active patients", value: "12,480", delta: "+8.2%", up: true },
  { label: "Consultations today", value: "342", delta: "+12.4%", up: true },
  { label: "Pending reviews", value: "57", delta: "-3.1%", up: false },
  { label: "Organizations", value: "128", delta: "+2", up: true },
];

const chartData = [
  { day: "Mon", consultations: 42, completed: 38 },
  { day: "Tue", consultations: 55, completed: 49 },
  { day: "Wed", consultations: 48, completed: 44 },
  { day: "Thu", consultations: 61, completed: 57 },
  { day: "Fri", consultations: 72, completed: 66 },
  { day: "Sat", consultations: 30, completed: 28 },
  { day: "Sun", consultations: 24, completed: 22 },
];

const chartConfig = {
  consultations: { label: "Consultations", color: "var(--primary)" },
  completed: { label: "Completed", color: "var(--chart-2, oklch(0.6 0.15 250))" },
} satisfies ChartConfig;

const ORGS = [
  { name: "Clínica Bem Viver", plan: "Enterprise", members: 48, status: "Active" },
  { name: "Hospital São Lucas", plan: "Enterprise", members: 132, status: "Active" },
  { name: "Consultório Dra. Ana", plan: "Pro", members: 6, status: "Active" },
  { name: "UBS Vila Nova", plan: "Public", members: 21, status: "Trial" },
  { name: "Centro Médico Rio", plan: "Pro", members: 34, status: "Suspended" },
  { name: "Clínica Sorriso", plan: "Starter", members: 3, status: "Active" },
];

/** WIP example block: full app shell dashboard composed from platform primitives. */
export function PlatformConsole() {
  return (
    <div className="h-[34rem] overflow-hidden rounded-xl border bg-background">
      <SidebarProvider className="h-full min-h-0">
        <Sidebar collapsible="none">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    K
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block text-sm font-semibold">KTB Health</span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      Platform
                    </span>
                  </span>
                  <Badge variant="outline" className="text-[10px]">
                    Admin
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            {NAV_GROUPS.map((group) => (
              <SidebarGroup key={group.label}>
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton isActive={item.active}>
                          <item.icon className="size-4" />
                          {item.label}
                        </SidebarMenuButton>
                        {item.label === "Consultations" && (
                          <Badge variant="secondary" className="mr-2 shrink-0 text-[10px]">
                            12
                          </Badge>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="min-w-0">
          <header className="sticky top-0 z-10 flex h-12 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Platform</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="size-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Overview</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="size-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Search className="size-3.5" /> Search
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Notifications">
                <Bell className="size-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button variant="ghost" size="icon-sm" aria-label="Account" />}
                >
                  <Avatar className="size-7">
                    <AvatarFallback>OP</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>ops@ktbhealth.com</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="size-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShieldCheck className="size-4" /> Audit log
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="size-4" /> Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="flex-1 space-y-4 overflow-auto p-4">
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              {STATS.map((stat) => (
                <Card key={stat.label}>
                  <CardHeader className="pb-2">
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                    <Badge variant={stat.up ? "secondary" : "destructive"} className="mt-2 gap-1">
                      {stat.up ? (
                        <TrendingUp className="size-3" />
                      ) : (
                        <TrendingDown className="size-3" />
                      )}
                      {stat.delta}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-base">Consultations — last 7 days</CardTitle>
                  <CardDescription>
                    Scheduled vs. completed across all organizations.
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Download className="size-3.5" /> Export
                </Button>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="aspect-auto h-56 w-full">
                  <AreaChart data={chartData} margin={{ left: 8, right: 12 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} width={36} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      dataKey="completed"
                      type="monotone"
                      stroke="var(--color-completed)"
                      fill="var(--color-completed)"
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                    <Area
                      dataKey="consultations"
                      type="monotone"
                      stroke="var(--color-consultations)"
                      fill="var(--color-consultations)"
                      fillOpacity={0.25}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Organizations</CardTitle>
                <CardDescription>Recently active tenants on the platform.</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="pl-6">Organization</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Members</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="pr-6 text-right">Last active</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ORGS.map((org) => (
                      <TableRow key={org.name}>
                        <TableCell className="pl-6 font-medium">{org.name}</TableCell>
                        <TableCell>{org.plan}</TableCell>
                        <TableCell>{org.members}</TableCell>
                        <TableCell>
                          <Badge variant={org.status === "Active" ? "secondary" : "outline"}>
                            {org.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="pr-6 text-right text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" /> 2h ago
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

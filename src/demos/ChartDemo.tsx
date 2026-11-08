import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@ktbhealth/ui/components/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { DemoStage } from "../shell";

const data = [
  { week: "W1", systolic: 128, diastolic: 82 },
  { week: "W2", systolic: 124, diastolic: 80 },
  { week: "W3", systolic: 122, diastolic: 79 },
  { week: "W4", systolic: 119, diastolic: 77 },
  { week: "W5", systolic: 118, diastolic: 76 },
  { week: "W6", systolic: 117, diastolic: 75 },
];

const config = {
  systolic: { label: "Systolic", color: "var(--primary)" },
  diastolic: { label: "Diastolic", color: "var(--chart-2, oklch(0.6 0.15 250))" },
} satisfies ChartConfig;

export function ChartDemo() {
  return (
    <DemoStage>
      <ChartContainer config={config} className="mx-auto aspect-auto h-64 w-full max-w-lg">
        <LineChart data={data} margin={{ left: 8, right: 12, top: 8 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="week" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} width={36} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            dataKey="systolic"
            type="monotone"
            stroke="var(--color-systolic)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="diastolic"
            type="monotone"
            stroke="var(--color-diastolic)"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </DemoStage>
  );
}

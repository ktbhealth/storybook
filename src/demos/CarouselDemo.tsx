import { Badge } from "@ktbhealth/ui/components/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ktbhealth/ui/components/carousel";
import { DemoStage } from "../shell";

const SLIDES = [
  { title: "Blood pressure", value: "118/76", note: "Within target range" },
  { title: "Heart rate", value: "72 bpm", note: "Resting, normal" },
  { title: "Weight", value: "71.4 kg", note: "−0.6 kg this month" },
  { title: "Steps (avg)", value: "8,240", note: "Last 7 days" },
];

export function CarouselDemo() {
  return (
    <DemoStage>
      <Carousel className="mx-auto w-full max-w-md">
        <CarouselContent>
          {SLIDES.map((s) => (
            <CarouselItem key={s.title}>
              <div className="flex flex-col items-center gap-2 rounded-xl border bg-muted/40 p-10 text-center">
                <p className="text-sm text-muted-foreground">{s.title}</p>
                <p className="text-3xl font-semibold">{s.value}</p>
                <Badge variant="secondary">{s.note}</Badge>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <div className="mt-4 flex justify-center gap-1.5">
        {SLIDES.map((_, i) => (
          <span key={i} className="size-1.5 rounded-full bg-muted-foreground/30" />
        ))}
      </div>
    </DemoStage>
  );
}

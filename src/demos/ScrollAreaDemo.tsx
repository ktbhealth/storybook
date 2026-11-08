import { ScrollArea } from "@ktbhealth/ui/components/scroll-area";
import { DemoStage } from "../shell";

const ITEMS = Array.from({ length: 20 }, (_, i) => `Visit note ${i + 1}`);

export function ScrollAreaDemo() {
  return (
    <DemoStage>
      <ScrollArea className="h-56 w-72 rounded-lg border">
        <div className="p-3">
          {ITEMS.map((item) => (
            <div key={item} className="border-b px-2 py-2 text-sm last:border-b-0">
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
    </DemoStage>
  );
}

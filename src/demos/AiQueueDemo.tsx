import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueItemDescription,
  QueueItemIndicator,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger,
} from "@ktbhealth/ui/components/ai-elements/queue";
import { DemoStage } from "../shell";

const ITEMS = [
  { text: "Summarize today's appointments", done: true, desc: "12 visits processed" },
  { text: "Flag abnormal lab results", done: false, desc: "3 pending review" },
  { text: "Draft follow-up messages", done: false, desc: "queued after labs" },
];

export function AiQueueDemo() {
  return (
    <DemoStage>
      <Queue className="max-w-md">
        <QueueSection>
          <QueueSectionTrigger>
            <QueueSectionLabel count={ITEMS.length} label="tasks" />
          </QueueSectionTrigger>
          <QueueSectionContent>
            <QueueList>
              <ul>
                {ITEMS.map((item) => (
                  <QueueItem key={item.text}>
                    <div className="flex items-start gap-2">
                      <QueueItemIndicator completed={item.done} />
                      <div className="min-w-0 flex-1">
                        <QueueItemContent completed={item.done}>{item.text}</QueueItemContent>
                        <QueueItemDescription completed={item.done}>
                          {item.desc}
                        </QueueItemDescription>
                      </div>
                      <QueueItemActions>
                        <QueueItemAction>{item.done ? "View" : "Run"}</QueueItemAction>
                      </QueueItemActions>
                    </div>
                  </QueueItem>
                ))}
              </ul>
            </QueueList>
          </QueueSectionContent>
        </QueueSection>
      </Queue>
    </DemoStage>
  );
}

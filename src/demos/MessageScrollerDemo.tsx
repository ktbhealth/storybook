import {
  MessageScroller,
  MessageScrollerProvider,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@ktbhealth/ui/components/message-scroller";
import { DemoStage } from "../shell";

const MSGS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  from: i % 2 === 0 ? "assistant" : "user",
  text:
    i % 2 === 0
      ? `Assistant message ${i + 1}: here is your updated care summary.`
      : `User message ${i + 1}: thanks, that helps a lot.`,
}));

export function MessageScrollerDemo() {
  return (
    <DemoStage className="p-0">
      <MessageScrollerProvider>
        <MessageScroller className="h-80 rounded-xl border">
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {MSGS.map((m) => (
                <MessageScrollerItem key={m.id} messageId={String(m.id)}>
                  <div
                    className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                      m.from === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {m.text}
                  </div>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </DemoStage>
  );
}

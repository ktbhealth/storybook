import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@ktbhealth/ui/components/bubble";
import { Heart, ThumbsUp } from "lucide-react";
import { DemoStage } from "../shell";

export function BubbleDemo() {
  return (
    <DemoStage>
      <BubbleGroup className="max-w-md">
        <Bubble variant="muted">
          <BubbleContent>Good morning! How are you feeling today?</BubbleContent>
        </Bubble>
        <Bubble align="end" variant="default">
          <BubbleContent>Much better — the new medication is helping.</BubbleContent>
          <BubbleReactions>
            <span className="flex items-center gap-1 px-1 text-xs">
              <Heart className="size-3" /> 2
            </span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="outline">
          <BubbleContent className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarFallback className="text-[10px]">AS</AvatarFallback>
            </Avatar>
            Dr. Ana Souza: Your labs look good. See you Thursday.
          </BubbleContent>
        </Bubble>
        <Bubble align="end" variant="secondary">
          <BubbleContent>Perfect, thank you!</BubbleContent>
          <BubbleReactions align="start" side="top">
            <ThumbsUp className="size-3.5" />
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
    </DemoStage>
  );
}

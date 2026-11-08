import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@ktbhealth/ui/components/message";
import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import { Badge } from "@ktbhealth/ui/components/badge";
import { Bubble, BubbleContent } from "@ktbhealth/ui/components/bubble";
import { DemoStage } from "../shell";

export function MessageDemo() {
  return (
    <DemoStage>
      <MessageGroup className="max-w-lg">
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Dr. Ana Souza · 09:41</MessageHeader>
            <Bubble variant="muted">
              <BubbleContent>Your lab results are in — everything looks normal.</BubbleContent>
            </Bubble>
            <MessageFooter>
              <Badge variant="outline">Read</Badge>
            </MessageFooter>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>You · 09:43</MessageHeader>
            <Bubble align="end" variant="default">
              <BubbleContent>Great, thank you! See you Thursday.</BubbleContent>
            </Bubble>
            <MessageFooter>Delivered</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </DemoStage>
  );
}

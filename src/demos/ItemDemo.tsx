import { Avatar, AvatarFallback } from "@ktbhealth/ui/components/avatar";
import { Badge } from "@ktbhealth/ui/components/badge";
import { Button } from "@ktbhealth/ui/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@ktbhealth/ui/components/item";
import { DemoStage } from "../shell";

export function ItemDemo() {
  return (
    <DemoStage>
      <ItemGroup className="max-w-md">
        <Item variant="outline" size="sm">
          <ItemMedia variant="icon">
            <Avatar className="size-8">
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Maria Silva</ItemTitle>
            <ItemDescription>Next visit Tue 09:30 · Cardiology</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="secondary">Stable</Badge>
            <Button size="xs" variant="ghost">
              View
            </Button>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia>
            <Avatar className="size-10">
              <AvatarFallback>JR</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>João Ribeiro</ItemTitle>
            <ItemDescription>Lab results pending · Endocrinology</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="xs" variant="outline">
              Message
            </Button>
          </ItemActions>
        </Item>
      </ItemGroup>
    </DemoStage>
  );
}

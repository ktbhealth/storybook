import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@ktbhealth/ui/components/avatar";
import { DemoStage } from "../shell";

export function AvatarDemo() {
  return (
    <DemoStage>
      <div className="flex flex-wrap items-center gap-6">
        <Avatar>
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <Avatar className="size-12">
          <AvatarImage src="https://i.pravatar.cc/96?img=47" alt="Patient" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar className="size-16">
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-8">
        <p className="mb-2 text-xs text-muted-foreground">Care team</p>
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>PL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </DemoStage>
  );
}

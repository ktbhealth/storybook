import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@ktbhealth/ui/components/menubar";
import { DemoStage } from "../shell";

export function MenubarDemo() {
  return (
    <DemoStage>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New visit note
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Open chart</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print summary</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Show vitals panel</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="grid">
              <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
              <MenubarRadioItem value="list">List</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Density</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Compact</MenubarItem>
                <MenubarItem>Comfortable</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Documentation</MenubarItem>
            <MenubarItem>Keyboard shortcuts</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </DemoStage>
  );
}

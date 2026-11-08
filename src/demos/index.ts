import type { ComponentType } from "react";
import { AccordionDemo } from "./AccordionDemo";
import { AlertDemo } from "./AlertDemo";
import { AlertDialogDemo } from "./AlertDialogDemo";
import { AppToastDemo } from "./AppToastDemo";
import { AvatarDemo } from "./AvatarDemo";
import { BadgeDemo } from "./BadgeDemo";
import { ButtonDemo } from "./ButtonDemo";
import { CardDemo } from "./CardDemo";
import { CheckboxDemo } from "./CheckboxDemo";
import { DialogDemo } from "./DialogDemo";
import { InputDemo } from "./InputDemo";
import { LabelDemo } from "./LabelDemo";
import { ProgressDemo } from "./ProgressDemo";
import { ScrollAreaDemo } from "./ScrollAreaDemo";
import { SelectDemo } from "./SelectDemo";
import { SeparatorDemo } from "./SeparatorDemo";
import { SkeletonDemo } from "./SkeletonDemo";
import { SliderDemo } from "./SliderDemo";
import { SwitchDemo } from "./SwitchDemo";
import { TabsDemo } from "./TabsDemo";
import { TextareaDemo } from "./TextareaDemo";
import { TooltipDemo } from "./TooltipDemo";

/** Hand-written demos keyed by catalog id (see src/catalog/manifest.ts). */
export const DEMOS: Record<string, ComponentType> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  "app-toast": AppToastDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  button: ButtonDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  dialog: DialogDemo,
  input: InputDemo,
  label: LabelDemo,
  progress: ProgressDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  switch: SwitchDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  tooltip: TooltipDemo,
};

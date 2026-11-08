import type { ComponentType } from "react";
import { AccordionDemo } from "./AccordionDemo";
import { AlertDemo } from "./AlertDemo";
import { AlertDialogDemo } from "./AlertDialogDemo";
import { AppDialogDemo } from "./AppDialogDemo";
import { AppToastDemo } from "./AppToastDemo";
import { AspectRatioDemo } from "./AspectRatioDemo";
import { AttachmentDemo } from "./AttachmentDemo";
import { AvatarDemo } from "./AvatarDemo";
import { BadgeDemo } from "./BadgeDemo";
import { BreadcrumbDemo } from "./BreadcrumbDemo";
import { BubbleDemo } from "./BubbleDemo";
import { ButtonDemo } from "./ButtonDemo";
import { ButtonGroupDemo } from "./ButtonGroupDemo";
import { CalendarDemo } from "./CalendarDemo";
import { CardDemo } from "./CardDemo";
import { CarouselDemo } from "./CarouselDemo";
import { ChartDemo } from "./ChartDemo";
import { CheckboxDemo } from "./CheckboxDemo";
import { CodeBlockDemo } from "./CodeBlockDemo";
import { CollapsibleDemo } from "./CollapsibleDemo";
import { ComboboxDemo } from "./ComboboxDemo";
import { CommandDemo } from "./CommandDemo";
import { ContextMenuDemo } from "./ContextMenuDemo";
import { DialogDemo } from "./DialogDemo";
import { DirectionDemo } from "./DirectionDemo";
import { DrawerDemo } from "./DrawerDemo";
import { DropdownMenuDemo } from "./DropdownMenuDemo";
import { EmptyDemo } from "./EmptyDemo";
import { FieldDemo } from "./FieldDemo";
import { HoverCardDemo } from "./HoverCardDemo";
import { InputDemo } from "./InputDemo";
import { InputGroupDemo } from "./InputGroupDemo";
import { InputOtpDemo } from "./InputOtpDemo";
import { ItemDemo } from "./ItemDemo";
import { KbdDemo } from "./KbdDemo";
import { LabelDemo } from "./LabelDemo";
import { MarkerDemo } from "./MarkerDemo";
import { MenubarDemo } from "./MenubarDemo";
import { MessageDemo } from "./MessageDemo";
import { MessageScrollerDemo } from "./MessageScrollerDemo";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { NativeSelectDemo } from "./NativeSelectDemo";
import { PaginationDemo } from "./PaginationDemo";
import { PopoverDemo } from "./PopoverDemo";
import { ProgressDemo } from "./ProgressDemo";
import { QuestionnaireDemo } from "./QuestionnaireDemo";
import { RadioGroupDemo } from "./RadioGroupDemo";
import { ResizableDemo } from "./ResizableDemo";
import { ScrollAreaDemo } from "./ScrollAreaDemo";
import { SelectDemo } from "./SelectDemo";
import { SeparatorDemo } from "./SeparatorDemo";
import { SheetDemo } from "./SheetDemo";
import { SidebarDemo } from "./SidebarDemo";
import { SkeletonDemo } from "./SkeletonDemo";
import { SliderDemo } from "./SliderDemo";
import { SpinnerDemo } from "./SpinnerDemo";
import { SwitchDemo } from "./SwitchDemo";
import { TableDemo } from "./TableDemo";
import { TabsDemo } from "./TabsDemo";
import { TextareaDemo } from "./TextareaDemo";
import { ToastDemo } from "./ToastDemo";
import { ToggleDemo, ToggleGroupDemo } from "./ToggleDemo";
import { TooltipDemo } from "./TooltipDemo";
import { TraceDemo } from "./TraceDemo";
import { TurnstileDemo } from "./TurnstileDemo";
import { AiAgentDemo } from "./AiAgentDemo";
import { AiArtifactDemo } from "./AiArtifactDemo";
import { AiAttachmentsDemo } from "./AiAttachmentsDemo";
import { AiAudioPlayerDemo } from "./AiAudioPlayerDemo";
import { AiCanvasDemo } from "./AiCanvasDemo";
import { AiChainOfThoughtDemo } from "./AiChainOfThoughtDemo";
import { AiCheckpointDemo } from "./AiCheckpointDemo";
import { AiCodeBlockDemo } from "./AiCodeBlockDemo";
import { AiCommitDemo } from "./AiCommitDemo";
import { AiConfirmationDemo } from "./AiConfirmationDemo";
import { AiConnectionDemo } from "./AiConnectionDemo";
import { AiContextDemo } from "./AiContextDemo";
import { AiControlsDemo } from "./AiControlsDemo";
import { AiConversationDemo } from "./AiConversationDemo";
import { AiEdgeDemo } from "./AiEdgeDemo";
import { AiEnvironmentVariablesDemo } from "./AiEnvironmentVariablesDemo";
import { AiFileTreeDemo } from "./AiFileTreeDemo";
import { AiImageDemo } from "./AiImageDemo";
import { AiInlineCitationDemo } from "./AiInlineCitationDemo";
import { AiJsxPreviewDemo } from "./AiJsxPreviewDemo";
import { AiMessageDemo } from "./AiMessageDemo";
import { AiMicSelectorDemo } from "./AiMicSelectorDemo";
import { AiModelSelectorDemo } from "./AiModelSelectorDemo";
import { AiNodeDemo } from "./AiNodeDemo";
import { AiOpenInDemo } from "./AiOpenInDemo";
import { AiPackageInfoDemo } from "./AiPackageInfoDemo";
import { AiPanelDemo } from "./AiPanelDemo";
import { AiPersonaDemo } from "./AiPersonaDemo";
import { AiPlanDemo } from "./AiPlanDemo";
import { AiPromptInputDemo } from "./AiPromptInputDemo";
import { AiQuestionDemo } from "./AiQuestionDemo";
import { AiQueueDemo } from "./AiQueueDemo";
import { AiReasoningDemo } from "./AiReasoningDemo";
import { AiSandboxDemo } from "./AiSandboxDemo";
import { AiSchemaDisplayDemo } from "./AiSchemaDisplayDemo";
import { AiShimmerDemo } from "./AiShimmerDemo";
import { AiSnippetDemo } from "./AiSnippetDemo";
import { AiSourcesDemo } from "./AiSourcesDemo";
import { AiSpeechInputDemo } from "./AiSpeechInputDemo";
import { AiStackTraceDemo } from "./AiStackTraceDemo";
import { AiSuggestionDemo } from "./AiSuggestionDemo";
import { AiTaskDemo } from "./AiTaskDemo";
import { AiTerminalDemo } from "./AiTerminalDemo";
import { AiTestResultsDemo } from "./AiTestResultsDemo";
import { AiToolbarDemo } from "./AiToolbarDemo";
import { AiToolDemo } from "./AiToolDemo";
import { AiTranscriptionDemo } from "./AiTranscriptionDemo";
import { AiVoiceSelectorDemo } from "./AiVoiceSelectorDemo";
import { AiWebPreviewDemo } from "./AiWebPreviewDemo";

/** Hand-written demos keyed by catalog id (see src/catalog/manifest.ts). */
export const DEMOS: Record<string, ComponentType> = {
  accordion: AccordionDemo,
  "alert-dialog": AlertDialogDemo,
  alert: AlertDemo,
  "app-dialog": AppDialogDemo,
  "app-toast": AppToastDemo,
  "aspect-ratio": AspectRatioDemo,
  attachment: AttachmentDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  bubble: BubbleDemo,
  "button-group": ButtonGroupDemo,
  button: ButtonDemo,
  calendar: CalendarDemo,
  card: CardDemo,
  carousel: CarouselDemo,
  chart: ChartDemo,
  checkbox: CheckboxDemo,
  "code-block": CodeBlockDemo,
  collapsible: CollapsibleDemo,
  combobox: ComboboxDemo,
  command: CommandDemo,
  "context-menu": ContextMenuDemo,
  dialog: DialogDemo,
  direction: DirectionDemo,
  drawer: DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  empty: EmptyDemo,
  field: FieldDemo,
  "hover-card": HoverCardDemo,
  "input-group": InputGroupDemo,
  "input-otp": InputOtpDemo,
  input: InputDemo,
  item: ItemDemo,
  kbd: KbdDemo,
  label: LabelDemo,
  marker: MarkerDemo,
  menubar: MenubarDemo,
  message: MessageDemo,
  "message-scroller": MessageScrollerDemo,
  "native-select": NativeSelectDemo,
  "navigation-menu": NavigationMenuDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  questionnaire: QuestionnaireDemo,
  "radio-group": RadioGroupDemo,
  resizable: ResizableDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  sidebar: SidebarDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  toast: ToastDemo,
  "toggle-group": ToggleGroupDemo,
  toggle: ToggleDemo,
  tooltip: TooltipDemo,
  trace: TraceDemo,
  turnstile: TurnstileDemo,
  "ai-elements/agent": AiAgentDemo,
  "ai-elements/artifact": AiArtifactDemo,
  "ai-elements/attachments": AiAttachmentsDemo,
  "ai-elements/audio-player": AiAudioPlayerDemo,
  "ai-elements/canvas": AiCanvasDemo,
  "ai-elements/chain-of-thought": AiChainOfThoughtDemo,
  "ai-elements/checkpoint": AiCheckpointDemo,
  "ai-elements/code-block": AiCodeBlockDemo,
  "ai-elements/commit": AiCommitDemo,
  "ai-elements/confirmation": AiConfirmationDemo,
  "ai-elements/connection": AiConnectionDemo,
  "ai-elements/context": AiContextDemo,
  "ai-elements/controls": AiControlsDemo,
  "ai-elements/conversation": AiConversationDemo,
  "ai-elements/edge": AiEdgeDemo,
  "ai-elements/environment-variables": AiEnvironmentVariablesDemo,
  "ai-elements/file-tree": AiFileTreeDemo,
  "ai-elements/image": AiImageDemo,
  "ai-elements/inline-citation": AiInlineCitationDemo,
  "ai-elements/jsx-preview": AiJsxPreviewDemo,
  "ai-elements/message": AiMessageDemo,
  "ai-elements/mic-selector": AiMicSelectorDemo,
  "ai-elements/model-selector": AiModelSelectorDemo,
  "ai-elements/node": AiNodeDemo,
  "ai-elements/open-in-chat": AiOpenInDemo,
  "ai-elements/package-info": AiPackageInfoDemo,
  "ai-elements/panel": AiPanelDemo,
  "ai-elements/persona": AiPersonaDemo,
  "ai-elements/plan": AiPlanDemo,
  "ai-elements/prompt-input": AiPromptInputDemo,
  "ai-elements/question": AiQuestionDemo,
  "ai-elements/queue": AiQueueDemo,
  "ai-elements/reasoning": AiReasoningDemo,
  "ai-elements/sandbox": AiSandboxDemo,
  "ai-elements/schema-display": AiSchemaDisplayDemo,
  "ai-elements/shimmer": AiShimmerDemo,
  "ai-elements/snippet": AiSnippetDemo,
  "ai-elements/sources": AiSourcesDemo,
  "ai-elements/speech-input": AiSpeechInputDemo,
  "ai-elements/stack-trace": AiStackTraceDemo,
  "ai-elements/suggestion": AiSuggestionDemo,
  "ai-elements/task": AiTaskDemo,
  "ai-elements/terminal": AiTerminalDemo,
  "ai-elements/test-results": AiTestResultsDemo,
  "ai-elements/toolbar": AiToolbarDemo,
  "ai-elements/tool": AiToolDemo,
  "ai-elements/transcription": AiTranscriptionDemo,
  "ai-elements/voice-selector": AiVoiceSelectorDemo,
  "ai-elements/web-preview": AiWebPreviewDemo,
};

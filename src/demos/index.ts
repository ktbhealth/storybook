import { lazy, type ComponentType } from "react";

/**
 * Hand-written demos keyed by catalog id (see src/catalog/manifest.ts).
 * Each demo is a separate lazy chunk: a demo whose deps fail to load
 * (e.g. a CJS package the dev optimizer missed) only breaks that demo —
 * the error boundary shows a fallback, the app survives.
 */
export const DEMOS: Record<string, ComponentType> = {
  accordion: lazy(() => import("./AccordionDemo").then((m) => ({ default: m.AccordionDemo }))),
  "alert-dialog": lazy(() =>
    import("./AlertDialogDemo").then((m) => ({ default: m.AlertDialogDemo })),
  ),
  alert: lazy(() => import("./AlertDemo").then((m) => ({ default: m.AlertDemo }))),
  "app-dialog": lazy(() => import("./AppDialogDemo").then((m) => ({ default: m.AppDialogDemo }))),
  "app-toast": lazy(() => import("./AppToastDemo").then((m) => ({ default: m.AppToastDemo }))),
  "aspect-ratio": lazy(() =>
    import("./AspectRatioDemo").then((m) => ({ default: m.AspectRatioDemo })),
  ),
  attachment: lazy(() => import("./AttachmentDemo").then((m) => ({ default: m.AttachmentDemo }))),
  avatar: lazy(() => import("./AvatarDemo").then((m) => ({ default: m.AvatarDemo }))),
  badge: lazy(() => import("./BadgeDemo").then((m) => ({ default: m.BadgeDemo }))),
  breadcrumb: lazy(() => import("./BreadcrumbDemo").then((m) => ({ default: m.BreadcrumbDemo }))),
  bubble: lazy(() => import("./BubbleDemo").then((m) => ({ default: m.BubbleDemo }))),
  "button-group": lazy(() =>
    import("./ButtonGroupDemo").then((m) => ({ default: m.ButtonGroupDemo })),
  ),
  button: lazy(() => import("./ButtonDemo").then((m) => ({ default: m.ButtonDemo }))),
  calendar: lazy(() => import("./CalendarDemo").then((m) => ({ default: m.CalendarDemo }))),
  card: lazy(() => import("./CardDemo").then((m) => ({ default: m.CardDemo }))),
  carousel: lazy(() => import("./CarouselDemo").then((m) => ({ default: m.CarouselDemo }))),
  chart: lazy(() => import("./ChartDemo").then((m) => ({ default: m.ChartDemo }))),
  checkbox: lazy(() => import("./CheckboxDemo").then((m) => ({ default: m.CheckboxDemo }))),
  "code-block": lazy(() => import("./CodeBlockDemo").then((m) => ({ default: m.CodeBlockDemo }))),
  collapsible: lazy(() =>
    import("./CollapsibleDemo").then((m) => ({ default: m.CollapsibleDemo })),
  ),
  combobox: lazy(() => import("./ComboboxDemo").then((m) => ({ default: m.ComboboxDemo }))),
  command: lazy(() => import("./CommandDemo").then((m) => ({ default: m.CommandDemo }))),
  "context-menu": lazy(() =>
    import("./ContextMenuDemo").then((m) => ({ default: m.ContextMenuDemo })),
  ),
  dialog: lazy(() => import("./DialogDemo").then((m) => ({ default: m.DialogDemo }))),
  direction: lazy(() => import("./DirectionDemo").then((m) => ({ default: m.DirectionDemo }))),
  drawer: lazy(() => import("./DrawerDemo").then((m) => ({ default: m.DrawerDemo }))),
  "dropdown-menu": lazy(() =>
    import("./DropdownMenuDemo").then((m) => ({ default: m.DropdownMenuDemo })),
  ),
  empty: lazy(() => import("./EmptyDemo").then((m) => ({ default: m.EmptyDemo }))),
  field: lazy(() => import("./FieldDemo").then((m) => ({ default: m.FieldDemo }))),
  "hover-card": lazy(() => import("./HoverCardDemo").then((m) => ({ default: m.HoverCardDemo }))),
  "input-group": lazy(() =>
    import("./InputGroupDemo").then((m) => ({ default: m.InputGroupDemo })),
  ),
  "input-otp": lazy(() => import("./InputOtpDemo").then((m) => ({ default: m.InputOtpDemo }))),
  input: lazy(() => import("./InputDemo").then((m) => ({ default: m.InputDemo }))),
  item: lazy(() => import("./ItemDemo").then((m) => ({ default: m.ItemDemo }))),
  kbd: lazy(() => import("./KbdDemo").then((m) => ({ default: m.KbdDemo }))),
  label: lazy(() => import("./LabelDemo").then((m) => ({ default: m.LabelDemo }))),
  marker: lazy(() => import("./MarkerDemo").then((m) => ({ default: m.MarkerDemo }))),
  menubar: lazy(() => import("./MenubarDemo").then((m) => ({ default: m.MenubarDemo }))),
  message: lazy(() => import("./MessageDemo").then((m) => ({ default: m.MessageDemo }))),
  "message-scroller": lazy(() =>
    import("./MessageScrollerDemo").then((m) => ({ default: m.MessageScrollerDemo })),
  ),
  "native-select": lazy(() =>
    import("./NativeSelectDemo").then((m) => ({ default: m.NativeSelectDemo })),
  ),
  "navigation-menu": lazy(() =>
    import("./NavigationMenuDemo").then((m) => ({ default: m.NavigationMenuDemo })),
  ),
  pagination: lazy(() => import("./PaginationDemo").then((m) => ({ default: m.PaginationDemo }))),
  popover: lazy(() => import("./PopoverDemo").then((m) => ({ default: m.PopoverDemo }))),
  progress: lazy(() => import("./ProgressDemo").then((m) => ({ default: m.ProgressDemo }))),
  questionnaire: lazy(() =>
    import("./QuestionnaireDemo").then((m) => ({ default: m.QuestionnaireDemo })),
  ),
  "radio-group": lazy(() =>
    import("./RadioGroupDemo").then((m) => ({ default: m.RadioGroupDemo })),
  ),
  resizable: lazy(() => import("./ResizableDemo").then((m) => ({ default: m.ResizableDemo }))),
  "scroll-area": lazy(() =>
    import("./ScrollAreaDemo").then((m) => ({ default: m.ScrollAreaDemo })),
  ),
  select: lazy(() => import("./SelectDemo").then((m) => ({ default: m.SelectDemo }))),
  separator: lazy(() => import("./SeparatorDemo").then((m) => ({ default: m.SeparatorDemo }))),
  sheet: lazy(() => import("./SheetDemo").then((m) => ({ default: m.SheetDemo }))),
  sidebar: lazy(() => import("./SidebarDemo").then((m) => ({ default: m.SidebarDemo }))),
  skeleton: lazy(() => import("./SkeletonDemo").then((m) => ({ default: m.SkeletonDemo }))),
  slider: lazy(() => import("./SliderDemo").then((m) => ({ default: m.SliderDemo }))),
  spinner: lazy(() => import("./SpinnerDemo").then((m) => ({ default: m.SpinnerDemo }))),
  switch: lazy(() => import("./SwitchDemo").then((m) => ({ default: m.SwitchDemo }))),
  table: lazy(() => import("./TableDemo").then((m) => ({ default: m.TableDemo }))),
  tabs: lazy(() => import("./TabsDemo").then((m) => ({ default: m.TabsDemo }))),
  textarea: lazy(() => import("./TextareaDemo").then((m) => ({ default: m.TextareaDemo }))),
  toast: lazy(() => import("./ToastDemo").then((m) => ({ default: m.ToastDemo }))),
  "toggle-group": lazy(() => import("./ToggleDemo").then((m) => ({ default: m.ToggleGroupDemo }))),
  toggle: lazy(() => import("./ToggleDemo").then((m) => ({ default: m.ToggleDemo }))),
  tooltip: lazy(() => import("./TooltipDemo").then((m) => ({ default: m.TooltipDemo }))),
  trace: lazy(() => import("./TraceDemo").then((m) => ({ default: m.TraceDemo }))),
  turnstile: lazy(() => import("./TurnstileDemo").then((m) => ({ default: m.TurnstileDemo }))),
  "ai-elements/agent": lazy(() =>
    import("./AiAgentDemo").then((m) => ({ default: m.AiAgentDemo })),
  ),
  "ai-elements/artifact": lazy(() =>
    import("./AiArtifactDemo").then((m) => ({ default: m.AiArtifactDemo })),
  ),
  "ai-elements/attachments": lazy(() =>
    import("./AiAttachmentsDemo").then((m) => ({ default: m.AiAttachmentsDemo })),
  ),
  "ai-elements/audio-player": lazy(() =>
    import("./AiAudioPlayerDemo").then((m) => ({ default: m.AiAudioPlayerDemo })),
  ),
  "ai-elements/canvas": lazy(() =>
    import("./AiCanvasDemo").then((m) => ({ default: m.AiCanvasDemo })),
  ),
  "ai-elements/chain-of-thought": lazy(() =>
    import("./AiChainOfThoughtDemo").then((m) => ({ default: m.AiChainOfThoughtDemo })),
  ),
  "ai-elements/checkpoint": lazy(() =>
    import("./AiCheckpointDemo").then((m) => ({ default: m.AiCheckpointDemo })),
  ),
  "ai-elements/code-block": lazy(() =>
    import("./AiCodeBlockDemo").then((m) => ({ default: m.AiCodeBlockDemo })),
  ),
  "ai-elements/commit": lazy(() =>
    import("./AiCommitDemo").then((m) => ({ default: m.AiCommitDemo })),
  ),
  "ai-elements/confirmation": lazy(() =>
    import("./AiConfirmationDemo").then((m) => ({ default: m.AiConfirmationDemo })),
  ),
  "ai-elements/connection": lazy(() =>
    import("./AiConnectionDemo").then((m) => ({ default: m.AiConnectionDemo })),
  ),
  "ai-elements/context": lazy(() =>
    import("./AiContextDemo").then((m) => ({ default: m.AiContextDemo })),
  ),
  "ai-elements/controls": lazy(() =>
    import("./AiControlsDemo").then((m) => ({ default: m.AiControlsDemo })),
  ),
  "ai-elements/conversation": lazy(() =>
    import("./AiConversationDemo").then((m) => ({ default: m.AiConversationDemo })),
  ),
  "ai-elements/edge": lazy(() => import("./AiEdgeDemo").then((m) => ({ default: m.AiEdgeDemo }))),
  "ai-elements/environment-variables": lazy(() =>
    import("./AiEnvironmentVariablesDemo").then((m) => ({ default: m.AiEnvironmentVariablesDemo })),
  ),
  "ai-elements/file-tree": lazy(() =>
    import("./AiFileTreeDemo").then((m) => ({ default: m.AiFileTreeDemo })),
  ),
  "ai-elements/image": lazy(() =>
    import("./AiImageDemo").then((m) => ({ default: m.AiImageDemo })),
  ),
  "ai-elements/inline-citation": lazy(() =>
    import("./AiInlineCitationDemo").then((m) => ({ default: m.AiInlineCitationDemo })),
  ),
  "ai-elements/jsx-preview": lazy(() =>
    import("./AiJsxPreviewDemo").then((m) => ({ default: m.AiJsxPreviewDemo })),
  ),
  "ai-elements/message": lazy(() =>
    import("./AiMessageDemo").then((m) => ({ default: m.AiMessageDemo })),
  ),
  "ai-elements/mic-selector": lazy(() =>
    import("./AiMicSelectorDemo").then((m) => ({ default: m.AiMicSelectorDemo })),
  ),
  "ai-elements/model-selector": lazy(() =>
    import("./AiModelSelectorDemo").then((m) => ({ default: m.AiModelSelectorDemo })),
  ),
  "ai-elements/node": lazy(() => import("./AiNodeDemo").then((m) => ({ default: m.AiNodeDemo }))),
  "ai-elements/open-in-chat": lazy(() =>
    import("./AiOpenInDemo").then((m) => ({ default: m.AiOpenInDemo })),
  ),
  "ai-elements/package-info": lazy(() =>
    import("./AiPackageInfoDemo").then((m) => ({ default: m.AiPackageInfoDemo })),
  ),
  "ai-elements/panel": lazy(() =>
    import("./AiPanelDemo").then((m) => ({ default: m.AiPanelDemo })),
  ),
  "ai-elements/persona": lazy(() =>
    import("./AiPersonaDemo").then((m) => ({ default: m.AiPersonaDemo })),
  ),
  "ai-elements/plan": lazy(() => import("./AiPlanDemo").then((m) => ({ default: m.AiPlanDemo }))),
  "ai-elements/prompt-input": lazy(() =>
    import("./AiPromptInputDemo").then((m) => ({ default: m.AiPromptInputDemo })),
  ),
  "ai-elements/question": lazy(() =>
    import("./AiQuestionDemo").then((m) => ({ default: m.AiQuestionDemo })),
  ),
  "ai-elements/queue": lazy(() =>
    import("./AiQueueDemo").then((m) => ({ default: m.AiQueueDemo })),
  ),
  "ai-elements/reasoning": lazy(() =>
    import("./AiReasoningDemo").then((m) => ({ default: m.AiReasoningDemo })),
  ),
  "ai-elements/sandbox": lazy(() =>
    import("./AiSandboxDemo").then((m) => ({ default: m.AiSandboxDemo })),
  ),
  "ai-elements/schema-display": lazy(() =>
    import("./AiSchemaDisplayDemo").then((m) => ({ default: m.AiSchemaDisplayDemo })),
  ),
  "ai-elements/shimmer": lazy(() =>
    import("./AiShimmerDemo").then((m) => ({ default: m.AiShimmerDemo })),
  ),
  "ai-elements/snippet": lazy(() =>
    import("./AiSnippetDemo").then((m) => ({ default: m.AiSnippetDemo })),
  ),
  "ai-elements/sources": lazy(() =>
    import("./AiSourcesDemo").then((m) => ({ default: m.AiSourcesDemo })),
  ),
  "ai-elements/speech-input": lazy(() =>
    import("./AiSpeechInputDemo").then((m) => ({ default: m.AiSpeechInputDemo })),
  ),
  "ai-elements/stack-trace": lazy(() =>
    import("./AiStackTraceDemo").then((m) => ({ default: m.AiStackTraceDemo })),
  ),
  "ai-elements/suggestion": lazy(() =>
    import("./AiSuggestionDemo").then((m) => ({ default: m.AiSuggestionDemo })),
  ),
  "ai-elements/task": lazy(() => import("./AiTaskDemo").then((m) => ({ default: m.AiTaskDemo }))),
  "ai-elements/terminal": lazy(() =>
    import("./AiTerminalDemo").then((m) => ({ default: m.AiTerminalDemo })),
  ),
  "ai-elements/test-results": lazy(() =>
    import("./AiTestResultsDemo").then((m) => ({ default: m.AiTestResultsDemo })),
  ),
  "ai-elements/toolbar": lazy(() =>
    import("./AiToolbarDemo").then((m) => ({ default: m.AiToolbarDemo })),
  ),
  "ai-elements/tool": lazy(() => import("./AiToolDemo").then((m) => ({ default: m.AiToolDemo }))),
  "ai-elements/transcription": lazy(() =>
    import("./AiTranscriptionDemo").then((m) => ({ default: m.AiTranscriptionDemo })),
  ),
  "ai-elements/voice-selector": lazy(() =>
    import("./AiVoiceSelectorDemo").then((m) => ({ default: m.AiVoiceSelectorDemo })),
  ),
  "ai-elements/web-preview": lazy(() =>
    import("./AiWebPreviewDemo").then((m) => ({ default: m.AiWebPreviewDemo })),
  ),
};

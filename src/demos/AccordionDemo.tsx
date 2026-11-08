import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ktbhealth/ui/components/accordion";
import { DemoStage } from "../shell";

export function AccordionDemo() {
  return (
    <DemoStage>
      <Accordion defaultValue={["faq-1"]} className="max-w-lg">
        <AccordionItem value="faq-1">
          <AccordionTrigger>How do telemedicine visits work?</AccordionTrigger>
          <AccordionContent>
            You join a scheduled video call from your dashboard. The doctor reviews your history
            beforehand and the summary is signed after the visit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>Can I reschedule an appointment?</AccordionTrigger>
          <AccordionContent>
            Yes, up to 24 hours before the scheduled time, directly from the appointment card.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Where are my records stored?</AccordionTrigger>
          <AccordionContent>
            Records are stored encrypted and shared only with the care team you authorize.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </DemoStage>
  );
}

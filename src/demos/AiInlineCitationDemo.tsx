import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardTrigger,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselItem,
  InlineCitationCarouselNext,
  InlineCitationCarouselPrev,
  InlineCitationQuote,
  InlineCitationSource,
  InlineCitationText,
} from "@ktbhealth/ui/components/ai-elements/inline-citation";
import { DemoStage } from "../shell";

const SOURCES = [
  {
    title: "ESC/ESH hypertension guidelines 2024",
    url: "https://academic.oup.com/eurheartj",
    description: "Target <140/90 mmHg for most adults; lower for high-risk patients.",
  },
  {
    title: "UpToDate: resistant hypertension",
    url: "https://www.uptodate.com",
    description: "Consider secondary causes when BP remains above target on 3 agents.",
  },
];

export function AiInlineCitationDemo() {
  return (
    <DemoStage>
      <p className="max-w-lg text-sm leading-relaxed">
        First-line therapy for this patient should be a long-acting ACE inhibitor
        <InlineCitation>
          <InlineCitationCard>
            <InlineCitationCardTrigger sources={SOURCES.map((s) => s.url!)} />
            <InlineCitationCardBody>
              <InlineCitationCarousel>
                <InlineCitationCarouselHeader>
                  <InlineCitationCarouselIndex />
                  <div className="flex gap-1">
                    <InlineCitationCarouselPrev />
                    <InlineCitationCarouselNext />
                  </div>
                </InlineCitationCarouselHeader>
                <InlineCitationCarouselContent>
                  {SOURCES.map((s) => (
                    <InlineCitationCarouselItem key={s.url}>
                      <InlineCitationSource title={s.title} url={s.url} description={s.description}>
                        <InlineCitationQuote>
                          <InlineCitationText>{s.description}</InlineCitationText>
                        </InlineCitationQuote>
                      </InlineCitationSource>
                    </InlineCitationCarouselItem>
                  ))}
                </InlineCitationCarouselContent>
              </InlineCitationCarousel>
            </InlineCitationCardBody>
          </InlineCitationCard>
        </InlineCitation>
        , combined with lifestyle modification and a 4-week follow-up.
      </p>
    </DemoStage>
  );
}

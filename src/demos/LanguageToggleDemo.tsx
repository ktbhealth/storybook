import { LanguageToggle } from "@ktbhealth/ui/components/language-toggle";
import { useState } from "react";
import { DemoStage } from "../shell";

const LOCALES = ["en", "pt-BR", "es"] as const;

const LABELS: Record<string, string> = {
  en: "English",
  "pt-BR": "Português (Brasil)",
  es: "Español",
};

export function LanguageToggleDemo() {
  const [locale, setLocale] = useState<string>("en");
  return (
    <DemoStage>
      <div className="flex items-center gap-4">
        <LanguageToggle
          locales={LOCALES}
          value={locale}
          onValueChange={setLocale}
          labels={LABELS}
        />
        <span className="text-sm text-muted-foreground">
          Current locale: <span className="font-medium text-foreground">{locale}</span>
        </span>
      </div>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        Icon-only trigger with a radio-group dropdown. Used in app shells for locale switching
        (Paraglide-backed in the product app).
      </p>
    </DemoStage>
  );
}

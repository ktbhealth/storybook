import type { ReactNode } from "react";
import { PageHeader } from "../shell";

import colorsRaw from "@ktbhealth/ui/brand/colors.json?raw";
import logoMarkSvg from "@ktbhealth/ui/brand/logo-mark.svg";
import logoMarkPng from "@ktbhealth/ui/brand/logo-mark.png";
import logoMarkInverseSvg from "@ktbhealth/ui/brand/logo-mark-inverse.svg";
import logoMarkInversePng from "@ktbhealth/ui/brand/logo-mark-inverse.png";
import logoHorizontalSvg from "@ktbhealth/ui/brand/logo-horizontal.svg";
import logoHorizontalPng from "@ktbhealth/ui/brand/logo-horizontal.png";
import logoHorizontalInverseSvg from "@ktbhealth/ui/brand/logo-horizontal-inverse.svg";
import logoHorizontalInversePng from "@ktbhealth/ui/brand/logo-horizontal-inverse.png";
import meetLight from "@ktbhealth/ui/brand/meet/meet-light.png";
import meetDark from "@ktbhealth/ui/brand/meet/meet-dark.png";
import meetPrimary from "@ktbhealth/ui/brand/meet/meet-primary.png";

const COLORS = JSON.parse(colorsRaw) as Record<string, string>;

const SWATCHES: { name: string; key: string; note: string }[] = [
  { name: "Primary", key: "primary", note: "--primary · logo tile, links, focus" },
  { name: "Ink", key: "ink", note: "--foreground · wordmark on light" },
  { name: "Accent", key: "accent", note: "--accent · light tint" },
  { name: "Deep", key: "deep", note: "Brand hue, dark backgrounds" },
  { name: "Deep alt", key: "deepAlt", note: "Brand hue, dark gradient end" },
];

function DownloadLink({
  href,
  filename,
  children,
}: {
  href: string;
  filename: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download={filename}
      className="inline-flex items-center rounded-md border bg-background px-2.5 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </a>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-sm font-semibold">{title}</h2>
      {description ? (
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function LogoCard({
  label,
  svg,
  png,
  file,
  surface,
  className,
}: {
  label: string;
  svg: string;
  png: string;
  file: string;
  surface: string;
  className?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div
        className={`flex h-40 items-center justify-center p-6 ${className ?? ""}`}
        style={{ background: surface }}
      >
        <img src={svg} alt={label} className="max-h-full max-w-full" />
      </div>
      <div className="flex items-center justify-between gap-2 border-t px-3 py-2">
        <p className="truncate text-xs font-medium">{label}</p>
        <div className="flex shrink-0 gap-1.5">
          <DownloadLink href={svg} filename={`${file}.svg`}>
            SVG
          </DownloadLink>
          <DownloadLink href={png} filename={`${file}.png`}>
            PNG
          </DownloadLink>
        </div>
      </div>
    </div>
  );
}

function MeetCard({ label, src, file }: { label: string; src: string; file: string }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <img
        src={src}
        alt={`${label} video-call background`}
        className="aspect-video w-full object-cover"
      />
      <div className="flex items-center justify-between gap-2 border-t px-3 py-2">
        <div>
          <p className="text-xs font-medium">{label}</p>
          <p className="text-[11px] text-muted-foreground">1920 × 1080 · PNG</p>
        </div>
        <DownloadLink href={src} filename={`${file}.png`}>
          Download
        </DownloadLink>
      </div>
    </div>
  );
}

export function BrandPage() {
  return (
    <div>
      <PageHeader
        title="Brand"
        description="KTB Health logo, colors and video-call backgrounds. Files live in @ktbhealth/ui/brand."
      />
      <div className="space-y-10 px-8 py-8">
        <Section
          title="Logo"
          description="The mark is the product icon: an open book with a medical cross. Use the regular lockup on light backgrounds and the inverse one on dark or brand-blue backgrounds."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <LogoCard
              label="Horizontal"
              svg={logoHorizontalSvg}
              png={logoHorizontalPng}
              file="ktb-health-logo"
              surface="#ffffff"
            />
            <LogoCard
              label="Horizontal · inverse on dark"
              svg={logoHorizontalInverseSvg}
              png={logoHorizontalInversePng}
              file="ktb-health-logo-inverse"
              surface={COLORS.deep ?? "#0b1a31"}
            />
            <LogoCard
              label="Horizontal · inverse on blue"
              svg={logoHorizontalInverseSvg}
              png={logoHorizontalInversePng}
              file="ktb-health-logo-inverse"
              surface={COLORS.primary ?? "#5d87c8"}
            />
            <LogoCard
              label="Mark"
              svg={logoMarkSvg}
              png={logoMarkPng}
              file="ktb-health-mark"
              surface="#ffffff"
              className="[&_img]:h-20"
            />
            <LogoCard
              label="Mark · inverse"
              svg={logoMarkInverseSvg}
              png={logoMarkInversePng}
              file="ktb-health-mark-inverse"
              surface={COLORS.primary ?? "#5d87c8"}
              className="[&_img]:h-20"
            />
          </div>
        </Section>

        <Section title="Usage">
          <ul className="max-w-2xl list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Keep clear space around the lockup equal to the height of the &ldquo;K&rdquo;.</li>
            <li>Minimum size: 24 px tall for the mark, 96 px wide for the horizontal logo.</li>
            <li>Do not recolor, stretch, rotate, outline or add effects to the mark.</li>
            <li>The wordmark is outlined (Geist), so the SVGs render the same without the font.</li>
          </ul>
        </Section>

        <Section
          title="Colors"
          description="Brand colors are converted from the design tokens. Tokens stay the source of truth in code; these hex values are for tools that cannot read CSS variables."
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SWATCHES.map((s) => (
              <div key={s.key} className="rounded-lg border bg-card p-3">
                <div
                  className="h-12 rounded-md border"
                  style={{ background: COLORS[s.key] }}
                  aria-hidden
                />
                <p className="mt-2 text-xs font-medium">{s.name}</p>
                <p className="font-mono text-[11px] uppercase text-muted-foreground">
                  {COLORS[s.key]}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground/70">{s.note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Typography"
          description="Geist for the wordmark and all UI text (the same font as the design system)."
        >
          <p className="text-3xl tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="font-bold">KTB</span> <span className="font-normal">Health</span>
          </p>
        </Section>

        <Section
          title="Video-call backgrounds"
          description="Use these as your background in Google Meet. The logo sits in the top-left corner so the center and the bottom, where you and the name label appear, stay clear."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MeetCard label="Light" src={meetLight} file="ktb-health-meet-light" />
            <MeetCard label="Dark" src={meetDark} file="ktb-health-meet-dark" />
            <MeetCard label="Brand blue" src={meetPrimary} file="ktb-health-meet-primary" />
          </div>
          <div className="mt-5 max-w-2xl rounded-lg border bg-muted/40 p-4 text-sm">
            <p className="font-medium">How to use in Google Meet</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted-foreground">
              <li>Download the PNG you prefer.</li>
              <li>
                In a meeting (or in the lobby), open <em>Apply visual effects</em>.
              </li>
              <li>
                Under <em>Backgrounds</em>, choose <strong>+</strong> and upload the file.
              </li>
            </ol>
            <p className="mt-2 text-xs text-muted-foreground">
              Meet mirrors your own background in your self-view only; everyone else sees it the
              right way around.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

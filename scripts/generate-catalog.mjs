#!/usr/bin/env bun
/**
 * Generates src/catalog/manifest.ts from the installed @ktbhealth/ui package.
 *
 * Scans packages/react/src/components (top-level shadcn-style components plus
 * KTB custom ones) and components/ai-elements, extracts exported identifiers,
 * picks a primary component export per file, and emits a typed manifest with a
 * lazy `loader` per entry so Vite code-splits every demo.
 *
 * Run: bun run catalog:generate   (after bun install)
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const UI_PKG = new URL(
  "../node_modules/@ktbhealth/ui/packages/react/src/components",
  import.meta.url,
).pathname;
const OUT = new URL("../src/catalog/manifest.ts", import.meta.url).pathname;

/** Top-level files that are KTB custom (not part of the default shadcn set). */
const KTB_CUSTOM = new Set([
  "app-dialog",
  "app-toast",
  "attachment",
  "bubble",
  "code-block",
  "direction",
  "job-status",
  "marker",
  "message",
  "message-scroller",
  "native-select",
  "questionnaire",
  "trace",
  "turnstile",
]);

const TYPE_ONLY = /^(type|interface)\s/;

function pascal(name) {
  return name
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

/** Extract value exports (components/functions/consts) from a TSX source. */
function extractExports(src) {
  const names = new Set();
  // export { A, B as C, type D }
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of m[1].split(",")) {
      const p = part.trim();
      if (!p || TYPE_ONLY.test(p)) continue;
      const alias = p
        .split(/\s+as\s+/)
        .pop()
        .trim();
      if (/^[A-Z]/.test(alias)) names.add(alias);
    }
  }
  // export function X / export const X / export class X
  for (const m of src.matchAll(
    /export\s+(?:async\s+)?(?:function|const|class|let)\s+([A-Za-z_$][\w$]*)/g,
  )) {
    if (/^[A-Z]/.test(m[1])) names.add(m[1]);
  }
  return [...names];
}

function pickPrimary(fileBase, exports_) {
  const wanted = pascal(fileBase);
  if (exports_.includes(wanted)) return wanted;
  // Prefer a PascalCase export that is not a variants/helper.
  const componentish = exports_.filter((n) => !n.endsWith("Variants") && !/^(use|cn)/.test(n));
  return componentish[0] ?? exports_[0] ?? pascal(fileBase);
}

function scanDir(dir, subPath, family) {
  const entries = [];
  for (const file of readdirSync(dir).sort()) {
    if (!file.endsWith(".tsx") || file.endsWith(".test.tsx")) continue;
    const base = file.replace(/\.tsx$/, "");
    const id = subPath ? `${subPath}/${base}` : base;
    const src = readFileSync(join(dir, file), "utf8");
    const exports_ = extractExports(src);
    const primary = pickPrimary(base, exports_);
    entries.push({
      id,
      name: base,
      family,
      label: pascal(base),
      exports: exports_,
      primary,
      importPath: `@ktbhealth/ui/components/${id}`,
    });
  }
  return entries;
}

const topLevel = scanDir(UI_PKG, "", (f) => f); // placeholder, family set below
const aiDir = join(UI_PKG, "ai-elements");
const aiElements = scanDir(aiDir, "ai-elements", "ai-elements");

const core = [];
const ktb = [];
for (const e of topLevel) {
  (KTB_CUSTOM.has(e.name) ? ktb : core).push({
    ...e,
    family: KTB_CUSTOM.has(e.name) ? "ktb" : "core",
  });
}

const all = [...core, ...ktb, ...aiElements];

const FAMILY_LABEL = {
  core: "Core (shadcn)",
  ktb: "KTB Custom",
  "ai-elements": "AI Elements",
};

const lines = [];
lines.push("// GENERATED FILE — do not edit. Run `bun run catalog:generate`.");
lines.push("// Source: node_modules/@ktbhealth/ui/packages/react/src/components");
lines.push("");
lines.push("export type CatalogFamily = 'core' | 'ktb' | 'ai-elements';");
lines.push("");
lines.push("export interface CatalogEntry {");
lines.push("\tid: string;");
lines.push("\tname: string;");
lines.push("\tfamily: CatalogFamily;");
lines.push("\tlabel: string;");
lines.push("\texports: string[];");
lines.push("\tprimary: string;");
lines.push("\timportPath: string;");
lines.push("\tloader: () => Promise<unknown>;");
lines.push("}");
lines.push("");
lines.push("export const FAMILY_LABELS: Record<CatalogFamily, string> = {");
for (const [k, v] of Object.entries(FAMILY_LABEL))
  lines.push(`\t${JSON.stringify(k)}: ${JSON.stringify(v)},`);
lines.push("};");
lines.push("");
lines.push("export const FAMILY_ORDER: CatalogFamily[] = ['core', 'ktb', 'ai-elements'];");
lines.push("");
lines.push(`export const CATALOG: CatalogEntry[] = [`);
for (const e of all) {
  lines.push("\t{");
  lines.push(`\t\tid: ${JSON.stringify(e.id)},`);
  lines.push(`\t\tname: ${JSON.stringify(e.name)},`);
  lines.push(`\t\tfamily: ${JSON.stringify(e.family)},`);
  lines.push(`\t\tlabel: ${JSON.stringify(e.label)},`);
  lines.push(`\t\texports: ${JSON.stringify(e.exports)},`);
  lines.push(`\t\tprimary: ${JSON.stringify(e.primary)},`);
  lines.push(`\t\timportPath: ${JSON.stringify(e.importPath)},`);
  lines.push(`\t\tloader: () => import(${JSON.stringify(e.importPath)}),`);
  lines.push("\t},");
}
lines.push("];");
lines.push("");

writeFileSync(OUT, lines.join("\n"));
console.log(`Wrote ${OUT}`);
console.log(
  `  core: ${core.length}, ktb: ${ktb.length}, ai-elements: ${aiElements.length} (total ${all.length})`,
);
const missing = all.filter((e) => !e.exports.includes(e.primary));
if (missing.length)
  console.log("  note: primary fallback used for:", missing.map((m) => m.id).join(", "));

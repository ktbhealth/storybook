# storybook — agent guide

Component catalog for `@ktbhealth/ui` (sibling repo `../ui`).
Vite + TanStack Start app deployed to Cloudflare Workers via Alchemy.

## Commands

- `bun run dev` — local catalog (:3100)
- `bun run build` / `bun run check`
- `bun run deploy` — Alchemy deploy (needs cuora vault access)
- `bun run catalog:generate` — regenerate catalog data from ui sources

## Rules

- This repo documents `ui` components — it does not own them. Component
  changes happen in `../ui`, then `catalog:generate` refreshes here.
- Check stories here BEFORE building new UI in consumer apps
  (ktbhealth, website-draft).

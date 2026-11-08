import { render, waitFor } from "@testing-library/react";
import { Suspense } from "react";
import { describe, expect, it } from "vitest";
import { CATALOG } from "../catalog/manifest";
import { DEMOS } from "./index";

// Demos that rely on browser APIs absent from jsdom. Each entry must have a
// comment in the demo file explaining the limitation; prefer shimming or
// composing static sub-parts over skipping.
const SKIP_IN_JSDOM = new Set<string>([
  // @rive-app/react-webgl2 needs a real WebGL2 canvas/context.
  "ai-elements/persona",
  // iframe + console-message interception can't be exercised in jsdom.
  "ai-elements/web-preview",
  // media-chrome needs real HTMLMediaElement playback APIs jsdom lacks.
  "ai-elements/audio-player",
]);

const covered = CATALOG.filter((entry) => !SKIP_IN_JSDOM.has(entry.id));

describe("catalog demo registry", () => {
  it("every manifest entry has a registered demo", () => {
    const missing = CATALOG.filter((entry) => !(entry.id in DEMOS)).map((e) => e.id);
    expect(missing).toEqual([]);
  });

  it("every registered demo maps to a manifest entry", () => {
    const ids = new Set(CATALOG.map((e) => e.id));
    const orphan = Object.keys(DEMOS).filter((id) => !ids.has(id));
    expect(orphan).toEqual([]);
  });
});

describe.each(covered.map((entry) => [entry.id, entry] as const))("demo %s", (id) => {
  it("renders without throwing", async () => {
    const Demo = DEMOS[id];
    expect(Demo).toBeDefined();
    const { container } = render(
      <Suspense fallback={null}>
        <Demo />
      </Suspense>,
    );
    await waitFor(() => expect(container.children.length).toBeGreaterThan(0), {
      timeout: 15000,
    });
  });
});

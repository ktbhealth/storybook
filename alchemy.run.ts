import * as Alchemy from "alchemy";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Effect from "effect/Effect";
import { deployStaticSite } from "@ktb/infra-cloudflare";

export default Alchemy.Stack(
  "ktb-storybook",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    // Static component catalog SPA. `bun run build` (vp build) emits
    // the static site into dist/.
    const site = yield* deployStaticSite({
      name: "storybook",
      outdir: "dist",
      // Client-routed SPA: unknown paths must serve index.html. The asset
      // layer's notFoundHandling does not reach the deployed worker, so a
      // tiny entrypoint in front of the assets handles the fallback.
      spa: true,
      main: "worker/spa.mjs",
    });

    return { url: site.url };
  }),
);

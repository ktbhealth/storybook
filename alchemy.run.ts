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
    });

    return { url: site.url };
  }),
);

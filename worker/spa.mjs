// SPA fallback for the static catalog: the asset layer serves real files
// directly; anything else that 404s gets index.html so the client router
// can resolve /components/* and /blocks/* deep links.
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    if (res.status !== 404 || request.method !== "GET") {
      return res;
    }
    const { pathname } = new URL(request.url);
    // Paths with a file extension are asset misses — keep the real 404.
    if (pathname.includes(".")) {
      return res;
    }
    return env.ASSETS.fetch(new URL("/index.html", request.url).toString());
  },
};

import { beforeAll } from "vitest";

// jsdom lacks several browser APIs used by Base UI, React Flow, media
// components, and embla-carousel. Provide minimal stubs so demos can mount.
beforeAll(() => {
  class ResizeObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  class IntersectionObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }

  // @ts-expect-error -- jsdom global stub
  globalThis.ResizeObserver ??= ResizeObserverStub;
  // @ts-expect-error -- jsdom global stub
  globalThis.IntersectionObserver ??= IntersectionObserverStub;

  window.matchMedia ??= ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;

  Element.prototype.scrollIntoView ??= () => {};
  window.scrollTo ??= (() => {}) as typeof window.scrollTo;

  // Base UI scroll-area calls element.getAnimations() after scroll settles.
  Element.prototype.getAnimations ??= (() => []) as typeof Element.prototype.getAnimations;

  // jsdom's Blob lacks .stream(), which @shikijs/engine-oniguruma needs to
  // decompress its inlined wasm.
  if (typeof Blob !== "undefined" && !("stream" in Blob.prototype)) {
    // @ts-expect-error -- jsdom Blob stub
    Blob.prototype.stream = function stream(this: Blob) {
      const blob = this;
      return new ReadableStream<Uint8Array>({
        async start(controller) {
          controller.enqueue(new Uint8Array(await blob.arrayBuffer()));
          controller.close();
        },
      });
    };
  }

  const mediaDevices = {
    enumerateDevices: async () => [],
    getUserMedia: async () => {
      throw new Error("getUserMedia is not available in jsdom");
    },
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => false,
  };
  if (!navigator.mediaDevices) {
    Object.defineProperty(navigator, "mediaDevices", {
      configurable: true,
      value: mediaDevices,
    });
  } else {
    // jsdom may provide a partial mediaDevices object; fill gaps.
    for (const [key, value] of Object.entries(mediaDevices)) {
      if (!(key in navigator.mediaDevices)) {
        // @ts-expect-error -- partial stub
        navigator.mediaDevices[key] = value;
      }
    }
  }
});

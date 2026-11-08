import {
  Component as ReactComponent,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

class PreviewBoundary extends ReactComponent<{ children: ReactNode }, { error: boolean }> {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex h-full items-center justify-center text-[11px] text-muted-foreground">
          preview unavailable
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Live, non-interactive thumbnail of a catalog demo. Mounts lazily via
 * IntersectionObserver so the index page doesn't render all ~115 demos
 * (mermaid, charts, WebGL) up front; clipped to a fixed-height window.
 */
export function ComponentPreview({ Demo }: { Demo: ComponentType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none h-44 select-none overflow-hidden rounded-md border bg-muted/30"
    >
      {visible ? (
        <PreviewBoundary>
          <Suspense fallback={null}>
            {/* DemoStage renders its own card chrome (border, p-8); strip it
                so the demo fills the preview instead of nesting a card. */}
            <div className="h-full w-full overflow-hidden p-3 [&_[data-demo-stage]]:rounded-none [&_[data-demo-stage]]:border-0 [&_[data-demo-stage]]:bg-transparent [&_[data-demo-stage]]:p-3 [&_[data-demo-stage]]:shadow-none">
              <Demo />
            </div>
          </Suspense>
        </PreviewBoundary>
      ) : (
        <div className="h-full animate-pulse bg-muted/40" />
      )}
    </div>
  );
}

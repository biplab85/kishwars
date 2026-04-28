"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils/cn";

type Props = {
  className?: string;
  height?: string;
  build?: (ctx: { root: HTMLDivElement; tl: gsap.core.Timeline }) => void;
  children: React.ReactNode;
};

/**
 * Pinned ScrollTrigger primitive. Children render inside a sticky stage;
 * `build` receives a timeline scrubbed to scroll position.
 */
export function PinnedScene({
  className,
  height = "300vh",
  build,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const root = ref.current;
    const stageEl = stage.current;
    if (!root || !stageEl || typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;

    if (reduce || isMobile) {
      // Simplified mobile/reduced timeline — no pinning, no scrub.
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          pin: stageEl,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });
      build?.({ root, tl });
    }, root);

    return () => ctx.revert();
  }, [build]);

  return (
    <section
      ref={ref}
      className={cn("relative", className)}
      style={{ height }}
    >
      <div ref={stage} className="sticky top-0 h-screen w-full overflow-hidden">
        {children}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils/cn";

type Props = {
  className?: string;
  innerClassName?: string;
  speed?: number;
  children: React.ReactNode;
};

export function ParallaxImage({
  className,
  innerClassName,
  speed = 0.15,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const root = ref.current;
    const target = inner.current;
    if (!root || !target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.fromTo(
      target,
      { yPercent: -speed * 100 },
      {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div ref={inner} className={cn("h-[120%] w-full", innerClassName)}>
        {children}
      </div>
    </div>
  );
}

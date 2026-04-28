"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils/cn";

type Variant = "rise" | "fade" | "clip";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: Variant;
  delay?: number;
  duration?: number;
  start?: string;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  duration = 1.1,
  start = "top 85%",
  once = true,
  className,
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (typeof window === "undefined" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(ref.current, { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    const el = ref.current;
    const initial =
      variant === "rise"
        ? { opacity: 0, y: 48 }
        : variant === "fade"
          ? { opacity: 0 }
          : { clipPath: "inset(0% 0% 100% 0%)" };

    const target =
      variant === "clip"
        ? { clipPath: "inset(0% 0% 0% 0%)" }
        : { opacity: 1, y: 0 };

    gsap.set(el, initial);
    const tween = gsap.to(el, {
      ...target,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        once,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, delay, duration, start, once]);

  const Tag2 = Tag as React.ElementType;
  return (
    <Tag2 ref={ref} className={cn(className)}>
      {children}
    </Tag2>
  );
}

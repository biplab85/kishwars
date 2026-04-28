"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils/cn";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  strength?: number;
};

export function MagneticCTA({
  strength = 0.3,
  className,
  children,
  ...props
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      gsap.to(el, { x: dx, y: dy, duration: 0.6, ease: "power3.out" });
    };
    const reset = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, [strength]);

  return (
    <a ref={ref} className={cn("inline-block", className)} {...props}>
      {children}
    </a>
  );
}

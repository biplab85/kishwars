"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils/cn";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  parallax?: number;
  reveal?: boolean;
  duotone?: boolean;
  fill?: boolean;
};

/**
 * Editorial photograph with optional parallax + clip-path reveal.
 * Use `fill` for absolute-positioned cover; otherwise width/height auto from aspect.
 */
export function EditorialImage({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  parallax = 0,
  reveal = true,
  duotone = false,
  fill = true,
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const r = root.current;
    const i = inner.current;
    if (!r || !i) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reveal && !reduce) {
        gsap.fromTo(
          r,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: r, start: "top 85%", once: true },
          },
        );
      }
      if (parallax !== 0 && !reduce) {
        gsap.fromTo(
          i,
          { yPercent: -parallax * 100 },
          {
            yPercent: parallax * 100,
            ease: "none",
            scrollTrigger: {
              trigger: r,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    }, r);

    return () => ctx.revert();
  }, [parallax, reveal]);

  return (
    <div
      ref={root}
      className={cn(
        "relative overflow-hidden bg-smoke",
        className,
      )}
    >
      <div ref={inner} className="absolute inset-0 h-[120%] w-full">
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          priority={priority}
          quality={85}
          className={cn(
            "object-cover",
            duotone && "[filter:grayscale(0.2)_contrast(1.05)_brightness(0.9)_sepia(0.15)]",
          )}
        />
      </div>
      {duotone && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, rgb(var(--kc-ember) / 0.15) 0%, rgb(var(--kc-ember) / 0.55) 100%)",
          }}
        />
      )}
      <div aria-hidden className="pointer-events-none absolute inset-0 grain" />
    </div>
  );
}

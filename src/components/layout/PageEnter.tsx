"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

export function PageEnter() {
  const root = useRef<HTMLDivElement>(null);
  const bn = useRef<HTMLSpanElement>(null);
  const wm = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    registerGsap();
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document.documentElement.style.overflow = "";
      setDone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        setDone(true);
      },
    });

    tl.to(bn.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
      .to(
        wm.current,
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4",
      )
      .to({}, { duration: 0.5 })
      .to(bn.current, { opacity: 0, y: -10, duration: 0.6, ease: "power2.in" })
      .to(wm.current, { opacity: 0, y: -10, duration: 0.6, ease: "power2.in" }, "<")
      .to(
        root.current,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.0,
          ease: "expo.inOut",
        },
        "-=0.2",
      );

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ember"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <span
        ref={bn}
        className="font-display italic text-cream"
        style={{
          fontSize: "clamp(4rem, 14vw, 12rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        Memoir
      </span>
      <span
        ref={wm}
        className="mt-8 text-[10px] tracking-[0.5em] uppercase text-cream/60"
        style={{ opacity: 0, transform: "translateY(12px)" }}
      >
        Kishwar Chowdhury
      </span>
    </div>
  );
}

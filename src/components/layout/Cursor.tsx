"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => {
      ring.current?.setAttribute("data-hover", "true");
    };
    const onLeave = () => {
      ring.current?.removeAttribute("data-hover");
    };

    const interactive = "a, button, [data-cursor='hover'], input, textarea";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/50 mix-blend-difference transition-[width,height,border-color,background] duration-300 ease-cinematic data-[hover=true]:h-16 data-[hover=true]:w-16 data-[hover=true]:border-saffron/0 data-[hover=true]:bg-saffron/30"
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream mix-blend-difference"
      />
      <style jsx global>{`
        @media (pointer: fine) {
          html,
          body,
          a,
          button {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}

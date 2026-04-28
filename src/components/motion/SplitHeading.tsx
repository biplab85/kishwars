"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils/cn";

type Props = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  start?: string;
  stagger?: number;
  children: React.ReactNode;
};

/**
 * Splits each direct child element into per-character spans
 * and animates them with a staggered rise. Wrap each line in a span.
 */
export function SplitHeading({
  as = "h2",
  className,
  delay = 0,
  start = "top 80%",
  stagger = 0.018,
  children,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    registerGsap();
    const root = ref.current;
    if (!root || typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = Array.from(root.querySelectorAll<HTMLElement>("[data-line]"));
    if (lines.length === 0) return;

    const allChars: HTMLSpanElement[] = [];
    lines.forEach((line) => {
      // If line contains only text, split. If it contains markup (e.g. <em>),
      // walk and split each text node, preserving inline elements.
      const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
      const texts: Text[] = [];
      let n: Node | null = walker.nextNode();
      while (n) {
        texts.push(n as Text);
        n = walker.nextNode();
      }
      texts.forEach((t) => {
        const parent = t.parentNode;
        if (!parent) return;
        const frag = document.createDocumentFragment();
        for (const ch of Array.from(t.nodeValue ?? "")) {
          const span = document.createElement("span");
          span.className = "split-char";
          if (ch === " ") {
            span.innerHTML = "&nbsp;";
          } else {
            span.textContent = ch;
          }
          frag.appendChild(span);
          allChars.push(span);
        }
        parent.replaceChild(frag, t);
      });
    });

    if (reduce) {
      gsap.set(allChars, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(allChars, { yPercent: 110, opacity: 0 });
    const tween = gsap.to(allChars, {
      yPercent: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power4.out",
      stagger,
      delay,
      scrollTrigger: { trigger: root, start, once: true },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, start, stagger]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}

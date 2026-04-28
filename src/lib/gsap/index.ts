"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  registered = true;
}

/**
 * Custom split-text helper. We avoid GSAP SplitText (paid plugin)
 * and split into per-character spans manually.
 */
export function splitChars(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent ?? "";
  el.textContent = "";
  const frag = document.createDocumentFragment();
  const chars: HTMLSpanElement[] = [];
  for (const ch of Array.from(text)) {
    const span = document.createElement("span");
    span.className = "split-char";
    span.textContent = ch === " " ? " " : ch;
    if (ch === " ") span.style.width = "0.25em";
    frag.appendChild(span);
    chars.push(span);
  }
  el.appendChild(frag);
  return chars;
}

export { gsap, ScrollTrigger };

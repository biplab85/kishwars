"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { text } from "@/content/text";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

const pressItems = [
  {
    image:
      "https://static.wixstatic.com/media/a338cb_312b12466f414ed2b7be48cca1e2fd51~mv2.png",
    alt: "Press feature — Kishwar Chowdhury editorial.",
    outlet: "Network 10 · MasterChef",
    year: "2021",
    quote:
      "Now my life starts. Kishwar Chowdhury takes third in the MasterChef Australia 2021 grand finale.",
  },
  {
    image:
      "https://static.wixstatic.com/media/a338cb_a58ac012fae844fead9bdef81ff5d636~mv2.png",
    alt: "Press feature — Kishwar Chowdhury portrait.",
    outlet: "BD News 24",
    year: "2021",
    quote:
      "Kishwar reimagined Bengali dishes on Australia's most-watched cooking stage and finished third.",
  },
  {
    image:
      "https://static.wixstatic.com/media/a338cb_a932c7ae0c1b425ebe949b98d26920b2~mv2.png",
    alt: "Press feature — Kishwar Chowdhury cover story.",
    outlet: "The Daily Star",
    year: "2022",
    quote:
      "After MasterChef, Kishwar continues her training under Michelin-star chef Masahiko Yomoda.",
  },
];

const CARD_HEIGHT = 380;

export function PressWall() {
  const { eyebrow, intro, logos } = text.pressWall;
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: drive the giant "PRESS" watermark via scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pressY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  // Subtle shrink as the section scrolls past — start full-size, end smaller
  const pressScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.78]);

  // Fancybox lightbox for the press images
  useEffect(() => {
    Fancybox.bind('[data-fancybox="press"]');
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section
      id="press"
      ref={sectionRef}
      className="relative overflow-hidden bg-ember py-[var(--space-section)]"
    >
      {/* Premium background — newsprint halftone + ink-wash bands + watermark */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Halftone dot pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none">
          <defs>
            <pattern
              id="kc-press-halftone"
              x="0"
              y="0"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1" fill="rgb(var(--kc-cream) / 0.06)" />
            </pattern>
            <pattern
              id="kc-press-halftone-warm"
              x="0"
              y="0"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="22" cy="22" r="1.5" fill="rgba(226,118,27,0.06)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kc-press-halftone)" />
          <rect width="100%" height="100%" fill="url(#kc-press-halftone-warm)" />
        </svg>

        {/* Drifting horizontal ink-wash bands */}
        <motion.div
          className="absolute left-[-20%] h-[160px] w-[140%]"
          style={{
            top: "22%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(226,118,27,0.20) 50%, transparent 100%)",
            filter: "blur(45px)",
          }}
          animate={{ x: ["-8%", "8%", "-8%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[-20%] h-[200px] w-[140%]"
          style={{
            top: "62%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(122,31,43,0.22) 50%, transparent 100%)",
            filter: "blur(55px)",
          }}
          animate={{ x: ["8%", "-8%", "8%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[-15%] h-[110px] w-[130%]"
          style={{
            top: "85%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,162,74,0.18) 50%, transparent 100%)",
            filter: "blur(40px)",
          }}
          animate={{ x: ["-6%", "6%", "-6%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Giant faded "PRESS" watermark — parallax on scroll */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.span
            className="select-none whitespace-nowrap font-display font-bold leading-none text-cream/[0.035]"
            style={{
              fontSize: "30vw",
              letterSpacing: "-0.06em",
              y: pressY,
              scale: pressScale,
              willChange: "transform",
            }}
          >
            PRESS
          </motion.span>
        </div>

        {/* Quote-mark editorial ornament */}
        <svg
          className="absolute left-[4%] top-[12%] hidden h-32 w-32 lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="kc-press-quote" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2761B" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7A1F2B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 18 52 q 0 -22, 22 -22 v 8 q -14 0, -14 14 h 14 v 22 h -22 z M 56 52 q 0 -22, 22 -22 v 8 q -14 0, -14 14 h 14 v 22 h -22 z"
            stroke="url(#kc-press-quote)"
            strokeWidth="1.2"
            fill="rgba(226,118,27,0.04)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Asterisk ornament — bottom-right, slowly rotating forever */}
        <svg
          className="absolute right-[6%] bottom-[10%] hidden h-28 w-28 text-gold/45 lg:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
        >
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "12px 12px" }}
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
          </motion.g>
        </svg>

        {/* Drifting saffron/gold dust */}
        {Array.from({ length: 10 }).map((_, i) => {
          const left = `${(i * 13 + 6) % 95}%`;
          const top = `${(i * 19 + 10) % 88}%`;
          const dur = 8 + (i % 4) * 2;
          const delay = (i % 5) * 0.6;
          const isGold = i % 2 === 0;
          return (
            <motion.span
              key={i}
              className={`absolute block h-[3px] w-[3px] rounded-full ${
                isGold ? "bg-gold/45" : "bg-saffron/45"
              }`}
              style={{ left, top }}
              animate={{ x: [0, 12, 0], y: [0, -14, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}

        {/* Hairlines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pomegranate/25 to-transparent" />

        {/* Soft edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgb(var(--kc-ember) / 0.45)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="lg:max-w-[44vw]">
          <Reveal variant="rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise" delay={0.1}>
            <p
              className="mt-6 max-w-[24ch] font-display text-cream"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
              }}
            >
              {intro}
            </p>
          </Reveal>
          <Reveal variant="fade" delay={0.2}>
            <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream/50">
              <motion.span
                aria-hidden
                className="block h-2 w-2 rounded-full bg-saffron"
                animate={{ scale: [1, 1.4, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span>{logos.length} outlets · 3 features</span>
            </div>
          </Reveal>
        </div>

        {/* Image + Quote pair grid — each pair is a column, image and quote share equal height */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pressItems.map((item, i) => (
            <Reveal key={i} variant="rise" delay={i * 0.1} className="flex flex-col gap-6">
              {/* Image card — opens Fancybox on click */}
              <a
                href={item.image}
                data-fancybox="press"
                data-caption={`${item.outlet} — ${item.year}`}
                aria-label={`Open ${item.outlet} press image`}
                className="group relative block cursor-zoom-in overflow-hidden rounded-sm bg-smoke shadow-[0_2px_18px_-8px_rgba(0,0,0,0.4)] transition-[transform,box-shadow] duration-500 ease-cinematic hover:-translate-y-2 hover:shadow-[0_28px_60px_-18px_rgba(226,118,27,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                style={{ height: CARD_HEIGHT }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  quality={85}
                  className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.06]"
                />
                {/* Warm overlay — darkens slightly on hover for typographic punch */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ember/60 via-ember/0 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                />
                <div aria-hidden className="absolute inset-0 grain" />
                {/* Inner ring — intensifies to saffron on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/10 transition-colors duration-500 group-hover:ring-saffron/45"
                />
                {/* Saffron sweep — light grazes diagonally on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                >
                  <span
                    className="absolute -top-1/2 left-0 block h-[200%] w-[35%] -translate-x-[140%] -skew-x-12 transition-transform duration-1000 ease-cinematic group-hover:translate-x-[280%]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.16) 50%, transparent 100%)",
                    }}
                  />
                </span>
                {/* Frame badge */}
                <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full bg-ember/85 px-3 py-1 text-[10px] tracking-[0.4em] uppercase text-cream backdrop-blur-sm transition-colors duration-500 group-hover:bg-saffron group-hover:text-ember">
                  <span aria-hidden className="block h-1 w-1 rounded-full bg-saffron transition-colors duration-500 group-hover:bg-ember" />
                  Frame {["Ⅰ", "Ⅱ", "Ⅲ"][i]}
                </div>
                {/* Magnify icon — slides in + scales up on hover */}
                <div className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ember/85 text-cream/80 opacity-0 shadow-lg shadow-pomegranate/30 backdrop-blur-sm transition-all duration-400 group-hover:scale-110 group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <circle cx="11" cy="11" r="6" />
                    <path d="M16 16l5 5M9 11h4M11 9v4" />
                  </svg>
                </div>
                {/* Caption pill — emerges from bottom on hover */}
                <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 translate-y-3 rounded-sm bg-ember/85 px-3 py-2 opacity-0 backdrop-blur-sm transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-cream/85">
                    {item.outlet}
                  </p>
                </div>
              </a>

              {/* Quote card — same height as image */}
              <div
                className="group relative flex cursor-default flex-col justify-between rounded-sm border border-cream/10 bg-smoke/40 p-7 shadow-[0_2px_18px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-[transform,box-shadow,background-color,border-color] duration-500 ease-cinematic hover:-translate-y-2 hover:border-saffron/30 hover:bg-smoke/55 hover:shadow-[0_28px_60px_-18px_rgba(122,31,43,0.45)] md:p-8"
                style={{ height: CARD_HEIGHT }}
              >
                {/* Decorative quote glyph — brightens on hover */}
                <span
                  aria-hidden
                  className="absolute right-6 top-4 font-display leading-[0.4] text-pomegranate/30 transition-colors duration-500 group-hover:text-pomegranate/60"
                  style={{ fontSize: "5rem" }}
                >
                  &ldquo;
                </span>

                {/* Saffron underline accent that slides in from the left on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-saffron via-gold to-pomegranate transition-[width] duration-700 ease-cinematic group-hover:w-full"
                />

                <div className="relative">
                  <p className="text-[11px] tracking-[0.32em] uppercase text-saffron/80 transition-colors duration-500 group-hover:text-saffron">
                    {item.outlet}
                  </p>
                </div>

                <blockquote
                  className="relative font-display italic text-cream/90 transition-colors duration-500 group-hover:text-cream"
                  style={{
                    fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
                    lineHeight: 1.35,
                  }}
                >
                  {item.quote}
                </blockquote>

                <div className="relative flex items-center justify-between border-t border-cream/10 pt-4 text-[10px] tracking-[0.4em] uppercase text-cream/55 transition-colors duration-500 group-hover:border-cream/25">
                  <div className="flex items-center gap-2">
                    <span aria-hidden className="h-px w-6 bg-cream/30 transition-all duration-500 group-hover:w-12 group-hover:bg-saffron" />
                    <span>Coverage</span>
                  </div>
                  <span className="font-display italic normal-case tracking-normal text-cream/70 transition-colors duration-500 group-hover:text-cream">
                    {item.year}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Auto-scrolling marquee — full width, paper names, right to left, infinite */}
      <div className="relative z-10 mt-20 overflow-hidden border-y border-cream/10 py-8">
        {/* Soft fade masks at edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-ember to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-ember to-transparent"
        />
        <motion.div
          className="flex shrink-0 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-display text-xl text-cream/55 transition-colors duration-300 hover:text-cream lg:text-2xl">
                {logo.name}
              </span>
              {/* Separator — saffron diamond between names */}
              <span
                aria-hidden
                className="mx-8 inline-flex items-center text-saffron/55 lg:mx-10"
              >
                <svg
                  viewBox="0 0 8 8"
                  className="h-2 w-2 rotate-45"
                  fill="currentColor"
                >
                  <rect x="0" y="0" width="8" height="8" />
                </svg>
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

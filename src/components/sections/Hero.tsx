"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { gsap, registerGsap } from "@/lib/gsap";
import { text } from "@/content/text";
import { images } from "@/content/images";

const ROMAN = ["Ⅰ", "Ⅱ", "Ⅲ"];

const photos = [
  {
    src: "/assets/Kishwar.jpg",
    alt: "Kishwar Chowdhury — editorial portrait.",
    objectPosition: "center 25%",
  },
  {
    src: images.masterchefStill.src,
    alt: images.masterchefStill.alt,
    objectPosition: "center 30%",
  },
  {
    src: images.storyToday.src,
    alt: images.storyToday.alt,
    objectPosition: "center 30%",
  },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const slides = text.hero.slides;

  // Native scroll progress drives the slide counter (independent of GSAP scrub)
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let idx = 0;
    if (v >= 0.72) idx = 2;
    else if (v >= 0.36) idx = 1;
    setActive((prev) => (prev === idx ? prev : idx));
  });

  // Smooth parallax — text drifts up, image drifts down + breathes scale
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.0, 1.04]);

  useEffect(() => {
    registerGsap();
    const r = root.current;
    const s = stage.current;
    if (!r || !s) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const slideEls = Array.from(s.querySelectorAll<HTMLElement>("[data-slide]"));
      const photoEls = Array.from(s.querySelectorAll<HTMLElement>("[data-photo]"));

      // Photos are stacked with each later slide rendered visually ABOVE the previous.
      // Only the incoming photo fades IN; the previous photo stays at full opacity
      // underneath so there is never a moment where the dark ember background shows
      // through (which used to look like a black overlay).
      gsap.set(photoEls.slice(1), { opacity: 0 });
      // Text slides cross-fade sequentially (out then in with a tiny overlap)
      gsap.set(slideEls.slice(1), { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: r,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.3,
          pin: s,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      slideEls.forEach((slide, i) => {
        if (i === 0) return;
        const dwell = "+=1.6";
        // Photo: fade IN only (the previous one keeps showing at 100% beneath it)
        tl.to(
          photoEls[i],
          { opacity: 1, duration: 1.0, ease: "power2.inOut" },
          dwell,
        )
          // Text: fade OUT old (fast)
          .to(
            slideEls[i - 1],
            { opacity: 0, duration: 0.45, ease: "power2.in" },
            "<",
          )
          // Text: fade IN new, overlapping the tail of the old fade-out by 0.1s
          .to(
            slide,
            { opacity: 1, duration: 0.55, ease: "power2.out" },
            ">-0.1",
          );
      });
    }, r);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="relative" style={{ height: "300vh" }}>
      <div
        ref={stage}
        className="sticky top-0 grid h-[100svh] grid-rows-[1fr_auto] overflow-hidden bg-ember"
      >
        {/* Photo stack — pure opacity cross-fade, with a smooth parallax on Y + scale */}
        <motion.div
          className="absolute inset-0"
          style={{ y: photoY, scale: photoScale, willChange: "transform" }}
        >
          {slides.map((_, i) => (
            <div
              key={i}
              data-photo
              className="absolute inset-0"
              style={{ zIndex: i }}
            >
              <Image
                src={photos[i].src}
                alt={photos[i].alt}
                fill
                priority={i === 0}
                quality={90}
                sizes="100vw"
                className="object-cover"
                style={{
                  filter: "brightness(0.6) contrast(1.05) saturate(1.05)",
                  objectPosition: photos[i].objectPosition,
                }}
              />
              {/* Vignette + warm gradient — preserved from original */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 70% at 50% 60%, transparent 30%, rgb(var(--kc-ember) / 0.65) 80%), linear-gradient(180deg, rgb(var(--kc-ember) / 0.4) 0%, transparent 30%, rgb(var(--kc-ember) / 0.7) 100%), radial-gradient(ellipse at 80% 100%, rgba(226,118,27,0.3), transparent 60%)",
                }}
              />
              <div aria-hidden className="absolute inset-0 grain" />
            </div>
          ))}
        </motion.div>

        {/* Slide counter — top-right (below the global nav bar) */}
        <div className="absolute right-10 top-24 z-20 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
          <motion.span
            aria-hidden
            className="block h-2 w-2 rounded-full bg-saffron"
            animate={{ scale: [1, 1.4, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-display text-2xl italic text-cream">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="text-cream/35">/</span>
          <span className="font-display text-2xl italic text-cream/35">03</span>
        </div>

        {/* Vertical progress rail — left edge */}
        <div className="absolute left-6 top-1/2 z-20 hidden h-[40vh] -translate-y-1/2 lg:block">
          <div className="relative h-full w-px bg-cream/10">
            <motion.div
              className="absolute left-0 top-0 w-px bg-gradient-to-b from-saffron via-gold to-pomegranate"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
                height: "100%",
              }}
            />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute -left-[3px] flex items-center"
                style={{ top: `${i * 50}%` }}
              >
                <span
                  className={`block h-[7px] w-[7px] rounded-full transition-all duration-500 ${
                    active >= i
                      ? "bg-saffron shadow-[0_0_10px_rgba(226,118,27,0.6)]"
                      : "bg-cream/20"
                  }`}
                />
                <span
                  className={`ml-3 font-display text-xs italic transition-colors duration-500 ${
                    active === i ? "text-saffron" : "text-cream/35"
                  }`}
                >
                  {ROMAN[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide content — pinned at bottom-left, with smooth parallax on Y */}
        <motion.div
          className="relative z-10 flex flex-col justify-end pb-24 pt-32 md:pb-32"
          style={{ y: textY, willChange: "transform" }}
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
            <div className="relative min-h-[60vh] md:min-h-[58vh]">
              {slides.map((slide, i) => (
                <article
                  key={i}
                  data-slide
                  className="absolute inset-0 flex flex-col justify-end"
                >
                  {/* Eyebrow */}
                  <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/85">
                    <span aria-hidden className="h-px w-10 bg-cream/55" />
                    {slide.eyebrow}
                  </p>

                  {/* Title */}
                  <h1
                    className="mt-6 font-display text-cream display-shadow"
                    style={{
                      fontSize: "clamp(3.25rem, 12vw, 12rem)",
                      lineHeight: 1.0,
                      letterSpacing: "-0.035em",
                      paddingBottom: "0.08em",
                    }}
                  >
                    {slide.titleLines.map((line, j) => (
                      <span
                        key={j}
                        className="block"
                        style={{ overflow: "visible" }}
                      >
                        {line}
                      </span>
                    ))}
                  </h1>

                  {/* Sub + CTA row */}
                  <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                    <p
                      className="font-display italic text-cream/85"
                      style={{
                        fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
                        lineHeight: 1.4,
                        maxWidth: "44ch",
                      }}
                    >
                      {slide.sub}
                    </p>

                    {/* CTA only on the final slide */}
                    {i === slides.length - 1 && (
                      <a
                        href={text.hero.cta.href}
                        className="group inline-flex items-center gap-3 self-start text-[11px] tracking-[0.4em] uppercase text-cream md:self-end"
                      >
                        <span className="border-b border-cream/50 pb-1 transition-colors duration-300 group-hover:border-saffron group-hover:text-saffron">
                          {text.hero.cta.label}
                        </span>
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          ↓
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="relative z-10 flex flex-col items-center pb-6 text-[10px] tracking-[0.5em] uppercase text-cream/60">
          <span>{text.hero.scrollHint}</span>
          <span aria-hidden className="mt-2 h-8 w-px bg-cream/40" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { gsap, registerGsap } from "@/lib/gsap";
import { text } from "@/content/text";
import { images } from "@/content/images";

const photos = [images.storyHeritage, images.storyFire, images.storyToday];
const ROMAN = ["Ⅰ", "Ⅱ", "Ⅲ"];

function DesktopScene() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [activeAct, setActiveAct] = useState(0);

  // Scroll-driven values for parallax watermark + progress rail
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const watermarkScale = useTransform(scrollYProgress, [0, 1], [1.06, 0.82]);
  const englishY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const progressH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Drive the act counter directly from native scroll progress (un-smoothed),
  // so the "01/02/03" updates reliably regardless of GSAP scrub lag.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let idx = 0;
    if (v >= 0.78) idx = 2;
    else if (v >= 0.42) idx = 1;
    setActiveAct((prev) => (prev === idx ? prev : idx));
  });

  useEffect(() => {
    registerGsap();
    const r = root.current;
    const s = stage.current;
    if (!r || !s) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const acts = Array.from(s.querySelectorAll<HTMLElement>("[data-act]"));
      const photoEls = Array.from(s.querySelectorAll<HTMLElement>("[data-photo]"));

      // Photos stacked with z-index so each later one renders ABOVE the previous.
      // Only fade IN the incoming photo; the previous stays at full opacity
      // underneath until covered — no black bleed-through.
      photoEls.forEach((el, idx) => {
        el.style.zIndex = String(idx);
      });
      gsap.set(photoEls.slice(1), { opacity: 0 });
      gsap.set(acts.slice(1), { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: r,
          start: "top top",
          end: "bottom bottom",
          // Higher scrub = more inertia = more "premium" cinematic lag
          scrub: 1.3,
          pin: s,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      acts.forEach((act, i) => {
        if (i === 0) return;
        tl
          // Photo: fade IN only — previous photo keeps showing at 100% beneath it
          .to(
            photoEls[i],
            { opacity: 1, duration: 1.0, ease: "power2.inOut" },
            "+=1.6",
          )
          // Text: fade OUT old (fast)
          .to(
            acts[i - 1],
            {
              opacity: 0,
              y: -40,
              filter: "blur(4px)",
              duration: 0.5,
              ease: "power2.in",
            },
            "<",
          )
          // Text: fade IN new with slight overlap of the old fade-out tail
          .to(
            act,
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.6,
              ease: "power2.out",
            },
            ">-0.1",
          );
      });
    }, r);

    return () => ctx.revert();
  }, []);

  const { eyebrow, title, acts } = text.signatureStory;
  const titleParts = title.split(/\.\s+/).filter(Boolean);

  return (
    <div ref={root} className="relative" style={{ height: "380vh" }}>
      <div
        ref={stage}
        className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-ember"
      >
        {/* Premium animated background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="kc-story-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0E0B09">
                  <animate
                    attributeName="stop-color"
                    values="#0E0B09;#140a0c;#0e0c12;#0E0B09"
                    dur="26s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="55%" stopColor="#181010">
                  <animate
                    attributeName="stop-color"
                    values="#181010;#1c1410;#181018;#181010"
                    dur="26s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#0E0B09">
                  <animate
                    attributeName="stop-color"
                    values="#0E0B09;#0e0a14;#160c10;#0E0B09"
                    dur="26s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#kc-story-bg)" />
          </svg>

          {/* Drifting saffron radial */}
          <motion.div
            className="absolute -right-32 top-12 h-[520px] w-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(226,118,27,0.16) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{ x: [0, 28, 0], y: [0, -22, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-40 bottom-[-100px] h-[560px] w-[560px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(122,31,43,0.18) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
            animate={{ x: [0, -22, 0], y: [0, 24, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Parallax watermark — primary */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.span
              className="select-none whitespace-nowrap font-display font-bold leading-none text-cream/[0.04]"
              style={{
                fontSize: "26vw",
                letterSpacing: "-0.06em",
                y: watermarkY,
                scale: watermarkScale,
                willChange: "transform",
              }}
            >
              BENGAL
            </motion.span>
          </div>
          {/* Parallax watermark — secondary, italic, counter-direction */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.span
              className="select-none whitespace-nowrap font-display italic font-bold leading-none text-pomegranate/[0.06]"
              style={{
                fontSize: "16vw",
                letterSpacing: "-0.05em",
                y: englishY,
                willChange: "transform",
              }}
            >
              love letter
            </motion.span>
          </div>

          {/* Calligraphic ink stroke */}
          <svg
            className="absolute inset-0 h-full w-full opacity-60"
            preserveAspectRatio="none"
            viewBox="0 0 1200 800"
          >
            <motion.path
              d="M -50 480 Q 280 200, 600 460 T 1250 380"
              stroke="rgba(226,118,27,0.20)"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3.4, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </svg>

          {/* Floating gold flecks */}
          {Array.from({ length: 10 }).map((_, i) => {
            const left = `${(i * 13 + 6) % 95}%`;
            const top = `${(i * 17 + 9) % 90}%`;
            const dur = 9 + (i % 5) * 1.6;
            const delay = (i % 5) * 0.6;
            return (
              <motion.span
                key={i}
                className="absolute block h-[2px] w-[2px] rounded-full bg-gold/45"
                style={{ left, top }}
                animate={{ y: [0, -16, 0], x: [0, 10, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
              />
            );
          })}

          {/* Hairlines */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pomegranate/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember) / 0.6)_100%)]" />
        </div>

        {/* Vertical progress rail — left edge */}
        <div className="absolute left-6 top-1/2 z-20 hidden h-[40vh] -translate-y-1/2 lg:block">
          <div className="relative h-full w-px bg-cream/10">
            <motion.div
              className="absolute left-0 top-0 w-px bg-gradient-to-b from-saffron via-gold to-pomegranate"
              style={{ height: progressH }}
            />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute -left-[3px] flex items-center"
                style={{ top: `${i * 50}%` }}
              >
                <span
                  className={`block h-[7px] w-[7px] rounded-full transition-all duration-500 ${
                    activeAct >= i
                      ? "bg-saffron shadow-[0_0_10px_rgba(226,118,27,0.6)]"
                      : "bg-cream/20"
                  }`}
                />
                <span
                  className={`ml-3 font-display text-xs italic transition-colors duration-500 ${
                    activeAct === i ? "text-saffron" : "text-cream/35"
                  }`}
                >
                  {ROMAN[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Act counter — top-right of stage */}
        <div className="absolute right-10 top-20 z-20 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
          <motion.span
            aria-hidden
            className="block h-2 w-2 rounded-full bg-saffron"
            animate={{ scale: [1, 1.4, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-display text-2xl italic text-cream">
            {String(activeAct + 1).padStart(2, "0")}
          </span>
          <span className="text-cream/35">/</span>
          <span className="font-display text-2xl italic text-cream/35">03</span>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-12 gap-12 px-16">
          {/* Text column */}
          <div className="col-span-5 flex items-center">
            <div className="w-full">
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/60">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                {eyebrow}
              </p>
              <h2
                className="mt-8 font-display text-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                {titleParts.map((part, i) => (
                  <span key={i} className="block">
                    {part}
                    {i === 0 ? "." : ""}
                    {i === titleParts.length - 1 && !/\.$/.test(part) ? "." : ""}
                  </span>
                ))}
              </h2>

              <div className="relative mt-14 min-h-[360px]">
                {acts.map((act, i) => (
                  <article key={i} data-act className="absolute inset-0">
                    <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-saffron/90">
                      <span className="font-display text-2xl italic text-saffron not-italic">
                        {ROMAN[i]}
                      </span>
                      <span aria-hidden className="h-px w-6 bg-saffron/50" />
                      <span>{act.kicker.replace(/^\d+\s*·\s*/, "")}</span>
                    </p>
                    <h3
                      className="mt-5 font-display italic text-cream"
                      style={{
                        fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {act.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-[1.05rem]">
                      {act.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Photo column — framed, with photo cross-fade */}
          <div className="col-span-6 col-start-7 flex items-center">
            <div className="relative w-full">
              {/* Outer gradient frame */}
              <div className="rounded-[3px] bg-gradient-to-br from-pomegranate via-saffron to-gold p-[2px] shadow-2xl shadow-pomegranate/30">
                <div className="rounded-[2px] bg-ember p-[3px]">
                  <div className="rounded-[1px] bg-ember p-2">
                    {/* Photo stage */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      {acts.map((_, i) => (
                        <div key={i} data-photo className="absolute inset-0">
                          <Image
                            src={photos[i % photos.length].src}
                            alt={photos[i % photos.length].alt}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            quality={85}
                            className="object-cover"
                          />
                          <div
                            aria-hidden
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(180deg, transparent 50%, rgb(var(--kc-ember) / 0.55) 100%)",
                            }}
                          />
                          <div aria-hidden className="absolute inset-0 grain" />
                        </div>
                      ))}
                      <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/10" />
                      {/* Frame badge */}
                      <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full bg-ember/85 px-3 py-1 text-[10px] tracking-[0.4em] uppercase text-cream backdrop-blur-sm">
                        <span aria-hidden className="block h-1 w-1 rounded-full bg-saffron" />
                        Frame {ROMAN[activeAct]}
                      </div>
                    </div>
                    {/* Plate label */}
                    <div className="mt-3 flex items-center justify-between gap-3 px-1 text-[10px] tracking-[0.4em] uppercase text-cream/55">
                      <div className="flex items-center gap-2">
                        <span aria-hidden className="h-px w-6 bg-cream/30" />
                        <span>Bengal · Melbourne</span>
                      </div>
                      <span className="font-display italic normal-case tracking-normal text-cream/70">
                        Photograph © Kishwar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileScene() {
  const { eyebrow, title, acts } = text.signatureStory;
  const titleParts = title.split(/\.\s+/).filter(Boolean);
  return (
    <div className="px-6 py-[var(--space-section)]">
      <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/60">
        <span aria-hidden className="h-px w-10 bg-cream/40" />
        {eyebrow}
      </p>
      <h2
        className="mt-6 font-display text-cream"
        style={{ fontSize: "clamp(2rem, 8vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
      >
        {titleParts.map((part, i) => (
          <span key={i} className="block">
            {part}
            {i === 0 ? "." : ""}
            {i === titleParts.length - 1 && !/\.$/.test(part) ? "." : ""}
          </span>
        ))}
      </h2>
      <div className="mt-12 space-y-20">
        {acts.map((act, i) => (
          <article key={i}>
            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden">
              <Image
                src={photos[i % photos.length].src}
                alt={photos[i % photos.length].alt}
                fill
                sizes="(min-width: 1024px) 1px, 100vw"
                quality={85}
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 grain" />
              <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-ember/85 px-3 py-1 text-[10px] tracking-[0.4em] uppercase text-cream backdrop-blur-sm">
                <span aria-hidden className="block h-1 w-1 rounded-full bg-saffron" />
                Frame {ROMAN[i]}
              </div>
            </div>
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-saffron/90">
              <span className="font-display text-xl italic text-saffron">{ROMAN[i]}</span>
              <span aria-hidden className="h-px w-6 bg-saffron/50" />
              <span>{act.kicker.replace(/^\d+\s*·\s*/, "")}</span>
            </p>
            <h3 className="mt-4 font-display italic text-cream text-2xl leading-tight">
              {act.title}
            </h3>
            <p className="mt-4 text-cream/75 leading-relaxed">{act.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function SignatureStory() {
  return (
    <section id="story" className="relative bg-ember">
      <div className="hidden lg:block">
        <DesktopScene />
      </div>
      <div className="lg:hidden">
        <MobileScene />
      </div>
    </section>
  );
}

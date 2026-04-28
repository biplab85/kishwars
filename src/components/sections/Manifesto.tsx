"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap, registerGsap } from "@/lib/gsap";
import { text } from "@/content/text";
import { images } from "@/content/images";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";

export function Manifesto() {
  const root = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  // Parallax — drives the giant Bengali watermark via scroll progress
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["22%", "-22%"]);
  const watermarkScale = useTransform(scrollYProgress, [0, 1], [1.08, 0.78]);
  const englishY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  useEffect(() => {
    registerGsap();
    const r = root.current;
    const l = linesRef.current;
    if (!r || !l) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lines = Array.from(l.querySelectorAll<HTMLElement>("[data-line]"));

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(lines, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        lines,
        { opacity: 0.18, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.4,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: r,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );
    }, r);

    return () => ctx.revert();
  }, []);

  const { eyebrow, lines, closing } = text.manifesto;

  return (
    <section
      id="manifesto"
      ref={root}
      className="relative overflow-hidden bg-ember py-[var(--space-section)]"
    >
      {/* Premium animated background — manuscript / ink-and-memoir */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Animated linear-gradient mesh — smooth color shifts via SMIL */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="kc-manifesto-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E0B09">
                <animate
                  attributeName="stop-color"
                  values="#0E0B09;#1a0c10;#0e0c12;#0E0B09"
                  dur="24s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="55%" stopColor="#120808">
                <animate
                  attributeName="stop-color"
                  values="#120808;#160c08;#140a14;#120808"
                  dur="24s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#0E0B09">
                <animate
                  attributeName="stop-color"
                  values="#0E0B09;#0e0a14;#160c10;#0E0B09"
                  dur="24s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            <radialGradient id="kc-manifesto-pom" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#7A1F2B" stopOpacity="0.16">
                <animate
                  attributeName="stop-opacity"
                  values="0.10;0.22;0.10"
                  dur="14s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#7A1F2B" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="kc-manifesto-saf" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#E2761B" stopOpacity="0.12">
                <animate
                  attributeName="stop-opacity"
                  values="0.07;0.16;0.07"
                  dur="17s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#E2761B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Base mesh */}
          <rect width="100%" height="100%" fill="url(#kc-manifesto-bg)" />

          {/* Drifting ink-stain blob — top-left, slow horizontal wander */}
          <motion.ellipse
            cx="22%"
            cy="28%"
            rx="34%"
            ry="26%"
            fill="url(#kc-manifesto-pom)"
            animate={{
              cx: ["22%", "32%", "18%", "22%"],
              cy: ["28%", "22%", "32%", "28%"],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Drifting ink-stain blob — bottom-right */}
          <motion.ellipse
            cx="78%"
            cy="74%"
            rx="36%"
            ry="28%"
            fill="url(#kc-manifesto-saf)"
            animate={{
              cx: ["78%", "70%", "82%", "78%"],
              cy: ["74%", "78%", "68%", "74%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Calligraphic ink-stroke — long curving brush stroke */}
          <motion.path
            d="M -50 480 Q 220 320, 480 460 T 1100 380"
            stroke="rgba(226,118,27,0.30)"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.path
            d="M -30 220 Q 180 340, 420 240 T 1100 280"
            stroke="rgba(201,162,74,0.22)"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.2, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Primary watermark — HERITAGE — parallax */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.span
            className="select-none whitespace-nowrap font-display font-bold leading-none text-cream/[0.04]"
            style={{
              fontSize: "26vw",
              letterSpacing: "-0.05em",
              y: watermarkY,
              scale: watermarkScale,
              willChange: "transform",
            }}
          >
            HERITAGE
          </motion.span>
        </div>

        {/* Secondary watermark — memoir — counter-parallax (drifts opposite direction) */}
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
            memoir
          </motion.span>
        </div>

        {/* Floating gold flecks — like leaf scatter on a manuscript */}
        {Array.from({ length: 12 }).map((_, i) => {
          const left = `${(i * 11 + 4) % 95}%`;
          const top = `${(i * 19 + 8) % 90}%`;
          const dur = 9 + (i % 5) * 1.8;
          const delay = (i % 6) * 0.6;
          const isPom = i % 3 === 0;
          const size = i % 4 === 0 ? "h-[3px] w-[3px]" : "h-[2px] w-[2px]";
          return (
            <motion.span
              key={i}
              className={`absolute block rounded-full ${size} ${
                isPom ? "bg-pomegranate/55" : "bg-gold/45"
              }`}
              style={{ left, top }}
              animate={{ y: [0, -16, 0], x: [0, 8, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}

        {/* Calligraphic ornament — top-right */}
        <svg
          className="absolute right-[5%] top-[10%] hidden h-36 w-36 lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="kc-manifesto-flourish" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7A1F2B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#E2761B" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 18 72 Q 38 22, 58 52 Q 78 80, 84 28"
            stroke="url(#kc-manifesto-flourish)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.circle
            cx="84"
            cy="28"
            r="2"
            fill="rgba(226,118,27,0.6)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Hairlines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pomegranate/20 to-transparent" />

        {/* Stronger vignette — pushes edges to deep ember */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(var(--kc-ember) / 0.75)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* LEFT — editorial portrait inside a smart frame */}
          <div className="md:col-span-5">
            <Reveal variant="rise">
              <div className="relative mx-auto w-full max-w-[460px]">
                {/* Warm halo */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-10 -z-10 rounded-[40%] bg-gradient-to-br from-pomegranate/30 via-saffron/15 to-gold/25 blur-3xl"
                  animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.04, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Decorative L-bracket corners */}
                <span aria-hidden className="absolute -left-3 -top-3 z-20 h-7 w-7 border-l-2 border-t-2 border-saffron/65" />
                <span aria-hidden className="absolute -right-3 -top-3 z-20 h-7 w-7 border-r-2 border-t-2 border-saffron/65" />
                <span aria-hidden className="absolute -bottom-3 -left-3 z-20 h-7 w-7 border-b-2 border-l-2 border-saffron/65" />
                <span aria-hidden className="absolute -bottom-3 -right-3 z-20 h-7 w-7 border-b-2 border-r-2 border-saffron/65" />

                {/* Outer gradient frame */}
                <div className="rounded-[3px] bg-gradient-to-br from-pomegranate via-saffron to-gold p-[2px] shadow-2xl shadow-pomegranate/30">
                  <div className="rounded-[2px] bg-ember p-[3px]">
                    <div className="rounded-[1px] bg-cream/95 p-3 md:p-4">
                      <div className="relative">
                        <EditorialImage
                          src={images.storyHeritage.src}
                          alt="Heritage cuisine — Kishwar's culinary world."
                          className="aspect-[4/5] w-full"
                          parallax={0.06}
                        />
                        <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ember/15" />
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3 text-[10px] tracking-[0.4em] uppercase text-ember/55">
                        <div className="flex items-center gap-2">
                          <span aria-hidden className="h-px w-6 bg-ember/30" />
                          <span>Heritage</span>
                        </div>
                        <span className="font-display italic normal-case tracking-normal text-ember/70">
                          Bengal · Memory
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — manifesto */}
          <div className="md:col-span-7 md:col-start-6">
            <Reveal variant="rise">
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/60">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                {eyebrow}
              </p>
            </Reveal>

            {/* Drop-cap M ornament */}
            <Reveal variant="fade" delay={0.1}>
              <div className="mt-10 flex items-baseline gap-4">
                <span
                  aria-hidden
                  className="font-display italic leading-[0.8] text-pomegranate/30"
                  style={{ fontSize: "clamp(4rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}
                >
                  &ldquo;
                </span>
                <div ref={linesRef} className="flex-1">
                  {lines.map((line, i) => (
                    <p
                      key={i}
                      data-line
                      className="font-display text-cream text-balance"
                      style={{
                        fontSize: "clamp(1.55rem, 3.2vw, 3rem)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        maxWidth: "24ch",
                        marginTop: i === 0 ? 0 : "1.25rem",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Closing signature */}
            <Reveal variant="rise" delay={0.2}>
              <div className="mt-14 flex items-center gap-4">
                <motion.span
                  aria-hidden
                  className="block h-2 w-2 rounded-full bg-saffron"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-sm tracking-[0.4em] uppercase text-saffron/90">
                  {closing}
                </span>
                <span aria-hidden className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-saffron/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

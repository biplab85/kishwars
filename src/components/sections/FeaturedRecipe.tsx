"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { text } from "@/content/text";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticCTA } from "@/components/motion/MagneticCTA";

const ingredients = [
  "Saffron-stained rice",
  "Mustard-oiled lamb",
  "Slow, devotional dum",
];

type SlotImage = { src: string; alt: string; pos?: string };

const fade = (n: string) => `/assets/fade/${n}.jpg`;

// Each masked shape rotates through its own pool of images from /assets/fade/.
const slot1: SlotImage[] = [
  { src: fade("01"), alt: "Kishwar — fade frame 01." },
  { src: fade("02"), alt: "Kishwar — fade frame 02." },
  { src: fade("03"), alt: "Kishwar — fade frame 03." },
  { src: fade("04"), alt: "Kishwar — fade frame 04." },
  { src: fade("05"), alt: "Kishwar — fade frame 05." },
];
const slot2: SlotImage[] = [
  { src: fade("6"), alt: "Kishwar — fade frame 06." },
  { src: fade("07"), alt: "Kishwar — fade frame 07." },
  { src: fade("08"), alt: "Kishwar — fade frame 08." },
  { src: fade("09"), alt: "Kishwar — fade frame 09." },
  { src: fade("10"), alt: "Kishwar — fade frame 10." },
];
const slot3: SlotImage[] = [
  { src: fade("11"), alt: "Kishwar — fade frame 11." },
  { src: fade("12"), alt: "Kishwar — fade frame 12." },
  { src: fade("13"), alt: "Kishwar — fade frame 13." },
  { src: fade("14"), alt: "Kishwar — fade frame 14." },
  { src: fade("15"), alt: "Kishwar — fade frame 15." },
];

function useRotatingIndex(length: number, intervalMs: number, initialDelay = 0) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        setIdx((i) => (i + 1) % length);
      }, intervalMs);
    }, initialDelay);
    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [length, intervalMs, initialDelay]);
  return idx;
}

function CarouselFill({
  pool,
  activeIdx,
  posDefault = "center 30%",
  sizes,
  clipPath,
}: {
  pool: SlotImage[];
  activeIdx: number;
  posDefault?: string;
  sizes: string;
  /**
   * CSS clip-path applied to every <img>. When `opacity` animates, the
   * browser promotes each image to its own GPU layer — once promoted, the
   * parent's `overflow: hidden + border-radius` is no longer guaranteed to
   * clip the image because compositing happens after the parent paints.
   * Self-clipping the image with the same shape eliminates the square flash.
   */
  clipPath?: string;
}) {
  return (
    <>
      {pool.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          quality={85}
          className={`absolute inset-0 object-cover transition-opacity duration-[1600ms] ease-cinematic ${
            i === activeIdx ? "opacity-100" : "opacity-0"
          }`}
          style={{
            objectPosition: img.pos ?? posDefault,
            clipPath,
          }}
        />
      ))}
    </>
  );
}

export function FeaturedRecipe() {
  const root = useRef<HTMLElement>(null);
  const { eyebrow, title, lede, cta, detailLeft, detailRight } = text.featuredRecipe;

  // Parallax — left column drifts up, right column drifts down (opposite directions, smooth).
  // Wider ranges = more pronounced depth as the section traverses the viewport.
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], ["22%", "-22%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-32%", "32%"]);

  // Auto-rotating image carousels — longer dwell times for a premium, unhurried feel.
  // Initial delays also let images preload before the first cross-fade fires,
  // preventing the "pop-in" you see on first rotation.
  const idx1 = useRotatingIndex(slot1.length, 9000, 5000);
  const idx2 = useRotatingIndex(slot2.length, 10000, 7500);
  const idx3 = useRotatingIndex(slot3.length, 11000, 10000);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-cream py-[var(--space-section)] text-ember"
    >
      {/* Premium animated background — cookbook paper */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 grain"
          style={{ ["--grain-opacity" as string]: "0.05" }}
        />

        {/* Soft saffron wash — top-left */}
        <motion.div
          className="absolute -left-32 top-12 h-[480px] w-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(226,118,27,0.22) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 28, 0], y: [0, -22, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-[-100px] h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(122,31,43,0.16) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, -22, 0], y: [0, 26, 0] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/3 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,74,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Saffron thread particles */}
        {Array.from({ length: 12 }).map((_, i) => {
          const left = `${(i * 11 + 5) % 95}%`;
          const top = `${(i * 17 + 9) % 88}%`;
          const dur = 8 + (i % 4) * 1.5;
          const delay = (i % 5) * 0.6;
          const isPom = i % 4 === 0;
          return (
            <motion.span
              key={i}
              className={`absolute block h-[3px] w-[10px] rounded-full ${
                isPom ? "bg-pomegranate/35" : "bg-saffron/40"
              }`}
              style={{ left, top, transform: `rotate(${(i * 23) % 360}deg)` }}
              animate={{
                y: [0, -16, 0],
                rotate: [(i * 23) % 360, ((i * 23) % 360) + 12, (i * 23) % 360],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}

        {/* Calligraphic ornament — top-right */}
        <svg
          className="absolute right-[6%] top-[10%] hidden h-32 w-32 lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="kc-recipe-flourish" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7A1F2B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E2761B" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 14 50 Q 36 12, 56 48 Q 76 80, 88 32"
            stroke="url(#kc-recipe-flourish)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.circle
            cx="88"
            cy="32"
            r="2"
            fill="rgba(122,31,43,0.6)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Hairlines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12">
          {/* IMAGE column — 3 masked shapes, each cycling through its own image pool */}
          <motion.div
            className="md:col-span-7 md:order-2"
            style={{ y: rightY, willChange: "transform" }}
          >
            <Reveal variant="rise">
              <div className="relative mx-auto aspect-[5/6] w-full max-w-[600px]">
                {/* Soft warm halo */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-10 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/30 via-gold/15 to-pomegranate/20 blur-3xl"
                  animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.04, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Slot 1 — primary squircle (rotates 4 images) */}
                <motion.div
                  className="absolute overflow-hidden shadow-2xl shadow-ember/30"
                  style={{
                    top: "8%",
                    left: "10%",
                    width: "72%",
                    aspectRatio: "4 / 5",
                    borderRadius: "22%",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(226,118,27,0.95), rgba(201,162,74,0.85), rgba(122,31,43,0.75)) border-box",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "2px",
                      borderRadius: "22%",
                    }}
                  />
                  <CarouselFill
                    pool={slot1}
                    activeIdx={idx1}
                    sizes="(min-width: 768px) 40vw, 90vw"
                    clipPath="inset(0 round 22%)"
                  />
                  <div aria-hidden className="absolute inset-0 grain z-[5]" />
                </motion.div>

                {/* Slot 2 — circle, top-right.
                    Outer wrapper handles rotate/y; inner div owns the clip
                    so the round mask stays stable through every cross-fade. */}
                <motion.div
                  className="absolute"
                  style={{
                    top: "-2%",
                    right: "0%",
                    width: "36%",
                    aspectRatio: "1 / 1",
                    willChange: "transform",
                  }}
                  animate={{ y: [0, 6, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden rounded-full shadow-2xl shadow-pomegranate/25"
                    style={{ isolation: "isolate" }}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-20 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(201,162,74,0.95), rgba(226,118,27,0.85), rgba(122,31,43,0.75)) border-box",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: "2px",
                      }}
                    />
                    <CarouselFill
                      pool={slot2}
                      activeIdx={idx2}
                      sizes="(min-width: 768px) 16vw, 40vw"
                      clipPath="circle(50%)"
                    />
                    <div aria-hidden className="absolute inset-0 grain z-[5]" />
                  </div>
                </motion.div>

                {/* Slot 3 — organic blob, bottom-left.
                    Same nesting trick — rotation on outer, blob mask on inner. */}
                <motion.div
                  className="absolute"
                  style={{
                    bottom: "0%",
                    left: "0%",
                    width: "42%",
                    aspectRatio: "1 / 1",
                    willChange: "transform",
                  }}
                  animate={{ y: [0, -5, 0], rotate: [2, -3, 2] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden shadow-2xl shadow-saffron/25"
                    style={{
                      borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
                      isolation: "isolate",
                    }}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-20"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(122,31,43,0.95), rgba(226,118,27,0.85), rgba(201,162,74,0.75)) border-box",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: "2px",
                        borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
                      }}
                    />
                    <CarouselFill
                      pool={slot3}
                      activeIdx={idx3}
                      sizes="(min-width: 768px) 18vw, 40vw"
                      clipPath="inset(0 round 60% 40% 70% 30% / 50% 60% 40% 50%)"
                    />
                    <div aria-hidden className="absolute inset-0 grain z-[5]" />
                  </div>
                </motion.div>

                {/* Decorative connector dots */}
                <span
                  aria-hidden
                  className="absolute z-10 hidden h-1 w-1 rounded-full bg-saffron/70 lg:block"
                  style={{ top: "16%", right: "32%" }}
                />
                <span
                  aria-hidden
                  className="absolute z-10 hidden h-1.5 w-1.5 rounded-full bg-pomegranate/60 lg:block"
                  style={{ bottom: "30%", left: "38%" }}
                />
              </div>
            </Reveal>
          </motion.div>

          {/* TEXT column — drifts upward as scroll progresses */}
          <motion.div
            className="md:col-span-5 md:order-1 md:flex md:flex-col md:justify-center"
            style={{ y: leftY, willChange: "transform" }}
          >
            {/* Eyebrow with recipe count */}
            <Reveal variant="rise">
              <div className="flex items-center justify-between gap-3 text-[11px] tracking-[0.4em] uppercase text-ember/60">
                <p className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-10 bg-ember/40" />
                  {eyebrow}
                </p>
                <p className="flex items-center gap-2 text-ember/45">
                  <span className="font-display text-base italic text-ember">01</span>
                  <span className="text-ember/30">/</span>
                  <span className="font-display text-base italic text-ember/45">∞</span>
                </p>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal variant="rise" delay={0.1}>
              <h2
                className="mt-8 font-display text-balance"
                style={{
                  fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  maxWidth: "16ch",
                }}
              >
                {title.split(",").map((part, i, arr) => (
                  <span key={i} className="block">
                    {i === arr.length - 1 ? (
                      <em className="italic text-pomegranate/85">{part.trim()}</em>
                    ) : (
                      <>{part}</>
                    )}
                    {i < arr.length - 1 ? "," : ""}
                  </span>
                ))}
              </h2>
            </Reveal>

            {/* Ingredient tasting strip */}
            <Reveal variant="fade" delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] tracking-[0.32em] uppercase text-ember/60">
                {ingredients.map((ing, i) => (
                  <span key={i} className="inline-flex items-center gap-3">
                    {i > 0 && (
                      <svg
                        viewBox="0 0 8 8"
                        className="h-1.5 w-1.5 rotate-45 text-saffron/65"
                        fill="currentColor"
                        aria-hidden
                      >
                        <rect x="0" y="0" width="8" height="8" />
                      </svg>
                    )}
                    <span>{ing}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Lede */}
            <Reveal variant="fade" delay={0.25}>
              <p
                className="mt-8 leading-relaxed text-ember/80"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", maxWidth: "44ch" }}
              >
                {lede}
              </p>
            </Reveal>

            {/* Recipe metadata icons */}
            <Reveal variant="rise" delay={0.32}>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-ember/15 pt-6">
                <RecipeStat
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  }
                  label="Time"
                  value="Begins the night before"
                />
                <RecipeStat
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3" />
                      <circle cx="17" cy="9" r="2.5" />
                      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
                      <path d="M14.5 19c0-2 1.5-3.5 3.5-3.5s3 1.5 3 3.5" />
                    </svg>
                  }
                  label="Serves"
                  value="Six"
                />
                <RecipeStat
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  }
                  label="Region"
                  value="East Bengal"
                />
                <RecipeStat
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2c2 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-5 1 2 2 3 3 4 0-3 0-5 0-8z" />
                    </svg>
                  }
                  label="Heat"
                  value="Slow dum"
                />
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal variant="rise" delay={0.4}>
              <div className="mt-10">
                <MagneticCTA
                  href={cta.href}
                  className="group inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-ember"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center text-pomegranate">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <span className="border-b border-ember/40 pb-1 transition-colors duration-300 group-hover:border-pomegranate group-hover:text-pomegranate">
                    {cta.label}
                  </span>
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </MagneticCTA>
              </div>
            </Reveal>

            {/* Hidden but kept for SEO/screen-readers */}
            <p className="sr-only">
              {detailLeft} {detailRight}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RecipeStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ember/20 bg-ember/5 text-pomegranate">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-ember/85">
          {label}
        </p>
        <p className="mt-1 font-display italic text-ember">{value}</p>
      </div>
    </div>
  );
}

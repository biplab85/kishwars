"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { text } from "@/content/text";
import { images } from "@/content/images";
import { Reveal } from "@/components/motion/Reveal";

export function MasterChefMoment() {
  const { eyebrow, quote, attribution, caption } = text.masterChef;


  return (
    <section
      className="relative overflow-hidden bg-ember py-[var(--space-section)]"
    >
      {/* Premium animated background — stage-spotlight + gold glint */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Animated linear-gradient mesh */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="kc-mc-bg" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#0E0B09">
                <animate
                  attributeName="stop-color"
                  values="#0E0B09;#140c0a;#100a10;#0E0B09"
                  dur="22s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#1c130c">
                <animate
                  attributeName="stop-color"
                  values="#1c130c;#241810;#1c1018;#1c130c"
                  dur="22s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#0E0B09">
                <animate
                  attributeName="stop-color"
                  values="#0E0B09;#100a14;#140c0a;#0E0B09"
                  dur="22s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#kc-mc-bg)" />
        </svg>

        {/* Central stage spotlight — pulses */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,74,0.22) 0%, rgba(226,118,27,0.08) 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Two faint vertical stage rays */}
        <motion.div
          className="absolute h-full w-[180px]"
          style={{
            top: 0,
            left: "32%",
            background:
              "linear-gradient(180deg, rgba(201,162,74,0.18) 0%, rgba(201,162,74,0.04) 50%, transparent 100%)",
            filter: "blur(40px)",
            transform: "translateX(-50%) rotate(8deg)",
            transformOrigin: "top center",
          }}
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-full w-[180px]"
          style={{
            top: 0,
            left: "68%",
            background:
              "linear-gradient(180deg, rgba(226,118,27,0.16) 0%, rgba(226,118,27,0.03) 50%, transparent 100%)",
            filter: "blur(40px)",
            transform: "translateX(-50%) rotate(-8deg)",
            transformOrigin: "top center",
          }}
          animate={{ opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Star/glint particles — gold sparkle */}
        {Array.from({ length: 14 }).map((_, i) => {
          const left = `${(i * 11 + 5) % 95}%`;
          const top = `${(i * 17 + 8) % 90}%`;
          const dur = 3 + (i % 4);
          const delay = (i % 6) * 0.5;
          const isLarge = i % 4 === 0;
          return (
            <motion.span
              key={i}
              className={`absolute block ${
                isLarge ? "h-[6px] w-[6px]" : "h-[3px] w-[3px]"
              }`}
              style={{ left, top }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.6, 1, 0.6],
              }}
              transition={{
                duration: dur,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            >
              <span
                aria-hidden
                className="block h-full w-full rotate-45"
                style={{
                  background:
                    "radial-gradient(circle, rgba(201,162,74,0.95) 0%, rgba(201,162,74,0.4) 40%, transparent 70%)",
                  borderRadius: 1,
                }}
              />
            </motion.span>
          );
        })}

        {/* Laurel ornament — top-left corner */}
        <svg
          className="absolute left-[5%] top-[10%] hidden h-32 w-32 lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="kc-mc-laurel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C9A24A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E2761B" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 50 18 V 88 M 38 28 q -6 12, 0 24 M 62 28 q 6 12, 0 24 M 32 44 q -8 14, 2 28 M 68 44 q 8 14, -2 28 M 28 64 q -6 12, 4 22 M 72 64 q 6 12, -4 22"
            stroke="url(#kc-mc-laurel)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Star ornament — bottom-right, slowly rotating */}
        <svg
          className="absolute right-[5%] bottom-[10%] hidden h-28 w-28 text-gold/45 lg:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "12px 12px" }}
          >
            <path d="M12 2 L 14.4 9.5 L 22 9.5 L 15.8 14 L 18.2 21.5 L 12 17 L 5.8 21.5 L 8.2 14 L 2 9.5 L 9.6 9.5 Z" />
          </motion.g>
        </svg>

        {/* Hairlines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/25 to-transparent" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember) / 0.7)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <Reveal variant="rise">
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/60">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                {eyebrow}
              </p>
            </Reveal>

            {/* Accolade badge — pulsing gold star + tag */}
            <Reveal variant="rise" delay={0.05}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 via-saffron/10 to-pomegranate/15 px-4 py-2 backdrop-blur-sm">
                <motion.svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-gold"
                  fill="currentColor"
                  aria-hidden
                  animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M12 2 L 14.4 9.5 L 22 9.5 L 15.8 14 L 18.2 21.5 L 12 17 L 5.8 21.5 L 8.2 14 L 2 9.5 L 9.6 9.5 Z" />
                </motion.svg>
                <span className="text-[10px] tracking-[0.4em] uppercase text-cream/85">
                  3rd · Grand Finale · 2021
                </span>
              </div>
            </Reveal>

            <Reveal variant="rise" delay={0.1}>
              <blockquote
                className="mt-10 font-display italic text-cream text-balance"
                style={{
                  fontSize: "clamp(1.5rem, 2.6vw, 2.4rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  maxWidth: "32ch",
                }}
              >
                <span aria-hidden className="mr-1 align-top text-saffron">&ldquo;</span>
                {quote}
                <span aria-hidden className="ml-1 align-top text-saffron">&rdquo;</span>
              </blockquote>
            </Reveal>

            <Reveal variant="fade" delay={0.3}>
              <footer className="mt-10 border-t border-cream/15 pt-6">
                <div className="flex items-center gap-3">
                  <motion.span
                    aria-hidden
                    className="block h-2 w-2 rounded-full bg-saffron"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <p className="text-base text-cream">{attribution}</p>
                </div>
                <p className="mt-2 ml-5 text-[11px] tracking-[0.4em] uppercase text-cream/50">
                  {caption}
                </p>
              </footer>
            </Reveal>
          </div>

          {/* Two images with editorial masking shapes — arch + circle */}
          <div className="md:col-span-6">
            <Reveal variant="rise" delay={0.2}>
              <div className="relative mx-auto w-full max-w-[480px]">
                {/* Warm gold halo behind both shapes */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-12 -z-10 rounded-[40%] bg-gradient-to-br from-gold/35 via-saffron/20 to-pomegranate/25 blur-3xl"
                  animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.04, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* PRIMARY — tall arch (rounded top) with gold gradient frame */}
                <motion.div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "3 / 5",
                    borderTopLeftRadius: "9999px",
                    borderTopRightRadius: "9999px",
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Gradient frame edge */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-30 ring-[3px] ring-inset ring-transparent"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(201,162,74,0.95), rgba(226,118,27,0.85), rgba(122,31,43,0.75)) border-box",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "2px",
                      borderTopLeftRadius: "9999px",
                      borderTopRightRadius: "9999px",
                      borderBottomLeftRadius: "6px",
                      borderBottomRightRadius: "6px",
                    }}
                  />
                  {/* Image */}
                  <Image
                    src="/assets/masterchef-1.jpg"
                    alt="Kishwar Chowdhury — official portrait."
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    quality={85}
                    className="object-cover"
                  />
                  {/* Duotone wash + grain */}
                  <div
                    aria-hidden
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                      background:
                        "linear-gradient(180deg, rgb(var(--kc-ember) / 0.10) 0%, rgb(var(--kc-ember) / 0.55) 100%)",
                    }}
                  />
                  <div aria-hidden className="absolute inset-0 grain" />
                  {/* Inner hairline ring */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-1 ring-1 ring-inset ring-gold/20"
                    style={{
                      borderTopLeftRadius: "9999px",
                      borderTopRightRadius: "9999px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  />
                </motion.div>

                {/* SECONDARY — circular accent, overlapping bottom-right */}
                <motion.div
                  className="absolute z-10 overflow-hidden rounded-full shadow-2xl shadow-pomegranate/30"
                  style={{
                    bottom: "-6%",
                    right: "-12%",
                    width: "44%",
                    aspectRatio: "1 / 1",
                  }}
                  animate={{ y: [0, 5, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Gradient ring */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-30 rounded-full"
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
                  <Image
                    src={images.heroPortrait.src}
                    alt={images.heroPortrait.alt}
                    fill
                    sizes="(min-width: 768px) 18vw, 40vw"
                    quality={85}
                    className="object-cover"
                  />
                  <div aria-hidden className="absolute inset-0 grain" />
                  <span aria-hidden className="pointer-events-none absolute inset-1 rounded-full ring-1 ring-inset ring-gold/30" />
                </motion.div>

                {/* Decorative connecting marks — small dots between shapes */}
                <span
                  aria-hidden
                  className="absolute z-20 hidden lg:block"
                  style={{ bottom: "12%", right: "26%" }}
                >
                  <span className="block h-1 w-1 rounded-full bg-gold/70" />
                </span>
                <span
                  aria-hidden
                  className="absolute z-20 hidden lg:block"
                  style={{ bottom: "8%", right: "20%" }}
                >
                  <span className="block h-1.5 w-1.5 rounded-full bg-saffron/60" />
                </span>

                {/* Plate label below */}
                <div className="mt-8 flex items-center gap-3 px-1 text-[10px] tracking-[0.4em] uppercase text-cream/55">
                  <span aria-hidden className="h-px w-6 bg-gold/40" />
                  <span className="font-display italic normal-case tracking-normal text-cream/70">
                    Grand Finale · 2021
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

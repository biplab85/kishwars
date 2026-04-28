"use client";

import { motion } from "framer-motion";
import { text } from "@/content/text";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticCTA } from "@/components/motion/MagneticCTA";

export function EventsStrip() {
  const { eyebrow, intro, fallback, list, cta } = text.events;
  const empty = list.length === 0;

  return (
    <section className="relative overflow-hidden bg-ember py-[var(--space-section)]">
      {/* Animated background — stage light: converging spotlights + ripple rings + sparks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Spotlight beam from top-left, angled toward centre */}
        <motion.div
          className="absolute h-[120%] w-[200px]"
          style={{
            top: "-10%",
            left: "22%",
            background:
              "linear-gradient(180deg, rgba(226,118,27,0.35) 0%, rgba(226,118,27,0.06) 60%, transparent 100%)",
            filter: "blur(55px)",
            transform: "translateX(-50%) rotate(22deg)",
            transformOrigin: "top center",
          }}
          animate={{ opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Spotlight beam from top-right, mirrored */}
        <motion.div
          className="absolute h-[120%] w-[200px]"
          style={{
            top: "-10%",
            right: "22%",
            background:
              "linear-gradient(180deg, rgba(201,162,74,0.32) 0%, rgba(201,162,74,0.05) 60%, transparent 100%)",
            filter: "blur(55px)",
            transform: "translateX(50%) rotate(-22deg)",
            transformOrigin: "top center",
          }}
          animate={{ opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle ripple rings — bottom-right corner */}
        <svg
          className="absolute bottom-[8%] right-[8%] h-[280px] w-[280px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="100"
              cy="100"
              r="20"
              stroke="rgba(226,118,27,0.22)"
              strokeWidth="1"
              animate={{ r: [20, 70, 20], opacity: [0.35, 0, 0.35] }}
              transition={{
                duration: 11,
                repeat: Infinity,
                delay: i * 3.5,
                ease: "easeOut",
              }}
            />
          ))}
          {[0, 1].map((i) => (
            <motion.circle
              key={`g-${i}`}
              cx="100"
              cy="100"
              r="14"
              stroke="rgba(201,162,74,0.18)"
              strokeWidth="1"
              animate={{ r: [14, 60, 14], opacity: [0.3, 0, 0.3] }}
              transition={{
                duration: 13,
                repeat: Infinity,
                delay: i * 4.5 + 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </svg>

        {/* Drifting sparks — saffron + gold mix */}
        {Array.from({ length: 12 }).map((_, i) => {
          const left = `${(i * 11 + 6) % 95}%`;
          const top = `${(i * 17 + 12) % 90}%`;
          const dur = 6 + (i % 4) * 1.5;
          const delay = (i % 5) * 0.5;
          const isGold = i % 3 === 0;
          return (
            <motion.span
              key={i}
              className={`absolute block h-[3px] w-[3px] rounded-full ${
                isGold ? "bg-gold/55" : "bg-saffron/55"
              }`}
              style={{ left, top }}
              animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}

        {/* Microphone ornament — top-right corner */}
        <svg
          className="absolute right-[6%] top-12 hidden h-28 w-28 text-saffron/40 lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="kc-events-mic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2761B" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#7A1F2B" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Mic capsule */}
          <motion.path
            d="M 50 14 a 10 10 0 0 1 10 10 v 18 a 10 10 0 0 1 -20 0 v -18 a 10 10 0 0 1 10 -10 z"
            stroke="url(#kc-events-mic)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          {/* Mic arc */}
          <motion.path
            d="M 32 38 a 18 18 0 0 0 36 0"
            stroke="url(#kc-events-mic)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          {/* Mic stand */}
          <motion.path
            d="M 50 56 V 80 M 38 80 H 62"
            stroke="url(#kc-events-mic)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Calendar / ticket flourish — bottom-left */}
        <svg
          className="absolute bottom-12 left-[6%] hidden h-24 w-24 text-gold/40 lg:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.rect
            x="18"
            y="22"
            width="64"
            height="60"
            rx="3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.path
            d="M 18 38 H 82 M 32 14 V 28 M 68 14 V 28"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.7, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember) / 0.5)_100%)]" />

        {/* Hairlines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal variant="rise">
              <div className="flex items-center gap-3">
                {/* Mic glyph next to eyebrow */}
                <motion.span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-saffron/30 bg-gradient-to-br from-saffron/15 to-pomegranate/15 text-saffron"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="3" width="6" height="12" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0" />
                    <path d="M12 18v3M9 21h6" />
                  </svg>
                </motion.span>
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <Reveal variant="rise" delay={0.1}>
              <p
                className="mt-6 font-display text-cream"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                }}
              >
                {intro}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal variant="rise" delay={0.15}>
              {empty ? (
                <div className="border-t border-cream/15">
                  <div className="flex items-center gap-4 py-8">
                    {/* Calendar icon next to fallback */}
                    <motion.span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/15 to-saffron/10 text-gold"
                      animate={{ rotate: [0, 4, -4, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      aria-hidden
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 10h18M8 3v4M16 3v4" />
                      </svg>
                    </motion.span>
                    <p className="text-cream/65 italic">{fallback}</p>
                  </div>
                  <div className="border-t border-cream/15 pt-6">
                    <MagneticCTA
                      href={cta.href}
                      className="group inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center text-saffron">
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
                          <path d="M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
                        </svg>
                      </span>
                      <span className="border-b border-cream/40 pb-1 transition-colors duration-300 group-hover:border-saffron group-hover:text-saffron">
                        {cta.label}
                      </span>
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </MagneticCTA>
                  </div>
                </div>
              ) : (
                <ul className="border-t border-cream/15">
                  {list.map((event, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-12 items-baseline gap-4 border-b border-cream/15 py-6"
                    >
                      <span className="col-span-3 text-[11px] tracking-[0.32em] uppercase text-saffron/80">
                        {event.date}
                      </span>
                      <span className="col-span-5 font-display text-xl text-cream">
                        {event.location}
                      </span>
                      <span className="col-span-2 text-[11px] tracking-[0.28em] uppercase text-cream/50">
                        {event.format}
                      </span>
                      <a
                        href={event.href}
                        className="col-span-2 text-right text-[11px] tracking-[0.32em] uppercase text-cream hover:text-saffron transition-colors"
                      >
                        Inquire ↗
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

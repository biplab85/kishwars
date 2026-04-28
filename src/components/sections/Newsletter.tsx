"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { text } from "@/content/text";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function Newsletter() {
  const { eyebrow, title, promise, fieldLabel, placeholder, submitLabel, success, consent } =
    text.newsletter;
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setDone(true);
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-ember py-[var(--space-section)]"
    >
      {/* Animated background — orbs + curling line */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute -right-32 top-8 h-[440px] w-[440px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(226,118,27,0.20) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{ x: [0, 32, 0], y: [0, -22, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-40 bottom-[-80px] h-[480px] w-[480px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(122,31,43,0.22) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, -22, 0], y: [0, 26, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,162,74,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Drifting particle dots */}
        {[
          { left: "12%", top: "22%", dur: 7, delay: 0 },
          { left: "82%", top: "70%", dur: 9, delay: 1.2 },
          { left: "65%", top: "18%", dur: 11, delay: 2.4 },
          { left: "28%", top: "78%", dur: 8, delay: 0.6 },
          { left: "92%", top: "32%", dur: 10, delay: 1.8 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-saffron/40"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Curling editorial flourish — top right */}
        <svg
          className="absolute right-8 top-8 hidden h-40 w-40 lg:block"
          viewBox="0 0 120 120"
          fill="none"
        >
          <defs>
            <linearGradient id="kc-nl-flourish" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2761B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7A1F2B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 8 60 Q 30 8, 60 60 T 112 60"
            stroke="url(#kc-nl-flourish)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.path
            d="M 60 8 Q 80 60, 60 112"
            stroke="url(#kc-nl-flourish)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>
      </div>

      {/* Top hairline */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal variant="rise">
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>

            {/* Animated envelope badge */}
            <Reveal variant="rise" delay={0.05}>
              <motion.div
                className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full border border-saffron/30 bg-gradient-to-br from-saffron/15 via-pomegranate/10 to-gold/15 backdrop-blur-sm"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient id="kc-nl-env" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#E2761B" />
                      <stop offset="100%" stopColor="#7A1F2B" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#kc-nl-env)" />
                  <motion.path
                    d="M 3 7 L 12 13 L 21 7"
                    stroke="url(#kc-nl-env)"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                </svg>
              </motion.div>
            </Reveal>

            <Reveal variant="rise" delay={0.1}>
              <h2
                className="mt-6 font-display text-cream"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.025em",
                }}
              >
                {title}
              </h2>
            </Reveal>

            <Reveal variant="fade" delay={0.2}>
              <p className="mt-6 max-w-[44ch] text-base text-cream/70 md:text-lg">
                {promise}
              </p>
            </Reveal>

            {/* Pulsing trust signal */}
            <Reveal variant="fade" delay={0.3}>
              <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream/50">
                <motion.span
                  aria-hidden
                  className="block h-2 w-2 rounded-full bg-saffron"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span>Crafted by hand · No algorithm</span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:flex md:items-end">
            <Reveal variant="rise" delay={0.15} className="w-full">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-2xl border border-saffron/25 bg-gradient-to-br from-saffron/10 via-pomegranate/5 to-gold/10 p-8 backdrop-blur-sm"
                >
                  <motion.span
                    aria-hidden
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-saffron/20 blur-xl"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <p className="relative font-display italic text-saffron text-2xl">
                    {success}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="w-full">
                  <label
                    htmlFor="newsletter-email"
                    className="text-[11px] tracking-[0.32em] uppercase text-cream/50"
                  >
                    {fieldLabel}
                  </label>
                  <div className="group relative mt-3 flex flex-col gap-4 border-b border-cream/30 pb-4 transition-colors duration-500 focus-within:border-saffron sm:flex-row sm:items-end">
                    {/* Soft focus glow */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-md bg-gradient-to-r from-saffron/0 via-saffron/10 to-pomegranate/0 opacity-0 transition-opacity duration-700 group-focus-within:opacity-100"
                    />
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="relative w-full bg-transparent font-display text-2xl text-cream placeholder:text-cream/30 focus:outline-none md:text-3xl"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="relative inline-flex shrink-0 items-center gap-3 self-start text-[11px] tracking-[0.32em] uppercase text-cream transition-colors duration-300 hover:text-saffron disabled:opacity-50 sm:self-end"
                    >
                      {submitting ? (
                        <motion.span
                          aria-hidden
                          className="block h-2 w-2 rounded-full bg-saffron"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      ) : null}
                      <span>{submitting ? "Sending" : submitLabel}</span>
                      <motion.span
                        aria-hidden
                        className="inline-block"
                        animate={!submitting ? { x: [0, 4, 0] } : { x: 0 }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-cream/40">{consent}</p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
    </section>
  );
}

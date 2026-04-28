"use client";

import { motion } from "framer-motion";
import { text } from "@/content/text";
import { EditorialImage } from "@/components/media/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";

const particles = [
  { left: "8%", top: "30%", dur: 8, delay: 0 },
  { left: "88%", top: "60%", dur: 11, delay: 1 },
  { left: "40%", top: "85%", dur: 9, delay: 2 },
  { left: "70%", top: "22%", dur: 12, delay: 1.5 },
  { left: "20%", top: "72%", dur: 10, delay: 0.5 },
  { left: "55%", top: "12%", dur: 13, delay: 0.8 },
];

export function PullQuote() {
  const { text: quote, attribution } = text.pullQuote;

  return (
    <section className="relative overflow-hidden bg-cream py-[var(--space-section)] text-ember">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 grain"
          style={{ ["--grain-opacity" as string]: "0.04" }}
        />

        {/* Soft saffron wash — top right */}
        <motion.div
          className="absolute -right-32 top-12 h-[480px] w-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(226,118,27,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 28, 0], y: [0, -22, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pomegranate wash — bottom left */}
        <motion.div
          className="absolute -left-40 bottom-[-100px] h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(122,31,43,0.16) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, -22, 0], y: [0, 26, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gold pulse — center */}
        <motion.div
          className="absolute left-1/2 top-1/3 h-[260px] w-[260px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,74,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Curling editorial flourish */}
        <svg
          className="absolute right-[6%] top-[10%] hidden h-44 w-44 lg:block"
          viewBox="0 0 120 120"
          fill="none"
        >
          <defs>
            <linearGradient id="kc-pq-flourish" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7A1F2B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E2761B" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 8 60 Q 30 8, 60 60 T 112 60"
            stroke="url(#kc-pq-flourish)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Drifting particles */}
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-pomegranate/40"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating kitchen icons — drift across the full section, both columns */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
        {/* Flame — top-left, flickers + drifts */}
        <motion.div
          className="absolute text-pomegranate/30"
          style={{ top: "5%", left: "6%" }}
          animate={{ x: [0, 22, -10, 0], y: [0, -12, 14, 0], rotate: [0, 6, -4, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ scale: [1, 1.08, 0.96, 1.05, 1], rotate: [0, 1.2, -1.2, 0.6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M12 2c1.3 2.5 3.5 3.5 4.7 5.5C18.4 10.4 19 13 17 16c-2 3-7 3-9 0-1.5-2.2-1.5-4.5-.3-7 .8 1.5 1.6 2.5 2.5 3-.5-2 .2-4 1.1-5z" />
          </motion.svg>
        </motion.div>

        {/* Chef's hat — top-right */}
        <motion.div
          className="absolute text-saffron/35"
          style={{ top: "8%", left: "88%" }}
          animate={{ x: [0, -16, 10, 0], y: [0, 12, -8, 0], rotate: [0, -5, 6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, -2.5, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M5 11c0-3.3 2.7-6 6-6 1.7 0 3.2.7 4.2 1.8C16.7 6.3 18 7.5 18 9c1.1 0 2 .9 2 2v3H5v-3z" />
            <path d="M7 14v6h11v-6" />
            <line x1="9" y1="17.5" x2="15" y2="17.5" />
          </motion.svg>
        </motion.div>

        {/* Pot with steam — center-top, between columns */}
        <motion.div
          className="absolute text-pomegranate/30"
          style={{ top: "18%", left: "48%" }}
          animate={{ x: [0, -18, 14, 0], y: [0, 12, -10, 0], rotate: [0, 4, -2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M 9 4 c -1 1.2, 1 2, 0 4"
              animate={{ y: [-1, -4, -1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 13 3 c -1 1.2, 1 2, 0 4"
              animate={{ y: [-1, -4, -1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.6, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M3 11h18" />
            <path d="M5 11v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
            <path d="M2 13h2" />
            <path d="M20 13h2" />
          </svg>
        </motion.div>

        {/* Knife — mid-left edge */}
        <motion.div
          className="absolute text-ember/25"
          style={{ top: "44%", left: "1%" }}
          animate={{ x: [0, 18, -8, 0], y: [0, -10, 14, 0], rotate: [-12, 4, -14, -12] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 19 L 15 7 c 1-1 3-1 4 0 c 1 1 1 3 0 4 L 7 23 Z" />
            <path d="M3 19 L 7 23" />
          </svg>
        </motion.div>

        {/* Whisk — mid-right edge */}
        <motion.div
          className="absolute text-saffron/30"
          style={{ top: "40%", left: "94%" }}
          animate={{ x: [0, -20, 10, 0], y: [0, -10, 14, 0], rotate: [0, 8, -4, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3 V 13" />
            <path d="M7 13 c 0 5, 10 5, 10 0" />
            <path d="M9 13 c 0 4, 6 4, 6 0" />
            <path d="M11 13 c 0 3, 2 3, 2 0" />
            <path d="M11 21 H 13" />
            <path d="M12 18 V 21" />
          </svg>
        </motion.div>

        {/* Fork — bottom-right */}
        <motion.div
          className="absolute text-ember/25"
          style={{ top: "78%", left: "82%" }}
          animate={{ x: [0, -14, 18, 0], y: [0, 14, -10, 0], rotate: [14, 6, 18, 14] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 3 V 9" />
            <path d="M12 3 V 9" />
            <path d="M15 3 V 9" />
            <path d="M9 9 H 15 L 13.5 22 H 10.5 Z" />
          </svg>
        </motion.div>

        {/* Herb sprig — bottom-left */}
        <motion.div
          className="absolute text-pomegranate/30"
          style={{ top: "82%", left: "8%" }}
          animate={{ x: [0, 14, -8, 0], y: [0, -10, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "12px 22px" }}
          >
            <path d="M12 22 V 4" />
            <path d="M12 14 Q 8 12, 7 8" />
            <path d="M12 11 Q 16 9, 17 5" />
            <path d="M12 8 Q 9 6, 9 3" />
            <path d="M12 5 Q 14 3, 15 2" />
          </motion.svg>
        </motion.div>

        {/* Tea cup — bottom-center */}
        <motion.div
          className="absolute text-saffron/30"
          style={{ top: "88%", left: "44%" }}
          animate={{ x: [0, -12, 16, 0], y: [0, -10, 6, 0], rotate: [0, -3, 2, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M 9 7 c -1 -1, 1 -2, 0 -4"
              animate={{ y: [-1, -4, -1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 13 7 c -1 -1, 1 -2, 0 -4"
              animate={{ y: [-1, -4, -1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2.6, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M5 9 H 17 V 17 a 2 2 0 0 1 -2 2 H 7 a 2 2 0 0 1 -2 -2 Z" />
            <path d="M17 11 a 3 3 0 0 1 0 5" />
            <path d="M4 19 H 18" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12 lg:gap-20">
          {/* LEFT — Kishwar portrait inside a smart frame */}
          <div className="md:col-span-6">
            <Reveal variant="rise">
              <div className="relative mx-auto w-full max-w-[520px]">
                {/* Soft warm halo behind the frame */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-10 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/25 via-gold/15 to-pomegranate/20 blur-3xl"
                  animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.03, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Decorative corner brackets */}
                <span aria-hidden className="absolute -left-3 -top-3 z-20 h-7 w-7 border-l-2 border-t-2 border-saffron/70" />
                <span aria-hidden className="absolute -right-3 -top-3 z-20 h-7 w-7 border-r-2 border-t-2 border-saffron/70" />
                <span aria-hidden className="absolute -bottom-3 -left-3 z-20 h-7 w-7 border-b-2 border-l-2 border-saffron/70" />
                <span aria-hidden className="absolute -bottom-3 -right-3 z-20 h-7 w-7 border-b-2 border-r-2 border-saffron/70" />

                {/* Outer gradient border (the frame itself) */}
                <div className="rounded-[3px] bg-gradient-to-br from-saffron via-gold to-pomegranate p-[2px] shadow-2xl shadow-pomegranate/30">
                  {/* Inner ember frame */}
                  <div className="rounded-[2px] bg-ember p-[3px]">
                    {/* Matte (paper) */}
                    <div className="rounded-[1px] bg-cream/95 p-3 md:p-5">
                      {/* Image with reveal + parallax */}
                      <div className="relative">
                        <EditorialImage
                          src="/assets/Kishwar.jpg"
                          alt="Kishwar Chowdhury — editorial portrait."
                          className="aspect-[4/5] w-full"
                          parallax={0.05}
                        />
                        {/* Hairline ring inside the matte */}
                        <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ember/15" />
                      </div>

                      {/* Plate label inside the matte */}
                      <div className="mt-4 flex items-center justify-between gap-3 text-[10px] tracking-[0.4em] uppercase text-ember/55">
                        <div className="flex items-center gap-2">
                          <span aria-hidden className="h-px w-6 bg-ember/30" />
                          <span>Kishwar Chowdhury</span>
                        </div>
                        <span className="font-display italic normal-case tracking-normal text-ember/70">
                          Bengal · Melbourne
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>

            {/* Caption strip below frame */}
            <Reveal variant="fade" delay={0.5}>
              <div className="mt-12 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-ember/55">
                <span aria-hidden className="h-px w-10 bg-ember/30" />
                In her own words
              </div>
            </Reveal>
          </div>

          {/* RIGHT — quote */}
          <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
            {/* Big opening quote mark */}
            <Reveal variant="fade" duration={1.6}>
              <motion.span
                aria-hidden
                className="block font-display leading-[0.5] text-pomegranate/35"
                style={{ fontSize: "clamp(6rem, 11vw, 10rem)" }}
                animate={{ opacity: [0.55, 0.8, 0.55] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                &ldquo;
              </motion.span>
            </Reveal>

            <Reveal variant="rise" delay={0.1}>
              <blockquote
                className="-mt-6 font-display italic text-balance text-ember"
                style={{
                  fontSize: "clamp(1.6rem, 3.4vw, 3.1rem)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.018em",
                }}
              >
                {quote}
              </blockquote>
            </Reveal>

            <Reveal variant="rise" delay={0.3}>
              <div className="mt-12 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-ember/65">
                <span aria-hidden className="h-px w-12 bg-ember/40" />
                <span className="font-display italic text-base normal-case tracking-normal text-ember">
                  {attribution}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

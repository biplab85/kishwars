"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

type FormStatus = "idle" | "sending" | "sent" | "error";

const socials = [
  { label: "Instagram", handle: "@kishwar_chowdhury", href: "https://www.instagram.com/kishwar_chowdhury" },
  { label: "Facebook", handle: "@kishwarmasterchef", href: "https://www.facebook.com/kishwarmasterchef" },
  { label: "X / Twitter", handle: "@Kishjustathome", href: "https://x.com/Kishjustathome" },
  { label: "LinkedIn", handle: "/in/kishwar-chowdhury", href: "https://www.linkedin.com/in/kishwar-chowdhury-57bbba168" },
] as const;

const faqs = [
  {
    q: "Do you do private dining?",
    a: "Kishwar offers pop-up dining experiences and private events through select venues. For private dining inquiries, please use the contact form above and select “Events” as the inquiry type.",
  },
  {
    q: "How do I book you for an event or speaking engagement?",
    a: "Visit the Collaborations page for a full list of services and the partnership inquiry form. For time-sensitive inquiries, email hello@kishwar.com.au directly.",
  },
  {
    q: "Where can I buy the cookbook?",
    a: "Smoke Rice Water publishes on 23 June 2026 with Hardie Grant. Pre-order signed copies (exclusive to kishwar.com.au) — see the My Book page for all purchase options.",
  },
  {
    q: "Do you offer cooking classes?",
    a: "Cooking class availability will be announced via the newsletter and Events page. Sign up for the mailing list to be notified first.",
  },
  {
    q: "Can I use your recipes on my website or in my publication?",
    a: "All recipes and content on this website are copyright Kishwar Chowdhury. For licensing, syndication, or collaboration inquiries, please use the contact form.",
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact-page"
      className="relative overflow-x-clip bg-ember pt-[calc(var(--space-section)+4rem)] pb-[var(--space-section)]"
    >
      <AnimatedMesh />

      {/* HERO — editorial spread: copy left, navigational chart right */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden className="h-px w-10 bg-cream/40" />
                  Contact
                </span>
                <span aria-hidden className="text-saffron">·</span>
                <span>Open inbox</span>
                <span aria-hidden className="text-saffron">·</span>
                <span>Hello@kishwar.com.au</span>
              </div>
            </Reveal>

            <Reveal variant="rise" delay={0.08}>
              <h1
                className="mt-10 max-w-[18ch] font-display"
                style={{
                  fontSize: "clamp(2.4rem, 6.6vw, 6.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  textWrap: "balance",
                }}
              >
                <span className="text-cream">Let&rsquo;s </span>
                <span className="inline-block bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text italic text-transparent pr-3">
                  talk
                </span>
                <span className="text-cream">.</span>
              </h1>
            </Reveal>

            <Reveal variant="fade" delay={0.18}>
              <p
                className="mt-8 max-w-[42ch] font-display italic text-cream/80"
                style={{ fontSize: "clamp(1.15rem, 1.4vw, 1.4rem)", lineHeight: 1.45 }}
              >
                Every email is read. We come back within two business days.
              </p>
            </Reveal>

            <Reveal variant="fade" delay={0.28}>
              <p
                className="mt-8 max-w-[58ch] leading-relaxed text-cream/70"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
              >
                Speaking, brand partnerships, press, events, cookbook — every brief is
                read, every email answered. Speaking and Brand Partnership inquiries are
                flagged as high-priority and routed directly to the team.
              </p>
            </Reveal>

            <Reveal variant="fade" delay={0.45}>
              <div className="mt-12 flex flex-wrap items-end gap-x-10 gap-y-5 border-t border-cream/10 pt-7">
                {[
                  { num: "≤ 2", label: "Business days" },
                  { num: "Ⅵ", label: "Inquiry types" },
                  { num: "01", label: "Inbox · always" },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3">
                    <span
                      className="font-display italic text-saffron"
                      style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", lineHeight: 1 }}
                    >
                      {s.num}
                    </span>
                    <span className="text-[10px] tracking-[0.32em] uppercase text-cream/55">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — navigational chart frame */}
          <div className="lg:col-span-5">
            <Reveal variant="rise" delay={0.2}>
              <LocationChart />
            </Reveal>
          </div>
        </div>
      </div>

      {/* CONTACT — direct details + form */}
      <div className="relative z-10 mx-auto mt-24 grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        {/* Direct + socials */}
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Direct
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              For everything else, an{" "}
              <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
                inbox
              </span>
              .
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={0.1}>
            <a
              href="mailto:hello@kishwar.com.au"
              className="group relative mt-8 inline-block font-display text-cream transition-colors duration-300 hover:text-saffron"
              style={{ fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)", letterSpacing: "-0.005em" }}
            >
              hello@kishwar.com.au
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
                className="pointer-events-none absolute left-0 top-full mt-1 h-[10px] w-full overflow-visible text-saffron/70 transition-colors duration-300 group-hover:text-saffron"
              >
                <path
                  d="M2 6 C 30 2, 60 10, 100 6 S 170 3, 198 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <p className="mt-8 max-w-[42ch] text-cream/65 leading-relaxed">
              For speaking and brand partnerships, see the{" "}
              <a
                href="/collaboration"
                className="text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-saffron"
              >
                Collaborations page
              </a>{" "}
              for the full inquiry form and routing.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={0.2}>
            <div className="mt-12 space-y-4">
              <p className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-cream/55">
                <span aria-hidden className="h-px w-8 bg-cream/40" />
                Social
              </p>
              <ul className="space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-baseline gap-4 text-cream/75 transition-colors hover:text-cream"
                    >
                      <span className="w-[80px] text-[10px] tracking-[0.32em] uppercase text-cream/45 group-hover:text-saffron">
                        {s.label}
                      </span>
                      <span className="font-display italic">{s.handle}</span>
                      <span aria-hidden className="text-cream/40 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div className="relative md:col-span-7">
          {/* Hand-drawn spiral arrow at top-right corner — gently bobs up & down */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-1 -top-4 z-10 text-saffron/75 md:-top-8 md:right-2"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[84px] w-[84px] md:h-[110px] md:w-[110px]"
            >
              {/* Spiral coil at top-right, then sweeping curve down-left toward the form */}
              <path d="M78 10 C 94 12, 94 34, 78 34 C 62 34, 62 14, 78 14 C 90 14, 88 26, 72 36 C 56 48, 46 64, 36 78" />
              {/* Hand-drawn chevron arrowhead pointing down-left */}
              <path d="M28 68 L 36 80 L 50 76" />
            </svg>
          </motion.div>
          <Reveal variant="rise" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      {/* FAQ */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
            <span aria-hidden className="h-px w-10 bg-cream/40" />
            Frequently asked
          </p>
          <h2
            className="mt-6 font-display text-cream"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            The{" "}
            <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
              short
            </span>{" "}
            answers.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} variant="fade" delay={Math.min(i * 0.05, 0.3)}>
              <details className="group py-7">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 list-none">
                  <span className="flex items-baseline gap-5">
                    <span className="font-display text-[11px] tracking-[0.4em] uppercase text-saffron">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display text-cream"
                      style={{
                        fontSize: "clamp(1.15rem, 1.7vw, 1.55rem)",
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {f.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="font-display text-2xl text-cream/45 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-5 max-w-[64ch] pl-[58px] leading-[1.85] text-cream/75"
                  style={{ fontSize: "clamp(0.98rem, 1.1vw, 1.1rem)" }}
                >
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CLOSING */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="text-center">
            <p
              className="font-display italic text-cream"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              <span className="bg-gradient-to-br from-saffron to-gold bg-clip-text not-italic text-transparent">
                Every email is read.
              </span>
              <br />
              We come back within two business days.
            </p>
            <div className="mx-auto mt-10 flex w-full max-w-[260px] items-center gap-4 text-cream/50">
              <span aria-hidden className="h-px flex-1 bg-cream/20" />
              <span className="font-display italic text-base text-cream/85">— Kishwar</span>
              <span aria-hidden className="h-px flex-1 bg-cream/20" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              ANIMATED MESH                                 */
/* -------------------------------------------------------------------------- */

function AnimatedMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute h-[680px] w-[680px] rounded-full"
        style={{
          left: "-12%",
          top: "-8%",
          background:
            "radial-gradient(circle, rgba(226,118,27,0.28) 0%, rgba(226,118,27,0) 65%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, 120, 40, 0], y: [0, 80, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[620px] w-[620px] rounded-full"
        style={{
          right: "-8%",
          top: "20%",
          background:
            "radial-gradient(circle, rgba(201,162,74,0.26) 0%, rgba(201,162,74,0) 65%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -90, 60, 0], y: [0, 60, 100, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[760px] w-[760px] rounded-full"
        style={{
          left: "20%",
          bottom: "-15%",
          background:
            "radial-gradient(circle, rgba(122,31,43,0.30) 0%, rgba(122,31,43,0) 65%)",
          filter: "blur(90px)",
        }}
        animate={{ x: [0, -60, 80, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pomegranate/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember)/0.55)_100%)]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                       MELBOURNE MAP — HAND-DRAWN SVG                       */
/* -------------------------------------------------------------------------- */

/**
 * Stylised Google-Maps style tile of central Melbourne CBD.
 * Cream parchment palette, road network (highways + main roads + side streets),
 * Yarra River, Royal Botanic Gardens, Carlton Gardens, highway shields,
 * and italic street labels. Centered on Flinders/Swanston (160, 160).
 */
function MelbourneMapSvg() {
  // CBD grid — restrained set of major streets, fewer than before for editorial calm
  const hRoads = [
    { y: 78, w: 2.4, label: "La Trobe" },
    { y: 112, w: 2.4, label: "Lonsdale" },
    { y: 138, w: 2.4, label: "Bourke" },
    { y: 160, w: 3.6, label: "Collins" }, // through pin
    { y: 188, w: 2.4, label: "Flinders" },
  ];
  const vRoads = [
    { x: 78, w: 2.4, label: "William" },
    { x: 112, w: 2.4, label: "Elizabeth" },
    { x: 160, w: 3.6, label: "Swanston" }, // through pin
    { x: 208, w: 2.4, label: "Russell" },
    { x: 244, w: 2.4, label: "Spring" },
  ];
  // Sparse minor streets — just enough texture, not clutter
  const minorH = [95, 124, 174];
  const minorV = [95, 136, 226, 270];

  return (
    <svg
      viewBox="0 0 320 320"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-label="Editorial map of central Melbourne"
    >
      <defs>
        {/* Base — radial warm core fading to deep ember at edges */}
        <radialGradient id="map-paper" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#1A1108" />
          <stop offset="65%" stopColor="#0E0805" />
          <stop offset="100%" stopColor="#070403" />
        </radialGradient>
        {/* Park — dark olive with subtle vertical falloff */}
        <linearGradient id="map-park" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2C3A1E" />
          <stop offset="100%" stopColor="#1B2611" />
        </linearGradient>
        {/* Water — desaturated dark slate */}
        <linearGradient id="map-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F3340" />
          <stop offset="100%" stopColor="#13212B" />
        </linearGradient>
        {/* Block fill — barely-perceptible warm fill, gives texture between roads */}
        <linearGradient id="map-block" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A1108" />
          <stop offset="100%" stopColor="#140C06" />
        </linearGradient>
        {/* Highway gold gradient — true premium feel */}
        <linearGradient id="map-highway" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8E6A28" />
          <stop offset="50%" stopColor="#C9A24A" />
          <stop offset="100%" stopColor="#8E6A28" />
        </linearGradient>

        {/* Soft glow for highway + pin — gives the cartographic luminosity */}
        <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.9" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle film grain — premium printed-map texture */}
        <filter id="map-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.95"
            numOctaves="2"
            seed="7"
          />
          <feColorMatrix
            values="0 0 0 0 0.85
                    0 0 0 0 0.78
                    0 0 0 0 0.6
                    0 0 0 0.06 0"
          />
        </filter>

        {/* River clip — used for inner highlight */}
        <clipPath id="river-clip">
          <path d="M -10 222 Q 60 200, 130 218 Q 180 232, 230 218 Q 280 202, 340 198 L 340 248 Q 280 252, 230 248 Q 180 244, 130 248 Q 60 252, -10 248 Z" />
        </clipPath>
      </defs>

      {/* Base */}
      <rect width="320" height="320" fill="url(#map-paper)" />

      {/* Latitude / longitude graticule — extremely faint, premium cartographic touch */}
      <g stroke="#C9A24A" strokeWidth="0.25" opacity="0.06">
        {[40, 80, 120, 160, 200, 240, 280].map((p) => (
          <line key={`gh-${p}`} x1="0" y1={p} x2="320" y2={p} />
        ))}
        {[40, 80, 120, 160, 200, 240, 280].map((p) => (
          <line key={`gv-${p}`} x1={p} y1="0" x2={p} y2="320" />
        ))}
      </g>

      {/* Block fills — quiet warm rectangles between major roads */}
      {[
        [78, 80, 34, 30], [114, 80, 44, 30], [162, 80, 44, 30], [210, 80, 32, 30],
        [78, 114, 34, 22], [114, 114, 44, 22], [162, 114, 44, 22], [210, 114, 32, 22],
        [78, 140, 34, 18], [114, 140, 44, 18], [162, 140, 44, 18], [210, 140, 32, 18],
        [78, 162, 34, 24], [114, 162, 44, 24], [162, 162, 44, 24], [210, 162, 32, 24],
      ].map(([x, y, w, h], i) => (
        <rect
          key={`blk-${i}`}
          x={x}
          y={y}
          width={w}
          height={h}
          fill="url(#map-block)"
          stroke="rgba(201,162,74,0.04)"
          strokeWidth="0.3"
        />
      ))}

      {/* Carlton Gardens (top-right) */}
      <path
        d="M 248 35 Q 290 32, 305 55 Q 312 85, 295 100 Q 270 110, 250 95 Q 240 75, 248 35 Z"
        fill="url(#map-park)"
      />
      {/* Royal Botanic Gardens (lower-right) */}
      <path
        d="M 195 240 Q 225 226, 260 234 Q 295 242, 304 270 Q 300 304, 268 312 Q 230 318, 200 304 Q 178 288, 178 268 Q 178 252, 195 240 Z"
        fill="url(#map-park)"
      />

      {/* Yarra River — wider, calm slate, with subtle shoreline highlight */}
      <path
        id="map-river"
        d="M -10 222 Q 60 200, 130 218 Q 180 232, 230 218 Q 280 202, 340 198"
        fill="none"
        stroke="url(#map-water)"
        strokeWidth="20"
        strokeLinecap="round"
      />
      {/* River shoreline — top edge, very subtle gold */}
      <path
        d="M -10 222 Q 60 200, 130 218 Q 180 232, 230 218 Q 280 202, 340 198"
        fill="none"
        stroke="rgba(201,162,74,0.18)"
        strokeWidth="0.4"
        opacity="0.9"
        transform="translate(0 -10)"
      />

      {/* Highway — Eastern Freeway as a refined gilded ribbon (no dashes) */}
      <g filter="url(#map-glow)">
        <line
          x1="0"
          y1="42"
          x2="320"
          y2="42"
          stroke="url(#map-highway)"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.95"
        />
        <line
          x1="0"
          y1="42"
          x2="320"
          y2="42"
          stroke="rgba(255,210,125,0.25)"
          strokeWidth="0.5"
        />
      </g>

      {/* Major roads — refined casing + thin cream centerline */}
      {hRoads.map((r) => (
        <g key={`h-${r.y}`}>
          <line
            x1="0"
            y1={r.y}
            x2="320"
            y2={r.y}
            stroke="#0A0604"
            strokeWidth="1.6"
            opacity="0.7"
          />
          <line
            x1="0"
            y1={r.y}
            x2="320"
            y2={r.y}
            stroke="#3A2E1E"
            strokeWidth="1.2"
            opacity="0.92"
          />
        </g>
      ))}
      {vRoads.map((r) => (
        <g key={`v-${r.x}`}>
          <line
            x1={r.x}
            y1="0"
            x2={r.x}
            y2="320"
            stroke="#0A0604"
            strokeWidth="1.6"
            opacity="0.7"
          />
          <line
            x1={r.x}
            y1="0"
            x2={r.x}
            y2="320"
            stroke="#3A2E1E"
            strokeWidth="1.2"
            opacity="0.92"
          />
        </g>
      ))}

      {/* Minor streets — sparse, very subtle */}
      {minorH.map((y, i) => (
        <line
          key={`mh-${i}`}
          x1="20"
          y1={y}
          x2="300"
          y2={y}
          stroke="#2A2014"
          strokeWidth="0.7"
          opacity="0.55"
        />
      ))}
      {minorV.map((x, i) => (
        <line
          key={`mv-${i}`}
          x1={x}
          y1="20"
          x2={x}
          y2="300"
          stroke="#2A2014"
          strokeWidth="0.7"
          opacity="0.55"
        />
      ))}

      {/* River label — along the curve, in dim cream italic */}
      <text
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fontSize="6"
        fill="#9FB7C4"
        opacity="0.85"
        letterSpacing="0.6"
      >
        <textPath href="#map-river" startOffset="22%">
          Y a r r a   R i v e r
        </textPath>
      </text>

      {/* Landmark labels — small caps, refined letterspacing */}
      <g
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="#9FB28A"
        textAnchor="middle"
        opacity="0.85"
      >
        <text x="240" y="272" fontSize="4.6" letterSpacing="1.1">
          ROYAL BOTANIC
        </text>
        <text x="240" y="280" fontSize="4.6" letterSpacing="1.1">
          GARDENS
        </text>
        <text x="278" y="65" fontSize="4.0" letterSpacing="1.0">
          CARLTON
        </text>
        <text x="278" y="73" fontSize="4.0" letterSpacing="1.0">
          GARDENS
        </text>
      </g>

      {/* Street labels — only the major streets, italic serif, very restrained */}
      <g
        fontFamily="Georgia, 'Times New Roman', serif"
        fontStyle="italic"
        fill="#A89270"
        opacity="0.75"
      >
        {/* Horizontal */}
        <text x="22" y="76" fontSize="4.6" letterSpacing="0.3">La Trobe St</text>
        <text x="22" y="110" fontSize="4.6" letterSpacing="0.3">Lonsdale St</text>
        <text x="22" y="136" fontSize="4.6" letterSpacing="0.3">Bourke St</text>
        <text x="22" y="158" fontSize="5.0" letterSpacing="0.3" fill="#C9B58A" opacity="0.95">Collins St</text>
        <text x="22" y="186" fontSize="4.6" letterSpacing="0.3">Flinders St</text>

        {/* Vertical — rotated labels riding their streets */}
        <text fontSize="4.6" letterSpacing="0.3" transform="translate(76 304) rotate(-90)">
          William St
        </text>
        <text fontSize="4.6" letterSpacing="0.3" transform="translate(110 304) rotate(-90)">
          Elizabeth St
        </text>
        <text
          fontSize="5.0"
          letterSpacing="0.3"
          fill="#C9B58A"
          opacity="0.95"
          transform="translate(158 304) rotate(-90)"
        >
          Swanston St
        </text>
        <text fontSize="4.6" letterSpacing="0.3" transform="translate(206 304) rotate(-90)">
          Russell St
        </text>
        <text fontSize="4.6" letterSpacing="0.3" transform="translate(242 304) rotate(-90)">
          Spring St
        </text>
      </g>

      {/* Editorial wordmark — top corner */}
      <g
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="#C9A24A"
        opacity="0.75"
      >
        <text
          x="20"
          y="22"
          fontSize="5.2"
          letterSpacing="2.4"
          fontStyle="italic"
        >
          MELBOURNE
        </text>
        <line
          x1="20"
          y1="26"
          x2="92"
          y2="26"
          stroke="#C9A24A"
          strokeWidth="0.3"
          opacity="0.5"
        />
        <text
          x="20"
          y="32"
          fontSize="3.4"
          letterSpacing="1.6"
          fill="#A89270"
          opacity="0.75"
        >
          VICTORIA · AU
        </text>
      </g>

      {/* Coordinates — bottom-left, in degrees-minutes-seconds, premium cartographic format */}
      <g
        fontFamily="Georgia, 'Times New Roman', serif"
        fill="#A89270"
        opacity="0.65"
      >
        <text x="20" y="304" fontSize="3.4" letterSpacing="1.4">
          37° 48′ 49″ S
        </text>
        <text x="20" y="312" fontSize="3.4" letterSpacing="1.4">
          144° 57′ 47″ E
        </text>
      </g>

      {/* Edge vignette — frames the map and pulls focus to the pin */}
      <radialGradient id="map-vignette" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="rgba(0,0,0,0)" />
        <stop offset="75%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
      </radialGradient>
      <rect width="320" height="320" fill="url(#map-vignette)" />

      {/* Film grain — sits on top, multiplied by very low opacity */}
      <rect
        width="320"
        height="320"
        filter="url(#map-grain)"
        opacity="0.55"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                          LOCATION CHART (HERO)                             */
/* -------------------------------------------------------------------------- */

/**
 * Hand-drawn parchment-style map of central Melbourne, framed in editorial
 * gold treatment with an animated saffron pin overlay, coordinate ribbon,
 * and a "View on Google Maps" link.
 */
function LocationChart() {
  const mapsHref =
    "https://www.google.com/maps/place/Melbourne+VIC,+Australia/@-37.8136,144.9631,12z";

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[460px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Pulsing halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/35 via-gold/25 to-pomegranate/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.95, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gradient ring wrapper — refined gilded edge that follows the rounded corners */}
      <div className="relative rounded-[28px] bg-gradient-to-br from-saffron/55 via-gold/70 to-pomegranate/55 p-[1px] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(201,162,74,0.08)]">
      {/* Inner cream hairline — sits just inside the gold ring for that triple-rule feel */}
      <div className="relative aspect-square overflow-hidden rounded-[27px] bg-ember ring-1 ring-inset ring-cream/[0.08]">
        {/* Hand-drawn parchment map of central Melbourne — Google-Maps style */}
        <MelbourneMapSvg />

        {/* Pin overlay — centered on Collins/Swanston (50%, 50%) */}
        <div
          className="pointer-events-none absolute"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          {/* Soft outer glow — gives the pin its luminous halo */}
          <motion.span
            aria-hidden
            className="absolute -inset-7 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(226,118,27,0.45) 0%, rgba(226,118,27,0) 70%)",
              filter: "blur(8px)",
            }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Single sweeping target ring — slower, more considered than three */}
          <motion.span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-saffron/70"
            animate={{ scale: [1, 5, 5], opacity: [0.65, 0, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Refined dot — pure gold core with a fine pomegranate ring + cream hairline */}
          <motion.span
            className="relative block h-[9px] w-[9px] rounded-full bg-gradient-to-br from-saffron via-gold to-pomegranate shadow-[0_0_14px_rgba(226,118,27,0.85),0_0_0_1px_rgba(20,11,7,0.6)] ring-[1.5px] ring-cream"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Editorial info card — premium plaque */}
          <div className="absolute left-[18px] top-1/2 -translate-y-1/2">
            <div
              className="whitespace-nowrap rounded-[3px] border border-cream/15 bg-ember/95 px-2.5 py-[5px] backdrop-blur-md"
              style={{
                boxShadow:
                  "0 6px 20px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,162,74,0.18) inset",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="block h-1 w-1 rounded-full bg-saffron"
                  style={{ boxShadow: "0 0 6px rgba(226,118,27,0.9)" }}
                />
                <span
                  className="font-display text-cream"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Melbourne
                </span>
              </div>
              <div
                className="mt-0.5 font-display italic text-cream/50"
                style={{ fontSize: "8.5px", letterSpacing: "0.05em" }}
              >
                Collins × Swanston
              </div>
            </div>
          </div>
        </div>

        {/* Caption ribbon — refined editorial footer */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 bg-gradient-to-t from-ember via-ember/85 to-transparent px-5 pb-3.5 pt-10">
          <div className="flex items-center gap-2 text-[9.5px] tracking-[0.4em] uppercase text-cream/45">
            <span aria-hidden className="block h-px w-5 bg-cream/25" />
            <span className="font-display italic tracking-[0.18em] normal-case text-cream/65">
              The studio
            </span>
          </div>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[9.5px] tracking-[0.32em] uppercase text-saffron/85 transition-colors hover:text-saffron"
          >
            Open in Maps
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>

      </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                CONTACT FORM                                */
/* -------------------------------------------------------------------------- */

/**
 * Inquiry form. Posts to /api/contact (Mailtrap via nodemailer on the server).
 * - Tracks status (idle / sending / sent / error) with inline feedback.
 * - Honeypot field "website" — visually hidden, traps bots.
 * - On success, the form is replaced with a confirmation card.
 */
function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      type: String(data.get("type") ?? "General"),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""), // honeypot
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          json.error ?? "Something went wrong. Please try again shortly.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network issue — please try again in a moment.");
    }
  }

  if (status === "sent") {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-pomegranate/15 via-ember to-saffron/10 p-10 backdrop-blur-md md:p-14">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-saffron/30 to-pomegranate/25 blur-3xl"
        />
        <div className="relative">
          <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-saffron">
            <span aria-hidden className="h-px w-10 bg-saffron/60" />
            Received
          </p>
          <h3
            className="mt-6 font-display text-cream"
            style={{
              fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
            }}
          >
            Thank you — your message is{" "}
            <span className="italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent">
              in the inbox
            </span>
            .
          </h3>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-cream/70">
            Every email is read. We come back within two business days.
            Speaking & Brand Partnership inquiries are flagged as high-priority.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase text-saffron transition-colors hover:text-cream"
          >
            <span>Send another</span>
            <span aria-hidden>↗</span>
          </button>
        </div>
      </div>
    );
  }

  const isSending = status === "sending";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-pomegranate/15 via-ember to-saffron/10 p-[15px] backdrop-blur-md md:p-12"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-saffron/30 to-pomegranate/25 blur-3xl"
      />

      <p className="relative flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
        <span aria-hidden className="h-px w-10 bg-cream/40" />
        Send a message
      </p>

      {/* Honeypot — visually hidden, off-screen, untabbable. Bots that fill every field will trip this. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <fieldset disabled={isSending} className="relative mt-8 space-y-4">
        <input
          name="name"
          required
          placeholder="Your name"
          aria-label="Your name"
          maxLength={120}
          className="w-full rounded-full border border-cream/15 bg-ember/50 px-5 py-3.5 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none disabled:opacity-60"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          aria-label="Email"
          maxLength={200}
          className="w-full rounded-full border border-cream/15 bg-ember/50 px-5 py-3.5 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none disabled:opacity-60"
        />
        <select
          name="type"
          defaultValue=""
          aria-label="Inquiry type"
          required
          className="w-full appearance-none rounded-full border border-cream/15 bg-ember/50 px-5 py-3.5 text-sm text-cream/85 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none disabled:opacity-60"
        >
          <option value="" disabled>
            Inquiry type
          </option>
          <option className="bg-ember">Speaking</option>
          <option className="bg-ember">Brand Partnership</option>
          <option className="bg-ember">Media</option>
          <option className="bg-ember">Events</option>
          <option className="bg-ember">Cookbook</option>
          <option className="bg-ember">General</option>
        </select>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Tell us a little about it…"
          aria-label="Message"
          className="w-full resize-none rounded-2xl border border-cream/15 bg-ember/50 px-5 py-4 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full bg-gradient-to-r from-saffron via-gold to-pomegranate px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ember transition-transform duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        >
          {isSending ? (
            <>
              <SpinnerDot className="h-3.5 w-3.5" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>

        {status === "error" && errorMsg ? (
          <p
            role="alert"
            aria-live="polite"
            className="text-center text-[11px] tracking-[0.18em] text-pomegranate"
          >
            {errorMsg}
          </p>
        ) : (
          <p className="text-center text-[10px] tracking-[0.32em] uppercase text-cream/40">
            Speaking &amp; Brand Partnership inquiries flagged as high-priority
          </p>
        )}
      </fieldset>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

function SpinnerDot({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

function IconArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

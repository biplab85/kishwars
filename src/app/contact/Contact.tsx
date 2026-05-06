"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

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
              className="mt-8 inline-block font-display text-cream underline decoration-saffron/70 underline-offset-[6px] transition-colors duration-300 hover:text-saffron"
              style={{ fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)", letterSpacing: "-0.005em" }}
            >
              hello@kishwar.com.au
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
        <div className="md:col-span-7">
          <Reveal variant="rise" delay={0.1}>
            <form
              className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-pomegranate/15 via-ember to-saffron/10 p-8 backdrop-blur-md md:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const subject = encodeURIComponent(
                  `Contact — ${data.get("type") || "General"}`,
                );
                const body = encodeURIComponent(
                  `Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\nInquiry type: ${data.get("type") || ""}\n\nMessage:\n${data.get("message") || ""}`,
                );
                window.location.href = `mailto:hello@kishwar.com.au?subject=${subject}&body=${body}`;
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-saffron/30 to-pomegranate/25 blur-3xl"
              />

              <p className="relative flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                Send a message
              </p>

              <div className="relative mt-8 space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  aria-label="Your name"
                  className="w-full rounded-full border border-cream/15 bg-ember/50 px-5 py-3.5 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full rounded-full border border-cream/15 bg-ember/50 px-5 py-3.5 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                />
                <select
                  name="type"
                  defaultValue=""
                  aria-label="Inquiry type"
                  className="w-full appearance-none rounded-full border border-cream/15 bg-ember/50 px-5 py-3.5 text-sm text-cream/85 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
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
                  placeholder="Tell us a little about it…"
                  aria-label="Message"
                  className="w-full resize-none rounded-2xl border border-cream/15 bg-ember/50 px-5 py-4 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full bg-gradient-to-r from-saffron via-gold to-pomegranate px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ember transition-transform duration-300 hover:scale-[1.01]"
                >
                  Send Message
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="text-center text-[10px] tracking-[0.32em] uppercase text-cream/40">
                  Speaking & Brand Partnership inquiries flagged as high-priority
                </p>
              </div>
            </form>
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
/*                          LOCATION CHART (HERO)                             */
/* -------------------------------------------------------------------------- */

/**
 * A premium "navigational chart" frame: gilded plaque housing a square
 * radar/map face with a stylized Australia silhouette, Melbourne pinned,
 * pulsing radar rings, a sweeping scan line, ambient inbound dots, and
 * compass markers. Caption strip with coordinates.
 */
function LocationChart() {
  // ambient dots ("messages from elsewhere") — deterministic positions
  const dots = [
    { left: "12%", top: "18%", d: 3.2, dl: 0.0 },
    { left: "78%", top: "14%", d: 4.1, dl: 0.7 },
    { left: "22%", top: "76%", d: 3.6, dl: 1.4 },
    { left: "82%", top: "62%", d: 4.4, dl: 0.3 },
    { left: "60%", top: "22%", d: 3.0, dl: 1.1 },
    { left: "30%", top: "44%", d: 3.8, dl: 0.5 },
    { left: "70%", top: "82%", d: 4.0, dl: 0.9 },
    { left: "16%", top: "58%", d: 3.4, dl: 1.7 },
    { left: "50%", top: "8%", d: 3.6, dl: 2.0 },
    { left: "88%", top: "40%", d: 4.2, dl: 0.2 },
  ];

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

      {/* Premium borderless chart face */}
      <div
        className="relative aspect-square overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 56.5% 64%, rgba(45,24,16,0.85) 0%, rgba(20,11,7,0.95) 45%, rgba(6,3,2,1) 90%)",
        }}
      >
            {/* Cartographic grid — major + minor */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <pattern id="contact-grid-fine" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(244,232,216,0.04)" strokeWidth="0.4" />
                </pattern>
                <pattern id="contact-grid-coarse" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(244,232,216,0.08)" strokeWidth="0.5" />
                </pattern>
                <radialGradient id="contact-aus-fill" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(226,118,27,0.18)" />
                  <stop offset="100%" stopColor="rgba(226,118,27,0.04)" />
                </radialGradient>
                <radialGradient id="contact-vignette" cx="56.5%" cy="64%" r="80%">
                  <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                  <stop offset="70%" stopColor="rgba(0,0,0,0)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
                </radialGradient>
              </defs>

              <rect width="200" height="200" fill="url(#contact-grid-fine)" />
              <rect width="200" height="200" fill="url(#contact-grid-coarse)" />

              {/* Major crosshairs at Melbourne (113, 128) — the chart is centered on the pin */}
              <line x1="113" y1="0" x2="113" y2="200" stroke="rgba(244,232,216,0.10)" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="0" y1="128" x2="200" y2="128" stroke="rgba(244,232,216,0.10)" strokeWidth="0.5" strokeDasharray="2 4" />

              {/* Stylized Australia silhouette — refined path */}
              <path
                d="M 48 96
                   C 50 82, 60 76, 72 75
                   C 84 72, 96 71, 110 76
                   C 124 73, 140 76, 152 84
                   C 162 90, 164 102, 158 110
                   C 161 122, 152 128, 140 128
                   C 128 132, 116 130, 108 128
                   C 100 134, 88 132, 78 128
                   C 66 128, 56 124, 50 116
                   C 44 108, 46 100, 48 96 Z"
                fill="url(#contact-aus-fill)"
                stroke="rgba(201,162,74,0.55)"
                strokeWidth="0.9"
                strokeLinejoin="round"
              />
              {/* Tasmania */}
              <ellipse
                cx="115"
                cy="146"
                rx="6"
                ry="4"
                fill="url(#contact-aus-fill)"
                stroke="rgba(201,162,74,0.55)"
                strokeWidth="0.6"
              />

              {/* Periphery tick marks — 24 around the perimeter (every 15°), every 6th highlighted */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const cx = 113;
                const cy = 128;
                const r1 = 88;
                const r2 = i % 6 === 0 ? 80 : 84;
                const x1 = cx + r1 * Math.cos(angle);
                const y1 = cy + r1 * Math.sin(angle);
                const x2 = cx + r2 * Math.cos(angle);
                const y2 = cy + r2 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i % 6 === 0 ? "rgba(226,118,27,0.6)" : "rgba(244,232,216,0.25)"}
                    strokeWidth={i % 6 === 0 ? 1.2 : 0.6}
                    strokeLinecap="round"
                  />
                );
              })}

              {/* Outer faint reference ring */}
              <circle cx="113" cy="128" r="88" fill="none" stroke="rgba(244,232,216,0.10)" strokeWidth="0.5" />

              {/* Vignette overlay */}
              <rect width="200" height="200" fill="url(#contact-vignette)" />
            </svg>

            {/* Concentric pulsing radar rings — 4 rings, smooth fade */}
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute h-[88%] w-[88%] rounded-full"
                style={{
                  left: "56.5%",
                  top: "64%",
                  translate: "-50% -50%",
                  border: "1px solid rgba(226,118,27,0.55)",
                  boxShadow: "0 0 0 0.5px rgba(226,118,27,0.15)",
                }}
                animate={{ scale: [0.10, 1.0], opacity: [0.85, 0] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: [0.22, 0.6, 0.36, 1],
                }}
              />
            ))}

            {/* Radar sweep wedge — soft trail behind the scan line */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute"
              style={{
                left: "56.5%",
                top: "64%",
                width: "88%",
                height: "88%",
                translate: "0 -50%",
                transformOrigin: "0% 50%",
                background:
                  "conic-gradient(from -3deg at 0% 50%, rgba(226,118,27,0.30) 0deg, rgba(226,118,27,0.10) 12deg, rgba(226,118,27,0) 28deg, transparent 360deg)",
                clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                willChange: "transform",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            />

            {/* Sweeping scan line — continuous clock-style rotation */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute"
              style={{
                left: "56.5%",
                top: "64%",
                width: "44%",
                height: "1.5px",
                transformOrigin: "0% 50%",
                background:
                  "linear-gradient(90deg, rgba(226,118,27,0.95) 0%, rgba(201,162,74,0.5) 30%, rgba(226,118,27,0) 100%)",
                filter: "drop-shadow(0 0 6px rgba(226,118,27,0.7))",
                willChange: "transform",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            />

            {/* Ambient inbound dots */}
            {dots.map((d, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute h-1 w-1 rounded-full bg-cream/55"
                style={{ left: d.left, top: d.top }}
                animate={{ opacity: [0.15, 0.7, 0.15], scale: [0.9, 1.4, 0.9] }}
                transition={{ duration: d.d, repeat: Infinity, delay: d.dl, ease: "easeInOut" }}
              />
            ))}

            {/* Center pin — Melbourne · refined three-layer composition */}
            <div
              className="absolute"
              style={{ left: "56.5%", top: "64%", transform: "translate(-50%, -50%)" }}
            >
              {/* Outer aura — soft radial glow */}
              <motion.span
                aria-hidden
                className="absolute -inset-5 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(226,118,27,0.55) 0%, rgba(226,118,27,0) 70%)",
                  filter: "blur(6px)",
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.95, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Outer ring (target marker) */}
              <span
                aria-hidden
                className="absolute -inset-2.5 rounded-full border border-saffron/35"
              />

              {/* Middle ring (gold accent) */}
              <span
                aria-hidden
                className="absolute -inset-1.5 rounded-full border border-gold/55"
              />

              {/* Center core */}
              <motion.span
                className="relative block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-saffron via-gold to-pomegranate shadow-[0_0_18px_rgba(226,118,27,0.95)]"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Connector line + label */}
              <div className="absolute left-3.5 top-1/2 flex -translate-y-1/2 items-center gap-2">
                <span aria-hidden className="block h-px w-6 bg-gradient-to-r from-saffron/70 to-cream/30" />
                <span
                  className="whitespace-nowrap font-display italic text-cream/90"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.01em",
                    textShadow: "0 0 10px rgba(0,0,0,0.6)",
                  }}
                >
                  Melbourne
                </span>
              </div>
            </div>

            {/* Premium SVG border — triple-rule + art-deco corners + cardinal diamonds */}
            <svg
              viewBox="0 0 200 200"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="contact-border-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E2761B" />
                  <stop offset="35%" stopColor="#C9A24A" />
                  <stop offset="65%" stopColor="#C9A24A" />
                  <stop offset="100%" stopColor="#7A1F2B" />
                </linearGradient>
              </defs>

              {/* Outermost hairline */}
              <rect
                x="1.5"
                y="1.5"
                width="197"
                height="197"
                fill="none"
                stroke="url(#contact-border-grad)"
                strokeWidth="0.45"
                strokeOpacity="0.55"
              />
              {/* Main rule */}
              <rect
                x="5"
                y="5"
                width="190"
                height="190"
                fill="none"
                stroke="url(#contact-border-grad)"
                strokeWidth="0.95"
                strokeOpacity="0.9"
              />
              {/* Inner cream hairline */}
              <rect
                x="9"
                y="9"
                width="182"
                height="182"
                fill="none"
                stroke="rgba(244,232,216,0.22)"
                strokeWidth="0.4"
              />

              {/* Four corner ornaments */}
              {[
                { tx: 5, ty: 5, rotate: 0 },
                { tx: 195, ty: 5, rotate: 90 },
                { tx: 195, ty: 195, rotate: 180 },
                { tx: 5, ty: 195, rotate: 270 },
              ].map(({ tx, ty, rotate }, i) => (
                <g key={`c-${i}`} transform={`translate(${tx} ${ty}) rotate(${rotate})`}>
                  {/* Inner L-bracket */}
                  <path
                    d="M 14 4 L 4 4 L 4 14"
                    fill="none"
                    stroke="url(#contact-border-grad)"
                    strokeWidth="0.7"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                  />
                  {/* Diamond accent at the rule intersection */}
                  <path
                    d="M 0 0 L 2.5 2.5 L 0 5 L -2.5 2.5 Z"
                    fill="url(#contact-border-grad)"
                    opacity="0.95"
                  />
                  {/* Tiny inner pip */}
                  <circle cx="9" cy="9" r="0.7" fill="url(#contact-border-grad)" opacity="0.7" />
                </g>
              ))}

              {/* Cardinal-edge diamond markers (top, right, bottom, left mid-points) */}
              {[
                { tx: 100, ty: 5, rotate: 0 },
                { tx: 195, ty: 100, rotate: 90 },
                { tx: 100, ty: 195, rotate: 180 },
                { tx: 5, ty: 100, rotate: 270 },
              ].map(({ tx, ty, rotate }, i) => (
                <g key={`m-${i}`} transform={`translate(${tx} ${ty}) rotate(${rotate})`}>
                  {/* Lateral hairlines flanking the diamond */}
                  <line
                    x1="-14"
                    y1="2.5"
                    x2="-4"
                    y2="2.5"
                    stroke="url(#contact-border-grad)"
                    strokeWidth="0.4"
                    strokeOpacity="0.5"
                  />
                  <line
                    x1="4"
                    y1="2.5"
                    x2="14"
                    y2="2.5"
                    stroke="url(#contact-border-grad)"
                    strokeWidth="0.4"
                    strokeOpacity="0.5"
                  />
                  {/* Diamond marker centered between the two rules */}
                  <path
                    d="M 0 0 L 2 2.5 L 0 5 L -2 2.5 Z"
                    fill="url(#contact-border-grad)"
                    opacity="0.95"
                  />
                </g>
              ))}
            </svg>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

function IconArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

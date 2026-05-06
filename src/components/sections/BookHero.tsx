"use client";

import { motion } from "framer-motion";
import { text } from "@/content/text";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialImage } from "@/components/media/EditorialImage";

export function BookHero() {
  const { eyebrow, title, subtitle, lede, buyLinks } = text.books;

  return (
    <section id="book" className="relative overflow-hidden bg-ember py-[var(--space-section)]">
      {/* Animated background — library light: vertical beams, gold dust, ribbon flourish */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Vertical saffron light beam — left */}
        <motion.div
          className="absolute top-0 h-full w-[220px]"
          style={{
            left: "12%",
            background:
              "linear-gradient(180deg, rgba(226,118,27,0.22) 0%, rgba(226,118,27,0.05) 60%, transparent 100%)",
            filter: "blur(45px)",
            transform: "translateX(-50%) rotate(8deg)",
          }}
          animate={{ opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vertical gold light beam — middle */}
        <motion.div
          className="absolute top-0 h-full w-[300px]"
          style={{
            left: "58%",
            background:
              "linear-gradient(180deg, rgba(201,162,74,0.20) 0%, rgba(201,162,74,0.04) 60%, transparent 100%)",
            filter: "blur(55px)",
            transform: "translateX(-50%) rotate(-6deg)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vertical pomegranate accent — far right */}
        <motion.div
          className="absolute top-0 h-full w-[180px]"
          style={{
            left: "92%",
            background:
              "linear-gradient(180deg, rgba(122,31,43,0.20) 0%, rgba(122,31,43,0.04) 60%, transparent 100%)",
            filter: "blur(50px)",
            transform: "translateX(-50%) rotate(4deg)",
          }}
          animate={{ opacity: [0.3, 0.75, 0.3] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom warm pool */}
        <motion.div
          className="absolute bottom-0 left-1/2 h-[260px] w-[640px] -translate-x-1/2 translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(122,31,43,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gold dust — many small particles drifting diagonally */}
        {Array.from({ length: 16 }).map((_, i) => {
          const left = `${(i * 7 + 5) % 95}%`;
          const top = `${(i * 13 + 9) % 92}%`;
          const dur = 7 + (i % 5) * 2;
          const delay = (i % 6) * 0.6;
          const dx = i % 2 === 0 ? 14 : -14;
          return (
            <motion.span
              key={i}
              className="absolute block h-[3px] w-[3px] rounded-full bg-gold/55"
              style={{ left, top }}
              animate={{ x: [0, dx, 0], y: [0, -18, 0], opacity: [0.15, 0.7, 0.15] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}

        {/* Bookmark ribbon flourish — top right */}
        <svg
          className="absolute right-[8%] top-10 hidden h-52 w-10 lg:block"
          viewBox="0 0 40 220"
          fill="none"
        >
          <defs>
            <linearGradient id="kc-book-ribbon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7A1F2B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#E2761B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 20 4 V 198"
            stroke="url(#kc-book-ribbon)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <motion.path
            d="M 8 192 L 20 204 L 32 192"
            stroke="url(#kc-book-ribbon)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 1.6 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Spiral / page-curl flourish — bottom left */}
        <svg
          className="absolute bottom-12 left-10 hidden h-36 w-36 lg:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          <motion.path
            d="M 50 82 a 22 22 0 1 1 -12 -42 a 14 14 0 1 0 24 0 a 8 8 0 1 1 -10 18"
            stroke="rgba(201,162,74,0.50)"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </svg>

        {/* Soft vignette to anchor the centre */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember) / 0.45)_100%)]" />

        {/* Top + bottom hairlines — accented */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pomegranate/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-7">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/60">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              {eyebrow}
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.1}>
            <h2
              className="mt-6 font-display italic"
              style={{
                fontSize: "clamp(4rem, 12vw, 11rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.045em",
              }}
            >
              {(() => {
                const words = title.split(" ");
                const last = words.pop() ?? "";
                const rest = words.join(" ");
                return (
                  <>
                    {rest && <span className="text-cream">{rest} </span>}
                    <span className="bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text text-transparent">
                      {last}.
                    </span>
                  </>
                );
              })()}
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={0.2}>
            <p
              className="mt-3 font-display text-cream/65"
              style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)", maxWidth: "32ch" }}
            >
              {subtitle}
            </p>
          </Reveal>

          <Reveal variant="fade" delay={0.3}>
            <p
              className="mt-10 leading-relaxed text-cream/75"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)", maxWidth: "52ch" }}
            >
              {lede}
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.4}>
            <ul className="mt-12 space-y-3 border-t border-cream/10 pt-6">
              {buyLinks.map((link) => (
                <li
                  key={link.region}
                  className="flex items-baseline justify-between gap-6 border-b border-cream/10 pb-3"
                >
                  <span className="text-[11px] tracking-[0.4em] uppercase text-cream/50">
                    {link.region}
                  </span>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-display text-lg text-cream hover:text-saffron transition-colors duration-300"
                  >
                    {link.retailer}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal variant="rise">
            <motion.div
              className="relative mx-auto w-full max-w-[440px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Breathing halo */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-12 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/30 via-gold/20 to-pomegranate/25 blur-3xl"
                animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.9, 0.55] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Static gradient frame edge */}
              <div
                aria-hidden
                className="absolute -inset-[2px] rounded-[3px] bg-gradient-to-br from-saffron via-gold to-pomegranate"
              />

              {/* Pulsing corner accents */}
              {[
                "left-[-10px] top-[-10px] border-l-2 border-t-2",
                "right-[-10px] top-[-10px] border-r-2 border-t-2",
                "left-[-10px] bottom-[-10px] border-b-2 border-l-2",
                "right-[-10px] bottom-[-10px] border-b-2 border-r-2",
              ].map((pos, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className={`absolute z-20 h-7 w-7 border-gold/80 ${pos}`}
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                />
              ))}

              {/* Frame layers */}
              <div className="relative z-10 rounded-[3px] bg-ember p-[3px] shadow-2xl shadow-pomegranate/40">
                <div className="rounded-[2px] bg-[rgba(245,235,220,0.95)] p-3 md:p-4">
                  <div className="relative">
                    <EditorialImage
                      src="/assets/book.jpg"
                      alt="The cookbook — stories & recipes from the Subcontinent."
                      className="aspect-[3/4] w-full"
                      parallax={0.08}
                    />
                    {/* Hairline ring inside the matte */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ember/15"
                    />
                    {/* Travelling shimmer that sweeps the cover */}
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 overflow-hidden"
                    >
                      <motion.span
                        className="absolute -top-1/2 left-0 block h-[200%] w-[40%] -skew-x-12"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.18) 50%, transparent 100%)",
                        }}
                        animate={{ x: ["-120%", "260%"] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          repeatDelay: 2.5,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.span>
                  </div>

                  {/* Plate label inside matte */}
                  <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.4em] uppercase text-ember/55">
                    <div className="flex items-center gap-2">
                      <span aria-hidden className="h-px w-6 bg-ember/30" />
                      <span>The Cookbook</span>
                    </div>
                    <span className="font-display italic normal-case tracking-normal text-ember/70">
                      First edition
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

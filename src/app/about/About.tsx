"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticCTA } from "@/components/motion/MagneticCTA";

const credentials = [
  { credential: "MasterChef Australia S13 Finalist", type: "Television" },
  { credential: "TEDx Speaker — “Recipe for a Beautiful Mind”", type: "Speaking" },
  { credential: "Cricket Australia Multicultural Ambassador", type: "Ambassadorship" },
  { credential: "World Vision Australia Ambassador", type: "Charity" },
  { credential: "ASRC Feast for Freedom Ambassador", type: "Charity" },
  { credential: "Crown Melbourne — Chef in Residence", type: "Dining" },
  { credential: "SBS Food — Presenter", type: "Television" },
  { credential: "NGV — Signature Dishes", type: "Cultural" },
] as const;

export function About() {
  return (
    <section
      id="about-page"
      className="relative overflow-x-clip bg-ember pt-[calc(var(--space-section)+4rem)] pb-[var(--space-section)]"
    >
      <AnimatedMesh />

      {/* HERO */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                About · Kishwar Chowdhury
              </p>
            </Reveal>

            <Reveal variant="rise" delay={0.08}>
              <h1
                className="mt-8 max-w-[16ch] font-display"
                style={{
                  fontSize: "clamp(2.4rem, 6.6vw, 6.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  textWrap: "balance",
                }}
              >
                <span className="text-cream">Preserving Bengali heritage </span>
                <span className="inline-block bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text italic text-transparent pr-3 pb-[0.18em] leading-[1.1] align-baseline">
                  through food
                </span>
                <span className="text-cream">.</span>
              </h1>
            </Reveal>

            <Reveal variant="fade" delay={0.22}>
              <p
                className="mt-10 max-w-[58ch] leading-relaxed text-cream/80"
                style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)" }}
              >
                Chef, writer, food creator. Born in Melbourne, raised on rice and
                stories. MasterChef Australia Season 13 finalist. TEDx speaker.
                Author of <span className="italic">Smoke Rice Water</span>{" "}
                (Hardie Grant, 2026).
              </p>
            </Reveal>

            <Reveal variant="rise" delay={0.34}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <MagneticCTA
                  href="#story"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-saffron via-gold to-pomegranate px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ember shadow-[0_18px_42px_-14px_rgba(226,118,27,0.65)] transition-transform duration-500"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/40 to-transparent transition-transform duration-700 ease-cinematic group-hover:translate-x-full"
                  />
                  <span className="relative">Read the story</span>
                  <IconArrowDown className="relative h-4 w-4" />
                </MagneticCTA>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-ember"
                >
                  Get in touch
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="rise" delay={0.2}>
              <PortraitFrame />
            </Reveal>
          </div>
        </div>
      </div>

      {/* WHERE IT BEGINS */}
      <div
        id="story"
        className="relative z-10 mx-auto mt-32 grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10"
      >
        <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Where it begins
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Born in Melbourne. Raised on{" "}
              <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
                rice and stories
              </span>
              .
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal variant="fade" delay={0.1}>
            <div
              className="space-y-7 text-cream/80"
              style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)", lineHeight: 1.85 }}
            >
              <p>
                I was born and raised in Melbourne to Bangladeshi parents. My father,{" "}
                <span className="text-cream">Kamrul Chowdhury OAM</span>, came from
                Bikrampur in East Bengal. My mother, <span className="text-cream">Laila</span>,
                from Burdwan in West Bengal. They built a life in Australia and became
                pillars of the Bangladeshi community in Victoria — and they built it
                around food.
              </p>
              <p>
                Every meal in our home was a lesson in who we are. My mother&rsquo;s
                kitchen was where I learned that food carries memory, identity, and
                belonging. A pot of khichuri on a rainy day was not just comfort — it
                was a connection to a country I had never lived in but somehow always
                knew.
              </p>
              <p>
                I studied commerce at Monash University, then graphic design at the
                University of the Arts London. I lived in Germany, then spent six years
                in Bangladesh building a business. When I returned to Melbourne in 2015,
                I came home to cooking.
              </p>
              <p>
                I staged at Ishizuka under Michelin-starred chef Masahiko Yomoda. I
                collaborated with Adam D&rsquo;Sylva at TONKA on a modern
                Australian-Bengali menu. And in 2021, I walked onto the set of MasterChef
                Australia.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* MASTERCHEF MOMENT — pull-quote */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-saffron/10 via-ember to-pomegranate/15 p-10 backdrop-blur-md md:p-16">
            <span
              aria-hidden
              className="absolute -left-2 -top-6 select-none font-display text-[14rem] leading-none text-saffron/15"
            >
              &ldquo;
            </span>

            <p className="relative flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              MasterChef Australia · 2021
            </p>

            <p
              className="relative mt-6 font-display italic text-cream"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              In the 2021 Grand Finale, I cooked Smoked Rice Water — a modernised{" "}
              <span className="bg-gradient-to-br from-saffron to-gold bg-clip-text not-italic text-transparent">
                panta bhat
              </span>
              , the fermented rice eaten by millions across Bengal. Judge Melissa Leong
              called it &ldquo;powerful with history and powerful with flavour.&rdquo;
            </p>

            <p className="relative mt-8 max-w-[68ch] leading-[1.85] text-cream/80">
              I finished 3rd, but something bigger happened. That dish went viral
              across Bangladesh and India. People who had grown up eating panta bhat —
              a humble, everyday food — saw it presented as worthy of the world&rsquo;s
              attention. Mothers sent me messages saying their children finally wanted
              to eat Bengali food.
            </p>

            <p className="relative mt-6 max-w-[68ch] font-display italic text-cream" style={{ fontSize: "clamp(1.15rem, 1.4vw, 1.4rem)", lineHeight: 1.5 }}>
              That moment taught me what food can do. It can make people proud of where
              they come from.
            </p>

            <div className="relative mt-10 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-12 bg-saffron" />
              Kishwar Chowdhury
            </div>
          </div>
        </Reveal>
      </div>

      {/* FAMILY */}
      <div className="relative z-10 mx-auto mt-32 grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Family
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Cooking{" "}
              <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
                between
              </span>{" "}
              two cultures.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal variant="fade" delay={0.1}>
            <div
              className="space-y-7 text-cream/80"
              style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)", lineHeight: 1.85 }}
            >
              <p>
                My husband <span className="text-cream">Ehtesham</span> was my high
                school sweetheart. We have two children,{" "}
                <span className="text-cream">Mikayle</span> and{" "}
                <span className="text-cream">Seraphina</span>, who are growing up
                between two cultures — just like I did.
              </p>
              <p>
                Everything I cook has them in it. The recipes in my cookbook are the
                dishes I want them to know how to make when they are older. Food is
                how we pass things on.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* WHAT I DO */}
      <div className="relative z-10 mx-auto mt-32 grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              What I do
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Chef, author,{" "}
              <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
                speaker
              </span>
              .
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal variant="fade" delay={0.1}>
            <div
              className="space-y-7 text-cream/80"
              style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)", lineHeight: 1.85 }}
            >
              <p>
                Today I work as a chef, author, and speaker. My debut cookbook,{" "}
                <span className="font-display italic text-cream">Smoke Rice Water</span>,
                publishes with Hardie Grant in June 2026 — 100 recipes from Bengal that
                show this cuisine as it really is: light, fragrant, layered, and deeply
                personal.
              </p>
              <p>
                I speak at events about heritage, food, cultural identity, and the
                migrant experience. I have delivered a TEDx talk,{" "}
                <span className="italic">&ldquo;Recipe for a Beautiful Mind,&rdquo;</span>{" "}
                and serve as a Cricket Australia Multicultural Ambassador alongside
                Usman Khawaja, Mel Jones, and Wasim Akram.
              </p>
              <p>
                I am an ambassador for ASRC Feast for Freedom and have worked with
                World Vision Australia to support child sponsorship in Bangladesh.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* CREDENTIALS GRID */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <Reveal variant="rise">
          <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
            <span aria-hidden className="h-px w-10 bg-cream/40" />
            Credentials
          </p>
          <h2
            className="mt-6 max-w-[26ch] font-display text-cream"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Eight platforms.{" "}
            <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
              One story
            </span>
            .
          </h2>
        </Reveal>

        <ul className="mt-14 divide-y divide-cream/10 border-y border-cream/10">
          {credentials.map((c, i) => (
            <Reveal key={c.credential} variant="fade" delay={Math.min(i * 0.05, 0.4)}>
              <li className="group grid grid-cols-1 items-baseline gap-3 py-7 transition-[padding-left] duration-500 ease-cinematic hover:pl-4 md:grid-cols-12 md:gap-8">
                <span className="font-display text-[11px] tracking-[0.4em] uppercase text-saffron md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display text-cream md:col-span-8"
                  style={{ fontSize: "clamp(1.2rem, 1.7vw, 1.55rem)", letterSpacing: "-0.01em", lineHeight: 1.25 }}
                >
                  {c.credential}
                </span>
                <span className="text-[10px] tracking-[0.32em] uppercase text-cream/45 md:col-span-3 md:text-right">
                  {c.type}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* SIGNATURE QUOTE */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="text-center">
            <p
              className="font-display italic text-cream"
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              I cook to remember.
              <br />
              I write to be remembered.
              <br />
              <span className="bg-gradient-to-br from-saffron to-gold bg-clip-text not-italic text-transparent">
                The plate is the smallest stage in the world — and the loudest.
              </span>
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
/*                            PORTRAIT FRAME (HERO)                           */
/* -------------------------------------------------------------------------- */

function PortraitFrame() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[460px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Soft pulsing halo behind */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/35 via-gold/25 to-pomegranate/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.95, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gilded frame: outer gradient ring → ember mat → inner image
          Premium "double-rule" treatment, like a museum plaque. */}
      <div
        className="relative rounded-[10px] p-[2px] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.75)]"
        style={{
          background:
            "linear-gradient(135deg, #E2761B 0%, #C9A24A 35%, #f4e8d8 50%, #C9A24A 65%, #7A1F2B 100%)",
        }}
      >
        {/* Subtle moving sheen on the gilded edge */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[10px]"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, rgba(244,232,216,0.55) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        {/* Ember mat (separates the gilt from the image) */}
        <div className="relative rounded-[8px] bg-ember p-[5px]">
          {/* Hairline inner cream border */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] ring-1 ring-cream/15">
            <Image
              src="/images/recipes/about.jpg"
              alt="Kishwar Chowdhury — chef, author, speaker."
              fill
              priority
              sizes="(min-width: 1024px) 460px, 80vw"
              className="object-cover"
            />
            {/* Warm vignette */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(15,8,5,0.50)_100%)]"
            />
            {/* Caption gradient */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ember via-ember/65 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <p className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-saffron">
                <span aria-hidden className="h-px w-6 bg-saffron" />
                Chef · Writer · Speaker
              </p>
              <p
                className="mt-3 font-display italic text-cream"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.15rem)", lineHeight: 1.4 }}
              >
                Bengal · Melbourne
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "Since 2021" pill */}
      <div className="absolute -top-3 -right-3 z-30 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-pomegranate px-5 py-2 text-[10px] font-semibold tracking-[0.32em] uppercase text-ember shadow-[0_12px_30px_-10px_rgba(226,118,27,0.65)]">
        <span aria-hidden className="block h-1 w-1 rounded-full bg-ember" />
        Since 2021
      </div>

      {/* Decorative ornament dots at corners — replace the old L-brackets */}
      {[
        "left-[-6px] top-[-6px]",
        "right-[-6px] top-[-6px]",
        "left-[-6px] bottom-[-6px]",
        "right-[-6px] bottom-[-6px]",
      ].map((pos, i) => (
        <span
          key={i}
          aria-hidden
          className={`pointer-events-none absolute z-20 block h-3 w-3 rounded-full bg-gradient-to-br from-saffron to-pomegranate shadow-[0_0_14px_rgba(226,118,27,0.6)] ${pos}`}
        />
      ))}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

function IconArrowDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}


"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticCTA } from "@/components/motion/MagneticCTA";

const book = {
  title: "Smoke Rice Water",
  subtitle: "Recipes and Stories from a Bengali Home",
  publisher: "Hardie Grant Books",
  format: "Hardcover",
  releaseDate: "23 June 2026",
  isbn: "9781743799345",
  recipes: 100,
  cover: "/assets/book.jpg",
  signedHref: "#preorder",
} as const;

const facts = [
  { label: "Recipes", value: "100", Icon: IconRecipes },
  { label: "Format", value: "Hardcover", Icon: IconBook },
  { label: "Release", value: "23 Jun 2026", Icon: IconCalendar },
  { label: "Publisher", value: "Hardie Grant", Icon: IconQuill },
  { label: "ISBN", value: "9781743799345", Icon: IconBarcode },
] as const;

const retailers = [
  {
    name: "Signed Copy",
    note: "Exclusive to kishwar.com.au",
    href: "#",
    Icon: IconSignature,
    featured: true,
  },
  { name: "Hardie Grant", note: "Publisher direct", href: "https://publishing.hardiegrant.com/en-au/books/smoke-rice-water-by-kishwar-chowdhury/9781743799345", Icon: IconQuill },
  { name: "Readings", note: "Independent · Melbourne", href: "https://www.readings.com.au/product/9781743799345/smoke-rice-water--kishwar-chowdhury--2026--9781743799345", Icon: IconLeaf },
] as const;

const chapters = [
  "Street snacks from the lanes of Dhaka",
  "Mughal court dishes slow-cooked with centuries of technique",
  "Fish stews that define the riverlands of Bengal",
  "Sweets that mark every celebration",
  "Everyday meals from a Melbourne kitchen, 12,000 km from home",
];

type Sample = {
  number: string;
  title: string;
  meta: string;
  description: string;
  Icon: (p: { className?: string }) => React.JSX.Element;
};

const samples: Sample[] = [
  {
    number: "01",
    title: "Panta Bhat",
    meta: "Smoked Rice Water · Bengali Classic",
    description:
      "The dish that started it all — leftover rice soaked overnight, served with fried fish, green chillies, and a smoked-water dressing.",
    Icon: IconBowl,
  },
  {
    number: "02",
    title: "Kala Bhuna",
    meta: "Slow-cooked Beef · Chittagong",
    description:
      "Beef braised low and long with whole spices and coconut sugar until the gravy turns black, glossy, and impossibly fragrant.",
    Icon: IconFlame,
  },
  {
    number: "03",
    title: "Fuchka",
    meta: "Street Food · Dhaka",
    description:
      "Crisp semolina shells filled with spiced potato, tamarind, and a green-chilli water — the sound of any Bengali evening market.",
    Icon: IconChilli,
  },
];

export function MyBook() {
  return (
    <section
      id="my-book"
      className="relative overflow-x-clip bg-ember pt-[calc(var(--space-section)+4rem)] pb-[var(--space-section)]"
    >
      <AnimatedMesh />

      {/* HERO */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-7">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              The Cookbook · Hardie Grant
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.1}>
            <h1
              className="mt-6 font-display"
              style={{
                fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
              }}
            >
              <span className="text-cream">Smoke </span>
              <span className="inline-block bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text italic text-transparent py-[0.12em] pr-[0.08em] leading-[1.1] align-baseline">
                Rice
              </span>
              <span className="text-cream"> Water.</span>
            </h1>
          </Reveal>

          <Reveal variant="fade" delay={0.18}>
            <p
              className="mt-5 max-w-[34ch] font-display italic text-cream/70"
              style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}
            >
              {book.subtitle}.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={0.28}>
            <p className="mt-10 max-w-[58ch] leading-relaxed text-cream/80">
              The debut cookbook from Kishwar Chowdhury — 100 recipes from the
              Bengali kitchen, published with{" "}
              <span className="text-cream">Hardie Grant</span> on{" "}
              <span className="text-cream">23 June 2026</span>.
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.36}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticCTA
                href={book.signedHref}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-saffron via-gold to-pomegranate px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ember shadow-[0_18px_42px_-14px_rgba(226,118,27,0.65)] transition-transform duration-500"
              >
                <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/40 to-transparent transition-transform duration-700 ease-cinematic group-hover:translate-x-full" />
                <span className="relative">Pre-order Signed Copy</span>
                <IconArrowRight className="relative h-4 w-4" />
              </MagneticCTA>

              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-ember"
              >
                Read the Story
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal variant="fade" delay={0.5}>
            <p className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/45">
              <span aria-hidden className="block h-2 w-2 rounded-full bg-saffron" />
              Limited first-edition. Personalised inscription on request.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Parallax range={50}>
            <Reveal variant="rise" delay={0.2}>
              <FloatingCover />
            </Reveal>
          </Parallax>
        </div>
      </div>

      {/* QUICK FACTS BAR */}
      <div className="relative z-10 mx-auto mt-28 max-w-[1400px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-cream/10 bg-smoke/30 p-4 backdrop-blur-md md:grid-cols-5 md:gap-0 md:rounded-full md:p-2">
            {facts.map(({ label, value, Icon }, i) => (
              <div
                key={label}
                className={`group relative flex items-center gap-3 px-5 py-3 transition-colors duration-300 hover:text-saffron md:px-6 ${
                  i < facts.length - 1 ? "md:border-r md:border-cream/10" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron/25 via-gold/20 to-pomegranate/25 text-saffron transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-cream/45">
                    {label}
                  </p>
                  <p className="truncate font-display text-base text-cream">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="relative z-10 mx-auto mt-32 grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10"
      >
        <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              About the Book
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              A book about{" "}
              <span className="italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent">
                home
              </span>
              , not exotic food.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal variant="fade" delay={0.1}>
            <p className="leading-[1.85] text-cream/80" style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)" }}>
              Bengali food feeds over{" "}
              <span className="text-cream">200 million people</span> across Bangladesh
              and the Indian state of West Bengal. It is one of the most complex,
              fragrant, and layered cuisines in the world — and one of the most
              underrepresented in English-language cookbooks.
            </p>
            <p className="mt-6 leading-[1.85] text-cream/80" style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)" }}>
              <span className="font-display italic text-cream">Smoke Rice Water</span>{" "}
              brings 100 recipes from the Bengali kitchen into your home. And the
              everyday meals that Kishwar&rsquo;s mother and grandmother made in their
              Melbourne kitchen — the recipes that kept a family connected to a
              country 12,000 kilometres away.
            </p>
            <p className="mt-6 font-display italic text-cream" style={{ fontSize: "clamp(1.15rem, 1.4vw, 1.4rem)", lineHeight: 1.5 }}>
              This is not a book about exotic food. It is a book about home.
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.2}>
            <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
              {chapters.map((c, i) => (
                <li
                  key={c}
                  className="group flex items-start gap-4 rounded-xl border border-cream/10 bg-smoke/30 p-5 backdrop-blur-sm transition-[border-color,background-color,transform] duration-500 ease-cinematic hover:-translate-y-1 hover:border-saffron/40 hover:bg-smoke/45"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron/30 via-gold/25 to-pomegranate/30 font-display text-[11px] text-cream">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-cream/85 transition-colors duration-300 group-hover:text-cream">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* WHY THE NAME — pull-quote */}
      <Parallax range={30}>
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-smoke/60 via-ember to-smoke/60 p-10 backdrop-blur-md md:p-16">
            <span
              aria-hidden
              className="absolute -left-2 -top-6 select-none font-display text-[14rem] leading-none text-saffron/15"
            >
              &ldquo;
            </span>

            <p className="relative flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Why &ldquo;Smoke Rice Water&rdquo;?
            </p>

            <p
              className="relative mt-6 font-display italic text-cream"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              In the 2021 Grand Finale of MasterChef Australia, Kishwar cooked a dish
              called Smoked Rice Water — a modernised version of{" "}
              <span className="bg-gradient-to-br from-saffron to-gold bg-clip-text not-italic text-transparent">
                panta bhat
              </span>
              , the traditional Bengali fermented rice eaten by farmers and families
              across Bangladesh for centuries.
            </p>

            <p className="relative mt-8 max-w-[68ch] leading-[1.85] text-cream/75">
              Panta bhat is the simplest of foods: leftover rice soaked in water
              overnight, served with fried fish, green chillies, and onion. It is not
              a dish that wins competitions. But in Kishwar&rsquo;s hands, it did
              something more important — it made millions of people proud of their
              everyday food.
            </p>

            <p className="relative mt-6 max-w-[68ch] leading-[1.85] text-cream/85">
              The name of this cookbook honours that moment, that dish, and that idea:{" "}
              <span className="font-display italic text-cream">the most ordinary
              ingredients can carry extraordinary meaning.</span>
            </p>

            <div className="relative mt-10 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-12 bg-saffron" />
              Kishwar Chowdhury
            </div>
          </div>
        </Reveal>
      </div>
      </Parallax>

      {/* SAMPLE RECIPES */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                Sample Recipes
              </p>
              <h2
                className="mt-6 max-w-[20ch] font-display text-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                A taste of the{" "}
                <span className="italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent">
                  100 recipes
                </span>{" "}
                inside.
              </h2>
            </div>
            <p className="max-w-[42ch] text-cream/60 leading-relaxed md:text-right">
              Three previews from the book — the dishes that opened the door for
              everything else.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {samples.map((s, i) => (
            <Reveal key={s.title} variant="rise" delay={i * 0.08}>
              <SampleRecipeCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* AUTHOR NOTE */}
      <div className="relative z-10 mx-auto mt-32 max-w-[860px] px-6 md:px-10">
        <Reveal variant="rise">
          <p className="flex items-center justify-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
            <span aria-hidden className="h-px w-10 bg-cream/40" />
            A note from Kishwar
            <span aria-hidden className="h-px w-10 bg-cream/40" />
          </p>
        </Reveal>

        <Reveal variant="fade" delay={0.1}>
          <div className="mt-10 space-y-6 text-center font-display text-cream/85" style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)", lineHeight: 1.6 }}>
            <p>
              I wrote this book for my children. I wanted them to have a record of
              the food I grew up eating — the dishes my mother made without measuring,
              the recipes my grandmother knew by feel.
            </p>
            <p>
              But I also wrote it for every Bengali family that has ever been told
              their food is &ldquo;too simple&rdquo; or &ldquo;too unfamiliar.&rdquo;
              Bengali cuisine is neither. It is one of the most sophisticated food
              traditions in the world. This book is my attempt to show that.
            </p>
            <p className="italic text-cream">
              I hope you cook from it, share it, and make these recipes your own.
            </p>
          </div>

          <div className="mx-auto mt-12 flex w-full max-w-[260px] items-center gap-4 text-cream/50">
            <span aria-hidden className="h-px flex-1 bg-cream/20" />
            <span className="font-display italic text-base text-cream/85">— Kishwar</span>
            <span aria-hidden className="h-px flex-1 bg-cream/20" />
          </div>
        </Reveal>
      </div>

      {/* PRESS QUOTES & ENDORSEMENTS */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="text-center">
            <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Press &amp; Endorsements
              <span aria-hidden className="h-px w-10 bg-cream/40" />
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Reviews are landing soon.
            </h2>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-cream/15 bg-smoke/20 p-7 backdrop-blur-sm transition-[border-color,background-color] duration-500 hover:border-saffron/40 hover:bg-smoke/35"
              >
                <span
                  aria-hidden
                  className="absolute -right-2 -top-6 select-none font-display text-[7rem] leading-none text-saffron/15"
                >
                  &ldquo;
                </span>
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-saffron/25 via-gold/20 to-pomegranate/25 text-saffron">
                  <IconQuote className="h-4 w-4" />
                </div>
                <div className="relative">
                  <p className="font-display italic text-cream/70" style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)", lineHeight: 1.5 }}>
                    Publisher endorsements, early reviews, and press quotes will appear here as the launch approaches.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-cream/45">
                    <span aria-hidden className="h-px w-8 bg-cream/30" />
                    Coming soon
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* PRE-ORDER GRID */}
      <div id="preorder" className="relative z-10 mx-auto mt-32 max-w-[1400px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                Pre-order
              </p>
              <h2
                className="mt-6 max-w-[18ch] font-display text-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Choose where to{" "}
                <span className="italic bg-gradient-to-br from-saffron to-pomegranate bg-clip-text text-transparent">
                  reserve your copy
                </span>
                .
              </h2>
            </div>
            <p className="max-w-[42ch] text-cream/60 leading-relaxed md:text-right">
              Available <span className="text-cream">23 June 2026</span> — pre-orders ship
              the week of release. Signed copies are limited and shipped from Melbourne.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {retailers.map((r, i) => (
            <Reveal key={r.name} variant="rise" delay={i * 0.06}>
              <RetailerCard {...r} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* NEWSLETTER STRIP */}
      <Parallax range={30}>
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-pomegranate/30 via-ember to-saffron/20 p-[15px] md:p-14">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1/2 -z-0"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(226,118,27,0.10), transparent 30%, rgba(201,162,74,0.08), transparent 65%, rgba(122,31,43,0.10), transparent 95%)",
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
                  <span aria-hidden className="h-px w-10 bg-cream/40" />
                  Stay close
                </p>
                <h3
                  className="mt-5 font-display text-cream"
                  style={{
                    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Be the first to know about book launch events, signed copies, and exclusive recipes from the book.
                </h3>
              </div>
              <form
                className="flex w-full items-center gap-2 rounded-full border border-cream/20 bg-ember/50 p-2 backdrop-blur-md focus-within:border-saffron"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@somewhere.com"
                  aria-label="Email address"
                  className="w-full bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/35 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-saffron to-pomegranate px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-ember transition-transform duration-300 hover:scale-[1.02]"
                >
                  Sign Up
                  <IconArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
      </Parallax>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         SMOOTH SCROLL PARALLAX                             */
/* -------------------------------------------------------------------------- */

function Parallax({
  children,
  range = 40,
}: {
  children: React.ReactNode;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    damping: 40,
    stiffness: 70,
    mass: 0.55,
  });
  const y = useTransform(smooth, [0, 1], [range, -range]);
  return (
    <motion.div ref={ref} style={{ y, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          ANIMATED MESH BACKGROUND                          */
/* -------------------------------------------------------------------------- */

function AnimatedMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Drifting saffron blob */}
      <motion.div
        className="absolute h-[680px] w-[680px] rounded-full"
        style={{
          left: "-10%",
          top: "-10%",
          background:
            "radial-gradient(circle, rgba(226,118,27,0.32) 0%, rgba(226,118,27,0) 65%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, 120, 40, 0], y: [0, 80, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Drifting gold blob */}
      <motion.div
        className="absolute h-[620px] w-[620px] rounded-full"
        style={{
          right: "-8%",
          top: "18%",
          background:
            "radial-gradient(circle, rgba(201,162,74,0.30) 0%, rgba(201,162,74,0) 65%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -90, 60, 0], y: [0, 60, 100, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Drifting pomegranate blob */}
      <motion.div
        className="absolute h-[760px] w-[760px] rounded-full"
        style={{
          left: "20%",
          bottom: "-15%",
          background:
            "radial-gradient(circle, rgba(122,31,43,0.34) 0%, rgba(122,31,43,0) 65%)",
          filter: "blur(90px)",
        }}
        animate={{ x: [0, -60, 80, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      {/* Bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pomegranate/30 to-transparent" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember)/0.55)_100%)]" />
      {/* Floating gold dust */}
      {Array.from({ length: 22 }).map((_, i) => {
        const left = `${(i * 11 + 4) % 97}%`;
        const top = `${(i * 17 + 7) % 95}%`;
        const dur = 8 + (i % 5) * 2;
        const delay = (i % 6) * 0.5;
        const dx = i % 2 === 0 ? 14 : -14;
        const isGold = i % 3 !== 0;
        return (
          <motion.span
            key={i}
            className={`absolute block h-[3px] w-[3px] rounded-full ${
              isGold ? "bg-gold/55" : "bg-saffron/55"
            }`}
            style={{ left, top }}
            animate={{ x: [0, dx, 0], y: [0, -22, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            FLOATING BOOK COVER                             */
/* -------------------------------------------------------------------------- */

function FloatingCover() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[460px]"
      animate={{ y: [0, -10, 0], rotate: [-1.2, 1.2, -1.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Halo glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-14 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/40 via-gold/30 to-pomegranate/35 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gradient frame edge */}
      <div
        aria-hidden
        className="absolute -inset-[2px] rounded-[4px] bg-gradient-to-br from-saffron via-gold to-pomegranate"
      />

      {/* Pulsing corner accents */}
      {[
        "left-[-12px] top-[-12px] border-l-2 border-t-2",
        "right-[-12px] top-[-12px] border-r-2 border-t-2",
        "left-[-12px] bottom-[-12px] border-b-2 border-l-2",
        "right-[-12px] bottom-[-12px] border-b-2 border-r-2",
      ].map((pos, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`absolute z-20 h-7 w-7 border-gold/85 ${pos}`}
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Frame */}
      <div className="relative z-10 rounded-[4px] bg-ember p-[3px] shadow-[0_40px_80px_-30px_rgba(122,31,43,0.6)]">
        <div className="rounded-[3px] bg-cream/95 p-3 md:p-4">
          <div className="relative">
            <Image
              src={book.cover}
              alt="Smoke Rice Water — cookbook cover."
              width={900}
              height={1200}
              className="aspect-[3/4] w-full object-cover"
              priority
            />
            {/* Inner ring */}
            <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ember/15" />
            {/* Shimmer sweep */}
            <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <motion.span
                className="absolute -top-1/2 left-0 block h-[200%] w-[40%] -skew-x-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.22) 50%, transparent 100%)",
                }}
                animate={{ x: ["-120%", "260%"] }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
              />
            </span>
          </div>
          {/* Plate label */}
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
  );
}

/* -------------------------------------------------------------------------- */
/*                              RETAILER CARD                                 */
/* -------------------------------------------------------------------------- */

type RetailerCardProps = {
  name: string;
  note: string;
  href: string;
  Icon: (p: { className?: string }) => React.JSX.Element;
  featured?: boolean;
};

function RetailerCard({ name, note, href, Icon, featured }: RetailerCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-7 backdrop-blur-md transition-[transform,border-color,background-color,box-shadow] duration-500 ease-cinematic hover:-translate-y-1.5 ${
        featured
          ? "border-saffron/40 bg-gradient-to-br from-saffron/15 via-pomegranate/15 to-gold/10 hover:border-saffron hover:shadow-[0_30px_60px_-22px_rgba(226,118,27,0.55)]"
          : "border-cream/10 bg-smoke/30 hover:border-cream/30 hover:bg-smoke/45 hover:shadow-[0_24px_50px_-22px_rgba(0,0,0,0.55)]"
      }`}
    >
      {/* Diagonal saffron sweep on hover */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute -top-1/2 left-0 block h-[200%] w-[35%] -translate-x-[140%] -skew-x-12 transition-transform duration-1000 ease-cinematic group-hover:translate-x-[280%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.16) 50%, transparent 100%)",
          }}
        />
      </span>

      {featured && (
        <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-saffron to-pomegranate px-3 py-1 text-[9px] font-semibold tracking-[0.32em] uppercase text-ember">
          <span aria-hidden className="block h-1 w-1 rounded-full bg-ember" />
          Recommended
        </span>
      )}

      <div className="relative">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] ${
            featured
              ? "bg-gradient-to-br from-saffron to-pomegranate text-ember"
              : "bg-gradient-to-br from-saffron/25 via-gold/20 to-pomegranate/25 text-saffron"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="relative mt-10">
        <p className="text-[10px] tracking-[0.32em] uppercase text-cream/45">{note}</p>
        <h3 className="mt-2 font-display text-2xl text-cream">{name}</h3>
        <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase text-cream/65 transition-colors duration-300 group-hover:text-saffron">
          {featured ? "Reserve" : "Visit"}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                            SAMPLE RECIPE CARD                              */
/* -------------------------------------------------------------------------- */

function SampleRecipeCard({ number, title, meta, description, Icon }: Sample) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-cream/10 bg-smoke/30 p-7 backdrop-blur-md transition-[transform,border-color,background-color,box-shadow] duration-500 ease-cinematic hover:-translate-y-1.5 hover:border-saffron/40 hover:bg-smoke/45 hover:shadow-[0_28px_55px_-22px_rgba(122,31,43,0.5)]">
      {/* Diagonal saffron sweep on hover */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute -top-1/2 left-0 block h-[200%] w-[35%] -translate-x-[140%] -skew-x-12 transition-transform duration-1000 ease-cinematic group-hover:translate-x-[280%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.14) 50%, transparent 100%)",
          }}
        />
      </span>

      <div className="relative flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron/25 via-gold/20 to-pomegranate/25 text-saffron transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-display text-xs tracking-[0.32em] uppercase text-cream/40">
          {number}
        </span>
      </div>

      <div className="relative mt-10">
        <p className="text-[10px] tracking-[0.32em] uppercase text-cream/45">{meta}</p>
        <h3 className="mt-2 font-display text-2xl text-cream">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream/70">{description}</p>

        <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase text-cream/65 transition-colors duration-300 group-hover:text-saffron">
          Get the recipe
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

type Ico = { className?: string };
const baseSvg = "h-4 w-4";

function IconRecipes({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 4h11a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2Z" />
      <path d="M6 18a2 2 0 0 1 2-2h11" />
      <path d="M10 8h7M10 12h7" />
    </svg>
  );
}
function IconBook({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>
  );
}
function IconCalendar({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
    </svg>
  );
}
function IconQuill({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 4c-9 1-15 7-16 16 0 0 6-2 9-5l4-4c2-2 3-4 3-7Z" />
      <path d="M14 10l-8 8" />
    </svg>
  );
}
function IconBarcode({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden>
      <path d="M4 5v14M7 5v14M10 5v14M13 5v14M16 5v14M19 5v14" />
    </svg>
  );
}
function IconArrowRight({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
function IconSignature({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 17c2 0 3-3 5-3s2 4 4 4 3-9 5-9 2 5 4 5" />
      <path d="M3 21h18" />
    </svg>
  );
}
function IconLeaf({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 19c10 0 16-6 16-16C12 4 5 9 5 19Z" />
      <path d="M5 19l8-8" />
    </svg>
  );
}
function IconBowl({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11h18a9 9 0 0 1-18 0Z" />
      <path d="M2 11h20" />
      <path d="M9 6c.5-1 1-1.5 0-3M14 6c.5-1 1-1.5 0-3" />
    </svg>
  );
}
function IconFlame({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21c4 0 7-3 7-7 0-4-4-5-4-10-2 2-6 4-6 8 0 1 0 2 1 3-2 0-3-1-3-3 0 4 1 9 5 9Z" />
    </svg>
  );
}
function IconChilli({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 19c8-1 14-7 14-13-3 0-6 1-9 4-2 2-4 5-5 9Z" />
      <path d="M19 6c0-1 0-2-1-3l-2 2" />
    </svg>
  );
}
function IconQuote({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 8c-2 0-3 1-3 3v6h6v-6H6c0-2 1-3 3-3Z" />
      <path d="M17 8c-2 0-3 1-3 3v6h6v-6h-4c0-2 1-3 3-3Z" />
    </svg>
  );
}

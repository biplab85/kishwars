"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticCTA } from "@/components/motion/MagneticCTA";

type Category = {
  numeral: string;
  name: string;
  whisper: string;
  count: string;
  image: string;
};

// Images are real photos already in /public — swap any path with the Pixieset
// shoot files once they're downloaded into /public/images/recipes/.
const categories: Category[] = [
  {
    numeral: "Ⅰ",
    name: "Bengali Classics",
    whisper: "The dishes that taught me to cook.",
    count: "Panta bhat · kala bhuna · khichuri · dal",
    image: "/images/recipes/Bengali%20Classics.jpg",
  },
  {
    numeral: "Ⅱ",
    name: "Street Food",
    whisper: "Markets remembered — in their full noise.",
    count: "Fuchka · chotpoti · jhal muri · shingara",
    image: "/images/recipes/Street%20Food.jpg",
  },
  {
    numeral: "Ⅲ",
    name: "Fish & Seafood",
    whisper: "From riverlands and rain.",
    count: "Mach bhaja · shorshe ilish · chingri malai curry",
    image: "/images/recipes/Fish%20%26%20Seafood.jpg",
  },
  {
    numeral: "Ⅳ",
    name: "Meat",
    whisper: "Slow heat. Centuries of fragrance.",
    count: "Khashir rezala · goat nihari · kacchi biriyani",
    image: "/images/recipes/Meat.jpg?v=2",
  },
  {
    numeral: "Ⅴ",
    name: "Quick Weeknight",
    whisper: "A Tuesday, between two cultures.",
    count: "30-minute Bengali · egg curry · dal",
    image: "/assets/fade/05.jpg",
  },
  {
    numeral: "Ⅵ",
    name: "Rice & Breads",
    whisper: "Hands shaping the everyday.",
    count: "Porota · luchi · polao · naan nawabi",
    image: "/images/recipes/Rice%20%26%20Breads.jpg",
  },
  {
    numeral: "Ⅶ",
    name: "Sweets & Desserts",
    whisper: "Where every celebration begins — and ends.",
    count: "Mishti doi · roshogolla · shemai · pitha",
    image: "/assets/fade/08.jpg",
  },
  {
    numeral: "Ⅷ",
    name: "Fusion & Modern",
    whisper: "What it means to cook between two homes.",
    count: "Hot cross bun × shahi tukra · modern Bengali",
    image: "/images/story-today.jpg",
  },
  {
    numeral: "Ⅸ",
    name: "Tea & Coffee",
    whisper: "Steam, milk, the long pour.",
    count: "Masala chai · doodh cha · cardamom coffee · cold brew",
    image: "/images/recipes/tea-and-coffe.jpg",
  },
];

type RecipeCard = {
  number: string;
  name: string;
  category: string;
  whisper: string;
};

const recipeIndex: RecipeCard[] = [
  {
    number: "01",
    name: "Panta Bhat",
    category: "Bengali Classics · Smoked Rice Water",
    whisper: "The dish that made the world remember.",
  },
  {
    number: "02",
    name: "Khichuri",
    category: "Bengali Classics",
    whisper: "Rain, lentils, and the smell of childhood.",
  },
  {
    number: "03",
    name: "Kala Bhuna",
    category: "Meat · Chittagong",
    whisper: "Beef braised black with patience and coconut sugar.",
  },
  {
    number: "04",
    name: "Fuchka",
    category: "Street Food · Dhaka",
    whisper: "A whole evening market, in one bite.",
  },
  {
    number: "05",
    name: "Shorshe Ilish",
    category: "Fish & Seafood",
    whisper: "Hilsa in mustard — the sound of monsoon.",
  },
  {
    number: "06",
    name: "Mach Bhaja",
    category: "Fish & Seafood",
    whisper: "Fried fish, the way a Bengali table begins.",
  },
  {
    number: "07",
    name: "Mishti Doi",
    category: "Sweets & Desserts",
    whisper: "Set yoghurt, caramelised by the sun.",
  },
  {
    number: "08",
    name: "Khashir Rezala",
    category: "Meat",
    whisper: "Mughal court cooking, after midnight.",
  },
  {
    number: "09",
    name: "Goat Nihari",
    category: "Meat",
    whisper: "A bowl that asks for nothing else.",
  },
  {
    number: "10",
    name: "Bengali Egg Curry",
    category: "Quick Weeknight",
    whisper: "Twelve minutes from pan to plate.",
  },
  {
    number: "11",
    name: "Porota",
    category: "Rice & Breads",
    whisper: "Layered, brushed, blistered.",
  },
  {
    number: "12",
    name: "Chotpoti",
    category: "Street Food",
    whisper: "Tamarind, chickpeas, the lights coming on.",
  },
  {
    number: "13",
    name: "Chingri Malai Curry",
    category: "Fish & Seafood",
    whisper: "Prawns held in a coconut hush.",
  },
  {
    number: "14",
    name: "Shemai",
    category: "Sweets & Desserts",
    whisper: "Eid morning, in a small white bowl.",
  },
  {
    number: "15",
    name: "Hot Cross Bun × Shahi Tukra",
    category: "Fusion & Modern",
    whisper: "Two homes meeting on Easter morning.",
  },
  {
    number: "16",
    name: "Luchi",
    category: "Rice & Breads",
    whisper: "Discs that puff like small moons.",
  },
  {
    number: "17",
    name: "Doi Maach",
    category: "Fish & Seafood",
    whisper: "Yoghurt-cooked fish, gentle as a Sunday.",
  },
  {
    number: "18",
    name: "Begun Bhaja",
    category: "Quick Weeknight",
    whisper: "Eggplant, salt, and patience.",
  },
];

export function Recipes() {
  return (
    <section
      id="recipes"
      className="relative overflow-x-clip bg-ember pt-[calc(var(--space-section)+4rem)] pb-[var(--space-section)]"
    >
      <AnimatedMesh />

      {/* HERO — editorial magazine spread */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — copy column */}
          <div className="lg:col-span-7">
            <Reveal variant="rise">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden className="h-px w-10 bg-cream/40" />
                  Vol. Ⅰ · Recipes
                </span>
                <span aria-hidden className="text-saffron">·</span>
                <span>Told as stories</span>
                <span aria-hidden className="text-saffron">·</span>
                <span>Bengal · Melbourne</span>
              </div>
            </Reveal>

            <Reveal variant="rise" delay={0.08}>
              <h1
                className="mt-10 max-w-[16ch] font-display"
                style={{
                  fontSize: "clamp(2.4rem, 6.6vw, 6rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  textWrap: "balance",
                }}
              >
                <span className="text-cream">Cooking is how we </span>
                <span className="inline-block bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text italic text-transparent pr-3">
                  remember
                </span>
                <span className="text-cream">.</span>
              </h1>
            </Reveal>

            <Reveal variant="fade" delay={0.18}>
              <p
                className="mt-8 max-w-[42ch] font-display italic text-cream/80"
                style={{ fontSize: "clamp(1.15rem, 1.4vw, 1.4rem)", lineHeight: 1.45 }}
              >
                A working archive of Bengali heritage recipes — each one written
                long-form, with the memory before the method.
              </p>
            </Reveal>

            <Reveal variant="fade" delay={0.28}>
              <p
                className="mt-8 max-w-[58ch] leading-relaxed text-cream/70"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
              >
                Bengali cooking is built on layers — of spice, of technique, of story.
                These recipes come from my kitchen, my mother&rsquo;s kitchen, and the
                kitchens of Bangladesh and Bengal.
              </p>
            </Reveal>

            <Reveal variant="rise" delay={0.4}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <MagneticCTA
                  href="#all-recipes"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-saffron via-gold to-pomegranate px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ember shadow-[0_18px_42px_-14px_rgba(226,118,27,0.65)] transition-transform duration-500"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/40 to-transparent transition-transform duration-700 ease-cinematic group-hover:translate-x-full"
                  />
                  <span className="relative">Begin the journey</span>
                  <IconArrowDown className="relative h-4 w-4" />
                </MagneticCTA>

                <a
                  href="#chapters"
                  className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-ember"
                >
                  Browse chapters
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </a>
              </div>
            </Reveal>

            <Reveal variant="fade" delay={0.55}>
              <div className="mt-14 flex flex-wrap items-end gap-x-10 gap-y-5 border-t border-cream/10 pt-7">
                {[
                  { num: "Ⅷ", label: "Chapters" },
                  { num: "20", label: "Launch recipes" },
                  { num: "100", label: "In the cookbook" },
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

          {/* RIGHT — editorial frame */}
          <div className="lg:col-span-5">
            <Reveal variant="rise" delay={0.2}>
              <EditorialFrame />
            </Reveal>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
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
              Why these recipes
            </p>

            <p
              className="relative mt-6 font-display italic text-cream"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              I do not write recipes only to feed you. I write them so you remember the
              hands that made them — my mother&rsquo;s, my grandmother&rsquo;s, and the
              hundreds of women whose names were never recorded but whose dinners fed{" "}
              <span className="bg-gradient-to-br from-saffron to-gold bg-clip-text not-italic text-transparent">
                two hundred million people
              </span>{" "}
              every night.
            </p>

            <p className="relative mt-8 max-w-[68ch] leading-[1.85] text-cream/75">
              Bengali cuisine is not exotic. It is precise, ancient, and deeply personal.
              These recipes are for those who already know — and for those who are about
              to. Each one carries a memory. Each one is a small act of preservation.
            </p>

            <div className="relative mt-10 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-12 bg-saffron" />
              Kishwar Chowdhury
            </div>
          </div>
        </Reveal>
      </div>
      </Parallax>

      {/* CHAPTERS / CATEGORIES */}
      <div
        id="chapters"
        className="relative z-10 mx-auto mt-32 max-w-[1400px] px-6 md:px-10"
      >
        <Reveal variant="rise">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                Nine chapters
              </p>
              <h2
                className="mt-6 max-w-[22ch] font-display text-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                The kitchen,{" "}
                <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2 pb-[0.18em] leading-[1.1] align-baseline">
                  arranged
                </span>{" "}
                as a book.
              </h2>
            </div>
            <p className="max-w-[42ch] text-cream/60 leading-relaxed md:text-right">
              Browse by chapter — each one a different room of the same house, the same
              memory, the same kitchen.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} variant="rise" delay={i * 0.05}>
              <CategoryTile {...c} />
            </Reveal>
          ))}
        </div>
      </div>


      {/* RECIPE INDEX */}
      <div id="all-recipes" className="relative z-10 mx-auto mt-40 max-w-[1400px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                The collection
              </p>
              <h2
                className="mt-6 max-w-[22ch] font-display text-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Eighteen stories,{" "}
                <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2 pb-[0.18em] leading-[1.1] align-baseline">
                  beginning here
                </span>
                .
              </h2>
            </div>
            <p className="max-w-[42ch] text-cream/60 leading-relaxed md:text-right">
              The full recipes arrive between now and the cookbook&rsquo;s release. Each
              one written long-form, with the memory before the method.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 divide-y divide-cream/10 border-y border-cream/10">
          {recipeIndex.map((r, i) => (
            <Reveal key={r.name} variant="fade" delay={Math.min(i * 0.04, 0.4)}>
              <li className="group">
                <a
                  href="#all-recipes"
                  className="grid grid-cols-1 items-baseline gap-3 py-7 transition-[padding-left,color] duration-500 ease-cinematic hover:pl-4 md:grid-cols-12 md:gap-8"
                >
                  <span className="font-display text-[11px] tracking-[0.4em] uppercase text-saffron md:col-span-1">
                    {r.number}
                  </span>
                  <span
                    className="font-display text-cream md:col-span-3"
                    style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", letterSpacing: "-0.01em" }}
                  >
                    {r.name}
                  </span>
                  <span className="text-[10px] tracking-[0.32em] uppercase text-cream/45 md:col-span-3">
                    {r.category}
                  </span>
                  <span className="font-display italic text-cream/75 md:col-span-4 leading-relaxed">
                    {r.whisper}
                  </span>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-cream/45 transition-colors duration-300 group-hover:text-saffron md:col-span-1 md:text-right">
                    Read →
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="fade" delay={0.1}>
          <p className="mt-10 text-center text-[11px] tracking-[0.4em] uppercase text-cream/45">
            Twenty stories total · two more arriving with the cookbook
          </p>
        </Reveal>
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

      {/* NEWSLETTER STRIP */}
      <Parallax range={30}>
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-pomegranate/30 via-ember to-saffron/20 p-[15px] md:p-14">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1/2 -z-0"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(226,118,27,0.10), transparent 30%, rgba(201,162,74,0.08), transparent 65%, rgba(122,31,43,0.10), transparent 95%)",
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
                  <span aria-hidden className="h-px w-10 bg-cream/40" />
                  Five free heritage recipes
                </p>
                <h3
                  className="mt-5 font-display text-cream"
                  style={{
                    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Sent slowly, by hand, never by algorithm.
                </h3>
                <p className="mt-4 max-w-[44ch] text-cream/70 leading-relaxed">
                  Monthly letters, behind-the-scenes from the Bengali kitchen, and early
                  access to new recipes.
                </p>
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
                  Send Me Recipes
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
            "radial-gradient(circle, rgba(226,118,27,0.30) 0%, rgba(226,118,27,0) 65%)",
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
            "radial-gradient(circle, rgba(201,162,74,0.28) 0%, rgba(201,162,74,0) 65%)",
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
            "radial-gradient(circle, rgba(122,31,43,0.32) 0%, rgba(122,31,43,0) 65%)",
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
/*                              EDITORIAL FRAME                               */
/* -------------------------------------------------------------------------- */

function EditorialFrame() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[460px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Soft glow halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/35 via-gold/25 to-pomegranate/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.95, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Frame */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border border-cream/15 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.7)]">
        <Image
          src="/images/recipes/recipes.jpg"
          alt="A heritage Bengali plate — fragrant, slow, layered."
          fill
          priority
          sizes="(min-width: 1024px) 460px, 80vw"
          className="object-cover"
        />
        {/* Soft grading overlay (warm vignette) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,8,5,0.55)_100%)]"
        />
        {/* Bottom gradient for caption */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ember via-ember/65 to-transparent"
        />
        {/* Caption block */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <p className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-saffron">
            <span aria-hidden className="h-px w-6 bg-saffron" />
            From the kitchen
          </p>
          <p
            className="mt-3 font-display italic text-cream"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.15rem)", lineHeight: 1.4 }}
          >
            &ldquo;Cook it once. You will understand a country.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-cream/55">
            <span>Plate Ⅰ</span>
            <span className="font-display italic normal-case tracking-normal text-cream/70">
              Photographed in Melbourne
            </span>
          </div>
        </div>
      </div>

      {/* Floating issue tag */}
      <div className="absolute -top-3 -right-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-pomegranate px-5 py-2 text-[10px] font-semibold tracking-[0.32em] uppercase text-ember shadow-[0_12px_30px_-10px_rgba(226,118,27,0.65)]">
        <span aria-hidden className="block h-1 w-1 rounded-full bg-ember" />
        Issue Ⅰ · 2026
      </div>

      {/* Decorative corner accents */}
      {[
        "left-[-10px] top-[-10px] border-l-2 border-t-2",
        "right-[-10px] bottom-[-10px] border-b-2 border-r-2",
      ].map((pos, i) => (
        <span
          key={i}
          aria-hidden
          className={`pointer-events-none absolute z-20 h-7 w-7 border-saffron/70 ${pos}`}
        />
      ))}
    </motion.div>
  );
}

function CategoryTile({ numeral, name, whisper, count, image }: Category) {
  return (
    <a
      href="#all-recipes"
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-cream/10 bg-smoke/30 transition-[transform,border-color,box-shadow] duration-500 ease-cinematic hover:-translate-y-2 hover:border-saffron/45 hover:shadow-[0_30px_60px_-22px_rgba(122,31,43,0.6)]"
    >
      {/* Real image */}
      <Image
        src={image}
        alt={name}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1100ms] ease-cinematic group-hover:scale-[1.08]"
      />

      {/* Dark gradient overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ember via-ember/55 to-ember/15 transition-opacity duration-500 group-hover:from-ember/95 group-hover:via-ember/35 group-hover:to-ember/5"
      />
      {/* Bottom anchor gradient — keeps text crisp */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ember via-ember/70 to-transparent"
      />

      {/* Hover shimmer sweep */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute -top-1/2 left-0 block h-[200%] w-[35%] -translate-x-[140%] -skew-x-12 transition-transform duration-1000 ease-cinematic group-hover:translate-x-[280%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.16) 50%, transparent 100%)",
          }}
        />
      </span>

      {/* Top-right chapter mark */}
      <div className="absolute right-5 top-5 flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-cream/75">
        <span>Chapter</span>
        <span
          aria-hidden
          className="font-display italic text-saffron"
          style={{ fontSize: "1.6rem", lineHeight: 1 }}
        >
          {numeral}
        </span>
      </div>

      {/* Bottom — content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <h3
          className="font-display text-cream"
          style={{
            fontSize: "clamp(1.4rem, 1.8vw, 1.85rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
          }}
        >
          {name}
        </h3>
        <p
          className="mt-2.5 font-display italic text-cream/80"
          style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)", lineHeight: 1.4 }}
        >
          {whisper}
        </p>
        <p className="mt-4 line-clamp-1 text-[10px] tracking-[0.32em] uppercase text-cream/50">
          {count}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase text-cream/65 transition-colors duration-300 group-hover:text-saffron">
          Open chapter
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </span>
      </div>
    </a>
  );
}
/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

type Ico = { className?: string };
const baseSvg = "h-4 w-4";

function IconArrowRight({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
function IconArrowDown({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

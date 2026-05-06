"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticCTA } from "@/components/motion/MagneticCTA";

const reach = [
  { value: "120K", label: "Instagram", Icon: IconInstagram },
  { value: "334K", label: "Facebook", Icon: IconFacebook },
  { value: "2.3K", label: "Twitter / X", Icon: IconTwitter },
  { value: "S13", label: "MasterChef AU", Icon: IconStar },
  { value: "Global", label: "Press Reach", Icon: IconGlobe },
] as const;

type WhyItem = {
  number: string;
  title: string;
  body: string;
  Icon: (p: { className?: string }) => React.JSX.Element;
};

const why: WhyItem[] = [
  {
    number: "01",
    title: "An authentic cultural voice",
    body: "Bengali heritage from a finalist who put panta bhat on the world's most-watched cooking stage. The story is real — not a borrowed aesthetic.",
    Icon: IconHeart,
  },
  {
    number: "02",
    title: "Story-driven creative",
    body: "Every partnership is shaped as a narrative — heritage, fire, family, place. Brands leave with content that audiences feel, not scroll past.",
    Icon: IconBook,
  },
  {
    number: "03",
    title: "Trusted multicultural reach",
    body: "Over 450,000 followers across Instagram and Facebook. A direct line to South Asian, Bangladeshi-Australian and global food audiences.",
    Icon: IconGlobe,
  },
  {
    number: "04",
    title: "Finalist-grade craft",
    body: "MasterChef Australia. Stagier at Ishizuka under Masahiko Yomoda. Featured at Crown Melbourne and the NGV. Quality your brand inherits.",
    Icon: IconFlame,
  },
];

type Service = {
  title: string;
  body: string;
  Icon: (p: { className?: string }) => React.JSX.Element;
};

const services: Service[] = [
  {
    title: "Recipe Development",
    body: "Custom Bengali and South Asian recipes for brands, publications and campaigns. Original photography and food styling included.",
    Icon: IconRecipe,
  },
  {
    title: "Menu Consultancy",
    body: "Restaurant and event menu design rooted in Bengali and South Asian cuisine. Concept to execution, with cultural integrity at every step.",
    Icon: IconMenu,
  },
  {
    title: "Brand Ambassadorship",
    body: "Long-term brand representation reaching multicultural Australian, South Asian diaspora, and global food audiences.",
    Icon: IconRibbon,
  },
  {
    title: "Content Creation",
    body: "Professional food photography, recipe video production, and social content across Instagram, TikTok and Facebook.",
    Icon: IconCamera,
  },
  {
    title: "Cultural Consultancy",
    body: "Bengali and South Asian food culture expertise for media, publishing, government and corporate clients.",
    Icon: IconCompass,
  },
  {
    title: "Keynote Speaking",
    body: "Talks on heritage, food, cultural identity, and the migrant experience. TEDx-stage experience, room-shaping presence.",
    Icon: IconMic,
  },
];

const partners = [
  {
    name: "Crown Melbourne",
    tag: "Pop-up Dining",
    body: "MasterChef Alumni pop-up (2024) — a four-course “Love Letter to Bangladesh” degustation. Three-week chef rotation (2025).",
    year: "2024 – 2025",
  },
  {
    name: "Cricket Australia",
    tag: "Multicultural Ambassador",
    body: "Inaugural multicultural ambassador cohort alongside Usman Khawaja, Mel Jones, Wasim Akram and Ravi Shastri.",
    year: "Inaugural cohort",
  },
  {
    name: "World Vision Australia",
    tag: "Charity Ambassador",
    body: "Bangladesh child sponsorship campaign — in-person visit to Bangladesh, original content creation and storytelling.",
    year: "Multi-year",
  },
  {
    name: "ASRC Feast for Freedom",
    tag: "Ambassador",
    body: "Ongoing ambassador since 2021. Annual fundraising event amplifying refugee and migrant food stories.",
    year: "2021 – present",
  },
  {
    name: "SBS Food",
    tag: "Television & Editorial",
    body: "Diwali series (2023) — four episodes. Editorial recipe features for SBS Food's national audience.",
    year: "2023",
  },
  {
    name: "NGV",
    tag: "Cultural Event",
    body: "Signature Dishes by Kishwar Chowdhury programme at the National Gallery of Victoria.",
    year: "Cultural programme",
  },
  {
    name: "Nymble",
    tag: "Brand Ambassador",
    body: "Smart cooking device partnership. Featured chef on eatwithnymble.com.",
    year: "Ongoing",
  },
  {
    name: "TEDx",
    tag: "Keynote Speaking",
    body: "“Recipe for a Beautiful Mind” — a talk on food as memory, pride, and heritage.",
    year: "Keynote",
  },
] as const;

const partnerLogos = [
  "Nymble",
  "Crown Melbourne",
  "Cricket Australia",
  "World Vision",
  "ASRC",
  "SBS Food",
  "NGV",
  "TEDx",
];

const speakingTopics = [
  "Preserving heritage through food — Bengali cuisine and the diaspora experience.",
  "From MasterChef to the world — building a food career outside restaurants.",
  "Recipe for a Beautiful Mind — food as memory, pride, and identity.",
  "Bengali cuisine — the 200-million-person food story the world hasn't heard.",
  "Second-generation migrant identity — cooking between two cultures.",
];

const cookbookOps = [
  "Co-branded cookbook bundles with kitchen and food brands.",
  "Launch event sponsorships — Melbourne, Sydney · June – July 2026.",
  "Exclusive recipe features and media tie-ins.",
  "Retail partnerships with Dymocks, Readings, and independent bookstores.",
];

export function Collaboration() {
  return (
    <section
      id="collaboration"
      className="relative overflow-hidden bg-ember pt-[calc(var(--space-section)+4rem)] pb-[var(--space-section)]"
    >
      <AnimatedMesh />

      {/* HERO */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-7">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Collaborations & Partnerships
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.1}>
            <h1
              className="mt-6 font-display"
              style={{
                fontSize: "clamp(2.2rem, 6.4vw, 5.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                textWrap: "balance",
              }}
            >
              <span className="text-cream">Let&rsquo;s create something </span>
              <span className="inline-block bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text italic text-transparent pr-3">
                meaningful
              </span>
              <span className="text-cream"> together.</span>
            </h1>
          </Reveal>

          <Reveal variant="fade" delay={0.22}>
            <p
              className="mt-8 max-w-[58ch] leading-relaxed text-cream/80"
              style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)" }}
            >
              Brand campaigns, events, content, keynotes — built as stories, not
              sponsorships. Heritage Bengali cuisine, told with depth and dignity by{" "}
              <span className="text-cream">Kishwar Chowdhury</span> — MasterChef
              Australia finalist, author of <span className="italic">Smoke Rice Water</span>{" "}
              (Hardie Grant, 2026).
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.34}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <MagneticCTA
                href="#inquiry"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-saffron via-gold to-pomegranate px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ember shadow-[0_18px_42px_-14px_rgba(226,118,27,0.65)] transition-transform duration-500"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/40 to-transparent transition-transform duration-700 ease-cinematic group-hover:translate-x-full"
                />
                <span className="relative">Start a Collaboration</span>
                <IconArrowRight className="relative h-4 w-4" />
              </MagneticCTA>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-ember"
              >
                View services
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
              </a>
            </div>
          </Reveal>

          <Reveal variant="fade" delay={0.5}>
            <p className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/45">
              <span aria-hidden className="block h-2 w-2 rounded-full bg-saffron" />
              Brand Partnership and Speaking inquiries flagged as high-priority.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal variant="rise" delay={0.2}>
            <PartnerCarousel />
          </Reveal>
        </div>
      </div>

      {/* AUDIENCE REACH PILL */}
      <div className="relative z-10 mx-auto mt-28 max-w-[1400px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-cream/10 bg-smoke/30 p-4 backdrop-blur-md md:grid-cols-5 md:gap-0 md:rounded-full md:p-2">
            {reach.map(({ value, label, Icon }, i) => (
              <div
                key={label}
                className={`group relative flex items-center gap-3 px-5 py-3 transition-colors duration-300 hover:text-saffron md:px-6 ${
                  i < reach.length - 1 ? "md:border-r md:border-cream/10" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron/25 via-gold/20 to-pomegranate/25 text-saffron transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-cream/45">
                    {label}
                  </p>
                  <p className="truncate font-display text-base text-cream">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal variant="fade" delay={0.1}>
          <p className="mx-auto mt-6 max-w-[78ch] text-center text-sm leading-relaxed text-cream/55">
            Plus the MasterChef Australia national broadcast audience. Press in SBS Food,
            <span className="text-cream"> marie claire</span>, ICC,{" "}
            <span className="text-cream">The Daily Star</span> Bangladesh, and{" "}
            <span className="text-cream">Dhaka Tribune</span>.
          </p>
        </Reveal>
      </div>

      {/* PARTNER LOGO STRIP */}
      <div className="relative z-10 mx-auto mt-24 max-w-[1400px] px-6 md:px-10">
        <Reveal variant="fade">
          <div className="text-center">
            <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              In good company
              <span aria-hidden className="h-px w-10 bg-cream/40" />
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
            {partnerLogos.map((name) => (
              <span
                key={name}
                className="font-display italic text-cream/60 transition-colors duration-300 hover:text-cream"
                style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.4rem)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* WHY KISHWAR */}
      <div
        id="why"
        className="relative z-10 mx-auto mt-32 grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10"
      >
        <div className="md:col-span-4">
          <Reveal variant="rise">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Why collaborate
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              Beyond a campaign. Toward a{" "}
              <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
                story
              </span>
              .
            </h2>
            <p className="mt-6 max-w-[42ch] text-cream/65 leading-relaxed">
              The work we make together should mean something — to your customers, to
              ours, and to the cultures we draw from. That&rsquo;s the bar.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {why.map((w, i) => (
              <Reveal key={w.number} variant="rise" delay={i * 0.08}>
                <WhyCard {...w} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div
        id="services"
        className="relative z-10 mx-auto mt-32 max-w-[1400px] px-6 md:px-10"
      >
        <Reveal variant="rise">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                Collaboration opportunities
              </p>
              <h2
                className="mt-6 max-w-[20ch] font-display text-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Six ways we can{" "}
                <span className="inline-block italic bg-gradient-to-br from-saffron to-pomegranate bg-clip-text text-transparent pr-2">
                  build
                </span>{" "}
                together.
              </h2>
            </div>
            <p className="max-w-[42ch] text-cream/60 leading-relaxed md:text-right">
              Engagements are tailored — every brief is read, every brand answered. Mix
              and match the services below or describe what you&rsquo;re imagining.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="rise" delay={i * 0.06}>
              <ServiceCard {...s} variant={i} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* SELECTED PARTNERS */}
      <div
        id="partners"
        className="relative z-10 mx-auto mt-32 max-w-[1400px] px-6 md:px-10"
      >
        <Reveal variant="rise">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span aria-hidden className="h-px w-10 bg-cream/40" />
                Selected partners
              </p>
              <h2
                className="mt-6 max-w-[20ch] font-display text-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Where the work has{" "}
                <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
                  travelled
                </span>
                .
              </h2>
            </div>
            <p className="max-w-[42ch] text-cream/60 leading-relaxed md:text-right">
              A line-up of brand, broadcast, charity and cultural partners — each one a
              chapter in a longer story.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          {partners.map((p, i) => (
            <Reveal key={p.name} variant="fade" delay={Math.min(i * 0.05, 0.4)}>
              <PartnerRow {...p} />
            </Reveal>
          ))}
          <div className="mt-2 h-px w-full bg-cream/10" />
        </div>
      </div>

      {/* COOKBOOK LAUNCH WINDOW */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-saffron/10 via-ember to-pomegranate/15 p-10 backdrop-blur-md md:p-16">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-saffron/30 to-pomegranate/30 blur-3xl"
            />
            <p className="relative flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              June 2026 · A launch window
            </p>
            <h3
              className="relative mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(1.85rem, 3.4vw, 2.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Build alongside the cookbook launch of{" "}
              <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
                Smoke Rice Water
              </span>
              .
            </h3>
            <p className="relative mt-6 max-w-[68ch] leading-relaxed text-cream/75">
              Hardie Grant publishes Kishwar&rsquo;s debut cookbook on{" "}
              <span className="text-cream">23 June 2026</span>. The launch window is a
              once-only moment of attention — and an opening for partners who want to be
              part of the story.
            </p>
            <ul className="relative mt-10 grid gap-3 md:grid-cols-2">
              {cookbookOps.map((op) => (
                <li
                  key={op}
                  className="group flex items-start gap-3 rounded-xl border border-cream/10 bg-smoke/30 p-5 backdrop-blur-sm transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-saffron/40 hover:bg-smoke/45"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-saffron to-pomegranate"
                  />
                  <span className="text-sm leading-relaxed text-cream/85 transition-colors duration-300 group-hover:text-cream">
                    {op}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* SPEAKING TOPICS */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
            <span aria-hidden className="h-px w-10 bg-cream/40" />
            Speaking topics
          </p>
          <h2
            className="mt-6 font-display text-cream"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Talks shaped by the{" "}
            <span className="inline-block italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent pr-2">
              kitchen, the country, the crossing
            </span>
            .
          </h2>
        </Reveal>

        <ol className="mt-12 [counter-reset:speak]">
          {speakingTopics.map((topic, i) => (
            <Reveal key={topic} variant="fade" delay={i * 0.05}>
              <li
                className="group flex items-baseline gap-6 border-t border-cream/10 py-6 transition-[padding-left,color] duration-500 ease-cinematic last:border-b hover:pl-4 hover:text-cream"
                style={{ counterIncrement: "speak" }}
              >
                <span className="font-display text-[11px] tracking-[0.4em] uppercase text-saffron min-w-[3rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display text-cream/85 leading-tight transition-colors duration-300 group-hover:text-cream"
                  style={{
                    fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {topic}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* PULL QUOTE */}
      <div className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-smoke/60 via-ember to-smoke/60 p-10 backdrop-blur-md md:p-16">
            <span
              aria-hidden
              className="absolute -left-2 -top-6 select-none font-display text-[14rem] leading-none text-saffron/15"
            >
              &ldquo;
            </span>
            <p
              className="relative font-display italic text-cream"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              The plate is the smallest stage in the world — and the loudest. The right
              partnership doesn&rsquo;t shout. It carries{" "}
              <span className="bg-gradient-to-br from-saffron to-gold bg-clip-text not-italic text-transparent">
                meaning
              </span>{" "}
              into rooms where the brand alone could not have reached.
            </p>
            <div className="relative mt-10 flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
              <span aria-hidden className="h-px w-12 bg-saffron" />
              Kishwar Chowdhury
            </div>
          </div>
        </Reveal>
      </div>

      {/* CTA / INQUIRY */}
      <div
        id="inquiry"
        className="relative z-10 mx-auto mt-32 max-w-[1100px] px-6 md:px-10"
      >
        <Reveal variant="rise">
          <div className="relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-pomegranate/30 via-ember to-saffron/20 p-10 md:p-14">
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
            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/65">
                  <span aria-hidden className="h-px w-10 bg-cream/40" />
                  Let&rsquo;s talk
                </p>
                <h3
                  className="mt-5 font-display text-cream"
                  style={{
                    fontSize: "clamp(2rem, 3.6vw, 3rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Tell us what you&rsquo;re imagining.
                </h3>
                <p className="mt-5 max-w-[44ch] text-cream/75 leading-relaxed">
                  Send a brief and we&rsquo;ll come back within two business days. Brand
                  Partnership and Speaking inquiries are flagged as high-priority and
                  routed directly to the team.
                </p>
                <p className="mt-8 flex flex-wrap items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream/55">
                  <span aria-hidden className="h-px w-8 bg-cream/30" />
                  <a
                    href="mailto:hello@kishwar.com.au"
                    className="text-cream underline decoration-saffron/70 underline-offset-4 transition-colors duration-300 hover:text-saffron"
                  >
                    hello@kishwar.com.au
                  </a>
                </p>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);
                  const subject = encodeURIComponent(
                    `Collaboration inquiry — ${data.get("type") || "General"}`,
                  );
                  const body = encodeURIComponent(
                    `Name: ${data.get("name") || ""}\nCompany: ${data.get("company") || ""}\nEmail: ${data.get("email") || ""}\nInquiry type: ${data.get("type") || ""}\nTimeline: ${data.get("timeline") || ""}\n\nMessage:\n${data.get("message") || ""}`,
                  );
                  window.location.href = `mailto:hello@kishwar.com.au?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    aria-label="Your name"
                    className="w-full rounded-full border border-cream/15 bg-ember/50 px-5 py-3 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                  />
                  <input
                    name="company"
                    required
                    placeholder="Company / Organisation"
                    aria-label="Company or organisation"
                    className="w-full rounded-full border border-cream/15 bg-ember/50 px-5 py-3 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full rounded-full border border-cream/15 bg-ember/50 px-5 py-3 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                />
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <select
                    name="type"
                    aria-label="Inquiry type"
                    defaultValue=""
                    className="w-full appearance-none rounded-full border border-cream/15 bg-ember/50 px-5 py-3 text-sm text-cream/85 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                  >
                    <option value="" disabled>
                      Inquiry type
                    </option>
                    <option className="bg-ember">Brand Partnership</option>
                    <option className="bg-ember">Speaking & Events</option>
                    <option className="bg-ember">Recipe Development</option>
                    <option className="bg-ember">Media & Press</option>
                    <option className="bg-ember">Cookbook Launch</option>
                    <option className="bg-ember">Other</option>
                  </select>
                  <select
                    name="timeline"
                    aria-label="Project timeline"
                    defaultValue=""
                    className="w-full appearance-none rounded-full border border-cream/15 bg-ember/50 px-5 py-3 text-sm text-cream/85 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                  >
                    <option value="" disabled>
                      Timeline
                    </option>
                    <option className="bg-ember">Within 1 month</option>
                    <option className="bg-ember">1 – 3 months</option>
                    <option className="bg-ember">3 – 6 months</option>
                    <option className="bg-ember">Flexible</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about the project…"
                  aria-label="Message"
                  className="w-full resize-none rounded-2xl border border-cream/15 bg-ember/50 px-5 py-4 text-sm text-cream placeholder:text-cream/35 backdrop-blur-md transition-colors focus:border-saffron focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-saffron via-gold to-pomegranate px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ember transition-transform duration-300 hover:scale-[1.01]"
                >
                  Send inquiry
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="text-center text-[10px] tracking-[0.32em] uppercase text-cream/40">
                  All inquiries → hello@kishwar.com.au
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          ANIMATED MESH BACKGROUND                          */
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
            "radial-gradient(circle, rgba(226,118,27,0.32) 0%, rgba(226,118,27,0) 65%)",
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
            "radial-gradient(circle, rgba(201,162,74,0.30) 0%, rgba(201,162,74,0) 65%)",
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
            "radial-gradient(circle, rgba(122,31,43,0.34) 0%, rgba(122,31,43,0) 65%)",
          filter: "blur(90px)",
        }}
        animate={{ x: [0, -60, 80, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pomegranate/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember)/0.55)_100%)]" />
      {Array.from({ length: 18 }).map((_, i) => {
        const left = `${(i * 13 + 5) % 97}%`;
        const top = `${(i * 19 + 9) % 95}%`;
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
/*                          PARTNER STACK (HERO RIGHT)                        */
/* -------------------------------------------------------------------------- */

const stackedPartners = [
  {
    name: "Crown Melbourne",
    tag: "Pop-up Dining · 2024",
    line: "“A Love Letter to Bangladesh” — four-course degustation.",
  },
  {
    name: "Cricket Australia",
    tag: "Multicultural Ambassador",
    line: "Inaugural cohort. Khawaja, Akram, Shastri.",
  },
  {
    name: "World Vision",
    tag: "Charity · Bangladesh",
    line: "Field visit + storytelling for child-sponsorship.",
  },
];

/**
 * Three-card stacked rotation. All three cards always rendered, each
 * animated to a defined slot (front / middle / back) based on `active`.
 * Cycle is strictly 1 → 2 → 3 → 1 — no AnimatePresence, no exit gaps,
 * no skipping. Subtle 3D perspective + downward stack offsets give the
 * top-to-bottom slide feel; the active card is most prominent.
 */
const slotStyles = [
  // 0 — front / active
  { y: 0, scale: 1, opacity: 1, rotateX: 0, zIndex: 30 },
  // 1 — middle (next up)
  { y: 44, scale: 0.93, opacity: 0.6, rotateX: -8, zIndex: 20 },
  // 2 — back (after-next)
  { y: 86, scale: 0.86, opacity: 0.3, rotateX: -16, zIndex: 10 },
];

function PartnerCarousel() {
  const [active, setActive] = useState(0);
  const total = stackedPartners.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 3800);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <div className="relative mx-auto w-full max-w-[440px] py-6">
      {/* halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-14 -z-10 rounded-[40%] bg-gradient-to-br from-saffron/40 via-gold/30 to-pomegranate/35 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D stage — perspective gives the cards real depth, height fits the back-most card */}
      <div
        className="relative h-[320px]"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 35%" }}
      >
        {stackedPartners.map((p, i) => {
          const slot = (i - active + total) % total;
          const target = slotStyles[slot];
          return (
            <motion.div
              key={p.name}
              className="absolute inset-x-0 top-0"
              initial={false}
              animate={target}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "50% 0%",
                willChange: "transform, opacity",
              }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-cream/15 bg-gradient-to-br from-smoke/85 via-ember to-smoke/85 p-7 backdrop-blur-md shadow-[0_30px_60px_-22px_rgba(0,0,0,0.6)]">
                <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <span
                    className="absolute -top-1/2 left-0 block h-[200%] w-[40%] -skew-x-12"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.10) 50%, transparent 100%)",
                    }}
                  />
                </span>

                <div className="relative flex items-center justify-between gap-4">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-saffron">
                    {p.tag}
                  </p>
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-saffron/30 via-gold/25 to-pomegranate/30 text-saffron"
                  >
                    <IconStar className="h-4 w-4" />
                  </span>
                </div>
                <p className="relative mt-4 font-display text-3xl leading-tight text-cream">
                  {p.name}
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-cream/70">
                  {p.line}
                </p>
                <p className="relative mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-cream/55">
                  <span aria-hidden className="h-px w-6 bg-saffron" />
                  Now featuring
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  WHY CARD                                  */
/* -------------------------------------------------------------------------- */

function WhyCard({ number, title, body, Icon }: WhyItem) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-cream/10 bg-smoke/30 p-7 backdrop-blur-md transition-[border-color,background-color,transform,box-shadow] duration-500 ease-cinematic hover:-translate-y-1 hover:border-saffron/40 hover:bg-smoke/45 hover:shadow-[0_24px_50px_-22px_rgba(122,31,43,0.5)]">
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
      <h3 className="relative mt-8 font-display text-2xl leading-tight text-cream">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-cream/70">{body}</p>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                SERVICE CARD                                */
/* -------------------------------------------------------------------------- */

function ServiceCard({ title, body, Icon, variant }: Service & { variant: number }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-cream/10 bg-smoke/30 p-7 backdrop-blur-md transition-[border-color,transform,box-shadow] duration-500 ease-cinematic hover:-translate-y-1.5 hover:border-saffron/40 hover:shadow-[0_28px_55px_-22px_rgba(122,31,43,0.5)]">
      <AnimatedServiceBg variant={variant} />
      {/* hover shimmer over the bg */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute -top-1/2 left-0 block h-[200%] w-[35%] -translate-x-[140%] -skew-x-12 transition-transform duration-1000 ease-cinematic group-hover:translate-x-[280%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.14) 50%, transparent 100%)",
          }}
        />
      </span>
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron/25 via-gold/20 to-pomegranate/25 text-saffron transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <h3 className="relative mt-8 font-display text-2xl leading-tight text-cream">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-cream/70">{body}</p>
      <div className="relative mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.4em] uppercase text-cream/55 transition-colors duration-300 group-hover:text-saffron">
        Inquire
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                         ANIMATED SERVICE CARD BG                           */
/* -------------------------------------------------------------------------- */

function AnimatedServiceBg({ variant }: { variant: number }) {
  switch (variant % 6) {
    case 0:
      // Pomegranate pulse — off-center top-left (matches variant-2 register)
      return (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 35%, rgba(122,31,43,0.34) 0%, rgba(122,31,43,0) 60%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.95, 0.55] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    case 1:
      // Horizontal warm sweep — drifts slowly across the card
      return (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(226,118,27,0.18) 30%, rgba(122,31,43,0.20) 60%, transparent 100%)",
            backgroundSize: "220% 100%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    case 2:
      // Pomegranate breathing pulse — center
      return (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(122,31,43,0.40) 0%, rgba(122,31,43,0) 60%)",
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    case 3:
      // Gold pulse — lower-right (same register as variants 0 & 2)
      return (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 75%, rgba(201,162,74,0.28) 0%, rgba(201,162,74,0) 60%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.95, 0.55] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    case 4:
      // Diagonal sweep — moving gradient stripe
      return (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(226,118,27,0.20) 0%, transparent 40%, rgba(122,31,43,0.22) 80%)",
            backgroundSize: "220% 220%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    case 5:
    default:
      // Top-right gold shimmer + soft pulse
      return (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 18%, rgba(201,162,74,0.30) 0%, rgba(201,162,74,0) 60%), radial-gradient(circle at 25% 90%, rgba(226,118,27,0.20) 0%, rgba(226,118,27,0) 55%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.95, 0.55] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      );
  }
}

/* -------------------------------------------------------------------------- */
/*                                PARTNER ROW                                 */
/* -------------------------------------------------------------------------- */

type PartnerRowProps = {
  name: string;
  tag: string;
  body: string;
  year: string;
};

function PartnerRow({ name, tag, body, year }: PartnerRowProps) {
  return (
    <div className="group grid grid-cols-1 items-baseline gap-3 border-t border-cream/10 py-7 transition-[padding-left] duration-500 ease-cinematic hover:pl-4 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <h3 className="font-display text-xl text-cream md:text-2xl">{name}</h3>
        <p className="mt-1.5 text-[10px] tracking-[0.32em] uppercase text-saffron">
          {tag}
        </p>
      </div>
      <p className="md:col-span-7 leading-relaxed text-cream/75">{body}</p>
      <p className="md:col-span-2 md:text-right text-[11px] tracking-[0.32em] uppercase text-cream/45">
        {year}
      </p>
    </div>
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
function IconHeart({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
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
function IconGlobe({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
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
function IconRecipe({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 4h11a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2Z" />
      <path d="M6 18a2 2 0 0 1 2-2h11" />
      <path d="M10 8h7M10 12h7" />
    </svg>
  );
}
function IconMenu({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 5h14M5 12h14M5 19h9" />
    </svg>
  );
}
function IconRibbon({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14-3 8 6-3 6 3-3-8" />
    </svg>
  );
}
function IconCamera({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 8h4l2-3h6l2 3h4v11H3z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function IconCompass({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 15 2-6 6-2-2 6Z" />
    </svg>
  );
}
function IconMic({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3M9 21h6" />
    </svg>
  );
}
function IconStar({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m12 3 2.6 6 6.4.6-4.8 4.4 1.4 6.4L12 17.5 6.4 20.4l1.4-6.4L3 9.6 9.4 9Z" />
    </svg>
  );
}
function IconInstagram({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFacebook({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 8V6a2 2 0 0 1 2-2h2v3h-2c-.5 0-1 .5-1 1v2h3l-.5 3H15v8h-3v-8H9v-3h3Z" />
    </svg>
  );
}
function IconTwitter({ className = baseSvg }: Ico) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4l7 9-7 7h2l6-6 4 6h4l-7-10 7-6h-2l-6 5-4-5Z" />
    </svg>
  );
}

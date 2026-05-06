"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { gsap, registerGsap } from "@/lib/gsap";
import { images } from "@/content/images";
import { Reveal } from "@/components/motion/Reveal";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span: string;
  aspect: string;
};

// Layout rules: within each row, span × aspect must yield the same intrinsic
// height so tiles are flush — no exposed section background between tiles.
//
//   col-8 aspect-[4/3] + col-4 aspect-[2/3]  → both 6w tall
//   col-4 × 3 aspect-[5/4]                   → all 3.2w tall
//   col-7 aspect-[7/5] + col-5 aspect-[1/1]  → both 5w tall
//   col-12 aspect-[16/5]                     → 5w tall
//
const galleryItems: GalleryItem[] = [
  // Row 1
  {
    src: images.heroPortrait.src,
    alt: images.heroPortrait.alt,
    caption: "Editorial Portrait",
    span: "col-span-12 md:col-span-8",
    aspect: "aspect-[4/3]",
  },
  {
    src: images.storyFire.src,
    alt: images.storyFire.alt,
    caption: "Fire & Flavour",
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[2/3]",
  },
  // Row 2 — three matching portraits
  {
    src: images.storyHeritage.src,
    alt: images.storyHeritage.alt,
    caption: "Heritage & Home",
    span: "col-span-6 md:col-span-4",
    aspect: "aspect-[5/4]",
  },
  {
    src: images.storyToday.src,
    alt: images.storyToday.alt,
    caption: "Today",
    span: "col-span-6 md:col-span-4",
    aspect: "aspect-[5/4]",
  },
  {
    src: "/assets/masterchef-1.jpg",
    alt: "Kishwar Chowdhury — official portrait, Facebook.",
    caption: "Official Portrait",
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[5/4]",
  },
  // Row 3
  {
    src: images.pressNetwork10.src,
    alt: images.pressNetwork10.alt,
    caption: "Editorial Feature",
    span: "col-span-12 md:col-span-7",
    aspect: "aspect-[7/5]",
  },
  {
    src: images.masterchefStill.src,
    alt: images.masterchefStill.alt,
    caption: "MasterChef · Grand Finale",
    span: "col-span-12 md:col-span-5",
    aspect: "aspect-square",
  },
  // Row 4 — wide banner
  {
    src: images.pressDailyStar.src,
    alt: images.pressDailyStar.alt,
    caption: "Cover Story",
    span: "col-span-12",
    aspect: "aspect-[16/5]",
  },
];

export function Gallery() {
  const root = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  // Fancybox lightbox — bind once on mount
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]');
    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Subtle alternating Y parallax on tiles
  useEffect(() => {
    registerGsap();
    const r = root.current;
    const g = grid.current;
    if (!r || !g) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = Array.from(g.querySelectorAll<HTMLElement>("[data-tile]"));
      items.forEach((item, i) => {
        const offset = i % 2 === 0 ? -40 : 40;
        gsap.fromTo(
          item,
          { y: offset, opacity: 0.6 },
          {
            y: -offset,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: r,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });
    }, r);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-ember py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <Reveal variant="rise" className="md:col-span-6">
            <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/60">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Gallery
            </p>
            <h2
              className="mt-6 font-display text-cream"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                maxWidth: "20ch",
              }}
            >
              Frames from the kitchen, the table, the road.
            </h2>
          </Reveal>
          <Reveal
            variant="fade"
            delay={0.15}
            className="md:col-span-5 md:col-start-8"
          >
            <p className="text-cream/70 leading-relaxed" style={{ maxWidth: "44ch" }}>
              Selected photographs documenting the work — heritage produce, slow fires,
              long lunches, the people who keep these recipes alive.
            </p>
          </Reveal>
        </div>

        <div
          ref={grid}
          className="mt-20 grid grid-cols-12 items-start gap-4 md:gap-6"
        >
          {galleryItems.map((item, i) => (
            <Tile key={i} item={item} index={i} />
          ))}
        </div>

        {/* Tally + view-all hint — stacked on mobile, flexed on desktop */}
        <div className="mt-12 block space-y-3 text-[11px] tracking-[0.4em] uppercase text-cream/50 md:flex md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center gap-3">
            <span aria-hidden className="block h-2 w-2 rounded-full bg-saffron" />
            <span>{galleryItems.length} frames · click to enlarge</span>
          </div>
          <a
            href="https://www.facebook.com/kishwarmasterchef/photos"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-5 py-3 text-cream/80 backdrop-blur-md transition-colors hover:bg-cream/[0.08] hover:text-saffron md:w-auto md:justify-start md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-cream/70 md:backdrop-blur-none"
          >
            See more on Facebook
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Tile({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <a
      href={item.src}
      data-fancybox="gallery"
      data-caption={item.caption}
      data-tile
      aria-label={`Open ${item.caption} in lightbox`}
      className={`group relative cursor-zoom-in overflow-hidden rounded-sm bg-smoke shadow-[0_2px_18px_-8px_rgba(0,0,0,0.4)] transition-[transform,box-shadow] duration-500 ease-cinematic hover:-translate-y-1 hover:shadow-[0_24px_55px_-18px_rgba(226,118,27,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${item.span}`}
    >
      <div className={`relative w-full ${item.aspect}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          quality={85}
          className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.06]"
          style={{ objectPosition: "center 30%" }}
        />
        <div aria-hidden className="absolute inset-0 grain" />
        {/* Inner ring */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/10 transition-colors duration-500 group-hover:ring-saffron/40"
        />
        {/* Bottom warm overlay — fades in on hover */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ember/75 via-ember/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Diagonal saffron sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span
            className="absolute -top-1/2 left-0 block h-[200%] w-[35%] -translate-x-[140%] -skew-x-12 transition-transform duration-1000 ease-cinematic group-hover:translate-x-[280%]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgb(var(--kc-cream) / 0.16) 50%, transparent 100%)",
            }}
          />
        </span>
        {/* Frame number badge */}
        <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full bg-ember/85 px-3 py-1 text-[10px] tracking-[0.4em] uppercase text-cream backdrop-blur-sm transition-colors duration-500 group-hover:bg-saffron group-hover:text-ember">
          <span aria-hidden className="block h-1 w-1 rounded-full bg-saffron transition-colors duration-500 group-hover:bg-ember" />
          {String(index + 1).padStart(2, "0")}
        </div>
        {/* Magnify icon — slides in on hover */}
        <div className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ember/85 text-cream/85 opacity-0 shadow-lg shadow-pomegranate/30 backdrop-blur-sm transition-all duration-400 group-hover:scale-110 group-hover:opacity-100">
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
            <circle cx="11" cy="11" r="6" />
            <path d="M16 16l5 5M9 11h4M11 9v4" />
          </svg>
        </div>
        {/* Caption pill — emerges from bottom on hover */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 translate-y-3 rounded-sm bg-ember/85 px-3 py-2 opacity-0 backdrop-blur-sm transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[10px] tracking-[0.4em] uppercase text-cream/85">
            {item.caption}
          </p>
        </div>
      </div>
    </a>
  );
}

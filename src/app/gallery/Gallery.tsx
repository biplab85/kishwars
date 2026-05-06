"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
// Fancybox styles — Next.js handles CSS imports natively.
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type Props = {
  initial: string[];
  more: string[];
};

const BATCH = 5;
const PIXIESET_URL =
  "https://reminiscencephotography16.pixieset.com/kishwarsmanuscript/";

export function Gallery({ initial, more }: Props) {
  const [items, setItems] = useState<string[]>(initial);
  const [moreQueue, setMoreQueue] = useState<string[]>(more);
  const [loadingMore, setLoadingMore] = useState(false);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const masonryRef = useRef<unknown>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Lazy-init Masonry + Fancybox once (browser only)
  useEffect(() => {
    if (!gridRef.current) return;

    let masonry: unknown;
    let cancelled = false;

    (async () => {
      const [{ default: Masonry }, { default: imagesLoaded }, fancybox] =
        await Promise.all([
          import("masonry-layout"),
          import("imagesloaded"),
          import("@fancyapps/ui"),
        ]);

      if (cancelled || !gridRef.current) return;

      masonry = new Masonry(gridRef.current, {
        itemSelector: ".kc-gallery-item",
        columnWidth: ".kc-gallery-sizer",
        percentPosition: true,
        gutter: 0,
        transitionDuration: "0.25s",
      });
      masonryRef.current = masonry;

      // Re-layout as images finish loading
      imagesLoaded(gridRef.current).on("progress", () => {
        (masonry as { layout: () => void }).layout();
      });

      // Fancybox bind — scoped to this gallery's data-fancybox group.
      // Plugin options like Thumbs/Toolbar aren't in the official type defs;
      // cast to a permissive shape.
      (fancybox.Fancybox.bind as (sel: string, opts?: unknown) => void)(
        '[data-fancybox="kc-gallery"]',
        {
          Thumbs: { type: "modern" },
          Toolbar: {
            display: {
              left: ["infobar"],
              middle: [],
              right: ["slideshow", "thumbs", "close"],
            },
          },
        },
      );
    })();

    return () => {
      cancelled = true;
      if (masonry && typeof (masonry as { destroy: () => void }).destroy === "function") {
        (masonry as { destroy: () => void }).destroy();
      }
      // Fancybox destroyAll on unmount
      import("@fancyapps/ui").then((fb) => fb.Fancybox.destroy()).catch(() => {});
    };
  }, []);

  // Whenever items change (View More appended), call masonry.appended + relayout
  useEffect(() => {
    if (!gridRef.current || !masonryRef.current) return;
    const m = masonryRef.current as {
      reloadItems: () => void;
      layout: () => void;
    };
    // Re-scan items and relayout when new ones are mounted
    m.reloadItems();
    m.layout();
    import("imagesloaded").then(({ default: imagesLoaded }) => {
      if (!gridRef.current) return;
      imagesLoaded(gridRef.current).on("progress", () => m.layout());
    });
  }, [items.length]);

  function loadNextBatch() {
    if (moreQueue.length === 0 || loadingMore) return;
    setLoadingMore(true);
    const next = moreQueue.slice(0, BATCH);
    const rest = moreQueue.slice(BATCH);
    // small delay so the spinner is perceptible / animations settle
    setTimeout(() => {
      setItems((prev) => [...prev, ...next]);
      setMoreQueue(rest);
      setLoadingMore(false);
    }, 220);
  }

  // Scroll-loading via IntersectionObserver — active from page load while
  // there are still more local images queued.
  useEffect(() => {
    if (moreQueue.length === 0) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) loadNextBatch();
        }
      },
      { rootMargin: "600px 0px" }, // start loading well before sentinel hits
    );
    io.observe(sentinel);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moreQueue.length, loadingMore]);

  const allLoaded = moreQueue.length === 0;

  return (
    <section
      id="gallery-page"
      className="relative overflow-x-clip bg-ember pt-[calc(var(--space-section)+4rem)] pb-[var(--space-section)]"
    >
      <AmbientMesh />

      {/* HERO */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal variant="rise">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.4em] uppercase text-cream/55">
            <span className="inline-flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-cream/40" />
              Gallery
            </span>
            <span aria-hidden className="text-saffron">·</span>
            <span>Frames from Melbourne &amp; Dhaka</span>
          </div>
        </Reveal>

        <Reveal variant="rise" delay={0.08}>
          <h1
            className="mt-10 max-w-[20ch] font-display"
            style={{
              fontSize: "clamp(2.4rem, 6.6vw, 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            <span className="text-cream">Behind the </span>
            <span className="inline-block bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text italic text-transparent pr-3">
              frame
            </span>
            <span className="text-cream">.</span>
          </h1>
        </Reveal>

        <Reveal variant="fade" delay={0.18}>
          <p
            className="mt-8 max-w-[58ch] leading-relaxed text-cream/70"
            style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
          >
            Kitchens, streets, plates — the unguarded moments around the
            cookbook shoots. Click any frame to enlarge and step through the
            full sequence.
          </p>
        </Reveal>
      </div>

      {/* MASONRY GRID */}
      <div className="relative z-10 mx-auto mt-16 max-w-[1500px] px-6 md:px-10">
        <div
          ref={gridRef}
          className="kc-gallery-grid"
          style={{ position: "relative" }}
        >
          {/* Sizer — used by masonry to compute column width */}
          <div className="kc-gallery-sizer w-full sm:w-1/2 md:w-1/3 lg:w-1/4" />

          {items.map((src, i) => (
            <a
              key={`${src}-${i}`}
              href={src}
              data-fancybox="kc-gallery"
              data-caption={`Frame ${i + 1}`}
              className="kc-gallery-item group block w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4"
              style={{ float: "left" }}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg ring-1 ring-cream/10 shadow-xl shadow-black/40"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.02, 0.4) }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Gallery frame ${i + 1}`}
                  loading={i < 8 ? "eager" : "lazy"}
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Hover scrim */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ember/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Expand glyph */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ember/70 text-cream/85 backdrop-blur-md opacity-0 ring-1 ring-cream/15 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M9 3H3v6" />
                    <path d="M21 9V3h-6" />
                    <path d="M3 15v6h6" />
                    <path d="M15 21h6v-6" />
                  </svg>
                </span>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Sentinel — IntersectionObserver triggers loadNextBatch when this comes near the viewport */}
        {!allLoaded && (
          <div ref={sentinelRef} aria-hidden className="h-1 w-full" />
        )}

        {/* Footer state: subtle loading row while more remain, external link when all are loaded */}
        <div className="mt-14 flex flex-col items-center gap-4">
          {!allLoaded ? (
            <div
              role="status"
              aria-live="polite"
              className={`inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-cream/45 transition-opacity duration-300 ${
                loadingMore ? "opacity-100" : "opacity-60"
              }`}
            >
              <SpinnerDot className="h-3.5 w-3.5" />
              Loading more
            </div>
          ) : (
            <a
              href={PIXIESET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-saffron/30 bg-gradient-to-r from-saffron/10 via-gold/10 to-pomegranate/10 px-7 py-3 text-[11px] tracking-[0.32em] uppercase text-cream backdrop-blur-md transition-colors hover:border-saffron/60 hover:text-saffron"
            >
              View More
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Local CSS to clear the masonry float layout */}
      <style jsx global>{`
        .kc-gallery-grid::after {
          content: "";
          display: block;
          clear: both;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             AMBIENT BACKGROUND                             */
/* -------------------------------------------------------------------------- */

function AmbientMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute h-[680px] w-[680px] rounded-full"
        style={{
          left: "-12%",
          top: "-8%",
          background:
            "radial-gradient(circle, rgba(226,118,27,0.22) 0%, rgba(226,118,27,0) 65%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [0, 90, 30, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[620px] w-[620px] rounded-full"
        style={{
          right: "-8%",
          top: "20%",
          background:
            "radial-gradient(circle, rgba(201,162,74,0.20) 0%, rgba(201,162,74,0) 65%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -70, 50, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(var(--kc-ember)/0.6)_100%)]" />
    </div>
  );
}

function SpinnerDot({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
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

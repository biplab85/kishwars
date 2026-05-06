"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { text } from "@/content/text";

/**
 * Structure mirrors the Featured Videos section pattern from
 * https://tasvir-mirza.vercel.app/ (biplab85/tasvir-mirza on GitHub).
 * Coverflow params, slide widths, badge positions, hover behaviour,
 * autoplay timing, and the View-All CTA are all 1:1. Color tokens
 * are translated to Kishwar's palette so the section fits the rest
 * of the site — saffron stands in for electric-blue, pomegranate
 * for neon-pink, smoke for graphite, ember for obsidian.
 */

// Build a 10-slide deck like the reference (5 unique × 2 for loop pacing).
const featuredVideos = [
  ...text.videos.items,
  ...text.videos.items,
].map((v, i) => ({
  id: `${i + 1}`,
  videoId: v.id,
  title: v.title,
  description: v.outlet,
  category: v.outlet.split(" · ")[0] ?? v.outlet,
  duration: ["12:34", "15:22", "18:45", "14:18", "16:52"][i % 5],
  views: ["150K", "285K", "198K", "124K", "167K"][i % 5],
  thumbnail: `/images/yt-${v.id}.jpg`,
}));

export function FeaturedVideos() {
  const sectionRef = useRef<HTMLElement>(null);
  // useInView is wired here for parity with the reference, even though
  // the reveal animations below use `animate` (run once on mount).
  useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="videos"
        className="relative overflow-hidden bg-ember py-[var(--space-section)]"
      >
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.32em] text-cream/60">
            Latest Content
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "var(--color-cream)",
            }}
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E2761B 0%, #C9A24A 50%, #7A1F2B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Videos
            </span>
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="relative overflow-hidden bg-ember py-[var(--space-section)]"
    >
      {/* Background — top + bottom hairline gradient bars and a floating orb */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pomegranate/30 to-transparent" />

        <motion.div
          className="absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(226,118,27,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10" style={{ isolation: "isolate" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 px-6 text-center"
        >
          <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.32em] text-cream/60">
            Latest Content
          </span>
          <h2
            className="mb-4 font-display"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "var(--color-cream)",
            }}
          >
            Featured{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #E2761B 0%, #C9A24A 50%, #7A1F2B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Videos
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-cream/70">
            Selected appearances and recipes from television, podcasts and her own
            kitchen — long-form work behind the headlines.
          </p>
        </motion.div>

        {/* Coverflow slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-hidden"
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            modules={[EffectCoverflow, Autoplay]}
            className="kc-coverflow"
          >
            {featuredVideos.map((video, index) => (
              <SwiperSlide
                key={video.id}
                className="!w-[300px] sm:!w-[350px] md:!w-[400px] lg:!w-[450px]"
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    activeIndex === index ? "shadow-2xl shadow-pomegranate/30" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ember via-ember/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Play button */}
                    <a
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${video.title} on YouTube`}
                      className="kc-play-btn opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 rounded bg-ember/80 px-2 py-1 font-mono text-xs text-cream">
                      {video.duration}
                    </div>

                    {/* Category badge */}
                    <div className="kc-glass absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-white">
                      {video.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-smoke p-5">
                    <h3 className="mb-2 line-clamp-1 font-display text-lg font-semibold text-cream transition-colors group-hover:text-saffron">
                      {video.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-cream/60">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-mono text-xs text-cream/60">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                        {video.views} views
                      </span>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-xs font-medium text-saffron transition-colors hover:text-gold"
                      >
                        Watch Now →
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.youtube.com/@kishwarc"
            target="_blank"
            rel="noopener noreferrer"
            className="kc-btn-secondary inline-flex items-center gap-2"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            View All Videos
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .kc-coverflow {
          padding: 50px 0 70px;
        }
        .kc-coverflow .swiper-slide {
          transition: opacity 0.4s ease;
        }
        .kc-coverflow .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.55;
        }

        .kc-play-btn {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 72px;
          height: 72px;
          margin-left: -36px;
          margin-top: -36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: linear-gradient(135deg, #e2761b 0%, #7a1f2b 100%);
          box-shadow: 0 18px 40px -10px rgba(226, 118, 27, 0.6);
          transform: scale(0.92);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .kc-play-btn:hover {
          transform: scale(1);
          box-shadow: 0 22px 48px -8px rgba(226, 118, 27, 0.8);
        }
        .kc-play-btn svg {
          width: 28px;
          height: 28px;
          fill: #f5ebdc;
          margin-left: 3px;
        }

        .kc-glass {
          background: rgb(var(--kc-cream) / 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgb(var(--kc-cream) / 0.18);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .kc-btn-secondary {
          padding: 14px 32px;
          border-radius: 9999px;
          border: 1px solid rgb(var(--kc-cream) / 0.3);
          color: rgb(var(--kc-cream));
          font-family: var(--font-display);
          font-size: 13px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
        }
        .kc-btn-secondary:hover {
          background: #e2761b;
          border-color: #e2761b;
          color: rgb(var(--kc-ember));
        }
      `}</style>
    </section>
  );
}

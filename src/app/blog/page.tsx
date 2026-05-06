import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { blogPosts, formatBlogDate } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Kishwar Chowdhury",
  description:
    "Essays from the kitchen — heritage cooking, the road to MasterChef, the cookbook process, and dispatches from the table.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Kishwar Chowdhury",
    description:
      "Essays from the kitchen — heritage cooking, the cookbook, and dispatches from the table.",
    type: "website",
  },
};

export default function BlogPage() {
  // Newest first
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <Navigation />
      <main id="top" className="relative">
        <section
          id="blog-page"
          className="relative overflow-x-clip bg-ember pt-[calc(var(--space-section)+4rem)] pb-[var(--space-section)]"
        >
          {/* HERO */}
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal variant="rise">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden className="h-px w-10 bg-cream/40" />
                  Blog
                </span>
                <span aria-hidden className="text-saffron">·</span>
                <span>Essays from the kitchen</span>
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
                <span className="text-cream">Notes from the </span>
                <span className="inline-block bg-gradient-to-br from-saffron via-gold to-pomegranate bg-clip-text italic text-transparent pr-3">
                  stove
                </span>
                <span className="text-cream">.</span>
              </h1>
            </Reveal>

            <Reveal variant="fade" delay={0.18}>
              <p
                className="mt-8 max-w-[58ch] leading-relaxed text-cream/70"
                style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)" }}
              >
                Heritage cooking, the road to MasterChef, the cookbook process,
                dispatches from the table. New essays appear when the kitchen
                gives me a quiet hour.
              </p>
            </Reveal>
          </div>

          {/* GRID — 3 per row on desktop, 2 on tablet, 1 on mobile */}
          <div className="relative z-10 mx-auto mt-20 max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
              {posts.map((post, i) => (
                <Reveal
                  key={post.slug}
                  variant="rise"
                  delay={Math.min((i % 3) * 0.08, 0.24)}
                >
                  <article className="group flex h-full flex-col">
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label={post.title}
                      className="block overflow-hidden rounded-2xl ring-1 ring-cream/10 shadow-xl shadow-black/40 transition-shadow duration-500 hover:shadow-2xl hover:shadow-saffron/15"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={post.hero}
                          alt={post.heroAlt}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.22,.6,.36,1)] group-hover:scale-[1.05]"
                        />
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ember/65 via-ember/10 to-transparent"
                        />
                        {/* Category pill */}
                        <span className="absolute left-4 top-4 rounded-full border border-cream/20 bg-ember/70 px-3 py-1 text-[10px] tracking-[0.32em] uppercase text-cream/85 backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    <div className="mt-6 flex flex-1 flex-col">
                      <div className="flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-cream/50">
                        <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                        <span aria-hidden className="block h-px w-6 bg-cream/25" />
                        <span>{post.readingTime} min read</span>
                      </div>

                      <h2
                        className="mt-4 font-display text-cream transition-colors duration-300 group-hover:text-saffron"
                        style={{
                          fontSize: "clamp(1.35rem, 1.65vw, 1.7rem)",
                          lineHeight: 1.18,
                          letterSpacing: "-0.015em",
                          textWrap: "balance",
                        }}
                      >
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p
                        className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-cream/70"
                      >
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex-1" />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/link inline-flex items-center gap-2 self-start text-[10px] tracking-[0.32em] uppercase text-saffron transition-colors hover:text-cream"
                      >
                        Read essay
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

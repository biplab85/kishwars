import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import {
  blogPosts,
  formatBlogDate,
  getPostBySlug,
  getRelatedPosts,
  type BlogBlock,
  type BlogPost,
} from "@/content/blog";
import { ShareBar } from "./ShareBar";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Essay not found" };
  }
  return {
    title: `${post.title} | Kishwar Chowdhury`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.hero, alt: post.heroAlt }],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const url = `https://www.kishwar.com.au/blog/${post.slug}`;

  return (
    <>
      <Navigation />
      <main id="top" className="relative">
        <article className="relative bg-ember">
          {/* HEADER — title + meta + share, no image overlay */}
          <header className="relative pt-[calc(var(--space-section)+4rem)] pb-2">
            <div className="relative z-10 mx-auto max-w-[900px] px-6 md:px-10">
              <Reveal variant="rise">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] tracking-[0.4em] uppercase text-cream/65">
                  <span className="rounded-full border border-saffron/40 bg-ember/80 px-3 py-1 text-saffron backdrop-blur-md">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  <span aria-hidden className="block h-px w-8 bg-cream/25" />
                  <span>{post.readingTime} min read</span>
                </div>
              </Reveal>

              <Reveal variant="rise" delay={0.08}>
                <h1
                  className="mt-6 font-display text-cream"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4.4rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    textWrap: "balance",
                  }}
                >
                  {post.title}
                </h1>
              </Reveal>

              <Reveal variant="fade" delay={0.18}>
                <p
                  className="mt-6 max-w-[58ch] font-display italic text-cream/75"
                  style={{ fontSize: "clamp(1.05rem, 1.35vw, 1.3rem)", lineHeight: 1.5 }}
                >
                  {post.excerpt}
                </p>
              </Reveal>

              <Reveal variant="fade" delay={0.28}>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-cream/10 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-saffron via-gold to-pomegranate font-display text-base font-semibold text-ember">
                      KC
                    </div>
                    <div>
                      <p className="font-display text-cream">{post.author}</p>
                      <p className="text-[10px] tracking-[0.32em] uppercase text-cream/55">
                        {post.authorRole}
                      </p>
                    </div>
                  </div>

                  <ShareBar title={post.title} url={url} />
                </div>
              </Reveal>
            </div>
          </header>

          {/* HERO IMAGE — contained box, follows the header */}
          <div className="relative z-10 mx-auto mt-10 max-w-[1100px] px-6 md:mt-14 md:px-10">
            <Reveal variant="rise">
              <figure className="overflow-hidden rounded-2xl ring-1 ring-cream/10 shadow-2xl shadow-black/50">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.hero}
                    alt={post.heroAlt}
                    fill
                    priority
                    sizes="(min-width: 1100px) 1100px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          {/* BODY */}
          <div className="relative z-10 mx-auto mt-12 max-w-[760px] px-6 pb-24 md:mt-16 md:px-10">
            {post.content.map((block, i) => (
              <BlockRenderer key={i} block={block} index={i} />
            ))}

            {/* Tags */}
            <div className="mt-14 flex flex-wrap items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-cream/55">
              <span aria-hidden className="block h-px w-8 bg-cream/25" />
              <span>Filed under</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cream/15 px-3 py-1 text-cream/75"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Author bio */}
            <Reveal variant="fade">
              <div className="mt-16 rounded-2xl border border-cream/10 bg-gradient-to-br from-pomegranate/10 via-ember to-saffron/10 p-8 backdrop-blur-md md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron via-gold to-pomegranate font-display text-xl font-semibold text-ember">
                    KC
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-saffron">
                      About the author
                    </p>
                    <h3
                      className="mt-2 font-display text-cream"
                      style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)", lineHeight: 1.2 }}
                    >
                      Kishwar Chowdhury
                    </h3>
                    <p className="mt-3 max-w-[58ch] text-[0.95rem] leading-relaxed text-cream/75">
                      Chef, writer, and food creator. MasterChef Australia
                      finalist. Telling the story of heritage Bengali cuisine,
                      one plate at a time.
                    </p>
                    <div className="mt-5 flex items-center gap-5 text-[10px] tracking-[0.32em] uppercase">
                      <Link
                        href="/about"
                        className="text-saffron transition-colors hover:text-cream"
                      >
                        Read full bio ↗
                      </Link>
                      <Link
                        href="/contact"
                        className="text-cream/55 transition-colors hover:text-cream"
                      >
                        Get in touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </article>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="relative bg-ember pb-[var(--space-section)]">
            <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                <Reveal variant="rise">
                  <p className="flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-cream/55">
                    <span aria-hidden className="h-px w-10 bg-cream/40" />
                    Related essays
                  </p>
                  <h2
                    className="mt-5 font-display text-cream"
                    style={{
                      fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    Keep{" "}
                    <span className="italic bg-gradient-to-br from-saffron to-gold bg-clip-text text-transparent">
                      reading
                    </span>
                    .
                  </h2>
                </Reveal>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-cream/65 transition-colors hover:text-saffron"
                >
                  All essays
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
                {related.map((p, i) => (
                  <RelatedCard key={p.slug} post={p} delay={i * 0.08} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                              BLOCK RENDERER                                */
/* -------------------------------------------------------------------------- */

function BlockRenderer({ block, index }: { block: BlogBlock; index: number }) {
  switch (block.type) {
    case "p": {
      const isFirst = index === 0;
      return (
        <Reveal variant="fade">
          <p
            className={`mt-6 leading-[1.85] text-cream/85 ${
              block.dropCap || isFirst ? "kc-drop-cap" : ""
            }`}
            style={{ fontSize: "clamp(1.05rem, 1.18vw, 1.18rem)" }}
          >
            {block.text}
          </p>
        </Reveal>
      );
    }
    case "h2":
      return (
        <Reveal variant="rise">
          <h2
            className="mt-14 font-display text-cream"
            style={{
              fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)",
              lineHeight: 1.18,
              letterSpacing: "-0.015em",
            }}
          >
            <span className="bg-gradient-to-br from-saffron to-gold bg-clip-text italic text-transparent">
              {block.text}
            </span>
          </h2>
        </Reveal>
      );
    case "quote":
      return (
        <Reveal variant="rise">
          <figure className="my-12 border-l-2 border-saffron/60 pl-6 md:pl-8">
            <blockquote
              className="font-display italic text-cream"
              style={{
                fontSize: "clamp(1.3rem, 1.95vw, 1.85rem)",
                lineHeight: 1.35,
                letterSpacing: "-0.005em",
              }}
            >
              &ldquo;{block.text}&rdquo;
            </blockquote>
            {block.attribution && (
              <figcaption className="mt-3 text-[10px] tracking-[0.32em] uppercase text-cream/55">
                — {block.attribution}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );
    case "image":
      return (
        <Reveal variant="fade">
          <figure className="my-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-cream/10">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(min-width: 768px) 760px, 100vw"
                className="object-cover"
              />
            </div>
            {block.caption && (
              <figcaption className="mt-3 text-center font-display italic text-[0.9rem] text-cream/55">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );
    case "list":
      return (
        <Reveal variant="fade">
          <ul className="mt-6 space-y-3 text-[1.05rem] leading-[1.7] text-cream/85">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-baseline gap-3 pl-1">
                <span
                  aria-hidden
                  className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-saffron"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      );
    case "divider":
      return (
        <div className="my-14 flex items-center gap-4 text-cream/30">
          <span aria-hidden className="h-px flex-1 bg-cream/15" />
          <span className="font-display italic">·</span>
          <span aria-hidden className="h-px flex-1 bg-cream/15" />
        </div>
      );
  }
}

/* -------------------------------------------------------------------------- */
/*                              RELATED CARD                                  */
/* -------------------------------------------------------------------------- */

function RelatedCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Reveal variant="rise" delay={delay}>
      <article className="group flex h-full flex-col">
        <Link
          href={`/blog/${post.slug}`}
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
            <span className="absolute left-4 top-4 rounded-full border border-cream/20 bg-ember/70 px-3 py-1 text-[10px] tracking-[0.32em] uppercase text-cream/85 backdrop-blur-md">
              {post.category}
            </span>
          </div>
        </Link>
        <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-cream/50">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          <span aria-hidden className="block h-px w-6 bg-cream/25" />
          <span>{post.readingTime} min</span>
        </div>
        <h3
          className="mt-3 font-display text-cream transition-colors duration-300 group-hover:text-saffron"
          style={{
            fontSize: "clamp(1.15rem, 1.4vw, 1.4rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.012em",
            textWrap: "balance",
          }}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.95rem] leading-relaxed text-cream/70">
          {post.excerpt}
        </p>
      </article>
    </Reveal>
  );
}

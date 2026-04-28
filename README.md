# Kishwar Chowdhury — Brand Experience Website

> Bengal on a Plate. Memory in motion.
> A cinematic, editorial, motion-first rebuild of `kishwar.com.au` — engineered to the standard of gsap.com, Apple, and Awwwards Site of the Year.

---

## 1. Vision

This is not a chef website. It is a **digital memoir** — a long-form, immersive brand experience for one of Australia's most prominent culinary storytellers.

Every interaction is a deliberate act of storytelling. Every section earns its scroll. The site is built to make a first-time visitor feel — within eight seconds — that they have arrived somewhere considered, expensive, and unmistakably Bengali.

**Ceiling of ambition:** if it would not feel at home in the Awwwards Site of the Year shortlist, it does not ship.

---

## 2. Current Scope — Phase 1: Landing Page Only

**Phase 1 ships a single, complete landing page.** Everything in this README — the stack, the standards, the motion principles, the performance targets — applies to that single page.

The codebase, design system, and motion library are built so additional pages can be added later **without rework**. The full multi-page vision (About, Media, Books, Recipes, Events, Contact, etc.) is held in [`task.md`](./task.md) as Phase 2 and will be delivered in a future engagement.

For Phase 1, this means:
- One route: `/` (plus a branded `/404`).
- No primary navigation menu yet — top bar carries the wordmark and a single CTA.
- Every CTA on the page resolves to a valid endpoint: newsletter signup, inquiry email, or an external authoritative link (book retailer, social). **No dead links.**
- Folder structure and component library are designed for the full site so Phase 2 plugs in cleanly.

For the full project blueprint — IA, animation strategy, content plan, performance targets, Phase 1 section breakdown, delivery timeline — see [`task.md`](./task.md). That document is the contract.

---

## 3. Brand Direction (short form)

| Pillar | Direction |
| --- | --- |
| Position | Celebrity chef, MasterChef finalist, cultural ambassador, author, storyteller. |
| Promise | "A handwritten love letter to Bengal, delivered on the world's most refined stage." |
| Mood | Editorial. Cinematic. Tactile. Warm-luxury (not cold-luxury). |
| Voice | Sensory, third-person editorial; her own voice as italicized pull-quote. |
| Visual | Deep charcoal with saffron, turmeric cream, and gold-leaf accents. Documentary photography over staged glamour. |
| Motion | Cinematic narrative — never decoration. Slower easing. One protagonist per scene. |

Full creative direction in [`task.md` §1–§2](./task.md).

---

## 4. Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 15** (App Router, RSC) | Server components by default; image, font, OG image pipelines built-in; edge runtime. |
| Language | **TypeScript** (strict) | Non-negotiable for a brand asset of this longevity. |
| Styling | **Tailwind CSS** + CSS variables (design tokens) | Speed of iteration without sacrificing token discipline. |
| Animation (primary) | **GSAP + ScrollTrigger** | Industry-standard for cinematic scroll choreography. |
| Animation (text) | **GSAP SplitText** (or custom split helper) | Char/word/line typography reveals. |
| Animation (component) | **Framer Motion** | Micro-interactions, gestures. |
| Smooth scroll | **Lenis** | Single global instance, RAF-synced to GSAP. |
| 3D (scoped, optional) | **R3F + drei** | Reserved for one signature scene only. |
| Content (Phase 1) | **MDX in repo** | Zero infra; version-controlled editorial. |
| Content (Phase 2) | **Sanity** or **Payload CMS** | Schema-driven editing when client team needs control. |
| Hosting | **Vercel** | Zero-config Next.js 15, edge, image pipeline. |
| Analytics | **Plausible** or **Fathom** | Privacy-respecting, no cookie banners. |

GSAP and Framer Motion **do not overlap responsibilities**. GSAP owns scroll and narrative. Framer Motion owns component state and gestures.

---

## 5. Folder Structure

Built for Phase 1, ready for Phase 2 — no rework needed when more pages are added.

```
src/
├── app/
│   ├── page.tsx              // landing page composition (Phase 1)
│   ├── layout.tsx            // root shell, providers, fonts
│   ├── not-found.tsx         // branded 404
│   ├── opengraph-image.tsx   // OG image for /
│   ├── robots.ts
│   ├── sitemap.ts
│   └── api/                  // newsletter, contact form (when added)
├── components/
│   ├── primitives/           // design-system atoms (Button, Field, Tag, Link)
│   ├── layout/               // TopBar, Footer, PageShell  (MenuOverlay added in Phase 2)
│   ├── motion/               // Reveal, SplitHeading, ParallaxImage, PinnedScene
│   ├── sections/             // Hero, Manifesto, SignatureStory, MasterChefMoment,
│   │                         // FeaturedRecipe, PressWall, BookHero, EventsStrip,
│   │                         // PullQuote, Newsletter
│   └── media/                // CinematicVideo, EditorialImage, Lightbox
├── lib/
│   ├── gsap/                 // GSAP registration, ScrollTrigger setup
│   ├── lenis/                // smooth scroll provider
│   ├── motion/               // shared Framer Motion variants
│   ├── seo/                  // metadata factory, JSON-LD helpers
│   └── content/              // landing-page content adapter
├── styles/
│   ├── globals.css
│   ├── tokens.css            // CSS variables (color, type, spacing, easing)
│   └── tailwind.css
├── hooks/                    // useReducedMotion, useLenis, useScrollSection
├── types/
└── content/
    └── landing/              // landing-page MDX/JSON content
public/
└── media/                    // production-optimized images and video
```

Asset originals live in a gitignored `_source/` folder; only optimized outputs ship in `public/`.

---

## 6. Development Standards

### 6.1 Code Quality
- **TypeScript strict mode.** No `any` outside narrowly justified, commented exceptions.
- **ESLint + Prettier** via the Next.js defaults plus stricter rules (no implicit any, no unused exports, sorted imports).
- **One responsibility per component.** If a component does layout *and* motion *and* data fetching, split it.
- **No prop drilling beyond two levels.** Use composition or context.
- **Server Components by default.** A component becomes `"use client"` only when it must.
- **No dead code at merge time.** Remove, don't comment-out.

### 6.2 Naming
- Components: `PascalCase.tsx`.
- Hooks: `useThing.ts`.
- Utilities: `camelCase.ts`.
- CSS variables: `--kebab-case`.
- Content slugs: `kebab-case`.

### 6.3 Commits & PRs
- Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `perf:`).
- One concern per PR. PR description references the relevant `task.md` section.
- No merging on red CI. No skipping hooks.

### 6.4 Reviews
- All PRs require one approval.
- Motion-touching PRs require a recorded screen capture in the description.
- Performance-sensitive PRs require Lighthouse-CI delta in the description.

---

## 7. Animation Principles

These rules are binding. They override personal preference.

1. **Story over spectacle.** Every animation must answer: *what does this teach the visitor?* If nothing — remove it.
2. **Easing is identity.** Use the project's easing tokens (`--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1)`). No browser defaults.
3. **Weight is luxurious.** Hero reveals 700–1200ms. Micro-interactions 150–250ms. No twitchy motion.
4. **One protagonist per scene.** Only one element commands attention at a time.
5. **Transform + opacity only.** No animating `top`, `left`, `width`, `height`. Layout thrash is an immediate revert.
6. **`prefers-reduced-motion` is law.** Every animated component must declare its reduced-motion fallback (typically a static fade).
7. **Mobile gets simplified timelines.** Never the desktop timeline at lower fps. Author the mobile variant.
8. **GSAP owns scroll. Framer Motion owns components.** Do not mix.
9. **No scroll-jacking.** Lenis smooth-scroll only; no forced section snapping unless the page is explicitly a pinned narrative.
10. **Animation libs are dynamically imported.** GSAP, Lenis, Framer Motion, R3F never block first paint.

---

## 8. Performance Rules

Hard targets — failing any of these blocks merge to `main`:

| Metric | Target |
| --- | --- |
| Lighthouse Performance (mobile, 4G) | ≥ 90 |
| LCP | ≤ 2.0s |
| INP | ≤ 200ms |
| CLS | ≤ 0.05 |
| JS shipped per route (gzipped) | ≤ 200KB |
| Landing page weight (no autoplay video) | ≤ 1.5MB |
| Hero video (when autoplayed) | ≤ 2MB AV1, ≤ 3MB H.264 fallback |

Operational rules:
- `next/image` for every image. Hero only gets `priority`. AVIF + WebP, responsive `sizes`.
- Self-host fonts via `next/font`, subset to needed glyphs (incl. Bengali range), `display: swap`.
- Video: AV1 primary, H.264 fallback, `<video preload="metadata" muted playsinline loop>`. Autoplay only above 1024px on good network.
- Third-party scripts deferred until idle. Analytics never blocks render.
- Run Lighthouse-CI in PRs; regressions over 5 points block merge.

---

## 9. Accessibility (non-negotiable)

- WCAG 2.2 AA minimum.
- Keyboard navigation across all CTAs, newsletter form, and any modals — full tab order audited.
- Focus states are designed; never browser-default.
- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large display.
- `prefers-reduced-motion` respected by every motion component.
- Screen-reader-only descriptions for decorative motion.
- Forms: labels, error states, ARIA-described validation messages.
- Tested on VoiceOver (macOS, iOS) and NVDA (Windows) before launch.

---

## 10. SEO & Metadata

- `generateMetadata` for `/` and `/404` — title, description, canonical, OG, Twitter card.
- Open Graph image via `next/og` — branded, dynamic.
- JSON-LD on `/`: `Person`, `WebSite`, `Book` (Taste).
- `sitemap.xml` and `robots.txt` generated at build (sitemap currently lists `/` only; auto-extends in Phase 2).
- Landing page server-rendered; no client-only routing for indexable content.
- Validate against Google Rich Results test pre-launch.

---

## 11. Getting Started

> Code scaffold lands in Phase 1 build step 1.2. Until then this section documents the intended commands.

```bash
# install
pnpm install

# develop
pnpm dev          # http://localhost:3000

# typecheck + lint
pnpm typecheck
pnpm lint

# build + run production locally
pnpm build
pnpm start

# Lighthouse CI (mobile)
pnpm lhci
```

Node version is pinned via `.nvmrc` (Node 20+). Package manager is `pnpm`.

---

## 12. Environments & Deployment

| Environment | Branch | URL |
| --- | --- | --- |
| Production | `main` | kishwar.com.au |
| Staging | `staging` | staging.kishwar.com.au |
| Preview | per-PR | auto via Vercel |

- Hosted on **Vercel**. Custom domain via existing registrar.
- `main` is protected; merges only via PR with passing CI.
- Rollbacks via Vercel deployment promotion (no scripted rollback needed).
- Secrets managed via Vercel project settings; never committed.

---

## 13. Delivery Plan

### Phase 1 — Landing Page (current)
| Step | Scope | Duration |
| --- | --- | --- |
| 1.0 | Foundation: `task.md`, this README, design tokens, repo scaffold, content brief. | ~3 days |
| 1.1 | Design: Figma for full landing page, motion prototype on hero + signature story. | ~1 week |
| 1.2 | Build — shell & motion library: Next.js setup, Lenis + GSAP integration, shared components, design tokens. | ~4 days |
| 1.3 | Build — sections: all 11 landing-page sections, mobile timelines, reduced-motion fallbacks. | ~1.5 weeks |
| 1.4 | Polish: performance, accessibility, SEO, copy QA, motion QA, cross-browser. | ~3 days |
| 1.5 | Launch: domain cutover, monitoring, post-launch fixes. | ~2 days |

**Phase 1 total: ~4 weeks** (assuming content + assets ready in parallel).

### Phase 2 — Multi-page expansion (deferred)
Triggered when Phase 1 is live and stable, and content is ready. About, Media, Books, Recipes, Events, Collaborations, Gallery, Contact, Community. See [`task.md` §4.2](./task.md).

### Phase 3 — Optional (TBD)
Shop / Dining / Masterclass. See [`task.md` §4.3](./task.md).

---

## 14. Project Documents

| Document | Purpose |
| --- | --- |
| [`task.md`](./task.md) | The strategic contract — IA, animation, content, performance, delivery. |
| `README.md` (this file) | Engineering handoff — stack, standards, ops. |
| `CHANGELOG.md` *(forthcoming)* | Per-release notes. |
| `CONTRIBUTING.md` *(forthcoming)* | Branching, review, and release guidance. |

---

## 15. Ownership

| Role | Owner |
| --- | --- |
| Product / Brand | Kishwar Chowdhury & representatives |
| Engineering & Design | Sklentr |
| Domain & DNS | TBC |
| Press archive & content | TBC |

Contact for technical questions: `rishad@sklentr.com`.

---

*This is a premium agency build. Every decision is intentional. If something on this site looks effortless, that is the work.*

# task.md

## Project: Kishwar Chowdhury — Brand Experience Website (v2)

> Bengal on a Plate. Memory in motion. A celebrity chef brand site engineered to the standard of gsap.com, Apple, and Awwwards Site of the Year.

---

## 0. Document Purpose

This is the **strategic foundation** for the rebuild of `kishwar.com.au`. It is the source of truth for design intent, technical architecture, animation language, content modeling, and delivery.

### Current scope (Phase 1)
**Landing page only.** A single, complete, world-class home experience — designed, built, polished, and shipped in isolation. Multi-page architecture (About, Media, Books, Recipes, Events, etc.) is deferred to a later phase. The codebase, design system, motion library, and infrastructure are built so future pages plug in without rework.

This document still describes the **full site vision** so today's decisions don't paint future phases into a corner.

---

## 1. Brand Position & Creative North Star

### 1.1 Who Kishwar Is (for design context)
- Celebrity chef, MasterChef Australia 2021 finalist (third place; broke barriers as the first Bangladeshi-origin contestant to reach the finale).
- Author of *Taste — Recipes & Stories from Home*.
- Storyteller-first: her work is about heritage, memory, and the dignity of Bengali home cooking on a global stage.
- Cultural ambassador, public speaker, media personality, mother — the human warmth must be felt before the celebrity status.

### 1.2 Creative North Star
> "A handwritten love letter to Bengal, delivered on the world's most refined stage."

The site must feel like a **cinematic memoir** — not a portfolio, not a CV, not a cookbook landing page. Every interaction should evoke smoke, spice, family, fabric, fire, and the quiet prestige of someone who chose to honor her grandmother's kitchen instead of chasing Michelin trends.

### 1.3 Emotional Promise
| Visitor lands on the site and within 8 seconds feels: |
| --- |
| 1. This is a *person*, not a brand machine. |
| 2. This is *expensive* — every pixel was considered. |
| 3. This is *Bengali* — heritage is the protagonist, not a decoration. |
| 4. This is *world-class* — same tier as Apple product reveals or Hermès editorials. |

### 1.4 What This Site Is NOT
- Not a WordPress chef template.
- Not a recipe blog.
- Not a generic personal site with social links.
- Not a media kit PDF reformatted as HTML.
- Not "another animated landing page" — animation serves narrative, never decoration.

---

## 2. Design Language

### 2.1 Mood
Editorial. Cinematic. Tactile. Warm-luxury (not cold-luxury). Confident silence over loud motion.

### 2.2 Palette (working direction — to be finalized in design phase)
- **Charcoal Ember** `#0E0B09` — primary background, deep roasted-spice black.
- **Saffron Flame** `#D97706` / `#E2761B` — primary accent, controlled use only.
- **Turmeric Cream** `#F5EBDC` — primary light surface, paper/khadi tone.
- **Pomegranate** `#7A1F2B` — secondary accent, used sparingly for emphasis.
- **Smoke** `#3A3431` — mid-tone for layered surfaces.
- **Gold Leaf** `#C9A24A` — reserved for awards / press / titling accents.

The palette is **earned**. No gradient-soup backgrounds. Color enters the page like seasoning — late, deliberate, transformative.

### 2.3 Typography
- **Display**: a refined editorial serif with strong personality (e.g. *Fraunces*, *PP Editorial New*, or *Canela*) — used for hero titling, section openers, and pull-quotes.
- **Body**: a humanist sans (e.g. *Inter Display*, *General Sans*, or *Söhne*) — calm, readable, modern.
- **Accent**: a Bengali-script display face for select moments (e.g. ভালোবাসা, রান্না) — used as imagery, not as primary copy. Must respect proper kerning and never as decoration alone.
- Ratio: 1.333 (perfect fourth) on mobile, 1.5 (perfect fifth) on desktop.

### 2.4 Layout Philosophy
- Magazine grid: 12-column with asymmetric editorial breaks.
- Generous negative space; copy never spans full viewport width on desktop.
- Image-led storytelling: full-bleed photography earns its place via composition, not filler.
- Vertical rhythm > horizontal density.

### 2.5 Imagery Direction
- Cinematic stills (close-up textures: smoke off cast iron, hands kneading dough, mustard oil on rice).
- Documentary portraits over staged glamour shots.
- Filmic color grade: warm shadows, restrained highlights, slight grain.
- Mix of motion (looping silent video clips, max 3–5s) and stills.

---

## 3. Animation Strategy

> Animation must be **cinematic narrative**, not "scroll candy." If a motion does not advance the story or aid comprehension, it is removed.

### 3.1 Motion Principles
1. **Story over spectacle** — every animation answers "what is this teaching the visitor?"
2. **Easing is identity** — custom cubic-bezier curves (e.g. `cubic-bezier(0.16, 1, 0.3, 1)` for entrances) that feel like exhale, not bounce.
3. **Weight is luxurious** — slightly slower than expected (700–1200ms for hero reveals); never twitchy.
4. **One protagonist per scene** — only one element commands attention at a time.
5. **Respect `prefers-reduced-motion`** — non-negotiable; degrade gracefully to fades.

### 3.2 Animation Engine Stack
| Layer | Tool | Use |
| --- | --- | --- |
| Primary | **GSAP + ScrollTrigger** | All scroll-driven sequences, pinned scenes, timeline orchestration. |
| Text | **GSAP SplitText** (or custom fallback) | Char/word/line reveals on display type. |
| Smooth scroll | **Lenis** | Single global instance, synced to GSAP via `requestAnimationFrame`. |
| Component | **Framer Motion** | Micro-interactions on interactive UI (buttons, modals, navigation). |
| 3D / WebGL (optional, scoped) | **R3F + drei** | Reserved for one signature scene only — not a default. |

GSAP and Framer Motion **do not overlap**. GSAP owns scroll and narrative. Framer Motion owns component state changes.

### 3.3 Signature Motion Beats (landing page)
| Moment | Effect |
| --- | --- |
| Site enter | Cinematic curtain reveal — Bengali script fades in, scales out, replaced by hero film. |
| Hero scroll | Pinned scene; hero portrait dissolves into a wide kitchen scene through a clipped-mask transition. |
| Section openers | Display type splits into characters; rises with staggered easing as a single image emerges from the right margin. |
| Press / Media | Horizontal pinned scroll showing logos and quotes as a marquee with magnetic cursor pulls. |
| Footer | Final emotional beat: a single Bengali phrase (e.g. *"বাড়ি ফিরে এসো"* — "come home") fades in over an ambient still. |

### 3.4 Performance Budget for Motion
- First contentful paint must not be blocked by GSAP.
- Animation libs are dynamically imported and registered client-side only.
- No layout-thrashing animations (`top`/`left`/`width`); use `transform` and `opacity` only.
- Pinned ScrollTrigger sections must use `pin: true` with `anticipatePin: 1`.
- Target: 60fps on mid-range mobile (Pixel 6a / iPhone 12 baseline).

---

## 4. Site Architecture (IA)

### 4.1 Phase 1 — In Scope Now
| Route | Purpose |
| --- | --- |
| `/` | **Landing page** — cinematic single-page brand introduction. |
| `/404` | Branded 404 (one-screen, story moment). |

The landing page is built as a self-contained narrative. Every section is fully designed and animated. Internal "links" that reference deferred pages route to:
- a graceful "coming soon" anchor on the same page, **or**
- an inquiry / newsletter CTA, **or**
- the relevant external destination (Instagram, YouTube, book retailer) where one already exists.

No dead links. No greyed-out menu items.

### 4.2 Phase 2 — Deferred (planned, not built)
Held in this document so today's architecture, design tokens, and component library accommodate them without rework.

| # | Route | Purpose |
| --- | --- | --- |
| 1 | `/about` | Long-form editorial bio, timeline. |
| 2 | `/media` | Press archive, interviews, awards. |
| 3 | `/books` | *Taste* + future titles. |
| 4 | `/recipes` | Narrative recipe vault. |
| 5 | `/events` | Calendar + booking inquiry. |
| 6 | `/collaborations` | Brand case studies. |
| 7 | `/gallery` | Editorial photo book. |
| 8 | `/contact` | Segmented inquiry routing. |
| 9 | `/community` | Newsletter / member-only stories. |

### 4.3 Phase 3 — Optional / TBD
| Route | Purpose |
| --- | --- |
| `/shop` | Signature products (spice tins, signed copies, prints). |
| `/dining` | Pop-up / restaurant residencies. |
| `/masterclass` | Workshops and online masterclasses. |

### 4.4 Global Elements (in Phase 1)
- **Top bar**: minimal — wordmark left, primary CTA right (newsletter or inquiry). No menu hamburger in Phase 1 (no other pages to navigate to). When Phase 2 lands, the top bar gains a full-screen overlay menu.
- **Footer**: single column, generous, with newsletter capture, social links, and the closing emotional line.
- **404**: a story moment — "the dish you ordered isn't on tonight's menu" — with CTA back to home.

---

## 5. Landing Page — Section Strategy

The landing page is the **entire deliverable** for Phase 1. It must function as both first impression and complete brand experience.

### 5.1 Section Plan
| # | Section | Intent | Length | Notes |
| --- | --- | --- | --- | --- |
| 01 | **Cinematic Hero** | Emotional anchor — first 8 seconds. | 100vh, pinned | Looping silent film (8–12s, 1080p, AV1+H.264 fallback). Display title splits in over the film. Subtle scroll cue. |
| 02 | **Manifesto** | Define the philosophy in one paragraph. | ~80vh | Pinned scroll; type reveals one line at a time. Charcoal background, turmeric-cream type. |
| 03 | **Signature Story — "Bengal on a Plate"** | The core narrative; three-act scroll scene. | ~250vh | Pinned scene with image cross-fades. Acts: Heritage → Fire → Today. |
| 04 | **MasterChef Moment** | Credibility beat — the show that broke the barrier. | ~100vh | Editorial layout: pull quote + still image + minimal supporting copy. No logos rail; quiet prestige. |
| 05 | **Featured Recipe / Food Story** | Show, don't tell — one recipe as editorial. | ~120vh | Hero food still with parallax. Title, lede, "Read the story" CTA (anchors to inquiry / "coming soon" until `/recipes` exists). |
| 06 | **Press Wall** | Build trust through earned media. | ~80vh | Horizontal pinned marquee of outlet logos with hoverable quote pulls. |
| 07 | **Books** | Promote *Taste*. | ~100vh | Floating book mock with on-scroll page turn; buy links (regional). |
| 08 | **Events / Speaking Strip** | Show she's active and bookable. | ~60vh | Compact list of next 3 dates (or "Inquire about an event" CTA if calendar empty). Magnetic CTA. |
| 09 | **In Her Own Words** | Human warmth — quiet, intimate. | ~80vh | Italicized pull-quote on cream paper texture; small portrait. |
| 10 | **Newsletter / Community** | Capture intent. | ~80vh | Minimal field, no popup, integrated into the editorial flow. Single sentence promise. |
| 11 | **Footer** | Emotional close. | auto | Bengali phrase + social + legal. |

### 5.2 Page Length & Pacing
- Total scroll: ~1100–1300vh on desktop. Long, but every section has earned its space.
- Pacing rhythm: **fast – slow – fast – slow** — Hero (fast) → Manifesto (slow) → Story (slow, pinned) → MasterChef (fast) → Recipe (slow) → Press (fast marquee) → Books (slow) → Events (fast) → Quote (slow) → Newsletter (fast) → Footer.
- Scroll velocity is meditative on slow sections; never sticky enough to feel trapped.

### 5.3 Mobile Strategy
- **Not a desktop site shrunk.** The mobile timeline is authored separately.
- Pinned scenes simplify to non-pinned scroll on mobile (cinematic feel preserved via image cross-fade timing, not pinning).
- Hero film auto-pauses below 768px on metered/data-saver connections; falls back to a poster.
- Touch targets ≥ 44px. Magnetic CTAs disable below 1024px.

### 5.4 CTAs (Phase 1 specific)
Because most destination pages don't yet exist, every CTA on the landing page resolves to one of three valid endpoints:
1. **Newsletter signup** (in-page anchor + form).
2. **Inquiry email** (segmented `mailto:` or single-form for press/speaking/collab).
3. **External authoritative link** (book retailer for *Taste*, Instagram, YouTube).

No CTA points to a route that doesn't exist.

---

## 6. Component Architecture

### 6.1 Folder Structure (built for Phase 1, ready for Phase 2)
```
src/
├── app/
│   ├── page.tsx                  // landing page composition
│   ├── layout.tsx                // root shell, providers, fonts
│   ├── not-found.tsx             // branded 404
│   ├── api/                      // newsletter, contact form (when added)
│   ├── opengraph-image.tsx       // OG image for /
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── primitives/         // Button, Link, Field, Tag — design-system atoms
│   ├── layout/             // TopBar, Footer, PageShell  (MenuOverlay added in Phase 2)
│   ├── motion/             // Reveal, SplitHeading, ParallaxImage, PinnedScene
│   ├── sections/           // Hero, Manifesto, SignatureStory, MasterChefMoment,
│   │                       // FeaturedRecipe, PressWall, BookHero, EventsStrip,
│   │                       // PullQuote, Newsletter
│   └── media/              // CinematicVideo, EditorialImage, Lightbox
├── lib/
│   ├── gsap/               // gsap registration, ScrollTrigger setup, splitText helper
│   ├── lenis/              // smooth scroll provider
│   ├── motion/             // shared Framer Motion variants
│   └── seo/                // metadata factory, JSON-LD helpers
├── content/
│   └── text.tsx            // SINGLE SOURCE OF TRUTH for all landing-page copy
├── styles/
│   ├── globals.css
│   ├── tokens.css          // CSS variables for color/type/spacing/easing
│   └── tailwind.css
├── hooks/                  // useReducedMotion, useLenis, useScrollSection
└── types/
```

### 6.1.1 Content rule — `text.tsx`

**All on-page copy lives in `src/content/text.tsx`.** No string literals in section components, no MDX, no JSON. Components import the namespaced object they need and render it.

This is binding for Phase 1. It exists for four reasons:
1. **One file to edit** — the client can review every word the site says without opening a single component.
2. **Type safety** — `text.tsx` exports a strongly typed object; missing or renamed keys fail at build.
3. **Bengali script lives next to its translation** — pull-quotes, footer phrase, and accent phrases keep both forms together with explicit JSX (so `<span>` wrappers, `lang` attributes, and styled fragments survive).
4. **Phase 2 migration is trivial** — when a CMS arrives, `text.tsx` becomes the schema definition for the migration script.

**Shape (illustrative, not final):**
```tsx
// src/content/text.tsx
export const text = {
  meta: {
    title: "...",
    description: "...",
    ogAlt: "...",
  },
  hero: {
    eyebrow: "...",
    title: <>Bengal <em>on a</em> Plate</>,
    sub: "...",
    cta: { label: "...", href: "..." },
  },
  manifesto: {
    lines: ["...", "...", "..."],
  },
  signatureStory: {
    acts: [
      { kicker: "Heritage", title: "...", body: "..." },
      { kicker: "Fire",     title: "...", body: "..." },
      { kicker: "Today",    title: "...", body: "..." },
    ],
  },
  masterChef: { quote: "...", attribution: "...", caption: "..." },
  featuredRecipe: { title: "...", lede: "...", cta: { label: "...", href: "..." } },
  pressWall: {
    logos: [/* { name, src, alt } */],
    quotes: [/* { outlet, quote } */],
  },
  books: {
    eyebrow: "...",
    title: "Taste",
    lede: "...",
    buyLinks: [/* { region, retailer, href } */],
  },
  events: {
    intro: "...",
    fallback: "...",         // shown when list is empty
    list: [/* { date, location, format, href } */],
  },
  pullQuote: { text: <>...</>, attribution: "Kishwar Chowdhury" },
  newsletter: {
    title: "...",
    promise: "...",
    fieldLabel: "...",
    submitLabel: "...",
    success: "...",
  },
  footer: {
    bengaliPhrase: "বাড়ি ফিরে এসো",
    translation: "come home",
    legal: "...",
    socials: [/* { label, href } */],
  },
} as const;

export type SiteText = typeof text;
```

Rules:
- **No copy in components.** A grep for hard-coded user-facing strings in `components/sections/**` should return zero matches (alt text on imagery and `aria-label` on icon-only controls excepted, and even those should ideally come from `text.tsx`).
- **JSX is allowed** in `text.tsx` for inline emphasis, line breaks, `lang="bn"` spans, and any case where pure strings would lose semantic structure.
- **No translations layer in Phase 1.** English-only; Bengali appears as accent text inside the same object.
- **`text.tsx` is `"use client"`-free** — it exports a plain const, importable from server components.

### 6.2 Component Responsibilities
| Component | Responsibility |
| --- | --- |
| `<Reveal>` | GSAP-driven entrance animation wrapper (fade/rise/clip variants). |
| `<SplitHeading>` | Display type with char/word/line stagger. |
| `<PinnedScene>` | ScrollTrigger pinned section primitive with timeline slot. |
| `<ParallaxImage>` | Depth-aware image with foreground/background layers. |
| `<CinematicVideo>` | Autoplay, muted, looped silent video with fallback poster, AV1+H.264. |
| `<MagneticCTA>` | Cursor-magnetic interactive CTA (desktop only). |
| `<EditorialCard>` | Tilt-on-hover content card with depth. |
| `<MarqueeRail>` | Horizontal pinned scroll for press/logos. |
| `<Lightbox>` | Cinematic image overlay with slow transitions. |

Every component is built generic enough to be reused on Phase 2 pages — no Phase-1-only one-offs in the shared layer.

---

## 7. Content Strategy (Phase 1)

### 7.1 What Phase 1 Needs
| Asset | Notes | Owner | Status |
| --- | --- | --- | --- |
| Hero film (8–12s, silent) | Either a new short cut or licensed re-edit of existing footage. | Agency + Client | TBD |
| Hero portrait (high-res) | Editorial, documentary tone. | Client archive | TBD |
| 6–8 supporting stills | Food close-ups, kitchen, portrait, fabric/heritage textures. | Client archive | TBD |
| Manifesto copy (~60 words) | Editorial voice; written, not improvised. | Agency | TBD |
| Signature story copy (3 acts × ~80 words) | Heritage / Fire / Today. | Agency | TBD |
| MasterChef pull-quote + image | One quote, one still. | Agency + Client | TBD |
| Featured recipe blurb | Title + 2-line lede + hero still. | Agency + Client | TBD |
| Press logos + 3 quote pulls | At least 6 logos; 3 endorsements. | Client | TBD |
| Books copy + cover render | *Taste* — title, 1-line lede, regional buy links. | Client | TBD |
| Events list (3 entries or "inquire" copy) | If calendar empty, fallback inquiry copy. | Client | TBD |
| Personal pull-quote (for "In Her Own Words") | One sentence, italicized. | Agency interview | TBD |
| Newsletter promise (1 sentence) | What subscribers receive. | Agency | TBD |
| Footer Bengali phrase + translation | Curated, not auto-translated. | Agency + Client | TBD |

Total copy volume: ~600–800 words across the entire landing page. Quality over volume.

### 7.2 Voice & Tone
- **Third-person editorial** by default.
- Her own voice appears only as italicized pull-quotes.
- Sensory > descriptive (e.g. *"the kitchen at dusk smells of black cardamom and old radio"* not *"home-style cooking with traditional ingredients"*).
- Bengali phrases used with translation — never as exotica.

### 7.3 Content Storage

**All landing-page copy lives in `src/content/text.tsx` — a single, strongly typed TypeScript module.** No MDX, no JSON, no string literals scattered across section components. See §6.1.1 for the full rule and shape.

Why a `.tsx` file (not `.ts`):
- Pull-quotes, hero titles, and the footer Bengali phrase need inline JSX (`<em>`, `<br>`, `lang="bn"` spans) to render correctly without rebuilding markup in every consuming component.
- Components stay purely structural; copy stays purely editorial. Either side can change without touching the other.

Phase 2 migration: when a CMS arrives, `text.tsx`'s exported type becomes the schema source. The migration script reads the object and seeds Sanity/Payload documents one-for-one.

---

## 8. Performance Strategy

### 8.1 Targets (Phase 1, landing page)
| Metric | Target |
| --- | --- |
| Lighthouse Performance (mobile) | ≥ 90 |
| LCP | ≤ 2.0s on 4G |
| INP | ≤ 200ms |
| CLS | ≤ 0.05 |
| Total JS shipped | ≤ 200KB gzipped |
| Total page weight (no autoplay video) | ≤ 1.5MB |
| Hero video (when autoplayed) | ≤ 2MB AV1, ≤ 3MB H.264 fallback |

### 8.2 Tactics
- Next.js 15 App Router with React Server Components by default; client components only where motion or interactivity demands.
- Dynamic imports for GSAP, Lenis, Framer Motion, R3F.
- `next/image` with AVIF + WebP, responsive `sizes`, priority on hero only.
- Video: AV1 primary, H.264 fallback; `<video>` with `preload="metadata"`, `playsinline`, `muted`, `loop`. Autoplay only above 1024px with good network.
- Fonts: self-hosted via `next/font`, subset to required glyphs (incl. Bengali range), `display: swap`.
- Edge caching via Vercel; landing page is fully static.
- Avoid third-party scripts on first load — analytics deferred until idle.

### 8.3 Accessibility (non-negotiable)
- WCAG 2.2 AA minimum.
- All animation respects `prefers-reduced-motion`.
- Full keyboard navigation including newsletter form and any modals.
- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large display.
- Screen-reader-only descriptions for decorative motion.
- Focus states are designed, not browser-default.

---

## 9. SEO Strategy (Phase 1)

### 9.1 Foundations
- `generateMetadata` for `/` and `/404` — title, description, OG image, Twitter card, canonical.
- JSON-LD on `/`: `Person` (Kishwar), `WebSite` with `SearchAction` placeholder, `Book` (Taste).
- `sitemap.xml` and `robots.txt` generated at build (sitemap currently lists `/` only; auto-extends in Phase 2).
- OG image generated via `next/og` — editorial-quality, branded.

### 9.2 Content SEO
- Single-page weight is heavy with on-page entity signals: Kishwar's name, MasterChef Australia reference, *Taste* book reference, Bengali cuisine, AU-based.
- Outbound authoritative links: book retailer, MasterChef Australia (where appropriate), social profiles.
- Schema validated via Google Rich Results test pre-launch.

### 9.3 Technical SEO
- Server-rendered HTML for the landing page (no client-only routes for indexable content).
- `hreflang` deferred (English-only at launch).

---

## 10. Asset Planning (Phase 1)

### 10.1 Photography
- **Minimum**: source 8–10 hero-quality stills from existing archive (cookbook outtakes + press portraits).
- **Recommended**: half-day editorial shoot if budget allows — three vignettes (Kitchen, Heritage, Stage). Even one fresh portrait sharpens the entire site.

### 10.2 Video
- **Minimum**: one hero film (8–12s, silent, 1080p) cut from existing footage.
- **Recommended**: three section ambient loops (3–5s each) for Manifesto, Signature Story, and Newsletter sections.
- Optional: one long-form anchor film (60–90s) — held for Phase 2 About page.

### 10.3 Graphics
- Wordmark audit: refine if dated; no full rebrand in Phase 1.
- Bengali typographic accents — commissioned or carefully selected from licensed Bengali display faces.
- Iconography: minimal, custom-drawn, never icon-pack.

### 10.4 Asset Pipeline
- Source assets in `/_source` (gitignored), production assets in `/public/media`.
- Image processing via Sharp at build (Next handles).
- Video processed via `ffmpeg` — script committed to repo for reproducibility.

---

## 11. Deployment & Ops

### 11.1 Hosting
- **Vercel** — first choice (zero-config Next.js 15, edge functions, image pipeline).
- Custom domain via existing registrar.

### 11.2 Environments
| Env | Branch | URL |
| --- | --- | --- |
| Production | `main` | kishwar.com.au |
| Staging | `staging` | staging.kishwar.com.au |
| Preview | per-PR | auto via Vercel |

### 11.3 CI/CD
- GitHub Actions: typecheck, lint, build, Lighthouse CI on PRs.
- Block merge on Lighthouse regression > 5 points.
- No direct pushes to `main`.

### 11.4 Monitoring
- Vercel Analytics + Web Vitals.
- Sentry for runtime errors (optional, P2).
- Plausible or Fathom for privacy-respecting traffic analytics (no GA by default).

---

## 12. Delivery Phases

### Phase 1 — Landing Page (current scope)
| Step | Scope | Duration |
| --- | --- | --- |
| 1.0 Foundation | This document, README, design tokens, repo scaffold, content brief. | ~3 days |
| 1.1 Design | Figma for full landing page, motion prototype on hero + signature story. | ~1 week |
| 1.2 Build — Shell & Motion library | Next.js setup, Lenis + GSAP integration, shared motion components, design tokens. | ~4 days |
| 1.3 Build — Sections | All 11 landing-page sections, mobile timelines, reduced-motion fallbacks. | ~1.5 weeks |
| 1.4 Polish | Performance, accessibility, SEO, copy QA, motion QA, cross-browser. | ~3 days |
| 1.5 Launch | Domain cutover, monitoring, post-launch fixes. | ~2 days |

**Phase 1 total: ~4 weeks** (assuming content + assets ready in parallel).

### Phase 2 — Multi-page expansion (deferred, planned)
Triggered when Phase 1 is live and stable, and content for the additional pages is ready. See §4.2 for page list. Expected: ~4–5 weeks.

### Phase 3 — Optional commerce / dining / masterclass
Triggered only after Phase 2. Scope and timing TBD. See §4.3.

---

## 13. Risks & Mitigations

| Risk | Mitigation |
| --- | --- |
| Animation overload kills performance on mobile. | Strict perf budget; reduced-motion fallback; mobile gets simplified motion timelines authored separately. |
| Content not ready when build is. | Phase 1.0 includes content brief; section-level placeholder copy is MDX-tagged for one-line swap. |
| Hero video weight balloons. | Hard cap 2MB AV1 / 3MB H.264; poster-image fallback below 4G. |
| Bengali typography rendering inconsistencies. | Self-host curated Bengali fonts, never browser-default; QA on Android, iOS, Windows, macOS. |
| Landing-page-only feels thin to visitors expecting more. | Section depth + editorial pacing — page is intentionally rich; CTAs route to valid endpoints (newsletter, inquiry, external). No dead links. |
| Architecture decisions made for Phase 1 paint Phase 2 into a corner. | Folder structure, component library, and design tokens are designed for the full site (§4.2) from day one. |
| Scope creep — "while we're at it, let's add /about." | Phase 2 is locked behind Phase 1 launch sign-off. New pages are not added mid-Phase-1. |

---

## 14. Definition of Done — Phase 1 Landing Page

The landing page is complete only when **all** are true:
1. Designed in Figma and signed off by client.
2. Implemented matching design within ±2px.
3. Motion timing reviewed against §3 principles.
4. Lighthouse mobile ≥ 90 on all four core metrics.
5. Keyboard-navigable end to end (newsletter form, all CTAs, social links).
6. `prefers-reduced-motion` respected and tested.
7. Tested on iOS Safari, Android Chrome, desktop Chrome, Safari, Firefox, Edge.
8. SEO metadata + structured data validated via Google Rich Results test.
9. Copy proofread by editorial owner.
10. No console errors or warnings.
11. Every CTA resolves to a valid Phase 1 endpoint (no dead links).
12. Branded 404 page deployed.

---

## 15. Open Questions (to resolve before Phase 1.1 design)

1. Is a half-day editorial shoot in budget? (Strongly recommended; even one fresh portrait sharpens the site.)
2. Is there an existing CRM for newsletter (Mailchimp / Beehiiv / ConvertKit)?
3. Where do landing-page inquiries route — single inbox, or segmented by type?
4. Multilingual scope — English-only at launch, confirmed?
5. Domain ownership and DNS access — confirmed?
6. Existing brand assets (logo source files, font licenses) — available?
7. Hero film source — re-cut existing footage, or new shoot?
8. Are there enough press quotes / endorsements ready for the Press Wall?

---

## 16. Appendix — Reference Sites

Studied for direction; **none to be copied**.

| Site | Take |
| --- | --- |
| gsap.com | Motion language ceiling, ScrollTrigger choreography. |
| apple.com | Restraint, hierarchy, product-as-protagonist. |
| hermes.com | Editorial luxury, color discipline, Bengali-script accent inspiration. |
| Awwwards SOTY 2024–2025 | Current motion vocabulary. |
| Cereal Magazine, Kinfolk | Editorial whitespace and typographic calm. |

---

*End of task.md — this document is the contract. Phase 1 is the landing page only. Any deviation requires explicit stakeholder sign-off.*

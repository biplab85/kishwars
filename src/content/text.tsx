import type { ReactNode } from "react";

type Cta = { label: string; href: string };
type Quote = { outlet: string; quote: string };
type BuyLink = { region: string; retailer: string; href: string };
type EventEntry = { date: string; location: string; format: string; href: string };
type Social = { label: string; href: string };
type Act = { kicker: string; title: string; body: string };
type Stat = { figure: string; label: string };
type Logo = { name: string };
type NavItem = { label: string; href: string };
type Video = {
  id: string;
  title: string;
  outlet: string;
  duration?: string;
};

type SiteTextShape = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
    siteUrl: string;
  };
  topBar: {
    wordmark: string;
    cta: Cta;
  };
  nav: {
    items: NavItem[];
    subscribeCta: Cta;
    channelCta: Cta;
  };
  videos: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Video[];
    channelCta: Cta;
  };
  hero: {
    eyebrow: string;
    titleLines: ReactNode[];
    sub: string;
    cta: Cta;
    bengali: string;
    scrollHint: string;
    slides: {
      eyebrow: string;
      titleLines: ReactNode[];
      sub: string;
    }[];
  };
  manifesto: {
    eyebrow: string;
    lines: string[];
    closing: string;
  };
  signatureStory: {
    eyebrow: string;
    title: string;
    acts: Act[];
  };
  stats: {
    items: Stat[];
  };
  masterChef: {
    eyebrow: string;
    quote: string;
    attribution: string;
    caption: string;
  };
  featuredRecipe: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: Cta;
    detailLeft: string;
    detailRight: string;
  };
  pressWall: {
    eyebrow: string;
    intro: string;
    logos: Logo[];
    quotes: Quote[];
  };
  books: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lede: string;
    buyLinks: BuyLink[];
  };
  events: {
    eyebrow: string;
    intro: string;
    fallback: string;
    list: EventEntry[];
    cta: Cta;
  };
  pullQuote: {
    text: ReactNode;
    attribution: string;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    promise: string;
    fieldLabel: string;
    placeholder: string;
    submitLabel: string;
    success: string;
    consent: string;
  };
  footer: {
    bengaliPhrase: string;
    translation: string;
    socials: Social[];
    legal: string;
    credit: string;
  };
};

export const text: SiteTextShape = {
  meta: {
    title: "Kishwar Chowdhury — Bengal on a Plate",
    description:
      "Chef, writer and food creator. MasterChef Australia 2021 finalist. A storyteller of heritage Bengali cuisine, sourcing rare produce and preserving culinary memory.",
    ogAlt: "Kishwar Chowdhury — chef, writer, food creator.",
    siteUrl: "https://www.kishwar.com.au",
  },

  topBar: {
    wordmark: "Kishwar",
    cta: { label: "Subscribe", href: "#newsletter" },
  },

  nav: {
    items: [
      { label: "Home", href: "#top" },
      { label: "Story", href: "#story" },
      { label: "Videos", href: "#videos" },
      { label: "Press", href: "#press" },
      { label: "Cookbook", href: "#book" },
      { label: "Newsletter", href: "#newsletter" },
    ],
    subscribeCta: { label: "Subscribe", href: "#newsletter" },
    channelCta: {
      label: "Watch on YouTube",
      href: "https://www.youtube.com/@kishwarc",
    },
  },

  videos: {
    eyebrow: "Watch",
    title: "On screen.",
    intro:
      "Selected appearances and recipes from television, podcasts, and her own kitchen — the long-form work behind the headlines.",
    items: [
      {
        id: "c0-a87mBzeM",
        title: "Panta Bhaat — the dish that changed everything.",
        outlet: "MasterChef Australia · Grand Finale",
      },
      {
        id: "8KPagc4xW_I",
        title: "Fusion food and the future of subcontinental cuisine.",
        outlet: "CNBC TV18 · Exclusive",
      },
      {
        id: "LxQwidd28Vw",
        title: "Recipe for a beautiful mind.",
        outlet: "TEDx · NIT Durgapur",
      },
      {
        id: "VJw5S8cb1jI",
        title: "Pani Puri, taught with love.",
        outlet: "Diwali Series · Episode 4",
      },
      {
        id: "Q7cu4KmsERc",
        title: "On Bengali cuisine and unlikely collaborations.",
        outlet: "Interview",
      },
    ],
    channelCta: {
      label: "Watch on YouTube",
      href: "https://www.youtube.com/@kishwarc",
    },
  },

  hero: {
    eyebrow: "Chef · Writer · Food Creator",
    titleLines: [
      <>Bengal,</>,
      <>
        <em className="font-display italic">on a</em> plate.
      </>,
    ],
    sub: "Heritage cuisine, rare produce, the slow work of remembering. Kishwar Chowdhury cooks the food of her ancestors — and asks the world to take it seriously.",
    cta: { label: "Begin the story", href: "#manifesto" },
    bengali: "ভালোবাসা",
    scrollHint: "Scroll",
    slides: [
      {
        eyebrow: "Chef · Writer · Food Creator",
        titleLines: [
          <>Bengal,</>,
          <>
            <em className="font-display italic">on a</em> plate.
          </>,
        ],
        sub: "Heritage cuisine, rare produce, the slow work of remembering. Kishwar Chowdhury cooks the food of her ancestors — and asks the world to take it seriously.",
      },
      {
        eyebrow: "MasterChef Australia · Finalist · S13",
        titleLines: [
          <>Memory,</>,
          <>
            <em className="font-display italic">served</em> warm.
          </>,
        ],
        sub: "Third place. First Bangladeshi-Australian to reach the finale. Panta bhat, finally, on the world's most-watched cooking stage.",
      },
      {
        eyebrow: "An ongoing chapter",
        titleLines: [
          <>The world,</>,
          <>
            <em className="font-display italic">it</em> remembers.
          </>,
        ],
        sub: "Author. Stagier. Storyteller. The work continues — through fire, fabric, and the dignity of what came before.",
      },
    ],
  },

  manifesto: {
    eyebrow: "Manifesto",
    lines: [
      "Bengali food was never meant for the margins.",
      "It is sea air and river silt, the patience of a slow fire.",
      "It is grandmother's hands, and the dignity of a meal made from almost nothing.",
      "I cook so the world remembers.",
    ],
    closing: "— K.",
  },

  signatureStory: {
    eyebrow: "Bengal on a Plate",
    title: "Three movements. One love letter.",
    acts: [
      {
        kicker: "01 · Heritage",
        title: "Born in Melbourne, raised on rice and stories.",
        body: "Kishwar's interest in heritage cuisine, sourcing ingredients and growing rare produce was cultivated in her from an early age. What sets her apart is an attention to seasonality, origins of food, cultural history, and the relevance of every dish she creates.",
      },
      {
        kicker: "02 · Fire",
        title: "MasterChef Australia, Season 13.",
        body: "Kishwar entered the culinary scene with a bang, placing third in the grand finale of MasterChef Australia 2021 — the first Bangladeshi-Australian to reach the finale, and the first to put dishes like panta bhat on the world's most-watched cooking stage.",
      },
      {
        kicker: "03 · Today",
        title: "An author, a stagier, a continual student.",
        body: "Since the show, Kishwar has staged at Ishizuka under Michelin-star chef Masahiko Yomoda, collaborated with Adam D'Sylva on a modern Australian-Bengali menu at TONKA, and continues to evolve as a chef through the histories, philosophies and techniques she draws on from across the globe.",
      },
    ],
  },

  stats: {
    items: [
      { figure: "3rd", label: "MasterChef Australia · S13 Finalist" },
      { figure: "3", label: "Continents lived. Three culinary lenses." },
      { figure: "1", label: "Cookbook published. More to come." },
      { figure: "∞", label: "Ancestral recipes carried forward." },
    ],
  },

  masterChef: {
    eyebrow: "MasterChef Moment",
    quote:
      "What sets Kishwar's food style apart is her attention to seasonality, origins of food, cultural history and relevance of the dishes she creates.",
    attribution: "From the chef's biography",
    caption: "MasterChef Australia · Grand Finale, 2021",
  },

  featuredRecipe: {
    eyebrow: "From the Kitchen",
    title: "Kacchi Biriyani, slow as a Sunday.",
    lede: "Saffron-stained rice, mustard-oiled lamb, the gentle violence of dum. A dish that asks for patience and returns devotion.",
    cta: { label: "Receive the full recipe", href: "#newsletter" },
    detailLeft: "Serves six. Begins the night before.",
    detailRight: "Region · East Bengal",
  },

  pressWall: {
    eyebrow: "Press & Recognition",
    intro: "Selected coverage and conversations.",
    logos: [
      { name: "Network 10" },
      { name: "MasterChef Australia" },
      { name: "The Daily Star" },
      { name: "BD News 24" },
      { name: "The Latch" },
      { name: "SBS" },
      { name: "Scroll.in" },
      { name: "TONKA" },
      { name: "South China Morning Post" },
      { name: "Outlook India" },
      { name: "Hindustan Times" },
      { name: "Newstral" },
      { name: "DissDash" },
      { name: "Livemint" },
      { name: "The Press Free" },
      { name: "India West" },
      { name: "MensXP" },
      { name: "Business Bytes" },
      { name: "The Media Coffee" },
      { name: "Daily Advent" },
      { name: "Mid-Day" },
      { name: "Herald Sun" },
      { name: "Times Of India" },
      { name: "ABP Ananda" },
      { name: "Daily Mail" },
      { name: "Life Beyond Numbers" },
      { name: "Pressbolt News" },
      { name: "TV9 News" },
      { name: "The Indian Express" },
      { name: "She the People" },
      { name: "News 18" },
      { name: "Zee News" },
      { name: "Easy Branches" },
      { name: "Daily Sun" },
      { name: "NDTV Food" },
      { name: "Diverse Bulletin" },
      { name: "India News" },
      { name: "Prothom Alo" },
      { name: "Dhaka Tribune" },
      { name: "The Business Standard" },
    ],
    quotes: [
      {
        outlet: "Network 10 · MasterChef",
        quote:
          "Now my life starts. Kishwar Chowdhury takes third in the MasterChef Australia 2021 grand finale.",
      },
      {
        outlet: "BD News 24",
        quote:
          "Kishwar reimagined Bengali dishes on Australia's most-watched cooking stage and finished third.",
      },
      {
        outlet: "The Daily Star",
        quote:
          "After MasterChef, Kishwar continues her training under Michelin-star chef Masahiko Yomoda.",
      },
    ],
  },

  books: {
    eyebrow: "Forthcoming",
    title: "The cookbook",
    subtitle: "Stories & recipes from the Subcontinent",
    lede: "A cookbook that reads like a memoir. Recipes shaped by the kitchens of Bangladesh, India, and Pakistan — told through the unmistakable voice of a chef who refuses to apologise for where she comes from. Subscribe to the newsletter for the release announcement.",
    buyLinks: [
      { region: "Pre-order", retailer: "Subscribe to be notified", href: "#newsletter" },
      { region: "Press inquiries", retailer: "hello@kishwar.com.au", href: "mailto:hello@kishwar.com.au" },
    ],
  },

  events: {
    eyebrow: "Live & Speaking",
    intro:
      "Festivals, residencies, table talks. A handful of evenings each year where the room is small and the conversation is real.",
    fallback: "No public dates announced. Inquire about private events and bookings.",
    list: [],
    cta: { label: "Inquire about an event", href: "mailto:hello@kishwar.com.au" },
  },

  pullQuote: {
    text: (
      <>
        I cook to remember. I write to be remembered. The plate is the smallest stage in the world,
        <span className="block mt-2">and the loudest.</span>
      </>
    ),
    attribution: "Kishwar Chowdhury",
  },

  newsletter: {
    eyebrow: "Community",
    title: "Letters from the kitchen.",
    promise:
      "Subscribe for announcements, updates and monthly recipes — sent by hand, never by algorithm.",
    fieldLabel: "Email address",
    placeholder: "you@somewhere.com",
    submitLabel: "Subscribe",
    success: "You're on the list. Welcome home.",
    consent: "By subscribing, you agree to receive the monthly letter. Unsubscribe any time.",
  },

  footer: {
    bengaliPhrase: "বাড়ি ফিরে এসো",
    translation: "Come home.",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/kishwar_chowdhury" },
      { label: "YouTube", href: "https://www.youtube.com/@kishwarc" },
      { label: "Facebook", href: "https://www.facebook.com/kishwarmasterchef" },
      { label: "X / Twitter", href: "https://x.com/Kishjustathome" },
    ],
    legal:
      "© Kishwar Chowdhury. All recipes, photographs, and stories belong to their author. Photographs are subject to copyright.",
    credit: "Designed and built with care.",
  },
};

export type SiteText = typeof text;

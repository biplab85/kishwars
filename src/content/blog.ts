/* -------------------------------------------------------------------------- */
/*                              BLOG CONTENT                                  */
/* -------------------------------------------------------------------------- */
/**
 * Editorial blog content for kishwar.com.au — written first-person as Kishwar.
 * Six posts. Each post is composed of typed content blocks so the renderer can
 * apply per-block styling (drop caps, pull quotes, captions, dividers).
 */

export type BlogBlock =
  | { type: "p"; text: string; dropCap?: boolean }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "divider" };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: number; // minutes
  hero: string;
  heroAlt: string;
  author: string;
  authorRole: string;
  tags: string[];
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-long-walk-to-a-plate",
    title: "The Long Walk to a Plate",
    excerpt:
      "Every recipe that lasts is the work of dozens of hands you will never meet — a small archive of careful, ordinary love.",
    category: "Heritage",
    date: "2026-04-22",
    readingTime: 5,
    hero: "/images/gallery/10.jpeg",
    heroAlt:
      "Kishwar before a long table of brass bowls, ceramic plates, and heritage cookware.",
    author: "Kishwar Chowdhury",
    authorRole: "Chef · MasterChef Australia finalist",
    tags: ["heritage", "memoir", "bengal"],
    content: [
      {
        type: "p",
        dropCap: true,
        text: "Every recipe that lasts is the work of dozens of hands you will never meet. A grandmother who decided cardamom belonged in the morning fish. A great-aunt who smuggled a mustard-oil bottle through three monsoons. A neighbour who borrowed a pinch of black salt and never returned the rest. By the time the dish reaches my own kitchen in Melbourne, it has already been edited by a hundred years of careful, ordinary love.",
      },
      {
        type: "p",
        text: "I think about this whenever someone asks me to teach them an heirloom dish. The recipe I write down is a list of measurements; the dish itself is a relay race. Saffron warms in milk because somebody, once, found it warmed best that way. The rice is washed seven times because somebody who lived through a famine never trusted a single rinse again. The flame stays low because grief teaches us patience.",
      },
      {
        type: "quote",
        text: "A bowl of rice and dal is, in the right hands, a small archive — a way of carrying everyone who cooked before us.",
      },
      {
        type: "p",
        text: "When I write the cookbook, I keep finding myself adding lines that aren't strictly instructions. Stand close to the pan in the last minute — your nose knows when the cumin has gone too far. Salt is a question, not a quantity. Rest the gravy ten minutes; food, like people, prefers a pause before being asked to perform. None of this measures cleanly. It's the part that travels in the unwritten shape of a kitchen.",
      },
      {
        type: "p",
        text: "What I love about cooking from Bengal is that it does not insist on being important. It just shows up — again and again, made the only way you have ever made it. And then, after years, you realise the dish has been carrying you all along.",
      },
    ],
  },
  {
    slug: "what-i-learned-in-the-masterchef-pantry",
    title: "What I Learned in the MasterChef Pantry",
    excerpt:
      "Behind the cameras, the apron is heavier than it looks. A note on discipline, doubt, and the strange privilege of cooking out loud.",
    category: "Memoir",
    date: "2026-03-30",
    readingTime: 6,
    hero: "/images/gallery/138.png",
    heroAlt:
      "Kishwar pausing over a basket of bread — the quiet, honest meal after service.",
    author: "Kishwar Chowdhury",
    authorRole: "Chef · MasterChef Australia finalist",
    tags: ["memoir", "masterchef", "process"],
    content: [
      {
        type: "p",
        dropCap: true,
        text: "I was thirty-eight when I walked into the MasterChef pantry for the first time. I had two children at home, a husband who was holding the day together by sheer goodwill, and a head full of dishes I had only ever cooked for people who loved me. None of those dishes had been timed against a clock. None of them had been judged by a chef whose books I had been reading for years.",
      },
      {
        type: "p",
        text: "What surprised me, in the end, was not the heat. It was the silence. Television tells you a kitchen is loud. Mine, on the bench, was very quiet. Just the small decisions, one after another, the way you set down knives so they don't ring against the steel. Confidence in cooking turns out to be made of quiet — choosing the spice, the heat, the moment to season, before you have time to second-guess yourself.",
      },
      {
        type: "quote",
        text: "On the bench, confidence isn't loud. It's the small, quiet decisions you stop arguing with.",
      },
      {
        type: "h2",
        text: "Three things I carry forward",
      },
      {
        type: "list",
        items: [
          "Trust your nose before your timer.",
          "Plate while the dish is still bright — composure can be repaired in seconds, freshness cannot.",
          "Cook the food you would feed someone you love. The judges respect honesty more than ambition.",
        ],
      },
      {
        type: "p",
        text: "I came home with a runner-up apron and a new kind of certainty. Not certainty about being good enough — that's a different conversation, longer, ongoing — but certainty about why I cook. The pantry didn't make me a chef. It only confirmed I had been one for a long time, in the most unrecognised kitchen of all: my own.",
      },
    ],
  },
  {
    slug: "smoke-rice-water-naming-a-cookbook",
    title: "Smoke, Rice, Water — Naming a Cookbook",
    excerpt:
      "Three elements that shape Bengali cooking, and a single phrase that finally let me put the book together.",
    category: "Cookbook",
    date: "2026-03-12",
    readingTime: 4,
    hero: "/images/gallery/21.jpeg",
    heroAlt:
      "Brass spice tin beside rolled paratha being seeded with nigella, on a copper-pink table.",
    author: "Kishwar Chowdhury",
    authorRole: "Chef · MasterChef Australia finalist",
    tags: ["cookbook", "process", "writing"],
    content: [
      {
        type: "p",
        dropCap: true,
        text: "For two years the manuscript had no title. The chapters did — Mornings, The Pond, At My Mother's Stove — but the spine was empty. I tried clever phrases that sounded like food magazines and warm phrases that sounded like cards your aunt sends. Nothing fit until I stopped writing for a month and went home to Dhaka.",
      },
      {
        type: "p",
        text: "On the first morning, my aunt was making a fish curry. She moved between three things without ever breaking stride: smoke from a clay stove, rice steaming in a covered pot, and a brass jug of water at her elbow. That was the whole scene. Three elements. The ones every Bengali kitchen — village or city, rich or thrifty — has had since long before any cookbook tried to write them down.",
      },
      {
        type: "quote",
        text: "Smoke gives the dish its memory. Rice gives it its company. Water keeps the cook honest.",
      },
      {
        type: "p",
        text: "I came back to Melbourne and wrote the title that night. The book is still about the recipes, but the architecture is theirs now. Every chapter sits inside one of the three: dishes that smoke teaches you (the slow ones, the ones forgiveness lives in); dishes that rice gathers around (everything in our cooking does, eventually); dishes that water carries — the broths, the cleanses, the small kindnesses of a hot day.",
      },
      {
        type: "p",
        text: "A title is a promise. This one keeps the promise I was always trying to make.",
      },
    ],
  },
  {
    slug: "a-spice-cabinet-is-a-memory-bank",
    title: "A Spice Cabinet Is a Memory Bank",
    excerpt:
      "Cardamom, mustard oil, cumin — and the people they conjure when you open the right drawer at the right hour.",
    category: "Process",
    date: "2026-02-26",
    readingTime: 4,
    hero: "/images/gallery/11.jpeg",
    heroAlt:
      "Kishwar at a Dhaka street-food stall, a glass case of cut pineapple before her.",
    author: "Kishwar Chowdhury",
    authorRole: "Chef · MasterChef Australia finalist",
    tags: ["process", "spice", "memory"],
    content: [
      {
        type: "p",
        dropCap: true,
        text: "Open my spice cabinet on the right evening and an entire afternoon in Dhaka comes out with the cardamom. Not a memory of a place, exactly — a memory of weather. The damp before rain, the sound of pots being moved, my mother humming something she would never sing in front of guests.",
      },
      {
        type: "p",
        text: "Spices are the most efficient archives in the kitchen. They survive flights, decades, languages. They land in our pans here and immediately make us elsewhere. A teaspoon of mustard oil is a small wormhole. A pinch of nigella, a phone call I never returned.",
      },
      {
        type: "h2",
        text: "What I keep within reach",
      },
      {
        type: "list",
        items: [
          "Whole cardamom — opened only as the dish closes.",
          "Mustard oil — never timid, never neutral.",
          "Cumin — one teaspoon, toasted until you doubt yourself.",
          "Black salt — a single grain finishes a yoghurt.",
          "Bay leaf — the only spice that asks to leave the pot.",
        ],
      },
      {
        type: "p",
        text: "I tell my students that good cooking isn't about having more spices; it's about knowing which ones to call by name. A short cabinet, used well, is a long conversation with your own life.",
      },
    ],
  },
  {
    slug: "cooking-for-strangers-cooking-for-family",
    title: "Cooking for Strangers, Cooking for Family",
    excerpt:
      "A pop-up dinner is an act of confession. A family meal is a treaty. Both ask the cook to put down the same thing.",
    category: "Dispatch",
    date: "2026-02-08",
    readingTime: 5,
    hero: "/images/gallery/137.png",
    heroAlt:
      "An evening dinner table — plated courses, polished wine glasses, candle bokeh in the distance.",
    author: "Kishwar Chowdhury",
    authorRole: "Chef · MasterChef Australia finalist",
    tags: ["dispatch", "events", "memoir"],
    content: [
      {
        type: "p",
        dropCap: true,
        text: "There is a strange honesty to cooking for strangers. They have no obligation to like you. They have no archive of the meals you've ruined or the years you've redeemed yourself. They sit down at a table you've set, and they wait — politely, completely — to be told who you are.",
      },
      {
        type: "p",
        text: "Family is a different conversation. Family arrives with a season ticket. They have eaten the failures, the experiments, the reheated leftovers, the tired weeknights when dinner was an apology. Cooking for family is less performance and more treaty: I will keep showing up at the stove if you keep showing up at the table.",
      },
      {
        type: "quote",
        text: "Pop-ups are confessions. Family dinners are treaties. The cook puts down the same thing — attention, paid in heat.",
      },
      {
        type: "p",
        text: "What I notice, after a year of pop-ups and four decades of household meals, is that both kitchens reward the same instinct. Slow down. Cook fewer dishes. Trust the bowl of rice. Pour the water yourself. The strangers and the family are not, in the end, very different. They both came hungry. They both came hopeful. They both wanted, more than the food, to be seen.",
      },
    ],
  },
  {
    slug: "the-ritual-of-slow-sundays",
    title: "The Ritual of Slow Sundays",
    excerpt:
      "On setting aside one day to cook the dishes that need both attention and forgiveness — and what they teach the rest of the week.",
    category: "Kitchen",
    date: "2026-01-20",
    readingTime: 4,
    hero: "/images/gallery/136.png",
    heroAlt:
      "Kishwar at a candlelit table, soft light and a glass of wine — a Sunday dinner unhurried.",
    author: "Kishwar Chowdhury",
    authorRole: "Chef · MasterChef Australia finalist",
    tags: ["kitchen", "process", "ritual"],
    content: [
      {
        type: "p",
        dropCap: true,
        text: "On Sundays I cook the dishes that ask for time. Slow lamb. Long stocks. The pickle that needs a week of sun. Nothing about the rest of the week tolerates this — Tuesday cooking is short and conditional. Sunday cooking is long and patient. It is the only day I trust myself to do nothing while something else turns into something better.",
      },
      {
        type: "p",
        text: "There's a kind of cooking only attention will give you. Bone broth that's been on for nine hours hums differently than one that's been on for three. A curry rested overnight has spoken to itself in ways the pan can't fake. Slow food is not slow because it is precious. It is slow because the dish is doing the cook a favour, and the cook is paying for it in patience.",
      },
      {
        type: "quote",
        text: "A long stove makes a long cook. Sunday is the day the kitchen teaches us back.",
      },
      {
        type: "p",
        text: "The lesson I take into Tuesday — into a midweek dal that will be ready in twenty minutes — is the one Sunday repeats every week. Don't rush the salt. Don't lift the lid. Don't trust the timer over the pan. The whole week ends up being a quiet argument with the stove, and Sunday is the only day I let the stove win.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aSame = a.category === post.category ? 1 : 0;
      const bSame = b.category === post.category ? 1 : 0;
      if (aSame !== bSame) return bSame - aSame;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, count);
}

export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

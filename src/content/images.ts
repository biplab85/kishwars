/**
 * Real Kishwar Chowdhury imagery — originally pulled from her Wix-hosted site
 * (kishwar.com.au) and now bundled locally under /public/images/ so the site
 * works in browsers with strict tracking protection (e.g. Firefox ETP) that
 * block static.wixstatic.com.
 */

const DIR = "/images";

export const images = {
  // Editorial portrait — primary hero backdrop.
  heroPortrait: {
    src: `${DIR}/hero-portrait.jpg`,
    alt: "Kishwar Chowdhury — editorial portrait",
  },

  // Three-act SignatureStory imagery.
  storyHeritage: {
    src: `${DIR}/story-heritage.jpg`,
    alt: "A scene of heritage and home — Kishwar's culinary world.",
  },
  storyFire: {
    src: `${DIR}/story-fire.jpg`,
    alt: "Fire and flavour — a moment from the kitchen.",
  },
  storyToday: {
    src: `${DIR}/story-today.jpg`,
    alt: "Kishwar today — chef, author, storyteller.",
  },

  // MasterChef pull-quote panel — single dramatic image.
  masterchefStill: {
    src: `${DIR}/masterchef-still.jpg`,
    alt: "Kishwar Chowdhury on MasterChef Australia, 2021.",
  },

  // Press features.
  pressNetwork10: {
    src: `${DIR}/press-network10.png`,
    alt: "Press feature — Network 10 / MasterChef.",
  },
  pressBdNews24: {
    src: `${DIR}/press-bdnews24.png`,
    alt: "Press feature — BD News 24.",
  },
  pressDailyStar: {
    src: `${DIR}/press-dailystar.png`,
    alt: "Press feature — The Daily Star.",
  },
} as const;

export const galleryImages = [
  images.storyHeritage,
  images.storyFire,
  images.storyToday,
  images.masterchefStill,
  images.heroPortrait,
] as const;

export type ImageRef = { src: string; alt: string };

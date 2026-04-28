/**
 * Real Kishwar Chowdhury imagery — pulled from her Wix-hosted personal site
 * (kishwar.com.au). The Wix CDN serves the original master file when the
 * `/v1/fill/...` resize segment is omitted from the URL, so we keep the
 * canonical `/media/<id>.jpg` form here and let `next/image` handle sizing.
 *
 * Source: https://www.kishwar.com.au/about and /gallery
 */

const WIX = "https://static.wixstatic.com/media";

export const images = {
  // Editorial portrait pulled from /about — used as primary hero backdrop.
  heroPortrait: {
    src: `${WIX}/a338cb_f880617f64a74026be8e8ff001907605~mv2.jpg`,
    alt: "Kishwar Chowdhury — editorial portrait",
  },

  // Three-act SignatureStory imagery — real Wix-hosted stills from the gallery.
  storyHeritage: {
    src: `${WIX}/a338cb_5e0d2f9a4e6744a8bb5ae0e85685c2b8~mv2.jpg`,
    alt: "A scene of heritage and home — Kishwar's culinary world.",
  },
  storyFire: {
    src: `${WIX}/a338cb_539588268d3c41b48545ee4aa74eb02f~mv2.jpg`,
    alt: "Fire and flavour — a moment from the kitchen.",
  },
  storyToday: {
    src: `${WIX}/a338cb_3e1f27cc7ff44db8bc18379f570a59f9~mv2.jpg`,
    alt: "Kishwar today — chef, author, storyteller.",
  },

  // MasterChef pull-quote panel — single dramatic image.
  masterchefStill: {
    src: `${WIX}/a338cb_b8661e4b66b6400cb53baba409d9d33c~mv2.jpg`,
    alt: "Kishwar Chowdhury on MasterChef Australia, 2021.",
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

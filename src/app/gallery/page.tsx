import type { Metadata } from "next";
import { readdirSync } from "node:fs";
import path from "node:path";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "./Gallery";

// Re-shuffle on every request — gives fresh randomness each visit.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery | Kishwar Chowdhury",
  description:
    "Behind-the-scenes frames from Melbourne and Dhaka shoots — kitchens, streets, plates.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Kishwar Chowdhury",
    description:
      "Behind-the-scenes frames from Melbourne and Dhaka shoots.",
    type: "website",
  },
};

const INITIAL = 20;

function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function listGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  return readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .map((f) => `/images/gallery/${f}`);
}

export default function GalleryPage() {
  const all = shuffle(listGalleryImages());
  const initial = all.slice(0, INITIAL);
  const more = all.slice(INITIAL);

  return (
    <>
      <Navigation />
      <main id="top" className="relative">
        <Gallery initial={initial} more={more} />
        <Footer />
      </main>
    </>
  );
}

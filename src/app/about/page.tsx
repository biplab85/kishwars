import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { About } from "./About";

export const metadata: Metadata = {
  title: "About | Kishwar Chowdhury",
  description:
    "Bangladeshi-Australian chef, author and speaker. MasterChef Australia Season 13 finalist. TEDx speaker. Author of Smoke Rice Water (Hardie Grant, June 2026). Born in Melbourne to Bangladeshi parents — preserving Bengali heritage through food.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Kishwar Chowdhury",
    description:
      "The story of a Bangladeshi-Australian chef, author and speaker preserving Bengali heritage through food.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <About />
        <Footer />
      </main>
    </>
  );
}

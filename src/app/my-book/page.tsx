import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MyBook } from "./MyBook";

export const metadata: Metadata = {
  title: "My Book — Smoke Rice Water | Kishwar Chowdhury",
  description:
    "Smoke Rice Water — Recipes and Stories from a Bengali Home. 100 recipes from Bengal. Hardie Grant, 23 June 2026. Pre-order the debut cookbook from Kishwar Chowdhury.",
  alternates: { canonical: "/my-book" },
  openGraph: {
    title: "Smoke Rice Water — A Cookbook by Kishwar Chowdhury",
    description:
      "100 recipes from Bengal. Recipes and Stories from a Bengali Home. Pre-order now.",
    type: "book",
  },
};

export default function MyBookPage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <MyBook />
        <Footer />
      </main>
    </>
  );
}

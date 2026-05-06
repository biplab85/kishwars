import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Recipes } from "./Recipes";

export const metadata: Metadata = {
  title: "Recipes | Kishwar Chowdhury",
  description:
    "Bengali heritage recipes told as stories — by Kishwar Chowdhury, MasterChef Australia finalist and author of Smoke Rice Water. Bengali Classics, Street Food, Fish & Seafood, Meat, Sweets, Rice & Breads, Quick Weeknight, Fusion & Modern.",
  alternates: { canonical: "/recipes" },
  openGraph: {
    title: "Recipes — Kishwar Chowdhury",
    description:
      "Recipes written as stories. Heritage Bengali cooking from kitchens in Bangladesh, Bengal, and a Melbourne home.",
    type: "website",
  },
};

export default function RecipesPage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Recipes />
        <Footer />
      </main>
    </>
  );
}

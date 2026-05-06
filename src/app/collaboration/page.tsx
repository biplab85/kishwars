import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Collaboration } from "./Collaboration";

export const metadata: Metadata = {
  title: "Collaborations & Partnerships | Kishwar Chowdhury",
  description:
    "Brand partnerships, recipe development, content creation, keynote speaking and cultural consultancy with Kishwar Chowdhury — MasterChef Australia finalist and author of Smoke Rice Water. Past partners include Crown Melbourne, Cricket Australia, World Vision and SBS Food.",
  alternates: { canonical: "/collaboration" },
  openGraph: {
    title: "Collaborate with Kishwar Chowdhury",
    description:
      "Story-driven partnerships rooted in heritage Bengali cuisine. Brand campaigns, events, content, and keynotes.",
    type: "website",
  },
};

export default function CollaborationPage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Collaboration />
        <Footer />
      </main>
    </>
  );
}

import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "./Contact";

export const metadata: Metadata = {
  title: "Contact | Kishwar Chowdhury",
  description:
    "Get in touch with Kishwar Chowdhury. For speaking, brand partnerships, media, events, cookbook, or general inquiries — email hello@kishwar.com.au or use the contact form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Kishwar Chowdhury",
    description:
      "Speaking · Brand Partnerships · Media · Events · Cookbook. Email hello@kishwar.com.au.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Contact />
        <Footer />
      </main>
    </>
  );
}

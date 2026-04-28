import type { Metadata } from "next";
import { text } from "@/content/text";

export function rootMetadata(): Metadata {
  const { title, description, siteUrl, ogAlt } = text.meta;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s — Kishwar Chowdhury",
    },
    description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      siteName: "Kishwar Chowdhury",
      title,
      description,
      url: siteUrl,
      locale: "en_AU",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kishwar Chowdhury",
    url: text.meta.siteUrl,
    jobTitle: "Chef, Author, Storyteller",
    description: text.meta.description,
    sameAs: text.footer.socials.map((s) => s.href),
    knowsAbout: ["Bengali cuisine", "South Asian cuisine", "Food writing", "Cultural storytelling"],
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
  };
}

export function bookJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: text.books.title,
    alternateName: text.books.subtitle,
    author: { "@type": "Person", name: "Kishwar Chowdhury" },
    description: text.books.lede,
    inLanguage: "en",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kishwar Chowdhury",
    url: text.meta.siteUrl,
  };
}

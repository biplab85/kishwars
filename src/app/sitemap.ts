import type { MetadataRoute } from "next";
import { text } from "@/content/text";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: text.meta.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

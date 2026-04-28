import type { MetadataRoute } from "next";
import { text } from "@/content/text";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${text.meta.siteUrl}/sitemap.xml`,
  };
}

import { siteConfig } from "@/data/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl ?? "https://example.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
  ];
}


import { siteConfig } from "@/data/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.siteUrl ?? "https://example.com";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}


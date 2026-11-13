import type { MetadataRoute } from "next";
import { GUIDES } from "@/content/guides";
import { RATE_PAGES_UPDATED } from "@/content/rates";
import { RATE_SLUGS, ratePath } from "@/lib/rates";
import { SITE_URL, TOOLS } from "@/lib/seo";
import { SITE_LAST_UPDATED, toolUpdated } from "@/lib/site-meta";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(SITE_LAST_UPDATED);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/changelog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/how-we-make-money`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.updated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${SITE_URL}/${tool.slug}`,
    lastModified: new Date(toolUpdated(tool.slug)),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const rateUpdated = new Date(RATE_PAGES_UPDATED);
  const ratePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/percent-of`,
      lastModified: rateUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...RATE_SLUGS.map((rate) => ({
      url: `${SITE_URL}${ratePath(rate)}`,
      lastModified: rateUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...guidePages, ...toolPages, ...ratePages];
}

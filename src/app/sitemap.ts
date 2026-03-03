import type { MetadataRoute } from "next";
import { AREA_DATA } from "@/lib/areaData";
import { getPublishedPosts } from "@/lib/blogData";

const BASE_URL = "https://www.texastows.com";

const servicePages = [
  "towing-service",
  "roadside-assistance",
  "vehicle-transport",
  "junk-car-removal",
  "accident-recovery",
  "winch-outs",
  "flatbed-towing",
  "stuck-in-garage-towing",
  "secondary-towing",
  "unattended-towing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/service-area`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service pages
  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Area pages
  const areaEntries: MetadataRoute.Sitemap = AREA_DATA.map((area) => ({
    url: `${BASE_URL}/service-area/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog posts — only include published posts (date <= today in CST)
  const publishedPosts = getPublishedPosts();
  const blogEntries: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...corePages, ...serviceEntries, ...areaEntries, ...blogEntries];
}

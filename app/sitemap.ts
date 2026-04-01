import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/resume", "/education", "/projects", "/skills", "/blog", "/blog/archive", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

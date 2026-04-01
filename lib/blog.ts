import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogPostMeta = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured?: boolean;
  published?: boolean;
  author?: string;
};

export type BlogPost = BlogPostMeta & {
  slug: string;
  content: string;
  readingMinutes: number;
};

const postsDir = path.join(process.cwd(), "content", "blog");

const safeLower = (value: string) => value.trim().toLowerCase();

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const fullPath = path.join(postsDir, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.(md|mdx)$/i, "");

      const meta: BlogPostMeta = {
        title: String(data.title ?? "Untitled Post"),
        excerpt: String(data.excerpt ?? ""),
        date: String(data.date ?? new Date().toISOString()),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        featured: Boolean(data.featured),
        published: data.published === undefined ? true : Boolean(data.published),
        author: String(data.author ?? "Shourya Shrivastava"),
      };

      const minutes = Math.max(1, Math.ceil(readingTime(content).minutes));

      return {
        ...meta,
        slug,
        content,
        readingMinutes: minutes,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = getAllPosts().find((item) => item.slug === slug);
  return post ?? null;
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getTags(): string[] {
  const tags = new Set<string>();
  getAllPosts().forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return [...tags].sort((a, b) => safeLower(a).localeCompare(safeLower(b)));
}

export function getPostsByTag(tag: string): BlogPost[] {
  const target = safeLower(tag);
  return getAllPosts().filter((post) =>
    post.tags.some((item) => safeLower(item) === target),
  );
}

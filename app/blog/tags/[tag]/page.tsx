import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { TagChip } from "@/components/tag-chip";
import { getPostsByTag, getTags } from "@/lib/blog";

export function generateStaticParams() {
  return getTags().map((tag) => ({ tag: tag.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const normalizedTag = decodeURIComponent(tag);
  return {
    title: `Tag: ${normalizedTag}`,
    description: `Articles tagged ${normalizedTag}`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const normalizedTag = decodeURIComponent(tag).toLowerCase();
  const tags = getTags();
  const tagMatch = tags.find((tag) => tag.toLowerCase() === normalizedTag);

  if (!tagMatch) {
    notFound();
  }

  const posts = getPostsByTag(tagMatch);

  return (
    <div className="space-y-10 py-12 md:py-16">
      <header className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">Blog Tag</p>
        <h1 className="font-heading text-4xl text-ink">{tagMatch}</h1>
        <p className="text-slate">{posts.length} post(s) in this category.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagChip key={tag} tag={tag} active={tag === tagMatch} />
        ))}
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}

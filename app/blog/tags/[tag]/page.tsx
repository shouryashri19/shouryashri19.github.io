import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
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
  const tagMatch = tags.find((item) => item.toLowerCase() === normalizedTag);

  if (!tagMatch) {
    notFound();
  }

  const posts = getPostsByTag(tagMatch);

  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Blog Tag"
        title={tagMatch}
        description={`${posts.length} post(s) in this category.`}
      />

      <div className="flex flex-wrap gap-2">
        {tags.map((item) => (
          <TagChip key={item} tag={item} active={item === tagMatch} />
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

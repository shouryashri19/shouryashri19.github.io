import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/card";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="space-y-8 py-12 md:py-16">
      <header className="space-y-3 border-b border-slate-200 pb-7 dark:border-slate-700">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">{project.category}</p>
        <h1 className="font-heading text-4xl leading-tight text-ink md:text-5xl">{project.title}</h1>
        <p className="text-base font-semibold uppercase tracking-[0.08em] text-slate-500">{project.subtitle}</p>
        <p className="max-w-4xl text-lg text-slate">{project.summary}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.projectUrl ? (
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#172f6f]"
            >
              {project.projectUrlLabel ?? "View Project"}
            </Link>
          ) : null}
          <Link
            href="/projects"
            className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate hover:border-navy hover:text-navy dark:border-slate-600 dark:text-slate-200 dark:hover:border-steel dark:hover:text-steel"
          >
            Back to Projects
          </Link>
        </div>
        {project.projectUrlNote ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">{project.projectUrlNote}</p>
        ) : null}
      </header>

      <section className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <Card className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">Why It Matters</h2>
          <p className="leading-7 text-slate">{project.whyItMatters}</p>
          <ul className="space-y-2 text-slate">
            {project.highlights.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">Tools and Methods</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:bg-slate-700/60 dark:text-slate-100"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate">Source attribution: {project.source}</p>
        </Card>
      </section>
    </div>
  );
}

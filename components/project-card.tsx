import Link from "next/link";
import type { ProjectItem } from "@/content/data/profile";
import { Card } from "@/components/card";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="h-full space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">{project.category}</p>
        <h3 className="font-heading text-2xl text-ink">{project.title}</h3>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">{project.subtitle}</p>
      </div>

      <p className="leading-7 text-slate">{project.summary}</p>

      <div className="rounded-md border border-slate-200 bg-paper p-3 dark:border-slate-700 dark:bg-slate-800/40">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Why It Matters</p>
        <p className="mt-2 text-sm text-slate">{project.whyItMatters}</p>
      </div>

      <ul className="space-y-2 text-sm text-slate">
        {project.highlights.map((highlight) => (
          <li key={highlight}>- {highlight}</li>
        ))}
      </ul>

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

      <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500">
        <span className="mr-auto">Source: {project.source}</span>
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-md border border-slate-300 px-3 py-1.5 font-semibold text-slate hover:border-navy hover:text-navy dark:border-slate-600 dark:text-slate-200 dark:hover:border-steel dark:hover:text-steel"
        >
          View Details
        </Link>
        {project.projectUrl ? (
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-navy px-3 py-1.5 font-semibold text-white hover:bg-[#172f6f]"
          >
            {project.projectUrlLabel ?? "View Project"}
          </Link>
        ) : null}
      </div>

      {project.projectUrlNote ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">{project.projectUrlNote}</p>
      ) : null}
      {!project.projectUrl ? (
        <p className="text-xs text-slate-500">Public link not listed</p>
      ) : null}
    </Card>
  );
}

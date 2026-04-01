import Link from "next/link";
import type { ProjectItem } from "@/content/data/profile";
import { Card } from "@/components/card";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="group h-full space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">{project.category}</p>
        <h3 className="font-heading text-2xl text-ink dark:text-slate-100">{project.title}</h3>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">{project.subtitle}</p>
      </div>

      <p className="leading-7 text-slate dark:text-slate-300">{project.summary}</p>

      <div className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900/50">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">Why It Matters</p>
        <p className="mt-2 text-sm leading-6 text-slate dark:text-slate-300">{project.whyItMatters}</p>
      </div>

      <details className="rounded-md border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-carbon">
        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-300">
          View Key Contributions
        </summary>
        <ul className="mt-3 space-y-2 text-sm text-slate dark:text-slate-300">
          {project.highlights.map((highlight) => (
            <li key={highlight}>- {highlight}</li>
          ))}
        </ul>
      </details>

      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1 text-xs text-slate-500 dark:text-slate-400">
        <span>Source: {project.source}</span>
        {project.projectUrl ? (
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-navy hover:text-ink dark:text-steel dark:hover:text-slate-100"
          >
            View Project
          </Link>
        ) : (
          <span>Public link not listed</span>
        )}
      </div>
    </Card>
  );
}

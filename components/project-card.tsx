import Link from "next/link";
import type { ProjectItem } from "@/content/data/profile";
import { Card } from "@/components/card";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="h-full space-y-4">
      <div className="space-y-2">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{project.category}</p>
        <h3 className="font-heading text-[24px] leading-tight tracking-tight text-ink dark:text-slate-100">{project.title}</h3>
        <p className="text-[13px] text-slate-500 dark:text-slate-400">{project.subtitle}</p>
      </div>

      <p className="text-[16px] leading-[1.65] text-slate dark:text-slate-300">{project.summary}</p>

      <div className="rounded-[10px] border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900/40">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Why It Matters</p>
        <p className="mt-2 text-[15px] leading-[1.6] text-slate dark:text-slate-300">{project.whyItMatters}</p>
      </div>

      <details className="rounded-[10px] border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-carbon">
        <summary className="cursor-pointer text-[13px] font-medium text-slate-600 dark:text-slate-300">View key contributions</summary>
        <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-slate dark:text-slate-300">
          {project.highlights.map((highlight) => (
            <li key={highlight}>- {highlight}</li>
          ))}
        </ul>
      </details>

      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-[8px] border border-slate-200 bg-white px-2.5 py-1 text-[13px] text-slate-600 dark:border-slate-700 dark:bg-carbon dark:text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1 text-[13px] text-slate-500 dark:text-slate-400">
        <span>Source: {project.source}</span>
        {project.projectUrl ? (
          <Link href={project.projectUrl} target="_blank" rel="noreferrer" className="font-medium text-navy hover:text-[#162c68] dark:text-steel dark:hover:text-slate-100">
            View project
          </Link>
        ) : (
          <span>Public link not listed</span>
        )}
      </div>
    </Card>
  );
}

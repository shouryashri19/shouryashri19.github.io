import type { ProjectItem } from "@/content/data/profile";
import { Card } from "@/components/card";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="h-full space-y-4">
      <div className="space-y-2">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{project.category}</p>
        <h3 className="font-heading text-[24px] leading-tight tracking-tight text-ink dark:text-slate-100">{project.title}</h3>
        <p className="text-[13px] text-slate-500 dark:text-slate-400">{project.subtitle}</p>
        {project.projectUrl ? (
          <div className="pt-2">
            {project.projectLinkNote ? (
              <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {project.projectLinkNote}
              </p>
            ) : null}
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[8px] bg-navy px-[18px] py-[10px] text-[13px] font-semibold tracking-tight text-white transition-all duration-200 ease-smooth hover:bg-[#1a3278]"
            >
              {project.projectLinkLabel ?? "View Project"}
            </a>
          </div>
        ) : null}
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
        {project.projectUrl ? (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-[8px] border border-slate-300 bg-white px-3 py-2 text-[13px] font-medium text-navy transition-all duration-200 ease-smooth hover:border-navy hover:bg-slate-50 dark:border-slate-600 dark:bg-[#172a45] dark:text-steel dark:hover:border-steel"
          >
            {project.projectLinkLabel ?? "View project"}
          </a>
        ) : null}
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
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-navy hover:text-[#162c68] dark:text-steel dark:hover:text-slate-100"
          >
            {project.projectLinkLabel ?? "View project"}
          </a>
        ) : (
          <span>Public link not listed</span>
        )}
      </div>
    </Card>
  );
}

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

      <div className="rounded-md border border-slate-200 bg-paper p-3">
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
            className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
        <span>Source: {project.source}</span>
        {project.projectUrl ? (
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-navy hover:text-ink"
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

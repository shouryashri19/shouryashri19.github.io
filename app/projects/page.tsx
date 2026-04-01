import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { projects } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: "Finance and analytical project portfolio.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Projects"
        title="Finance and Analytics Work"
        description="Selected project material designed to demonstrate valuation rigor, analytical depth, and business communication quality."
      />

      <div className="space-y-6">
        {projects.map((project) => (
          <Card key={project.name}>
            <h2 className="font-heading text-2xl text-ink">{project.name}</h2>
            <p className="text-sm font-semibold uppercase tracking-wider text-steel">{project.subtitle}</p>
            <p className="mt-3 leading-7 text-slate">{project.summary}</p>
            <ul className="mt-3 space-y-2 text-slate">
              {project.highlights.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="border-amber-300 bg-amber-50">
        <h2 className="font-heading text-xl text-amber-900">Editable Placeholder</h2>
        <p className="mt-2 text-sm text-amber-900">
          Add case competition submissions, independent valuation projects, or deal case studies as additional cards when ready.
        </p>
      </Card>
    </div>
  );
}

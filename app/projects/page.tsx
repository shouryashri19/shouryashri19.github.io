import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: "Finance, valuation, research, and analytics project portfolio.",
};

const categoryOrder = [
  "Finance Modeling",
  "Valuation",
  "Business Analytics",
  "Research",
  "Markets",
] as const;

export default function ProjectsPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Projects"
        title="Finance and Analytical Project Portfolio"
        description="Curated project work from resume and LinkedIn-aligned experience, organized for recruiter review in finance, banking, and consulting tracks."
      />

      {categoryOrder.map((category) => {
        const group = projects.filter((item) => item.category === category);
        if (group.length === 0) return null;

        return (
          <section key={category} className="space-y-4">
            <h2 className="font-heading text-2xl text-ink">{category}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {group.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

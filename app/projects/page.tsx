import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: "Finance, valuation, research, and analytics project portfolio.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Projects"
        title="Finance and Analytical Project Portfolio"
        description="A curated selection of modeling, research, and execution work from resume and LinkedIn-aligned experience."
      />

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}

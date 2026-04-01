import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ProjectBrowser } from "@/components/project-browser";
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
        description="Curated project work from resume and LinkedIn-aligned experience, organized for recruiter review across investment banking, finance, and consulting roles."
      />

      <ProjectBrowser projects={projects} />
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import type { ProjectItem } from "@/content/data/profile";
import { ProjectCard } from "@/components/project-card";

type Props = {
  projects: ProjectItem[];
};

const categories = [
  "All",
  "Finance Modeling",
  "Valuation",
  "Business Analytics",
  "Research",
  "Markets",
] as const;

export function ProjectBrowser({ projects }: Props) {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (selected === "All") return projects;
    return projects.filter((item) => item.category === selected);
  }, [projects, selected]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const active = selected === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ease-premium ${
                active
                  ? "border-navy bg-navy text-white dark:border-steel dark:bg-steel"
                  : "border-slate-300 bg-white text-slate hover:border-steel hover:text-navy dark:border-slate-700 dark:bg-carbon dark:text-slate-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

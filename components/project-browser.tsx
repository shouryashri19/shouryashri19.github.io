"use client";

import { useMemo, useState } from "react";
import type { ProjectItem } from "@/content/data/profile";
import { ProjectCard } from "@/components/project-card";

type Props = {
  projects: ProjectItem[];
};

export function ProjectBrowser({ projects }: Props) {
  const categories = useMemo(() => {
    const distinct = Array.from(new Set(projects.map((item) => item.category)));
    return ["All", ...distinct];
  }, [projects]);

  const [selected, setSelected] = useState<string>("All");

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
              className={`rounded-[8px] border px-2.5 py-1 text-[13px] transition-all duration-200 ease-smooth ${
                active
                  ? "border-navy bg-navy text-white dark:border-steel dark:bg-steel"
                  : "border-slate-300 bg-white text-slate hover:border-navy hover:text-navy dark:border-slate-700 dark:bg-carbon dark:text-slate-300"
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

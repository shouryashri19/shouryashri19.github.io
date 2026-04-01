"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-theme") as Theme | null;
    const resolved: Theme = saved ?? "light";
    setTheme(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("site-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-[8px] border border-slate-300 bg-white px-3 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:bg-[#1a2a45] dark:text-slate-200 dark:hover:bg-[#22365a]"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-theme") as Theme | null;
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved: Theme = saved ?? (preferredDark ? "dark" : "light");
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
      className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 hover:border-navy hover:text-navy dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl dark:border-slate-700/70 dark:bg-carbon/88">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-ink dark:text-slate-100">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em]",
                  active
                    ? "bg-slate-100 text-navy dark:bg-slate-800 dark:text-slate-100"
                    : "text-slate-600 hover:bg-slate-100 hover:text-navy dark:text-slate-300 dark:hover:bg-slate-800",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 lg:hidden dark:border-slate-600 dark:text-slate-300"
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden dark:border-slate-700 dark:bg-carbon" aria-label="Mobile">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 hover:border-steel hover:text-navy dark:border-slate-700 dark:text-slate-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

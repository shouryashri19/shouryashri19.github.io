"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-slate-200/90 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-carbon/95">
      <div className="mx-auto flex h-full w-full max-w-[1160px] items-center justify-between px-6">
        <Link href="/" className="font-heading text-[20px] font-semibold tracking-tight text-ink dark:text-slate-100">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-[8px] px-3 py-2 text-[13px] font-medium text-slate-600 hover:text-navy dark:text-slate-300 dark:hover:text-steel",
                  active && "bg-slate-100 text-navy dark:bg-slate-800 dark:text-steel",
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
            className="rounded-[8px] border border-slate-300 px-3 py-2 text-[13px] font-medium text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-300"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-slate-200 bg-white px-6 py-3 md:hidden dark:border-slate-700 dark:bg-carbon" aria-label="Mobile">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[8px] border border-slate-200 px-3 py-2 text-[13px] font-medium text-slate-700 hover:border-navy hover:text-navy dark:border-slate-700 dark:text-slate-300"
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

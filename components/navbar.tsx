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
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-slate-200/90 bg-white/92 backdrop-blur-xl dark:border-slate-700 dark:bg-[#122038]/92">
      <div className="mx-auto flex h-full w-full max-w-[1160px] items-center justify-between px-6">
        <Link href="/" className="font-heading text-[20px] font-semibold tracking-tight text-ink">
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
                  "rounded-[8px] px-3 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-100 hover:text-navy dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-steel",
                  active && "bg-slate-100 text-navy dark:bg-slate-700/60 dark:text-steel",
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
            className="rounded-[8px] border border-slate-300 px-3 py-2 text-[13px] font-medium text-slate-600 lg:hidden dark:border-slate-600 dark:text-slate-300"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-slate-200 bg-white px-6 py-3 dark:border-slate-700 dark:bg-[#122038] lg:hidden" aria-label="Mobile">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[8px] border border-slate-200 px-3 py-2 text-[13px] font-medium text-slate-600 hover:border-navy hover:text-navy dark:border-slate-700 dark:text-slate-300"
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

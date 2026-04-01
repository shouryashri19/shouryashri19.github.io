import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CtaButton({ href, children, variant = "primary" }: Props) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-premium",
    variant === "primary" &&
      "bg-navy text-white shadow-card hover:-translate-y-0.5 hover:bg-slate-900 dark:bg-steel dark:hover:bg-slate-200 dark:hover:text-slate-900",
    variant === "secondary" &&
      "border border-slate-300 bg-white text-ink hover:-translate-y-0.5 hover:border-navy hover:text-navy dark:border-slate-600 dark:bg-carbon dark:text-slate-100 dark:hover:border-steel",
    variant === "ghost" &&
      "text-navy hover:text-ink dark:text-slate-200 dark:hover:text-white",
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CtaButton({ href, children, variant = "primary" }: Props) {
  const isExternal = href.startsWith("http");
  const classes = clsx(
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200",
    variant === "primary" && "bg-navy text-white hover:bg-[#172f6f]",
    variant === "secondary" &&
      "border border-slate-300 bg-white/70 text-ink hover:border-navy hover:text-navy dark:border-slate-600 dark:bg-slate-800/30 dark:text-slate-100 dark:hover:border-steel dark:hover:text-steel",
    variant === "ghost" && "text-navy hover:text-ink dark:text-steel dark:hover:text-slate-100",
  );

  return (
    <Link href={href} className={classes} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
      {children}
    </Link>
  );
}

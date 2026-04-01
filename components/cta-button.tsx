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
    "inline-flex items-center justify-center rounded-[8px] px-[18px] py-[10px] text-[13px] font-semibold tracking-tight transition-all duration-200 ease-smooth",
    variant === "primary" && "bg-navy text-white hover:bg-[#1a3278]",
    variant === "secondary" &&
      "border border-slate-300 bg-white text-ink hover:bg-slate-50 dark:border-slate-600 dark:bg-[#172a45] dark:text-slate-100 dark:hover:bg-[#20395d]",
    variant === "ghost" && "text-navy hover:text-[#1a3278] dark:text-steel dark:hover:text-slate-100",
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

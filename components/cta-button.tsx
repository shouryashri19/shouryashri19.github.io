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
    variant === "primary" &&
      "bg-navy text-white hover:bg-[#162c68] dark:bg-navy dark:hover:bg-[#274a9c]",
    variant === "secondary" &&
      "border border-slate-300 bg-white text-ink hover:bg-slate-50 dark:border-slate-700 dark:bg-carbon dark:text-slate-100 dark:hover:bg-slate-900",
    variant === "ghost" && "text-navy hover:text-[#162c68] dark:text-steel dark:hover:text-slate-100",
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

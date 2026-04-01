import Link from "next/link";
import clsx from "clsx";

export function TagChip({ tag, active = false }: { tag: string; active?: boolean }) {
  return (
    <Link
      href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
      className={clsx(
        "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ease-premium",
        active
          ? "border-navy bg-navy text-white dark:border-steel dark:bg-steel"
          : "border-slate-300 bg-white text-slate hover:border-steel hover:text-navy dark:border-slate-700 dark:bg-carbon dark:text-slate-300",
      )}
    >
      {tag}
    </Link>
  );
}

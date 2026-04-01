import Link from "next/link";
import clsx from "clsx";

export function TagChip({ tag, active = false }: { tag: string; active?: boolean }) {
  return (
    <Link
      href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
      className={clsx(
        "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        active
          ? "border-navy bg-navy text-white"
          : "border-slate-300 bg-white text-slate hover:border-steel dark:border-slate-600 dark:bg-slate-800/30 dark:text-slate-100",
      )}
    >
      {tag}
    </Link>
  );
}

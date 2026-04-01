import Link from "next/link";
import clsx from "clsx";

export function TagChip({ tag, active = false }: { tag: string; active?: boolean }) {
  return (
    <Link
      href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
      className={clsx(
        "rounded-[8px] border px-2.5 py-1 text-[13px] text-slate-600 transition-all duration-200 ease-smooth dark:text-slate-300",
        active
          ? "border-navy bg-navy text-white dark:border-steel dark:bg-steel"
          : "border-slate-300 bg-white hover:border-navy hover:text-navy dark:border-slate-700 dark:bg-carbon dark:hover:border-steel dark:hover:text-steel",
      )}
    >
      {tag}
    </Link>
  );
}

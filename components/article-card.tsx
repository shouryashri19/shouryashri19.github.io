import Link from "next/link";
import type { ExternalArticle } from "@/content/data/profile";
import { Card } from "@/components/card";

export function ArticleCard({ article }: { article: ExternalArticle }) {
  return (
    <Card className="h-full space-y-3">
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-steel">{article.platform}</p>
        <h3 className="font-heading text-xl text-ink dark:text-slate-100">{article.title}</h3>
      </div>

      <p className="text-sm leading-7 text-slate dark:text-slate-300">{article.summary}</p>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>{article.date ?? "Date not listed"}</span>
        <span>{article.readTime ?? ""}</span>
      </div>

      <Link href={article.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-navy hover:text-ink dark:text-steel dark:hover:text-slate-100">
        Read on Medium
      </Link>
    </Card>
  );
}

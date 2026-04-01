import Link from "next/link";
import type { ExternalArticle } from "@/content/data/profile";
import { Card } from "@/components/card";

export function ArticleCard({ article }: { article: ExternalArticle }) {
  return (
    <Card className="h-full space-y-3">
      <div className="space-y-1">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{article.platform}</p>
        <h3 className="font-heading text-[22px] leading-tight tracking-tight text-ink dark:text-slate-100">{article.title}</h3>
      </div>

      <p className="text-[16px] leading-[1.65] text-slate dark:text-slate-300">{article.summary}</p>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-[8px] border border-slate-200 bg-white px-2.5 py-1 text-[13px] text-slate-600 dark:border-slate-700 dark:bg-carbon dark:text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-[13px] text-slate-500 dark:text-slate-400">
        <span>{article.date ?? "Date not listed"}</span>
        <span>{article.readTime ?? ""}</span>
      </div>

      <Link href={article.url} target="_blank" rel="noreferrer" className="text-[15px] font-medium text-navy hover:text-[#162c68] dark:text-steel dark:hover:text-slate-100">
        Read on Medium
      </Link>
    </Card>
  );
}

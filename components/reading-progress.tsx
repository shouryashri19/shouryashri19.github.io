"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("blog-article");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const traveled = Math.max(0, window.scrollY - (article.offsetTop - 120));
      const value = total > 0 ? (traveled / total) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, value)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-[58px] z-40 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <div
        className="h-full bg-gradient-to-r from-navy via-steel to-gold transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

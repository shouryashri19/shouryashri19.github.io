"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? (top / max) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, value)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div className="h-full bg-gradient-to-r from-steel via-navy to-gold transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

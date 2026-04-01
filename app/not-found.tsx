import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6 py-20 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-steel">404</p>
      <h1 className="font-heading text-4xl text-ink">Page Not Found</h1>
      <p className="text-slate">The page you requested does not exist or has moved.</p>
      <Link href="/" className="text-sm font-semibold text-navy hover:text-ink">
        Return to Home
      </Link>
    </div>
  );
}

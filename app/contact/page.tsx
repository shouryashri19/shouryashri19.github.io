import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";
import { CtaButton } from "@/components/cta-button";
import { linkedInHighlights, mediumProfile } from "@/content/data/profile";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Professional contact information and networking channels.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10 py-12 md:py-16">
      <SectionHeading
        label="Contact"
        title="Professional Contact"
        description="Open to conversations related to investment banking, finance, strategic analysis, and professional collaboration."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">Direct Details</h2>
          <p className="text-slate">
            Email: <a className="font-semibold text-navy" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p className="text-slate">Phone (US): {siteConfig.phoneUS}</p>
          <p className="text-slate">Phone (India): {siteConfig.phoneIN}</p>
          <p className="text-slate">Location: {siteConfig.location}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <CtaButton href={siteConfig.linkedIn}>LinkedIn</CtaButton>
            <CtaButton href={siteConfig.medium} variant="secondary">
              Medium
            </CtaButton>
            <CtaButton href={siteConfig.github} variant="secondary">
              GitHub
            </CtaButton>
            <CtaButton href={siteConfig.resumePath} variant="secondary">
              Download Resume
            </CtaButton>
          </div>
          <p className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-200">
            {linkedInHighlights.headline}
          </p>
          <p className="text-xs text-slate-500">Medium note: {mediumProfile.followersText}</p>
        </Card>

        <Card className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">Contact Form</h2>
          <p className="text-slate">
            Integrate this with Formspree, Resend + serverless function, or your preferred backend provider.
          </p>
          <form className="space-y-3" action="#" method="post">
            <input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-navy dark:border-slate-600 dark:bg-slate-800/30 dark:text-slate-100 dark:focus:border-steel" type="text" name="name" placeholder="Your Name" aria-label="Your Name" />
            <input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-navy dark:border-slate-600 dark:bg-slate-800/30 dark:text-slate-100 dark:focus:border-steel" type="email" name="email" placeholder="Your Email" aria-label="Your Email" />
            <textarea className="min-h-32 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-navy dark:border-slate-600 dark:bg-slate-800/30 dark:text-slate-100 dark:focus:border-steel" name="message" placeholder="Message" aria-label="Message" />
            <button type="submit" className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink">
              Send Message
            </button>
          </form>
        </Card>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Finance Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | Finance Portfolio`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-card.svg", width: 1200, height: 630, alt: `${siteConfig.name} portfolio preview` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Finance Portfolio`,
    description: siteConfig.description,
    images: ["/og-card.svg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  email: siteConfig.email,
  jobTitle: "Master of Financial Analysis Candidate",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Jersey",
    addressCountry: "US",
  },
  sameAs: [siteConfig.linkedIn, siteConfig.medium, siteConfig.github],
  url: siteConfig.url,
};

const themeInit = `
  (function() {
    try {
      var saved = localStorage.getItem('site-theme');
      var useDark = saved ? saved === 'dark' : true;
      document.documentElement.classList.toggle('dark', useDark);
    } catch (e) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <Script id="person-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(personSchema)}
        </Script>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

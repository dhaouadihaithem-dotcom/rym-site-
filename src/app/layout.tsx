import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rym Dhaouadi — Webdesigner & UX/UI Designer",
    template: "%s — Rym Dhaouadi",
  },
  description:
    "Webdesigner & UX/UI designer, je conçois des expériences digitales sur mesure pour les restaurants, bars, hôtels, cafés et lieux culturels avec une identité forte.",
  keywords: [
    "webdesigner restaurant",
    "webdesigner bar",
    "webdesigner hôtel",
    "UX UI designer",
    "création site restaurant",
    "création site bar",
    "webdesign lieux culturels",
    "direction artistique digitale",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: "Rym Dhaouadi — Webdesigner & UX/UI Designer",
    description:
      "Des expériences digitales sur mesure pour les lieux et marques avec une identité forte : restaurants, bars, hôtels, cafés, lieux culturels.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rym Dhaouadi — Webdesigner & UX/UI Designer",
    description:
      "Des expériences digitales sur mesure pour les lieux et marques avec une identité forte.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Webdesigner & UX/UI designer basée en France, spécialisée dans les expériences digitales pour restaurants, bars, hôtels, cafés et lieux culturels.",
  url: site.url,
  email: site.email,
  founder: {
    "@type": "Person",
    name: site.name,
    jobTitle: "Webdesigner & UX/UI Designer",
  },
  areaServed: "FR",
  sameAs: [site.instagram.href, site.linkedin.href],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased selection:bg-accent selection:text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import { BottomBar } from "@/components/BottomBar";
import { LocaleProvider, SkipLink } from "@/components/Locale";
import { Navigation } from "@/components/Navigation";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { company, description } from "@/lib/content";
import { withBase } from "@/lib/paths";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display-face",
});

const body = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body-face",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Hectare AŞ | Tarım Makineleri ve İş Makineleri",
    template: "%s | Hectare AŞ",
  },
  description,
  applicationName: company.name,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: company.name,
    ...(siteUrl
      ? {
          images: [
            {
              url: withBase("/media/unver-hero-poster.jpg"),
              width: 1920,
              height: 1080,
              alt: "Hectare AŞ tarım makineleri",
            },
          ],
        }
      : {}),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#141618",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  description,
  email: company.email,
  telephone: company.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    addressLocality: company.locality,
    addressRegion: company.region,
    addressCountry: "TR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body>
        <LocaleProvider>
          <SkipLink />
          <Navigation />
          {children}
          <BottomBar />
          <WhatsAppFloat />
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

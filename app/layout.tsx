import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { BottomBar } from "@/components/BottomBar";
import { Navigation } from "@/components/Navigation";
import { company, description } from "@/lib/content";
import { withBase } from "@/lib/paths";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Hectare AŞ | Agricultural Machinery & Solutions",
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
              alt: "Altın buğday tarlasında çalışan biçerdöver",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    ...(siteUrl ? { images: [withBase("/media/unver-hero-poster.jpg")] } : {}),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#efe6d4",
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
    <html lang="tr" className={inter.variable}>
      <body>
        <a className="skip" href="#icerik">
          İçeriğe geç
        </a>
        <Navigation />
        {children}
        <BottomBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

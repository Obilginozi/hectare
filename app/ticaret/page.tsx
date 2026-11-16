import type { Metadata } from "next";
import { Trade } from "@/components/Trade";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ticaret",
  description:
    "Hectare AŞ, on yıldan uzun süredir uluslararası ticaret yapar. Satış ve projelerin yer aldığı ülkeler.",
  alternates: { canonical: canonicalPath("/ticaret") },
};

export default function TicaretPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Trade />
    </main>
  );
}

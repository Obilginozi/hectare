import type { Metadata } from "next";
import { Trade } from "@/components/Trade";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "İştiraklerimiz",
  description:
    "Hectare AŞ, on yıldan uzun süredir tecrübesi ve kadrosuyla uluslararası satış ve proje yürütür.",
  alternates: { canonical: canonicalPath("/ticaret") },
};

export default function TicaretPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Trade />
    </main>
  );
}

import type { Metadata } from "next";
import { Products } from "@/components/Products";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Hectare AŞ tarım makineleri kataloğu. Ekim, toprak işleme, ot hasadı ve traktör ekipmanlarında ürün koduyla hızlı teklif alın.",
  alternates: { canonical: canonicalPath("/urunler") },
};

export default function UrunlerPage() {
  return <Products />;
}

import type { Metadata } from "next";
import { Products } from "@/components/Products";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Zirkon 8, Regular Multi Speed ve Regular Single Speed. Toprak hazırlığından yedek parçaya çalışma alanları.",
  alternates: { canonical: canonicalPath("/urunler") },
};

export default function UrunlerPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Products />
    </main>
  );
}

import type { Metadata } from "next";
import { SmartAgriculture } from "@/components/SmartAgriculture";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Akıllı Tarım",
  description:
    "Hectare akıllı tarım teknolojileri. Hassas kontrol, otomatik dümenleme ve tarla yönetimi çözümleri.",
  alternates: { canonical: canonicalPath("/akilli-tarim") },
};

export default function AkilliTarimPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <SmartAgriculture />
    </main>
  );
}

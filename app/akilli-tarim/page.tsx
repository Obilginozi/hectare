import type { Metadata } from "next";
import { SmartAgriculture } from "@/components/SmartAgriculture";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Akıllı Tarım",
  description:
    "Hectare ile akıllı tarım: GNSS konumlandırma, otomatik dümenleme, değişken oranlı uygulama, haritalama ve ekipman entegrasyonu.",
  alternates: { canonical: canonicalPath("/akilli-tarim") },
};

export default function AkilliTarimPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <SmartAgriculture />
    </main>
  );
}

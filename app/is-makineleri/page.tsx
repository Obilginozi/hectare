import type { Metadata } from "next";
import { HeavyEquipment } from "@/components/HeavyEquipment";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "İş Makineleri",
  description:
    "Türkiye’den dünyaya inşaat makineleri: ekskavatör, beko loder, mini ekskavatör, lastik yükleyici ve forklift tedariki ile ihracat.",
  alternates: { canonical: canonicalPath("/is-makineleri") },
};

export default function IsMakineleriPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <HeavyEquipment />
    </main>
  );
}

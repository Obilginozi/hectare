import type { Metadata } from "next";
import { Corporate } from "@/components/Corporate";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "Hectare AŞ, otuz yılı aşkın tecrübesiyle tarım makineleri ve iş makinelerinde toptan tedarik çözümleri sunar. 2022’den bu yana LEMKEN ve FIELDKING Türkiye distribütörüdür.",
  alternates: { canonical: canonicalPath("/kurumsal") },
};

export default function KurumsalPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Corporate />
    </main>
  );
}

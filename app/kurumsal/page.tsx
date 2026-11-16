import type { Metadata } from "next";
import { Corporate } from "@/components/Corporate";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "Hectare AŞ, otuz yıldan uzun süredir tarım makineleri ve iş makineleri sektöründedir. On yıldan uzun süredir uluslararası ticaret yapar.",
  alternates: { canonical: canonicalPath("/kurumsal") },
};

export default function KurumsalPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Corporate />
    </main>
  );
}

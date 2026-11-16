import type { Metadata } from "next";
import { Brands } from "@/components/Brands";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Markalar",
  description:
    "LEMKEN ve FIELDKING Türkiye distribütörlüğü 2022’de başladı. Çalışma, Hectare Foreign Trade’in dış ticaret alanıyla birlikte yürür.",
  alternates: { canonical: canonicalPath("/markalar") },
};

export default function MarkalarPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Brands />
    </main>
  );
}

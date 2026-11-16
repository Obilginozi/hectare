import type { Metadata } from "next";
import { Brands } from "@/components/Brands";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Markalar",
  description:
    "2022’den bu yana LEMKEN ve FIELDKING markalarının Türkiye distribütörüyüz.",
  alternates: { canonical: canonicalPath("/markalar") },
};

export default function MarkalarPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Brands />
    </main>
  );
}

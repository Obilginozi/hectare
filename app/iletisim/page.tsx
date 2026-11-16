import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Hectare iletişim: Beşiktaş, 0 533 381 42 18, team@hectare.com.tr.",
  alternates: { canonical: canonicalPath("/iletisim") },
};

export default function IletisimPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Contact />
    </main>
  );
}

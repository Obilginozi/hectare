import type { Metadata } from "next";
import { Privacy } from "@/components/Privacy";
import { canonicalPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Gizlilik",
  description:
    "Hectare tanıtım sitesinde form yoktur. İletişim telefon, e-posta ve WhatsApp üzerinden kurulur.",
  alternates: { canonical: canonicalPath("/gizlilik") },
};

export default function GizlilikPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <Privacy />
    </main>
  );
}

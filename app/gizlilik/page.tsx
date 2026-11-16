import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { getLegalPage } from "@/lib/legal/pages";
import { canonicalPath } from "@/lib/paths";

const page = getLegalPage("gizlilik-politikasi")!;

export const metadata: Metadata = {
  title: page.title.tr,
  description: page.intro?.tr ?? page.title.tr,
  alternates: { canonical: canonicalPath("/yasal/gizlilik-politikasi") },
};

export default function GizlilikPage() {
  return (
    <main id="icerik" tabIndex={-1}>
      <LegalDoc page={page} />
    </main>
  );
}

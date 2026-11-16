import type { LegalPage } from "@/lib/legal/types";
import { legalPages } from "@/lib/legal/content";

export const legalLinks = [
  { href: "/yasal/iptal-ve-iade", label: "İptal ve İade Koşulları" },
  { href: "/yasal/mesafeli-satis", label: "Mesafeli Satış Sözleşmesi" },
  { href: "/yasal/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/yasal/kisisel-verilerin-korunmasi", label: "Kişisel Verilerin Korunması" },
  { href: "/yasal/uyelik-ve-kullanim", label: "Üyelik ve Kullanım Sözleşmesi" },
  { href: "/yasal/cerez-politikasi", label: "Çerez Politikası" },
] as const;

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((page) => page.slug === slug);
}

export function getLegalSlugs() {
  return legalPages.map((page) => page.slug);
}

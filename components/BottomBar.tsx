"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialLinks } from "@/components/SocialLinks";
import { useLocale } from "@/components/Locale";
import { company, footerLinks, navLinks } from "@/lib/content";
import { legalLinks } from "@/lib/legal/pages";
import { navName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";

const footerExtra: Record<string, { tr: string; en: string }> = {
  "/kurumsal#markalar": { tr: "Markalar", en: "Brands" },
  "/kurumsal#ticaret": { tr: "Ticaret ağı", en: "Trade network" },
  "/urunler/akt": { tr: "Akıllı Tarım", en: "Smart Farming" },
};

export function BottomBar() {
  const pathname = usePathname();
  const { lang, t } = useLocale();
  const current = (href: string) => {
    const path = href.split("#")[0];
    return pathname === path || (path !== "/" && pathname.startsWith(`${path}/`)) ? "page" : undefined;
  };
  const blurb =
    lang === "en"
      ? "More than thirty years in agricultural and construction machinery. More than ten years of international trade with Hectare Foreign Trade."
      : "Otuz yılı aşkın tarım ve iş makineleri tecrübesi. Hectare Foreign Trade ile on yılı aşkın uluslararası ticaret.";

  const labelFor = (href: string, fallback: string) =>
    footerExtra[href]?.[lang] ?? navName(lang, href, fallback);

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Image src={withBase("/media/hectare-logo.png")} alt="" width={220} height={42} />
          <p>{blurb}</p>
          <SocialLinks className="social-links--footer" />
        </div>
        <div>
          <p className="footer-label">{t.pagesLabel}</p>
          <nav aria-label={t.footerLabel}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={current(link.href)}>
                {labelFor(link.href, link.label)}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="footer-label">{t.legalLabel}</p>
          <nav aria-label={t.legalLabel}>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={current(link.href)}>
                {navName(lang, link.href, link.label)}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="footer-label">{t.contactLabel}</p>
          <ul>
            <li>
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              {company.addressLines[0]}
              <br />
              {company.addressLines[1]}
              <br />
              {lang === "en" ? `${company.locality} / Istanbul` : company.addressLines[2]}
            </li>
            <li>
              <Link href={navLinks[0].href}>{navName(lang, "/urunler", "Ürünler")}</Link>
            </li>
          </ul>
        </div>
        <p className="footer-copy">© {company.name} · Hectare Foreign Trade</p>
      </div>
    </footer>
  );
}

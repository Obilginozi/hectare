"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, footerLinks } from "@/lib/content";
import { legalLinks } from "@/lib/legal/pages";
import { navName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";
import { useLocale } from "@/components/Locale";
import { SocialLinks } from "@/components/SocialLinks";

export function BottomBar() {
  const pathname = usePathname();
  const { lang, t } = useLocale();
  const tagline =
    lang === "en"
      ? "Agricultural machinery and equipment, construction machinery, spare parts supplier."
      : "Tarım makineleri ve ekipmanları, iş makineleri, yedek parça tedarikçisi.";
  const blurb =
    lang === "en"
      ? "As Hectare AŞ, we have supplied agricultural machinery and construction equipment for more than thirty years. For more than ten years we have carried out international trade with our experience and our team."
      : "Hectare AŞ olarak otuz yıldan uzun süredir tarım makineleri ve iş makineleri tedarik ediyoruz. On yıldan uzun süredir tecrübemiz ve kadromuzla uluslararası ticaret yürütüyoruz.";
  const current = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined;

  return (
    <footer className="bottom-bar">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src={withBase("/media/hectare-logo.png")} alt="" width={300} height={58} />
          <p className="footer-tagline">{tagline}</p>
          <p>{blurb}</p>
        </div>
        <div>
          <p className="footer-label">{t.pagesLabel}</p>
          <nav aria-label={t.footerLabel}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={current(link.href)}>
                {navName(lang, link.href, link.label)}
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
              {company.addressLines[0]} No: 79
              <br />
              İç Kapı No: 1 Akaretler{" "}
              {lang === "en" ? `${company.locality} / Istanbul` : company.addressLines[2]}
            </li>
            <li>
              <SocialLinks className="social-links--footer" />
            </li>
          </ul>
        </div>
        <p className="footer-copy">© {company.name} · Hectare Foreign Trade</p>
      </div>
    </footer>
  );
}

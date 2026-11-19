"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/components/Locale";
import { company, navLinks } from "@/lib/content";
import { navName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";

export function Navigation() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLocale();
  const [open, setOpen] = useState(false);
  const current = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined;

  return (
    <header className="site-header">
      <div className="nav-row">
        <Link className="brand-lockup" href="/" onClick={() => setOpen(false)}>
          <Image src={withBase("/media/hectare-logo.png")} alt="" width={180} height={36} priority />
          <strong className="sr-only">{company.name}</strong>
        </Link>

        <nav className="nav-links" aria-label={t.navLabel}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={current(link.href)}>
              {navName(lang, link.href, link.label)}
            </Link>
          ))}
          <button
            type="button"
            className="lang-switch"
            aria-label={t.language}
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.close : t.menu}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={open ? "mobile-drawer is-open" : "mobile-drawer"}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current(link.href)}
            onClick={() => setOpen(false)}
          >
            {navName(lang, link.href, link.label)}
          </Link>
        ))}
        <button type="button" onClick={() => setLang(lang === "tr" ? "en" : "tr")}>
          {lang === "tr" ? "English" : "Türkçe"}
        </button>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/Locale";
import { catalogCount, catalogGroups, categoriesIn } from "@/lib/catalog";
import { company, navLinks } from "@/lib/content";
import { categoryName, groupName, navName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";

export function Navigation() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLocale();
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileCatalog, setMobileCatalog] = useState(false);
  const megaId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined;

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  useEffect(() => {
    setMegaOpen(false);
    setOpen(false);
    setMobileCatalog(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="nav-row">
          <Link className="brand-lockup" href="/" onClick={() => setOpen(false)}>
            <Image src={withBase("/media/hectare-logo.png")} alt="" width={180} height={36} priority />
            <strong className="sr-only">{company.name}</strong>
          </Link>

          <nav className="nav-links" aria-label={t.navLabel}>
            {navLinks.map((link) =>
              link.href === "/urunler" ? (
                <div
                  key={link.href}
                  className={`nav-mega${megaOpen ? " is-open" : ""}`}
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                >
                  <Link
                    href={link.href}
                    aria-current={current(link.href)}
                    aria-expanded={megaOpen}
                    aria-controls={megaId}
                    onFocus={openMega}
                  >
                    {navName(lang, link.href, link.label)}
                  </Link>
                  <div
                    id={megaId}
                    className="mega-panel"
                    hidden={!megaOpen}
                    role="region"
                    aria-label={navName(lang, "/urunler", "Ürünler")}
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleCloseMega}
                  >
                    <div className="mega-inner">
                      {catalogGroups.map((group) => (
                        <section key={group} className="mega-group">
                          <h3>{groupName(lang, group)}</h3>
                          {categoriesIn(group).map((category) => (
                            <Link
                              key={category.slug}
                              className="mega-category-link"
                              href={`/urunler/${category.slug}`}
                              onClick={() => setMegaOpen(false)}
                            >
                              <span>{categoryName(lang, category.slug, category.name)}</span>
                              <em>{category.code}</em>
                            </Link>
                          ))}
                        </section>
                      ))}
                    </div>
                    <div className="mega-foot">
                      <Link href="/urunler" onClick={() => setMegaOpen(false)}>
                        {lang === "en" ? "Full Catalogue" : "Tüm Katalog"}
                      </Link>
                      <span>
                        {catalogCount} {lang === "en" ? "products" : "ürün"}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} aria-current={current(link.href)}>
                  {navName(lang, link.href, link.label)}
                </Link>
              ),
            )}
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
            className={`menu-toggle${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={open ? "mobile-drawer is-open" : "mobile-drawer"}
        aria-hidden={!open}
      >
        <nav className="mobile-drawer-nav" aria-label={t.navLabel}>
          {navLinks.map((link) =>
            link.href === "/urunler" ? (
              <div key={link.href} className={`mobile-catalog${mobileCatalog ? " is-open" : ""}`}>
                <div className="mobile-catalog-head">
                  <Link href={link.href} aria-current={current(link.href)} onClick={() => setOpen(false)}>
                    {navName(lang, link.href, link.label)}
                  </Link>
                  <button
                    type="button"
                    className="mobile-catalog-toggle"
                    aria-expanded={mobileCatalog}
                    aria-label={lang === "en" ? "Product categories" : "Ürün kategorileri"}
                    onClick={() => setMobileCatalog((value) => !value)}
                  >
                    <span>{mobileCatalog ? "−" : "+"}</span>
                  </button>
                </div>
                {mobileCatalog ? (
                  <div className="mobile-catalog-body">
                    {catalogGroups.map((group) => (
                      <section key={group}>
                        <h3>{groupName(lang, group)}</h3>
                        {categoriesIn(group).map((category) => (
                          <Link
                            key={category.slug}
                            href={`/urunler/${category.slug}`}
                            onClick={() => setOpen(false)}
                          >
                            <span>{categoryName(lang, category.slug, category.name)}</span>
                            <em>{category.code}</em>
                          </Link>
                        ))}
                      </section>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                className="mobile-drawer-link"
                href={link.href}
                aria-current={current(link.href)}
                onClick={() => setOpen(false)}
              >
                {navName(lang, link.href, link.label)}
              </Link>
            ),
          )}
        </nav>
        <div className="mobile-drawer-foot">
          <button
            type="button"
            className="mobile-lang"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
          >
            {lang === "tr" ? (
              <>
                <span className="mobile-lang-flag" aria-hidden="true">
                  🇬🇧
                </span>
                English
              </>
            ) : (
              <>
                <span className="mobile-lang-flag" aria-hidden="true">
                  🇹🇷
                </span>
                Türkçe
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

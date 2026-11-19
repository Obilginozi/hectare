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
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
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
                          <div key={category.slug} className="mega-category">
                            <Link
                              className="mega-category-link"
                              href={`/urunler/${category.slug}`}
                              onClick={() => setMegaOpen(false)}
                            >
                              <span>{categoryName(lang, category.slug, category.name)}</span>
                              <em>{category.code}</em>
                            </Link>
                            <ul className="mega-codes">
                              {category.products.map((product) => (
                                <li key={product.code}>
                                  <Link
                                    href={`/urunler/${category.slug}`}
                                    onClick={() => setMegaOpen(false)}
                                  >
                                    {product.code}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </section>
                    ))}
                  </div>
                  <div className="mega-foot">
                    <Link href="/urunler" onClick={() => setMegaOpen(false)}>
                      {lang === "en" ? "View all categories" : "Tüm kategorileri gör"}
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
        {navLinks.map((link) =>
          link.href === "/urunler" ? (
            <div key={link.href} className="mobile-catalog">
              <div className="mobile-catalog-head">
                <Link
                  href={link.href}
                  aria-current={current(link.href)}
                  onClick={() => setOpen(false)}
                >
                  {navName(lang, link.href, link.label)}
                </Link>
                <button
                  type="button"
                  aria-expanded={mobileCatalog}
                  onClick={() => setMobileCatalog((value) => !value)}
                >
                  {mobileCatalog ? "−" : "+"}
                </button>
              </div>
              {mobileCatalog ? (
                <div className="mobile-catalog-body">
                  {catalogGroups.map((group) => (
                    <section key={group}>
                      <h3>{groupName(lang, group)}</h3>
                      {categoriesIn(group).map((category) => (
                        <div key={category.slug} className="mobile-category">
                          <Link
                            href={`/urunler/${category.slug}`}
                            onClick={() => setOpen(false)}
                          >
                            {categoryName(lang, category.slug, category.name)}
                            <em>{category.code}</em>
                          </Link>
                          <ul className="mobile-codes">
                            {category.products.map((product) => (
                              <li key={product.code}>
                                <Link
                                  href={`/urunler/${category.slug}`}
                                  onClick={() => setOpen(false)}
                                >
                                  {product.code}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current(link.href)}
              onClick={() => setOpen(false)}
            >
              {navName(lang, link.href, link.label)}
            </Link>
          ),
        )}
        <button type="button" onClick={() => setLang(lang === "tr" ? "en" : "tr")}>
          {lang === "tr" ? "English" : "Türkçe"}
        </button>
      </div>
    </header>
  );
}

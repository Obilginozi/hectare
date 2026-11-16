"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { catalogGroups, categoriesIn } from "@/lib/catalog";
import { company, navLinks } from "@/lib/content";
import { categoryName, groupName, navName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";
import { LanguageSwitch, useLocale } from "@/components/Locale";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();
  const catalogId = useId();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const { lang, t } = useLocale();

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const apply = () => {
      document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus({ preventScroll: true });
    const menu = document.getElementById(menuId);
    const resetMenu = () => {
      if (menu) menu.scrollTop = 0;
    };
    resetMenu();
    const frame = requestAnimationFrame(resetMenu);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, menuId]);

  useEffect(() => {
    if (!catalogOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCatalogOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [catalogOpen]);

  const current = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined;

  return (
    <header className="site-header" ref={headerRef}>
      <div className="utility">
        <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
        <a href={`mailto:${company.email}`}>{company.email}</a>
        <LanguageSwitch />
      </div>
      <div className="nav-row">
        <Link className="wordmark" href="/">
          <Image src={withBase("/media/hectare-logo.png")} alt="Hectare" width={300} height={58} priority />
        </Link>
        <nav className="nav-desktop" aria-label={t.navLabel}>
          {navLinks.map((link) =>
            link.href === "/urunler" ? (
              <div
                key={link.href}
                className="nav-catalog"
                onMouseEnter={() => setCatalogOpen(true)}
                onMouseLeave={() => setCatalogOpen(false)}
                onFocus={() => setCatalogOpen(true)}
                onBlur={(event) => {
                  const next = event.relatedTarget;
                  if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
                    setCatalogOpen(false);
                  }
                }}
              >
                <Link href={link.href} aria-current={current(link.href)} onClick={() => setCatalogOpen(false)}>
                  {navName(lang, link.href, link.label)}
                </Link>
                <button
                  type="button"
                  className="catalog-toggle"
                  aria-expanded={catalogOpen}
                  aria-controls={catalogId}
                  onClick={() => setCatalogOpen((value) => !value)}
                >
                  Katalog
                </button>
                <div id={catalogId} className={catalogOpen ? "mega is-open" : "mega"} hidden={!catalogOpen}>
                  {catalogGroups.map((group) => {
                    const categories = categoriesIn(group);
                    const wide = categories.length >= 4;
                    return (
                    <section key={group} className={wide ? "mega-section is-wide" : "mega-section"}>
                      <p className="mega-bar">{groupName(lang, group)}</p>
                      <div className="mega-cats">
                        {categories.map((category) => {
                          const count = category.products.length;
                          const codeClass =
                            !wide && count > 12
                              ? "mega-codes is-thirds"
                              : count > (wide ? 4 : 6)
                                ? "mega-codes is-split"
                                : "mega-codes";
                          return (
                          <div key={category.slug}>
                            <Link
                              className="mega-cat"
                              href={`/urunler/${category.slug}`}
                              onClick={() => setCatalogOpen(false)}
                            >
                              {categoryName(lang, category.slug, category.name)}
                            </Link>
                            <ul className={codeClass}>
                              {category.products.map((product) => (
                                <li key={product.code}>
                                  <Link
                                    href={`/urunler/${category.slug}#${product.code}`}
                                    onClick={() => setCatalogOpen(false)}
                                  >
                                    {product.code}
                                    <span className="sr-only"> {product.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          );
                        })}
                      </div>
                    </section>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} aria-current={current(link.href)}>
                {navName(lang, link.href, link.label)}
              </Link>
            ),
          )}
        </nav>
        <button
          ref={buttonRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? t.close : t.menu}
        </button>
      </div>
      <nav id={menuId} className={open ? "nav-mobile is-open" : "nav-mobile"} aria-label={t.mobileLabel} hidden={!open}>
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            ref={index === 0 ? firstLinkRef : undefined}
            aria-current={current(link.href)}
            onClick={() => setOpen(false)}
          >
            {navName(lang, link.href, link.label)}
          </Link>
        ))}
        {catalogGroups.map((group) => (
          <div key={group} className="mobile-group">
            <p className="mobile-catalog-label">{groupName(lang, group)}</p>
            {categoriesIn(group).map((category) => (
              <div key={category.slug}>
                <Link
                  className="mobile-catalog-link"
                  href={`/urunler/${category.slug}`}
                  onClick={() => setOpen(false)}
                >
                  {categoryName(lang, category.slug, category.name)}
                </Link>
                <ul className="mobile-codes">
                  {category.products.map((product) => (
                    <li key={product.code}>
                      <Link
                        href={`/urunler/${category.slug}#${product.code}`}
                        onClick={() => setOpen(false)}
                      >
                        {product.code}
                        <span className="sr-only"> {product.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </header>
  );
}

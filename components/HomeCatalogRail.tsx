"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/Locale";
import type { CatalogCategory } from "@/lib/catalog";
import { categoryName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

export function HomeCatalogRail({
  groupId,
  groupLabel,
  categories,
}: {
  groupId: string;
  groupLabel: string;
  categories: readonly CatalogCategory[];
}) {
  const { lang, t } = useLocale();
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [mobileRail, setMobileRail] = useState(false);
  // Desktop: only long groups. Mobile: every group with 2+ cards scrolls.
  const scrollable = mobileRail ? categories.length > 1 : categories.length > 4;

  const syncButtons = () => {
    const node = scrollerRef.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    setCanPrev(node.scrollLeft > 4);
    setCanNext(node.scrollLeft < max - 4);
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const syncMobile = () => setMobileRail(media.matches);
    syncMobile();
    media.addEventListener("change", syncMobile);
    return () => media.removeEventListener("change", syncMobile);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    syncButtons();
    const onScroll = () => syncButtons();
    node.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncButtons);
    return () => {
      node.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncButtons);
    };
  }, [categories.length, scrollable]);

  const scrollByPage = (direction: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.max(node.clientWidth * 0.9, node.clientWidth / 4);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className={`home-catalog-group${scrollable ? " is-scrollable" : ""}`} aria-labelledby={groupId}>
      <div className="home-catalog-head">
        <h3 id={groupId}>{groupLabel}</h3>
        <div className="home-catalog-tools">
          {scrollable ? (
            <div className="home-rail-nav">
              <button
                type="button"
                className="home-rail-btn"
                aria-label={lang === "en" ? "Previous" : "Önceki"}
                disabled={!canPrev}
                onClick={() => scrollByPage(-1)}
              >
                ‹
              </button>
              <button
                type="button"
                className="home-rail-btn"
                aria-label={lang === "en" ? "Next" : "Sonraki"}
                disabled={!canNext}
                onClick={() => scrollByPage(1)}
              >
                ›
              </button>
            </div>
          ) : null}
          <Link href="/urunler">{t.viewProducts}</Link>
        </div>
      </div>
      <ul ref={scrollerRef} className={`home-rail${scrollable ? " is-scrollable" : ""}`}>
        {categories.map((category) => {
          const photo = category.products.map((item) => productPhoto(item.code)).find(Boolean);
          return (
            <li key={category.slug}>
              <Link className="tile tile-compact" href={`/urunler/${category.slug}`}>
                <span className="tile-photo">
                  {photo ? (
                    <Image
                      src={withBase(photo)}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 50vw, 25vw"
                    />
                  ) : null}
                  <span className="tile-badge">{category.code}</span>
                </span>
                <span className="tile-body">
                  <span className="tile-name">{categoryName(lang, category.slug, category.name)}</span>
                  <span className="tile-meta">{t.productCount(category.products.length)}</span>
                  <span className="tile-more">{t.view}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

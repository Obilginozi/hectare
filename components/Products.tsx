"use client";

import Image from "next/image";
import Link from "next/link";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { catalogGroups, categoriesIn } from "@/lib/catalog";
import { categoryName, groupName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

export function Products() {
  const { lang, t } = useLocale();
  return (
    <main id="icerik" tabIndex={-1}>
      <section className="page-hero page-hero--film" aria-labelledby="urunler-title">
        <PageFilm src="/media/video4.mp4" poster="/media/video4-poster.jpg" />
        <div className="page-hero-copy wrap">
          <h1 id="urunler-title">{lang === "en" ? "Products" : "Ürünler"}</h1>
          <p>
            {lang === "en"
              ? "We supply agricultural machinery from seeding to harvest, and from tillage to tractor equipment."
              : "Ekimden hasada, toprak işlemeden traktör ekipmanına kadar tarım makineleri tedarik ediyoruz."}
          </p>
        </div>
      </section>
      {catalogGroups.map((group) => (
        <section className="section" key={group} aria-labelledby={`urun-${group}`}>
          <div className="wrap">
              <h2 id={`urun-${group}`} className="block-title">
                {groupName(lang, group)}
              </h2>
            <ul className="tile-grid">
              {categoriesIn(group).map((category) => {
                const photo = category.products.map((item) => productPhoto(item.code)).find(Boolean);
                return (
                  <li key={category.slug}>
                    <Link className="tile" href={`/urunler/${category.slug}`}>
                      {photo ? (
                        <span className="tile-photo">
                          <Image src={withBase(photo)} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                        </span>
                      ) : (
                        <span className="tile-mark">{category.code}</span>
                      )}
                        <span className="tile-name">{categoryName(lang, category.slug, category.name)}</span>
                        <span className="tile-meta">{t.productCount(category.products.length)}</span>
                        <span className="card-more">{t.view}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}

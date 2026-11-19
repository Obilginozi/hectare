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
  const tr = lang === "tr";

  return (
    <>
      <section className="page-hero">
        <PageFilm src="/media/video4.mp4" poster="/media/video4-poster.jpg" />
        <div className="page-hero-copy">
          <p className="eyebrow">Hectare</p>
          <h1>{tr ? "Ürünler" : "Products"}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="lede">
              {tr
                ? "Ekimden hasada, toprak işlemeden traktör ekipmanına kadar tarım makineleri tedarik ediyoruz."
                : "From seeding to harvest, tillage to tractor equipment, we supply agricultural machinery."}
            </p>
          </div>

          <div className="catalog-groups">
            {catalogGroups.map((group) => (
              <div key={group}>
                <h2 className="block-title" style={{ marginBottom: "1.25rem" }}>
                  {groupName(lang, group)}
                </h2>
                <ul className="tile-grid">
                  {categoriesIn(group).map((category) => {
                    const photo = category.products.map((item) => productPhoto(item.code)).find(Boolean);
                    return (
                      <li key={category.slug}>
                        <Link className="tile" href={`/urunler/${category.slug}`}>
                          <span className="tile-photo">
                            {photo ? (
                              <Image src={withBase(photo)} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                            ) : null}
                          </span>
                          <span className="tile-body">
                            <span className="tile-name">
                              {categoryName(lang, category.slug, category.name)}
                            </span>
                            <span className="tile-meta">{t.productCount(category.products.length)}</span>
                            <span className="tile-more">{t.view}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

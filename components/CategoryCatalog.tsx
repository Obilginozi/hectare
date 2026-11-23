"use client";

import Image from "next/image";
import Link from "next/link";
import { SmartAgricultureEmbed } from "@/components/SmartAgricultureEmbed";
import { useLocale } from "@/components/Locale";
import { catalog } from "@/lib/catalog";
import { categoryName, groupName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";
import type { CatalogCategory } from "@/lib/catalog";

export function CategoryCatalog({ category }: { category: CatalogCategory }) {
  const { lang, t } = useLocale();
  const tr = lang === "tr";
  const isSmart = category.slug === "akt";
  const related = catalog
    .filter((item) => item.group === category.group && item.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow" style={{ color: "var(--brass-soft)" }}>
            {groupName(lang, category.group)}
          </p>
          <h1>{categoryName(lang, category.slug, category.name)}</h1>
          <p>
            {tr
              ? `${category.products.length} model · ürün kodu ${category.code}`
              : `${category.products.length} models · product code ${category.code}`}
          </p>
          <div className="page-intro-meta">
            <span>
              {category.products.length} {tr ? "model" : "models"}
            </span>
            <span>{category.code}</span>
          </div>
        </div>
      </section>

      {isSmart ? (
        <section className="section">
          <div className="wrap">
            <SmartAgricultureEmbed showProducts={false} />
          </div>
        </section>
      ) : null}

      <section className="cat-sales-list" id="modeller">
        <div className="wrap">
          <div className="section-head">
            <h2 className="block-title">{tr ? "Modeller" : "Models"}</h2>
            <p className="lede">
              {tr
                ? "Her modelin ürün kodu kart üzerinde yer alır."
                : "Each model shows its product code on the card."}
            </p>
          </div>

          <ul className="cat-sales-grid">
            {category.products.map((product, index) => {
              const photo = productPhoto(product.code);
              return (
                <li key={product.code} className="cat-sales-card">
                  <div className="cat-sales-card-media">
                    {photo ? (
                      <Image
                        src={withBase(photo)}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 50vw, 25vw"
                        priority={index < 4}
                      />
                    ) : null}
                    <span>{product.code}</span>
                  </div>
                  <div className="cat-sales-card-body">
                    <h2>{product.name}</h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {related.length ? (
        <section className="section section-muted">
          <div className="wrap">
            <div className="section-head">
              <h2 className="block-title">{tr ? "Birlikte değerlendirin" : "Review together"}</h2>
            </div>
            <ul className="tile-grid tile-grid-4">
              {related.map((item) => {
                const photo = item.products.map((p) => productPhoto(p.code)).find(Boolean);
                return (
                  <li key={item.slug}>
                    <Link className="tile tile-compact" href={`/urunler/${item.slug}`}>
                      <span className="tile-photo">
                        {photo ? (
                          <Image src={withBase(photo)} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" />
                        ) : null}
                      </span>
                      <span className="tile-body">
                        <span className="tile-name">{categoryName(lang, item.slug, item.name)}</span>
                        <span className="tile-meta">{t.productCount(item.products.length)}</span>
                        <span className="tile-more">{t.view}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

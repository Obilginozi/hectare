"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useState } from "react";
import { SmartAgricultureEmbed } from "@/components/SmartAgricultureEmbed";
import { useLocale } from "@/components/Locale";
import {
  catalog,
  catalogCount,
  catalogGroups,
  categoriesIn,
  type CatalogCategory,
} from "@/lib/catalog";
import { categoryName, groupName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

function categoryThumb(category: CatalogCategory) {
  return category.products.map((item) => productPhoto(item.code)).find(Boolean);
}

export function Products() {
  const { lang, t } = useLocale();
  const tr = lang === "tr";
  const [activeGroup, setActiveGroup] = useState<(typeof catalogGroups)[number] | "all">("all");
  const groups =
    activeGroup === "all" ? [...catalogGroups] : catalogGroups.filter((group) => group === activeGroup);

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <h1>{tr ? "Sahaya hazır makineler" : "Field-ready machinery"}</h1>
          <p>
            {tr
              ? "Ekimden hasada doğru ekipmanı seçin; ürün koduyla teklif isteyin."
              : "Choose the right equipment from seeding to harvest; request a quote with the product code."}
          </p>
          <div className="page-intro-meta">
            <span>
              {catalogCount}+ {tr ? "katalog ürünü" : "catalogue models"}
            </span>
            <span>
              {catalog.length} {tr ? "kategori" : "categories"}
            </span>
            <span>{tr ? "Aynı gün teklif hedefi" : "Same-day quote target"}</span>
          </div>
        </div>
      </section>

      <section className="products-browse" id="katalog">
        <div className="wrap">
          <div className="products-browse-head">
            <div>
              <h2 className="block-title">{tr ? "İhtiyacınıza göre seçin" : "Choose by your operation"}</h2>
              <p className="lede">
                {tr
                  ? "Gruplara göre filtreleyin, kategoriyi açın, ürün koduyla teklif isteyin."
                  : "Filter by group, open a category, and request a quote with the product code."}
              </p>
            </div>
            <div className="products-filter" role="tablist" aria-label={tr ? "Ürün grupları" : "Product groups"}>
              <button
                type="button"
                role="tab"
                aria-selected={activeGroup === "all"}
                className={activeGroup === "all" ? "is-active" : undefined}
                onClick={() => startTransition(() => setActiveGroup("all"))}
              >
                {tr ? "Tümü" : "All"}
              </button>
              {catalogGroups.map((group) => (
                <button
                  key={group}
                  type="button"
                  role="tab"
                  aria-selected={activeGroup === group}
                  className={activeGroup === group ? "is-active" : undefined}
                  onClick={() => startTransition(() => setActiveGroup(group))}
                >
                  {groupName(lang, group)}
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-groups">
            {groups.map((group) => {
              const categories = categoriesIn(group);
              const productTotal = categories.reduce((sum, category) => sum + category.products.length, 0);
              return (
                <div key={group} id={`grup-${group}`} className="products-group">
                  <div className="products-group-head">
                    <h3 className="block-title">{groupName(lang, group)}</h3>
                    <p>
                      {categories.length} {tr ? "kategori" : "categories"} · {productTotal}{" "}
                      {tr ? "ürün" : "products"}
                    </p>
                  </div>
                  <ul className="tile-grid tile-grid-4">
                    {categories.map((category) => {
                      const photo = categoryThumb(category);
                      const preview = category.products.slice(0, 3);
                      return (
                        <li key={category.slug}>
                          <Link className="tile tile-sales" href={`/urunler/${category.slug}`}>
                            <span className="tile-photo">
                              {photo ? (
                                <Image
                                  src={withBase(photo)}
                                  alt=""
                                  fill
                                  sizes="(max-width: 900px) 100vw, 33vw"
                                />
                              ) : null}
                              <span className="tile-badge">{category.code}</span>
                            </span>
                            <span className="tile-body">
                              <span className="tile-name">
                                {categoryName(lang, category.slug, category.name)}
                              </span>
                              <span className="tile-meta">{t.productCount(category.products.length)}</span>
                              <span className="tile-codes">
                                {preview.map((product) => (
                                  <span key={product.code}>{product.code}</span>
                                ))}
                                {category.products.length > preview.length ? (
                                  <span>+{category.products.length - preview.length}</span>
                                ) : null}
                              </span>
                              <span className="tile-cta-row">
                                <span className="tile-more">{tr ? "Modelleri gör" : "See models"}</span>
                                <span className="tile-quote">{t.quote}</span>
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {(activeGroup === "all" || activeGroup === "Ekim ve bakım") && (
            <section className="section" style={{ paddingInline: 0 }} id="akilli-tarim">
              <SmartAgricultureEmbed compact showProducts={false} />
            </section>
          )}
        </div>
      </section>

      <section className="section section-dark products-path">
        <div className="wrap">
          <div className="section-head">
            <h2 className="block-title">
              {tr ? "Tekliften teslimata üç adım" : "Three steps from quote to delivery"}
            </h2>
          </div>
          <ol className="products-steps">
            <li>
              <strong>01</strong>
              <h3>{tr ? "Doğru kategoriyi seçin" : "Pick the right category"}</h3>
              <p>
                {tr
                  ? "İş grubunuza uygun makineleri ürün kodlarıyla inceleyin."
                  : "Browse machines for your operation with clear product codes."}
              </p>
            </li>
            <li>
              <strong>02</strong>
              <h3>{tr ? "Teklif isteyin" : "Request a quote"}</h3>
              <p>
                {tr
                  ? "Kod ve modelle e-posta veya WhatsApp üzerinden hızlıca yazın."
                  : "Write us by email or WhatsApp with the code and model you need."}
              </p>
            </li>
            <li>
              <strong>03</strong>
              <h3>{tr ? "Tedarik planlayın" : "Plan supply"}</h3>
              <p>
                {tr
                  ? "Uygunluk, teslimat ve iş ortaklığı seçeneklerini birlikte netleştiririz."
                  : "We align availability, delivery, and partnership options with you."}
              </p>
            </li>
          </ol>
        </div>
      </section>

    </>
  );
}

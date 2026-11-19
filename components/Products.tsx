"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useState } from "react";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import {
  catalog,
  catalogCount,
  catalogGroups,
  categoriesIn,
  type CatalogCategory,
} from "@/lib/catalog";
import { company } from "@/lib/content";
import { categoryName, groupName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

const quoteSubject = encodeURIComponent("Hectare: Ürün teklifi");
const quoteBodyTr = encodeURIComponent(
  "Merhaba, ürün kataloğunuzdan teklif almak istiyorum. İhtiyacım olan makine / ürün kodu:",
);
const quoteBodyEn = encodeURIComponent(
  "Hello, I would like a quotation from your product catalogue. Machine / product code needed:",
);

function categoryThumb(category: CatalogCategory) {
  return category.products.map((item) => productPhoto(item.code)).find(Boolean);
}

export function Products() {
  const { lang, t } = useLocale();
  const tr = lang === "tr";
  const [activeGroup, setActiveGroup] = useState<(typeof catalogGroups)[number] | "all">("all");
  const groups =
    activeGroup === "all" ? [...catalogGroups] : catalogGroups.filter((group) => group === activeGroup);
  const mailto = `mailto:${company.email}?subject=${quoteSubject}&body=${tr ? quoteBodyTr : quoteBodyEn}`;

  return (
    <>
      <section className="page-hero">
        <PageFilm src="/media/video4.mp4" poster="/media/video4-poster.jpg" />
        <div className="page-hero-copy">
          <p className="eyebrow">Hectare</p>
          <h1>{tr ? "Sahaya hazır makineler" : "Field-ready machinery"}</h1>
          <p className="page-hero-lede">
            {tr
              ? "Ekimden hasada doğru ekipmanı seçin."
              : "Choose the right equipment from seeding to harvest."}
          </p>
        </div>
      </section>

      <section className="products-proof">
        <div className="wrap">
          <ul className="products-proof-list">
            <li>
              <strong>{catalogCount}+</strong>
              <span>{tr ? "katalog ürünü" : "catalogue models"}</span>
            </li>
            <li>
              <strong>{catalog.length}</strong>
              <span>{tr ? "ürün kategorisi" : "product categories"}</span>
            </li>
            <li>
              <strong>4</strong>
              <span>{tr ? "iş grubu" : "equipment groups"}</span>
            </li>
            <li>
              <strong>{tr ? "Aynı gün" : "Same day"}</strong>
              <span>{tr ? "teklif dönüşü hedefi" : "quote response target"}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="products-browse" id="katalog">
        <div className="wrap">
          <div className="products-browse-head">
            <div>
              <p className="eyebrow">{tr ? "Katalog" : "Catalogue"}</p>
              <h2 className="block-title">
                {tr ? "İhtiyacınıza göre seçin" : "Choose by your operation"}
              </h2>
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
        </div>
      </section>

      <section className="section section-dark products-path">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{tr ? "Süreç" : "Process"}</p>
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

      <section className="band products-close">
        <PageFilm src="/media/video6.mp4" poster="/media/video6-poster.jpg" />
        <div className="band-copy">
          <h2 id="teklif-title">
            {tr ? "Bu sezon için doğru makineyi kaçırmayın." : "Do not miss the right machine for this season."}
          </h2>
          <p>
            {tr
              ? "Ürün kodunu yazın; stok, tedarik ve fiyat için hemen dönüş yapalım."
              : "Send a product code—we will come back on stock, supply, and pricing."}
          </p>
          <div className="hero-actions" style={{ justifyContent: "flex-end" }}>
            <a className="btn btn-primary" href={mailto}>
              {t.quote}
            </a>
            <a className="btn btn-ghost" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { catalog } from "@/lib/catalog";
import { company } from "@/lib/content";
import { categoryName, groupName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";
import type { CatalogCategory } from "@/lib/catalog";

export function CategoryCatalog({ category }: { category: CatalogCategory }) {
  const { lang, t } = useLocale();
  const tr = lang === "tr";
  const categoryQuote = encodeURIComponent(
    tr
      ? `${category.name} (${category.code}) kategorisinden teklif almak istiyorum.`
      : `I would like a quotation from the ${category.name} (${category.code}) category.`,
  );
  const mailtoCategory = `mailto:${company.email}?subject=${encodeURIComponent(`Hectare: ${category.code}`)}&body=${categoryQuote}`;
  const waCategory = `${company.whatsapp}?text=${categoryQuote}`;
  const related = catalog
    .filter((item) => item.group === category.group && item.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <PageFilm src="/media/video4.mp4" poster="/media/video4-poster.jpg" />
        <div className="page-hero-copy">
          <p className="eyebrow">{groupName(lang, category.group)}</p>
          <h1>{categoryName(lang, category.slug, category.name)}</h1>
          <p className="page-hero-lede">
            {tr
              ? `${category.products.length} model · ${category.code} ürün kodlarıyla aynı gün teklif.`
              : `${category.products.length} models · same-day quotes with ${category.code} product codes.`}
          </p>
        </div>
      </section>

      <section className="cat-sales-proof">
        <div className="wrap">
          <ul>
            <li>
              <strong>{tr ? "Aynı gün" : "Same day"}</strong>
              <span>{tr ? "teklif dönüşü" : "quote response"}</span>
            </li>
            <li>
              <strong>{category.products.length}</strong>
              <span>{tr ? "hazır model" : "ready models"}</span>
            </li>
            <li>
              <strong>{category.code}</strong>
              <span>{tr ? "ürün grubu" : "product group"}</span>
            </li>
            <li>
              <strong>30+</strong>
              <span>{tr ? "yıl tedarik" : "years supply"}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="cat-sales-list" id="modeller">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{tr ? "Modeller" : "Models"}</p>
            <h2 className="block-title">
              {tr ? "Kodu seçin, teklifi başlatın" : "Pick a code, start the quote"}
            </h2>
            <p className="lede">
              {tr
                ? "Her kartta ürün kodu hazır. E-posta veya WhatsApp ile doğrudan yazın."
                : "Every card carries the product code. Write us directly by email or WhatsApp."}
            </p>
          </div>

          <ul className="cat-sales-grid">
            {category.products.map((product, index) => {
              const photo = productPhoto(product.code);
              const subject = encodeURIComponent(`Hectare: ${product.code} ${product.name}`);
              const body = encodeURIComponent(t.quoteBody(product.name, product.code));
              const wa = `${company.whatsapp}?text=${body}`;
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
                    <p>
                      {tr
                        ? "Stok, teslimat ve fiyat için kodla yazın."
                        : "Ask with this code for stock, delivery and pricing."}
                    </p>
                    <div className="cat-sales-card-actions">
                      <a
                        className="btn btn-dark"
                        href={`mailto:${company.email}?subject=${subject}&body=${body}`}
                      >
                        {t.quote}
                      </a>
                      <a className="btn btn-ghost-dark" href={wa} target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section section-dark cat-sales-close">
        <div className="wrap">
          <h2 className="block-title">
            {tr ? "Bu grubu kaçırmadan tedarik edin." : "Secure supply from this group now."}
          </h2>
          <p className="lede">
            {tr
              ? "Ürün kodunu yazın; uygunluk ve fiyat için hemen dönüş yapalım."
              : "Send a product code—we will come back promptly on availability and pricing."}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={mailtoCategory}>
              {t.quote}
            </a>
            <a className="btn btn-ghost" href={waCategory} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <Link className="btn btn-ghost" href="/urunler">
              {tr ? "Tüm ürünler" : "All products"}
            </Link>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section section-muted">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">{tr ? "Aynı grup" : "Same group"}</p>
              <h2 className="block-title">
                {tr ? "Birlikte değerlendirin" : "Review together"}
              </h2>
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

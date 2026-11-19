"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/Locale";
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
      ? `${category.name} kategorisinden teklif almak istiyorum.`
      : `I would like a quotation from the ${category.name} category.`,
  );

  return (
    <>
      <section className="section category-hero">
        <div className="wrap">
          <p className="eyebrow">{groupName(lang, category.group)}</p>
          <div className="category-hero-row">
            <div>
              <h1 className="block-title">
                {categoryName(lang, category.slug, category.name)}
              </h1>
              <p className="lede" style={{ marginTop: "1rem" }}>
                {tr
                  ? `${category.code} grubunda ${category.products.length} model. İhtiyacınızı seçin, aynı gün teklif isteyin.`
                  : `${category.products.length} models in the ${category.code} group. Pick what you need and request a same-day quote.`}
              </p>
            </div>
            <div className="hero-actions">
              <a
                className="btn btn-dark"
                href={`mailto:${company.email}?subject=${encodeURIComponent(`Hectare: ${category.code}`)}&body=${categoryQuote}`}
              >
                {t.quote}
              </a>
              <a
                className="btn btn-ghost-dark"
                href={`${company.whatsapp}?text=${categoryQuote}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ul className="product-sales-grid">
            {category.products.map((product) => {
              const photo = productPhoto(product.code);
              const subject = encodeURIComponent(`Hectare: ${product.code} ${product.name}`);
              const body = encodeURIComponent(t.quoteBody(product.name, product.code));
              const wa = `${company.whatsapp}?text=${body}`;
              return (
                <li key={product.code} className="product-sales-card">
                  <div className="product-sales-media">
                    {photo ? (
                      <Image src={withBase(photo)} alt="" fill sizes="(max-width: 900px) 100vw, 280px" />
                    ) : null}
                  </div>
                  <div className="product-sales-body">
                    <p className="product-sales-code">{product.code}</p>
                    <h2>{product.name}</h2>
                    <p>
                      {tr
                        ? "Stok, tedarik süresi ve fiyat için ürün koduyla yazın."
                        : "Ask with this product code for stock, lead time, and pricing."}
                    </p>
                    <div className="product-sales-actions">
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

          <div className="category-back">
            <Link className="btn btn-dark" href="/urunler">
              {tr ? "Tüm ürünler" : "All products"}
            </Link>
            <a className="btn btn-ghost-dark" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

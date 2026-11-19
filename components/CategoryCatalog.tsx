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

  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 3rem)" }}>
      <div className="wrap">
        <p className="eyebrow">{groupName(lang, category.group)}</p>
        <h1 className="block-title" style={{ marginTop: "0.5rem" }}>
          {categoryName(lang, category.slug, category.name)}
        </h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          {t.productCount(category.products.length)}
        </p>

        <div style={{ overflowX: "auto", marginTop: "2rem" }}>
          <table className="catalog-table">
            <thead>
              <tr>
                <th>{lang === "en" ? "Photo" : "Görsel"}</th>
                <th>{lang === "en" ? "Code" : "Kod"}</th>
                <th>{lang === "en" ? "Product" : "Ürün"}</th>
                <th>{lang === "en" ? "Action" : "İşlem"}</th>
              </tr>
            </thead>
            <tbody>
              {category.products.map((product) => {
                const photo = productPhoto(product.code);
                const subject = encodeURIComponent(`Hectare: ${product.code} ${product.name}`);
                const body = encodeURIComponent(t.quoteBody(product.name, product.code));
                return (
                  <tr key={product.code}>
                    <td>
                      <div className="product-thumb">
                        {photo ? <Image src={withBase(photo)} alt="" fill sizes="72px" /> : null}
                      </div>
                    </td>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>
                      <a
                        className="btn btn-dark"
                        href={`mailto:${company.email}?subject=${subject}&body=${body}`}
                      >
                        {t.quote}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <Link className="btn btn-dark" href="/urunler">
            {lang === "en" ? "All products" : "Tüm ürünler"}
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/Locale";
import { company } from "@/lib/content";
import type { CatalogCategory } from "@/lib/catalog";
import { categoryName, groupName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

export function CategoryCatalog({ category }: { category: CatalogCategory }) {
  const { lang, t } = useLocale();
  return (
    <section className="section page" aria-labelledby="kategori-title">
      <div className="wrap">
        <p className="kicker">
          <Link href="/urunler">{t.productsLink}</Link>
          <span aria-hidden="true"> / </span>
          {groupName(lang, category.group)}
        </p>
        <h1 id="kategori-title" className="block-title">
          {categoryName(lang, category.slug, category.name)}
        </h1>
        <ul className="tile-grid">
          {category.products.map((product) => {
            const subject = encodeURIComponent(`Hectare: ${product.code} ${product.name}`);
                const body = encodeURIComponent(t.quoteBody(product.name, product.code));
            return (
              <li key={product.code} id={product.code}>
                <article className="tile tile--static">
                  {productPhoto(product.code) ? (
                    <span className="tile-photo">
                      <Image
                        src={withBase(productPhoto(product.code)!)}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                    </span>
                  ) : (
                    <span className="tile-mark">{product.code}</span>
                  )}
                  <p className="tile-code">{product.code}</p>
                  <p className="tile-name">{product.name}</p>
                  <a
                    className="card-more"
                    href={`mailto:${company.email}?subject=${subject}&body=${body}`}
                  >
                    {t.quote}
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

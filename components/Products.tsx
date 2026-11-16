import Image from "next/image";
import { categories, products } from "@/lib/content";
import { withBase } from "@/lib/paths";
import { InquiryLink } from "@/components/InquiryLink";

export function Products() {
  return (
    <section className="section page" aria-labelledby="urunler-title">
      <div className="wrap">
        <p className="kicker">Ekipman</p>
        <h1 id="urunler-title">Ürünler</h1>
        <p className="lede">
          Toprak hazırlığından hasada, yemlemeden iş makinelerine kadar tarımsal ekipman ve yedek
          parça tedariki. Aşağıdaki teknik ayrıntılar yayımlanmış ürün bilgilerinden alınmıştır.
        </p>
        <div className="product-list">
          {products.map((product, index) => (
            <article className="product" id={product.slug} key={product.slug}>
              <div className="product-media">
                <Image
                  src={withBase(product.image)}
                  alt={product.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
              </div>
              <div className="product-copy">
                <p className="kicker">
                  {String(index + 1).padStart(2, "0")} / {product.brand}
                </p>
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p>{product.summary}</p>
                <ul className="specs">
                  {product.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <InquiryLink product={product.name} />
              </div>
            </article>
          ))}
        </div>
        <div className="category-block">
          <h3>Çalışma alanları</h3>
          <ol className="categories">
            {categories.map((category, index) => (
              <li key={category}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{category}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

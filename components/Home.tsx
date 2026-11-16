"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroFilm } from "@/components/HeroFilm";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { catalogGroups, categoriesIn } from "@/lib/catalog";
import { trade } from "@/lib/content";
import { categoryName, countryName, groupName, navName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

const facts = {
  tr: [
    {
      title: "Düşük maliyet",
      text: "Mümkün olan en düşük fiyat ve mevcut ürün seçeneğiyle tedarik ediyoruz.",
    },
    {
      title: "Hızlı teslimat",
      text: "Stok ve teslimat taleplerine kısa sürede yanıt veriyoruz.",
    },
    {
      title: "Yüksek kalite",
      text: "Ekipmanı, kullanım koşullarına uygunluğuyla seçiyoruz.",
    },
  ],
  en: [
    {
      title: "Low cost",
      text: "We supply at the lowest practical price and from the options available.",
    },
    {
      title: "Fast delivery",
      text: "We respond promptly to stock and delivery requests.",
    },
    {
      title: "High quality",
      text: "We select equipment for its suitability to the conditions of use.",
    },
  ],
};

const homeGroups = catalogGroups.filter((group) => group !== "Traktör ekipmanları");

function categoriesForHome(group: string) {
  const categories = categoriesIn(group).filter((category) => category.code !== "AKT");
  if (group !== "Ot hasadı") return categories;
  return [...categories]
    .sort((a, b) => b.products.length - a.products.length)
    .slice(0, 3);
}

export function Home() {
  const { lang, t } = useLocale();
  return (
    <main>
      <h1 className="sr-only">Hectare AŞ</h1>
      <HeroFilm />
      <div id="icerik" tabIndex={-1}>
        {homeGroups.map((group) => {
          const sectionClass =
            group === "Ekim ve bakım"
              ? "section section--near-next"
              : group === "Toprak işleme"
                ? "section section--near-prev"
                : "section";
          return (
            <section className={sectionClass} key={group} aria-labelledby={`grup-${group}`}>
              <div className="wrap">
                <h2 id={`grup-${group}`} className="block-title">
                  {groupName(lang, group)}
                </h2>
                <ul className="tile-grid">
                  {categoriesForHome(group).map((category) => {
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
          );
        })}

        <section className="photo-band" aria-labelledby="saha-title">
          <PageFilm src="/media/video6.mp4" poster="/media/video6-poster.jpg" />
          <div className="photo-band-copy">
            <h2 id="saha-title">
              {lang === "en"
                ? "We have supplied machinery for more than thirty years."
                : "Otuz yıldan uzun süredir tedarik ediyoruz."}
            </h2>
            <p>
              {lang === "en"
                ? "Agricultural machinery, construction equipment and international trade. We trade construction machinery and export it to international markets."
                : "Tarım makineleri, iş makineleri ve uluslararası ticaret. İş makineleri ticareti yapıyor, ihracatını da gerçekleştiriyoruz."}
            </p>
            <Link className="text-link" href="/kurumsal">
              {navName(lang, "/kurumsal", "Kurumsal")}
            </Link>
          </div>
        </section>

        <section className="geo" aria-labelledby="cografya-title">
          <div className="wrap">
            <div className="geo-head">
              <div>
                <p className="kicker">Hectare Foreign Trade</p>
                <h2 id="cografya-title">
                  {lang === "en" ? "Trade geography" : "Ticaret coğrafyası"}
                </h2>
              </div>
              <Link className="geo-link" href="/ticaret">
                {navName(lang, "/ticaret", "İştiraklerimiz")}
              </Link>
            </div>
            <ul className="geo-list">
              {trade.map((item) => (
                <li key={item.country}>{countryName(lang, item.country)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="duzen-title">
          <div className="wrap">
            <h2 id="duzen-title" className="block-title">
              {lang === "en" ? "How we work" : "Çalışma ilkelerimiz"}
            </h2>
            <ul className="fact-grid">
              {facts[lang].map((fact) => (
                <li key={fact.title}>
                  <h3>{fact.title}</h3>
                  <p>{fact.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="evler-title">
          <div className="wrap">
            <h2 id="evler-title" className="block-title">
              {lang === "en" ? "Turkey distributorships" : "Türkiye distribütörlükleri"}
            </h2>
            <div className="brand-tiles">
              <article className="brand-tile">
                <div className="brand-tile-media">
                  <Image
                    src={withBase("/media/products/zirkon-side.jpg")}
                    alt="Lemken Zirkon 8, traktörün yanında tarlada"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="kicker">2022</p>
                  <h3>LEMKEN</h3>
                  <p>
                    {lang === "en"
                      ? "Turkey distributorship began in 2022."
                      : "Türkiye distribütörlüğü 2022’de başladı."}
                  </p>
                  <Link className="card-more" href="/markalar">
                    {t.view}
                  </Link>
                </div>
              </article>
              <article className="brand-tile">
                <div className="brand-tile-media">
                  <Image
                    src={withBase("/media/products/fieldking-mark.png")}
                    alt="Fieldking Regular Multi Speed rotovatör"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="kicker">1978 / 2022</p>
                  <h3>FIELDKING</h3>
                  <p>
                    {lang === "en"
                      ? "Turkey distributorship began in 2022. ISO 9001:2008 is Fieldking’s certificate."
                      : "Türkiye distribütörlüğü 2022 yılında başlamıştır. ISO 9001:2008, Fieldking sertifikasıdır."}
                  </p>
                  <Link className="card-more" href="/markalar">
                    {t.view}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

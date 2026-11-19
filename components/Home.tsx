"use client";

import Image from "next/image";
import Link from "next/link";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { catalogGroups, categoriesIn } from "@/lib/catalog";
import { trade } from "@/lib/content";
import { categoryName, countryName, groupName, navName } from "@/lib/i18n";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

const homeGroups = catalogGroups.filter((group) => group !== "Traktör ekipmanları");

function categoriesForHome(group: string) {
  const categories = categoriesIn(group).filter((category) => category.code !== "AKT");
  if (group !== "Ot hasadı") return categories;
  return [...categories].sort((a, b) => b.products.length - a.products.length).slice(0, 3);
}

export function Home() {
  const { lang, t } = useLocale();

  return (
    <main>
      <h1 className="sr-only">Hectare AŞ</h1>

      <section className="hero" aria-label={lang === "en" ? "Introduction" : "Tanıtım"}>
        <PageFilm src="/media/unver-hero.mp4" poster="/media/unver-hero-poster.jpg" className="hero-media" />
        <div className="hero-copy">
          <p className="eyebrow">Hectare AŞ · Hectare Foreign Trade</p>
          <h1>
            {lang === "en" ? "We set the direction of supply." : "Tedarikte yönü biz belirliyoruz."}
          </h1>
          <p className="hero-sub">
            {lang === "en" ? "Agricultural and construction machinery" : "Tarım ve iş makineleri"}
          </p>
          <p className="hero-lede">
            {lang === "en"
              ? "Wholesale supply, international trade and distributorships built on more than thirty years of sector experience."
              : "Otuz yılı aşkın sektörel tecrübeyle toptan tedarik, uluslararası ticaret ve distribütörlük."}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/urunler">
              {t.viewProducts}
            </Link>
            <Link className="btn btn-ghost" href="/iletisim">
              {lang === "en" ? "Contact" : "İletişim"}
            </Link>
          </div>
        </div>
      </section>

      <div id="icerik" tabIndex={-1}>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">{lang === "en" ? "Scale" : "Ölçek"}</p>
              <h2>{lang === "en" ? "A supply structure that carries the field forward." : "Sahayı ileri taşıyan tedarik yapısı."}</h2>
            </div>
            <div className="stat-row">
              <article>
                <strong>30+</strong>
                <span>{lang === "en" ? "Years of sector experience" : "Yıllık sektör tecrübesi"}</span>
              </article>
              <article>
                <strong>10+</strong>
                <span>{lang === "en" ? "Years of foreign trade" : "Yıllık dış ticaret"}</span>
              </article>
              <article>
                <strong>2022</strong>
                <span>{lang === "en" ? "LEMKEN & FIELDKING Turkey" : "LEMKEN & FIELDKING Türkiye"}</span>
              </article>
              <article>
                <strong>24</strong>
                <span>{lang === "en" ? "Countries in our network" : "Ülkede ticari ağ"}</span>
              </article>
            </div>
          </div>
        </section>

        {homeGroups.map((group) => (
          <section
            className={
              group === "Ekim ve bakım"
                ? "section section-muted"
                : group === "Toprak işleme"
                  ? "section section-muted"
                  : "section"
            }
            style={
              group === "Ekim ve bakım"
                ? { paddingBottom: "1.5rem" }
                : group === "Toprak işleme"
                  ? { paddingTop: "1.5rem" }
                  : undefined
            }
            key={group}
            aria-labelledby={`grup-${group}`}
          >
            <div className="wrap">
              <div className="section-head">
                <h2 id={`grup-${group}`}>{groupName(lang, group)}</h2>
              </div>
              <ul className="tile-grid">
                {categoriesForHome(group).map((category) => {
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
                          <span className="tile-name">{categoryName(lang, category.slug, category.name)}</span>
                          <span className="tile-meta">{t.productCount(category.products.length)}</span>
                          <span className="tile-more">{t.view}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ))}

        <section className="band" aria-labelledby="saha-title">
          <PageFilm src="/media/video6.mp4" poster="/media/video6-poster.jpg" className="hero-media" />
          <div className="band-copy">
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
            <Link className="btn btn-primary" href="/kurumsal">
              {navName(lang, "/kurumsal", "Kurumsal")}
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Hectare Foreign Trade</p>
              <h2>{lang === "en" ? "Trade geography" : "Ticaret coğrafyası"}</h2>
              <p className="lede">
                {lang === "en"
                  ? "Commercial relationships across markets, manufacturers and supply channels."
                  : "Pazarlar, üreticiler ve tedarik kanalları arasında kurduğumuz ticari ilişkiler."}
              </p>
            </div>
            <ul className="geo-list">
              {trade.map((item) => (
                <li key={item.country}>{countryName(lang, item.country)}</li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-dark" href="/ticaret">
                {navName(lang, "/ticaret", "İştiraklerimiz")}
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="wrap">
            <div className="section-head">
              <h2>{lang === "en" ? "How we work" : "Çalışma ilkelerimiz"}</h2>
            </div>
            <ul className="fact-grid">
              {(lang === "en"
                ? [
                    ["Low cost", "We supply at the lowest practical price and from the options available."],
                    ["Fast delivery", "We respond promptly to stock and delivery requests."],
                    ["High quality", "We select equipment for its suitability to the conditions of use."],
                  ]
                : [
                    ["Düşük maliyet", "Mümkün olan en düşük fiyat ve mevcut ürün seçeneğiyle tedarik ediyoruz."],
                    ["Hızlı teslimat", "Stok ve teslimat taleplerine kısa sürede yanıt veriyoruz."],
                    ["Yüksek kalite", "Ekipmanı, kullanım koşullarına uygunluğuyla seçiyoruz."],
                  ]
              ).map(([title, text]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>{lang === "en" ? "Turkey distributorships" : "Türkiye distribütörlükleri"}</h2>
            </div>
            <div className="brand-grid">
              <article className="brand-card">
                <div className="brand-card-media">
                  <Image
                    src={withBase("/media/products/zirkon-side.jpg")}
                    alt="Lemken Zirkon 8"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div className="brand-card-copy">
                  <p className="eyebrow">2022</p>
                  <h3>LEMKEN</h3>
                  <p>
                    {lang === "en"
                      ? "Turkey distributorship began in 2022."
                      : "Türkiye distribütörlüğü 2022’de başladı."}
                  </p>
                  <Link className="btn btn-dark" href="/markalar">
                    {t.view}
                  </Link>
                </div>
              </article>
              <article className="brand-card">
                <div className="brand-card-media">
                  <Image
                    src={withBase("/media/products/fieldking-mark.jpg")}
                    alt="Fieldking rotovatör"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                </div>
                <div className="brand-card-copy">
                  <p className="eyebrow">1978 / 2022</p>
                  <h3>FIELDKING</h3>
                  <p>
                    {lang === "en"
                      ? "Turkey distributorship began in 2022. ISO 9001:2008 is Fieldking’s certificate."
                      : "Türkiye distribütörlüğü 2022’de başladı. ISO 9001:2008 Fieldking sertifikasıdır."}
                  </p>
                  <Link className="btn btn-dark" href="/markalar">
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

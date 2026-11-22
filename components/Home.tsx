"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeCatalogRail } from "@/components/HomeCatalogRail";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { catalogGroups, categoriesIn } from "@/lib/catalog";
import { company, trade } from "@/lib/content";
import {
  heavyEquipmentCategories,
  heavyEquipmentExport,
} from "@/lib/heavy-equipment";
import { countryName, groupName, navName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";

function categoriesForHome(group: string) {
  return categoriesIn(group).filter((category) => category.code !== "AKT");
}

const homeGroups = [...catalogGroups]
  .map((group) => {
    const categories = categoriesForHome(group);
    const productCount = categories.reduce((sum, category) => sum + category.products.length, 0);
    return { group, categories, productCount };
  })
  .sort((a, b) => b.productCount - a.productCount || b.categories.length - a.categories.length);

export function Home() {
  const { lang, t } = useLocale();
  const tr = lang === "tr";
  const quoteHref = `${company.whatsapp}?text=${encodeURIComponent(
    tr ? "Merhaba, teklif almak istiyorum." : "Hello, I would like a quotation.",
  )}`;

  return (
    <main>
      <section className="hero" aria-label={tr ? "Tanıtım" : "Introduction"}>
        <PageFilm src="/media/unver-hero.mp4" poster="/media/unver-hero-poster.jpg" className="hero-media" />
        <div className="hero-copy">
          <p className="hero-brand">Hectare</p>
          <h1>{tr ? "Tedarikte yönü biz belirliyoruz." : "We set the direction of supply."}</h1>
          <p className="hero-lede">
            {tr
              ? "Tarım makineleri ve iş makinelerinde otuz yılı aşkın tedarik, uluslararası ticaret ve distribütörlük."
              : "Agricultural and construction machinery — wholesale supply, international trade and distributorships with more than thirty years of experience."}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/urunler">
              {t.productsLink}
            </Link>
            <Link className="btn btn-ghost" href="/is-makineleri">
              {navName(lang, "/is-makineleri", "İş Makineleri")}
            </Link>
          </div>
        </div>
      </section>

      <div id="icerik" tabIndex={-1}>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>{tr ? "İki hat, tek tedarik ortağı." : "Two lines, one supply partner."}</h2>
              <p className="lede">
                {tr
                  ? "Tarım ekipmanları ve iş makinelerinde toptan tedarik ile ihracat."
                  : "Wholesale supply and export across agricultural equipment and construction machinery."}
              </p>
            </div>
            <div className="lane-grid">
              <Link className="lane-panel" href="/urunler">
                <Image
                  src={withBase("/media/video4-poster.jpg")}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <h3>{tr ? "Tarım ekipmanları" : "Agricultural equipment"}</h3>
                <p>
                  {tr
                    ? "Ekimden hasada katalog ürünleri, hızlı teklif."
                    : "Catalogue equipment from seeding to harvest, ready to quote."}
                </p>
                <span>{tr ? "Kataloğa git" : "Open catalogue"}</span>
              </Link>
              <Link className="lane-panel" href="/is-makineleri">
                <Image
                  src={withBase("/media/heavy/hero-poster.jpg")}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <h3>{tr ? "İş makineleri" : "Heavy equipment"}</h3>
                <p>
                  {tr
                    ? "Ekskavatörden forklifte ihracat ve sevkiyat."
                    : "From excavators to forklifts — export and shipping."}
                </p>
                <span>{tr ? "Makineyi seç" : "Browse machines"}</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-muted home-catalog" aria-label={t.productsLink}>
          <div className="wrap">
            <div className="section-head">
              <h2>{tr ? "Tarım ekipmanları." : "Agricultural equipment."}</h2>
              <p className="lede">
                {tr
                  ? "Gruplara göre seçin, ürün koduyla teklif isteyin."
                  : "Choose by group and request a quote with the product code."}
              </p>
            </div>
            {homeGroups.map(({ group, categories }) => (
              <HomeCatalogRail
                key={group}
                groupId={`grup-${group}`}
                groupLabel={groupName(lang, group)}
                categories={categories}
              />
            ))}
          </div>
        </section>

        <section className="section" aria-label={navName(lang, "/is-makineleri", "İş Makineleri")}>
          <div className="wrap">
            <div className="section-head">
              <h2>{tr ? "İş makineleri." : "Heavy equipment."}</h2>
              <p className="lede">
                {tr
                  ? "Ekskavatör, beko loder, lastik yükleyici, mini ekskavatör ve forklift tedariki; Türkiye’den uluslararası sevkiyat."
                  : "Excavators, backhoe loaders, wheel loaders, mini excavators and forklifts — sourced in Türkiye and shipped worldwide."}
              </p>
            </div>
            <ul className="he-machine-grid">
              {heavyEquipmentCategories.map((item) => (
                <li key={item.slug}>
                  <Link href={`/is-makineleri/${item.slug}`} className="he-machine-card he-machine-card--media">
                    <span className="he-machine-card-media">
                      <Image
                        src={withBase(item.image)}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                    </span>
                    <span className="he-machine-card-body">
                      <h3>{item.title[lang]}</h3>
                      <p>{item.card[lang]}</p>
                      <span>{tr ? "Detayları gör" : "View details"}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link className="btn btn-dark" href="/is-makineleri">
                {navName(lang, "/is-makineleri", "İş Makineleri")}
              </Link>
              <Link className="btn btn-primary" href={`/is-makineleri/${heavyEquipmentExport.slug}`}>
                {tr ? "İhracat ve sevkiyat" : "Export & shipping"}
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="wrap">
            <div className="section-head">
              <h2>{tr ? "Türkiye distribütörlükleri" : "Turkey distributorships"}</h2>
              <p className="lede">
                {tr
                  ? "2022’den bu yana LEMKEN ve FIELDKING Türkiye."
                  : "LEMKEN and FIELDKING in Turkey since 2022."}
              </p>
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
                  <h3>LEMKEN</h3>
                  <p>
                    {tr
                      ? "Lemken, 240 yılı aşkın süredir faaliyet gösteren bir tarım makineleri markasıdır. Türkiye distribütörlüğüne 2022’de başladık."
                      : "Lemken is an agricultural machinery brand with more than 240 years of history. We became the Turkey distributor in 2022."}
                  </p>
                  <Link className="btn btn-dark" href="/kurumsal#markalar">
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
                  <h3>FIELDKING</h3>
                  <p>
                    {tr
                      ? "Fieldking, 1978’de kurulmuş bir tarım ekipmanı üreticisidir. Türkiye distribütörlüğüne 2022’de başladık. ISO 9001:2008 Fieldking sertifikasıdır."
                      : "Fieldking is an agricultural equipment manufacturer founded in 1978. We became the Turkey distributor in 2022. ISO 9001:2008 belongs to Fieldking."}
                  </p>
                  <Link className="btn btn-dark" href="/kurumsal#markalar">
                    {t.view}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>{tr ? "Ticaret coğrafyası" : "Trade geography"}</h2>
              <p className="lede">
                {tr
                  ? "Pazarlar, üreticiler ve tedarik kanalları arasında kurduğumuz ticari ilişkiler."
                  : "Commercial relationships across markets, manufacturers and supply channels."}
              </p>
            </div>
            <ul className="geo-list">
              {trade.map((item) => (
                <li key={item.country}>{countryName(lang, item.country)}</li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-dark" href="/kurumsal#ticaret">
                {tr ? "Ticaret ağını gör" : "See trade network"}
              </Link>
            </div>
          </div>
        </section>

        <section className="close-band">
          <div className="wrap">
            <h2>{tr ? "Teklif için yazın." : "Write us for a quote."}</h2>
            <p>
              {tr
                ? "Tarım ekipmanı veya iş makinesi için telefon, e-posta ya da WhatsApp ile yazın."
                : "Write us by phone, email or WhatsApp for agricultural equipment or heavy machinery."}
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={quoteHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${company.phoneTel}`}>
                {company.phoneDisplay}
              </a>
              <a className="btn btn-ghost" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

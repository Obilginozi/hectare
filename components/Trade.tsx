"use client";

import { PageFilm } from "@/components/PageFilm";
import { TradeWorldMap } from "@/components/TradeWorldMap";
import { useLocale } from "@/components/Locale";
import { trade } from "@/lib/content";
import { countryName } from "@/lib/i18n";

export function Trade() {
  const { lang } = useLocale();
  const tr = lang === "tr";
  const named = trade.filter((item) => item.works.length > 0);
  const places = trade.filter((item) => item.works.length === 0);

  return (
    <>
      <section className="page-hero">
        <PageFilm src="/media/video2.mp4" poster="/media/video2-poster.jpg" />
        <div className="page-hero-copy">
          <p className="eyebrow">Hectare Foreign Trade</p>
          <h1>{tr ? "İştiraklerimiz" : "Our Partnerships"}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>
              {tr
                ? "Sektörel deneyimden uluslararası ticarete"
                : "From sector experience to international trade"}
            </h2>
          </div>
          <div className="split-copy">
            {(tr
              ? [
                  "Tarım makineleri ve iş makineleri sektöründeki otuz yılı aşkın deneyimimiz, ürünleri ve kullanım ihtiyaçlarını doğru değerlendirmemizi sağlayan önemli bir birikim oluşturmuştur.",
                  "Hectare Foreign Trade bünyesinde yürüttüğümüz on yılı aşkın uluslararası ticaret faaliyetimizle bu birikimi uluslararası pazarlara taşıyoruz. Farklı ülkeler, üreticiler ve tedarik kanallarıyla geliştirdiğimiz ticari ilişkiler sayesinde müşterilerimize daha geniş ürün seçenekleri ve rekabetçi tedarik imkânları sunuyoruz.",
                  "Tedarik süreçlerimizi yalnızca ürün ve fiyat üzerinden değil; kalite, kullanım koşulları, erişilebilirlik, teslimat ve uzun vadeli verimlilik kriterleri doğrultusunda değerlendiriyoruz.",
                ]
              : [
                  "More than thirty years of experience in agricultural and construction machinery helps us assess products and operating needs accurately.",
                  "Through more than ten years of international trade under Hectare Foreign Trade, we carry this foundation into international markets and offer wider product choice and competitive supply options.",
                  "We evaluate supply not only by product and price, but also by quality, conditions of use, accessibility, delivery and long-term efficiency.",
                ]
            ).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <TradeWorldMap />

          <ul className="atlas">
            {named.map((item) => (
              <li key={item.country}>
                <h3>{countryName(lang, item.country)}</h3>
                <p>{item.works.join(" · ")}</p>
              </li>
            ))}
          </ul>

          {places.length ? (
            <div style={{ marginTop: "2.5rem" }}>
              <p className="eyebrow">{tr ? "Diğer ülkeler" : "Other countries"}</p>
              <ul className="geo-list" style={{ marginTop: "0.85rem" }}>
                {places.map((item) => (
                  <li key={item.country}>{countryName(lang, item.country)}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

"use client";

import { PageFilm } from "@/components/PageFilm";
import { TradeWorldMap } from "@/components/TradeWorldMap";
import { useLocale } from "@/components/Locale";
import { trade } from "@/lib/content";
import { countryName } from "@/lib/i18n";

export function Trade() {
  const { lang, t } = useLocale();
  const named = trade.filter((item) => item.works.length > 0);
  const places = trade.filter((item) => item.works.length === 0);

  return (
    <>
      <section className="page-hero page-hero--film" aria-labelledby="ticaret-title">
        <PageFilm src="/media/video2.mp4" poster="/media/video2-poster.jpg" />
        <div className="page-hero-copy wrap">
          <h1 id="ticaret-title">{lang === "en" ? "Our Partnerships" : "İştiraklerimiz"}</h1>
        </div>
      </section>

      <section className="section essay essay--air">
        <div className="wrap">
          <div className="essay-chapter">
            <h2 className="block-title">
              {lang === "en"
                ? "From sector experience to international trade"
                : "Sektörel deneyimden uluslararası ticarete"}
            </h2>
            <div className="essay-body">
              {(lang === "en"
                ? [
                    "More than thirty years of experience in agricultural and construction machinery has built a foundation that helps us assess products and operating needs accurately.",
                    "Through more than ten years of international trade under Hectare Foreign Trade, we carry this foundation into international markets. The commercial relationships we have developed with different countries, manufacturers and supply channels allow us to offer customers a wider product choice and competitive supply options.",
                    "We evaluate supply not only by product and price, but also by quality, conditions of use, accessibility, delivery and long-term efficiency.",
                  ]
                : [
                    "Tarım makineleri ve iş makineleri sektöründeki otuz yılı aşkın deneyimimiz, ürünleri ve kullanım ihtiyaçlarını doğru değerlendirmemizi sağlayan önemli bir birikim oluşturmuştur.",
                    "Hectare Foreign Trade bünyesinde yürüttüğümüz on yılı aşkın uluslararası ticaret faaliyetimizle bu birikimi uluslararası pazarlara taşıyoruz. Farklı ülkeler, üreticiler ve tedarik kanallarıyla geliştirdiğimiz ticari ilişkiler sayesinde müşterilerimize daha geniş ürün seçenekleri ve rekabetçi tedarik imkânları sunuyoruz.",
                    "Tedarik süreçlerimizi yalnızca ürün ve fiyat üzerinden değil; kalite, kullanım koşulları, erişilebilirlik, teslimat ve uzun vadeli verimlilik kriterleri doğrultusunda değerlendiriyoruz.",
                  ]
              ).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <TradeWorldMap />

          <ul className="atlas">
            {named.map((item) => (
              <li key={item.country}>
                <h2>{countryName(lang, item.country)}</h2>
                <p>{item.works.join(" · ")}</p>
              </li>
            ))}
          </ul>

          <div className="places">
            <h2 className="block-title">{t.otherCountries}</h2>
            <ul className="atlas atlas--places">
              {places.map((item) => (
                <li key={item.country}>
                  <h3>{countryName(lang, item.country)}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

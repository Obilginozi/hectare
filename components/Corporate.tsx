"use client";

import Image from "next/image";
import { TradeWorldMap } from "@/components/TradeWorldMap";
import { useLocale } from "@/components/Locale";
import { trade } from "@/lib/content";
import { countryName } from "@/lib/i18n";
import { withBase } from "@/lib/paths";

export function Corporate() {
  const { lang } = useLocale();
  const tr = lang === "tr";
  const named = trade.filter((item) => item.works.length > 0);
  const places = trade.filter((item) => item.works.length === 0);

  return (
    <>
      <section className="page-intro">
        <div className="wrap">
          <p className="eyebrow" style={{ color: "var(--brass-soft)" }}>
            Hectare AŞ
          </p>
          <h1>{tr ? "Kurumsal" : "Corporate"}</h1>
          <p>
            {tr
              ? "Tarım ve iş makinelerinde güçlü tedarik, güvenilir iş ortaklığı."
              : "Strong supply and a reliable partnership in agricultural and construction machinery."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split-copy">
            {(tr
              ? [
                  "Hectare AŞ, otuz yılı aşkın sektörel tecrübesiyle tarım makineleri, tarımsal ekipmanlar, iş makineleri ve yedek parça alanlarında Türkiye genelindeki işletmelere toptan tedarik çözümleri sunan bir dış ticaret ve tedarik şirketidir.",
                  "Kurulduğumuz günden bu yana sektörde edindiğimiz bilgi birikimini, güçlü tedarik ağımız ve uluslararası ticaret deneyimimizle birleştirerek müşterilerimizin ihtiyaçlarına yönelik sürdürülebilir çözümler geliştiriyoruz.",
                  "Traktörlerden tarımsal ekipmanlara, iş makinelerinden yedek parçalara kadar geniş bir ürün grubunda; doğru ürünü, doğru koşullarda ve rekabetçi fiyatlarla müşterilerimizle buluşturuyoruz.",
                  "Yalnızca ürün tedarik etmeyi değil; işletmelerin satın alma süreçlerini kolaylaştırmayı, alternatiflerini artırmayı ve operasyonel ihtiyaçlarına değer katan bir tedarik yapısı oluşturmayı hedefliyoruz.",
                ]
              : [
                  "Hectare AŞ is a foreign-trade and supply company that, with more than thirty years of sector experience, provides wholesale supply solutions in agricultural machinery, equipment, construction machinery and spare parts across Turkey.",
                  "Since our foundation we have combined sector knowledge with our supply network and international trade experience to develop durable solutions for our customers’ needs.",
                  "Across a broad product range we bring the right product to customers under the right conditions and at competitive prices.",
                  "Our aim is not only to supply products, but to make purchasing easier, widen options and build a supply structure that adds value.",
                ]
            ).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="measure-grid">
            {(tr
              ? [
                  ["30+", "Yıllık sektör tecrübesi", "Tarım ve iş makineleri sektöründe."],
                  ["10+", "Yıllık dış ticaret deneyimi", "Uluslararası tedarik ve ticaret."],
                  ["2022", "Distribütörlük başlangıcı", "LEMKEN ve FIELDKING Türkiye."],
                  ["Türkiye", "Geniş tedarik ağı", "Türkiye genelinde toptan tedarik."],
                ]
              : [
                  ["30+", "Years of sector experience", "In agricultural and construction machinery."],
                  ["10+", "Years of foreign trade", "International supply and trade."],
                  ["2022", "Distributorship start", "LEMKEN and FIELDKING in Turkey."],
                  ["Turkey", "Wide supply network", "Wholesale supply across Turkey."],
                ]
            ).map(([figure, title, text]) => (
              <li key={figure}>
                <strong>{figure}</strong>
                <b>{title}</b>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="split-copy">
            <article>
              <p className="eyebrow">{tr ? "Vizyonumuz" : "Our Vision"}</p>
              <h2 className="block-title">
                {tr
                  ? "Tedarikte İlk Tercih Edilen İş Ortağı Olmak."
                  : "To Be The Preferred Partner In Supply."}
              </h2>
              <p>
                {tr
                  ? "Tarım ve iş makineleri sektöründe müşterilerimizin ihtiyaç duyduğu ürünlere kolayca ulaşabildiği, alternatifleri karşılaştırabildiği ve güvenle satın alma kararı verebildiği en müşteri odaklı tedarik şirketi olmak."
                  : "To be the most customer-focused supply company where customers can reach products, compare alternatives and purchase with confidence."}
              </p>
            </article>
            <article>
              <p className="eyebrow">{tr ? "Misyonumuz" : "Our Mission"}</p>
              <h2 className="block-title">
                {tr
                  ? "En Doğru Ürünü, En Uygun Koşullarda Erişilebilir Kılmak."
                  : "To Make The Right Product Accessible Under The Right Conditions."}
              </h2>
              <p>
                {tr
                  ? "Geniş tedarik ağımız, uluslararası ticaret deneyimimiz ve rekabetçi fiyat politikamızla müşterilerimize ekonomik, kaliteli ve sürdürülebilir tedarik çözümleri sunmak."
                  : "Through our supply network, international trade experience and competitive pricing, we provide economical, high-quality and durable supply solutions."}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{tr ? "Değerlerimiz" : "Our Values"}</h2>
          </div>
          <ul className="value-grid">
            {(tr
              ? [
                  ["Doğru Ürün Yaklaşımı", "Ürün seçiminde fiyatın yanı sıra kaliteyi, kullanım amacını ve işletme ihtiyaçlarını esas alıyoruz."],
                  ["Uluslararası Bakış Açısı", "Global tedarik kanallarını ve ticari iş birliklerini geliştirerek ürün seçeneklerini genişletiyoruz."],
                  ["Sürekli Gelişim", "Değişen sektör ihtiyaçlarını takip ediyor, ürün portföyümüzü ve hizmet süreçlerimizi geliştiriyoruz."],
                  ["Ekonomik Verimlilik", "Müşterilerimizin satın alma maliyetlerini optimize etmelerine yardımcı olacak alternatifler sunuyoruz."],
                ]
              : [
                  ["Right-Product Approach", "In product selection we take quality, intended use and business needs into account alongside price."],
                  ["International Outlook", "We widen product options by developing global supply channels and collaborations."],
                  ["Continuous Development", "We follow changing sector needs and develop our portfolio and service processes."],
                  ["Economic Efficiency", "We offer alternatives that help customers optimise purchasing costs."],
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

      <section className="section section-muted" id="markalar">
        <div className="wrap">
          <div className="section-head">
            <h2>{tr ? "Markalar" : "Brands"}</h2>
            <p className="lede">
              {tr
                ? "Hectare AŞ, 2022 yılından bu yana LEMKEN ve FIELDKING markalarının Türkiye distribütörlüğünü yürütmektedir."
                : "Since 2022, Hectare AŞ has held the Turkey distributorships of LEMKEN and FIELDKING."}
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
                    ? "LEMKEN, 240 yılı aşkın süredir faaliyet gösteren bir tarım makineleri markasıdır. Markanın Türkiye distribütörlüğü, 2022 yılından bu yana Hectare AŞ tarafından yürütülmektedir."
                    : "LEMKEN is an agricultural machinery brand with more than 240 years of history. Since 2022, Hectare AŞ has held its Turkey distributorship."}
                </p>
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
                    ? "FIELDKING, 1978 yılında kurulmuş bir tarım ekipmanı üreticisidir. Markanın Türkiye distribütörlüğü, 2022 yılından bu yana Hectare AŞ tarafından yürütülmektedir. ISO 9001:2008 sertifikası FIELDKING’e aittir."
                    : "FIELDKING is an agricultural equipment manufacturer founded in 1978. Since 2022, Hectare AŞ has held its Turkey distributorship. The ISO 9001:2008 certification belongs to FIELDKING."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="ticaret">
        <div className="wrap">
          <div className="section-head">
            <h2>{tr ? "Ticaret Ağı" : "Trade Network"}</h2>
            <p className="lede">
              {tr
                ? "Sektörel deneyimden uluslararası ticarete — Hectare Foreign Trade."
                : "From sector experience to international trade — Hectare Foreign Trade."}
            </p>
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
              <p className="eyebrow">{tr ? "Diğer Ülkeler" : "Other Countries"}</p>
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

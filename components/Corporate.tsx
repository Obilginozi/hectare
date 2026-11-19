"use client";

import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";

export function Corporate() {
  const { lang } = useLocale();
  const tr = lang === "tr";

  return (
    <>
      <section className="page-hero">
        <PageFilm src="/media/video1.mp4" poster="/media/video1-poster.jpg" />
        <div className="page-hero-copy">
          <p className="eyebrow">Hectare AŞ</p>
          <h1>{tr ? "Kurumsal" : "Corporate"}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>
              {tr
                ? "Tarım ve iş makinelerinde güçlü tedarik, güvenilir iş ortaklığı."
                : "Strong supply and a reliable partnership in agricultural and construction machinery."}
            </h2>
          </div>
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
              <p className="eyebrow">{tr ? "Vizyonumuz" : "Our vision"}</p>
              <h2 className="block-title">
                {tr ? "Tedarikte ilk tercih edilen iş ortağı olmak." : "To be the preferred partner in supply."}
              </h2>
              <p>
                {tr
                  ? "Tarım ve iş makineleri sektöründe müşterilerimizin ihtiyaç duyduğu ürünlere kolayca ulaşabildiği, alternatifleri karşılaştırabildiği ve güvenle satın alma kararı verebildiği en müşteri odaklı tedarik şirketi olmak."
                  : "To be the most customer-focused supply company where customers can reach products, compare alternatives and purchase with confidence."}
              </p>
            </article>
            <article>
              <p className="eyebrow">{tr ? "Misyonumuz" : "Our mission"}</p>
              <h2 className="block-title">
                {tr
                  ? "En doğru ürünü, en uygun koşullarda erişilebilir kılmak."
                  : "To make the right product accessible under the right conditions."}
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
            <h2>{tr ? "Değerlerimiz" : "Our values"}</h2>
          </div>
          <ul className="value-grid">
            {(tr
              ? [
                  ["Doğru ürün yaklaşımı", "Ürün seçiminde fiyatın yanı sıra kaliteyi, kullanım amacını ve işletme ihtiyaçlarını esas alıyoruz."],
                  ["Uluslararası bakış açısı", "Global tedarik kanallarını ve ticari iş birliklerini geliştirerek ürün seçeneklerini genişletiyoruz."],
                  ["Sürekli gelişim", "Değişen sektör ihtiyaçlarını takip ediyor, ürün portföyümüzü ve hizmet süreçlerimizi geliştiriyoruz."],
                  ["Ekonomik verimlilik", "Müşterilerimizin satın alma maliyetlerini optimize etmelerine yardımcı olacak alternatifler sunuyoruz."],
                ]
              : [
                  ["Right-product approach", "In product selection we take quality, intended use and business needs into account alongside price."],
                  ["International outlook", "We widen product options by developing global supply channels and collaborations."],
                  ["Continuous development", "We follow changing sector needs and develop our portfolio and service processes."],
                  ["Economic efficiency", "We offer alternatives that help customers optimise purchasing costs."],
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
    </>
  );
}

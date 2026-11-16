"use client";

import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";

const copy = {
  tr: {
    title: "Kurumsal",
    headline: "Tarım ve iş makinelerinde güçlü tedarik, güvenilir iş ortaklığı.",
    intro: [
      "Hectare AŞ, otuz yılı aşkın sektörel tecrübesiyle tarım makineleri, tarımsal ekipmanlar, iş makineleri ve yedek parça alanlarında Türkiye genelindeki işletmelere toptan tedarik çözümleri sunan bir dış ticaret ve tedarik şirketidir.",
      "Kurulduğumuz günden bu yana sektörde edindiğimiz bilgi birikimini, güçlü tedarik ağımız ve uluslararası ticaret deneyimimizle birleştirerek müşterilerimizin ihtiyaçlarına yönelik sürdürülebilir çözümler geliştiriyoruz.",
      "Traktörlerden tarımsal ekipmanlara, iş makinelerinden yedek parçalara kadar geniş bir ürün grubunda; doğru ürünü, doğru koşullarda ve rekabetçi fiyatlarla müşterilerimizle buluşturuyoruz.",
      "Yalnızca ürün tedarik etmeyi değil; işletmelerin satın alma süreçlerini kolaylaştırmayı, alternatiflerini artırmayı ve operasyonel ihtiyaçlarına değer katan bir tedarik yapısı oluşturmayı hedefliyoruz.",
    ],
    measures: [
      {
        figure: "30+",
        title: "Yıllık sektör tecrübesi",
        text: "Tarım ve iş makineleri sektöründe.",
      },
      {
        figure: "10+",
        title: "Yıllık dış ticaret deneyimi",
        text: "Uluslararası tedarik ve ticaret faaliyetleri.",
      },
      {
        figure: "2022",
        title: "Distribütörlük başlangıcı",
        text: "LEMKEN ve FIELDKING Türkiye distribütörlüğü.",
      },
      {
        figure: "Türkiye",
        title: "Geniş tedarik ağı",
        text: "Türkiye genelindeki işletmelere toptan tedarik.",
      },
    ],
    visionTitle: "Vizyonumuz",
    visionLead: "Tedarikte ilk tercih edilen iş ortağı olmak.",
    vision:
      "Tarım ve iş makineleri sektöründe müşterilerimizin ihtiyaç duyduğu ürünlere kolayca ulaşabildiği, alternatifleri karşılaştırabildiği ve güvenle satın alma kararı verebildiği en müşteri odaklı tedarik şirketi olmak.",
    missionTitle: "Misyonumuz",
    missionLead: "En doğru ürünü, en uygun koşullarda erişilebilir kılmak.",
    mission:
      "Geniş tedarik ağımız, uluslararası ticaret deneyimimiz ve rekabetçi fiyat politikamızla müşterilerimize ekonomik, kaliteli ve sürdürülebilir tedarik çözümleri sunmak.",
    chapters: [
      {
        title: "Tedarikte bütüncül yaklaşım",
        paragraphs: [
          "Her işletmenin ihtiyacı, kullanım koşulları ve satın alma öncelikleri farklıdır. Bu nedenle tedarik anlayışımızı standart ürün satışının ötesinde konumlandırıyoruz.",
          "Ürün araştırmasından alternatiflerin değerlendirilmesine, fiyatlandırmadan teslimat planlamasına kadar tedarik sürecinin farklı aşamalarında müşterilerimizin yanında yer alıyoruz.",
          "Amacımız; müşterilerimizin ihtiyaç duydukları ürünlere daha kolay ulaşmasını, doğru alternatifleri değerlendirmesini ve satın alma süreçlerini daha verimli yönetmesini sağlamaktır.",
        ],
      },
      {
        title: "Hedefimiz: Daha erişilebilir, daha verimli tedarik",
        paragraphs: [
          "Tarım ve iş makineleri sektöründe değişen ihtiyaçları yakından takip ediyor, ürün portföyümüzü ve tedarik ağımızı sürekli geliştiriyoruz.",
          "Güçlü ticari ilişkiler, rekabetçi fiyat politikası, geniş ürün seçenekleri ve müşteri odaklı hizmet anlayışımızla Türkiye’deki işletmeler için güvenilir bir tedarik ortağı olmayı sürdürüyoruz.",
          "Hectare AŞ olarak hedefimiz, müşterilerimizin ihtiyaç duyduğu ürünü bulabildiği, karşılaştırabildiği ve güvenle tedarik edebildiği güçlü bir tedarik platformu olmaktır.",
        ],
      },
    ],
    valuesTitle: "Değerlerimiz",
    values: [
      {
        title: "Doğru ürün yaklaşımı",
        text: "Ürün seçiminde fiyatın yanı sıra kaliteyi, kullanım amacını ve işletme ihtiyaçlarını esas alıyoruz.",
      },
      {
        title: "Uluslararası bakış açısı",
        text: "Global tedarik kanallarını ve ticari iş birliklerini geliştirerek ürün seçeneklerini genişletiyoruz.",
      },
      {
        title: "Sürekli gelişim",
        text: "Değişen sektör ihtiyaçlarını takip ediyor, ürün portföyümüzü ve hizmet süreçlerimizi geliştiriyoruz.",
      },
      {
        title: "Ekonomik verimlilik",
        text: "Müşterilerimizin satın alma maliyetlerini optimize etmelerine yardımcı olacak alternatifler sunuyoruz.",
      },
    ],
    servicesTitle: "Hizmet anlayışımız",
    services: [
      {
        title: "Rekabetçi tedarik",
        text: "Güçlü tedarik kanallarıyla ekonomik ürün seçenekleri.",
      },
      {
        title: "Planlı teslimat",
        text: "İhtiyaç ve sipariş doğrultusunda organize edilen teslimat süreçleri.",
      },
      {
        title: "Ürün ve kalite seçimi",
        text: "Kullanım koşullarına uygun ürün ve ekipman değerlendirmesi.",
      },
      {
        title: "Tedarik sürekliliği",
        text: "Stok ve ürün taleplerine hızlı geri dönüş ve çözüm odaklı yaklaşım.",
      },
    ],
    closing: "Hectare. Doğru ürün. Güçlü tedarik. Güvenilir iş ortaklığı.",
  },
  en: {
    title: "Corporate",
    headline: "Strong supply and a reliable partnership in agricultural and construction machinery.",
    intro: [
      "Hectare AŞ is a foreign-trade and supply company that, with more than thirty years of sector experience, provides wholesale supply solutions in agricultural machinery, agricultural equipment, construction equipment and spare parts to businesses across Turkey.",
      "Since our foundation we have combined the knowledge built in the sector with our strong supply network and international trade experience to develop durable solutions for our customers’ needs.",
      "Across a broad product range, from tractors and agricultural implements to construction equipment and spare parts, we bring the right product to our customers under the right conditions and at competitive prices.",
      "Our aim is not only to supply products, but to make purchasing easier for businesses, to widen their options and to build a supply structure that adds value to their operational needs.",
    ],
    measures: [
      {
        figure: "30+",
        title: "Years of sector experience",
        text: "In agricultural and construction machinery.",
      },
      {
        figure: "10+",
        title: "Years of foreign-trade experience",
        text: "International supply and trade activities.",
      },
      {
        figure: "2022",
        title: "Distributorship start",
        text: "LEMKEN and FIELDKING distributorship in Turkey.",
      },
      {
        figure: "Turkey",
        title: "Wide supply network",
        text: "Wholesale supply to businesses across Turkey.",
      },
    ],
    visionTitle: "Our vision",
    visionLead: "To be the preferred partner in supply.",
    vision:
      "To be the most customer-focused supply company in agricultural and construction machinery, where our customers can reach the products they need, compare alternatives and make purchasing decisions with confidence.",
    missionTitle: "Our mission",
    missionLead: "To make the right product accessible under the right conditions.",
    mission:
      "Through our wide supply network, international trade experience and competitive pricing, we provide customers with economical, high-quality and durable supply solutions.",
    chapters: [
      {
        title: "A complete approach to supply",
        paragraphs: [
          "Every business has different needs, operating conditions and purchasing priorities. For that reason we place our supply approach beyond standard product sales.",
          "From product research and the assessment of alternatives to pricing and delivery planning, we stand with our customers across the stages of the supply process.",
          "Our aim is to help customers reach the products they need more easily, evaluate the right alternatives and manage purchasing more efficiently.",
        ],
      },
      {
        title: "Our aim: more accessible, more efficient supply",
        paragraphs: [
          "We follow the changing needs of the agricultural and construction machinery sector closely, and we continually develop our product portfolio and supply network.",
          "With strong commercial relationships, competitive pricing, a wide product selection and a customer-focused approach to service, we continue to be a reliable supply partner for businesses in Turkey.",
          "As Hectare AŞ, our aim is to be a strong supply platform where customers can find, compare and securely source the product they need.",
        ],
      },
    ],
    valuesTitle: "Our values",
    values: [
      {
        title: "The right-product approach",
        text: "In product selection we are taking quality, intended use and business needs into account alongside price.",
      },
      {
        title: "An international outlook",
        text: "We are widening product options by developing global supply channels and commercial collaborations.",
      },
      {
        title: "Continuous development",
        text: "We are following changing sector needs and developing our product portfolio and service processes.",
      },
      {
        title: "Economic efficiency",
        text: "We are offering alternatives that help our customers optimise purchasing costs.",
      },
    ],
    servicesTitle: "How we work",
    services: [
      {
        title: "Competitive supply",
        text: "Economical product options through strong supply channels.",
      },
      {
        title: "Planned delivery",
        text: "Delivery processes organised according to need and order.",
      },
      {
        title: "Product and quality selection",
        text: "Assessment of products and equipment suited to the conditions of use.",
      },
      {
        title: "Supply continuity",
        text: "Prompt responses to stock and product requests, with a solution-focused approach.",
      },
    ],
    closing: "Hectare. The right product. Strong supply. A reliable partnership.",
  },
};

export function Corporate() {
  const { lang } = useLocale();
  const text = copy[lang];

  return (
    <>
      <section className="page-hero page-hero--film" aria-labelledby="kurumsal-title">
        <PageFilm src="/media/video1.mp4" poster="/media/video1-poster.jpg" />
        <div className="page-hero-copy wrap">
          <h1 id="kurumsal-title">{text.title}</h1>
        </div>
      </section>

      <section className="section essay essay--air">
        <div className="wrap">
          <p className="lede lede--lead">{text.headline}</p>
          <div className="essay-body essay-body--open">
            {text.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="measure measure--quad">
            {text.measures.map((item) => (
              <li key={item.figure}>
                <strong>{item.figure}</strong>
                <span>
                  <b>{item.title}</b>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="belief">
            <article>
              <h2 className="block-title">{text.visionTitle}</h2>
              <p className="kicker">{text.visionLead}</p>
              <p>{text.vision}</p>
            </article>
            <article>
              <h2 className="block-title">{text.missionTitle}</h2>
              <p className="kicker">{text.missionLead}</p>
              <p>{text.mission}</p>
            </article>
          </div>

          {text.chapters.map((chapter) => (
            <div className="essay-chapter" key={chapter.title}>
              <h2 className="block-title">{chapter.title}</h2>
              <div className="essay-body">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="essay-chapter">
            <h2 className="block-title">{text.valuesTitle}</h2>
            <ul className="value-list">
              {text.values.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="essay-chapter">
            <h2 className="block-title">{text.servicesTitle}</h2>
            <ul className="work-line">
              {text.services.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="essay-close">{text.closing}</p>
        </div>
      </section>
    </>
  );
}

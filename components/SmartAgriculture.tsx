"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/Locale";
import { company } from "@/lib/content";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

const products = [
  {
    code: "HCT-AKT-001",
    tr: {
      name: "Profesyonel Akıllı Tarım Kontrol Sistemi",
      text: "Profesyonel tarımsal operasyonlar için merkezi kontrol altyapısı. Konumlandırma, makine yönetimi ve saha takibini aynı çalışma düzeninde birleştirerek tarla operasyonlarını daha sistematik hale getirir.",
      features: ["Merkezi makine kontrolü", "Hassas konumlandırma altyapısı", "Operasyon izleme", "Kullanıcı dostu kontrol arayüzü"],
      alt: "Profesyonel akıllı tarım kontrol sistemi",
    },
    en: {
      name: "Professional Smart Farming Control System",
      text: "A central control infrastructure for professional agricultural operations. It brings positioning, machine management and field tracking into one working order.",
      features: ["Central machine control", "Precision positioning", "Operation monitoring", "User-friendly interface"],
      alt: "Professional smart farming control system",
    },
  },
  {
    code: "HCT-AKT-002",
    tr: {
      name: "Hassas Tarım Yönetim Sistemi",
      text: "Tarla operasyonlarını konum verisi ve dijital kontrolle buluşturur. Çalışma hatlarını takip etmeye, bindirmeleri azaltmaya ve uygulamaları daha tutarlı gerçekleştirmeye yardımcı olur.",
      features: ["GPS destekli tarla yönetimi", "Hassas dümenleme desteği", "Çalışma alanı ve hat takibi", "Operasyonel kontrol"],
      alt: "Hassas tarım yönetim sistemi",
    },
    en: {
      name: "Precision Farming Management System",
      text: "Connects field operations with position data and digital control. It helps follow working lines, reduce overlap and carry out applications more consistently.",
      features: ["GPS-supported field management", "Precision steering support", "Work area and line tracking", "Operational control"],
      alt: "Precision farming management system",
    },
  },
  {
    code: "HCT-AKT-003",
    tr: {
      name: "İleri Seviye Tarımsal Kontrol Sistemi",
      text: "Farklı ekipman ve ileri uygulamalar için genişletilebilir kontrol çözümü. Makine, ekipman ve tarımsal süreçler arasında daha kapsamlı bir koordinasyon kurmayı hedefler.",
      features: ["Gelişmiş kontrol altyapısı", "Ekipman entegrasyonu", "Süreç yönetimi", "Genişletilebilir mimari"],
      alt: "İleri seviye tarımsal kontrol sistemi",
    },
    en: {
      name: "Advanced Agricultural Control System",
      text: "An expandable control solution for advanced applications and different implements. It aims for broader coordination between machine, implement and field processes.",
      features: ["Advanced control infrastructure", "Implement integration", "Process management", "Expandable architecture"],
      alt: "Advanced agricultural control system",
    },
  },
] as const;

const stack = [
  {
    n: "01",
    tr: {
      title: "Konumlandırma omurgası",
      text: "GNSS ve düzeltilmiş konum sinyalleri, hassas tarımın temelidir. Tarla sınırları, hatlar, örnekleme noktaları ve uygulama haritaları aynı konum dilinde buluşmadan kontrol mümkün olmaz.",
    },
    en: {
      title: "Positioning backbone",
      text: "GNSS and corrected position signals are the foundation of precision agriculture. Boundaries, lines, sampling points and application maps must share one location language before control is possible.",
    },
  },
  {
    n: "02",
    tr: {
      title: "Otomatik dümenleme",
      text: "Sektörde en yaygın benimsenen teknolojilerden biridir. Paralel geçişleri düzenler, bindirme ve boşlukları azaltır, operatör yorgunluğunu düşürür; yakıt ve iş süresi üzerinde doğrudan etki üretir.",
    },
    en: {
      title: "Automatic steering",
      text: "One of the most widely adopted technologies in the sector. It organises parallel passes, reduces overlap and skips, lowers operator fatigue and has a direct effect on fuel and working time.",
    },
  },
  {
    n: "03",
    tr: {
      title: "Hassas ekim ve bölüm kontrolü",
      text: "Sıra aralığı, tohum yerleşimi ve otomatik bölüm kontrolü; üst üste ekimi ve gereksiz girdiyi engeller. Makine ile ekipman aynı kontrol dilinde çalıştığında ekim kalitesi tarla genelinde tutarlılaşır.",
    },
    en: {
      title: "Precision seeding and section control",
      text: "Row spacing, seed placement and automatic section control prevent double application and wasted input. When machine and implement share one control language, seeding quality becomes consistent across the field.",
    },
  },
  {
    n: "04",
    tr: {
      title: "Değişken oranlı uygulama",
      text: "VRA, gübre, tohum ve uygun girdileri tarlanın farklı bölgelerindeki ihtiyaca göre uygular. Reçete haritaları ve oran kontrolü birlikte çalışınca kaynaklar tarlanın tamamına aynı dozda değil, doğru dozda gider.",
    },
    en: {
      title: "Variable rate application",
      text: "VRA applies fertiliser, seed and suitable inputs according to different needs within the field. When prescription maps and rate control work together, resources go at the right dose, not one dose everywhere.",
    },
  },
  {
    n: "05",
    tr: {
      title: "Verim ve toprak haritalama",
      text: "Hasat verileri, grid veya zon toprak örneklemesi ve yönetim haritaları; bir sonraki sezonun ekim, gübreleme ve toprak işleme kararlarını veriye bağlar. Ölçmeden yönetmek, modern tarımda artık yeterli değildir.",
    },
    en: {
      title: "Yield and soil mapping",
      text: "Harvest data, grid or zone soil sampling and management maps connect the next season’s seeding, fertilising and tillage decisions to evidence. Managing without measurement is no longer enough.",
    },
  },
  {
    n: "06",
    tr: {
      title: "Sensör, kamera ve ekipman entegrasyonu",
      text: "Toprak nemi, bitki durumu, ekipman performansı ve saha görüntüsü; operasyonu anlık izlenebilir kılar. Asıl güç, bu verinin traktör, ekipman ve kontrol sisteminin ortak altyapısında birleşmesidir.",
    },
    en: {
      title: "Sensors, cameras and implement integration",
      text: "Soil moisture, crop condition, implement performance and field imagery make the operation visible in real time. The real power comes when this data meets in a shared infrastructure of tractor, implement and control system.",
    },
  },
] as const;

export function SmartAgriculture() {
  const { lang, t } = useLocale();
  const tr = lang === "tr";

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media" aria-hidden="true">
          <Image
            src={withBase("/media/akilli-tarim-hero.jpeg")}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="page-hero-copy">
          <p className="eyebrow">{tr ? "Hassas tarım · Kontrol · Veri" : "Precision · Control · Data"}</p>
          <h1>{tr ? "Akıllı tarımı biz yönlendiriyoruz." : "We set the direction of smart farming."}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{tr ? "Saha teknolojisinin omurgası" : "The backbone of field technology"}</p>
            <h2>
              {tr
                ? "Modern tarımda güç, yalnızca makinede değil; konum, kontrol ve verinin aynı düzlemde yönetilmesindedir."
                : "In modern agriculture, power is not only in the machine; it is in managing position, control and data on the same plane."}
            </h2>
          </div>
          <div className="split-copy">
            {(tr
              ? [
                  "Hassas tarım; bilgi, teknoloji ve yönetimi tek bir üretim sisteminde birleştirir. Amaç, tarlanın her noktasını aynı varsayımla değil, ölçülen ihtiyaca göre yönetmektir. Bu yaklaşım verimi artırmayı, girdiyi azaltmayı ve operasyonu tekrarlanabilir kılmayı hedefler.",
                  "Bugün sektörde otomatik dümenleme en yaygın benimsenen katmanlardan biridir; verim monitörleri, hassas toprak örneklemesi, değişken oranlı gübreleme ve bölüm kontrolü ise karar ve uygulama katmanını tamamlar. Hectare olarak bu teknolojileri dağınık ürünler gibi değil, birbirini besleyen bir kontrol zinciri olarak ele alıyoruz.",
                  "Uluslararası tedarik ağımız ve makine portföyümüzle akıllı tarımı yalnızca bir ekran meselesi olarak görmüyoruz. Doğru sistem, doğru ekipman ve doğru kullanım senaryosu bir araya gelmeden sahada gerçek bir avantaj oluşmaz. Bu yüzden çözümleri işletmenin ölçeğine, makine parkına ve operasyon düzenine göre konumlandırıyoruz.",
                ]
              : [
                  "Precision agriculture brings information, technology and management into one production system. The aim is to manage every part of the field by measured need, not by one assumption. This approach targets higher yield, lower input use and repeatable operations.",
                  "Today automatic steering is among the most widely adopted layers; yield monitors, precision soil sampling, variable-rate fertilising and section control complete the decision and application layers. At Hectare we treat these technologies as a connected control chain, not as scattered products.",
                  "With our international supply network and machine portfolio, we do not see smart farming as a screen-only topic. Without the right system, the right implement and the right operating scenario, no real field advantage appears. That is why we position solutions by business scale, machine park and operating order.",
                ]
            ).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="stat-row" style={{ marginTop: "2.5rem" }}>
            <article>
              <strong>GNSS</strong>
              <span>{tr ? "Konum omurgası" : "Position backbone"}</span>
            </article>
            <article>
              <strong>AutoSteer</strong>
              <span>{tr ? "En yaygın katman" : "Most adopted layer"}</span>
            </article>
            <article>
              <strong>VRA</strong>
              <span>{tr ? "Değişken oranlı girdi" : "Variable-rate input"}</span>
            </article>
            <article>
              <strong>Data</strong>
              <span>{tr ? "Sezonlar arası karar" : "Season-to-season decisions"}</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{tr ? "Teknoloji haritası" : "Technology map"}</p>
            <h2>
              {tr
                ? "Akıllı tarımı oluşturan katmanları kısaca yönetiyoruz."
                : "We briefly map the layers that make smart farming work."}
            </h2>
            <p className="lede">
              {tr
                ? "Her katman tek başına fayda üretir; asıl fark, zincirin eksiksiz kurulmasıdır. Aşağıdaki çerçeve, Hectare’nin akıllı tarım yaklaşımının omurgasını özetler."
                : "Each layer creates value on its own; the real difference comes when the chain is complete. The framework below summarises the backbone of Hectare’s smart farming approach."}
            </p>
          </div>
          <ul className="tech-grid">
            {stack.map((item) => {
              const copy = item[lang];
              return (
                <li key={item.n}>
                  <p className="tech-n">{item.n}</p>
                  <h3>{copy.title}</h3>
                  <p>{copy.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{tr ? "Kontrol sistemleri" : "Control systems"}</p>
            <h2>
              {tr
                ? "Sahaya inen akıllı tarım çözümlerimiz."
                : "Our smart farming solutions that reach the field."}
            </h2>
            <p className="lede">
              {tr
                ? "Kontrol sistemlerimizi; konumlandırma, dümenleme desteği, operasyon izleme ve ekipman entegrasyonu ihtiyacına göre kademelendiriyoruz."
                : "We tier our control systems according to the need for positioning, steering support, operation monitoring and implement integration."}
            </p>
          </div>

          <ul className="smart-products">
            {products.map((product, index) => {
              const copy = product[lang];
              const photo = productPhoto(product.code);
              const subject = encodeURIComponent(`Hectare: ${product.code} ${copy.name}`);
              const body = encodeURIComponent(t.quoteBody(copy.name, product.code));
              return (
                <li key={product.code} className={index % 2 ? "smart-product is-flip" : "smart-product"}>
                  <div className="smart-product-media">
                    {photo ? (
                      <Image src={withBase(photo)} alt={copy.alt} fill sizes="(max-width: 900px) 100vw, 48vw" />
                    ) : null}
                  </div>
                  <div>
                    <p className="eyebrow">{product.code}</p>
                    <h3 className="block-title" style={{ fontSize: "1.45rem" }}>
                      {copy.name}
                    </h3>
                    <p className="lede">{copy.text}</p>
                    <ul className="smart-features">
                      {copy.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1.25rem" }}>
                      <a className="btn btn-dark" href={`mailto:${company.email}?subject=${subject}&body=${body}`}>
                        {t.quote}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="section-head">
            <h2>{tr ? "Neden bu yaklaşım?" : "Why this approach?"}</h2>
            <p className="lede">
              {tr
                ? "Akıllı tarımın değeri, daha fazla ekranda değil; daha az kayıpta, daha net kararda ve daha kontrollü operasyonda ortaya çıkar."
                : "The value of smart farming appears not in more screens, but in less loss, clearer decisions and more controlled operations."}
            </p>
          </div>
          <ul className="gains-grid">
            {(tr
              ? [
                  ["Daha az bindirme", "Dümenleme ve bölüm kontrolü ile üst üste geçiş ve gereksiz uygulamayı azaltıyoruz."],
                  ["Daha doğru girdi", "Değişken oranlı uygulama ile tohum, gübre ve uygun girdiyi ihtiyaca göre yönetiyoruz."],
                  ["Daha az yorgunluk", "Otomasyon, uzun çalışma saatlerinde operatörün dikkatini makineye değil işin kalitesine bırakır."],
                  ["Ölçülebilir saha", "Verim ve toprak verisi, bir sonraki sezonun planını tahmin değil kayıt üzerine kurar."],
                  ["Bütünleşik kontrol", "Traktör, ekipman ve kontrol sistemini aynı operasyon dilinde buluşturuyoruz."],
                  ["Ölçeklenebilir yapı", "Farklı işletme büyüklükleri ve makine konfigürasyonlarına göre sistemi büyütüyoruz."],
                ]
              : [
                  ["Less overlap", "With steering and section control we reduce double passes and unnecessary application."],
                  ["Better input use", "With variable rate application we manage seed, fertiliser and suitable inputs by need."],
                  ["Less fatigue", "Automation lets the operator focus on quality, not constant steering, during long hours."],
                  ["A measurable field", "Yield and soil data base the next season’s plan on records, not guesswork."],
                  ["Integrated control", "We bring tractor, implement and control system into one operating language."],
                  ["Scalable structure", "We grow the system for different business sizes and machine configurations."],
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
            <h2>
              {tr
                ? "Teknolojiyi tarlaya, kontrolü işletmeye taşıyoruz."
                : "We bring technology to the field and control to the business."}
            </h2>
            <p className="lede">
              {tr
                ? "İşletmenizin makine parkına, ürün deseninize ve operasyon temposuna uygun akıllı tarım çözümünü birlikte netleştirmek için bizimle iletişime geçin."
                : "Contact us to define the smart farming solution that fits your machine park, crop pattern and operating tempo."}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link className="btn btn-dark" href="/iletisim">
              {tr ? "İletişime geçin" : "Contact us"}
            </Link>
            <Link className="btn btn-primary" href="/urunler/akt">
              {t.viewProducts}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

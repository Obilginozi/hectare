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
      text: "Profesyonel tarımsal operasyonlar için geliştirilen kontrol altyapısı. Tarla çalışmalarında daha kontrollü ve sistematik kullanım sunar.",
      features: ["Merkezi makine kontrolü", "Hassas konumlandırma", "Operasyon izleme", "Kullanıcı dostu arayüz"],
      alt: "Profesyonel akıllı tarım kontrol sistemi",
    },
    en: {
      name: "Professional Smart Farming Control System",
      text: "A control infrastructure for professional agricultural operations. It offers more controlled and systematic use in the field.",
      features: ["Central machine control", "Precision positioning", "Operation monitoring", "User-friendly interface"],
      alt: "Professional smart farming control system",
    },
  },
  {
    code: "HCT-AKT-002",
    tr: {
      name: "Hassas Tarım Yönetim Sistemi",
      text: "Tarla operasyonlarını konum bilgisi ve dijital kontrol teknolojileriyle bir araya getirir.",
      features: ["GPS destekli yönetim", "Hassas dümenleme", "Hat takibi", "Operasyonel izleme"],
      alt: "Hassas tarım yönetim sistemi",
    },
    en: {
      name: "Precision Farming Management System",
      text: "Brings field operations together with position data and digital control technology.",
      features: ["GPS-supported management", "Precision steering", "Line tracking", "Operational monitoring"],
      alt: "Precision farming management system",
    },
  },
  {
    code: "HCT-AKT-003",
    tr: {
      name: "İleri Seviye Tarımsal Kontrol Sistemi",
      text: "Gelişmiş tarımsal uygulamalar ve farklı ekipman ihtiyaçları için tasarlanan kontrol çözümü.",
      features: ["Gelişmiş kontrol altyapısı", "Ekipman entegrasyonu", "Süreç yönetimi", "Genişletilebilir mimari"],
      alt: "İleri seviye tarımsal kontrol sistemi",
    },
    en: {
      name: "Advanced Agricultural Control System",
      text: "A control solution designed for advanced applications and different implement needs.",
      features: ["Advanced control infrastructure", "Implement integration", "Process management", "Expandable architecture"],
      alt: "Advanced agricultural control system",
    },
  },
] as const;

const technologies = [
  { n: "01", tr: ["Otomatik Dümenleme", "GPS destekli dümenleme ile daha düzenli geçişler ve daha düşük operatör yükü."], en: ["Automatic Steering", "GPS-supported steering for more orderly passes and lower operator load."] },
  { n: "02", tr: ["Hassas Ekim", "Doğru sıra aralığı ve tutarlı tohum yerleşimi için kontrol."], en: ["Precision Seeding", "Control for the right row spacing and consistent seed placement."] },
  { n: "03", tr: ["Değişken Oranlı Uygulama", "Tarlanın her bölgesine ihtiyacı kadar girdi."], en: ["Variable Rate Application", "As much input as each part of the field needs."] },
  { n: "04", tr: ["Verim ve Toprak Haritalama", "Veriye dayalı kararlar için dijital tarla analizi."], en: ["Yield and Soil Mapping", "Digital field analysis for data-based decisions."] },
  { n: "05", tr: ["Sensör ve Kamera", "Gerçek zamanlı izleme ve zamanında müdahale."], en: ["Sensors and Cameras", "Real-time monitoring and timely intervention."] },
  { n: "06", tr: ["Akıllı Ekipman Entegrasyonu", "Makine ve ekipman arasında kesintisiz koordinasyon."], en: ["Smart Implement Integration", "Seamless coordination between machine and implements."] },
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
          <p className="eyebrow">Hectare</p>
          <h1>{tr ? "Akıllı tarım" : "Smart farming"}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{tr ? "Akıllı Tarım Teknolojileri" : "Smart Farming Technologies"}</p>
            <h2>{tr ? "Tarımda hassasiyet, kontrol ve verimlilik." : "Precision, control and efficiency in agriculture."}</h2>
            <p className="lede">
              {tr
                ? "GPS tabanlı konumlandırma, otomatik dümenleme ve akıllı ekipman kontrolüyle tarımsal operasyonları ölçülebilir hale getiriyoruz."
                : "We make agricultural operations measurable with GPS positioning, automatic steering and smart implement control."}
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
            <h2>{tr ? "Tarım Teknolojileri" : "Farming Technologies"}</h2>
          </div>
          <ul className="tech-grid">
            {technologies.map((item) => {
              const [title, text] = item[lang];
              return (
                <li key={item.n}>
                  <p className="tech-n">{item.n}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{tr ? "Akıllı Tarımın Avantajları" : "Advantages of Smart Farming"}</h2>
          </div>
          <ul className="gains-grid">
            {(tr
              ? [
                  ["Hassas çalışma", "GPS destekli hat takibi."],
                  ["Kaynak verimliliği", "Daha az gereksiz girdi tüketimi."],
                  ["Zaman tasarrufu", "Otomasyonla daha düşük iş yükü."],
                  ["Veriye dayalı yönetim", "Kayıt altına alınan operasyonlar."],
                  ["Operatör konforu", "Uzun saatlerde daha az manuel kontrol."],
                  ["Ölçeklenebilir teknoloji", "Farklı makine ihtiyaçlarına uyum."],
                ]
              : [
                  ["Precise work", "GPS-supported line tracking."],
                  ["Resource efficiency", "Less unnecessary input use."],
                  ["Time savings", "Lower workload through automation."],
                  ["Data-based management", "Recorded operations."],
                  ["Operator comfort", "Less manual control over long hours."],
                  ["Scalable technology", "Fits different machine needs."],
                ]
            ).map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
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

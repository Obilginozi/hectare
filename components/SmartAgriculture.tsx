"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/Locale";
import { company } from "@/lib/content";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

const copy = {
  tr: {
    hero: "Akıllı tarım",
    introTitle: "Akıllı Tarım Teknolojileri",
    introLead: "Tarımda hassasiyet, kontrol ve verimlilik.",
    intro: [
      "Hectare akıllı tarım çözümleri, tarımsal operasyonları daha hassas, kontrollü ve verimli hâle getirmek için geliştirilmiştir. Modern tarım makinelerini ileri teknoloji kontrol sistemleriyle buluşturarak ekimden toprak işlemeye, dümenlemeden tarla yönetimine kadar tüm süreçlerin daha sistematik yürütülmesini sağlar.",
      "GPS tabanlı konumlandırma, otomatik dümenleme, hassas tarım uygulamaları ve akıllı ekipman kontrolü sayesinde tarımsal faaliyetler ölçülebilir verilere dayanır. Operatörün iş yükünü azaltırken kaynakların daha etkin kullanılmasına ve operasyonel verimliliğin artırılmasına yardımcı olur.",
    ],
    introClose: "Hectare ile tarımda kontrolü teknolojiye, verimliliği hassasiyete dönüştürün.",
    systemsTitle: "Kontrol ve Yönetim Sistemleri",
    systemsLead: "Tüm tarımsal operasyonlarınızda akıllı kontrol.",
    systems: [
      "Hectare akıllı tarım kontrol sistemleri, traktör ve tarım makinelerinin çalışma süreçlerini merkezi bir kontrol altyapısı üzerinden yönetmenizi sağlar.",
      "Ekim, gübreleme, ilaçlama ve toprak işleme gibi farklı operasyonları hassas konumlandırma ve gelişmiş kontrol teknolojileriyle bir araya getirir. Operatörün çalışma sürecini kolaylaştırırken tarla içerisindeki hareketlerin daha düzenli, tekrarlanabilir ve ölçülebilir olmasını destekler.",
      "Farklı ihtiyaçlara ve makine konfigürasyonlarına uygun çözümlerimizle tarımsal mekanizasyonunuzu akıllı teknolojiyle geliştirin.",
    ],
    featuresLabel: "Öne çıkan özellikler",
    products: [
      {
        code: "HCT-AKT-001",
        name: "Profesyonel Akıllı Tarım Kontrol Sistemi",
        text: "Profesyonel tarımsal operasyonlar için geliştirilen kontrol altyapısı. Makine yönetimini kolaylaştıran teknolojik bileşenleriyle tarla çalışmalarında daha kontrollü ve sistematik bir kullanım sunar.",
        features: [
          "Merkezi makine kontrolü",
          "Hassas konumlandırma altyapısı",
          "Tarımsal operasyonların izlenmesi",
          "Kullanıcı dostu kontrol arayüzü",
        ],
        alt: "Profesyonel akıllı tarım kontrol sistemi",
      },
      {
        code: "HCT-AKT-002",
        name: "Hassas Tarım Yönetim Sistemi",
        text: "Tarla operasyonlarını konum bilgisi ve dijital kontrol teknolojileriyle bir araya getirir. Operatörün çalışma hatlarını takip etmesine, tarla içerisindeki hareketleri planlamasına ve uygulamaları daha hassas şekilde gerçekleştirmesine yardımcı olur.",
        features: [
          "GPS destekli tarla yönetimi",
          "Hassas dümenleme desteği",
          "Çalışma alanı ve hat takibi",
          "Operasyonel kontrol ve izleme",
        ],
        alt: "Hassas tarım yönetim sistemi",
      },
      {
        code: "HCT-AKT-003",
        name: "İleri Seviye Tarımsal Kontrol Sistemi",
        text: "Gelişmiş tarımsal uygulamalar ve farklı ekipman ihtiyaçları için tasarlanan kontrol çözümü. Makine, ekipman ve tarımsal operasyonlar arasında daha kapsamlı bir kontrol altyapısı oluşturmayı hedefler.",
        features: [
          "Gelişmiş tarımsal kontrol altyapısı",
          "Ekipman entegrasyonu",
          "Operasyonel süreç yönetimi",
          "Genişletilebilir sistem mimarisi",
        ],
        alt: "İleri seviye tarımsal kontrol sistemi",
      },
    ],
    productsNote: "Tüm ürünleri keşfedin ve işletmenize uygun akıllı tarım çözümünü bulun.",
    techTitle: "Tarım Teknolojileri",
    techLead: "Birbirine bağlı teknolojilerle daha akıllı tarla yönetimi.",
    techIntro: [
      "Modern tarım, yalnızca güçlü makinelerden ibaret değildir. Doğru konumlandırma, hassas uygulama, veri toplama ve ekipman kontrolü bir araya geldiğinde tarımsal operasyonlar çok daha verimli yönetilebilir.",
      "Hectare teknolojileri, farklı tarımsal uygulamaları ortak bir kontrol yaklaşımıyla buluşturarak hassas tarım altyapısının oluşturulmasını destekler.",
    ],
    technologies: [
      {
        n: "01",
        title: "Otomatik Dümenleme",
        kicker: "Her geçişte daha hassas, her sırada daha kontrollü.",
        paragraphs: [
          "GPS destekli otomatik dümenleme teknolojisi, traktörün belirlenen çalışma hattını takip etmesine yardımcı olur. Operatörün sürekli direksiyon kontrolü yapma ihtiyacını azaltarak uzun süreli çalışmalarda konfor ve operasyonel tutarlılık sağlar.",
          "Paralel geçişlerin daha düzenli gerçekleştirilmesine, sıra atlamalarının ve gereksiz bindirmelerin azaltılmasına yardımcı olur.",
        ],
      },
      {
        n: "02",
        title: "Hassas Ekim",
        kicker: "Her tohum için doğru konum, düzenli ekim.",
        paragraphs: [
          "Hassas ekim teknolojileri, tohumların belirlenen sıra aralığı ve ekim düzenine uygun şekilde yerleştirilmesini destekler. Ekim makinelerinin kontrolü sayesinde tarla genelinde daha tutarlı bir ekim operasyonu gerçekleştirilmesine yardımcı olur.",
          "Tohum dağılımının kontrol edilmesi, ekim kalitesinin artırılması ve gereksiz tohum kullanımının önlenmesi açısından önemli avantajlar sunar.",
        ],
      },
      {
        n: "03",
        title: "Değişken Oranlı Uygulama",
        kicker: "Tarlanın her bölgesine ihtiyacı kadar kaynak.",
        paragraphs: [
          "Değişken oranlı uygulama teknolojisi (VRA), gübre, tohum ve uygun tarımsal girdilerin tarla içerisindeki farklı ihtiyaçlara göre uygulanmasını sağlar.",
          "Dijital tarla haritaları ve uygulama verileri kullanılarak belirlenen oranlar, uyumlu ekipmanlar aracılığıyla operasyon sırasında kontrol edilebilir.",
          "Böylece kaynakların daha verimli kullanılması, gereksiz girdi tüketiminin azaltılması ve tarla yönetiminin optimize edilmesi hedeflenir.",
        ],
      },
      {
        n: "04",
        title: "Verim ve Toprak Haritalama",
        kicker: "Toprağı tanıyın, veriye dayalı kararlar alın.",
        paragraphs: [
          "Verim ve toprak haritalama sistemleri, tarladan elde edilen verilerin dijital ortamda analiz edilmesine yardımcı olur.",
          "Hasat sırasında toplanan veriler ve toprak analizleri bir araya getirilerek tarlanın farklı bölgelerindeki üretim performansı değerlendirilebilir.",
          "Bu veriler sonraki sezonlarda ekim, gübreleme, sulama ve toprak işleme planlarının daha bilinçli hazırlanmasına katkı sağlar.",
        ],
      },
      {
        n: "05",
        title: "Sensör ve Kamera Teknolojileri",
        kicker: "Tarla içerisindeki değişimleri gerçek zamanlı takip edin.",
        paragraphs: [
          "Sensör ve kamera sistemleri, tarımsal operasyonlar sırasında çevresel koşulların ve çalışma parametrelerinin izlenmesini sağlar.",
          "Toprak nemi, bitki durumu, ekipman performansı ve tarla yüzeyine ilişkin veriler, uyumlu sensörler aracılığıyla toplanabilir.",
          "Bu teknolojiler, tarımsal süreçlerin daha yakından takip edilmesini ve ihtiyaçlara uygun müdahalelerin zamanında gerçekleştirilmesini destekler.",
        ],
      },
      {
        n: "06",
        title: "Akıllı Ekipman Entegrasyonu",
        kicker: "Makine ve ekipmanlar arasında kesintisiz koordinasyon.",
        paragraphs: [
          "Akıllı tarım uygulamalarında traktör, tarım ekipmanı ve kontrol sistemlerinin birlikte çalışması büyük önem taşır.",
          "Hectare çözümleri, uyumlu makine ve ekipmanların ortak kontrol altyapısında bir araya getirilmesini destekler. Ekim, gübreleme, ilaçlama ve toprak işleme gibi operasyonlarda makine ile ekipman arasındaki koordinasyonun geliştirilmesine yardımcı olur.",
          "Böylece farklı tarımsal uygulamalar daha bütünleşik bir yönetim yaklaşımıyla gerçekleştirilebilir.",
        ],
      },
    ],
    gainsTitle: "Akıllı Tarımın Avantajları",
    gainsLead: "Daha az kayıp. Daha fazla kontrol. Daha verimli operasyon.",
    gainsIntro:
      "Akıllı tarım teknolojileri, tarımsal üretimde yalnızca makine kullanımını değil, kaynak yönetimini ve operasyonel planlamayı da geliştirir.",
    gains: [
      {
        title: "Hassas çalışma",
        text: "GPS destekli sistemlerle tarla içerisindeki çalışma hatlarının daha düzenli takip edilmesi.",
      },
      {
        title: "Kaynak verimliliği",
        text: "Tohum, gübre, ilaç ve yakıt kullanımında gereksiz tüketimin azaltılmasının desteklenmesi.",
      },
      {
        title: "Zaman tasarrufu",
        text: "Otomasyon ve merkezi kontrol sayesinde operatörün iş yükünün azaltılması.",
      },
      {
        title: "Veriye dayalı yönetim",
        text: "Tarımsal faaliyetlerin kayıt altına alınması ve sonraki operasyonlarda kullanılabilecek verilerin oluşturulması.",
      },
      {
        title: "Operatör konforu",
        text: "Uzun çalışma saatlerinde manuel kontrol ihtiyacının azaltılması.",
      },
      {
        title: "Ölçeklenebilir teknoloji",
        text: "Farklı makine ve ekipman ihtiyaçlarına göre geliştirilebilen tarımsal kontrol altyapısı.",
      },
    ],
    closeTitle: "Hectare ile Tarımın Geleceğini Yönetin",
    closeLead: "Teknolojiyi tarlaya, hassasiyeti üretime taşıyın.",
    close: [
      "Her tarla farklıdır. Her üretim sürecinin kendine özgü ihtiyaçları vardır. Bu nedenle doğru teknoloji, doğru makine ve doğru kontrol sisteminin bir araya getirilmesi gerekir.",
      "Hectare olarak akıllı tarım teknolojilerini daha erişilebilir, yönetilebilir ve verimli hâle getirmeyi hedefliyoruz.",
      "İhtiyacınıza uygun çözümü keşfetmek, ürünlerimiz hakkında detaylı bilgi almak veya işletmeniz için özel bir sistem değerlendirmesi gerçekleştirmek üzere bizimle iletişime geçin.",
    ],
    closeTag: "Hectare – Akıllı tarım için güçlü teknoloji.",
    contactCta: "İletişime geçin",
    productsCta: "Ürünleri keşfedin",
  },
  en: {
    hero: "Smart farming",
    introTitle: "Smart Farming Technologies",
    introLead: "Precision, control and efficiency in agriculture.",
    intro: [
      "Hectare smart farming solutions are developed to make agricultural operations more precise, controlled and efficient. By bringing modern farm machinery together with advanced control systems, they help seeding, tillage, steering and field management run in a more systematic way.",
      "With GPS-based positioning, automatic steering, precision applications and smart implement control, farm work rests on measurable data. This reduces operator workload while supporting more effective use of resources and higher operational efficiency.",
    ],
    introClose: "With Hectare, turn control into technology and efficiency into precision.",
    systemsTitle: "Control and Management Systems",
    systemsLead: "Smart control across all your agricultural operations.",
    systems: [
      "Hectare smart farming control systems let you manage tractor and machine workflows through a central control infrastructure.",
      "They combine seeding, fertilising, crop protection and tillage with precise positioning and advanced control technology. While making the operator’s work easier, they support more orderly, repeatable and measurable movement in the field.",
      "With solutions suited to different needs and machine configurations, develop your agricultural mechanisation with smart technology.",
    ],
    featuresLabel: "Key features",
    products: [
      {
        code: "HCT-AKT-001",
        name: "Professional Smart Farming Control System",
        text: "A control infrastructure developed for professional agricultural operations. With technological components that make machine management easier, it offers more controlled and systematic use in field work.",
        features: [
          "Central machine control",
          "Precision positioning infrastructure",
          "Monitoring of agricultural operations",
          "User-friendly control interface",
        ],
        alt: "Professional smart farming control system",
      },
      {
        code: "HCT-AKT-002",
        name: "Precision Farming Management System",
        text: "It brings field operations together with position data and digital control technology. It helps the operator follow working lines, plan movement in the field and carry out applications with greater precision.",
        features: [
          "GPS-supported field management",
          "Precision steering support",
          "Work area and line tracking",
          "Operational control and monitoring",
        ],
        alt: "Precision farming management system",
      },
      {
        code: "HCT-AKT-003",
        name: "Advanced Agricultural Control System",
        text: "A control solution designed for advanced agricultural applications and different implement needs. It aims to build a broader control infrastructure between machine, implement and agricultural operations.",
        features: [
          "Advanced agricultural control infrastructure",
          "Implement integration",
          "Operational process management",
          "Expandable system architecture",
        ],
        alt: "Advanced agricultural control system",
      },
    ],
    productsNote: "Explore all products and find the smart farming solution that fits your operation.",
    techTitle: "Farming Technologies",
    techLead: "Smarter field management with connected technologies.",
    techIntro: [
      "Modern farming is not only about powerful machines. When the right positioning, precise application, data collection and implement control come together, agricultural operations can be managed far more efficiently.",
      "Hectare technologies bring different agricultural applications together under a shared control approach and support the building of a precision farming infrastructure.",
    ],
    technologies: [
      {
        n: "01",
        title: "Automatic Steering",
        kicker: "More precise on every pass, more controlled in every row.",
        paragraphs: [
          "GPS-supported automatic steering helps the tractor follow the set working line. By reducing the need for constant steering input, it supports comfort and operational consistency during long working days.",
          "It helps parallel passes run more evenly and reduces skipped rows and unnecessary overlap.",
        ],
      },
      {
        n: "02",
        title: "Precision Seeding",
        kicker: "The right place for every seed, consistent seeding.",
        paragraphs: [
          "Precision seeding technologies support placing seed according to the set row spacing and seeding pattern. Control of the seeder helps deliver a more consistent seeding operation across the field.",
          "They offer important advantages in controlling seed distribution, improving seeding quality and helping prevent unnecessary seed use.",
        ],
      },
      {
        n: "03",
        title: "Variable Rate Application",
        kicker: "As much resource as each part of the field needs.",
        paragraphs: [
          "Variable rate application (VRA) allows fertiliser, seed and suitable agricultural inputs to be applied according to different needs within the field.",
          "Rates set with digital field maps and application data can be controlled during the operation through compatible implements.",
          "The aim is more efficient use of resources, less unnecessary input consumption and more optimised field management.",
        ],
      },
      {
        n: "04",
        title: "Yield and Soil Mapping",
        kicker: "Know the soil. Make data-based decisions.",
        paragraphs: [
          "Yield and soil mapping systems help analyse field data in a digital environment.",
          "Data collected at harvest and soil analyses can be brought together to assess production performance in different parts of the field.",
          "These data contribute to preparing seeding, fertilising, irrigation and tillage plans more consciously in later seasons.",
        ],
      },
      {
        n: "05",
        title: "Sensor and Camera Technologies",
        kicker: "Follow changes in the field in real time.",
        paragraphs: [
          "Sensor and camera systems monitor environmental conditions and operating parameters during agricultural work.",
          "Data on soil moisture, crop condition, implement performance and the field surface can be collected through compatible sensors.",
          "These technologies support closer follow-up of agricultural processes and timely interventions that match the need.",
        ],
      },
      {
        n: "06",
        title: "Smart Implement Integration",
        kicker: "Seamless coordination between machine and implements.",
        paragraphs: [
          "In smart farming, it is essential that the tractor, agricultural implement and control systems work together.",
          "Hectare solutions support bringing compatible machines and implements together in a shared control infrastructure. They help develop coordination between machine and implement in seeding, fertilising, crop protection and tillage.",
          "Different agricultural applications can then be carried out with a more integrated management approach.",
        ],
      },
    ],
    gainsTitle: "Advantages of Smart Farming",
    gainsLead: "Less loss. More control. More efficient operations.",
    gainsIntro:
      "Smart farming technologies develop not only machine use in agricultural production, but also resource management and operational planning.",
    gains: [
      {
        title: "Precise work",
        text: "More orderly tracking of working lines in the field with GPS-supported systems.",
      },
      {
        title: "Resource efficiency",
        text: "Support for reducing unnecessary use of seed, fertiliser, crop protection and fuel.",
      },
      {
        title: "Time savings",
        text: "Reduced operator workload through automation and central control.",
      },
      {
        title: "Data-based management",
        text: "Recording agricultural activity and creating data that can be used in later operations.",
      },
      {
        title: "Operator comfort",
        text: "Less need for manual control during long working hours.",
      },
      {
        title: "Scalable technology",
        text: "An agricultural control infrastructure that can be developed for different machine and implement needs.",
      },
    ],
    closeTitle: "Manage the Future of Farming with Hectare",
    closeLead: "Bring technology to the field and precision to production.",
    close: [
      "Every field is different. Every production process has its own needs. That is why the right technology, the right machine and the right control system must come together.",
      "As Hectare, we aim to make smart farming technologies more accessible, manageable and efficient.",
      "Contact us to discover the solution that fits your needs, to learn more about our products, or to carry out a system assessment for your operation.",
    ],
    closeTag: "Hectare – Strong technology for smart farming.",
    contactCta: "Contact us",
    productsCta: "Explore products",
  },
} as const;

export function SmartAgriculture() {
  const { lang, t } = useLocale();
  const text = copy[lang];

  return (
    <>
      <section className="page-hero page-hero--film" aria-labelledby="akilli-title">
        <Image
          src={withBase("/media/akilli-tarim-hero.jpeg")}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-copy wrap">
          <h1 id="akilli-title">{text.hero}</h1>
        </div>
      </section>

      <section className="section essay" aria-labelledby="akilli-intro">
        <div className="wrap smart-intro">
          <p className="smart-kicker">{text.introTitle}</p>
          <h2 id="akilli-intro" className="smart-display">
            {text.introLead}
          </h2>
          <div className="essay-body smart-measure">
            {text.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="smart-accent">{text.introClose}</p>
        </div>
      </section>

      <section className="section essay" aria-labelledby="sistem-title">
        <div className="wrap">
          <div className="smart-section-head">
            <h2 id="sistem-title" className="block-title">
              {text.systemsTitle}
            </h2>
            <p className="lede">{text.systemsLead}</p>
          </div>
          <div className="essay-body smart-measure">
            {text.systems.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="smart-products">
            {text.products.map((product, index) => {
              const photo = productPhoto(product.code);
              const subject = encodeURIComponent(`Hectare: ${product.code} ${product.name}`);
              const body = encodeURIComponent(t.quoteBody(product.name, product.code));
              return (
                <li
                  key={product.code}
                  id={product.code}
                  className={index % 2 === 1 ? "smart-product is-flip" : "smart-product"}
                >
                  {photo ? (
                    <div className="smart-product-media">
                      <Image
                        src={withBase(photo)}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 48vw"
                      />
                    </div>
                  ) : null}
                  <div className="smart-product-copy">
                    <p className="tile-code">{product.code}</p>
                    <h3>{product.name}</h3>
                    <p>{product.text}</p>
                    <p className="smart-features-label">{text.featuresLabel}</p>
                    <ul className="smart-features">
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <a className="text-link" href={`mailto:${company.email}?subject=${subject}&body=${body}`}>
                      {t.quote}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="smart-products-foot">
            <p>{text.productsNote}</p>
            <Link className="text-link" href="/urunler/akt">
              {t.viewProducts}
            </Link>
          </div>
        </div>
      </section>

      <section className="section essay" aria-labelledby="teknoloji-title">
        <div className="wrap">
          <div className="smart-section-head">
            <h2 id="teknoloji-title" className="block-title">
              {text.techTitle}
            </h2>
            <p className="lede">{text.techLead}</p>
          </div>
          <div className="essay-body smart-measure">
            {text.techIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className="smart-tech">
            {text.technologies.map((item) => (
              <li key={item.n}>
                <span className="smart-tech-n" aria-hidden="true">
                  {item.n}
                </span>
                <h3>{item.title}</h3>
                <div className="smart-tech-body">
                  <p className="kicker">{item.kicker}</p>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section smart-gains" aria-labelledby="avantaj-title">
        <div className="wrap">
          <div className="smart-section-head">
            <h2 id="avantaj-title" className="block-title">
              {text.gainsTitle}
            </h2>
            <p className="lede">{text.gainsLead}</p>
          </div>
          <p className="smart-gains-intro">{text.gainsIntro}</p>
          <ul className="smart-gains-grid">
            {text.gains.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section essay" aria-labelledby="kapanis-title">
        <div className="wrap smart-close">
          <h2 id="kapanis-title" className="block-title">
            {text.closeTitle}
          </h2>
          <p className="lede">{text.closeLead}</p>
          <div className="essay-body smart-measure">
            {text.close.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="smart-accent">{text.closeTag}</p>
          <div className="smart-cta-row">
            <Link className="text-link" href="/iletisim">
              {text.contactCta}
            </Link>
            <Link className="text-link text-link--ghost" href="/urunler/akt">
              {text.productsCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

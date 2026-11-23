export type HeavyEquipmentSlug =
  | "ekskavatorler"
  | "beko-loderler"
  | "mini-ekskavatorler"
  | "lastik-yukleyiciler"
  | "forkliftler"
  | "ihracat";

type Localized = { tr: string; en: string };

export function heavyEquipmentImage(slug: HeavyEquipmentSlug | string) {
  return `/media/heavy/${slug}.jpg`;
}

export const heavyEquipmentHero = {
  video: "/media/heavy/hero.mp4",
  poster: "/media/heavy/hero-poster.jpg",
} as const;

export const heavyEquipmentScrollFilm = {
  poster: "/media/heavy/crane-frames/frame-001.jpg",
  frames: {
    dir: "/media/heavy/crane-frames",
    prefix: "frame-",
    ext: ".jpg",
    count: 148,
    pad: 3,
  },
} as const;

export const heavyEquipmentCategories = [
  {
    slug: "ekskavatorler" as const,
    image: "/media/heavy/ekskavatorler.jpg",
    title: {
      tr: "Ekskavatörler",
      en: "Excavators",
    } satisfies Localized,
    card: {
      tr: "Zorlu kazı, toprak işleme ve inşaat projeleri için güçlü ve çok yönlü makineler.",
      en: "Powerful and versatile machines designed for demanding excavation, earthmoving and construction projects.",
    } satisfies Localized,
    saleTitle: {
      tr: "Satılık Ekskavatörler",
      en: "Excavators for Sale",
    } satisfies Localized,
    tagline: {
      tr: "Zorlu Projeler İçin Güçlü Performans",
      en: "Powerful Performance for Demanding Projects",
    } satisfies Localized,
    intro: {
      tr: [
        "İnşaat, altyapı, madencilik, yıkım ve toprak işleme uygulamaları için tasarlanmış ekskavatör yelpazemizi keşfedin.",
        "Uluslararası alıcılara, proje gereksinimlerine uygun farklı çalışma ağırlıkları, konfigürasyonlar ve teknik özelliklerde güvenilir ekskavatör tedarikinde yardımcı oluyoruz.",
        "Ağır hizmet operasyonları için paletli bir ekskavatöre veya genel inşaat için çok yönlü bir makineye ihtiyacınız olsun, ihtiyaçlarınıza göre şekillenen tedarik çözümleri sunuyoruz.",
      ],
      en: [
        "Explore our range of excavators designed for construction, infrastructure, mining, demolition and earthmoving applications.",
        "We help international buyers source reliable excavators in different operating weights, configurations and specifications to meet their project requirements.",
        "Whether you need a crawler excavator for heavy-duty operations or a versatile machine for general construction, we offer sourcing solutions tailored to your needs.",
      ],
    },
    applications: {
      tr: [
        "Toprak işleme ve kazı",
        "Yol ve altyapı inşaatı",
        "Taş ocağı ve madencilik",
        "Yıkım ve saha hazırlığı",
        "Altyapı ve drenaj çalışmaları",
      ],
      en: [
        "Earthmoving and excavation",
        "Road and infrastructure construction",
        "Quarrying and mining",
        "Demolition and site preparation",
        "Utility and drainage works",
      ],
    },
    cta: {
      tr: "Ekskavatör mü arıyorsunuz? Mevcut modeller, teknik özellikler ve ihracat fiyatlandırması için ekibimizle iletişime geçin.",
      en: "Looking for an Excavator? Contact our team for available models, specifications and export pricing.",
    } satisfies Localized,
    ctaLabel: {
      tr: "Ekskavatör Teklifi Alın",
      en: "Request an Excavator Quote",
    } satisfies Localized,
  },
  {
    slug: "beko-loderler" as const,
    image: "/media/heavy/beko-loderler.jpg",
    title: {
      tr: "Beko Loderler",
      en: "Backhoe Loaders",
    } satisfies Localized,
    card: {
      tr: "Kazı ve yükleme yeteneklerini bir araya getiren, inşaat, altyapı ve altyapı uygulamaları için çok yönlü makineler.",
      en: "Versatile machines combining digging and loading capabilities for construction, infrastructure and utility applications.",
    } satisfies Localized,
    saleTitle: {
      tr: "Satılık Beko Loderler",
      en: "Backhoe Loaders for Sale",
    } satisfies Localized,
    tagline: {
      tr: "İki Temel Fonksiyon. Tek Çok Yönlü Makine.",
      en: "Two Essential Functions. One Versatile Machine.",
    } satisfies Localized,
    intro: {
      tr: [
        "Beko loderler, ön yükleyici ve arka ekskavatör yeteneklerini birleştirerek geniş bir inşaat ve altyapı proje yelpazesi için yüksek düzeyde çok yönlü makineler sunar.",
        "Esneklik ve verimlilik için tasarlanan bu makineler, aynı şantiyede farklı işleri yürütebilecek çok amaçlı bir makineye ihtiyaç duyan müteahhitler için uygundur.",
        "Müşterilerimize teknik gereksinimleri, çalışma koşulları ve bütçelerine göre beko loder tedarikinde yardımcı oluyoruz.",
      ],
      en: [
        "Backhoe loaders combine the capabilities of a front-end loader and a rear excavator, making them highly versatile machines for a wide range of construction and infrastructure projects.",
        "Designed for flexibility and productivity, they are suitable for contractors who need a multi-purpose machine capable of handling different tasks on the same job site.",
        "We help customers source backhoe loaders according to their technical requirements, operating conditions and budget.",
      ],
    },
    applications: {
      tr: [
        "Kazı ve hendek açma",
        "Malzeme yükleme ve taşıma",
        "Yol inşaatı ve bakımı",
        "Peyzaj ve altyapı çalışmaları",
        "Belediye ve altyapı projeleri",
      ],
      en: [
        "Excavation and trenching",
        "Material loading and handling",
        "Road construction and maintenance",
        "Landscaping and utility works",
        "Municipal and infrastructure projects",
      ],
    },
    cta: {
      tr: "Teknik gereksinimlerinize uygun beko loder tedariki için bizimle iletişime geçin.",
      en: "Contact us to source a backhoe loader that matches your technical requirements.",
    } satisfies Localized,
    ctaLabel: {
      tr: "Beko Loder Teklifi İsteyin",
      en: "Request a Backhoe Loader Quote",
    } satisfies Localized,
  },
  {
    slug: "mini-ekskavatorler" as const,
    image: "/media/heavy/mini-ekskavatorler.jpg",
    title: {
      tr: "Mini Ekskavatörler",
      en: "Mini Excavators",
    } satisfies Localized,
    card: {
      tr: "Kentsel inşaat, peyzaj ve dar çalışma alanları için kompakt, verimli ve manevra kabiliyeti yüksek makineler.",
      en: "Compact, efficient and manoeuvrable machines ideal for urban construction, landscaping and confined working spaces.",
    } satisfies Localized,
    saleTitle: {
      tr: "Satılık Mini Ekskavatörler",
      en: "Mini Excavators for Sale",
    } satisfies Localized,
    tagline: {
      tr: "Kompakt Boyut. Maksimum Çok Yönlülük.",
      en: "Compact Size. Maximum Versatility.",
    } satisfies Localized,
    intro: {
      tr: [
        "Mini ekskavatörler; alan, hassasiyet ve manevra kabiliyetinin önemli olduğu projeler için etkili bir çözüm sunar.",
        "Kompakt boyutları ve çok yönlü ataşmanları sayesinde kentsel inşaat, peyzaj, konut projeleri ve altyapı kurulumları için uygundurlar.",
        "Farklı çalışma ağırlığı sınıfları ve konfigürasyonlarda mini ekskavatör tedarik çözümleri sunuyoruz.",
      ],
      en: [
        "Mini excavators provide an effective solution for projects where space, precision and manoeuvrability matter.",
        "Their compact dimensions and versatile attachments make them suitable for urban construction, landscaping, residential projects and utility installations.",
        "We offer sourcing solutions for mini excavators in different operating weight classes and configurations.",
      ],
    },
    applications: {
      tr: [
        "Peyzaj ve bahçecilik",
        "Konut inşaatı",
        "Hendek açma ve altyapı kurulumu",
        "Kapalı ve dar alan çalışmaları",
        "Küçük ölçekli yıkım",
        "Tarımsal uygulamalar",
      ],
      en: [
        "Landscaping and gardening",
        "Residential construction",
        "Trenching and utility installation",
        "Indoor and confined-space work",
        "Small-scale demolition",
        "Agricultural applications",
      ],
    },
    cta: {
      tr: "Uluslararası makine tedarik hizmetimizle işletmenize uygun mini ekskavatörü bulun.",
      en: "Find the right mini excavator for your business with our international machinery sourcing service.",
    } satisfies Localized,
    ctaLabel: {
      tr: "Mevcut Mini Ekskavatörleri İnceleyin",
      en: "Explore Available Mini Excavators",
    } satisfies Localized,
  },
  {
    slug: "lastik-yukleyiciler" as const,
    image: "/media/heavy/lastik-yukleyiciler.jpg",
    title: {
      tr: "Lastik Yükleyiciler",
      en: "Wheel Loaders",
    } satisfies Localized,
    card: {
      tr: "Malzeme taşıma, yükleme, stoklama ve ağır hizmet operasyonları için güvenilir makineler.",
      en: "Reliable machines designed for material handling, loading, stockpiling and heavy-duty operations.",
    } satisfies Localized,
    saleTitle: {
      tr: "Satılık Lastik Yükleyiciler",
      en: "Wheel Loaders for Sale",
    } satisfies Localized,
    tagline: {
      tr: "Verimlilik ve Ağır Hizmet Operasyonları İçin Tasarlandı",
      en: "Built for Productivity and Heavy-Duty Operations",
    } satisfies Localized,
    intro: {
      tr: [
        "Lastik yükleyiciler; inşaat, madencilik, taş ocağı, tarım ve endüstriyel malzeme taşımada kritik bir rol oynar.",
        "Büyük hacimli malzemeleri verimli şekilde taşımak için tasarlanan bu makineler, zorlu çalışma ortamlarında çok yönlülük sunar.",
        "Uluslararası müşterilere farklı çalışma kapasiteleri, kepçe konfigürasyonları ve teknik özelliklerde lastik yükleyici tedarikinde yardımcı oluyoruz.",
      ],
      en: [
        "Wheel loaders play a vital role in construction, mining, quarrying, agriculture and industrial material handling.",
        "Designed to move large volumes of material efficiently, they offer versatility across demanding working environments.",
        "We help international customers source wheel loaders with different operating capacities, bucket configurations and technical specifications.",
      ],
    },
    applications: {
      tr: [
        "Toplu malzeme yükleme ve taşıma",
        "Taş ocağı ve madencilik operasyonları",
        "Şantiye malzeme taşıma",
        "Agrega ve stok yönetimi",
        "Tarımsal ve endüstriyel operasyonlar",
      ],
      en: [
        "Loading and transporting bulk materials",
        "Quarry and mining operations",
        "Construction site material handling",
        "Aggregate and stockpile management",
        "Agricultural and industrial operations",
      ],
    },
    cta: {
      tr: "Lastik yükleyici gereksinimlerinizi görüşmek ve size özel teklif almak için bizimle iletişime geçin.",
      en: "Contact us to discuss your wheel loader requirements and receive a tailored quotation.",
    } satisfies Localized,
    ctaLabel: {
      tr: "Lastik Yükleyici Teklifi Alın",
      en: "Get a Wheel Loader Quote",
    } satisfies Localized,
  },
  {
    slug: "forkliftler" as const,
    image: "/media/heavy/forkliftler.jpg",
    title: {
      tr: "Forkliftler",
      en: "Forklifts",
    } satisfies Localized,
    card: {
      tr: "Depolar, sanayi tesisleri, lojistik merkezleri ve şantiyeler için verimli malzeme taşıma çözümleri.",
      en: "Efficient material handling solutions for warehouses, industrial facilities, logistics centres and construction sites.",
    } satisfies Localized,
    saleTitle: {
      tr: "Satılık Forkliftler",
      en: "Forklifts for Sale",
    } satisfies Localized,
    tagline: {
      tr: "Her Sektör İçin Verimli Malzeme Taşıma",
      en: "Efficient Material Handling for Every Industry",
    } satisfies Localized,
    intro: {
      tr: [
        "Forkliftler; güvenli, verimli ve güvenilir malzeme taşıma ihtiyacı olan işletmeler için vazgeçilmezdir.",
        "Depolar, dağıtım merkezleri, üretim tesisleri, lojistik operasyonları ve inşaat ortamları için forklift tedarikinde şirketlere yardımcı oluyoruz.",
        "Operasyonel ihtiyaçlara göre müşteriler farklı kaldırma kapasiteleri, mast konfigürasyonları, yakıt türleri ve ekipman özelliklerini değerlendirebilir.",
      ],
      en: [
        "Forklifts are essential for businesses that require safe, efficient and reliable material handling.",
        "We help companies source forklifts for warehouses, distribution centres, manufacturing facilities, logistics operations and construction environments.",
        "Depending on operational needs, customers can explore different lifting capacities, mast configurations, fuel types and equipment specifications.",
      ],
    },
    applications: {
      tr: [
        "Depolama ve dağıtım",
        "Üretim ve endüstriyel tesisler",
        "Lojistik ve yük operasyonları",
        "İnşaat ve yapı malzemeleri",
        "Liman ve kargo elleçleme",
      ],
      en: [
        "Warehousing and distribution",
        "Manufacturing and industrial facilities",
        "Logistics and freight operations",
        "Construction and building materials",
        "Port and cargo handling",
      ],
    },
    cta: {
      tr: "Uluslararası makine ticaret ağımız aracılığıyla işletmenize uygun forklift çözümlerini bulun.",
      en: "Find suitable forklift solutions for your business through our international machinery trading network.",
    } satisfies Localized,
    ctaLabel: {
      tr: "Forklift Teklifi İsteyin",
      en: "Request a Forklift Quote",
    } satisfies Localized,
  },
] as const;

export const heavyEquipmentExport = {
  slug: "ihracat" as const,
  image: "/media/heavy/ihracat.jpg",
  title: {
    tr: "Makine İhracatı ve Dünya Çapında Sevkiyat",
    en: "Machinery Export & Worldwide Shipping",
  } satisfies Localized,
  tagline: {
    tr: "Türkiye’den Hedefinize",
    en: "From Türkiye to Your Destination",
  } satisfies Localized,
  intro: {
    tr: [
      "Uluslararası müşterilerin Türkiye’den inşaat makineleri tedarik etmesine ve ihracat sürecinin hedef ülkeye kadar koordinasyonuna yardımcı oluyoruz.",
      "İhracat hizmetimiz; ilk taleplerden sevkiyat düzenlemelerine kadar uluslararası makine alımını daha anlaşılır hale getirmek için tasarlanmıştır.",
    ],
    en: [
      "We help international customers source construction machinery from Türkiye and coordinate the export process to their destination countries.",
      "Our export service is designed to make international machinery purchasing more straightforward, from initial enquiries to shipping arrangements.",
    ],
  },
  processTitle: {
    tr: "İhracat Sürecimiz",
    en: "Our Export Process",
  } satisfies Localized,
  steps: [
    {
      n: "01",
      title: { tr: "Gereksinimlerinizi Paylaşın", en: "Share Your Requirements" },
      text: {
        tr: "İhtiyacınız olan makineyi; tercih ettiğiniz marka, model, teknik özellikler ve hedef ülke ile birlikte bize bildirin.",
        en: "Tell us which machine you need, including your preferred brand, model, specifications and destination country.",
      },
    },
    {
      n: "02",
      title: { tr: "Makine Tedariği", en: "Machinery Sourcing" },
      text: {
        tr: "Gereksinimlerinize ve bütçenize göre uygun makine seçeneklerini belirliyoruz.",
        en: "We identify suitable machinery options based on your requirements and budget.",
      },
    },
    {
      n: "03",
      title: { tr: "Teklif ve Onay", en: "Quotation & Confirmation" },
      text: {
        tr: "Mevcut ekipman detaylarını, fiyatlandırmayı ve ilgili ticari bilgileri sağlıyoruz.",
        en: "We provide available equipment details, pricing and relevant commercial information.",
      },
    },
    {
      n: "04",
      title: { tr: "İhracat Belgeleri", en: "Export Documentation" },
      text: {
        tr: "Gerekli ihracat belgelerinin ve sevkiyat hazırlıklarının koordinasyonunu sağlıyoruz.",
        en: "We coordinate the necessary export documentation and shipping preparations.",
      },
    },
    {
      n: "05",
      title: { tr: "Uluslararası Sevkiyat", en: "International Shipping" },
      text: {
        tr: "Hedef ülke, ekipman ölçüleri ve kararlaştırılan teslim şartlarına göre sevkiyat koordinasyonunu düzenliyoruz.",
        en: "We arrange shipping coordination according to the destination, equipment dimensions and agreed delivery terms.",
      },
    },
  ] as const,
  marketsTitle: {
    tr: "Dünya Çapında Makine Tedariki",
    en: "Worldwide Machinery Supply",
  } satisfies Localized,
  markets: {
    tr: [
      "Avrupa, Afrika, Orta Doğu, Orta Asya ve diğer uluslararası pazarlardaki müşterilere hizmet etmeyi hedefliyoruz.",
      "Tek bir makine satın alıyor olun veya daha büyük bir filo için ekipman tedarik ediyor olun, ekibimiz gereksinimlerinizi görüşmeye hazırdır.",
    ],
    en: [
      "We aim to serve customers across Europe, Africa, the Middle East, Central Asia and other international markets.",
      "Whether you are purchasing a single machine or sourcing equipment for a larger fleet, our team is ready to discuss your requirements.",
    ],
  },
  ctaTitle: {
    tr: "Türkiye’den Makine İthal Etmek mi İstiyorsunuz?",
    en: "Looking to Import Machinery from Türkiye?",
  } satisfies Localized,
  ctaText: {
    tr: "Hedef ülkeniz, ekipman gereksinimleriniz ve sevkiyat seçeneklerinizi görüşmek için ihracat ekibimizle iletişime geçin.",
    en: "Get in touch with our export team to discuss your destination, equipment requirements and shipping options.",
  } satisfies Localized,
  ctaLabel: {
    tr: "İhracat Ekibiyle İletişime Geçin",
    en: "Contact Our Export Team",
  } satisfies Localized,
} as const;

export const heavyEquipmentPage = {
  eyebrow: { tr: "İş Makineleri · Küresel Çözümler", en: "Heavy Equipment. Global Solutions." },
  hero: {
    tr: "Güvenilir İnşaat Makineleri, Dünya Çapında Teslimat.",
    en: "Reliable Construction Machinery, Delivered Worldwide.",
  },
  intro: {
    tr: [
      "Türkiye’den dünyanın dört bir yanındaki pazarlara yüksek kaliteli inşaat makineleri tedarik ediyor ve ihraç ediyoruz. Ekskavatörler ve beko loderlerden lastik yükleyicilere, mini ekskavatörlere ve forkliftlere kadar işletmeleri projelerine uygun ekipmanla buluşturuyoruz.",
      "Kalite, rekabetçi fiyatlandırma ve güvenilir uluslararası ticarete odaklanarak ağır iş makineleri tedarikini basit ve verimli hale getiriyoruz.",
    ],
    en: [
      "We supply and export high-quality construction machinery from Türkiye to markets around the world. From excavators and backhoe loaders to wheel loaders, mini excavators and forklifts, we connect businesses with the right equipment for their projects.",
      "With a focus on quality, competitive pricing and reliable international trade, we make sourcing heavy equipment straightforward and efficient.",
    ],
  },
  primaryCta: { tr: "Makinelerimizi Keşfedin", en: "Explore Our Machinery" },
  secondaryCta: { tr: "Teklif İsteyin", en: "Request a Quote" },
  partnerTitle: {
    tr: "Ağır İş Makineleri Ticaretinde Güvenilir Ortağınız",
    en: "Your Trusted Partner in Heavy Equipment Trading",
  },
  partnerText: {
    tr: "Doğru makineyi bulmak basit olmalıdır. İnşaat şirketleri, müteahhitler, bayiler ve ekipman alıcılarına; operasyonel gereksinimlerine ve bütçelerine uygun güvenilir makineler tedarik etmelerinde yardımcı oluyoruz.",
    en: "Finding the right machinery should be simple. We help construction companies, contractors, dealers and equipment buyers source reliable machinery that meets their operational requirements and budget.",
  },
  partnerPoints: {
    tr: [
      "Geniş inşaat makinesi yelpazesi",
      "Rekabetçi uluslararası fiyatlandırma",
      "Dünya çapında ihracat ve lojistik koordinasyonu",
      "Profesyonel satış desteği",
      "Esnek tedarik çözümleri",
    ],
    en: [
      "Wide range of construction machinery",
      "Competitive international pricing",
      "Worldwide export and logistics coordination",
      "Professional sales support",
      "Flexible sourcing solutions",
    ],
  },
  machineryTitle: { tr: "Makinelerimiz", en: "Our Machinery" },
  machineryLede: {
    tr: "İnşaat ve malzeme taşıma ekipmanı yelpazemizi keşfedin.",
    en: "Discover our range of construction and material handling equipment.",
  },
  bridgeTitle: {
    tr: "Türkiye’yi Küresel Pazarlara Bağlıyoruz",
    en: "Connecting Türkiye to Global Markets",
  },
  bridgeText: {
    tr: "Türkiye merkezli olarak, uluslararası alıcılara geniş bir inşaat makinesi yelpazesine erişim sağlıyoruz. Müşterilerimizin ekipmanı güvenle satın almasına yardımcı olmak için tedarik, satış ve ihracat sürecini koordine ediyoruz.",
    en: "Based in Türkiye, we provide international buyers with access to a diverse range of construction machinery. We coordinate the sourcing, sales and export process to help our customers purchase equipment with confidence.",
  },
  bridgeCta: {
    tr: "İhracat ve Sevkiyat",
    en: "Export & Shipping",
  },
  closeTitle: {
    tr: "Doğru Makineyi mi Arıyorsunuz?",
    en: "Looking for the Right Machine?",
  },
  closeText: {
    tr: "Hangi ekipmana ihtiyacınız olduğunu bize söyleyin; ekibimiz uygun çözümü bulmanıza yardımcı olsun.",
    en: "Tell us what equipment you need, and our team will help you find a suitable solution.",
  },
  contactCta: {
    tr: "Satış Ekibimizle İletişime Geçin",
    en: "Contact Our Sales Team",
  },
  quoteCta: {
    tr: "Özel Teklif Alın",
    en: "Get a Custom Quote",
  },
} as const;

export function findHeavyEquipmentCategory(slug: string) {
  return heavyEquipmentCategories.find((item) => item.slug === slug);
}

export function isHeavyEquipmentSlug(slug: string): slug is HeavyEquipmentSlug {
  return (
    slug === heavyEquipmentExport.slug ||
    heavyEquipmentCategories.some((item) => item.slug === slug)
  );
}

export const heavyEquipmentSlugs: HeavyEquipmentSlug[] = [
  ...heavyEquipmentCategories.map((item) => item.slug),
  heavyEquipmentExport.slug,
];

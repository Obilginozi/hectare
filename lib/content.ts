export const company = {
  name: "Hectare AŞ",
  phoneDisplay: "0 533 381 42 18",
  phoneTel: "+905333814218",
  whatsapp: "https://wa.me/905333814218",
  email: "team@hectare.com.tr",
  street: "Vişnezade Mah. Süleyman Seba Cad. No: 79 İç Kapı No: 1 Akaretler",
  locality: "Beşiktaş",
  region: "İstanbul",
  addressLines: [
    "Vişnezade Mah. Süleyman Seba Cad.",
    "No: 79 İç Kapı No: 1 Akaretler",
    "Beşiktaş / İstanbul",
  ],
} as const;

export const description =
  "Hectare AŞ has worked in agricultural machinery and construction equipment for more than 30 years, and in international trade for more than 10 years.";

export const navLinks = [
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/ticaret", label: "Ticaret" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/markalar", label: "Markalar" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const trade = [
  {
    country: "Azerbaycan",
    works: [
      "MKT yedek parça",
      "Ağsu Agropark T8.380 FR500",
      "Afqan Grup",
      "Azersun",
      "Niap",
      "1290",
      "Ramazan Karaşahin Agromilia",
    ],
  },
  { country: "Bulgaristan", works: ["Animex", "Agrohol"] },
  { country: "Slovenya", works: [] },
  { country: "Polonya", works: ["Tomar", "Bestkop", "K M Rent"] },
  {
    country: "Rusya",
    works: ["St. Petersburg İllia", "RB Auto", "United Industrial", "Altair"],
  },
  { country: "Yunanistan", works: ["Smirlakis", "Condaallis"] },
  { country: "İtalya", works: ["Alcar", "İmac"] },
  { country: "Romanya", works: ["Utirom"] },
  { country: "Filistin", works: [] },
  { country: "Irak", works: [] },
  { country: "Gürcistan", works: ["GT Group"] },
  { country: "Almanya", works: ["Lemken"] },
  { country: "Hindistan", works: ["Fieldking"] },
  { country: "Danimarka", works: ["Copenhagen Global", "Rold Maskinhandel"] },
  { country: "Sierra Leone", works: [] },
  { country: "Moritanya", works: [] },
  { country: "Çad", works: [] },
  { country: "Belarus", works: [] },
  { country: "Arnavutluk", works: [] },
  { country: "Kosova", works: [] },
  { country: "Fas", works: [] },
  { country: "Mısır", works: [] },
  { country: "Kazakistan", works: [] },
  { country: "Japonya", works: ["Futurebud", "Cigs"] },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "/gizlilik", label: "Gizlilik" },
] as const;

export const chapters = [
  {
    id: "expertise",
    modifier: "expertise",
    label: "HECTARE / TARIMSAL ÇÖZÜMLER",
    lines: ["TARIMIN", "GELECEĞİNİ", "GÜÇLENDİRİR."],
  },
  {
    id: "machinery",
    modifier: "machinery",
    label: "HECTARE / MAKİNE VE TEKNOLOJİ",
    lines: ["TOPRAK", "İÇİN", "TASARLANDI."],
  },
  {
    id: "final",
    modifier: "final",
    label: "HECTARE / HAREKETTE GÜVEN",
    lines: ["HER TARLA", "İÇİN ÜRETİLDİ.", "SIRADAKİNE", "HAZIR."],
  },
] as const;

export const products = [
  {
    slug: "zirkon-8",
    name: "Zirkon 8",
    brand: "LEMKEN",
    category: "Dik rotavatör",
    summary:
      "60 ila 175 HP arası traktörler için dik rotavatör. Ek donanım seçenekleri, döner tırmığı çalışma koşullarına göre uyarlamayı sağlar.",
    image: "/media/products/zirkon-8.jpg",
    alt: "Lemken Zirkon 8 dik rotavatör, traktörün arkasında işlenmiş toprakta",
    specs: [
      "60–175 HP traktörler için",
      "Eğimli tava profili; taban 8 mm, kapak 6 mm, birlikte kaynaklı",
      "Standart 300 mm cıvatalı dişler; 320 mm hızlı değiştirilebilir çatallar seçenek",
      "Saphir veya Solitair ekim makineleri ile kombine edilebilir",
      "İsteğe bağlı üç noktalı bağlantı",
      "Traktörün önünde veya arkasında kullanım",
      "İsteğe bağlı DUAL-Shift: 300–400 d/dk, kavrama veya sürükleme",
      "İsteğe bağlı dengeleme çubuğu, yandan ayarlanır",
    ],
  },
  {
    slug: "regular-multi-speed",
    name: "Regular Multi Speed",
    brand: "FIELDKING",
    category: "Rotovatör",
    summary:
      "Çok devirli dişli kutusu, farklı toprak koşulları ve uygulamalar için dört rotor devri sunar.",
    image: "/media/products/fieldking-multi.jpg",
    alt: "Fieldking Regular Multi Speed rotovatör, tarlada traktöre bağlı",
    specs: [
      "Dört rotor devri",
      "Yağ banyolu ağır hizmet tipi yan dişli tahrik",
      "7 inç derinliğe kadar gevşetme ve havalandırma",
      "Ağır hizmet tipi yay tertibatı ile düzleştirilmiş tohum yatağı",
      "Boron çelik bıçaklar; Hi Carbon'dan %50 daha uzun ömür",
      "Helisel bıçak dizilimi",
      "Kolay derinlik ayarı için derinlik kızağı",
      "L, C ve J bıçak seçenekleri",
      "Kesme cıvatalı veya isteğe bağlı kayar kavramalı PTO",
      "Sızdırmaz yataklar",
    ],
  },
  {
    slug: "regular-single-speed",
    name: "Regular Single Speed",
    brand: "FIELDKING",
    category: "Rotovatör",
    summary:
      "Ağır hizmet tipi yay tertibatı, düzleştirilmiş ve bitmiş bir tohum yatağı oluşturur.",
    image: "/media/products/fieldking-single.jpg",
    alt: "Fieldking Regular Single Speed rotovatör, tarlada traktöre bağlı",
    specs: [
      "Yağ banyolu ağır hizmet tipi yan dişli tahrik",
      "7 inç derinliğe kadar gevşetme ve havalandırma",
      "Ağır hizmet tipi yay tertibatı ile düzleştirilmiş tohum yatağı",
      "Boron çelik bıçaklar; Hi Carbon'dan %50 daha uzun ömür",
      "Helisel bıçak dizilimi",
      "L, C ve J bıçak seçenekleri",
      "Kesme cıvatalı veya isteğe bağlı kayar kavramalı PTO",
      "Sızdırmaz yataklar",
    ],
  },
] as const;

export const categories = [
  "Toprak hazırlama",
  "Ekim, bakım ve bitki koruma",
  "Ot hasadı",
  "Römork ve tanker",
  "Yem karma makineleri",
  "Zeytinyağı",
  "Kazıcı yükleyici, teleskopik yükleyici, skid steer, mini ekskavatör",
  "Traktörler",
  "Yedek parça ve makine tedariki",
] as const;


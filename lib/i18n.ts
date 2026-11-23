export type Lang = "tr" | "en";

export const messages = {
  tr: {
    skip: "İçeriğe geç",
    menu: "Menü",
    close: "Kapat",
    navLabel: "Ana menü",
    mobileLabel: "Mobil menü",
    footerLabel: "Alt menü",
    view: "İncele",
    quote: "Teklif İste",
    quoteBody: (name: string, code: string) => `${name} (${code}) için teklif almak istiyorum.`,
    productCount: (count: number) => `${count} ürün`,
    scroll: "Kaydır",
    contactLabel: "İletişim",
    pagesLabel: "Sayfalar",
    legalLabel: "Gizlilik Sözleşmeleri",
    socialLabel: "Sosyal Medya",
    phone: "Telefon",
    email: "E-posta",
    address: "Adres",
    otherCountries: "Diğer Ülkeler",
    productsLink: "Ürünler",
    viewProducts: "Ürünleri İncele",
    language: "Dil",
  },
  en: {
    skip: "Skip To Content",
    menu: "Menu",
    close: "Close",
    navLabel: "Main Menu",
    mobileLabel: "Mobile Menu",
    footerLabel: "Footer Menu",
    view: "View",
    quote: "Request A Quote",
    quoteBody: (name: string, code: string) => `I would like a quotation for ${name} (${code}).`,
    productCount: (count: number) => (count === 1 ? "1 product" : `${count} products`),
    scroll: "Scroll",
    contactLabel: "Contact",
    pagesLabel: "Pages",
    legalLabel: "Privacy & Policies",
    socialLabel: "Social Media",
    phone: "Phone",
    email: "Email",
    address: "Address",
    otherCountries: "Other Countries",
    productsLink: "Products",
    viewProducts: "View The Products",
    language: "Language",
  },
} as const;

const nav: Record<string, Record<Lang, string>> = {
  "/": { tr: "Ana Sayfa", en: "Home" },
  "/kurumsal": { tr: "Kurumsal", en: "Corporate" },
  "/urunler": { tr: "Ürünler", en: "Products" },
  "/is-makineleri": { tr: "İş Makineleri", en: "Heavy Equipment" },
  "/iletisim": { tr: "İletişim", en: "Contact" },
  "/yasal/iptal-ve-iade": {
    tr: "İptal Ve İade Koşulları",
    en: "Cancellation and Returns",
  },
  "/yasal/mesafeli-satis": {
    tr: "Mesafeli Satış Sözleşmesi",
    en: "Distance Sales Agreement",
  },
  "/yasal/gizlilik-politikasi": {
    tr: "Gizlilik Politikası",
    en: "Privacy Policy",
  },
  "/yasal/kisisel-verilerin-korunmasi": {
    tr: "Kişisel Verilerin Korunması",
    en: "Personal Data Protection",
  },
  "/yasal/uyelik-ve-kullanim": {
    tr: "Üyelik Ve Kullanım Sözleşmesi",
    en: "Membership and Terms of Use",
  },
  "/yasal/cerez-politikasi": {
    tr: "Çerez Politikası",
    en: "Cookie Policy",
  },
};

const groups: Record<string, string> = {
  "Ekim Ve Bakım": "Seeding And Care",
  "Toprak İşleme": "Tillage",
  "Ot Hasadı": "Forage Harvesting",
  "Traktör Ekipmanları": "Tractor Equipment",
};

const categories: Record<string, string> = {
  mib: "Cereal And Seed Drills",
  cap: "Hoeing And Inter-Row Cultivation",
  gub: "Fertiliser Spreaders",
  akt: "Smart Farming Systems",
  top: "Disc Tillage And Cultivators",
  rot: "Rotavators",
  tes: "Levelling Equipment",
  bic: "Grass And Forage Mowers",
  otk: "Tedders",
  otr: "Rotary Rakes",
  ytr: "Wheel And Tine Rakes",
  bal: "Balers",
  sar: "Bale Wrappers",
  sil: "Forage Harvesters",
  kaz: "Tractor Rear Excavators",
  yuk: "Tractor Front Loaders",
};

const countries: Record<string, string> = {
  Azerbaycan: "Azerbaijan",
  Bulgaristan: "Bulgaria",
  Slovenya: "Slovenia",
  Polonya: "Poland",
  Rusya: "Russia",
  Yunanistan: "Greece",
  İtalya: "Italy",
  Romanya: "Romania",
  Filistin: "Palestine",
  Irak: "Iraq",
  Gürcistan: "Georgia",
  Almanya: "Germany",
  Hindistan: "India",
  Danimarka: "Denmark",
  "Sierra Leone": "Sierra Leone",
  Moritanya: "Mauritania",
  Çad: "Chad",
  Belarus: "Belarus",
  Arnavutluk: "Albania",
  Kosova: "Kosovo",
  Fas: "Morocco",
  Mısır: "Egypt",
  Kazakistan: "Kazakhstan",
  Japonya: "Japan",
};

const titles: Record<string, Record<Lang, string>> = {
  "/": {
    tr: "Hectare AŞ | Tarım Makineleri ve İş Makineleri",
    en: "Hectare AŞ | Agricultural and Construction Machinery",
  },
  "/kurumsal": { tr: "Kurumsal | Hectare AŞ", en: "Corporate | Hectare AŞ" },
  "/urunler": { tr: "Ürünler | Hectare AŞ", en: "Products | Hectare AŞ" },
  "/is-makineleri": {
    tr: "İş Makineleri | Hectare AŞ",
    en: "Heavy Equipment | Hectare AŞ",
  },
  "/is-makineleri/ekskavatorler": {
    tr: "Satılık Ekskavatörler | Hectare AŞ",
    en: "Excavators for Sale | Hectare AŞ",
  },
  "/is-makineleri/beko-loderler": {
    tr: "Satılık Beko Loderler | Hectare AŞ",
    en: "Backhoe Loaders for Sale | Hectare AŞ",
  },
  "/is-makineleri/mini-ekskavatorler": {
    tr: "Satılık Mini Ekskavatörler | Hectare AŞ",
    en: "Mini Excavators for Sale | Hectare AŞ",
  },
  "/is-makineleri/lastik-yukleyiciler": {
    tr: "Satılık Lastik Yükleyiciler | Hectare AŞ",
    en: "Wheel Loaders for Sale | Hectare AŞ",
  },
  "/is-makineleri/forkliftler": {
    tr: "Satılık Forkliftler | Hectare AŞ",
    en: "Forklifts for Sale | Hectare AŞ",
  },
  "/is-makineleri/ihracat": {
    tr: "Makine İhracatı ve Sevkiyat | Hectare AŞ",
    en: "Machinery Export & Shipping | Hectare AŞ",
  },
  "/iletisim": { tr: "İletişim | Hectare AŞ", en: "Contact | Hectare AŞ" },
  "/yasal/iptal-ve-iade": {
    tr: "İptal Ve İade Koşulları | Hectare AŞ",
    en: "Cancellation and Returns | Hectare AŞ",
  },
  "/yasal/mesafeli-satis": {
    tr: "Mesafeli Satış Sözleşmesi | Hectare AŞ",
    en: "Distance Sales Agreement | Hectare AŞ",
  },
  "/yasal/gizlilik-politikasi": {
    tr: "Gizlilik Politikası | Hectare AŞ",
    en: "Privacy Policy | Hectare AŞ",
  },
  "/yasal/kisisel-verilerin-korunmasi": {
    tr: "Kişisel Verilerin Korunması | Hectare AŞ",
    en: "Personal Data Protection | Hectare AŞ",
  },
  "/yasal/uyelik-ve-kullanim": {
    tr: "Üyelik Ve Kullanım Sözleşmesi | Hectare AŞ",
    en: "Membership and Terms of Use | Hectare AŞ",
  },
  "/yasal/cerez-politikasi": {
    tr: "Çerez Politikası | Hectare AŞ",
    en: "Cookie Policy | Hectare AŞ",
  },
};

export function navName(lang: Lang, href: string, fallback: string) {
  return nav[href]?.[lang] ?? fallback;
}

export function groupName(lang: Lang, name: string) {
  return lang === "en" ? (groups[name] ?? name) : name;
}

export function categoryName(lang: Lang, slug: string, name: string) {
  return lang === "en" ? (categories[slug] ?? name) : name;
}

export function countryName(lang: Lang, name: string) {
  return lang === "en" ? (countries[name] ?? name) : name;
}

export function pageTitle(lang: Lang, pathname: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  if (titles[path]) return titles[path][lang];
  const category = path.match(/^\/urunler\/([^/]+)$/);
  if (category) {
    const name = categories[category[1]];
    if (name) return lang === "en" ? `${name} | Hectare AŞ` : undefined;
  }
  return undefined;
}

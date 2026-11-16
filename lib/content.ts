export const company = {
  name: "Hectare AŞ",
  phoneDisplay: "0 533 381 42 18",
  phoneTel: "+905333814218",
  whatsapp: "https://wa.me/905333814218",
  email: "team@hectare.com.tr",
  instagram: "https://www.instagram.com/hectare_ft/",
  facebook: "https://www.facebook.com/hectare.sale",
  street: "Vişnezade Mah. Süleyman Seba Cad. No: 79 İç Kapı No: 1 Akaretler",
  locality: "Beşiktaş",
  region: "İstanbul",
  addressLines: [
    "Vişnezade Mah. Süleyman Seba Cad.",
    "No: 79 İç Kapı No: 1 Akaretler",
    "Beşiktaş / İstanbul",
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=Vi%C5%9Fnezade%20Mah.%20S%C3%BCleyman%20Seba%20Cad.%20No%3A%2079%20%C4%B0%C3%A7%20Kap%C4%B1%20No%3A%201%20Akaretler%20Be%C5%9Fikta%C5%9F%20%C4%B0stanbul&hl=tr&z=17&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Vi%C5%9Fnezade%20Mah.%20S%C3%BCleyman%20Seba%20Cad.%20No%3A%2079%20Akaretler%20Be%C5%9Fikta%C5%9F%20%C4%B0stanbul",
} as const;

export const description =
  "Hectare AŞ olarak otuz yıldan uzun süredir tarım makineleri ve iş makineleri tedarik ediyoruz. On yıldan uzun süredir tecrübemiz ve kadromuzla uluslararası ticaret yürütüyoruz.";

export const navLinks = [
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/ticaret", label: "İştiraklerimiz" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/akilli-tarim", label: "Akıllı Tarım" },
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

export const footerLinks = [...navLinks] as const;

export const chapters = [
  {
    id: "expertise",
    modifier: "expertise",
    label: "HECTARE AŞ",
    lines: ["Tarım ve iş makineleri"],
  },
  {
    id: "machinery",
    modifier: "machinery",
    label: "HECTARE AŞ",
    lines: ["TRAKTÖR, EKİPMAN", "VE YEDEK PARÇA."],
  },
] as const;


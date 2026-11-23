export type CatalogProduct = {
  code: string;
  name: string;
};

export type CatalogCategory = {
  code: string;
  slug: string;
  name: string;
  group: string;
  products: readonly CatalogProduct[];
};

const item = (code: string, name: string): CatalogProduct => ({ code, name });

export const catalog: readonly CatalogCategory[] = [
  {
    code: "MIB",
    slug: "mib",
    name: "Hububat Ve Tohum Ekim Makineleri",
    group: "Ekim Ve Bakım",
    products: [
      item("HCT-MIB-001", "Profesyonel Kombine Hububat Mibzeri"),
      item("HCT-MIB-002", "Yüksek Kapasiteli Hububat Mibzeri"),
      item("HCT-MIB-003", "Mekanik Şanzımanlı Hububat Mibzeri"),
      item("HCT-MIB-004", "Baltalı Mekanik Hububat Mibzeri"),
      item("HCT-MIB-005", "Rotovatör Entegreli Kombine Hububat Mibzeri"),
      item("HCT-MIB-006", "Anıza Doğrudan Ekim Mibzeri"),
      item("HCT-MIB-007", "Sabit Şaseli Diskli Havalı Ekim Makinesi"),
      item("HCT-MIB-008", "Yarı Teleskopik Diskli Havalı Ekim Makinesi"),
      item("HCT-MIB-009", "Tam Teleskopik Diskli Havalı Ekim Makinesi"),
      item("HCT-MIB-010", "Katlanır Teleskopik Diskli Havalı Ekim Makinesi"),
      item("HCT-MIB-011", "Geniş İş Genişlikli Katlanır Diskli Ekim Makinesi"),
      item("HCT-MIB-012", "Sabit Şaseli Baltalı Havalı Ekim Makinesi"),
      item("HCT-MIB-013", "Yarı Teleskopik Baltalı Havalı Ekim Makinesi"),
      item("HCT-MIB-014", "Tam Teleskopik Baltalı Havalı Ekim Makinesi"),
      item("HCT-MIB-015", "Katlanır Şaseli Baltalı Havalı Ekim Makinesi"),
      item("HCT-MIB-016", "Profesyonel Soğan Ekim Makinesi"),
      item("HCT-MIB-017", "Özel Amaçlı Hassas Ekim Makinesi"),
    ],
  },
  {
    code: "CAP",
    slug: "cap",
    name: "Çapa Ve Sıra Arası İşleme",
    group: "Ekim Ve Bakım",
    products: [
      item("HCT-CAP-001", "Sabit Şaseli Yaylı Sıra Arası Çapa Makinesi"),
      item("HCT-CAP-002", "Katlanır Şaseli Yaylı Sıra Arası Çapa Makinesi"),
      item("HCT-CAP-003", "Frezeli Sıra Arası Çapa Makinesi"),
      item("HCT-CAP-004", "Katlanır Frezeli Sıra Arası Çapa Makinesi"),
      item("HCT-CAP-005", "Döner Kesek Kırma Makinesi"),
    ],
  },
  {
    code: "GUB",
    slug: "gub",
    name: "Gübre Dağıtma Makineleri",
    group: "Ekim Ve Bakım",
    products: [item("HCT-GUB-001", "Tek Diskli Santrifüj Gübre Dağıtma Makinesi")],
  },
  {
    code: "AKT",
    slug: "akt",
    name: "Akıllı Tarım Sistemleri",
    group: "Ekim Ve Bakım",
    products: [
      item("HCT-AKT-001", "Profesyonel Akıllı Tarım Kontrol Sistemi"),
      item("HCT-AKT-002", "Hassas Tarım Yönetim Sistemi"),
      item("HCT-AKT-003", "İleri Seviye Tarımsal Kontrol Sistemi"),
    ],
  },
  {
    code: "TOP",
    slug: "top",
    name: "Diskli Toprak İşleme Ve Kültivatörler",
    group: "Toprak İşleme",
    products: [
      item("HCT-TOP-001", "Asılır Bağımsız Diskli Toprak İşleme Makinesi"),
      item("HCT-TOP-002", "Çekilir Bağımsız Diskli Toprak İşleme Makinesi"),
      item("HCT-TOP-003", "Katlanır Asılır Bağımsız Diskli Makine"),
      item("HCT-TOP-004", "Katlanır Çekilir Bağımsız Diskli Makine"),
      item("HCT-TOP-005", "Ağır Hizmet Tipi Çekilir Diskaro"),
      item("HCT-TOP-006", "Standart Tip Çekilir Diskaro"),
      item("HCT-TOP-007", "Hafif Tip Çekilir Diskaro"),
      item("HCT-TOP-008", "Hafif Tip Asılır Ofset Diskaro"),
      item("HCT-TOP-009", "Ağır Tip Asılır Ofset Diskaro"),
      item("HCT-TOP-010", "Tek Yönlü Diskli Toprak İşleme Makinesi"),
      item("HCT-TOP-011", "Standart Dipkazan"),
      item("HCT-TOP-012", "Derin Toprak Patlatma Makinesi"),
      item("HCT-TOP-013", "Hidropnömatik Dipkazan"),
      item("HCT-TOP-014", "Ağır Hizmet Tipi Derin Dipkazan"),
      item("HCT-TOP-015", "Sabit Şaseli Çizel"),
      item("HCT-TOP-016", "Yaylı Çizel"),
      item("HCT-TOP-017", "Sap Parçalama Makinesi"),
      item("HCT-TOP-018", "Anız İşleme Kültivatörü"),
      item("HCT-TOP-019", "Sabit Şaseli S Ayaklı Kültivatör"),
      item("HCT-TOP-020", "Katlanır Şaseli S Ayaklı Kültivatör"),
      item("HCT-TOP-021", "Şeritvari Toprak İşleme Makinesi"),
      item("HCT-TOP-022", "Asılır Döküm Toprak Merdanesi"),
      item("HCT-TOP-023", "Çekilir Döküm Toprak Merdanesi"),
      item("HCT-TOP-024", "Katlanır Çekilir Döküm Toprak Merdanesi"),
      item("HCT-TOP-025", "Asılır Çamur Tutmayan Döküm Merdane"),
      item("HCT-TOP-026", "Çekilir Çamur Tutmayan Döküm Merdane"),
      item("HCT-TOP-027", "Katlanır Çekilir Çamur Tutmayan Döküm Merdane"),
    ],
  },
  {
    code: "ROT",
    slug: "rot",
    name: "Rotovatörler",
    group: "Toprak İşleme",
    products: [
      item("HCT-ROT-001", "Profesyonel Tarla Rotovatörü"),
      item("HCT-ROT-002", "Katlanır Tarla Rotovatörü"),
      item("HCT-ROT-003", "Bahçe Tipi Rotovatör"),
      item("HCT-ROT-004", "Kaydırmalı Bahçe Rotovatörü"),
      item("HCT-ROT-005", "Profesyonel Dik Rotovatör"),
      item("HCT-ROT-006", "Ağır Hizmet Tipi Dik Rotovatör"),
      item("HCT-ROT-007", "Kompakt Dik Rotovatör"),
      item("HCT-ROT-008", "Profesyonel Ağır Hizmet Dik Rotovatörü"),
      item("HCT-ROT-009", "Yüksek Performanslı Tarla Rotovatörü"),
      item("HCT-ROT-010", "Kompakt Profesyonel Tarla Rotovatörü"),
    ],
  },
  {
    code: "TES",
    slug: "tes",
    name: "Tesviye Makineleri",
    group: "Toprak İşleme",
    products: [item("HCT-TES-001", "Traktör Arkası Arazi Tesviye Bıçağı")],
  },
  {
    code: "BIC",
    slug: "bic",
    name: "Ot Ve Yem Bitkisi Biçme Makineleri",
    group: "Ot Hasadı",
    products: [
      item("HCT-BIC-001", "Çift Hareketli Parmak Bıçaklı Biçme Makinesi"),
      item("HCT-BIC-002", "Ön Bağlantılı Parmak Bıçaklı Biçme Makinesi"),
      item("HCT-BIC-003", "Tamburlu Çayır Biçme Makinesi"),
      item("HCT-BIC-004", "Diskli Çayır Biçme Makinesi"),
      item("HCT-BIC-005", "Ön Bağlantılı Diskli Biçme Makinesi"),
      item("HCT-BIC-006", "Şartlandırıcılı Diskli Biçme Makinesi"),
      item("HCT-BIC-007", "Sarkaçlı Şartlandırıcılı Diskli Biçme Makinesi"),
      item("HCT-BIC-008", "Çekilir Şartlandırıcılı Diskli Biçme Makinesi"),
      item("HCT-BIC-009", "Merkezi Pivot Bağlantılı Çekilir Biçme Makinesi"),
    ],
  },
  {
    code: "OTK",
    slug: "otk",
    name: "Ot Dağıtma Ve Çevirme Makineleri",
    group: "Ot Hasadı",
    products: [
      item("HCT-OTK-001", "Çift Rotorlu Ot Çevirme Makinesi"),
      item("HCT-OTK-002", "Kompakt Ot Çevirme Makinesi"),
      item("HCT-OTK-003", "Dört Kollu Döner Ot Çevirme Makinesi"),
      item("HCT-OTK-004", "Altı Kollu Döner Ot Çevirme Makinesi"),
      item("HCT-OTK-005", "Profesyonel Altı Kollu Ot Çevirme Makinesi"),
      item("HCT-OTK-006", "Geniş Çalışma Alanlı Profesyonel Ot Çevirme Makinesi"),
      item("HCT-OTK-007", "Yüksek Kapasiteli Profesyonel Ot Çevirme Makinesi"),
    ],
  },
  {
    code: "OTR",
    slug: "otr",
    name: "Döner Ot Tırmıkları",
    group: "Ot Hasadı",
    products: [
      item("HCT-OTR-001", "Kompakt Tek Rotorlu Ot Tırmığı"),
      item("HCT-OTR-002", "Profesyonel Tek Rotorlu Ot Tırmığı"),
      item("HCT-OTR-003", "Geniş Çalışma Alanlı Tek Rotorlu Ot Tırmığı"),
      item("HCT-OTR-004", "Kompakt Çift Rotorlu Ot Tırmığı"),
      item("HCT-OTR-005", "Profesyonel Çift Rotorlu Ot Tırmığı"),
      item("HCT-OTR-006", "Yüksek Kapasiteli Çift Rotorlu Ot Tırmığı"),
      item("HCT-OTR-007", "Profesyonel Çift Rotorlu Ot Toplama Makinesi"),
    ],
  },
  {
    code: "YTR",
    slug: "ytr",
    name: "Yıldız Ve Taraklı Ot Tırmıkları",
    group: "Ot Hasadı",
    products: [
      item("HCT-YTR-001", "Taraklı Ot Toplama Makinesi"),
      item("HCT-YTR-002", "Sıralı Ot Toplama Makinesi – Kompakt"),
      item("HCT-YTR-003", "Sıralı Ot Toplama Makinesi – Profesyonel"),
      item("HCT-YTR-004", "Merkezi Mafsallı V Tipi Ot Tırmığı – Kompakt"),
      item("HCT-YTR-005", "Merkezi Mafsallı V Tipi Ot Tırmığı – Profesyonel"),
      item("HCT-YTR-006", "Merkezi Mafsallı V Tipi Ot Tırmığı – Ağır Hizmet"),
      item("HCT-YTR-007", "Geniş Çalışma Alanlı V Tipi Ot Tırmığı"),
      item("HCT-YTR-008", "Arka Mafsallı V Tipi Ot Tırmığı"),
      item("HCT-YTR-009", "Profesyonel Arka Mafsallı V Tipi Ot Tırmığı"),
      item("HCT-YTR-010", "Yüksek Kapasiteli Arka Mafsallı V Tipi Ot Tırmığı"),
    ],
  },
  {
    code: "BAL",
    slug: "bal",
    name: "Balya Makineleri",
    group: "Ot Hasadı",
    products: [
      item("HCT-BAL-001", "Kompakt Kare Balya Makinesi"),
      item("HCT-BAL-002", "Profesyonel Kare Balya Makinesi"),
      item("HCT-BAL-003", "Yuvarlak Balya Makinesi"),
    ],
  },
  {
    code: "SAR",
    slug: "sar",
    name: "Balya Sarma Makineleri",
    group: "Ot Hasadı",
    products: [
      item("HCT-SAR-001", "Kompakt Asılır Balya Sarma Makinesi"),
      item("HCT-SAR-002", "Profesyonel Asılır Balya Sarma Makinesi"),
      item("HCT-SAR-003", "Çekilir Balya Sarma Makinesi"),
    ],
  },
  {
    code: "SIL",
    slug: "sil",
    name: "Silaj Makineleri",
    group: "Ot Hasadı",
    products: [item("HCT-SIL-001", "Profesyonel Yem Bitkisi Biçme Ve Parçalama Makinesi")],
  },
  {
    code: "KAZ",
    slug: "kaz",
    name: "Traktör Arka Kazıcıları",
    group: "Traktör Ekipmanları",
    products: [
      item("HCT-KAZ-001", "Kompakt Traktör Arkası Kazıcı"),
      item("HCT-KAZ-002", "Profesyonel Traktör Arkası Kazıcı"),
    ],
  },
  {
    code: "YUK",
    slug: "yuk",
    name: "Traktör Ön Yükleyicileri",
    group: "Traktör Ekipmanları",
    products: [
      item("HCT-YUK-001", "Kompakt Traktör Ön Yükleyici"),
      item("HCT-YUK-002", "Profesyonel Traktör Ön Yükleyici"),
      item("HCT-YUK-003", "Ağır Hizmet Tipi Traktör Ön Yükleyici"),
    ],
  },
];

export const catalogGroups = ["Ekim Ve Bakım", "Toprak İşleme", "Ot Hasadı", "Traktör Ekipmanları"] as const;

export function categoriesIn(group: string) {
  return catalog.filter((category) => category.group === group);
}

export function findCategory(slug: string) {
  return catalog.find((category) => category.slug === slug);
}

export const catalogCount = catalog.reduce((sum, category) => sum + category.products.length, 0);

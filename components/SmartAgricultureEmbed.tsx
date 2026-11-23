"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/Locale";
import { productPhoto } from "@/lib/product-photos";
import { withBase } from "@/lib/paths";

const products = [
  {
    code: "HCT-AKT-001",
    tr: {
      name: "Profesyonel Akıllı Tarım Kontrol Sistemi",
      text: "Profesyonel tarımsal operasyonlar için merkezi kontrol altyapısı.",
      features: ["Merkezi makine kontrolü", "Hassas konumlandırma", "Operasyon izleme"],
    },
    en: {
      name: "Professional Smart Farming Control System",
      text: "A central control infrastructure for professional agricultural operations.",
      features: ["Central machine control", "Precision positioning", "Operation monitoring"],
    },
  },
  {
    code: "HCT-AKT-002",
    tr: {
      name: "Hassas Tarım Yönetim Sistemi",
      text: "Tarla operasyonlarını konum verisi ve dijital kontrolle buluşturur.",
      features: ["GPS destekli yönetim", "Hassas dümenleme", "Hat takibi"],
    },
    en: {
      name: "Precision Farming Management System",
      text: "Connects field operations with position data and digital control.",
      features: ["GPS-supported management", "Precision steering", "Line tracking"],
    },
  },
  {
    code: "HCT-AKT-003",
    tr: {
      name: "İleri Seviye Tarımsal Kontrol Sistemi",
      text: "Farklı ekipman ve ileri uygulamalar için genişletilebilir kontrol çözümü.",
      features: ["Gelişmiş kontrol", "Ekipman entegrasyonu", "Süreç yönetimi"],
    },
    en: {
      name: "Advanced Agricultural Control System",
      text: "An expandable control solution for advanced applications and implements.",
      features: ["Advanced control", "Implement integration", "Process management"],
    },
  },
] as const;

const layers = [
  {
    n: "01",
    tr: { title: "Konumlandırma", text: "GNSS ve düzeltilmiş konum sinyalleri hassas tarımın omurgasıdır." },
    en: { title: "Positioning", text: "GNSS and corrected position signals are the backbone of precision farming." },
  },
  {
    n: "02",
    tr: { title: "Otomatik dümenleme", text: "Paralel geçişleri düzenler, bindirmeyi azaltır, yakıt ve süreye etki eder." },
    en: { title: "Auto steering", text: "Organises parallel passes, reduces overlap and affects fuel and time." },
  },
  {
    n: "03",
    tr: { title: "Bölüm ve oran kontrolü", text: "Üst üste ekimi engeller; girdiyi ihtiyaca göre uygular." },
    en: { title: "Section and rate control", text: "Prevents double application and applies inputs by need." },
  },
] as const;

export function SmartAgricultureEmbed({
  compact = false,
  showProducts = true,
}: {
  compact?: boolean;
  showProducts?: boolean;
}) {
  const { lang } = useLocale();
  const tr = lang === "tr";

  return (
    <div className="smart-embed">
      <div className="section-head">
        <h2>{tr ? "Akıllı tarım" : "Smart farming"}</h2>
        <p className="lede">
          {tr
            ? "Konum, kontrol ve veriyi aynı düzlemde yöneten sistemler. Hectare olarak bu teknolojileri dağınık ürünler gibi değil, birbirini besleyen bir kontrol zinciri olarak ele alıyoruz."
            : "Systems that manage position, control and data on one plane. At Hectare we treat these technologies as a connected control chain."}
        </p>
      </div>

      <ul className="tech-grid" style={{ marginBottom: showProducts ? "2rem" : 0 }}>
        {layers.map((item) => {
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

      {showProducts ? (
        <ul className="smart-products">
          {products.map((product, index) => {
            const copy = product[lang];
            const photo = productPhoto(product.code);
            return (
              <li key={product.code} className={index % 2 ? "smart-product is-flip" : "smart-product"}>
                <div className="smart-product-media">
                  {photo ? (
                    <Image src={withBase(photo)} alt="" fill sizes="(max-width: 900px) 100vw, 48vw" />
                  ) : null}
                </div>
                <div>
                  <p className="eyebrow">{product.code}</p>
                  <h3 className="block-title" style={{ fontSize: "1.35rem" }}>
                    {copy.name}
                  </h3>
                  <p className="lede">{copy.text}</p>
                  <ul className="smart-features">
                    {copy.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      {compact ? (
        <div style={{ marginTop: "1.5rem" }}>
          <Link className="btn btn-dark" href="/urunler/akt">
            {tr ? "Akıllı tarım modelleri" : "Smart farming models"}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

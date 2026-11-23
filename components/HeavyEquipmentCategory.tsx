"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/Locale";
import {
  findHeavyEquipmentCategory,
  heavyEquipmentCategories,
  heavyEquipmentExport,
  heavyEquipmentImage,
} from "@/lib/heavy-equipment";
import { withBase } from "@/lib/paths";

export function HeavyEquipmentCategory({ slug }: { slug: string }) {
  const { lang } = useLocale();
  const item = findHeavyEquipmentCategory(slug);

  if (!item) return null;

  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="page-hero-media" aria-hidden="true">
          <Image
            src={withBase(item.image)}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="page-hero-copy">
          <p className="eyebrow">
            <Link href="/is-makineleri">{lang === "en" ? "Heavy Equipment" : "İş Makineleri"}</Link>
            {" · "}
            {item.title[lang]}
          </p>
          <h1>{item.saleTitle[lang]}</h1>
          <p className="page-hero-lede">{item.tagline[lang]}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap he-category-layout">
          <div className="he-category-figure">
            <Image
              src={withBase(item.image)}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="split-copy he-category-copy">
            {item.intro[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="section-head">
            <h2>{lang === "en" ? "Applications" : "Uygulamalar"}</h2>
          </div>
          <ul className="he-checklist he-checklist-wide">
            {item.applications[lang].map((app) => (
              <li key={app}>{app}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <h2>{lang === "en" ? "More Machinery" : "Diğer Makineler"}</h2>
          </div>
          <ul className="he-related he-related-cards">
            {heavyEquipmentCategories
              .filter((category) => category.slug !== item.slug)
              .map((category) => (
                <li key={category.slug}>
                  <Link href={`/is-makineleri/${category.slug}`} className="he-related-card">
                    <span className="he-related-card-media">
                      <Image
                        src={withBase(category.image)}
                        alt=""
                        fill
                        sizes="200px"
                      />
                    </span>
                    <span>{category.title[lang]}</span>
                  </Link>
                </li>
              ))}
            <li>
              <Link href={`/is-makineleri/${heavyEquipmentExport.slug}`} className="he-related-card">
                <span className="he-related-card-media">
                  <Image
                    src={withBase(heavyEquipmentImage(heavyEquipmentExport.slug))}
                    alt=""
                    fill
                    sizes="200px"
                  />
                </span>
                <span>{lang === "en" ? "Export & Shipping" : "İhracat Ve Sevkiyat"}</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

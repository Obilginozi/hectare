"use client";

import Image from "next/image";
import Link from "next/link";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { company } from "@/lib/content";
import {
  heavyEquipmentCategories,
  heavyEquipmentExport,
  heavyEquipmentHero,
  heavyEquipmentPage as copy,
} from "@/lib/heavy-equipment";
import { withBase } from "@/lib/paths";

export function HeavyEquipment() {
  const { lang } = useLocale();
  const quoteSubject = encodeURIComponent(
    lang === "en" ? "Hectare: Heavy Equipment Quote" : "Hectare: İş Makinesi Teklifi",
  );
  const quoteBody = encodeURIComponent(
    lang === "en"
      ? "I would like a quotation for construction machinery."
      : "İnşaat makineleri için teklif almak istiyorum.",
  );
  const mailto = `mailto:${company.email}?subject=${quoteSubject}&body=${quoteBody}`;

  return (
    <>
      <section className="page-hero">
        <PageFilm src={heavyEquipmentHero.video} poster={heavyEquipmentHero.poster} />
        <div className="page-hero-copy">
          <p className="eyebrow">{copy.eyebrow[lang]}</p>
          <h1>{copy.hero[lang]}</h1>
          <p className="page-hero-lede">{copy.intro[lang][0]}</p>
          <div className="he-hero-actions">
            <a className="btn btn-primary" href="#makineler">
              {copy.primaryCta[lang]}
            </a>
            <a className="btn btn-ghost" href={mailto}>
              {copy.secondaryCta[lang]}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split-copy">
            {copy.intro[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap he-partner">
          <div className="section-head">
            <h2>{copy.partnerTitle[lang]}</h2>
            <p className="lede">{copy.partnerText[lang]}</p>
          </div>
          <ul className="he-checklist">
            {copy.partnerPoints[lang].map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="makineler">
        <div className="wrap">
          <div className="section-head">
            <h2>{copy.machineryTitle[lang]}</h2>
            <p className="lede">{copy.machineryLede[lang]}</p>
          </div>
          <ul className="he-machine-grid">
            {heavyEquipmentCategories.map((item) => (
              <li key={item.slug}>
                <Link href={`/is-makineleri/${item.slug}`} className="he-machine-card he-machine-card--media">
                  <span className="he-machine-card-media">
                    <Image
                      src={withBase(item.image)}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </span>
                  <span className="he-machine-card-body">
                    <h3>{item.title[lang]}</h3>
                    <p>{item.card[lang]}</p>
                    <span>{lang === "en" ? "View details" : "Detayları gör"}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap he-export-band">
          <div className="he-export-band-media">
            <Image
              src={withBase(heavyEquipmentExport.image)}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div>
            <div className="section-head">
              <h2>{copy.bridgeTitle[lang]}</h2>
              <p className="lede">{copy.bridgeText[lang]}</p>
            </div>
            <Link className="btn btn-primary" href={`/is-makineleri/${heavyEquipmentExport.slug}`}>
              {copy.bridgeCta[lang]}
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollFilm } from "@/components/ScrollFilm";
import { useLocale } from "@/components/Locale";
import {
  heavyEquipmentCategories,
  heavyEquipmentExport,
  heavyEquipmentPage as copy,
  heavyEquipmentScrollFilm,
} from "@/lib/heavy-equipment";
import { withBase } from "@/lib/paths";

export function HeavyEquipment() {
  const { lang } = useLocale();

  return (
    <>
      <ScrollFilm
        className="scroll-film--he"
        frames={heavyEquipmentScrollFilm.frames}
        poster={heavyEquipmentScrollFilm.poster}
        label={lang === "en" ? "Scroll to play crane footage" : "Kaydırarak vinç görüntüsünü oynatın"}
        hint={lang === "en" ? "Scroll down" : "Aşağı kaydır"}
      >
        <div className="scroll-film-he-title">
          <p className="eyebrow">{copy.eyebrow[lang]}</p>
          <h1>{copy.hero[lang]}</h1>
        </div>
        <p className="page-hero-lede">{copy.intro[lang][0]}</p>
      </ScrollFilm>

      <section className="section section-muted">
        <div className="wrap he-partner">
          <div className="section-head">
            <h2>{copy.partnerTitle[lang]}</h2>
          </div>
          <div className="he-partner-grid">
            <div className="he-partner-copy">
              {copy.intro[lang].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="he-checklist">
              {copy.partnerPoints[lang].map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
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
                    <span>{lang === "en" ? "View Details" : "Detayları Gör"}</span>
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

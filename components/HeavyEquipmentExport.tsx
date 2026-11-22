"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/Locale";
import { heavyEquipmentExport as copy } from "@/lib/heavy-equipment";
import { withBase } from "@/lib/paths";

export function HeavyEquipmentExport() {
  const { lang } = useLocale();

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-media" aria-hidden="true">
          <Image
            src={withBase(copy.image)}
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
          </p>
          <h1>{copy.title[lang]}</h1>
          <p className="page-hero-lede">{copy.tagline[lang]}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap he-category-layout">
          <div className="he-category-figure">
            <Image src={withBase(copy.image)} alt="" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div className="split-copy he-category-copy">
            {copy.intro[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="section-head">
            <h2>{copy.processTitle[lang]}</h2>
          </div>
          <ol className="he-process">
            {copy.steps.map((step) => (
              <li key={step.n}>
                <p className="tech-n">{step.n}</p>
                <h3>{step.title[lang]}</h3>
                <p>{step.text[lang]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{copy.marketsTitle[lang]}</h2>
          </div>
          <div className="split-copy">
            {copy.markets[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

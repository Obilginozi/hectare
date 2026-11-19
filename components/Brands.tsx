"use client";

import Image from "next/image";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { withBase } from "@/lib/paths";

export function Brands() {
  const { lang } = useLocale();
  const tr = lang === "tr";

  return (
    <>
      <section className="page-hero">
        <PageFilm src="/media/video5.mp4" poster="/media/video5-poster.jpg" />
        <div className="page-hero-copy">
          <p className="eyebrow">Hectare</p>
          <h1>{tr ? "Markalar" : "Brands"}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{tr ? "Güçlü markalar, güvenilir temsil" : "Strong brands, reliable representation"}</h2>
            <p className="lede">
              {tr
                ? "Hectare AŞ, 2022 yılından bu yana LEMKEN ve FIELDKING markalarının Türkiye distribütörlüğünü yürütmektedir."
                : "Since 2022, Hectare AŞ has held the Turkey distributorships of LEMKEN and FIELDKING."}
            </p>
          </div>

          <div className="brand-grid">
            <article className="brand-card">
              <div className="brand-card-media">
                <Image
                  src={withBase("/media/products/zirkon-side.jpg")}
                  alt="Lemken Zirkon 8"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div className="brand-card-copy">
                <p className="eyebrow">LEMKEN</p>
                <h3>LEMKEN</h3>
                <p>
                  {tr
                    ? "Lemken, 240 yılı aşkın süredir faaliyet gösteren bir tarım makineleri markasıdır. 2022 yılında Lemken’in Türkiye distribütörlüğüne başladık."
                    : "Lemken is an agricultural machinery brand with more than 240 years of history. In 2022 we became the Turkey distributor of Lemken."}
                </p>
              </div>
            </article>

            <article className="brand-card">
              <div className="brand-card-media">
                <Image
                  src={withBase("/media/products/fieldking-mark.jpg")}
                  alt="Fieldking rotovatör"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div className="brand-card-copy">
                <p className="eyebrow">FIELDKING</p>
                <h3>FIELDKING</h3>
                <p>
                  {tr
                    ? "Fieldking, 1978 yılında kurulmuş bir tarım ekipmanı üreticisidir. 2022 yılında Türkiye distribütörlüğüne başladık. ISO 9001:2008 sertifikası Fieldking’e aittir."
                    : "Fieldking is an agricultural equipment manufacturer founded in 1978. In 2022 we became the Turkey distributor. ISO 9001:2008 belongs to Fieldking."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

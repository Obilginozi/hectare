"use client";

import Image from "next/image";
import { PageFilm } from "@/components/PageFilm";
import { useLocale } from "@/components/Locale";
import { withBase } from "@/lib/paths";

const brands = [
  {
    name: "LEMKEN",
    image: "/media/products/zirkon-side.jpg",
    alt: "Lemken Zirkon 8, traktörün yanında tarlada",
    copy: [
      "Lemken, 240 yılı aşkın süredir faaliyet gösteren bir tarım makineleri markasıdır. Kalite ve yenilik odaklı üretimiyle tanınır.",
      "2022 yılında Lemken’in Türkiye distribütörlüğüne başladık.",
    ],
  },
  {
    name: "FIELDKING",
    image: "/media/products/fieldking-mark.jpg",
    alt: "Fieldking rotovatör, tarlada traktöre bağlı",
    copy: [
      "Fieldking, 1978 yılında kurulmuş bir tarım ekipmanı üreticisidir. Hindistan’da ve 100’den fazla ülkede tercih edilmektedir.",
      "2022 yılında Fieldking’in Türkiye distribütörlüğüne başladık. Kalite yönetim sistemi ISO 9001:2008 sertifikalıdır. Sertifika Fieldking’e aittir.",
    ],
  },
] as const;

export function Brands() {
  const { lang } = useLocale();
  const title = lang === "en" ? "Brands" : "Markalar";
  const intro = {
    title: lang === "en" ? "Strong brands, reliable representation" : "Güçlü markalar, güvenilir temsil",
    paragraphs:
      lang === "en"
        ? [
            "Since 2022, Hectare AŞ has held the Turkey distributorships of LEMKEN and FIELDKING. Our work in other countries consists of sales and projects.",
            "These partnerships are an important indication of our commercial relationships with international manufacturers and of our position in the sector.",
            "While bringing the products of the brands we represent to customers in the Turkish market, we continue to develop product alternatives for different needs and business scales.",
          ]
        : [
            "Hectare AŞ, 2022 yılından bu yana LEMKEN ve FIELDKING markalarının Türkiye distribütörlüğünü yürütmektedir. Diğer ülkelerdeki çalışmalarımız satış ve proje kapsamındadır.",
            "Bu iş birlikleri, uluslararası üreticilerle kurduğumuz ticari ilişkilerin ve sektördeki konumumuzun önemli bir göstergesidir.",
            "Temsil ettiğimiz markaların ürünlerini Türkiye pazarındaki müşterilerimizle buluştururken, farklı ihtiyaçlara ve işletme ölçeklerine yönelik ürün alternatifleri geliştirmeye de devam ediyoruz.",
          ],
  };
  const text = {
    LEMKEN:
      lang === "en"
        ? [
            "Lemken is an agricultural machinery brand with more than 240 years of history. It is known for quality and innovation.",
            "In 2022 we became the Turkey distributor of Lemken.",
          ]
        : [
            "Lemken, 240 yılı aşkın süredir faaliyet gösteren bir tarım makineleri markasıdır. Kalite ve yenilik odaklı üretimiyle tanınır.",
            "2022 yılında Lemken’in Türkiye distribütörlüğüne başladık.",
          ],
    FIELDKING:
      lang === "en"
        ? [
            "Fieldking is an agricultural equipment manufacturer founded in 1978. It is preferred in India and in more than 100 countries.",
            "In 2022 we became the Turkey distributor of Fieldking. Its quality management system is certified to ISO 9001:2008. The certificate belongs to Fieldking.",
          ]
        : [
            "Fieldking, 1978 yılında kurulmuş bir tarım ekipmanı üreticisidir. Hindistan’da ve 100’den fazla ülkede tercih edilmektedir.",
            "2022 yılında Fieldking’in Türkiye distribütörlüğüne başladık. Kalite yönetim sistemi ISO 9001:2008 sertifikalıdır. Sertifika Fieldking’e aittir.",
          ],
  };
  return (
    <>
      <section className="page-hero page-hero--film" aria-labelledby="markalar-title">
        <PageFilm src="/media/video5.mp4" poster="/media/video5-poster.jpg" />
        <div className="page-hero-copy wrap">
          <h1 id="markalar-title">{title}</h1>
        </div>
      </section>

      <section className="section essay essay--air">
        <div className="wrap">
          <div className="essay-chapter">
            <h2 className="block-title">{intro.title}</h2>
            <div className="essay-body">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="brand-cards">
            {brands.map((brand) => (
              <li key={brand.name}>
                <article className="tile tile--static">
                  <span className="tile-photo">
                    <Image src={withBase(brand.image)} alt={brand.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                  </span>
                  <h2 className="tile-name">{brand.name}</h2>
                  {text[brand.name].map((paragraph) => (
                    <p key={paragraph} className="tile-meta">
                      {paragraph}
                    </p>
                  ))}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

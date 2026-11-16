import Image from "next/image";
import { withBase } from "@/lib/paths";

export function Brands() {
  return (
    <section className="section section--forest page" aria-labelledby="markalar-title">
      <div className="wrap">
        <p className="kicker">Distribütörlük</p>
        <h1 id="markalar-title">Markalar</h1>
        <p className="lede">
          LEMKEN ve FIELDKING için Türkiye distribütörlüğü 2022 yılında başladı. Bu çalışma,
          Hectare Foreign Trade’in dış ticaret alanıyla birlikte yürür.
        </p>
      </div>

      <article className="brand">
        <div className="brand-media">
          <Image
            src={withBase("/media/products/zirkon-side.jpg")}
            alt="Lemken Zirkon 8, traktörün yanında tarlada"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="brand-copy">
          <p className="kicker">2022</p>
          <h3>LEMKEN</h3>
          <p>
            2022 yılında, 240 yılı aşkın süredir var olan Lemken markasının Türkiye
            distribütörlüğüne başladık. Lemken’in kendini kanıtlamış kalitesi ve yenilikçi üretim
            anlayışıyla Türk tarımını uzun yıllar ileri taşımayı hedefliyoruz.
          </p>
          <p>
            Sürdürülebilir teknolojileri ve çiftçi dostu çözümleriyle Lemken’i Türkiye’nin
            topraklarına taşıyoruz.
          </p>
        </div>
      </article>

      <article className="brand brand--reverse">
        <div className="brand-media brand-media--object">
          <Image
            src={withBase("/media/products/fieldking-mark.png")}
            alt="Fieldking Regular Multi Speed rotovatör"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="brand-copy">
          <p className="kicker">1978 / 2022</p>
          <h3>FIELDKING</h3>
          <p>
            Dünyaca bilinen bir çiftlik ekipmanı üreticisi olarak 1978’de kurulan Fieldking’in
            Türkiye distribütörlüğüne 2022 yılında başladık. Kalite ve dayanıklılığıyla Hindistan’da
            ve diğer 100 ülkede tercih edilen bir markadır.
          </p>
          <p>
            Uluslararası standartlarda aletler için yüksek kaliteli hammadde ve sürdürülebilir
            mühendislik kullanır. Kalite yönetim sistemi ISO 9001:2008 sertifikalıdır.
          </p>
        </div>
      </article>
    </section>
  );
}

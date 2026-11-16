import Image from "next/image";
import Link from "next/link";
import { HeroFilm } from "@/components/HeroFilm";
import { company, products, trade } from "@/lib/content";
import { withBase } from "@/lib/paths";

export function Home() {
  return (
    <main>
      <h1 className="sr-only">Hectare AŞ</h1>
      <HeroFilm />
      <div id="icerik" tabIndex={-1}>
        <section className="section section--forest" aria-labelledby="giris-title">
          <div className="wrap corporate-grid">
            <div>
              <p className="kicker">Hectare AŞ</p>
              <h2 id="giris-title">Otuz yılı aşkın saha.</h2>
            </div>
            <div className="prose">
              <p>
                Otuz yıldan uzun süredir tarım makineleri ve iş makineleri sektöründeyiz. Tedarik,
                Türkiye’deki tarım işletmelerine yöneliktir.
              </p>
              <p>
                On yıldan uzun süredir uluslararası ticaret yapıyoruz. Değişik sektörlerde birçok
                satış ve projede yer aldık.
              </p>
              <Link className="text-link" href="/kurumsal">
                Kurumsal
              </Link>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="cografya-title">
          <div className="wrap">
            <div className="band-head">
              <div>
                <p className="kicker">Hectare Foreign Trade</p>
                <h2 id="cografya-title" className="home-follow">
                  Ticaret coğrafyası
                </h2>
              </div>
              <Link className="text-link" href="/ticaret">
                Ticaret
              </Link>
            </div>
            <ul className="country-index">
              {trade.map((item) => (
                <li key={item.country}>{item.country}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="ilkeler-title">
          <div className="wrap corporate-grid">
            <div>
              <p className="kicker">Çalışma düzeni</p>
              <h2 id="ilkeler-title">Müşteri memnuniyeti</h2>
            </div>
            <div className="prose">
              <p>
                Düşük maliyet, hızlı teslimat, yüksek kalite ve stoka hızlı yanıt ayrı maddeler
                değildir. Müşterinin ihtiyaç duyduğunu rahatça bulması için birlikte dururlar.
              </p>
              <p>
                Misyon; mümkün olan en düşük fiyatı, mevcut en iyi seçimi ve en üst düzeyde
                rahatlığı bir arada sunmaktır.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--forest" aria-labelledby="evler-title">
          <div className="wrap">
            <div className="band-head">
              <div>
                <p className="kicker">2022</p>
                <h2 id="evler-title" className="home-follow">
                  İki distribütörlük
                </h2>
              </div>
              <Link className="text-link" href="/markalar">
                Markalar
              </Link>
            </div>
            <div className="houses">
              <article>
                <p className="kicker">240+ yıl</p>
                <h3>LEMKEN</h3>
                <p>
                  Kalitesi ve yenilikçi üretimiyle bilinen Lemken’in Türkiye distribütörlüğü 2022’de
                  başladı.
                </p>
              </article>
              <article>
                <p className="kicker">1978</p>
                <h3>FIELDKING</h3>
                <p>
                  1978’de kurulan Fieldking, Hindistan’da ve yüzü aşkın ülkede tercih edilir.
                  Türkiye distribütörlüğü 2022’den beridir.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="secim-title">
          <div className="wrap">
            <div className="band-head">
              <div>
                <p className="kicker">Ekipman</p>
                <h2 id="secim-title" className="home-follow">
                  Seçilmiş parçalar
                </h2>
              </div>
              <Link className="text-link" href="/urunler">
                Ürünler
              </Link>
            </div>
            <ul className="selection">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/urunler#${product.slug}`}>
                    <span className="selection-media">
                      <Image
                        src={withBase(product.image)}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                      />
                    </span>
                    <span className="kicker">{product.brand}</span>
                    <span className="selection-name">{product.name}</span>
                    <span className="selection-meta">{product.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--forest" aria-labelledby="yakin-title">
          <div className="wrap home-close">
            <div>
              <p className="kicker">Beşiktaş / İstanbul</p>
              <h2 id="yakin-title" className="home-follow">
                İhtiyacınızı yazın.
              </h2>
              <p className="lede">Fiyat ve teslimat için ekip dönüş yapar.</p>
            </div>
            <div className="home-close-aside">
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <Link className="text-link" href="/iletisim">
                İletişim
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

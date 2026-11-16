import Link from "next/link";

export function Corporate() {
  return (
    <section className="section section--forest page" aria-labelledby="kurumsal-title">
      <div className="wrap corporate-grid">
        <div>
          <p className="kicker">Hectare AŞ</p>
          <h1 id="kurumsal-title">Kurumsal</h1>
          <p className="statement">Tarım işletmeleri için makine, ekipman ve yedek parça.</p>
        </div>
        <div className="prose">
          <p>
            Hectare AŞ, otuz yıldan uzun süredir tarım makineleri ve iş makineleri sektöründedir.
            Traktör, ekipman ve yedek parçada tarım işletmeleri için toptan tedarik sağlar. İhtiyaç
            duyulan ekipman Türkiye genelinden temin edilir.
          </p>
          <p>
            Çalışma düzeni düşük maliyet, hızlı teslimat, yüksek kalite ve stoklara hızlı yanıt
            üzerine kuruludur.
          </p>
          <div className="principles">
            <article>
              <h3>Vizyon</h3>
              <p>
                Müşterilerin ihtiyaç duyabilecekleri her şeyi bulabilecekleri ve keşfedebilecekleri,
                müşteriyi merkeze alan şirket olmak.
              </p>
            </article>
            <article>
              <h3>Misyon</h3>
              <p>
                Mümkün olan en düşük fiyatları, mevcut en iyi seçimleri ve en üst düzeyde rahatlığı
                sunmak.
              </p>
            </article>
            <article>
              <h3>Dış ticaret</h3>
              <p>
                Hectare Foreign Trade, on yıldan uzun süredir uluslararası ticaret yapar. Değişik
                sektörlerde birçok satış ve projede yer almıştır.
              </p>
              <Link className="text-link" href="/ticaret">
                Ticaret coğrafyası
              </Link>
            </article>
          </div>
          <p>
            Uluslararası markaların Türkiye distribütörlüğü, 2022’den bu yana LEMKEN ve FIELDKING
            ile sürer. Tedarik, Türkiye’deki tarım işletmelerine yöneliktir.
          </p>
        </div>
      </div>
    </section>
  );
}

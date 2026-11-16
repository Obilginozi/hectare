import { company } from "@/lib/content";

export function Privacy() {
  return (
    <section className="section section--forest page" aria-labelledby="gizlilik-title">
      <div className="wrap prose privacy-copy">
        <p className="kicker">Bilgi</p>
        <h1 id="gizlilik-title">Gizlilik</h1>
        <p>
          Bu sayfa bir tanıtım sitesidir. İletişim telefon, e-posta ve WhatsApp üzerinden kurulur.
          Sitede doldurulan bir form yoktur; mesaj burada saklanmaz.
        </p>
        <p>
          E-posta bağlantısı cihazınızdaki e-posta uygulamasını açar. WhatsApp bağlantısı yazışmayı
          WhatsApp üzerinden başlatır.
        </p>
        <p>
          Sorularınız için {company.email} adresine yazabilir veya {company.phoneDisplay} numaralı
          telefondan ulaşabilirsiniz.
        </p>
        <p>
          {company.street}, {company.locality} / {company.region}
        </p>
      </div>
    </section>
  );
}

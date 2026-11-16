import Link from "next/link";
import { company } from "@/lib/content";

const channels = [
  {
    label: "Telefon",
    value: company.phoneDisplay,
    href: `tel:${company.phoneTel}`,
  },
  {
    label: "E-posta",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    label: "WhatsApp",
    value: company.phoneDisplay,
    href: company.whatsapp,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <>
      <section className="section section--forest page" aria-labelledby="iletisim-title">
        <div className="wrap corporate-grid">
          <div>
            <p className="kicker">Beşiktaş / İstanbul</p>
            <h1 id="iletisim-title">İletişim</h1>
            <p className="statement">Fiyat, stok ve teslimat için doğrudan ekip.</p>
          </div>
          <div className="prose">
            <p>
              Hectare AŞ, tarım makineleri ve iş makineleri tedarikini Türkiye’deki işletmeler için
              yürütür. Fiyat, stok ve teslimat telefon, e-posta veya WhatsApp ile sorulur.
            </p>
            <p>
              Hectare Foreign Trade’in uluslararası satış ve projeleri de aynı kanallardan yürür.
              Mesaj sitede saklanmaz.
            </p>
            <Link className="text-link" href="/ticaret">
              Ticaret coğrafyası
            </Link>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="hat-title">
        <div className="wrap">
          <div className="band-head">
            <div>
              <p className="kicker">Akaretler</p>
              <h2 id="hat-title" className="home-follow">
                Doğrudan hat
              </h2>
            </div>
            <Link className="text-link" href="/gizlilik">
              Gizlilik
            </Link>
          </div>
          <ul className="trade-list contact-channels">
            {channels.map((channel) => (
              <li key={channel.label}>
                <strong>{channel.label}</strong>
                {"external" in channel ? (
                  <a href={channel.href} target="_blank" rel="noopener noreferrer">
                    {channel.value}
                  </a>
                ) : (
                  <a href={channel.href}>{channel.value}</a>
                )}
              </li>
            ))}
            <li>
              <strong>Adres</strong>
              <span>
                {company.addressLines.map((line, index) => (
                  <span key={line}>
                    {index > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

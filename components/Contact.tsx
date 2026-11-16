"use client";

import { PageFilm } from "@/components/PageFilm";
import { SocialLinks } from "@/components/SocialLinks";
import { useLocale } from "@/components/Locale";
import { company } from "@/lib/content";

export function Contact() {
  const { lang, t } = useLocale();
  const address = [
    company.addressLines[0],
    company.addressLines[1],
    lang === "en" ? `${company.locality} / Istanbul` : company.addressLines[2],
  ];

  return (
    <>
      <section className="page-hero page-hero--film" aria-labelledby="iletisim-title">
        <PageFilm src="/media/video3.mp4" poster="/media/video3-poster.jpg" />
        <div className="page-hero-copy wrap">
          <h1 id="iletisim-title">{lang === "en" ? "Contact" : "İletişim"}</h1>
        </div>
      </section>

      <section className="section contact-page">
        <div className="wrap contact-layout">
          <div className="contact-panel">
            <header className="contact-head">
              <p className="contact-firm">
                {company.name}
                <span>Hectare Foreign Trade</span>
              </p>
            </header>

            <dl className="contact-sheet">
              <div>
                <dt>{t.address}</dt>
                <dd>
                  <address>
                    {address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </dd>
              </div>
              <div>
                <dt>{t.phone}</dt>
                <dd>
                  <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>{t.email}</dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt>{t.socialLabel}</dt>
                <dd>
                  <SocialLinks className="social-links--contact" />
                </dd>
              </div>
            </dl>
          </div>

          <div className="contact-map">
            <iframe
              title={lang === "en" ? "Hectare AŞ on Google Maps" : "Hectare AŞ Google Haritalar konumu"}
              src={company.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a href={company.mapsLink} target="_blank" rel="noopener noreferrer">
              {lang === "en" ? "Open in Google Maps" : "Google Haritalar’da aç"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

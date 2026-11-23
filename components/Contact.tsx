"use client";

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
      <section className="page-intro">
        <div className="wrap">
          <h1>{lang === "en" ? "Contact" : "İletişim"}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-layout">
          <div>
            <p className="contact-firm">
              {company.name}
              <span>Hectare Foreign Trade</span>
            </p>
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

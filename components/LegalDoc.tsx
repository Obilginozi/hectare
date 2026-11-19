"use client";

import Link from "next/link";
import { useLocale } from "@/components/Locale";
import { legalLinks } from "@/lib/legal/pages";
import type { LegalPage } from "@/lib/legal/types";
import { navName } from "@/lib/i18n";

export function LegalDoc({ page }: { page: LegalPage }) {
  const { lang, t } = useLocale();
  const title = page.title[lang];
  const intro = page.intro?.[lang];
  const blocks = page.blocks[lang];

  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 3rem)" }} aria-labelledby="legal-title">
      <div className="wrap legal-layout">
        <article className="legal-doc prose">
          <h1 id="legal-title" className="block-title">
            {title}
          </h1>
          {intro ? <p className="lede">{intro}</p> : null}
          {blocks.map((block, index) => {
            if (block.type === "h") {
              return (
                <h2 key={`${block.text}-${index}`} className="legal-heading">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={`ul-${index}`} className="legal-list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={`${block.text.slice(0, 24)}-${index}`}>{block.text}</p>;
          })}
        </article>

        <aside className="legal-aside" aria-label={t.legalLabel}>
          <p className="legal-aside-label">{t.legalLabel}</p>
          <nav>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href.endsWith(`/${page.slug}`) ? "page" : undefined}
              >
                {navName(lang, link.href, link.label)}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </section>
  );
}

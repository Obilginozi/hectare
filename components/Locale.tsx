"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { findCategory } from "@/lib/catalog";
import { messages, pageTitle, type Lang } from "@/lib/i18n";

type LocaleValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof messages)[Lang];
};

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");
  const pathname = usePathname();

  useEffect(() => {
    const stored = window.localStorage.getItem("hectare-lang");
    if (stored === "en" || stored === "tr") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    const titled = pageTitle(lang, pathname);
    if (titled) {
      document.title = titled;
      return;
    }
    const slug = pathname.replace(/\/$/, "").split("/").at(-1);
    const category = slug ? findCategory(slug) : undefined;
    if (category && pathname.includes("/urunler/")) {
      document.title = `${category.name} | Hectare AŞ`;
    }
  }, [lang, pathname]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("hectare-lang", next);
  };

  return (
    <LocaleContext.Provider value={{ lang, setLang, t: messages[lang] }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within LocaleProvider");
  return value;
}

export function LanguageSwitch() {
  const { lang, setLang, t } = useLocale();

  return (
    <div className="lang-switch" role="group" aria-label={t.language}>
      <button type="button" className={lang === "tr" ? "is-active" : undefined} aria-pressed={lang === "tr"} onClick={() => setLang("tr")}>
        TR
      </button>
      <span aria-hidden="true">/</span>
      <button type="button" className={lang === "en" ? "is-active" : undefined} aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a className="skip" href="#icerik">
      {t.skip}
    </a>
  );
}

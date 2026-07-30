"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./i18n";

const LanguageContext = createContext<{ lang: Lang; toggle: () => void; t: Dict }>({
  lang: "en",
  toggle: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("karatsetu-lang");
    if (stored === "hi" || stored === "en") {
      setLang(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const toggle = useCallback(() => {
    setLang((current) => {
      const next: Lang = current === "en" ? "hi" : "en";
      window.localStorage.setItem("karatsetu-lang", next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

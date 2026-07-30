"use client";

import { useLanguage } from "./language-provider";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const dark = theme === "dark";
  return (
    <button
      aria-label={dark ? t.toggles.toLight : t.toggles.toDark}
      className="theme-toggle"
      onClick={toggle}
      type="button"
    >
      <span className={`theme-toggle-track ${dark ? "is-dark" : ""}`} aria-hidden="true">
        <span className="theme-toggle-thumb">{dark ? "☾" : "☀"}</span>
      </span>
    </button>
  );
}

export function LanguageToggle() {
  const { lang, toggle, t } = useLanguage();
  return (
    <button aria-label={t.toggles.lang} className="lang-toggle" onClick={toggle} type="button">
      <span className={lang === "en" ? "active" : ""}>EN</span>
      <span className={lang === "hi" ? "active" : ""}>हि</span>
    </button>
  );
}

"use client";

import { useLanguage } from "../language-provider";
import { ModuleFinder } from "../module-finder";

export function ModulesContent() {
  const { t } = useLanguage();
  return (
    <>
      <section className="inner-hero page-enter">
        <p className="eyebrow reveal">{t.modulesPage.eyebrow}</p>
        <h1 className="reveal" data-reveal-delay="60">{t.modulesPage.h1}</h1>
        <p className="reveal" data-reveal-delay="120">{t.modulesPage.lede}</p>
      </section>
      <section className="section module-index-section">
        <ModuleFinder />
      </section>
    </>
  );
}

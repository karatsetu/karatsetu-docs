"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { AnimatedNumber } from "./animated-number";
import { useLanguage } from "./language-provider";
import { PurityCalculator } from "./purity-calculator";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

function onHeroMove(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
  event.currentTarget.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
}

export default function ProductHome() {
  const { t } = useLanguage();

  return (
    <main>
      <SiteHeader />
      <section className="product-hero" onMouseMove={onHeroMove}>
        <div>
          <p className="eyebrow reveal">{t.home.eyebrow}</p>
          <h1 className="reveal" data-reveal-delay="60">{t.home.h1}</h1>
          <p className="hero-lede reveal" data-reveal-delay="120">{t.home.lede}</p>
          <div className="hero-actions reveal" data-reveal-delay="180">
            <Link className="primary-link" href="/docs">{t.home.ctaDocs} <span>→</span></Link>
            <Link className="secondary-link" href="/workflow">{t.home.ctaFlow}</Link>
          </div>
          <p className="product-proof reveal" data-reveal-delay="240">{t.home.proof}</p>
        </div>
        <div className="system-preview reveal" data-reveal-delay="180" aria-label="KaratSetu connected workflow preview">
          <div className="system-preview-head">
            <span className="brand-mark">K</span>
            <p><b>{t.home.preview.title}</b><small>{t.home.preview.sub}</small></p>
            <i>{t.home.preview.tag}</i>
          </div>
          <div className="system-metric">
            <span>{t.home.preview.metricLabel}</span>
            <strong><AnimatedNumber value={12486.34} decimals={3} suffix=" g" /></strong>
            <small>{t.home.preview.metricSub}</small>
          </div>
          <div className="system-rail">
            {t.home.preview.rail.map((step, index) => (
              <div key={index}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></div>
            ))}
          </div>
          <div className="system-status">
            <p><span><AnimatedNumber value={18} /></span> {t.home.preview.moving}</p>
            <p><span><AnimatedNumber value={3} /></span> {t.home.preview.attention}</p>
          </div>
        </div>
      </section>
      <section className="product-pillars">
        {t.home.pillars.map((pillar, index) => (
          <article key={index} className="reveal" data-reveal-delay={index * 90}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>
      <section className="section calculator-section">
        <PurityCalculator />
      </section>
      <section className="docs-entry">
        <div>
          <p className="eyebrow reveal">{t.home.docsEntry.eyebrow}</p>
          <h2 className="reveal">{t.home.docsEntry.h2}</h2>
          <p className="reveal">{t.home.docsEntry.p}</p>
        </div>
        <div className="docs-entry-links reveal">
          {t.home.docsEntry.links.map((link) => (
            <Link href={link.href} key={link.href}><b>{link.title}</b><span>{link.sub}</span></Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

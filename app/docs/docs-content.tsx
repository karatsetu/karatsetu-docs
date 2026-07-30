"use client";

import Link from "next/link";
import { AnimatedNumber } from "../animated-number";
import { useLanguage } from "../language-provider";
import { ModuleFinder } from "../module-finder";
import { WorkflowExplorer } from "../workflow-explorer";

export function DocsContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="landing-hero page-enter">
        <div>
          <p className="eyebrow reveal">{t.docsHome.eyebrow}</p>
          <h1 className="reveal" data-reveal-delay="60">{t.docsHome.h1}</h1>
          <p className="hero-lede reveal" data-reveal-delay="120">{t.docsHome.lede}</p>
          <div className="hero-actions reveal" data-reveal-delay="180">
            <Link className="primary-link" href="/getting-started">{t.docsHome.startHere} <span>→</span></Link>
            <Link className="secondary-link" href="/modules">{t.docsHome.browseModules}</Link>
          </div>
        </div>
        <div className="hero-route-card reveal" data-reveal-delay="200" aria-label="Documentation routes">
          <p>{t.docsHome.route.label}</p>
          {t.docsHome.route.items.map((item) => (
            <Link href={item.href} key={item.href}><span>{item.n}</span><b>{item.title}</b><i>{item.sub}</i></Link>
          ))}
        </div>
      </section>

      <section className="confidence-strip" aria-label="Help centre coverage">
        <div><strong><AnimatedNumber value={13} /></strong><span>{t.docsHome.confidence.modules}</span></div>
        <div><strong><AnimatedNumber value={61} /></strong><span>{t.docsHome.confidence.guides}</span></div>
        <div><strong><AnimatedNumber value={7} /></strong><span>{t.docsHome.confidence.stages}</span></div>
        <p>{t.docsHome.confidence.writtenFor}</p>
      </section>

      <section className="section page-section">
        <div className="section-heading">
          <p className="eyebrow reveal">{t.docsHome.workflowSection.eyebrow}</p>
          <h2 className="reveal">{t.docsHome.workflowSection.h2}</h2>
          <p className="reveal">{t.docsHome.workflowSection.p}</p>
        </div>
        <WorkflowExplorer />
      </section>

      <section className="section finder-section">
        <div className="section-heading">
          <p className="eyebrow reveal">{t.docsHome.finderSection.eyebrow}</p>
          <h2 className="reveal">{t.docsHome.finderSection.h2}</h2>
          <p className="reveal">{t.docsHome.finderSection.p}</p>
        </div>
        <ModuleFinder compact />
      </section>

      <section className="section support-callout">
        <div>
          <p className="eyebrow reveal">{t.docsHome.support.eyebrow}</p>
          <h2 className="reveal">{t.docsHome.support.h2}</h2>
        </div>
        <p className="reveal">{t.docsHome.support.p}</p>
        <Link className="light-link" href="/troubleshooting">{t.docsHome.support.cta} <span>↗</span></Link>
      </section>
    </>
  );
}

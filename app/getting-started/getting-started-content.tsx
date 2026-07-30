"use client";

import Link from "next/link";
import { useLanguage } from "../language-provider";

const hrefs = ["/modules/admin", "/modules/admin", "/modules/admin", "/modules/design-costing", "/modules/raw-inventory", "/workflow"];

export function GettingStartedContent() {
  const { t } = useLanguage();
  return (
    <>
      <section className="inner-hero page-enter">
        <p className="eyebrow reveal">{t.gettingStarted.eyebrow}</p>
        <h1 className="reveal" data-reveal-delay="60">{t.gettingStarted.h1}</h1>
        <p className="reveal" data-reveal-delay="120">{t.gettingStarted.lede}</p>
      </section>
      <section className="section checkpoint-list">
        {t.gettingStarted.checkpoints.map((item, index) => (
          <article key={index} className="reveal" data-reveal-delay={index * 50}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <Link href={hrefs[index]}>{item.link} <i>↗</i></Link>
          </article>
        ))}
      </section>
      <section className="section readiness-card reveal">
        <p className="eyebrow">{t.gettingStarted.readiness.eyebrow}</p>
        <h2>{t.gettingStarted.readiness.h2}</h2>
        <div>
          {t.gettingStarted.readiness.chips.map((chip, index) => <span key={index}>{chip}</span>)}
        </div>
        <p>{t.gettingStarted.readiness.p}</p>
      </section>
    </>
  );
}

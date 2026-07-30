"use client";

import Link from "next/link";
import { useLanguage } from "../language-provider";

const hrefs = ["/modules/admin", "/modules/production", "/modules/production", "/modules/sales", "/modules/orders", "/modules/accounts"];

export function TroubleshootingContent() {
  const { t } = useLanguage();
  return (
    <>
      <section className="inner-hero page-enter">
        <p className="eyebrow reveal">{t.troubleshooting.eyebrow}</p>
        <h1 className="reveal" data-reveal-delay="60">{t.troubleshooting.h1}</h1>
        <p className="reveal" data-reveal-delay="120">{t.troubleshooting.lede}</p>
      </section>
      <section className="section issue-grid">
        {t.troubleshooting.issues.map((issue, index) => (
          <details key={index} className="reveal" data-reveal-delay={index * 50}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span><h2>{issue.title}</h2><i>+</i></summary>
            <div>
              <p>{issue.answer}</p>
              <Link href={hrefs[index]}>{t.troubleshooting.openRelated}</Link>
            </div>
          </details>
        ))}
      </section>
      <section className="section diagnostic-order">
        <div>
          <p className="eyebrow reveal">{t.troubleshooting.diagnostic.eyebrow}</p>
          <h2 className="reveal">{t.troubleshooting.diagnostic.h2}</h2>
        </div>
        <ol>
          {t.troubleshooting.diagnostic.items.map((item, index) => (
            <li key={index}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.label}</b><p>{item.text}</p></li>
          ))}
        </ol>
      </section>
    </>
  );
}

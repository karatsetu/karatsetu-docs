"use client";

import { useLanguage } from "../language-provider";
import { WorkflowExplorer } from "../workflow-explorer";

export function WorkflowContent() {
  const { t } = useLanguage();
  return (
    <>
      <section className="inner-hero page-enter">
        <p className="eyebrow reveal">{t.workflowPage.eyebrow}</p>
        <h1 className="reveal" data-reveal-delay="60">{t.workflowPage.h1}</h1>
        <p className="reveal" data-reveal-delay="120">{t.workflowPage.lede}</p>
      </section>
      <section className="section workflow-page-section">
        <WorkflowExplorer />
      </section>
      <section className="section handoff-rules">
        <div className="section-heading">
          <p className="eyebrow reveal">{t.workflowPage.handoff.eyebrow}</p>
          <h2 className="reveal">{t.workflowPage.handoff.h2}</h2>
        </div>
        <div>
          {t.workflowPage.handoff.items.map((item, index) => (
            <article key={index} className="reveal" data-reveal-delay={index * 60}>
              <span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

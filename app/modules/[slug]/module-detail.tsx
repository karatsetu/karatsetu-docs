"use client";

import Link from "next/link";
import { modules } from "../../complete-guide/page";
import { useLanguage } from "../../language-provider";

export function ModuleDetail({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const currentModule = modules.find((item) => item.id === slug);

  if (!currentModule) return null;

  return (
    <article className="module-page page-enter">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/docs">{t.moduleDetail.breadcrumbDocs}</Link><span>/</span><Link href="/modules">{t.moduleDetail.breadcrumbModules}</Link><span>/</span><b>{currentModule.title}</b>
      </nav>
      <header className="module-page-hero">
        <div className="module-number">{currentModule.number}</div>
        <div>
          <p className="eyebrow">{currentModule.audience}</p>
          <h1>{currentModule.title}</h1>
          <p>{currentModule.purpose}</p>
        </div>
      </header>
      {lang === "hi" && <p className="lang-note">{t.moduleDetail.englishOnlyNote}</p>}
      <div className="module-page-layout">
        <aside>
          <p>{t.moduleDetail.onThisPage}</p>
          {currentModule.topics.map((topic, index) => (
            <a href={`#topic-${index + 1}`} key={topic.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>{topic.title}
            </a>
          ))}
        </aside>
        <div className="module-topic-stack">
          {currentModule.topics.map((topic, index) => (
            <section id={`topic-${index + 1}`} key={topic.title} className="reveal">
              <div className="topic-kicker">{t.moduleDetail.guideLabel} {currentModule.number}.{index + 1}</div>
              <h2>{topic.title}</h2>
              <p className="topic-summary">{topic.summary}</p>
              <p className="steps-label">{t.moduleDetail.howToUse}</p>
              <ol>
                {topic.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              {topic.tip && <p className="tip"><b>{t.moduleDetail.goodToKnow}</b>{topic.tip}</p>}
            </section>
          ))}
          <div className="next-module">
            <p>{t.moduleDetail.nextModule}</p>
            <Link href="/workflow">{t.moduleDetail.nextModuleCta}</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

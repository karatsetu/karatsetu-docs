"use client";

import Link from "next/link";
import { modules } from "../../complete-guide/page";

export function ModuleDetail({ slug }: { slug: string }) {
  const currentModule = modules.find((item) => item.id === slug);

  if (!currentModule) return null;

  return (
    <article className="module-page page-enter">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/docs">Documentation</Link><span>/</span><Link href="/modules">Modules</Link><span>/</span><b>{currentModule.title}</b>
      </nav>
      <header className="module-page-hero">
        <div className="module-number">{currentModule.number}</div>
        <div>
          <p className="eyebrow">{currentModule.audience}</p>
          <h1>{currentModule.title}</h1>
          <p>{currentModule.purpose}</p>
        </div>
      </header>
      <div className="module-page-layout">
        <aside>
          <p>On this page</p>
          {currentModule.topics.map((topic, index) => (
            <a href={`#topic-${index + 1}`} key={topic.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>{topic.title}
            </a>
          ))}
        </aside>
        <div className="module-topic-stack">
          {currentModule.topics.map((topic, index) => (
            <section id={`topic-${index + 1}`} key={topic.title}>
              <div className="topic-kicker">Guide {currentModule.number}.{index + 1}</div>
              <h2>{topic.title}</h2>
              <p className="topic-summary">{topic.summary}</p>
              <p className="steps-label">How to use it</p>
              <ol>
                {topic.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              {topic.tip && <p className="tip"><b>Good to know</b>{topic.tip}</p>}
            </section>
          ))}
          <div className="next-module">
            <p>Need the bigger picture?</p>
            <Link href="/workflow">See where this module fits in the full workflow →</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

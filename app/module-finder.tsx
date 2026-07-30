"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { useLanguage } from "./language-provider";
import { getModuleMeta, type ModuleMeta } from "./module-meta";

export function ModuleFinder({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useLanguage();
  const modules = useMemo<ModuleMeta[]>(() => getModuleMeta(lang), [lang]);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase());
  const filtered = useMemo(() => {
    const source = compact && !deferredQuery ? modules.slice(0, 6) : modules;
    if (!deferredQuery) return source;
    return modules.filter((module) =>
      `${module.title} ${module.purpose} ${module.audience}`.toLocaleLowerCase().includes(deferredQuery),
    );
  }, [compact, deferredQuery, modules]);

  return (
    <div className="module-finder">
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <span className="sr-only">{t.finder.placeholder}</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.finder.placeholder}
          type="search"
        />
        {query && <button type="button" onClick={() => setQuery("")}>{t.finder.clear}</button>}
      </label>
      <div className="module-card-grid">
        {filtered.map((module, index) => (
          <Link className="module-card reveal" data-reveal-delay={(index % 6) * 60} href={`/modules/${module.id}`} key={module.id}>
            <span>{module.number}</span>
            <p>{module.audience}</p>
            <h3>{module.title}</h3>
            <p>{module.purpose}</p>
            <b>{t.finder.openModule} <i aria-hidden="true">↗</i></b>
          </Link>
        ))}
      </div>
      {!filtered.length && (
        <div className="finder-empty">
          <p>{t.finder.noMatch}</p>
          <button type="button" onClick={() => setQuery("")}>{t.finder.showAll}</button>
        </div>
      )}
      {compact && !deferredQuery && <Link className="text-link" href="/modules">{t.finder.browseAll}</Link>}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import type { ModuleMeta } from "./module-meta";

export function ModuleFinder({ modules, compact = false }: { modules: readonly ModuleMeta[]; compact?: boolean }) {
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
        <span className="sr-only">Search modules</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Find billing, HUID, job cards, reports…"
          type="search"
        />
        {query && <button type="button" onClick={() => setQuery("")}>Clear</button>}
      </label>
      <div className="module-card-grid">
        {filtered.map((module) => (
          <Link className="module-card" href={`/modules/${module.id}`} key={module.id}>
            <span>{module.number}</span>
            <p>{module.audience}</p>
            <h3>{module.title}</h3>
            <p>{module.purpose}</p>
            <b>Open module <i aria-hidden="true">↗</i></b>
          </Link>
        ))}
      </div>
      {!filtered.length && (
        <div className="finder-empty">
          <p>No matching module. Try “production”, “stock” or “accounts”.</p>
          <button type="button" onClick={() => setQuery("")}>Show every module</button>
        </div>
      )}
      {compact && !deferredQuery && <Link className="text-link" href="/modules">Browse all 13 modules →</Link>}
    </div>
  );
}

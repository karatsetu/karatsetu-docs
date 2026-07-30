"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { getModuleMeta } from "./module-meta";
import { useLanguage } from "./language-provider";

type Item = { title: string; sub: string; href: string };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { lang, t } = useLanguage();

  const pages: Item[] = useMemo(
    () => [
      { title: t.nav.home, sub: "/", href: "/" },
      { title: t.nav.docs, sub: "/docs", href: "/docs" },
      { title: t.docsNav.start, sub: "/getting-started", href: "/getting-started" },
      { title: t.docsNav.modules, sub: "/modules", href: "/modules" },
      { title: t.docsNav.guide, sub: "/complete-guide", href: "/complete-guide" },
      { title: t.nav.flow, sub: "/workflow", href: "/workflow" },
      { title: t.nav.help, sub: "/troubleshooting", href: "/troubleshooting" },
    ],
    [t],
  );

  const modules: Item[] = useMemo(
    () => getModuleMeta(lang).map((module) => ({ title: module.title, sub: module.audience, href: `/modules/${module.id}` })),
    [lang],
  );

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    const filterList = (list: Item[]) => (q ? list.filter((item) => `${item.title} ${item.sub}`.toLocaleLowerCase().includes(q)) : list);
    return { pages: filterList(pages), modules: filterList(modules) };
  }, [pages, modules, query]);

  const flat = useMemo(() => [...results.pages, ...results.modules], [results]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function onInputKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((value) => Math.min(value + 1, flat.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((value) => Math.max(value - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = flat[active];
      if (item) go(item.href);
    }
  }

  if (!open) return null;

  let rowIndex = -1;

  return (
    <div className="command-palette-backdrop" onClick={() => setOpen(false)} role="presentation">
      <div className="command-palette" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="command-palette-input">
          <span aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder={t.palette.placeholder}
            aria-label={t.palette.placeholder}
          />
          <kbd>esc</kbd>
        </div>
        <div className="command-palette-results">
          {results.pages.length > 0 && (
            <div className="command-palette-group">
              <p>{t.palette.pages}</p>
              {results.pages.map((item) => {
                rowIndex += 1;
                const isActive = rowIndex === active;
                return (
                  <button key={item.href} className={isActive ? "active" : ""} onClick={() => go(item.href)} onMouseEnter={() => setActive(rowIndex)} type="button">
                    <b>{item.title}</b>
                    <span>{item.sub}</span>
                  </button>
                );
              })}
            </div>
          )}
          {results.modules.length > 0 && (
            <div className="command-palette-group">
              <p>{t.palette.modules}</p>
              {results.modules.map((item) => {
                rowIndex += 1;
                const isActive = rowIndex === active;
                return (
                  <button key={item.href} className={isActive ? "active" : ""} onClick={() => go(item.href)} onMouseEnter={() => setActive(rowIndex)} type="button">
                    <b>{item.title}</b>
                    <span>{item.sub}</span>
                  </button>
                );
              })}
            </div>
          )}
          {flat.length === 0 && <p className="command-palette-empty">{t.palette.noResults}</p>}
        </div>
        <div className="command-palette-hint">{t.palette.hint}</div>
      </div>
    </div>
  );
}

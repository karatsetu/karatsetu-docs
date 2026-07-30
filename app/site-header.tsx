"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";
import { LanguageToggle, ThemeToggle } from "./site-controls";

function matches(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/docs") return pathname === "/docs";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function primaryMatches(pathname: string, href: string) {
  if (href !== "/docs") return matches(pathname, href);
  return ["/docs", "/getting-started", "/modules", "/complete-guide"].some((route) => matches(pathname, route));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const docsContext = pathname !== "/";

  const primaryLinks = [
    { href: "/", label: t.nav.home },
    { href: "/docs", label: t.nav.docs },
    { href: "/workflow", label: t.nav.flow },
    { href: "/troubleshooting", label: t.nav.help },
  ];

  const docsLinks = [
    { href: "/docs", label: t.docsNav.overview },
    { href: "/getting-started", label: t.docsNav.start },
    { href: "/modules", label: t.docsNav.modules },
    { href: "/complete-guide", label: t.docsNav.guide },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-shell">
      <div className="top-nav">
        <Link className="brand" href="/" aria-label="KaratSetu product home">
          <span className="brand-mark">K</span>
          <span>
            <b>KaratSetu</b>
            <small>Jewellery ERP</small>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {primaryLinks.map((link) => {
            const active = primaryMatches(pathname, link.href);
            return (
              <Link aria-current={active ? "page" : undefined} className={active ? "active" : ""} href={link.href} key={link.href}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="top-nav-controls">
          <LanguageToggle />
          <ThemeToggle />
          <Link className="header-guide-link" href="/docs">{docsContext ? t.nav.docsHome : t.nav.openDocs} <span>↗</span></Link>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
      {docsContext && (
        <div className="docs-subnav">
          <Link href="/docs">{t.docsNav.label}</Link>
          <nav aria-label="Documentation navigation">
            {docsLinks.map((link) => {
              const active = matches(pathname, link.href);
              return (
                <Link aria-current={active ? "page" : undefined} className={active ? "active" : ""} href={link.href} key={link.href}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <span className="docs-mobile-hint">{t.docsNav.mobileHint}</span>
        </div>
      )}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {primaryLinks.map((link) => {
            const active = primaryMatches(pathname, link.href);
            return (
              <Link aria-current={active ? "page" : undefined} className={active ? "active" : ""} href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                <span>{link.label}</span><i>↗</i>
              </Link>
            );
          })}
          <p>{t.docsNav.label}</p>
          {docsLinks.slice(1).map((link) => {
            const active = matches(pathname, link.href);
            return (
              <Link aria-current={active ? "page" : undefined} className={active ? "active" : ""} href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                <span>{link.label}</span><i>↗</i>
              </Link>
            );
          })}
          <div className="mobile-menu-controls">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Documentation" },
  { href: "/workflow", label: "Product flow" },
  { href: "/troubleshooting", label: "Help" },
];

const docsLinks = [
  { href: "/docs", label: "Overview" },
  { href: "/getting-started", label: "Getting started" },
  { href: "/modules", label: "All modules" },
  { href: "/complete-guide", label: "Complete guide" },
];

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
  const docsContext = pathname !== "/";

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
        <Link className="header-guide-link" href="/docs">{docsContext ? "Docs home" : "Open docs"} <span>↗</span></Link>
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
          <Link href="/docs">Documentation</Link>
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
          <span className="docs-mobile-hint">Use the menu to browse sections</span>
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
          <p>Documentation</p>
          {docsLinks.slice(1).map((link) => {
            const active = matches(pathname, link.href);
            return (
              <Link aria-current={active ? "page" : undefined} className={active ? "active" : ""} href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                <span>{link.label}</span><i>↗</i>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

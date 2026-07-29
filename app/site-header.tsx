import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AurumDesk help centre home">
        <span className="brand-mark">A</span>
        <span>
          <b>AurumDesk</b>
          <small>Help Centre</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/getting-started">Getting started</Link>
        <Link href="/workflow">Workflow</Link>
        <Link href="/modules">Modules</Link>
        <Link href="/troubleshooting">Get unstuck</Link>
      </nav>
      <Link className="header-guide-link" href="/complete-guide">Complete guide ↗</Link>
    </header>
  );
}

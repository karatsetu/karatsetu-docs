import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const pillars = [
  ["Every gram accountable", "Purity-wise metal ledgers, job issues, returns, wastage and stock reconciliation stay connected."],
  ["Every job visible", "Orders, karigars, production stages, QC, hallmarking and finished stock share one traceable timeline."],
  ["Every rupee reconciled", "Live-rate billing, GST, advances, old-gold exchange and finance post into the same operating system."],
];

export default function ProductHome() {
  return (
    <main>
      <SiteHeader />
      <section className="product-hero">
        <div>
          <p className="eyebrow">Jewellery manufacturing ERP for India</p>
          <h1>Every gram. Every job. Every rupee.</h1>
          <p className="hero-lede">KaratSetu connects design, metal, karigars, hallmarking, billing and accounts in one jewellery operating system.</p>
          <div className="hero-actions">
            <Link className="primary-link" href="/docs">Open documentation <span>→</span></Link>
            <Link className="secondary-link" href="/workflow">Explore product flow</Link>
          </div>
          <p className="product-proof">Built around Indian jewellery workflows · BIS hallmarking · GST · HUID · karigar accounting</p>
        </div>
        <div className="system-preview" aria-label="KaratSetu connected workflow preview">
          <div className="system-preview-head">
            <span className="brand-mark">K</span>
            <p><b>Today’s control room</b><small>Design to accounts, live</small></p>
            <i>All systems connected</i>
          </div>
          <div className="system-metric">
            <span>Metal in production</span>
            <strong>12,486.340 g</strong>
            <small>22K · 18K · 14K reconciled</small>
          </div>
          <div className="system-rail">
            {["Design", "Order", "Production", "Hallmark", "Sale", "Accounts"].map((step, index) => (
              <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></div>
            ))}
          </div>
          <div className="system-status">
            <p><span>18</span> jobs moving today</p>
            <p><span>3</span> need attention</p>
          </div>
        </div>
      </section>
      <section className="product-pillars">
        {pillars.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="docs-entry">
        <div>
          <p className="eyebrow">KaratSetu documentation</p>
          <h2>Already using the product?</h2>
          <p>Go straight to setup, a business module, the end-to-end workflow or troubleshooting.</p>
        </div>
        <div className="docs-entry-links">
          <Link href="/docs"><b>Documentation home</b><span>Search and browse all guides ↗</span></Link>
          <Link href="/getting-started"><b>Getting started</b><span>Configure the system correctly ↗</span></Link>
          <Link href="/modules"><b>All modules</b><span>Open your area of work ↗</span></Link>
          <Link href="/troubleshooting"><b>Get unstuck</b><span>Diagnose common blockers ↗</span></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

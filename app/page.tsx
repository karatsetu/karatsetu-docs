import Link from "next/link";
import { ModuleFinder } from "./module-finder";
import { moduleMeta } from "./module-meta";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { WorkflowExplorer } from "./workflow-explorer";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="landing-hero page-enter">
        <div>
          <p className="eyebrow">61 task guides · 13 connected modules</p>
          <h1>Know what to do next, from sketch to sale.</h1>
          <p className="hero-lede">A practical help centre for every person moving designs, metal, orders and money through AurumDesk.</p>
          <div className="hero-actions">
            <Link className="primary-link" href="/getting-started">Start here <span>→</span></Link>
            <Link className="secondary-link" href="/modules">Browse modules</Link>
          </div>
        </div>
        <div className="hero-route-card" aria-label="Documentation routes">
          <p>Choose your route</p>
          <Link href="/getting-started"><span>01</span><b>New to AurumDesk</b><i>Set up in the right order →</i></Link>
          <Link href="/workflow"><span>02</span><b>Follow a jewellery piece</b><i>Understand the full flow →</i></Link>
          <Link href="/troubleshooting"><span>03</span><b>Something is blocked</b><i>Diagnose common problems →</i></Link>
        </div>
      </section>

      <section className="confidence-strip" aria-label="Help centre coverage">
        <div><strong>13</strong><span>modules</span></div>
        <div><strong>61</strong><span>task guides</span></div>
        <div><strong>7</strong><span>workflow stages</span></div>
        <p>Written for counter staff, production teams, storekeepers, accountants, managers and owners.</p>
      </section>

      <section className="section page-section">
        <div className="section-heading">
          <p className="eyebrow">The connected workflow</p>
          <h2>See what each stage receives and hands forward</h2>
          <p>Select a stage to understand its purpose, output and detailed guide.</p>
        </div>
        <WorkflowExplorer />
      </section>

      <section className="section finder-section">
        <div className="section-heading">
          <p className="eyebrow">Browse by responsibility</p>
          <h2>Go directly to the module you use</h2>
          <p>Search by task, team or business area. Each module now has its own dedicated page.</p>
        </div>
        <ModuleFinder modules={moduleMeta} compact />
      </section>

      <section className="section support-callout">
        <div>
          <p className="eyebrow">When something does not work</p>
          <h2>Start with permissions, status and configuration.</h2>
        </div>
        <p>Most blockers come from a missing approval, an unfinished previous stage, role access or a company rule. The troubleshooting guide helps you isolate the cause without guessing.</p>
        <Link className="light-link" href="/troubleshooting">Open troubleshooting <span>↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}

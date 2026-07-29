import Link from "next/link";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata = {
  title: "Troubleshooting | AurumDesk Help Centre",
  description: "Diagnose common permissions, approval, production, inventory, billing and reconciliation blockers.",
};

const issues = [
  ["I cannot see a module or field", "The user role may not include the module, branch or field. Ask an administrator to test the assigned role and company access.", "/modules/admin"],
  ["I cannot create a job card", "Check that the order is approved, the design is Active, the BOM is approved and the required production configuration exists.", "/modules/production"],
  ["A karigar return is waiting", "The actual return may exceed the configured wastage or weight-variance threshold and require approval.", "/modules/production"],
  ["An item is unavailable for billing", "Confirm that it passed QC, completed hallmarking, has its HUID mapped, is tagged and belongs to the billing location.", "/modules/sales"],
  ["The amount changed after reopening", "A floating-rate order may recalculate at the applicable rate. Review the order’s rate-lock option and Rate Master history.", "/modules/orders"],
  ["Money balances but metal does not", "Review purity-wise purchases, issues, returns, old-gold exchanges and loan movements in the metal reconciliation.", "/modules/accounts"],
];

export default function TroubleshootingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero page-enter">
        <p className="eyebrow">Get unstuck</p>
        <h1>Find the missing permission, status or handoff.</h1>
        <p>Start with the symptom. Each answer points to the module where the underlying record can be checked.</p>
      </section>
      <section className="section issue-grid">
        {issues.map(([title, answer, href], index) => (
          <details key={title}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><i>+</i></summary>
            <div>
              <p>{answer}</p>
              <Link href={href}>Open the related guide ↗</Link>
            </div>
          </details>
        ))}
      </section>
      <section className="section diagnostic-order">
        <div>
          <p className="eyebrow">Fast diagnostic order</p>
          <h2>Check these four things before changing data</h2>
        </div>
        <ol>
          <li><span>01</span><b>Permission</b><p>Can the user access the company, branch, module and field?</p></li>
          <li><span>02</span><b>Status</b><p>Did the previous workflow stage finish successfully?</p></li>
          <li><span>03</span><b>Approval</b><p>Is an exception or threshold waiting for authorization?</p></li>
          <li><span>04</span><b>Configuration</b><p>Is the rate, material, formula, stage or rule active?</p></li>
        </ol>
      </section>
      <SiteFooter />
    </main>
  );
}

import Link from "next/link";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata = {
  title: "Getting Started | AurumDesk Help Centre",
  description: "Set up AurumDesk in the right order before processing jewellery transactions.",
};

const checkpoints = [
  { number: "01", title: "Create the business structure", text: "Set companies, GST entities, branches and reporting isolation before creating stock or transactions.", href: "/modules/admin", link: "Open Admin & Configuration" },
  { number: "02", title: "Define materials and rates", text: "Add purity slabs, conversion factors, making-charge formulas, wastage tolerance and the daily rate process.", href: "/modules/admin", link: "Configure materials and rates" },
  { number: "03", title: "Protect access and approvals", text: "Create roles for counter, production, stores, accounts and management; then test approval thresholds.", href: "/modules/admin", link: "Review roles and approvals" },
  { number: "04", title: "Load master records", text: "Create suppliers, customers, karigars and the first approved catalogue designs with BOMs.", href: "/modules/design-costing", link: "Start the design catalogue" },
  { number: "05", title: "Verify opening balances", text: "Confirm purity-wise metal, stones, findings, finished pieces, currency ledgers and metal ledgers before going live.", href: "/modules/raw-inventory", link: "Review inventory controls" },
  { number: "06", title: "Run one complete test order", text: "Book, produce, QC, hallmark, tag, bill and reconcile one sample piece before training the full team.", href: "/workflow", link: "Follow the end-to-end workflow" },
];

export default function GettingStartedPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero page-enter">
        <p className="eyebrow">Implementation checklist</p>
        <h1>Set the foundation before the first live order.</h1>
        <p>Complete these checkpoints in sequence. Each one prevents downstream stock, billing or reconciliation problems.</p>
      </section>
      <section className="section checkpoint-list">
        {checkpoints.map((item) => (
          <article key={item.number}>
            <span>{item.number}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <Link href={item.href}>{item.link} <i>↗</i></Link>
          </article>
        ))}
      </section>
      <section className="section readiness-card">
        <p className="eyebrow">Ready for go-live</p>
        <h2>One transaction should balance in three places.</h2>
        <div>
          <span>Operational status</span>
          <span>Currency ledger</span>
          <span>Metal-weight ledger</span>
        </div>
        <p>If the sample order is complete operationally and both ledgers reconcile, the team is ready to process live work.</p>
      </section>
      <SiteFooter />
    </main>
  );
}

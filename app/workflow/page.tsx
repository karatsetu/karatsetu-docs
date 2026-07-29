import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { WorkflowExplorer } from "../workflow-explorer";

export const metadata = {
  title: "End-to-End Workflow | KaratSetu Documentation",
  description: "Follow a jewellery piece through design, order, procurement, production, hallmarking, sales and accounts.",
};

export default function WorkflowPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero page-enter">
        <p className="eyebrow">End-to-end process</p>
        <h1>Follow one piece through the entire business.</h1>
        <p>Each stage produces the evidence and status required by the next. Select a stage to understand the handoff.</p>
      </section>
      <section className="section workflow-page-section">
        <WorkflowExplorer />
      </section>
      <section className="section handoff-rules">
        <div className="section-heading">
          <p className="eyebrow">Control points</p>
          <h2>Do not skip these handoffs</h2>
        </div>
        <div>
          <article><span>Design → Order</span><h3>Approved, active and costed</h3><p>The design and BOM must be approved before production commitment.</p></article>
          <article><span>Production → Hallmark</span><h3>QC passed</h3><p>Weight, stone count, finish and defect checks must be complete.</p></article>
          <article><span>Hallmark → Sale</span><h3>HUID mapped and tagged</h3><p>The hallmark identity must belong to the exact finished piece.</p></article>
          <article><span>Sale → Accounts</span><h3>Invoice and payment posted</h3><p>Currency and purity-wise metal movements must reconcile together.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

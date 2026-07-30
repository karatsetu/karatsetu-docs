import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { WorkflowContent } from "./workflow-content";

export const metadata = {
  title: "End-to-End Workflow | KaratSetu Documentation",
  description: "Follow a jewellery piece through design, order, procurement, production, hallmarking, sales and accounts.",
};

export default function WorkflowPage() {
  return (
    <main>
      <SiteHeader />
      <WorkflowContent />
      <SiteFooter />
    </main>
  );
}

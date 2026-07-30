import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { TroubleshootingContent } from "./troubleshooting-content";

export const metadata = {
  title: "Troubleshooting | KaratSetu Documentation",
  description: "Diagnose common permissions, approval, production, inventory, billing and reconciliation blockers.",
};

export default function TroubleshootingPage() {
  return (
    <main>
      <SiteHeader />
      <TroubleshootingContent />
      <SiteFooter />
    </main>
  );
}

import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { ModulesContent } from "./modules-content";

export const metadata = {
  title: "All Modules | KaratSetu Documentation",
  description: "Browse all 13 KaratSetu jewellery ERP modules and their end-user guides.",
};

export default function ModulesPage() {
  return (
    <main>
      <SiteHeader />
      <ModulesContent />
      <SiteFooter />
    </main>
  );
}

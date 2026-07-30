import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { DocsContent } from "./docs-content";

export const metadata = {
  title: "Documentation | KaratSetu",
  description: "Search and browse KaratSetu jewellery ERP guides by task, workflow stage or business module.",
};

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <DocsContent />
      <SiteFooter />
    </main>
  );
}

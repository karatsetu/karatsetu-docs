import { ModuleFinder } from "../module-finder";
import { moduleMeta } from "../module-meta";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata = {
  title: "All Modules | KaratSetu Documentation",
  description: "Browse all 13 KaratSetu jewellery ERP modules and their end-user guides.",
};

export default function ModulesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero page-enter">
        <p className="eyebrow">All product areas</p>
        <h1>13 modules. One connected business.</h1>
        <p>Open a module for its purpose, users, individual tasks and step-by-step instructions.</p>
      </section>
      <section className="section module-index-section">
        <ModuleFinder modules={moduleMeta} />
      </section>
      <SiteFooter />
    </main>
  );
}

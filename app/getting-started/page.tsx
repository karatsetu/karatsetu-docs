import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { GettingStartedContent } from "./getting-started-content";

export const metadata = {
  title: "Getting Started | KaratSetu Documentation",
  description: "Set up KaratSetu in the right order before processing jewellery transactions.",
};

export default function GettingStartedPage() {
  return (
    <main>
      <SiteHeader />
      <GettingStartedContent />
      <SiteFooter />
    </main>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div>
        <span className="brand-mark">K</span>
        <p><b>KaratSetu</b><br />Jewellery ERP for India</p>
      </div>
      <p>Design → Order → Procurement → Production → Hallmarking → Sales → Accounts</p>
      <Link href="/docs">Documentation home ↑</Link>
    </footer>
  );
}

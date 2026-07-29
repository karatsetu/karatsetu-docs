import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div>
        <span className="brand-mark">A</span>
        <p><b>AurumDesk</b><br />Jewellery ERP help centre</p>
      </div>
      <p>Design → Order → Procurement → Production → Hallmarking → Sales → Accounts</p>
      <Link href="/">Help centre home ↑</Link>
    </footer>
  );
}

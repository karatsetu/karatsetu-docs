"use client";

import Link from "next/link";
import { useLanguage } from "./language-provider";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer>
      <div>
        <span className="brand-mark">K</span>
        <p><b>KaratSetu</b><br />{t.footer.tagline}</p>
      </div>
      <p>{t.footer.flow}</p>
      <Link href="/docs">{t.footer.back}</Link>
    </footer>
  );
}

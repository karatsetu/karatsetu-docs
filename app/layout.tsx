import type { Metadata } from "next";
import Script from "next/script";
import { CommandPalette } from "./command-palette";
import "./globals.css";
import { LanguageProvider } from "./language-provider";
import { ScrollReveal } from "./scroll-reveal";
import { ThemeProvider } from "./theme-provider";

const title = "KaratSetu | Jewellery Manufacturing ERP for India";
const description = "A connected jewellery operating system for design, production, inventory, hallmarking, sales and accounts.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('karatsetu-theme');
    var theme = stored === 'dark' || stored === 'light' ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    var lang = localStorage.getItem('karatsetu-lang');
    if (lang === 'hi' || lang === 'en') document.documentElement.lang = lang;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="karatsetu-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <div className="grain-overlay" aria-hidden="true" />
            {children}
            <ScrollReveal />
            <CommandPalette />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

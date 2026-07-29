import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "AurumDesk Help Centre | Jewellery ERP Guides";
const description = "Practical end-user guidance for jewellery design, production, inventory, hallmarking, sales and accounts.";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host");
  const protocol = incoming.get("x-forwarded-proto") ?? (host?.startsWith("localhost") ? "http" : "https");
  const image = host ? `${protocol}://${host}/og.png` : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: image ? [{ url: image, width: 1732, height: 908, alt: "AurumDesk help centre" }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

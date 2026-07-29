import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { moduleMeta } from "../../module-meta";
import { SiteFooter } from "../../site-footer";
import { SiteHeader } from "../../site-header";
import { ModuleDetail } from "./module-detail";

export function generateStaticParams() {
  return moduleMeta.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const module = moduleMeta.find((item) => item.id === slug);
  if (!module) return {};
  return {
    title: `${module.title} | AurumDesk Help Centre`,
    description: module.purpose,
  };
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!moduleMeta.some((module) => module.id === slug)) notFound();

  return (
    <main>
      <SiteHeader />
      <ModuleDetail slug={slug} />
      <SiteFooter />
    </main>
  );
}

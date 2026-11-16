import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDoc } from "@/components/LegalDoc";
import { getLegalPage, getLegalSlugs } from "@/lib/legal/pages";
import { canonicalPath } from "@/lib/paths";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return {};
  return {
    title: page.title.tr,
    description: page.intro?.tr ?? page.title.tr,
    alternates: { canonical: canonicalPath(`/yasal/${slug}`) },
  };
}

export default async function LegalSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();
  return (
    <main id="icerik" tabIndex={-1}>
      <LegalDoc page={page} />
    </main>
  );
}

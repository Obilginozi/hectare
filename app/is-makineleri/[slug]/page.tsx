import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeavyEquipmentCategory } from "@/components/HeavyEquipmentCategory";
import { HeavyEquipmentExport } from "@/components/HeavyEquipmentExport";
import {
  findHeavyEquipmentCategory,
  heavyEquipmentExport,
  heavyEquipmentSlugs,
  isHeavyEquipmentSlug,
} from "@/lib/heavy-equipment";
import { canonicalPath } from "@/lib/paths";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return heavyEquipmentSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug === heavyEquipmentExport.slug) {
    return {
      title: heavyEquipmentExport.title.tr,
      description: heavyEquipmentExport.intro.tr[0],
      alternates: { canonical: canonicalPath(`/is-makineleri/${slug}`) },
    };
  }

  const category = findHeavyEquipmentCategory(slug);
  if (!category) return {};

  return {
    title: category.saleTitle.tr,
    description: category.card.tr,
    alternates: { canonical: canonicalPath(`/is-makineleri/${slug}`) },
  };
}

export default async function IsMakineleriSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!isHeavyEquipmentSlug(slug)) notFound();

  return (
    <main id="icerik" tabIndex={-1}>
      {slug === heavyEquipmentExport.slug ? (
        <HeavyEquipmentExport />
      ) : (
        <HeavyEquipmentCategory slug={slug} />
      )}
    </main>
  );
}

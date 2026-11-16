import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryCatalog } from "@/components/CategoryCatalog";
import { catalog, findCategory } from "@/lib/catalog";
import { canonicalPath } from "@/lib/paths";

export function generateStaticParams() {
  return catalog.map((category) => ({ kategori: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string }>;
}): Promise<Metadata> {
  const { kategori } = await params;
  const category = findCategory(kategori);
  if (!category) return {};

  return {
    title: category.name,
    description: `${category.name}. Hectare AŞ tarafından tedarik edilir.`,
    alternates: { canonical: canonicalPath(`/urunler/${category.slug}`) },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ kategori: string }> }) {
  const { kategori } = await params;
  const category = findCategory(kategori);
  if (!category) notFound();

  return (
    <main id="icerik" tabIndex={-1}>
      <CategoryCatalog category={category} />
    </main>
  );
}

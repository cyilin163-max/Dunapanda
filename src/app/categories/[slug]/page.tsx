import { notFound } from "next/navigation";
import { CategoryDetailPage } from "@/components/site/pages";
import { getCategoryBySlug } from "@/lib/catalog";
import { getCatalogProducts } from "@/lib/commerce/repository";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [category, products] = await Promise.all([getCategoryBySlug(slug), getCatalogProducts()]);

  if (!category) {
    notFound();
  }

  return <CategoryDetailPage category={category} products={products} />;
}

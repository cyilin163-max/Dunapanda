import { notFound } from "next/navigation";
import { ProductPage } from "@/components/site/pages";
import { getCatalogProductBySlug, getCatalogProducts } from "@/lib/commerce/repository";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [product, products] = await Promise.all([getCatalogProductBySlug(slug), getCatalogProducts()]);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((entry) => entry.categorySlug === product.categorySlug && entry.slug !== product.slug).slice(0, 2);

  return <ProductPage product={product} relatedProducts={relatedProducts} />;
}

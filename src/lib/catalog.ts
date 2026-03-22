import { categories, faqs, featureStats, promotions, storeDetail } from "@/data/site";
import { getCatalogProductBySlug, getCatalogProducts } from "@/lib/commerce/repository";

export async function getCategories() {
  return categories;
}

export async function getCategoryBySlug(slug: string) {
  return categories.find((entry) => entry.slug === slug) ?? null;
}

export async function getProducts() {
  return getCatalogProducts();
}

export async function getProductBySlug(slug: string) {
  return getCatalogProductBySlug(slug);
}

export async function getProductsByCategory(slug: string) {
  const products = await getCatalogProducts();
  return products.filter((entry) => entry.categorySlug === slug);
}

export async function getPromotions() {
  return promotions;
}

export async function getFaqs() {
  return faqs;
}

export async function getFeatureStats() {
  return featureStats;
}

export async function getStoreDetail() {
  return storeDetail;
}

import { SearchPage } from "@/components/site/pages";
import { getCatalogProducts } from "@/lib/commerce/repository";

export default async function Page() {
  const products = await getCatalogProducts();
  return <SearchPage products={products} />;
}

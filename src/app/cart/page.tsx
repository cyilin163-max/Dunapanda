import { CartPageView } from "@/components/commerce/cart-page-view";
import { getCatalogProducts } from "@/lib/commerce/repository";
import { getCurrentUser } from "@/lib/auth";

export default async function Page() {
  const [products, user] = await Promise.all([getCatalogProducts(), getCurrentUser()]);
  return <CartPageView products={products} user={user} />;
}

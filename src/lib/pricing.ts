import type { AppRole } from "@/types/auth";
import type { CatalogProduct } from "@/types/commerce";

export function getVisiblePrice(product: CatalogProduct, role: AppRole | null | undefined) {
  return role === "wholesaler" ? product.wholesalePrice : product.retailPrice;
}

export function getVisiblePriceLabel(product: CatalogProduct, role: AppRole | null | undefined) {
  return `€${getVisiblePrice(product, role).toFixed(2)}`;
}

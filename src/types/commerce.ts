import type { Product } from "@/types/site";
import type { AppRole } from "@/types/auth";

export type CurrencyCode = "EUR";

export type CatalogProduct = Product & {
  id: string;
  retailPrice: number;
  wholesalePrice: number;
  currency: CurrencyCode;
  stockQuantity: number;
  wholesaleMinQuantity: number;
  lowStockThreshold: number;
  createdAt: string;
  updatedAt: string;
};

export type CatalogProductInput = {
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  sku: string;
  titleZh: string;
  titleEn: string;
  titleHu: string;
  subtitleZh: string;
  subtitleEn: string;
  subtitleHu: string;
  descriptionZh: string;
  descriptionEn: string;
  descriptionHu: string;
  brand: string;
  brandSlug: string;
  originZh: string;
  originEn: string;
  originHu: string;
  sizeZh: string;
  sizeEn: string;
  sizeHu: string;
  heroImage: string;
  retailPrice: number;
  wholesalePrice: number;
  stockQuantity: number;
  wholesaleMinQuantity: number;
};

export type InventoryAdjustmentInput = {
  productId: string;
  change: number;
  note: string;
};

export type InventoryLog = {
  id: string;
  productId: string;
  productTitle: string;
  change: number;
  note: string;
  createdAt: string;
};

export type WholesaleApplicationStatus = "pending" | "approved" | "rejected";

export type WholesaleApplication = {
  id: string;
  userEmail: string;
  contactName: string;
  companyName: string;
  taxId: string;
  note: string;
  status: WholesaleApplicationStatus;
  createdAt: string;
  updatedAt: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  quantity: number;
  unitPrice: number;
  pricingRole: Exclude<AppRole, "admin">;
};

"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { createCatalogProduct, reviewWholesaleApplication, updateCatalogInventory } from "@/lib/commerce/repository";
import type { AuthActionState } from "@/types/auth";

const productSchema = z.object({
  slug: z.string().min(3),
  categorySlug: z.string().min(1),
  subcategorySlug: z.string().min(1),
  sku: z.string().min(2),
  titleZh: z.string().min(1),
  titleEn: z.string().min(1),
  titleHu: z.string().min(1),
  subtitleZh: z.string().min(1),
  subtitleEn: z.string().min(1),
  subtitleHu: z.string().min(1),
  descriptionZh: z.string().min(1),
  descriptionEn: z.string().min(1),
  descriptionHu: z.string().min(1),
  brand: z.string().min(1),
  brandSlug: z.string().min(1),
  originZh: z.string().min(1),
  originEn: z.string().min(1),
  originHu: z.string().min(1),
  sizeZh: z.string().min(1),
  sizeEn: z.string().min(1),
  sizeHu: z.string().min(1),
  heroImage: z.url(),
  retailPrice: z.coerce.number().nonnegative(),
  wholesalePrice: z.coerce.number().nonnegative(),
  stockQuantity: z.coerce.number().int().nonnegative(),
  wholesaleMinQuantity: z.coerce.number().int().positive(),
});

const inventorySchema = z.object({
  productId: z.string().min(1),
  change: z.coerce.number().int(),
  note: z.string().min(1),
});

export async function createProductAction(_state: AuthActionState | undefined, formData: FormData): Promise<AuthActionState | undefined> {
  await requireRole(["admin"]);

  const parsed = productSchema.safeParse({
    slug: formData.get("slug"),
    categorySlug: formData.get("categorySlug"),
    subcategorySlug: formData.get("subcategorySlug"),
    sku: formData.get("sku"),
    titleZh: formData.get("titleZh"),
    titleEn: formData.get("titleEn"),
    titleHu: formData.get("titleHu"),
    subtitleZh: formData.get("subtitleZh"),
    subtitleEn: formData.get("subtitleEn"),
    subtitleHu: formData.get("subtitleHu"),
    descriptionZh: formData.get("descriptionZh"),
    descriptionEn: formData.get("descriptionEn"),
    descriptionHu: formData.get("descriptionHu"),
    brand: formData.get("brand"),
    brandSlug: formData.get("brandSlug"),
    originZh: formData.get("originZh"),
    originEn: formData.get("originEn"),
    originHu: formData.get("originHu"),
    sizeZh: formData.get("sizeZh"),
    sizeEn: formData.get("sizeEn"),
    sizeHu: formData.get("sizeHu"),
    heroImage: formData.get("heroImage"),
    retailPrice: formData.get("retailPrice"),
    wholesalePrice: formData.get("wholesalePrice"),
    stockQuantity: formData.get("stockQuantity"),
    wholesaleMinQuantity: formData.get("wholesaleMinQuantity"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "商品数据不完整" };
  }

  await createCatalogProduct(parsed.data);
  revalidatePath("/admin/products");
  revalidatePath("/products");
  return { success: "商品已新增" };
}

export async function updateInventoryAction(_state: AuthActionState | undefined, formData: FormData): Promise<AuthActionState | undefined> {
  await requireRole(["admin"]);

  const parsed = inventorySchema.safeParse({
    productId: formData.get("productId"),
    change: formData.get("change"),
    note: formData.get("note"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "库存调整信息不完整" };
  }

  await updateCatalogInventory(parsed.data);
  revalidatePath("/admin/inventory");
  revalidatePath("/products");
  return { success: "库存已更新" };
}

export async function reviewWholesaleApplicationAction(formData: FormData) {
  await requireRole(["admin"]);

  const applicationId = String(formData.get("applicationId") ?? "");
  const status = String(formData.get("status") ?? "") as "approved" | "rejected";
  if (!applicationId || !status) {
    return;
  }

  await reviewWholesaleApplication(applicationId, status);
  revalidatePath("/admin/wholesale-applications");
  revalidatePath("/account");
}

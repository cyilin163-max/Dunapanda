import "server-only";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import {
  adjustDemoInventory,
  createDemoProduct,
  getDemoProductBySlug,
  listDemoInventoryLogs,
  listDemoProducts,
  listDemoWholesaleApplications,
  reviewDemoWholesaleApplication,
  submitDemoWholesaleApplication,
} from "@/lib/commerce/demo-store";
import type {
  CatalogProduct,
  CatalogProductInput,
  InventoryAdjustmentInput,
  InventoryLog,
  WholesaleApplication,
} from "@/types/commerce";

type CatalogProductRow = {
  id: string;
  slug: string;
  category_slug: string;
  subcategory_slug: string;
  sku: string;
  badge: CatalogProduct["badge"];
  stock_status: CatalogProduct["stockStatus"];
  title_zh: string;
  title_en: string;
  title_hu: string;
  subtitle_zh: string;
  subtitle_en: string;
  subtitle_hu: string;
  description_zh: string;
  description_en: string;
  description_hu: string;
  origin_zh: string;
  origin_en: string;
  origin_hu: string;
  size_zh: string;
  size_en: string;
  size_hu: string;
  brand: string;
  brand_slug: string;
  retail_price: number;
  wholesale_price: number;
  currency: CatalogProduct["currency"];
  stock_quantity: number;
  wholesale_min_quantity: number;
  hero_image: string;
  tags: CatalogProduct["tags"];
  filters: CatalogProduct["filters"];
  attributes: CatalogProduct["attributes"];
  gallery: CatalogProduct["gallery"];
  gradient: string;
  created_at: string;
  updated_at: string;
};

type WholesaleApplicationRow = {
  id: string;
  user_email: string;
  contact_name: string;
  company_name: string;
  tax_id: string;
  note: string;
  status: WholesaleApplication["status"];
  created_at: string;
  updated_at: string;
};

type InventoryLogRow = {
  id: string;
  product_id: string;
  product_title: string;
  change: number;
  note: string;
  created_at: string;
};

function toCatalogProduct(row: CatalogProductRow): CatalogProduct {
  return {
    id: row.id,
    slug: row.slug,
    categorySlug: row.category_slug,
    subcategorySlug: row.subcategory_slug,
    sku: row.sku,
    badge: row.badge,
    priceLabel: `€${Number(row.retail_price).toFixed(2)}`,
    stockStatus: row.stock_status,
    title: {
      zh: row.title_zh,
      en: row.title_en,
      hu: row.title_hu,
    },
    subtitle: {
      zh: row.subtitle_zh,
      en: row.subtitle_en,
      hu: row.subtitle_hu,
    },
    description: {
      zh: row.description_zh,
      en: row.description_en,
      hu: row.description_hu,
    },
    origin: {
      zh: row.origin_zh,
      en: row.origin_en,
      hu: row.origin_hu,
    },
    size: {
      zh: row.size_zh,
      en: row.size_en,
      hu: row.size_hu,
    },
    brand: row.brand,
    brandSlug: row.brand_slug,
    tags: row.tags,
    filters: row.filters,
    attributes: row.attributes,
    gallery: row.gallery.length
      ? row.gallery
      : [
          {
            src: row.hero_image,
            alt: {
              zh: row.title_zh,
              en: row.title_en,
              hu: row.title_hu,
            },
          },
        ],
    gradient: row.gradient,
    retailPrice: Number(row.retail_price),
    wholesalePrice: Number(row.wholesale_price),
    currency: row.currency,
    stockQuantity: row.stock_quantity,
    wholesaleMinQuantity: row.wholesale_min_quantity,
    lowStockThreshold: 6,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function toInventoryLog(row: InventoryLogRow): InventoryLog {
  return {
    id: row.id,
    productId: row.product_id,
    productTitle: row.product_title,
    change: row.change,
    note: row.note,
    createdAt: row.created_at,
  };
}

function toWholesaleApplication(row: WholesaleApplicationRow): WholesaleApplication {
  return {
    id: row.id,
    userEmail: row.user_email,
    contactName: row.contact_name,
    companyName: row.company_name,
    taxId: row.tax_id,
    note: row.note,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getCatalogProducts(): Promise<CatalogProduct[]> {
  if (!isSupabaseConfigured()) {
    return listDemoProducts();
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase.from("catalog_products").select("*").order("created_at", { ascending: false });
  if (error || !data) {
    return [];
  }

  return data.map((row) => toCatalogProduct(row as CatalogProductRow));
}

export async function getCatalogProductBySlug(slug: string) {
  if (!isSupabaseConfigured()) {
    return getDemoProductBySlug(slug);
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return null;
  }

  const { data } = await supabase.from("catalog_products").select("*").eq("slug", slug).maybeSingle();
  return data ? toCatalogProduct(data as CatalogProductRow) : null;
}

export async function createCatalogProduct(input: CatalogProductInput) {
  if (!isSupabaseConfigured()) {
    return createDemoProduct(input);
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return null;
  }

  const payload = {
    slug: input.slug,
    category_slug: input.categorySlug,
    subcategory_slug: input.subcategorySlug,
    sku: input.sku,
    title_zh: input.titleZh,
    title_en: input.titleEn,
    title_hu: input.titleHu,
    subtitle_zh: input.subtitleZh,
    subtitle_en: input.subtitleEn,
    subtitle_hu: input.subtitleHu,
    description_zh: input.descriptionZh,
    description_en: input.descriptionEn,
    description_hu: input.descriptionHu,
    origin_zh: input.originZh,
    origin_en: input.originEn,
    origin_hu: input.originHu,
    size_zh: input.sizeZh,
    size_en: input.sizeEn,
    size_hu: input.sizeHu,
    brand: input.brand,
    brand_slug: input.brandSlug,
    hero_image: input.heroImage,
    retail_price: input.retailPrice,
    wholesale_price: input.wholesalePrice,
    stock_quantity: input.stockQuantity,
    wholesale_min_quantity: input.wholesaleMinQuantity,
    tags: [
      { zh: "新品", en: "New", hu: "Uj" },
      { zh: "后台录入", en: "Admin entry", hu: "Admin felvitel" },
    ],
    filters: [],
    attributes: [],
    gallery: [
      {
        src: input.heroImage,
        alt: { zh: input.titleZh, en: input.titleEn, hu: input.titleHu },
      },
    ],
  };

  const { data } = await supabase.from("catalog_products").insert(payload).select("*").single();
  return data ? toCatalogProduct(data as CatalogProductRow) : null;
}

export async function updateCatalogInventory(input: InventoryAdjustmentInput) {
  if (!isSupabaseConfigured()) {
    return adjustDemoInventory(input);
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return null;
  }

  const { data: product } = await supabase.from("catalog_products").select("id, stock_quantity, title_zh").eq("id", input.productId).single();
  if (!product) {
    return null;
  }

  const nextQuantity = Math.max(Number(product.stock_quantity) + input.change, 0);
  const nextStatus = nextQuantity === 0 ? "seasonal" : nextQuantity <= 6 ? "limited" : "in-stock";

  await supabase
    .from("catalog_products")
    .update({
      stock_quantity: nextQuantity,
      stock_status: nextStatus,
      updated_at: new Date().toISOString(),
    })
    .eq("id", input.productId);

  const { data: log } = await supabase
    .from("inventory_logs")
    .insert({
      product_id: input.productId,
      product_title: product.title_zh,
      change: input.change,
      note: input.note,
    })
    .select("*")
    .single();

  return log ? toInventoryLog(log as InventoryLogRow) : null;
}

export async function getInventoryLogs(): Promise<InventoryLog[]> {
  if (!isSupabaseConfigured()) {
    return listDemoInventoryLogs();
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const { data } = await supabase.from("inventory_logs").select("*").order("created_at", { ascending: false }).limit(20);
  return (data as InventoryLogRow[] | null)?.map(toInventoryLog) ?? [];
}

export async function getWholesaleApplications(): Promise<WholesaleApplication[]> {
  if (!isSupabaseConfigured()) {
    return listDemoWholesaleApplications();
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const { data } = await supabase.from("wholesale_applications").select("*").order("created_at", { ascending: false });
  return (data as WholesaleApplicationRow[] | null)?.map(toWholesaleApplication) ?? [];
}

export async function submitWholesaleApplication(input: Omit<WholesaleApplication, "id" | "status" | "createdAt" | "updatedAt">) {
  if (!isSupabaseConfigured()) {
    return submitDemoWholesaleApplication(input);
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return null;
  }

  const { data } = await supabase
    .from("wholesale_applications")
    .insert({
      user_email: input.userEmail,
      contact_name: input.contactName,
      company_name: input.companyName,
      tax_id: input.taxId,
      note: input.note,
    })
    .select("*")
    .single();

  return data ? toWholesaleApplication(data as WholesaleApplicationRow) : null;
}

export async function reviewWholesaleApplication(id: string, status: "approved" | "rejected") {
  if (!isSupabaseConfigured()) {
    return reviewDemoWholesaleApplication(id, status);
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return null;
  }

  const { data: application } = await supabase
    .from("wholesale_applications")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select("*")
    .single();

  if (status === "approved" && application?.user_email) {
    await supabase.from("profiles").update({ role: "wholesaler" }).eq("email", application.user_email);
  }

  return application ? toWholesaleApplication(application as WholesaleApplicationRow) : null;
}

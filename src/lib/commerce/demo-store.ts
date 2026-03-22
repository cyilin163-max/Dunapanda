import "server-only";

import { products as siteProducts } from "@/data/site";
import type { CatalogProduct, CatalogProductInput, InventoryAdjustmentInput, InventoryLog, WholesaleApplication } from "@/types/commerce";
import type { AppRole, SessionUser } from "@/types/auth";

type DemoStore = {
  products: CatalogProduct[];
  inventoryLogs: InventoryLog[];
  wholesaleApplications: WholesaleApplication[];
  users: SessionUser[];
};

const globalStore = globalThis as typeof globalThis & {
  __dunapandaDemoStore?: DemoStore;
};

const basePricesByCategory: Record<string, { retail: number; wholesale: number }> = {
  "fresh-produce": { retail: 2.8, wholesale: 2.1 },
  "frozen-deli": { retail: 6.9, wholesale: 5.2 },
  "snacks-drinks": { retail: 2.2, wholesale: 1.55 },
  "sauces-pantry": { retail: 4.5, wholesale: 3.25 },
  "asian-snacks": { retail: 3.6, wholesale: 2.45 },
  seafood: { retail: 9.8, wholesale: 7.25 },
  desserts: { retail: 4.2, wholesale: 3.1 },
  "daily-essentials": { retail: 5.1, wholesale: 3.8 },
};

function roundToCents(value: number) {
  return Math.round(value * 100) / 100;
}

function buildDemoProducts() {
  return siteProducts.map<CatalogProduct>((product, index) => {
    const base = basePricesByCategory[product.categorySlug] ?? { retail: 4.5, wholesale: 3.2 };
    const offset = (index % 4) * 0.35;
    const retailPrice = roundToCents(base.retail + offset);
    const wholesalePrice = roundToCents(Math.max(base.wholesale + offset * 0.75, retailPrice * 0.68));
    const stockQuantity = 8 + ((index * 7) % 36);
    const timestamp = new Date(Date.now() - index * 1000 * 60 * 60 * 8).toISOString();

    return {
      ...product,
      id: `${product.slug}-demo`,
      retailPrice,
      wholesalePrice,
      currency: "EUR",
      stockQuantity,
      wholesaleMinQuantity: product.categorySlug === "daily-essentials" ? 6 : product.categorySlug === "seafood" ? 4 : 3,
      lowStockThreshold: 6,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
  });
}

function createInitialStore(): DemoStore {
  return {
    products: buildDemoProducts(),
    inventoryLogs: [],
    wholesaleApplications: [],
    users: [
      {
        id: "demo-admin",
        email: "admin@dunapanda.local",
        fullName: "Demo Admin",
        role: "admin",
        isDemo: true,
      },
      {
        id: "demo-customer",
        email: "customer@dunapanda.local",
        fullName: "Demo Customer",
        role: "customer",
        isDemo: true,
      },
      {
        id: "demo-wholesaler",
        email: "wholesale@dunapanda.local",
        fullName: "Demo Wholesaler",
        role: "wholesaler",
        isDemo: true,
      },
    ],
  };
}

function getStore() {
  if (!globalStore.__dunapandaDemoStore) {
    globalStore.__dunapandaDemoStore = createInitialStore();
  }

  return globalStore.__dunapandaDemoStore;
}

export function listDemoProducts() {
  return getStore().products;
}

export function getDemoProductBySlug(slug: string) {
  return getStore().products.find((product) => product.slug === slug) ?? null;
}

export function createDemoProduct(input: CatalogProductInput) {
  const store = getStore();
  const now = new Date().toISOString();
  const newProduct: CatalogProduct = {
    id: crypto.randomUUID(),
    slug: input.slug,
    categorySlug: input.categorySlug,
    subcategorySlug: input.subcategorySlug,
    sku: input.sku,
    badge: "new",
    priceLabel: `€${input.retailPrice.toFixed(2)}`,
    stockStatus: input.stockQuantity > 6 ? "in-stock" : input.stockQuantity > 0 ? "limited" : "seasonal",
    title: {
      zh: input.titleZh,
      en: input.titleEn,
      hu: input.titleHu,
    },
    subtitle: {
      zh: input.subtitleZh,
      en: input.subtitleEn,
      hu: input.subtitleHu,
    },
    description: {
      zh: input.descriptionZh,
      en: input.descriptionEn,
      hu: input.descriptionHu,
    },
    origin: {
      zh: input.originZh,
      en: input.originEn,
      hu: input.originHu,
    },
    brand: input.brand,
    brandSlug: input.brandSlug,
    size: {
      zh: input.sizeZh,
      en: input.sizeEn,
      hu: input.sizeHu,
    },
    tags: [
      { zh: "新品", en: "New", hu: "Uj" },
      { zh: "后台录入", en: "Admin entry", hu: "Admin felvitel" },
    ],
    filters: [
      { key: "subcategory", value: input.subcategorySlug, label: { zh: input.subtitleZh, en: input.subtitleEn, hu: input.subtitleHu } },
      { key: "brand", value: input.brandSlug, label: { zh: input.brand, en: input.brand, hu: input.brand } },
      { key: "origin", value: input.originEn.toLowerCase().replace(/\s+/g, "-"), label: { zh: input.originZh, en: input.originEn, hu: input.originHu } },
      { key: "dietary", value: "general", label: { zh: "门店商品", en: "Store item", hu: "Bolti termek" } },
    ],
    attributes: [
      {
        key: "format",
        label: { zh: "录入方式", en: "Entry source", hu: "Forras" },
        value: { zh: "后台新增", en: "Created in admin", hu: "Adminban letrehozva" },
      },
      {
        key: "occasion",
        label: { zh: "推荐场景", en: "Best for", hu: "Alkalom" },
        value: { zh: "新品展示", en: "New arrival display", hu: "Uj termek kiemeles" },
      },
    ],
    gallery: [
      {
        src: input.heroImage,
        alt: {
          zh: input.titleZh,
          en: input.titleEn,
          hu: input.titleHu,
        },
      },
    ],
    gradient: "from-amber-300/30 via-white to-lime-100",
    retailPrice: input.retailPrice,
    wholesalePrice: input.wholesalePrice,
    currency: "EUR",
    stockQuantity: input.stockQuantity,
    wholesaleMinQuantity: input.wholesaleMinQuantity,
    lowStockThreshold: 6,
    createdAt: now,
    updatedAt: now,
  };

  store.products.unshift(newProduct);
  store.inventoryLogs.unshift({
    id: crypto.randomUUID(),
    productId: newProduct.id,
    productTitle: newProduct.title.zh,
    change: input.stockQuantity,
    note: "Created from admin",
    createdAt: now,
  });

  return newProduct;
}

export function adjustDemoInventory(input: InventoryAdjustmentInput) {
  const store = getStore();
  const product = store.products.find((entry) => entry.id === input.productId);
  if (!product) {
    return null;
  }

  product.stockQuantity = Math.max(product.stockQuantity + input.change, 0);
  product.stockStatus = product.stockQuantity === 0 ? "seasonal" : product.stockQuantity <= product.lowStockThreshold ? "limited" : "in-stock";
  product.updatedAt = new Date().toISOString();

  const log: InventoryLog = {
    id: crypto.randomUUID(),
    productId: product.id,
    productTitle: product.title.zh,
    change: input.change,
    note: input.note,
    createdAt: product.updatedAt,
  };

  store.inventoryLogs.unshift(log);
  return log;
}

export function listDemoInventoryLogs() {
  return getStore().inventoryLogs;
}

export function listDemoUsers() {
  return getStore().users;
}

export function getDemoUserByEmail(email: string) {
  return getStore().users.find((user) => user.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export function upsertDemoUser(email: string, fullName: string, role: AppRole = "customer") {
  const store = getStore();
  const existing = getDemoUserByEmail(email);
  if (existing) {
    existing.fullName = fullName || existing.fullName;
    existing.role = role;
    return existing;
  }

  const user: SessionUser = {
    id: crypto.randomUUID(),
    email,
    fullName,
    role,
    isDemo: true,
  };
  store.users.push(user);
  return user;
}

export function submitDemoWholesaleApplication(input: Omit<WholesaleApplication, "id" | "status" | "createdAt" | "updatedAt">) {
  const store = getStore();
  const now = new Date().toISOString();
  const application: WholesaleApplication = {
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: now,
    updatedAt: now,
    ...input,
  };

  store.wholesaleApplications.unshift(application);
  return application;
}

export function listDemoWholesaleApplications() {
  return getStore().wholesaleApplications;
}

export function reviewDemoWholesaleApplication(id: string, status: "approved" | "rejected") {
  const store = getStore();
  const application = store.wholesaleApplications.find((entry) => entry.id === id);
  if (!application) {
    return null;
  }

  application.status = status;
  application.updatedAt = new Date().toISOString();

  if (status === "approved") {
    const existing = getDemoUserByEmail(application.userEmail);
    if (existing) {
      existing.role = "wholesaler";
    } else {
      upsertDemoUser(application.userEmail, application.contactName, "wholesaler");
    }
  }

  return application;
}

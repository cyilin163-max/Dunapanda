export type Locale = "zh" | "en" | "hu";

export type LocalizedText = Record<Locale, string>;

export type Category = {
  slug: string;
  icon: string;
  theme: string;
  heroImage: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  highlights: LocalizedText[];
  subcategories: {
    slug: string;
    title: LocalizedText;
  }[];
};

export type ProductImage = {
  src: string;
  alt: LocalizedText;
};

export type ProductAttribute = {
  key: "spiceLevel" | "temperature" | "dietary" | "format" | "occasion";
  label: LocalizedText;
  value: LocalizedText;
};

export type ProductFilterValue = {
  key: "subcategory" | "brand" | "origin" | "dietary";
  value: string;
  label: LocalizedText;
};

export type Product = {
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  sku: string;
  badge?: "new" | "popular" | "seasonal";
  priceLabel: string;
  stockStatus: "in-stock" | "limited" | "seasonal";
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  origin: LocalizedText;
  brand: string;
  brandSlug: string;
  size: LocalizedText;
  tags: LocalizedText[];
  filters: ProductFilterValue[];
  attributes: ProductAttribute[];
  gallery: ProductImage[];
  gradient: string;
};

export type Promotion = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  period: string;
  cta: LocalizedText;
};

export type FAQ = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type StoreDetail = {
  address: string;
  hours: string;
  phone: string;
  email: string;
  mapUrl: string;
};

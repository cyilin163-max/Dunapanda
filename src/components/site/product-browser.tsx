"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RotateCcw, ShoppingCart } from "lucide-react";
import { RemoteImage } from "@/components/site/remote-image";
import { useI18n } from "@/components/site/language-provider";
import { useAuth, useCart } from "@/components/providers/app-providers";
import { categories } from "@/data/site";
import { getVisiblePriceLabel } from "@/lib/pricing";
import type { CatalogProduct } from "@/types/commerce";

export function ProductBrowser({ products }: { products: CatalogProduct[] }) {
  const { dict, t } = useI18n();
  const { role } = useAuth();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const shopperRole = role === "wholesaler" ? "wholesaler" : "customer";

  const subcategoryOptions = useMemo(() => {
    if (selectedCategory === "all") {
      return categories.flatMap((category) => category.subcategories);
    }
    return categories.find((category) => category.slug === selectedCategory)?.subcategories ?? [];
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.categorySlug === selectedCategory;
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategorySlug === selectedSubcategory;
      const haystack = `${t(product.title)} ${t(product.subtitle)} ${product.brand} ${t(product.description)}`.toLowerCase();
      return matchesCategory && matchesSubcategory && haystack.includes(query.toLowerCase());
    });
  }, [products, query, selectedCategory, selectedSubcategory, t]);

  return (
    <div className="space-y-8">
      <div className="section-panel rounded-[34px] p-5 md:p-6">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{dict.labels.catalogSearch}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--color-gold)]">
              {filteredProducts.length} {dict.labels.results}
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedSubcategory("all");
                setQuery("");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/86 px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--color-forest)] hover:text-[var(--color-forest)]"
            >
              <RotateCcw size={14} />
              清空筛选
            </button>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.35fr_0.8fr_0.8fr]">
          <label className="space-y-2">
            <span className="px-2 text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">搜索</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={dict.actions.searchPlaceholder}
              className="w-full rounded-full border border-[var(--line)] bg-white/92 px-5 py-3.5 outline-none transition focus:border-[var(--color-forest)]"
            />
          </label>
          <label className="space-y-2">
            <span className="px-2 text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">大类</span>
            <select
              value={selectedCategory}
              onChange={(event) => {
                setSelectedCategory(event.target.value);
                setSelectedSubcategory("all");
              }}
              className="w-full rounded-full border border-[var(--line)] bg-white/92 px-5 py-3.5 outline-none"
            >
              <option value="all">{dict.labels.allProducts}</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {t(category.title)}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="px-2 text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">子分类</span>
            <select
              value={selectedSubcategory}
              onChange={(event) => setSelectedSubcategory(event.target.value)}
              className="w-full rounded-full border border-[var(--line)] bg-white/92 px-5 py-3.5 outline-none"
            >
              <option value="all">{dict.labels.allSubcategories}</option>
              {subcategoryOptions.map((subcategory) => (
                <option key={subcategory.slug} value={subcategory.slug}>
                  {t(subcategory.title)}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {filteredProducts.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.slug}
              className="glass-card overflow-hidden rounded-[32px] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(23,33,27,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[26px]">
                <RemoteImage
                  src={product.gallery[0]?.src ?? ""}
                  alt={t(product.gallery[0]?.alt ?? product.title)}
                  className="media-cover"
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--color-forest)]">
                  {product.brand}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="rounded-full bg-black/30 px-3 py-1 text-xs backdrop-blur-sm">{product.sku}</span>
                  <span className="rounded-full bg-black/30 px-3 py-1 text-xs backdrop-blur-sm">
                    {role === "wholesaler" ? "批发价" : "零售价"}
                  </span>
                </div>
              </div>

              <div className="space-y-3 px-2 pb-2 pt-5">
                <div className="flex flex-wrap gap-2">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span key={tag.zh} className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs text-[var(--color-forest)]">
                      {t(tag)}
                    </span>
                  ))}
                </div>
                <h3 className="display-title text-3xl">{t(product.title)}</h3>
                <p className="text-sm text-[var(--muted)]">{t(product.subtitle)}</p>
                <p className="line-clamp-2 text-sm leading-7 text-[var(--muted)]">{t(product.description)}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-2xl text-[var(--color-ink)]">{getVisiblePriceLabel(product, role)}</span>
                  {role === "wholesaler" ? (
                    <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1 text-xs text-[var(--color-gold)]">
                      起订 {product.wholesaleMinQuantity}
                    </span>
                  ) : null}
                </div>
                <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                  <span>{t(product.origin)}</span>
                  <span>{t(product.size)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => addItem(product, shopperRole, role === "wholesaler" ? product.wholesaleMinQuantity : 1)}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cyan)] px-4 py-2 text-sm text-white"
                  >
                    <ShoppingCart size={15} />
                    加入购物车
                  </button>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm transition hover:border-[var(--color-forest)] hover:text-[var(--color-forest)]"
                  >
                    {dict.actions.readMore}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-[28px] p-8 text-center">
          <p className="text-xl text-[var(--color-ink)]">{dict.labels.noResults}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{dict.labels.suggestions}</p>
        </div>
      )}
    </div>
  );
}

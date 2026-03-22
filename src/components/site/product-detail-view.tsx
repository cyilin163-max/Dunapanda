"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { categories } from "@/data/site";
import { useI18n } from "@/components/site/language-provider";
import { RemoteImage } from "@/components/site/remote-image";
import { useAuth, useCart } from "@/components/providers/app-providers";
import { getVisiblePriceLabel } from "@/lib/pricing";
import type { CatalogProduct } from "@/types/commerce";

export function ProductDetailView({ product, relatedProducts }: { product: CatalogProduct; relatedProducts: CatalogProduct[] }) {
  const { dict, t } = useI18n();
  const { role } = useAuth();
  const { addItem } = useCart();
  const category = categories.find((entry) => entry.slug === product.categorySlug);
  const shopperRole = role === "wholesaler" ? "wholesaler" : "customer";

  return (
    <div className="page-section">
      <div className="container-shell space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="glass-card rounded-[36px] p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                <RemoteImage
                  src={product.gallery[0]?.src ?? ""}
                  alt={t(product.gallery[0]?.alt ?? product.title)}
                  className="media-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-sm tracking-[0.3em] text-[var(--color-forest)]">
                  {product.brand}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.gallery.slice(1, 3).map((image) => (
                <div key={image.src} className="glass-card rounded-[28px] p-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-[22px]">
                    <RemoteImage src={image.src} alt={t(image.alt)} className="media-cover" sizes="(min-width: 1024px) 20vw, 50vw" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="section-panel rounded-[34px] p-7">
              <p className="eyebrow">{product.sku}</p>
              <h1 className="display-title mt-4 text-balance text-5xl md:text-6xl">{t(product.title)}</h1>
              <p className="mt-3 text-lg text-[var(--color-clay)]">{t(product.subtitle)}</p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--muted)]">{t(product.description)}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[var(--gold-soft)] px-4 py-2 text-sm text-[var(--color-gold)]">{getVisiblePriceLabel(product, role)}</span>
                {role === "wholesaler" ? (
                  <span className="rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm text-[var(--color-forest)]">
                    批发起订 {product.wholesaleMinQuantity}
                  </span>
                ) : null}
                <span className="rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm text-[var(--color-forest)]">
                  {product.stockStatus === "in-stock"
                    ? dict.labels.inStock
                    : product.stockStatus === "limited"
                      ? dict.labels.limited
                      : dict.labels.seasonal}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => addItem(product, shopperRole, role === "wholesaler" ? product.wholesaleMinQuantity : 1)}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white"
                >
                  <ShoppingCart size={16} />
                  加入购物车
                </button>
                <Link href="/cart" className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">
                  查看购物车
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[24px] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{dict.labels.brand}</p>
                <p className="mt-2 text-lg">{product.brand}</p>
              </div>
              <div className="glass-card rounded-[24px] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{dict.labels.size}</p>
                <p className="mt-2 text-lg">{t(product.size)}</p>
              </div>
              <div className="glass-card rounded-[24px] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{dict.labels.origin}</p>
                <p className="mt-2 text-lg">{t(product.origin)}</p>
              </div>
              <div className="glass-card rounded-[24px] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{dict.labels.category}</p>
                <p className="mt-2 text-lg">{category ? t(category.title) : "-"}</p>
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-5">
              <div className="mt-1 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag.zh} className="rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm text-[var(--color-forest)]">
                    {t(tag)}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                {product.attributes.map((attribute) => (
                  <div key={`${attribute.key}-${attribute.value.zh}`} className="flex items-center justify-between rounded-[18px] bg-white px-4 py-3">
                    <span className="text-sm text-[var(--muted)]">{t(attribute.label)}</span>
                    <span className="text-sm text-[var(--color-ink)]">{t(attribute.value)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white">
                  {dict.actions.contactStore}
                </Link>
                <Link href={`/categories/${product.categorySlug}`} className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">
                  {dict.actions.exploreCategories}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length ? (
          <section className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">{dict.labels.storePicks}</p>
                <h2 className="display-title mt-3 text-4xl">{category ? t(category.title) : dict.actions.browseCatalog}</h2>
              </div>
              <Link href={`/categories/${product.categorySlug}`} className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">
                {dict.actions.exploreCategories}
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedProducts.map((related) => (
                <Link key={related.slug} href={`/products/${related.slug}`} className="glass-card overflow-hidden rounded-[32px] p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                    <RemoteImage
                      src={related.gallery[0]?.src ?? ""}
                      alt={t(related.gallery[0]?.alt ?? related.title)}
                      className="media-cover"
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                  </div>
                  <div className="space-y-3 px-2 pb-2 pt-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-clay)]">{related.brand}</p>
                    <h3 className="display-title text-3xl">{t(related.title)}</h3>
                    <p className="line-clamp-2 text-sm leading-7 text-[var(--muted)]">{t(related.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

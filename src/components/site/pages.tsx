"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProductBrowser } from "@/components/site/product-browser";
import { ProductDetailView } from "@/components/site/product-detail-view";
import { RemoteImage } from "@/components/site/remote-image";
import { SectionHeading } from "@/components/site/section-heading";
import { pageCopy } from "@/data/page-copy";
import { categories, faqs, promotions, storeDetail } from "@/data/site";
import { useI18n } from "@/components/site/language-provider";
import type { Category } from "@/types/site";
import type { CatalogProduct } from "@/types/commerce";

function IntroOverlay() {
  const [entered, setEntered] = useState(false);

  if (entered) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/intro-opening.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <button
          type="button"
          onClick={() => setEntered(true)}
          className="rounded-full border border-white/35 bg-white/14 px-8 py-4 text-base text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:bg-white/20"
        >
          Enter Site
        </button>
      </div>
    </div>
  );
}
export function HomePage({ featuredProducts }: { featuredProducts: CatalogProduct[] }) {
  const { dict, t } = useI18n();

  return (
    <>
      <IntroOverlay />
      <section className="page-section pt-8 md:pt-12">
        <div className="container-shell">
          <div className="editorial-frame min-h-[680px]">
            <RemoteImage
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
              alt="Panda Supermarket"
              className="media-cover"
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,17,15,0.08),rgba(12,17,15,0.62))]" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-10">
              <h1 className="display-title max-w-4xl text-balance text-6xl leading-[0.92] md:text-[6.6rem]">
                {dict.brand}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/86 md:text-[1.08rem]">
                {t(pageCopy.home.heroBody)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="rounded-full border border-white/35 bg-black/18 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:bg-black/24"
                >
                  {dict.actions.browseCatalog}
                </Link>
                <Link
                  href="/categories"
                  className="rounded-full border border-white/35 bg-black/18 px-6 py-3 text-sm text-white backdrop-blur-md"
                >
                  {dict.actions.exploreCategories}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <SectionHeading
            title={t(pageCopy.home.structureTitle)}
            description={t(pageCopy.home.structureDescription)}
            action={
              <Link href="/categories" className="inline-flex items-center gap-2 text-sm text-[var(--color-forest)]">
                {dict.actions.exploreCategories}
                <ArrowRight size={16} />
              </Link>
            }
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden rounded-[34px] border border-white/60 bg-white/70 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <RemoteImage
                    src={category.heroImage}
                    alt={t(category.title)}
                    className="media-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.theme} opacity-30`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,16,0.08),rgba(14,18,16,0.44))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="display-title text-4xl">{t(category.title)}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/82">{t(category.shortDescription)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container-shell">
          <SectionHeading
            title="本周火锅、春季上新、节庆礼盒，都可以在这里集中看"
            description="适合放门店活动、周末特价、节庆主题和当季推荐，让用户一进站就看到重点。"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {promotions.map((promotion) => (
              <article key={promotion.slug} className="section-panel rounded-[34px] p-6 md:p-7">
                <h2 className="display-title text-5xl">{t(promotion.title)}</h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--muted)]">{t(promotion.description)}</p>
                <Link
                  href="/promotions"
                  className="mt-8 inline-flex rounded-full bg-[var(--color-cyan)] px-6 py-3 text-sm text-white transition hover:bg-[var(--color-cyan-deep)]"
                >
                  {t(promotion.cta)}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <SectionHeading
            title="今天想吃什么，就从这些开始"
            description="门店热卖、聚会囤货、下午茶饮和火锅必备都已经整理成可直接浏览的商品卡片。"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {featuredProducts.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="glass-card overflow-hidden rounded-[36px] p-3">
                <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                    <RemoteImage
                      src={product.gallery[0]?.src ?? ""}
                      alt={t(product.gallery[0]?.alt ?? product.title)}
                      className="media-cover"
                      sizes="(min-width: 1024px) 35vw, 100vw"
                    />
                </div>
                  <div className="flex flex-col justify-between p-2">
                    <div>
                      <h3 className="display-title text-4xl">{t(product.title)}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t(product.description)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  const { t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.about.eyebrow)} title={t(pageCopy.about.title)} description={t(pageCopy.about.description)} />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="editorial-frame min-h-[540px]">
            <RemoteImage
              src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1600&q=80"
              alt="Asian grocery store"
              className="media-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 text-white">
              <h2 className="display-title text-5xl">{t(pageCopy.about.storyTitle)}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/85">{t(pageCopy.about.storyBodyA)}</p>
              <p className="mt-3 max-w-2xl text-sm leading-8 text-white/75">{t(pageCopy.about.storyBodyB)}</p>
            </div>
          </div>
          <div className="grid gap-4">
            {categories.slice(0, 2).map((category) => (
              <div key={category.slug} className="glass-card rounded-[30px] p-5">
                <p className="eyebrow">{t(category.title)}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{t(category.longDescription)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoriesPage() {
  const { t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.categories.eyebrow)} title={t(pageCopy.categories.title)} description={t(pageCopy.categories.description)} />
        <div className="grid gap-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="group glass-card overflow-hidden rounded-[36px] p-3 transition hover:-translate-y-1">
              <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[28px]">
                  <RemoteImage
                    src={category.heroImage}
                    alt={t(category.title)}
                    className="media-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${category.theme} opacity-24`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,14,0.04),rgba(12,18,14,0.18))]" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-sm text-[var(--color-forest)]">
                    {category.icon}
                  </div>
                </div>
                <div className="flex flex-col justify-between p-3 md:p-5">
                  <div>
                    <h2 className="display-title text-5xl">{t(category.title)}</h2>
                    <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--muted)]">{t(category.longDescription)}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.subcategories.map((subcategory) => (
                      <span key={subcategory.slug} className="rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm text-[var(--color-forest)]">
                        {t(subcategory.title)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoryDetailPage({ category, products }: { category: Category; products: CatalogProduct[] }) {
  const { dict, t } = useI18n();
  const categoryProducts = products.filter((product) => product.categorySlug === category.slug);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const visibleProducts =
    selectedSubcategory === "all"
      ? categoryProducts
      : categoryProducts.filter((product) => product.subcategorySlug === selectedSubcategory);

  return (
    <section className="page-section">
      <div className="container-shell space-y-8">
        <div className="editorial-frame min-h-[420px]">
          <RemoteImage src={category.heroImage} alt={t(category.title)} className="media-cover" sizes="100vw" />
          <div className={`absolute inset-0 bg-gradient-to-tr ${category.theme} opacity-24`} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,13,0.08),rgba(10,16,13,0.5))]" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-8 text-white">
            <p className="eyebrow text-white/70">{t(pageCopy.categories.eyebrow)}</p>
            <h1 className="display-title mt-4 text-6xl">{t(category.title)}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84">{t(category.longDescription)}</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-[var(--shadow-soft)]">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedSubcategory("all")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedSubcategory === "all" ? "bg-[var(--color-forest)] text-white" : "bg-[var(--gold-soft)] text-[var(--color-gold)]"
              }`}
            >
              鍏ㄩ儴
            </button>
            {category.subcategories.map((subcategory) => (
              <button
                key={subcategory.slug}
                type="button"
                onClick={() => setSelectedSubcategory(subcategory.slug)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedSubcategory === subcategory.slug
                    ? "bg-[var(--color-forest)] text-white"
                    : "bg-[var(--gold-soft)] text-[var(--color-gold)]"
                }`}
              >
                {t(subcategory.title)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="section-panel rounded-[34px] p-6">
            <h2 className="display-title text-4xl">{dict.labels.highlights}</h2>
            <div className="mt-5 space-y-4">
              {category.highlights.map((highlight) => (
                <div key={highlight.zh} className="rounded-[22px] bg-white/88 p-4 text-sm leading-7 text-[var(--muted)]">
                  {t(highlight)}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleProducts.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="glass-card overflow-hidden rounded-[32px] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <RemoteImage
                    src={product.gallery[0]?.src ?? ""}
                    alt={t(product.gallery[0]?.alt ?? product.title)}
                    className="media-cover"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--color-forest)]">
                    {product.brand}
                  </div>
                </div>
                <div className="space-y-3 px-2 pb-2 pt-5">
                  <h3 className="display-title text-3xl">{t(product.title)}</h3>
                  <p className="text-sm leading-7 text-[var(--muted)]">{t(product.description)}</p>
                  <div className="flex justify-end text-sm">
                    <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[var(--color-forest)]">{t(product.origin)}</span>
                  </div>
                </div>
              </Link>
            ))}
            {!visibleProducts.length ? (
              <div className="glass-card rounded-[28px] p-8 text-center md:col-span-2">
                <p className="text-xl text-[var(--color-ink)]">这个子分类下暂时还没有更多商品</p>
                <p className="mt-2 text-sm text-[var(--muted)]">可以先切回“全部”，我后面再继续把这个类目的案例补满。</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsPage({ products }: { products: CatalogProduct[] }) {
  const { t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.products.eyebrow)} title={t(pageCopy.products.title)} description={t(pageCopy.products.description)} />
        <ProductBrowser products={products} />
      </div>
    </section>
  );
}

export function PromotionsPage() {
  const { t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.promotions.eyebrow)} title={t(pageCopy.promotions.title)} description={t(pageCopy.promotions.description)} />
        <div className="grid gap-5 md:grid-cols-2">
          {promotions.map((promotion) => (
            <article key={promotion.slug} className="section-panel rounded-[32px] p-7">
              <p className="eyebrow">{promotion.period}</p>
              <h2 className="display-title mt-5 text-5xl">{t(promotion.title)}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{t(promotion.description)}</p>
              <Link href="/products" className="mt-6 inline-flex rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white">
                {t(promotion.cta)}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StorePage() {
  const { dict, t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.store.eyebrow)} title={t(pageCopy.store.title)} description={t(pageCopy.store.description)} />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-panel rounded-[32px] p-7">
            <div className="space-y-5">
              <div>
                <p className="eyebrow">{dict.labels.address}</p>
                <p className="mt-2 text-lg">{storeDetail.address}</p>
              </div>
              <div>
                <p className="eyebrow">{dict.labels.hours}</p>
                <p className="mt-2 text-lg">{storeDetail.hours}</p>
              </div>
              <div>
                <p className="eyebrow">{dict.labels.contact}</p>
                <p className="mt-2 text-lg">{storeDetail.phone}</p>
                <p className="text-lg">{storeDetail.email}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={storeDetail.mapUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white">
                {dict.actions.getDirections}
              </a>
              <Link href="/contact" className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">
                {dict.actions.contactStore}
              </Link>
            </div>
          </div>
          <div className="editorial-frame min-h-[420px]">
            <RemoteImage
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80"
              alt="Budapest Store"
              className="media-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 p-8 text-white">
              <p className="eyebrow text-white/70">{t(pageCopy.store.mapTitle)}</p>
              <h3 className="display-title mt-4 text-5xl">Budapest Store</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/82">{t(pageCopy.store.mapBody)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  const { dict, t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.contact.eyebrow)} title={t(pageCopy.contact.title)} description={t(pageCopy.contact.description)} />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-panel rounded-[32px] p-7">
            <div className="space-y-4 text-sm text-[var(--muted)]">
              <p>
                {dict.labels.contact}: {storeDetail.phone}
              </p>
              <p>
                Email: {storeDetail.email}
              </p>
              <p>
                {dict.labels.address}: {storeDetail.address}
              </p>
              <p>
                {dict.labels.hours}: {storeDetail.hours}
              </p>
            </div>
          </div>
          <div className="section-panel rounded-[32px] p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder={dict.labels.name} />
              <input className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder={dict.labels.email} />
              <input className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 md:col-span-2" placeholder={dict.labels.subject} />
              <textarea className="min-h-40 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 md:col-span-2" placeholder={dict.labels.message} />
              <button className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white md:col-span-2">
                {dict.actions.sendInquiry}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQPage() {
  const { t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.faq.eyebrow)} title={t(pageCopy.faq.title)} description={t(pageCopy.faq.description)} />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question.zh} className="glass-card rounded-[28px] p-6">
              <h2 className="text-xl">{t(faq.question)}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t(faq.answer)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SearchPage({ products }: { products: CatalogProduct[] }) {
  const { t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <SectionHeading eyebrow={t(pageCopy.search.eyebrow)} title={t(pageCopy.search.title)} description={t(pageCopy.search.description)} />
        <ProductBrowser products={products} />
      </div>
    </section>
  );
}

export function ProductPage({ product, relatedProducts }: { product: CatalogProduct; relatedProducts: CatalogProduct[] }) {
  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}

export function NotFoundPage() {
  const { t } = useI18n();
  return (
    <section className="page-section">
      <div className="container-shell">
        <div className="glass-card rounded-[40px] p-10 text-center">
          <p className="eyebrow">404</p>
          <h1 className="display-title mt-4 text-6xl">{t(pageCopy.notFound.title)}</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">{t(pageCopy.notFound.body)}</p>
          <Link href="/" className="mt-6 inline-flex rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white">
            {t(pageCopy.notFound.cta)}
          </Link>
        </div>
      </div>
    </section>
  );
}



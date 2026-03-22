import { ProductCreateForm } from "@/components/admin/product-create-form";
import { getCatalogProducts } from "@/lib/commerce/repository";

export default async function Page() {
  const products = await getCatalogProducts();

  return (
    <div className="grid gap-5">
      <div className="section-panel rounded-[32px] p-6">
        <p className="eyebrow">Product Admin</p>
        <h1 className="display-title mt-4 text-5xl">商品录入</h1>
        <p className="mt-3 text-sm leading-8 text-[var(--muted)]">新增商品时把三语名称、双价格、库存和图片一次录进去，前台就能直接消费。</p>
      </div>
      <ProductCreateForm />
      <div className="glass-card rounded-[32px] p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="display-title text-4xl">现有商品</h2>
          <span className="rounded-full bg-white/80 px-4 py-2 text-sm text-[var(--color-gold)]">{products.length} items</span>
        </div>
        <div className="mt-5 grid gap-3">
          {products.slice(0, 12).map((product) => (
            <div key={product.id} className="rounded-[24px] bg-white/82 px-4 py-4 text-sm text-[var(--muted)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-lg text-[var(--color-ink)]">{product.title.zh}</p>
                  <p className="mt-1">{product.sku} / {product.brand}</p>
                </div>
                <div className="text-right">
                  <p>零售价 €{product.retailPrice.toFixed(2)}</p>
                  <p>批发价 €{product.wholesalePrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

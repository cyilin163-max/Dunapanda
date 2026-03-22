import { InventoryAdjustForm } from "@/components/admin/inventory-adjust-form";
import { getCatalogProducts, getInventoryLogs } from "@/lib/commerce/repository";

export default async function Page() {
  const [products, logs] = await Promise.all([getCatalogProducts(), getInventoryLogs()]);

  return (
    <div className="grid gap-5">
      <div className="section-panel rounded-[32px] p-6">
        <p className="eyebrow">Inventory</p>
        <h1 className="display-title mt-4 text-5xl">库存管理</h1>
      </div>
      <div className="grid gap-5">
        {products.slice(0, 8).map((product) => (
          <article key={product.id} className="glass-card rounded-[32px] p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="display-title text-3xl">{product.title.zh}</h2>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  当前库存 {product.stockQuantity} / 状态 {product.stockStatus}
                </p>
              </div>
            </div>
            <InventoryAdjustForm productId={product.id} />
          </article>
        ))}
      </div>
      <div className="glass-card rounded-[32px] p-6">
        <h2 className="display-title text-4xl">最近库存记录</h2>
        <div className="mt-5 grid gap-3">
          {logs.length ? logs.map((log) => (
            <div key={log.id} className="rounded-[20px] bg-white/82 px-4 py-3 text-sm text-[var(--muted)]">
              <span className="text-[var(--color-ink)]">{log.productTitle}</span>
              <span className="mx-2">{log.change > 0 ? `+${log.change}` : log.change}</span>
              <span>{log.note}</span>
            </div>
          )) : <p className="text-sm text-[var(--muted)]">还没有库存操作记录。</p>}
        </div>
      </div>
    </div>
  );
}

import { getCatalogProducts, getInventoryLogs, getWholesaleApplications } from "@/lib/commerce/repository";

export default async function Page() {
  const [products, inventoryLogs, applications] = await Promise.all([
    getCatalogProducts(),
    getInventoryLogs(),
    getWholesaleApplications(),
  ]);

  return (
    <div className="grid gap-5">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="section-panel rounded-[28px] p-5">
          <p className="eyebrow">Catalog</p>
          <h2 className="display-title mt-3 text-4xl">{products.length}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">当前可管理商品数</p>
        </div>
        <div className="section-panel rounded-[28px] p-5">
          <p className="eyebrow">Inventory</p>
          <h2 className="display-title mt-3 text-4xl">{inventoryLogs.length}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">最近库存动作记录</p>
        </div>
        <div className="section-panel rounded-[28px] p-5">
          <p className="eyebrow">Wholesale</p>
          <h2 className="display-title mt-3 text-4xl">{applications.filter((item) => item.status === "pending").length}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">待审核批发申请</p>
        </div>
      </div>
      <div className="glass-card rounded-[32px] p-6">
        <p className="eyebrow">Status</p>
        <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
          这一版后台已经把商品录入、库存调整和批发审核骨架都接进来了。只要补上 Supabase 环境变量并运行 SQL，
          这些页面就会从 demo 模式切到真实数据。
        </p>
      </div>
    </div>
  );
}

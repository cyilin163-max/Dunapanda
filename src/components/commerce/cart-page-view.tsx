"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/providers/app-providers";
import type { SessionUser } from "@/types/auth";
import type { CatalogProduct } from "@/types/commerce";

export function CartPageView({ products, user }: { products: CatalogProduct[]; user: SessionUser | null }) {
  const { items, clearCart, removeItem, updateQuantity } = useCart();

  const rows = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          if (!product) return null;
          return {
            item,
            product,
            subtotal: item.quantity * item.unitPrice,
          };
        })
        .filter((row): row is { item: typeof items[number]; product: CatalogProduct; subtotal: number } => Boolean(row)),
    [items, products],
  );

  const total = rows.reduce((sum, row) => sum + (row?.subtotal ?? 0), 0);

  return (
    <section className="page-section">
      <div className="container-shell grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="section-panel rounded-[32px] p-7">
            <p className="eyebrow">Cart</p>
            <h1 className="display-title mt-4 text-5xl">购物车</h1>
          </div>
          {rows.length ? rows.map((row) => (
            <article key={`${row?.item.productId}-${row?.item.pricingRole}`} className="glass-card rounded-[28px] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="display-title text-3xl">{row?.product.title.zh}</h2>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {row?.item.pricingRole === "wholesaler" ? "批发价" : "零售价"} / €{row?.item.unitPrice.toFixed(2)}
                  </p>
                </div>
                <button onClick={() => removeItem(row!.item.productId)} className="text-sm text-[var(--muted)]">
                  删除
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <input
                  type="number"
                  min={1}
                  value={row?.item.quantity}
                  onChange={(event) => updateQuantity(row!.item.productId, Number(event.target.value))}
                  className="w-28 rounded-2xl border border-[var(--line)] bg-white px-4 py-3"
                />
                <span className="text-lg">€{row?.subtotal.toFixed(2)}</span>
              </div>
            </article>
          )) : <div className="glass-card rounded-[28px] p-8 text-sm text-[var(--muted)]">购物车还是空的，去商品页先加点东西吧。</div>}
        </div>
        <div className="section-panel rounded-[32px] p-7">
          <h2 className="display-title text-4xl">订单摘要</h2>
          <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
            <p>当前登录：{user ? user.email : "未登录"}</p>
            <p>商品数量：{rows.length}</p>
            <p>合计：€{total.toFixed(2)}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={clearCart} className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">
              清空购物车
            </button>
            {user ? (
              <Link href="/contact" className="rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white">
                联系门店下单
              </Link>
            ) : (
              <Link href="/login" className="rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white">
                登录后继续
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

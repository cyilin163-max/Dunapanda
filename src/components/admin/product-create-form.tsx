"use client";

import { useActionState } from "react";
import { createProductAction } from "@/app/actions/admin";
import { categories } from "@/data/site";
import { useI18n } from "@/components/site/language-provider";

export function ProductCreateForm() {
  const { t } = useI18n();
  const [state, action, pending] = useActionState(createProductAction, undefined);

  return (
    <form action={action} className="glass-card rounded-[32px] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="slug" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="slug" />
        <input name="sku" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="SKU" />
        <select name="categorySlug" className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3">
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {t(category.title)}
            </option>
          ))}
        </select>
        <input name="subcategorySlug" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="子分类 slug" />
        <input name="brand" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="品牌" />
        <input name="brandSlug" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="品牌 slug" />
        <input name="heroImage" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 md:col-span-2" placeholder="商品主图 URL" />
        <input name="titleZh" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="中文名" />
        <input name="titleEn" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="英文名" />
        <input name="titleHu" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="匈牙利语名" />
        <input name="subtitleZh" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="中文副标题" />
        <input name="subtitleEn" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="英文副标题" />
        <input name="subtitleHu" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="匈语副标题" />
        <textarea name="descriptionZh" required className="min-h-28 rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="中文描述" />
        <textarea name="descriptionEn" required className="min-h-28 rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="英文描述" />
        <textarea name="descriptionHu" required className="min-h-28 rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="匈语描述" />
        <input name="originZh" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="中文产地" />
        <input name="originEn" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="英文产地" />
        <input name="originHu" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="匈语产地" />
        <input name="sizeZh" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="中文规格" />
        <input name="sizeEn" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="英文规格" />
        <input name="sizeHu" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="匈语规格" />
        <input name="retailPrice" type="number" step="0.01" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="零售价" />
        <input name="wholesalePrice" type="number" step="0.01" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="批发价" />
        <input name="stockQuantity" type="number" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="库存数" />
        <input name="wholesaleMinQuantity" type="number" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="批发起订量" />
      </div>
      {state?.error ? <p className="mt-4 text-sm text-red-500">{state.error}</p> : null}
      {state?.success ? <p className="mt-4 text-sm text-[var(--color-forest)]">{state.success}</p> : null}
      <button disabled={pending} className="mt-6 rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white">
        {pending ? "保存中..." : "保存商品"}
      </button>
    </form>
  );
}

"use client";

import { useActionState } from "react";
import { updateInventoryAction } from "@/app/actions/admin";

export function InventoryAdjustForm({ productId }: { productId: string }) {
  const [state, action, pending] = useActionState(updateInventoryAction, undefined);

  return (
    <form action={action} className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
      <input type="hidden" name="productId" value={productId} />
      <input name="change" type="number" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="例如 +6 / -2" />
      <input name="note" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="备注，例如：今日补货" />
      <button disabled={pending} className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white">
        调整
      </button>
      {state?.error ? <p className="text-sm text-red-500 sm:col-span-3">{state.error}</p> : null}
      {state?.success ? <p className="text-sm text-[var(--color-forest)] sm:col-span-3">{state.success}</p> : null}
    </form>
  );
}

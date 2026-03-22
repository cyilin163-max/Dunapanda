"use client";

import { useActionState } from "react";
import { applyWholesaleAction } from "@/app/actions/wholesale";

export function WholesaleApplicationForm() {
  const [state, action, pending] = useActionState(applyWholesaleAction, undefined);

  return (
    <form action={action} className="glass-card rounded-[32px] p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="contactName" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="联系人" />
        <input name="companyName" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="公司名称" />
        <input name="taxId" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 md:col-span-2" placeholder="税号 / 营业执照号" />
        <textarea name="note" required className="min-h-32 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 md:col-span-2" placeholder="简单说明你的采购需求、频率和主要品类" />
      </div>
      {state?.error ? <p className="mt-4 text-sm text-red-500">{state.error}</p> : null}
      {state?.success ? <p className="mt-4 text-sm text-[var(--color-forest)]">{state.success}</p> : null}
      <button disabled={pending} className="mt-6 rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white">
        {pending ? "提交中..." : "提交批发申请"}
      </button>
    </form>
  );
}

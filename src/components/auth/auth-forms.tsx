"use client";

import { useActionState } from "react";
import { signInAction, signUpAction } from "@/app/actions/auth";

export function AuthForms({ demoMode }: { demoMode: boolean }) {
  const [signInState, signInFormAction, signInPending] = useActionState(signInAction, undefined);
  const [signUpState, signUpFormAction, signUpPending] = useActionState(signUpAction, undefined);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <form action={signInFormAction} className="section-panel rounded-[32px] p-7">
        <p className="eyebrow">账户登录</p>
        <h2 className="display-title mt-4 text-4xl">登录现有账号</h2>
        <div className="mt-6 grid gap-4">
          <input name="email" type="email" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="邮箱" />
          <input name="password" type="password" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="密码" />
          {demoMode ? (
            <>
              <input name="fullName" className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="演示姓名（可选）" />
              <select name="role" defaultValue="customer" className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3">
                <option value="customer">普通用户</option>
                <option value="wholesaler">批发商</option>
                <option value="admin">管理员</option>
              </select>
            </>
          ) : null}
          {signInState?.error ? <p className="text-sm text-red-500">{signInState.error}</p> : null}
          <button disabled={signInPending} className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white">
            {signInPending ? "登录中..." : "登录"}
          </button>
        </div>
      </form>

      <form action={signUpFormAction} className="glass-card rounded-[32px] p-7">
        <p className="eyebrow">新用户注册</p>
        <h2 className="display-title mt-4 text-4xl">创建普通用户账号</h2>
        <div className="mt-6 grid gap-4">
          <input name="fullName" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="姓名" />
          <input name="email" type="email" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="邮箱" />
          <input name="password" type="password" required className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3" placeholder="密码" />
          {signUpState?.error ? <p className="text-sm text-red-500">{signUpState.error}</p> : null}
          {signUpState?.success ? <p className="text-sm text-[var(--color-forest)]">{signUpState.success}</p> : null}
          <button disabled={signUpPending} className="rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white">
            {signUpPending ? "提交中..." : "注册"}
          </button>
        </div>
      </form>
    </div>
  );
}

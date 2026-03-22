import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { signOutAction } from "@/app/actions/auth";

export default async function Page() {
  const user = await requireUser();

  return (
    <section className="page-section">
      <div className="container-shell grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="section-panel rounded-[32px] p-7">
          <p className="eyebrow">My Account</p>
          <h1 className="display-title mt-4 text-5xl">欢迎回来，{user.fullName}</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="glass-card rounded-[24px] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">邮箱</p>
              <p className="mt-3 text-lg">{user.email}</p>
            </div>
            <div className="glass-card rounded-[24px] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">角色</p>
              <p className="mt-3 text-lg capitalize">{user.role}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cart" className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm text-white">
              查看购物车
            </Link>
            {user.role === "admin" ? (
              <Link href="/admin" className="rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white">
                进入后台
              </Link>
            ) : null}
            {user.role !== "wholesaler" ? (
              <Link href="/wholesale" className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">
                申请批发商权限
              </Link>
            ) : null}
            <form action={signOutAction}>
              <button className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">退出登录</button>
            </form>
          </div>
        </div>
        <div className="glass-card rounded-[32px] p-7">
          <p className="eyebrow">Role Notes</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>普通用户：浏览零售价、加入购物车、提交联系需求。</p>
            <p>批发商：登录后显示批发价，并可看到起订量信息。</p>
            <p>管理员：进入 `/admin` 做商品录入、库存调整和批发审核。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { signOutAction } from "@/app/actions/auth";
import type { SessionUser } from "@/types/auth";

const adminLinks = [
  { href: "/admin", label: "后台概览" },
  { href: "/admin/products", label: "商品录入" },
  { href: "/admin/inventory", label: "库存管理" },
  { href: "/admin/wholesale-applications", label: "批发商审核" },
];

export function AdminShell({ user, children }: { user: SessionUser; children: React.ReactNode }) {
  return (
    <section className="page-section">
      <div className="container-shell grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="section-panel rounded-[32px] p-5">
          <p className="eyebrow">Admin</p>
          <h1 className="display-title mt-4 text-4xl">后台管理</h1>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            当前账号：{user.fullName} / {user.email}
          </p>
          <nav className="mt-6 grid gap-2">
            {adminLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl bg-white/80 px-4 py-3 text-sm text-[var(--color-ink)]">
                {link.label}
              </Link>
            ))}
          </nav>
          <form action={signOutAction} className="mt-6">
            <button className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">退出登录</button>
          </form>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}

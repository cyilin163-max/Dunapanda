"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu } from "lucide-react";
import { useMemo, useState } from "react";
import { useI18n } from "@/components/site/language-provider";
import { useAuth, useCart } from "@/components/providers/app-providers";

function DunapandaLogo() {
  return (
    <div className="min-w-0">
      <div className="logo-wordmark whitespace-nowrap text-[2.65rem] leading-none">Dunapanda</div>
      <div className="mt-1 whitespace-nowrap pl-1 text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">Budapest Asian Market</div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { dict } = useI18n();
  const { user, role } = useAuth();
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: "/", label: dict.nav.home },
      { href: "/categories", label: dict.nav.categories },
      { href: "/products", label: dict.actions.browseCatalog },
      { href: "/promotions", label: dict.nav.promotions },
      { href: "/about", label: dict.nav.about },
      { href: "/store", label: dict.nav.store },
      { href: "/contact", label: dict.nav.contact },
      { href: "/faq", label: dict.nav.faq },
    ],
    [dict],
  );

  return (
    <header className="sticky top-0 z-[140] isolate overflow-visible bg-[rgba(252,249,244,0.84)] backdrop-blur-2xl">
      <div className="container-shell flex h-22 items-center justify-between gap-4 overflow-visible py-3">
        <Link href="/" className="min-w-0 shrink-0">
          <DunapandaLogo />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/60 p-2 shadow-[var(--shadow-soft)] xl:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-[var(--header-accent)] text-[var(--color-ink)]"
                    : "text-[var(--muted)] hover:bg-[var(--header-accent-soft)] hover:text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href={user ? "/account" : "/login"} className="pill rounded-full px-4 py-3 text-sm text-[var(--muted)]">
            {user ? (role === "admin" ? "Admin" : "账户") : "登录"}
          </Link>
          <Link href="/cart" className="pill rounded-full px-4 py-3 text-sm text-[var(--muted)]">
            购物车 {items.length ? `(${items.length})` : ""}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white xl:hidden"
          aria-label="Toggle navigation"
        >
          <Menu size={20} />
        </button>
      </div>

      {open ? (
        <div className="bg-white/95 xl:hidden">
          <div className="container-shell flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-base text-[var(--color-ink)]"
              >
                <span className="whitespace-nowrap">{item.label}</span>
                <ChevronRight size={16} className="text-[var(--muted)]" />
              </Link>
            ))}
            <div className="grid gap-2">
              <Link
                href={user ? "/account" : "/login"}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-base text-[var(--color-ink)]"
              >
                <span>{user ? "账户中心" : "登录"}</span>
                <ChevronRight size={16} className="text-[var(--muted)]" />
              </Link>
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-base text-[var(--color-ink)]"
              >
                <span>购物车 {items.length ? `(${items.length})` : ""}</span>
                <ChevronRight size={16} className="text-[var(--muted)]" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

"use client";

import type { ReactNode } from "react";
import { Instagram, MapPin, Phone, Send } from "lucide-react";
import { useI18n } from "@/components/site/language-provider";
import { storeDetail } from "@/data/site";
import type { Locale } from "@/types/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.3-1.4 1.5-1.4h1.3V5.8c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.4v2.2H9v2.7h2.3v7h2.2Z" />
    </svg>
  );
}

function DouyinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M15.7 4.6c.9 1.4 2 2.4 3.3 2.8v2.5a6.8 6.8 0 0 1-3.2-1V14a5 5 0 1 1-5-5l.1 2.5a2.5 2.5 0 1 0 2.4 2.5V4.6h2.4Z" />
    </svg>
  );
}

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M9.6 5.5c-4 0-7.1 2.6-7.1 5.9 0 1.8.9 3.3 2.4 4.4l-.7 2.2 2.5-1.2c.9.2 1.8.4 2.9.4h.4c-.4-.7-.6-1.5-.6-2.3 0-3.1 2.8-5.7 6.2-5.7h.3c-.7-2.2-3.2-3.7-5.9-3.7Zm-2.6 4.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Zm5.1 0a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z" />
      <path d="M16.2 10.3c-3 0-5.3 1.9-5.3 4.3 0 1.3.7 2.5 1.9 3.3l-.5 1.8 2-1c.6.1 1.2.2 1.9.2 3 0 5.3-1.9 5.3-4.3 0-2.4-2.3-4.3-5.3-4.3Zm-1.9 3.2a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm3.8 0a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Z" />
    </svg>
  );
}

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#facebook", icon: <FacebookIcon /> },
  { label: "Instagram", href: "#instagram", icon: <Instagram size={18} /> },
  { label: "抖音", href: "#douyin", icon: <DouyinIcon /> },
  { label: "微信", href: "#wechat", icon: <WeChatIcon /> },
];

const localeOptions: { value: Locale; label: string }[] = [
  { value: "zh", label: "中文" },
  { value: "en", label: "English" },
  { value: "hu", label: "Magyar" },
];

export function SiteFooter() {
  const { dict, locale, setLocale } = useI18n();

  return (
    <footer className="mt-10 bg-[var(--color-forest)] text-white">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Panda Supermarket Budapest</p>
          <h2 className="display-title text-5xl">{dict.brand}</h2>
          <p className="max-w-xl text-sm leading-8 text-white/76">
            从每周补货到节庆备菜，熊猫超市希望把熟悉的亚洲味道稳稳放进你的日常采购清单里。
          </p>
        </div>

        <div className="space-y-4 text-sm text-white/80">
          <h3 className="text-base font-semibold text-white">{dict.nav.contact}</h3>
          <a href={storeDetail.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3">
            <MapPin size={16} className="mt-1 shrink-0" />
            <span>{storeDetail.address}</span>
          </a>
          <a href={`tel:${storeDetail.phone}`} className="flex items-center gap-3">
            <Phone size={16} />
            <span>{storeDetail.phone}</span>
          </a>
          <a href={`mailto:${storeDetail.email}`} className="flex items-center gap-3">
            <Send size={16} />
            <span>{storeDetail.email}</span>
          </a>
        </div>

        <div className="space-y-5 text-center text-sm text-white/80">
          <h3 className="text-base font-semibold text-white">关注我们</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label} className="transition hover:text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/88 transition hover:bg-white/16">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="container-shell flex flex-col gap-3 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Panda Supermarket. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-2">
            {localeOptions.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setLocale(item.value)}
                className={`rounded-full px-4 py-2 text-xs transition ${
                  locale === item.value ? "bg-white text-[var(--color-forest)]" : "bg-white/10 text-white/82 hover:bg-white/14"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

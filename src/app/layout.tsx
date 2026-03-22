import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { AppProviders } from "@/components/providers/app-providers";
import { getCurrentUser } from "@/lib/auth";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dunapanda | Panda Supermarket",
  description: "Dunapanda 是服务布达佩斯社区的现代亚洲超市官网，支持商品目录、角色登录、购物车与后台管理。",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html
      lang="zh-CN"
      className={`${headingFont.variable} ${bodyFont.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--color-ink)] text-[var(--color-ink)] antialiased">
        <AppProviders user={user}>
          <div className="site-grid min-h-screen">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}

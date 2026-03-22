import { AuthForms } from "@/components/auth/auth-forms";
import { SectionHeading } from "@/components/site/section-heading";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export default function Page() {
  return (
    <section className="page-section">
      <div className="container-shell space-y-6">
        <SectionHeading
          eyebrow="账户中心"
          title="登录、注册和角色切换都从这里开始"
          description={
            isSupabaseConfigured()
              ? "当前会走 Supabase Auth。管理员、普通用户和批发商会在登录后进入各自界面。"
              : "当前还是演示模式。你可以直接选角色登录，后面填上 Supabase 环境变量后会切换成真实账号体系。"
          }
        />
        <AuthForms demoMode={!isSupabaseConfigured()} />
      </div>
    </section>
  );
}

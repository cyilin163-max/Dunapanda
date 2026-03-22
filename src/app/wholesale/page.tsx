import { WholesaleApplicationForm } from "@/components/commerce/wholesale-application-form";
import { requireUser } from "@/lib/auth";

export default async function Page() {
  const user = await requireUser();

  return (
    <section className="page-section">
      <div className="container-shell grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-panel rounded-[32px] p-7">
          <p className="eyebrow">Wholesale</p>
          <h1 className="display-title mt-4 text-5xl">批发商申请</h1>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            当前登录账号：{user.email}。提交后管理员会在后台审核，通过后你登录前台时会自动看到批发价和起订量。
          </p>
        </div>
        <WholesaleApplicationForm />
      </div>
    </section>
  );
}

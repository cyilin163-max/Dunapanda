import { reviewWholesaleApplicationAction } from "@/app/actions/admin";
import { getWholesaleApplications } from "@/lib/commerce/repository";

export default async function Page() {
  const applications = await getWholesaleApplications();

  return (
    <div className="grid gap-5">
      <div className="section-panel rounded-[32px] p-6">
        <p className="eyebrow">Wholesale Review</p>
        <h1 className="display-title mt-4 text-5xl">批发商审核</h1>
      </div>
      <div className="grid gap-4">
        {applications.length ? applications.map((application) => (
          <article key={application.id} className="glass-card rounded-[32px] p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="display-title text-3xl">{application.companyName}</h2>
                <p className="mt-2 text-sm text-[var(--muted)]">{application.contactName} / {application.userEmail}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">税号：{application.taxId}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{application.note}</p>
              </div>
              <span className="rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm text-[var(--color-forest)]">{application.status}</span>
            </div>
            {application.status === "pending" ? (
              <div className="mt-5 flex flex-wrap gap-3">
                <form action={reviewWholesaleApplicationAction}>
                  <input type="hidden" name="applicationId" value={application.id} />
                  <input type="hidden" name="status" value="approved" />
                  <button className="rounded-full bg-[var(--color-cyan)] px-5 py-3 text-sm text-white">批准</button>
                </form>
                <form action={reviewWholesaleApplicationAction}>
                  <input type="hidden" name="applicationId" value={application.id} />
                  <input type="hidden" name="status" value="rejected" />
                  <button className="rounded-full border border-[var(--line)] px-5 py-3 text-sm">拒绝</button>
                </form>
              </div>
            ) : null}
          </article>
        )) : <div className="glass-card rounded-[32px] p-8 text-sm text-[var(--muted)]">暂无批发申请。</div>}
      </div>
    </div>
  );
}

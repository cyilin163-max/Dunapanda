import { AdminShell } from "@/components/admin/admin-shell";
import { requireRole } from "@/lib/auth";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await requireRole(["admin"]);
  return <AdminShell user={user}>{children}</AdminShell>;
}

import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getDemoUserByEmail, upsertDemoUser } from "@/lib/commerce/demo-store";
import type { AppRole, SessionUser } from "@/types/auth";

const DEMO_EMAIL_COOKIE = "dunapanda-demo-email";
const DEMO_NAME_COOKIE = "dunapanda-demo-name";
const DEMO_ROLE_COOKIE = "dunapanda-demo-role";

export async function getCurrentUser(): Promise<SessionUser | null> {
  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    if (!supabase) {
      return null;
    }

    const [{ data: authData }, cookieStore] = await Promise.all([supabase.auth.getUser(), cookies()]);
    const authUser = authData.user;
    if (!authUser) {
      return null;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, role")
      .eq("id", authUser.id)
      .maybeSingle();

    return {
      id: authUser.id,
      email: authUser.email ?? "",
      fullName: profile?.full_name ?? authUser.user_metadata.full_name ?? authUser.email ?? "User",
      role: (profile?.role as AppRole | null) ?? ((cookieStore.get(DEMO_ROLE_COOKIE)?.value as AppRole | undefined) ?? "customer"),
      isDemo: false,
    };
  }

  const cookieStore = await cookies();
  const email = cookieStore.get(DEMO_EMAIL_COOKIE)?.value;
  if (!email) {
    return null;
  }

  const storedName = cookieStore.get(DEMO_NAME_COOKIE)?.value ?? "Demo User";
  const storedRole = (cookieStore.get(DEMO_ROLE_COOKIE)?.value as AppRole | undefined) ?? "customer";
  const user = getDemoUserByEmail(email) ?? upsertDemoUser(email, storedName, storedRole);

  return user;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function requireRole(roles: AppRole[]) {
  const user = await requireUser();
  if (!roles.includes(user.role)) {
    redirect("/login");
  }

  return user;
}

export async function setDemoSession(user: { email: string; fullName: string; role: AppRole }) {
  const cookieStore = await cookies();
  cookieStore.set(DEMO_EMAIL_COOKIE, user.email, { path: "/", sameSite: "lax" });
  cookieStore.set(DEMO_NAME_COOKIE, user.fullName, { path: "/", sameSite: "lax" });
  cookieStore.set(DEMO_ROLE_COOKIE, user.role, { path: "/", sameSite: "lax" });
}

export async function clearDemoSession() {
  const cookieStore = await cookies();
  cookieStore.delete(DEMO_EMAIL_COOKIE);
  cookieStore.delete(DEMO_NAME_COOKIE);
  cookieStore.delete(DEMO_ROLE_COOKIE);
}

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { clearDemoSession, setDemoSession } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { upsertDemoUser } from "@/lib/commerce/demo-store";
import type { AppRole, AuthActionState } from "@/types/auth";

const signInSchema = z.object({
  email: z.string().email("请输入有效邮箱"),
  password: z.string().min(6, "密码至少 6 位"),
  fullName: z.preprocess((value) => (typeof value === "string" ? value : undefined), z.string().optional()),
  role: z.preprocess(
    (value) => (typeof value === "string" ? value : undefined),
    z.enum(["admin", "customer", "wholesaler"]).optional(),
  ),
});

const signUpSchema = z.object({
  fullName: z.string().min(2, "请填写姓名"),
  email: z.string().email("请输入有效邮箱"),
  password: z.string().min(6, "密码至少 6 位"),
});

export async function signInAction(_state: AuthActionState | undefined, formData: FormData): Promise<AuthActionState | undefined> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    fullName: formData.get("fullName"),
    role: formData.get("role"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "登录信息不完整" };
  }

  const { email, password, fullName, role } = parsed.data;

  if (!isSupabaseConfigured()) {
    const nextRole = (role ?? "customer") as AppRole;
    const user = upsertDemoUser(email, fullName?.trim() || email.split("@")[0] || "Demo User", nextRole);
    await setDemoSession(user);
    revalidatePath("/", "layout");
    redirect(nextRole === "admin" ? "/admin" : "/account");
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { error: "Supabase 还没有配置完成" };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function signUpAction(_state: AuthActionState | undefined, formData: FormData): Promise<AuthActionState | undefined> {
  const parsed = signUpSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "注册信息不完整" };
  }

  const { fullName, email, password } = parsed.data;

  if (!isSupabaseConfigured()) {
    const user = upsertDemoUser(email, fullName, "customer");
    await setDemoSession(user);
    revalidatePath("/", "layout");
    redirect("/account");
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { error: "Supabase 还没有配置完成" };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "注册成功，请返回登录。" };
}

export async function signOutAction() {
  if (!isSupabaseConfigured()) {
    await clearDemoSession();
    revalidatePath("/", "layout");
    redirect("/");
  }

  const supabase = await createSupabaseServerClient();
  await supabase?.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

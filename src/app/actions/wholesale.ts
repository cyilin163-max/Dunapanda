"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { submitWholesaleApplication } from "@/lib/commerce/repository";
import type { AuthActionState } from "@/types/auth";

const wholesaleSchema = z.object({
  contactName: z.string().min(2),
  companyName: z.string().min(2),
  taxId: z.string().min(2),
  note: z.string().min(4),
});

export async function applyWholesaleAction(_state: AuthActionState | undefined, formData: FormData): Promise<AuthActionState | undefined> {
  const user = await requireUser();
  const parsed = wholesaleSchema.safeParse({
    contactName: formData.get("contactName"),
    companyName: formData.get("companyName"),
    taxId: formData.get("taxId"),
    note: formData.get("note"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "申请信息不完整" };
  }

  await submitWholesaleApplication({
    userEmail: user.email,
    ...parsed.data,
  });

  revalidatePath("/wholesale");
  revalidatePath("/admin/wholesale-applications");
  return { success: "申请已提交，等待管理员审核。" };
}

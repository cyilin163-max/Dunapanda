export type AppRole = "admin" | "customer" | "wholesaler";

export type SessionUser = {
  id: string;
  email: string;
  fullName: string;
  role: AppRole;
  isDemo: boolean;
};

export type AuthActionState = {
  error?: string;
  success?: string;
};

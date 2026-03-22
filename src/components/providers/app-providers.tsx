"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageProvider } from "@/components/site/language-provider";
import type { CartItem, CatalogProduct } from "@/types/commerce";
import type { AppRole, SessionUser } from "@/types/auth";

type AuthContextValue = {
  user: SessionUser | null;
  role: AppRole | null;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: CatalogProduct, role: Exclude<AppRole, "admin">, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const CartContext = createContext<CartContextValue | null>(null);

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = window.localStorage.getItem("dunapanda-cart");
    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored) as CartItem[];
    } catch {
      window.localStorage.removeItem("dunapanda-cart");
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("dunapanda-cart", JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem(product, role, quantity = 1) {
        setItems((current) => {
          const existing = current.find((item) => item.productId === product.id && item.pricingRole === role);
          const unitPrice = role === "wholesaler" ? product.wholesalePrice : product.retailPrice;

          if (existing) {
            return current.map((item) =>
              item.productId === product.id && item.pricingRole === role
                ? { ...item, quantity: item.quantity + quantity, unitPrice }
                : item,
            );
          }

          return [
            ...current,
            {
              productId: product.id,
              slug: product.slug,
              quantity,
              unitPrice,
              pricingRole: role,
            },
          ];
        });
      },
      removeItem(productId) {
        setItems((current) => current.filter((item) => item.productId !== productId));
      },
      updateQuantity(productId, quantity) {
        setItems((current) =>
          current.map((item) => (item.productId === productId ? { ...item, quantity: Math.max(quantity, 1) } : item)),
        );
      },
      clearCart() {
        setItems([]);
      },
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function AppProviders({ children, user }: { children: ReactNode; user: SessionUser | null }) {
  const authValue = useMemo<AuthContextValue>(() => ({ user, role: user?.role ?? null }), [user]);

  return (
    <LanguageProvider>
      <AuthContext.Provider value={authValue}>
        <CartProvider>{children}</CartProvider>
      </AuthContext.Provider>
    </LanguageProvider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AppProviders");
  }

  return context;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within AppProviders");
  }

  return context;
}

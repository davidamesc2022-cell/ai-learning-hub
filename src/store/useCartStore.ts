import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Course } from "@/lib/types";

interface CartState {
  cartCourse: Course | null;
  addToCart: (course: Course) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartCourse: null,
      addToCart: (course) => set({ cartCourse: course }),
      clearCart: () => set({ cartCourse: null }),
    }),
    {
      name: "cart-storage", // nombre en localStorage
    }
  )
);

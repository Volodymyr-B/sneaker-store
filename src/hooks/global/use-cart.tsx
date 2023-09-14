import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";
import type { CartProduct } from "@/types/cart";

interface CartStore {
  items: CartProduct[];
  totalPrice: () => number;
  totalDiscount: () => number;
  addItem: (data: CartProduct) => void;
  removeItem: (sizeId: string) => void;
  removeAll: () => void;
  changeAmount: (sizeId: string, newAmount: number) => void;
}

const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalPrice: () =>
        Math.ceil(
          get().items.reduce(
            (acc, item) =>
              acc + item.price * (1 - item.discount / 100) * item.pickedAmount,
            0
          )
        ),
      totalDiscount: () =>
        Math.ceil(
          get().items.reduce(
            (acc, item) =>
              acc + (item.price * item.pickedAmount * item.discount) / 100,
            0
          )
        ),
      addItem: (data: CartProduct) => {
        const existSize = get().items.some(
          (item) => item.amount.id === data.amount.id
        );
        if (existSize) {
          return toast.error("That size already in cart.", {
            id: "unique",
          });
        }
        set({ items: [...get().items, data] });
        toast.success("Item added to cart.", { id: "unique" });
      },
      removeItem: (sizeId: string) => {
        set({
          items: [...get().items.filter((item) => item.amount.id !== sizeId)],
        });
      },
      removeAll: () => set({ items: [] }),
      changeAmount: (sizeId: string, newAmount: number) => {
        set({
          items: [
            ...get().items.map((item) =>
              item.amount.id === sizeId
                ? { ...item, pickedAmount: newAmount }
                : item
            ),
          ],
        });
      },
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

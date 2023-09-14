import { Metadata } from "next";
import { CartContent } from "@/app/(user)/cart/components/cart-content";

export const metadata: Metadata = {
  title: "Cart | Sneaker Store",
};

const CartPage = () => {
  return <CartContent />;
};
export default CartPage;

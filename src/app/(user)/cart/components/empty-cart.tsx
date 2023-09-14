import Link from "next/link";
import { AppButton } from "@/components/UI/app-button";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <p>Products added to the cart will appear here.</p>
      <p>Start shopping?</p>
      <Link href={"/"}>
        <AppButton>Go Shopping</AppButton>
      </Link>
    </div>
  );
};

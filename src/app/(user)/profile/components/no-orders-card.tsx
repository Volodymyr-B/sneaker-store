import Link from "next/link";
import { AppButton } from "@/components/UI/app-button";

export const NoOrdersCard = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <p>You don`t have any completed orders for now</p>
      <p>Start shopping?</p>
      <Link href={"/"}>
        <AppButton>Go Shoping</AppButton>
      </Link>
    </div>
  );
};

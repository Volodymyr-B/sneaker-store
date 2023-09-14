import { AppButton } from "@/components/UI/app-button";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <section>
      <h3>Sneaker store</h3>
      <div className="flex flex-col items-center gap-6">
        <h5>Congratulations!</h5>
        <p>Your order has been successfully created!</p>
        <p>
          Our operators, in the near future, will inform you about the status of
          the order and delivery time
        </p>
        <p>Happy usage 🙂</p>
        <Link href={"/"}>
          <AppButton>Home</AppButton>
        </Link>
      </div>
    </section>
  );
};
export default SuccessPage;

import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { UserAction } from "@/actions/user";
import { authOptions } from "@/lib/config/next-auth";
import { CheckoutContent } from "@/app/(user)/checkout/components/checkout-content";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Checkout | Sneaker store",
};

const CheckoutPage = async () => {
  let user = null;
  const session = await getServerSession(authOptions);
  if (session && session.user && session.user.email) {
    const res = await UserAction.getByEmail(session.user.email);
    if (res) user = res;
  }

  return <CheckoutContent user={user} />;
};

export default CheckoutPage;

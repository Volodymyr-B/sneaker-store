import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/config/next-auth";
import { UserAction } from "@/actions/user";
import { footerNav } from "@/constants/navigation";
import { Separator } from "@/components/common/separator";
import { SignOutBtn } from "@/app/(user)/profile/components/sign-out-btn";
import { OrderCard } from "@/app/(user)/profile/components/order-card";
import { PersonalInfo } from "@/app/(user)/profile/components/personal-info";
import { NoOrdersCard } from "@/app/(user)/profile/components/no-orders-card";
import { NavLinkList } from "@/components/common/nav-link-list";

export const revalidate = 0;

export const generateMetadata = async () => {
  const session = await getServerSession(authOptions);
  return {
    title: `${session?.user?.name} | Sneaker Store`,
  };
};

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) return null;
  const user = await UserAction.getByEmail(session.user.email);
  if (!user) return null;

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div className="md:w-2/3">
        <div className="flex justify-between">
          <h3 className="md:text-3xl font-bold">Hello {user.name}! 👋✋</h3>
          <SignOutBtn />
        </div>
        {!!user.orders.length ? (
          <>
            <h3>Your purchases:</h3>
            <ul className="flex flex-col gap-4">
              {user.orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </ul>
          </>
        ) : (
          <NoOrdersCard />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <PersonalInfo user={user} />
        <Separator />
        <NavLinkList title="Need help?" list={footerNav.info} />
      </div>
    </div>
  );
};

export default ProfilePage;

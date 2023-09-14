import { FC } from "react";
import type { UserFull } from "@/types/dto-in";

interface PersonalInfoProps {
  user: UserFull;
}

export const PersonalInfo: FC<PersonalInfoProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3>Personal info: </h3>
      <p>
        Email: <b>{user.eMail}</b>
      </p>
      <p>
        With us since: <b>{user.createdAt.toDateString()}</b>
      </p>
      <p>
        Total comments created: <b>{user.comments.length}</b>
      </p>
      <p>
        Total orders made: <b>{user.orders.length}</b>
      </p>
      <p>
        <span>Total money spend: </span>
        <b>{user.orders.reduce((acc, order) => acc + order.totalPrice, 0)} $</b>
      </p>
    </div>
  );
};

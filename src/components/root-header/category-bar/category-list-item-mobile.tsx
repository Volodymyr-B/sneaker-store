import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MotionLi } from "@/components/common/motion-li";

interface CategoryListItemMobileProps {
  action: (value: string) => void;
  itemTitle: string;
}

export const CategoryListItemMobile: FC<CategoryListItemMobileProps> = ({
  action,
  itemTitle,
}) => {
  return (
    <MotionLi>
      <button
        className="flex items-center justify-between w-full mb-2"
        onClick={() => action(itemTitle)}
      >
        <span>{itemTitle}</span>
        <IoIosArrowForward />
      </button>
    </MotionLi>
  );
};

"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useModal } from "@/hooks/global/use-modal";
import { Separator } from "@/components/common/separator";
import { MotionUl } from "@/components/common/motion-ul";
import { MotionLi } from "@/components/common/motion-li";
import { CategoryListItemMobile } from "@/components/root-header/category-bar/category-list-item-mobile";
import type { CategoryFull } from "@/types/dto-in";

interface CategoryBarMobileProps {
  categories: CategoryFull[];
}

export const CategoryBarMobile: FC<CategoryBarMobileProps> = ({
  categories,
}) => {
  const onClose = useModal((state) => state.onClose);
  const [layerOne, setLayerOne] = useState("");
  const [layerTwo, setLayerTwo] = useState("");

  return (
    <>
      {!layerOne && (
        <div>
          <h5>categories</h5>
          <Separator />
          <MotionUl key="first">
            {categories.map((category) => (
              <CategoryListItemMobile
                key={category.id}
                action={setLayerOne}
                itemTitle={category.name}
              />
            ))}
          </MotionUl>
        </div>
      )}
      {layerOne && !layerTwo && (
        <div>
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setLayerOne("")}
          >
            <span>Back</span>
            <IoIosArrowBack />
          </button>
          <Separator />
          <MotionUl key="second">
            {categories
              .find((category) => category.name === layerOne)
              ?.types.map((type) => (
                <CategoryListItemMobile
                  key={type.id}
                  action={setLayerTwo}
                  itemTitle={type.name}
                />
              ))}
          </MotionUl>
        </div>
      )}
      {layerOne && layerTwo && (
        <div>
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setLayerTwo("")}
          >
            <span>{layerOne}</span>
            <IoIosArrowBack />
          </button>
          <Separator />
          <MotionUl key="third">
            {categories
              .find((category) => category.name === layerOne)
              ?.types.find((type) => type.name === layerTwo)
              ?.variants.map((variant) => (
                <MotionLi key={variant.id}>
                  <Link
                    className="flex items-center justify-between w-full mb-2"
                    onClick={onClose}
                    href={`/${layerOne}/${layerTwo}/${variant.name}`}
                  >
                    <span>{variant.name}</span>
                    <IoIosArrowForward />
                  </Link>
                </MotionLi>
              ))}
          </MotionUl>
        </div>
      )}
    </>
  );
};

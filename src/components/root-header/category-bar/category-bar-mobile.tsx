"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useModal } from "@/hooks/global/use-modal";
import { Separator } from "@/components/common/separator";
import type { CategoryFull } from "@/types/dto-in";

interface CategoryBarMobileProps {
  categories: CategoryFull[];
}

// temporary solution before installing some animation lib --------//
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
          <ul>
            {categories.map((category) => (
              <li
                className="flex items-center justify-between w-full"
                onClick={() => setLayerOne(category.name)}
                key={category.id}
              >
                <span>{category.name}</span>
                <IoIosArrowForward />
              </li>
            ))}
          </ul>
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
          <ul>
            {categories
              .find((category) => category.name === layerOne)
              ?.types.map((type) => (
                <li
                  className="flex items-center justify-between w-full"
                  onClick={() => setLayerTwo(type.name)}
                  key={type.id}
                >
                  <span>{type.name}</span>
                  <IoIosArrowForward />
                </li>
              ))}
          </ul>
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
          <ul>
            {categories
              .find((category) => category.name === layerOne)
              ?.types.find((type) => type.name === layerTwo)
              ?.variants.map((variant) => (
                <li key={variant.id}>
                  <Link
                    className="flex items-center justify-between w-full"
                    onClick={onClose}
                    href={`/${layerOne}/${layerTwo}/${variant.name}`}
                  >
                    <span>{variant.name}</span>
                    <IoIosArrowForward />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

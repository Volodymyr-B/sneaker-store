"use client";

import { FC } from "react";
import Link from "next/link";
import { useDelayed } from "@/hooks/instance/use-delayed";
import { PopUp } from "@/components/root-header/category-bar/pop-up";
import { Container } from "@/components//common/container";
import { MotionUl } from "@/components/common/motion-ul";
import { MotionLi } from "@/components/common/motion-li";
import type { TypeFull } from "@/types/dto-in";

interface CategoryListProps {
  link: string;
  content: TypeFull[];
}

export const CategoryList: FC<CategoryListProps> = ({ link, content }) => {
  const [isOpen, openHandler, closeHandler] = useDelayed();

  return (
    <div onMouseEnter={openHandler} onMouseLeave={closeHandler}>
      <Link
        prefetch={false}
        href={`/${link}`}
        onClick={closeHandler}
        className="flex items-center relative h-main_header px-4 text-lg"
      >
        {link}
        {isOpen && (
          <div className="h-[2px] bg-app-secondary_action absolute right-0 left-0 bottom-2" />
        )}
      </Link>
      {isOpen && (
        <PopUp close={closeHandler}>
          <Container>
            <div className="flex justify-around">
              {content.map((type) => (
                <div key={type.id} className="flex flex-col gap-5">
                  <Link
                    prefetch={false}
                    onClick={closeHandler}
                    href={`/${link}/${type.name}`}
                    className="font-bold"
                  >
                    {type.name}
                  </Link>
                  <MotionUl
                    key="main-header"
                    className="flex flex-col gap-3"
                    animationSpeed={0.05}
                  >
                    {type.variants.map((variant) => (
                      <MotionLi key={variant.id}>
                        <Link
                          prefetch={false}
                          onClick={closeHandler}
                          href={`/${link}/${type.name}/${variant.name}`}
                          className="hover:font-bold"
                        >
                          {variant.name}
                        </Link>
                      </MotionLi>
                    ))}
                  </MotionUl>
                </div>
              ))}
            </div>
          </Container>
        </PopUp>
      )}
    </div>
  );
};

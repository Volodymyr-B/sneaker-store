import { FC } from "react";
import { CategoryList } from "@/components/root-header/category-bar/category-list";
import type { CategoryFull } from "@/types/dto-in";

interface CategoryBarProps {
  categories: CategoryFull[];
}

export const CategoryBar: FC<CategoryBarProps> = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <CategoryList
          link={category.name}
          content={category.types}
          key={category.id}
        />
      ))}
    </>
  );
};

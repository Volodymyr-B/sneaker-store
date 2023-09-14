import type { CategoryFull } from "@/types/dto-in";

export const generateStaticNav = (arr: CategoryFull[]) => {
  const paths: { category: string[] }[] = [];
  arr.forEach((cat) => {
    paths.push({ category: [cat.name] });
    cat.types.forEach((variant) => {
      paths.push({ category: [cat.name, variant.name] });
      variant.variants.forEach((el) =>
        paths.push({ category: [cat.name, variant.name, el.name] })
      );
    });
  });
  return paths;
};

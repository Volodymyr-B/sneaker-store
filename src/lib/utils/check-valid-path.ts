import type { CategoryFull } from "@/types/dto-in";

export const isValidPath = (currentPath: string, arr: CategoryFull[]) => {
  const availablePaths: string[] = [];
  arr.forEach((cat) => {
    availablePaths.push(cat.name);
    cat.types.forEach((variant) => {
      availablePaths.push(`${cat.name}/${variant.name}`);
      variant.variants.forEach((el) =>
        availablePaths.push(`${cat.name}/${variant.name}/${el.name}`)
      );
    });
  });
  return availablePaths.some((availablePath) => availablePath === currentPath);
};

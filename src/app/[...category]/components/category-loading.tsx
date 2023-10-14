import { Skeleton } from "@/components/common/skeleton";

export const CategoryLoading = () => {
  return (
    <>
      <div className="mb-4 flex gap-2 h-5 md:h-6">
        {new Array(3).fill("").map((_, i) => (
          <Skeleton key={i} width="16" />
        ))}
      </div>
      <h3 className="lg:text-2xl mb-4 underline underline-offset-8">
        Featured Products
      </h3>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-6"
      >
        {new Array(12).fill("").map((_, i) => (
          <Skeleton key={i} variant="square" />
        ))}
      </div>
    </>
  );
};

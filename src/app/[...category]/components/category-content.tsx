import React from "react";
import { ProductAction } from "@/actions/product";
import { Pagination } from "@/components/common/pagination";
import { Breadcrumbs } from "@/app/[...category]/components/breadcrumbs";
import { ProductCard } from "@/app/[...category]/components/product-card";

interface CategoryContentProps {
  currentPage: number;
  category: string[];
}

export const revalidate = 86400;

export const CategoryContent = async ({
  category,
  currentPage,
}: CategoryContentProps) => {
  const [totalProductsInCategory, products] =
    await ProductAction.getByParamsWithPagination(currentPage, category);

  const totalPages = Math.ceil(totalProductsInCategory / 24);

  return (
    <>
      <Breadcrumbs paths={category} />
      <h3 className="lg:text-2xl mb-4 underline underline-offset-8">
        Featured Products
      </h3>
      {products.length ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div>nothing</div>
      )}
      {totalPages > 1 && currentPage <= totalPages && (
        <Pagination
          path={category.join("/")}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

import { Suspense } from "react";
import { toValidNumber } from "@/lib/utils/to-valid-number";
import { CategoryContent } from "@/app/[...category]/components/category-content";
import { CategoryLoading } from "@/app/[...category]/components/category-loading";

interface Params {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { category: string[] };
}

const CategoryPage = ({ searchParams, params: { category } }: Params) => {
  const currentPage = toValidNumber(searchParams["page"]);

  return (
    <>
      <Suspense key={currentPage} fallback={<CategoryLoading />}>
        {/* @ts-expect-error Async Server Component */}
        <CategoryContent category={category} currentPage={currentPage} />
      </Suspense>
    </>
  );
};
export default CategoryPage;

// fetch data given to Componet instead of Page coz Next js
// dont consider changes in URL search queries(Pagination in that case)
// as new navigation and dont call suspense fallback when it change
// to prevent that(for proper user experience) suspense need unique key
// and that possible, atm, only from Component level

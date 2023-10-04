import { ProductAction } from "@/actions/product";
import { toValidNumber } from "@/lib/utils/to-valid-number";
import { Breadcrumbs } from "@/app/[...category]/components/breadcrumbs";
import { ProductCard } from "@/app/[...category]/components/product-card";
import { Pagination } from "@/components/common/pagination";
import { Container } from "@/components/common/container";

interface Params {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { category: string[] };
}

export const revalidate = 86400;

const CategoryPage = async ({ searchParams, params: { category } }: Params) => {
  const currentPage = toValidNumber(searchParams["page"]);
  const [totalProductsInCategory, products] =
    await ProductAction.getByParamsWithPagination(currentPage, category);

  const totalPages = Math.ceil(totalProductsInCategory / 24);

  return (
    <section>
      <Container className="max-w-[1760px]">
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
      </Container>
    </section>
  );
};
export default CategoryPage;

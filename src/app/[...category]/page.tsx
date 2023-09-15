import { ProductAction } from "@/actions/product";
import { CategoryAction } from "@/actions/category";
import { generateStaticNav } from "@/lib/utils/generate-static-nav";
import { Breadcrumbs } from "@/app/[...category]/components/breadcrumbs";
import { ProductCard } from "@/app/[...category]/components/product-card";
import { Container } from "@/components/common/container";

interface Params {
  params: { category: string[] };
}

export const revalidate = 86400;
export const dynamicParams = false;

export const generateStaticParams = async () => {
  const categories = await CategoryAction.getAll();
  return generateStaticNav(categories);
};

const CategoryPage = async ({ params: { category } }: Params) => {
  const products = await ProductAction.getByParams(...category);

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
      </Container>
    </section>
  );
};
export default CategoryPage;

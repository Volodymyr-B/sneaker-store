import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/config/next-auth";
import { ProductAction } from "@/actions/product";
import { Container } from "@/components/common/container";
import { DetailedProduct } from "@/app/shop/[id]/components/detailed-product";

interface Params {
  params: { id: string };
}

export const revalidate = 0;

export const generateMetadata = async ({
  params: { id },
}: Params): Promise<Metadata> => {
  const product = await ProductAction.getById(id);
  return {
    title: `${product?.name} | Sneaker Store`,
    description: `detailed page about ${product?.name}`,
  };
};

const DetailedPage = async ({ params: { id } }: Params) => {
  const product = await ProductAction.getById(id);
  const session = await getServerSession(authOptions);

  if (!product) notFound();

  return (
    <section>
      <Container>
        <DetailedProduct product={product} session={session} />
      </Container>
    </section>
  );
};
export default DetailedPage;

import { Container } from "@/components/common/container";

const CategoryLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Container className="max-w-[1760px]">{children}</Container>
    </section>
  );
};

export default CategoryLayout;

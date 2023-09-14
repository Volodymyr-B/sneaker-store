import { Container } from "@/components/common/container";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
};

export default UserLayout;

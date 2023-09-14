import { Metadata } from "next";
import { Container } from "@/components/common/container";
import { SubscribeFooter } from "@/components/footers/subscribe-footer";

export const metadata: Metadata = {
  title: "Info | Sneaker Store",
  description: "Information page | sneaker store",
};

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full">
      <Container>
        <div className="flex flex-col justify-between h-full">
          {children}
          <SubscribeFooter />
        </div>
      </Container>
    </section>
  );
};

export default InfoLayout;

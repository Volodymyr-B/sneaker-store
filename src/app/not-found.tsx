import Link from "next/link";
import { AppButton } from "@/components/UI/app-button";
import { Container } from "@/components/common/container";

const NotFound = () => {
  return (
    <>
      <Container>
        <section
          className="h-full flex flex-col justify-center items-center
       gap-4 text-center"
        >
          <h3>404 - Page Not Found</h3>
          <p>Sorry, there is nothing to see here</p>
          <p>Use link below to explore our amazing application</p>
          <div>
            <Link href="/">
              <AppButton>Home</AppButton>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};
export default NotFound;

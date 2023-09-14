import { Metadata } from "next";
import { AuthSmallDevice } from "@/app/auth/components/auth-small-device";
import { SignInForm } from "@/app/auth/components/sign-in-form";
import { SignUpForm } from "@/app/auth/components/sign-up-form";
import { Container } from "@/components/common/container";
import { Separator } from "@/components/common/separator";

export const metadata: Metadata = {
  title: "Authentication | Sneaker Store",
  description: "Authentication Page Sneaker Store",
};

const AuthPage = () => {
  return (
    <section>
      <h2 className="p-5 text-center bg-app-primary_action">Authentication</h2>
      <Container>
        <div className="hidden md:flex justify-center gap-16">
          <SignInForm />
          <Separator vertical />
          <SignUpForm />
        </div>
        <div className="md:hidden">
          <AuthSmallDevice />
        </div>
      </Container>
    </section>
  );
};
export default AuthPage;

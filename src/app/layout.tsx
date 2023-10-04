import { Metadata } from "next";
import { Quicksand } from "next/font/google";
import AuthProvider from "@/providers/auth-provider";
import { ModalProvider } from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { ScrollToTopButton } from "@/components/UI/scroll-to-top-button";
import { RootFooter } from "@/components/footers/root-footer";
import RootHeader from "@/components/headers/root-header";
import "@/styles/globals.css";

const font = Quicksand({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Sneaker Store",
  description: "e-commerce fully functional web app",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <ScrollToTopButton />
          <ToastProvider />
          <ModalProvider />
          {/* @ts-expect-error Server Component */}
          <RootHeader />
          <main className="flex-auto flex flex-col">
            <div className="h-main_header" />
            {children}
          </main>
          <RootFooter />
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;

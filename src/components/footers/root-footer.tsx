import Link from "next/link";
import { footerNav } from "@/constants/navigation";
import { Container } from "@/components/common/container";
import { AppIcon } from "@/components/UI/app-icon";
import { LogoIcon } from "@/components/UI/logo-icon";
import { NavLinkList } from "@/components/common/nav-link-list";

export const RootFooter = () => {
  return (
    <footer className="bg-neutral-900 text-sm sm:text-base">
      <Container>
        <div className="text-white flex justify-between flex-wrap gap-4 ">
          <div className="flex md:block w-full md:w-auto justify-between gap-4 ">
            <div className="w-fit min-w-[80px]">
              <LogoIcon />
            </div>
            <p className="max-w-sm md:pt-2 text-right sm:text-left">
              - is a online store, which presents original shoes, clothes and
              accessories
            </p>
          </div>
          <NavLinkList title="Info" list={footerNav.info} />
          <NavLinkList title="Get help" list={footerNav.getHelp} />
          <ul
            className="flex flex-wrap gap-3 lg:gap-4 justify-center md:justify-start
          w-full sm:w-auto"
          >
            {footerNav.links.map((nav, i) => (
              <li key={i}>
                <Link href={nav.link} target="_blank">
                  <AppIcon icon={<nav.icon />} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { CategoryAction } from "@/actions/category";
import { LogoIcon } from "@/components/UI/logo-icon";
import { SearchBar } from "@/components/root-header/search-bar/search-bar";
import { SearchBarMobile } from "@/components/root-header/search-bar/search-bar-mobile";
import { NavigationBar } from "@/components/root-header/nav-bar/navigation-bar";
import { CategoryBar } from "@/components/root-header/category-bar/category-bar";
import { CategoryBarMobile } from "@/components/root-header/category-bar/category-bar-mobile";
import { ModalButton } from "@/components/UI/modal-button";

const RootHeader = async () => {
  const categories = await CategoryAction.getAll();

  return (
    <div className="px-4 lg:px-8 z-20 bg-app-primary absolute lg:hover:fixed w-full">
      <header className="flex items-center justify-center lg:justify-between h-main_header">
        <div className="flex lg:hidden gap-2">
          <ModalButton icon={<AiOutlineMenu />}>
            <CategoryBarMobile categories={categories} />
          </ModalButton>
          <ModalButton icon={<AiOutlineSearch />}>
            <SearchBarMobile />
          </ModalButton>
        </div>
        <div className="w-full flex justify-center lg:justify-start">
          <LogoIcon />
        </div>
        <div className="hidden lg:flex w-full">
          <CategoryBar categories={categories} />
        </div>
        <div className="flex gap-2">
          <div className="hidden lg:flex w-72">
            <SearchBar />
          </div>
          <NavigationBar />
        </div>
      </header>
    </div>
  );
};
export default RootHeader;

import Link from "next/link";
import Image from "next/image";
import { ProductAction } from "@/actions/product";
import { AppButton } from "@/components/UI/app-button";
import { Carousel } from "@/components/common/carousel";
import { homeNav } from "@/constants/navigation";
import Shopping from "@/assets/images/shopping.jpg";

export const revalidate = 86400;

const HomePage = async () => {
  const preview = await ProductAction.getTwenty();

  return (
    <>
      <section>
        <Image
          className="h-44 lg:h-auto w-full max-h-96 object-cover shadow-xl"
          src={Shopping}
          alt="shopping"
          priority
        />
        <Carousel list={preview} />
      </section>
      {homeNav.map((nav) => (
        <section key={nav.id}>
          <Link href={nav.link}>
            <div className="relative shadow-xl">
              <Image
                className="h-80 lg:h-auto w-full object-cover"
                src={nav.image}
                alt="shopping"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col items-center py-4 md:py-12 lg:py-20 px-2 text-center">
              <h3>{nav.title}</h3>
              <h5>{nav.info}</h5>
              <p className="pb-2">don`t waste any more time!</p>
              <AppButton className="w-auto px-10">start shopping</AppButton>
            </div>
          </Link>
        </section>
      ))}
    </>
  );
};

export default HomePage;

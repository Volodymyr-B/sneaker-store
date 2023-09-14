import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

export const LogoIcon = () => {
  return (
    <Link href={`/`}>
      <div className="bg-app-primary p-3 rounded-xl w-fit">
        <Image src={Logo} alt="logo" width={70} />
      </div>
    </Link>
  );
};

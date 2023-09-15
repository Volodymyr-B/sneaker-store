import { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BreadcrumbsShortProps {
  productName: string;
}

export const BreadcrumbsShort: FC<BreadcrumbsShortProps> = ({
  productName,
}) => {
  const router = useRouter();

  return (
    <div
      className="mb-4 flex uppercase font-bold text-sm md:text-base
    text-app-primary_action"
    >
      <button
        onClick={() => router.back()}
        className="hover:text-app-secondary_hover uppercase"
      >
        back
      </button>
      <span className="cursor-default">&nbsp;/&nbsp;</span>
      <Link href={"/"} className="hover:text-app-secondary_hover">
        home
      </Link>
      <span className="cursor-default">&nbsp;/&nbsp;</span>
      <Link
        href={"/#"}
        className="pointer-events-none cursor-default text-app-primary"
      >
        {productName}
      </Link>
    </div>
  );
};

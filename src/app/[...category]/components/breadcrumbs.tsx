import { FC } from "react";
import Link from "next/link";
import { breadcrumbLinks } from "@/lib/utils/breadcrumb-links";

interface BreadcrumbsProps {
  paths: string[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <div className="mb-4 flex uppercase font-bold text-sm md:text-base text-app-primary_action">
      <Link href={"/"} className="hover:text-app-secondary_hover">
        home
      </Link>
      {paths.slice(0, paths.length - 1).map((cat, i) => (
        <div key={i}>
          <span>&nbsp;/&nbsp;</span>
          <Link
            href={breadcrumbLinks(paths)[i]}
            className="hover:text-app-secondary_hover"
          >
            {cat}
          </Link>
        </div>
      ))}
    </div>
  );
};

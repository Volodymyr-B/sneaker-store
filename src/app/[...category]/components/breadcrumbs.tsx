import { FC } from "react";
import Link from "next/link";
import { breadcrumbLinks } from "@/lib/utils/breadcrumb-links";
import { cn } from "@/lib/utils/tw-merge";

interface BreadcrumbsProps {
  paths: string[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <div className="mb-4 flex uppercase font-bold text-sm md:text-base text-app-primary_action">
      <Link href={"/"} className="hover:text-app-secondary_hover">
        home
      </Link>
      {paths.slice(0, paths.length).map((cat, i) => (
        <div key={i}>
          <span className="cursor-default">&nbsp;/&nbsp;</span>
          <Link
            href={breadcrumbLinks(paths)[i]}
            className={cn(
              "hover:text-app-secondary_hover",
              i + 1 === paths.length &&
                "pointer-events-none cursor-default text-app-primary"
            )}
          >
            {cat}
          </Link>
        </div>
      ))}
    </div>
  );
};

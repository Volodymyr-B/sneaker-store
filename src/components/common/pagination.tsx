import { FC } from "react";
import { AppSelect } from "@/components/UI/app-select";
import { NavigationLink } from "@/components/UI/navigation-link";
import { SelectLinkItem } from "@/components/UI/select-link-item";

interface PaginationProps {
  path: string;
  currentPage: number;
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({
  path,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="flex justify-between items-center gap-4 py-2 md:py-4 mt-2">
      <NavigationLink
        href={
          currentPage === 2 ? `/${path}` : `/${path}?page=${currentPage - 1}`
        }
        isDisabled={currentPage <= 1}
        className="justify-start"
      >
        previous
      </NavigationLink>
      <div className="hidden lg:flex items-center gap-3">
        <span>Page:</span>
        <AppSelect selectVal={currentPage === 0 ? 1 : currentPage}>
          {new Array(totalPages).fill("").map((_, i) => (
            <SelectLinkItem
              key={i}
              href={i === 0 ? `/${path}` : `/${path}?page=${i + 1}`}
              isDisabled={i === 0 ? currentPage === i : currentPage === i + 1}
            >
              {i + 1}
            </SelectLinkItem>
          ))}
        </AppSelect>
        <span>of {totalPages}</span>
      </div>
      <div className="lg:hidden">
        <span>
          {currentPage === 0 ? 1 : currentPage} / {totalPages}
        </span>
      </div>
      <NavigationLink
        href={
          currentPage === 0
            ? `/${path}?page=${currentPage + 2}`
            : `/${path}?page=${currentPage + 1}`
        }
        isDisabled={currentPage >= totalPages}
        className="justify-end"
      >
        next
      </NavigationLink>
    </div>
  );
};

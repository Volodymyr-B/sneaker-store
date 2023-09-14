import { FC } from "react";
import Link from "next/link";
import useSWR from "swr";
import { useDebounce } from "@/hooks/instance/use-debounce";
import { get } from "@/lib/utils/crud";
import { AppImage } from "@/components/common/app-image";
import type { ProductShort } from "@/types/dto-in";

interface SearchResultsProps {
  search: string;
  reset: () => void;
}

export const SearchResults: FC<SearchResultsProps> = ({ search, reset }) => {
  const debouncedSearch = useDebounce(search);
  const { data, error, isLoading } = useSWR<ProductShort[]>(
    `/api/search?q=${debouncedSearch}`,
    get
  );

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>something goes wrong</p>;
  if (data.length === 0)
    return (
      <p>
        We could not find anything for: <b>&quot;{debouncedSearch}&quot;</b>
      </p>
    );

  return (
    <>
      <h5>products: </h5>
      <ul>
        {data.map((prod) => (
          <li key={prod.id}>
            <Link href={`/shop/${prod.id}`} onClick={reset}>
              <div className="w-full h-24 flex gap-4">
                <AppImage src={prod.cover} alt={prod.name} className="h-20" />
                <div>
                  <p>{prod.name}</p>
                  <p>{prod.sport}</p>
                  <p>{prod.price} $</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

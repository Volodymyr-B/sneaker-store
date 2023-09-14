"use client";

import { ChangeEvent, useState } from "react";
import { useModal } from "@/hooks/global/use-modal";
import { SearchInput } from "@/components/UI/search-input";
import { SearchResults } from "@/components/root-header/search-bar/search-results";

export const SearchBarMobile = () => {
  const [search, setSearch] = useState("");
  const onClose = useModal((state) => state.onClose);

  const resetSearch = () => {
    setSearch("");
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative w-full">
      <SearchInput
        value={search}
        onChange={inputHandler}
        reset={resetSearch}
        placeholder="Search"
      />
      {search.length >= 3 && <SearchResults search={search} reset={onClose} />}
    </div>
  );
};

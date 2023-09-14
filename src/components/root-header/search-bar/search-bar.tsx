"use client";

import { ChangeEvent, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/instance/use-click-outside";
import { SearchInput } from "@/components/UI/search-input";
import { SearchResults } from "@/components/root-header/search-bar/search-results";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const resetSearch = () => {
    setSearch("");
  };
  const divRef = useRef(null);
  useClickOutside(divRef, () => {
    setSearch("");
  });

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div ref={divRef} className="relative w-full">
      <SearchInput
        value={search}
        onChange={inputHandler}
        reset={resetSearch}
        placeholder="Search"
      />
      {search.length >= 3 && (
        <div
          className="absolute left-0 top-9 px-4 py-6 bg-app-primary_hover flex 
        flex-col gap-4 w-full shadow-lg"
        >
          <SearchResults search={search} reset={resetSearch} />
        </div>
      )}
    </div>
  );
};

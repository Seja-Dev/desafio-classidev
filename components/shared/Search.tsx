"use client";

import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import CategoryFilter from "./CategoryFilter";
// import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({
  placeholder = "Pesquise pelo título...",
}: {
  placeholder?: string;
}) => {
  // const [query, setQuery] = useState("");
  // const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     let newUrl = "";

  //     if (query) {
  //       newUrl = formUrlQuery({
  //         params: searchParams.toString(),
  //         key: "query",
  //         value: query,
  //       });
  //     } else {
  //       newUrl = removeKeysFromQuery({
  //         params: searchParams.toString(),
  //         keysToRemove: ["query"],
  //       });
  //     }

  //     router.push(newUrl, { scroll: false });
  //   }, 300);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [query, searchParams, router]);

  return (
    <div className=" relative flex min-h-[54px] w-full max-w-[704px] items-center justify-center overflow-hidden rounded-lg bg-[#A4A4A4] px-4 ">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        className="absolute left-4 top-4"
      />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // onChange={(e) => setQuery(e.target.value)}
        className="border-0 bg-[#A4A4A4] ps-9 text-base font-medium  leading-[24px] outline-offset-0 placeholder:text-black focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <div className="flex w-full items-center gap-4 max-md:hidden">
        |
        <CategoryFilter />
      </div>
      {/* |{children} */}
    </div>
  );
};

export default Search;

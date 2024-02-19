"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const Search = ({
  placeholder = "Pesquise pelo título...",
  children,
}: {
  placeholder?: string;
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);

  return (
    <div className=" relative flex min-h-[54px] min-w-[704px] items-center justify-center overflow-hidden rounded-lg bg-[#A4A4A4] px-4 ">
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
        onChange={(e) => setQuery(e.target.value)}
        className="border-0 bg-[#A4A4A4] ps-9 text-base font-medium  leading-[24px] outline-offset-0 placeholder:text-black focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      |{children}
    </div>
  );
};

export default Search;

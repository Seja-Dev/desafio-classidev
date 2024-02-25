"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
// import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  const onSelectCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category && category !== "Todos") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  // const onSelectCategory = (category: string) => {
  //   let newUrl = "";

  //   if (category && category !== "Todos") {
  //     newUrl = formUrlQuery({
  //       params: searchParams.toString(),
  //       key: "category",
  //       value: category,
  //     });
  //   } else {
  //     newUrl = removeKeysFromQuery({
  //       params: searchParams.toString(),
  //       keysToRemove: ["category"],
  //     });
  //   }

  //   router.push(newUrl, { scroll: false });
  // };

  return (
    <Select onValueChange={(value: string) => onSelectCategory(value)}>
      <SelectTrigger className="border-none bg-[#A4A4A4] focus:ring-[#A4A4A4] focus-visible:ring-[#A4A4A4]">
        <SelectValue placeholder="Todas as categorias" className="italic" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Todos" className="italic">
          Todas as categorias
        </SelectItem>

        {categories.map((category) => (
          <SelectItem
            value={category.name}
            key={category._id}
            className="cursor-pointer py-3 focus:bg-slate-50 "
          >
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;

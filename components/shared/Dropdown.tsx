"use client";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getAllCategories,
  insertCategory,
} from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";

interface DropdownProps {
  value?: string;
  onChangeHandler?: () => void;
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function insertCategories() {
      try {
        const categoryList = await getAllCategories();

        if (categoryList.length === 0) {
          await insertCategory();
        } else {
          setCategories(categoryList);
        }
      } catch (error) {
        console.error(error);
      }
    }

    insertCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione a categoria" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category._id} value={category._id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;

"use client";
import React, {  useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  getAllCategories, insertCategory } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";

interface DropdownProps {
  value?: string;
   onChangeHandler?: () => void;
}

// const categories = [
//   { _id: "1", name: "Eletrônicos" },
//   { _id: "2", name: "Roupas e acessórios" },
//   { _id: "3", name: "Carros" },
//   { _id: "4", name: "Esporte" },
//   { _id: "5", name: "Beleza" },
// ];

// const [categories, setCategories] = useState<ICategory[]>([]);
// const [category, setCategory] = useState("");

// const handleAddCategory = async (name: string) => {
//   await createCategory({
//     categoryName: "categoria",
//   });
// };

// useEffect(() => {
//   console.log("useEffect");
//   const setCategory = async () => {
//     await createCategory({
//       categoryName: "categoria2",
//     });
//   };

//   setCategory();
// }, []);
// const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
//   const selectedValue = event.target.value;
//   console.log("Valor selecionado:", selectedValue);

//   await createCategory({
//     categoryName: selectedValue,
//   });
// };
const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);


  useEffect(() => {
    async function insertCategories() {
      try{
        const categoryList = await getAllCategories();

        if(categoryList.length === 0){
          await insertCategory();
        } else{
          setCategories(categoryList);
        }
      }catch(error){
        console.error(error)
      }
    }

    insertCategories()
  }, []);

  return (
   
    <Select onValueChange={onChangeHandler}  defaultValue={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione a categoria" />
      </SelectTrigger>
     <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category._id} value={category._id} >
            {category.name}
          </SelectItem>
        ))}
   
      </SelectContent>
    </Select>

     // <div>
    //   <select
    //     onChange={handleChange}
    //     className=" w-full rounded-md p-2 outline-none"
    //   >
    //     <option value="" disabled selected>
    //       Selecione a categoria
    //     </option>
    //     {categories.map((category) => (
    //       <>
    //         <option key={category._id} value={category._name}>
    //           {category.name}
    //         </option>
    //       </>
    //     ))}
    //     {/* <option value="opcao1">Opção 1</option>
    //     <option value="opcao2">Opção 2</option>
    //     <option value="opcao3">Opção 3</option> */}
    //   </select>
    // </div>
  );
};

export default Dropdown;

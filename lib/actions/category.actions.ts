"use server"

// import { CreateCategoryParams } from "@/types";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";


export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.error(error);
  }
};



const categories = [
  { name: "Eletrônicos" },
  { name: "Roupas e acessórios" },
  { name: "Carros" },
  { name: "Esporte" },
  { name: "Beleza" }
];
export const insertCategory = async () => {
  try {
    await connectToDatabase();
    const newCategory = await Category.insertMany(categories);
    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    console.error(error);
  }
}
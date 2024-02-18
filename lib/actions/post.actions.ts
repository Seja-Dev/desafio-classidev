"use server";

import { CreatePostParams } from "@/types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Post from "../database/models/post.model";

export const createPost = async ({ post, userId }: CreatePostParams) => {
  try {
    await connectToDatabase();

    const createdBy = await User.findById(userId);

    if (!createdBy) throw new Error("Usuário não encontrado");

    const newPost = await Post.create({
      ...post,
      category: post.categoryId,
      createdBy: userId,
    });

    return newPost;
  } catch (error) {
    console.error(error)
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
  }
};

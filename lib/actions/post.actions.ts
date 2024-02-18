"use server";

import { CreatePostParams, GetRelatedpostsByCategoryParams } from "@/types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Post from "../database/models/post.model";
import Category from "../database/models/category.model";

const populatePost = (query: any) => {
  return query
    .populate({
      path: "createdBy",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
};

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
    console.error(error);
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
  }
};

export async function getPostById(postId: string) {
  try {
    await connectToDatabase();

    const post = await populatePost(Post.findById(postId));

    if (!post) throw new Error("Post not found");

    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    console.log(error);
  }
}

export async function getRelatedPostsByCategory({
  categoryId,
  postId,
  limit = 3,
  page = 1,
}: GetRelatedpostsByCategoryParams) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { $and: [{ category: categoryId }, { _id: { $ne: postId } }] }

    const postQuery = Post.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const posts = await populatePost(postQuery)
    const postsCount = await Post.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(posts)), totalPages: Math.ceil(postsCount / limit) }
  } catch (error) {
    console.error(error)
  }
}
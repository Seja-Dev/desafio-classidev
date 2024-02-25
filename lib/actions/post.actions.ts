"use server";
import { revalidatePath } from "next/cache";

import {
  CreatePostParams,
  DeletePostParams,
  GetAllPostsParams,
  GetRelatedpostsByCategoryParams,
  UpdatePostParams,
} from "@/types";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Post from "../database/models/post.model";
import Category from "../database/models/category.model";
import console from "console";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populatePost = (query: any) => {
  return query
    .populate({path: "createdBy", model: User,select: "_id firstName lastName", })
    .populate({ path: "category", model: Category, select: "_id name" });
};

export const createPost = async ({ post, userId, path }: CreatePostParams) => {
  try {
    await connectToDatabase();

    const createdBy = await User.findById(userId);

    if (!createdBy) throw new Error("Usuário não encontrado");

    const newPost = await Post.create({
      ...post,
      category: post.categoryId,
      createdBy: userId,
    });
    revalidatePath(path);
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

export async function deletePost({ postId, path }: DeletePostParams) {
  try {
    await connectToDatabase();

    const deletedPost = await Post.findByIdAndDelete(postId);
    if (deletedPost) revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost({ userId, post, path }: UpdatePostParams) {
  try {
    await connectToDatabase();

    const postUpdate = await Post.findById(post._id);
    if (!postUpdate || postUpdate.createdBy.toHexString() !== userId) {
      throw new Error("Unauthorized or post not found");
    }

    const updatedPost = await Post.findByIdAndUpdate(
      post._id,
      { ...post, category: post.categoryId },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedPost));
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
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = {
      $and: [{ category: categoryId }, { _id: { $ne: postId } }],
    };

    const postQuery = Post.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const posts = await populatePost(postQuery);
    const postsCount = await Post.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(posts)),
      totalPages: Math.ceil(postsCount / limit),
    };
  } catch (error) {
    console.error(error);
  }
}


export async function getPostsByQuery({ query, limit = 6, page }: GetAllPostsParams) {
  try {
    await connectToDatabase();

    const nameCondition = query ? { name: { $regex: query, $options: "i" } } : {};
    const skipAmount = (Number(page) - 1) * limit;

    const postsQuery = Post.find(nameCondition)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const posts = await populatePost(postsQuery);
    const postsCount = await Post.countDocuments(nameCondition);

    return {
      data: JSON.parse(JSON.stringify(posts)),
      totalPages: Math.ceil(postsCount / limit),
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsByCategory({ category, limit = 6, page }: GetAllPostsParams) {
  try {
    await connectToDatabase();

    const categoryCondition = category ? await getCategoryByName(category) : null;
    const conditions = categoryCondition ? { category: categoryCondition._id } : {};

    const skipAmount = (Number(page) - 1) * limit;
    const postsQuery = Post.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const posts = await populatePost(postsQuery);
    const postsCount = await Post.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(posts)),
      totalPages: Math.ceil(postsCount / limit),
    };
  } catch (error) {
    console.log(error);
  }
}
// export async function getAllPosts({query, limit = 6, page, category}: GetAllPostsParams) {
//   try {
//     await connectToDatabase();

//     const nameCondition = query ? { name: { $regex: query, $options: "i" } } : {};

//     const categoryCondition = category ? await getCategoryByName(category): null;

//     const conditions = { $and: [ nameCondition, categoryCondition ? { category: categoryCondition._id } : {}, ]};

//     const skipAmount = (Number(page) - 1) * limit;
//     const postsQuery = Post.find(conditions)
//       .sort({ createdAt: "desc" })
//       .skip(skipAmount)
//       .limit(limit);

//     const posts = await populatePost(postsQuery);
//     const postsCount = await Post.countDocuments(conditions);

//     return {
//       data: JSON.parse(JSON.stringify(posts)),
//       totalPages: Math.ceil(postsCount / limit),
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

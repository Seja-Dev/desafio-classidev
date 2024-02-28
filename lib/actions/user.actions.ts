"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { connectToDatabase } from "../database";

import Post from "../database/models/post.model";
import User from "../database/models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.log("Error getting user by ID", error);
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return updatedUser;
  } catch (error) {
    console.log("Error updating user", error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    await Post.updateMany(
      { _id: { $in: userToDelete.posts } },
      { $pull: { createdBy: userToDelete._id } }
    );

    const deletedUser = await User.findByIdAndDelete(userToDelete._id);

    return deletedUser || null;
  } catch (error) {
    console.log("Error deleting user", error);
  }
}

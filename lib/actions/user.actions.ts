"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { connectToDatabase } from "../database";

import Post from "../database/models/post.model";
import User from "../database/models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
    throw new Error(typeof error === "string" ? error : JSON.stringify(error));
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
      { $pull: { organizer: userToDelete._id } }
    );

    // Unlink relationships
    // await Promise.all([
    //   // Update the 'events' collection to remove references to the user
    //   Post.updateMany(
    //     { _id: { $in: userToDelete.posts } },
    //     { $pull: { organizer: userToDelete._id } }
    //   ),

    // ])

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.log("Error deleting user", error);
  }
}

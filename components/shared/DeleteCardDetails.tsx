"use client";
import { deletePost } from "@/lib/actions/post.actions";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import React from "react";

interface DeleteCardDetialsProps {
  postId: string;
}

const DeleteCardDetails = ({ postId }: DeleteCardDetialsProps) => {
  const handleDelete = async (postId: string) => {
    await deletePost({ postId });
  };

  return (
    <>
      <button className="flex items-center text-white underline">
        <Edit2Icon size={24} />
        Editar
      </button>
      <button
        className="flex text-red-600 underline"
        onClick={() => handleDelete(postId)}
      >
        <Trash2Icon size={24} />
        Exluir{" "}
      </button>
    </>
  );
};

export default DeleteCardDetails;

import PostForm from "@/components/shared/PostForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdatePost = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="flex min-h-[100%] justify-center bg-[#0E0E0E] pt-5">
        <h3 className="text-4xl font-bold text-white">Crie seu anúncio</h3>
      </section>
      <div>
        <PostForm userId={userId} type="Update"/>
      </div>
    </>
  );
};

export default UpdatePost;

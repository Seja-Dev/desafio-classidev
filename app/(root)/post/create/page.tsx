import PostForm from "@/components/shared/PostForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const CreatePost = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="flex min-h-[100%] flex-col items-center justify-center bg-[#0E0E0E]">
        <h3 className="py-4 text-4xl font-bold text-white">Crie seu anúncio</h3>

        <div className=" w-[620px]">
          <PostForm userId={userId} type="Create" />
        </div>
      </section>
    </>
  );
};

export default CreatePost;

import PostForm from "@/components/shared/PostForm";
import { getPostById } from "@/lib/actions/post.actions";
import { auth } from "@clerk/nextjs";
import React from "react";

interface UpdatePostProps {
  params: {
    id: string;
  };
}

const UpdatePost = async ({ params: { id } }: UpdatePostProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  const post = await getPostById(id);

  return (
    <>
      <section className="flex min-h-[100%] flex-col items-center justify-center bg-[#0E0E0E]">
        <h3 className="py-4 text-4xl font-bold text-white">
          Atualize seu anúncio
        </h3>

        <div className=" w-[620px]">
          <PostForm
            userId={userId}
            type="Update"
            post={post}
            postId={post._id}
          />
        </div>
      </section>
    </>
  );
};

export default UpdatePost;

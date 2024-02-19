import {
  getPostById,
  getRelatedPostsByCategory,
} from "@/lib/actions/post.actions";
import React from "react";
import Link from "next/link";
import { ArrowLeftIcon, PhoneCallIcon } from "lucide-react";
import { formatDate, formatPrice } from "@/lib/utils";
import ContainerCard from "@/components/shared/ContainerCard";
// import DeleteCardDetails from "@/components/shared/DeleteCardDetails";
import { CATEGORY_ICON } from "@/constants/icons";
import { auth } from "@clerk/nextjs";
import DeletePost from "@/components/shared/DeletePost";

import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ params: { id }, searchParams }: PageProps) => {
  const post = await getPostById(id);

  if (!post) {
    return (
      <section className="min-h-[100%] bg-[#0E0E0E] py-10">
        <h3 className=" text-center text-4xl font-bold text-white">
          Postagem não encontrada
        </h3>
      </section>
    );
  }

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isPostCreator = userId === post?.createdBy._id.toString();

  const relatedPosts = await getRelatedPostsByCategory({
    categoryId: post.category._id,
    postId: post._id,
    page: searchParams.page as string,
  });

  return (
    <section className="flex min-h-screen flex-col items-center gap-8 bg-[#0E0E0E]">
      <section className="m-auto  flex max-w-[1200px] items-center justify-center  p-5">
        <div className="flex flex-col gap-12">
          <Link href="/" className="mb-8 flex text-white underline">
            <ArrowLeftIcon />
            <p>Voltar para a página inicial</p>
          </Link>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-8">
              <h3 className="text-5xl font-bold text-white">{post.name}</h3>
              {isPostCreator && (
                <>
                  <Link
                    href={`/post/create/${post._id}/update`}
                    className="flex items-center gap-2 text-white underline"
                  >
                    <Image
                      src="/assets/icons/edit.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                    Editar
                  </Link>
                  <div className=" text-white underline">
                    <DeletePost postId={post._id}>Excluir</DeletePost>
                  </div>
                </>
              )}
            </div>
            <p className="flex items-center gap-2 font-bold text-white">
              {CATEGORY_ICON[post.category.name as keyof typeof CATEGORY_ICON]}{" "}
              {post.category.name}{" "}
            </p>
            <p className="text-sm italic text-[#adacac]">
              Postado em {formatDate(post.createdDate)}
            </p>
            <p className="text-xl font-semibold text-[#00FF0A]">
              {formatPrice(Number(post.price))}
            </p>
          </div>

          <div>
            <p className="text-sm font-light italic text-[#a5a5a5]">
              {post.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 ">
            <h4 className="text-2xl font-bold text-white">
              Gostou? Entre em contato
            </h4>
            <div className="flex gap-2 text-white ">
              <PhoneCallIcon />
              <p className="text-lg font-bold ">{post.tel}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex  flex-col  gap-4">
        <h3 className="py-5 text-4xl font-bold text-white">
          Postagens relacionadas
        </h3>

        <ContainerCard
          data={relatedPosts?.data}
          limit={9}
          page={1}
          totalPages={2}
        />
      </section>
    </section>
  );
};

export default page;

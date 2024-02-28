import { CATEGORY_ICON } from "@/constants/icons";
import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { IPost } from "@/lib/database/models/post.model";
import { formatDate, formatPrice } from "@/lib/utils";
import Image from "next/image";
import DeletePost from "./DeletePost";

interface CardProps {
  post: IPost;
}

const Card = ({ post }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isPostCreator = userId === post.createdBy._id.toString();

  const nameCategory = post.category.name;

  const containsSpace = nameCategory.indexOf(" ") !== -1;
  const iconCategory = containsSpace
    ? nameCategory.split(" ")[0]
    : nameCategory;

  return (
    <>
      <div className="relative flex min-h-[313px] max-w-[334px] flex-col  rounded-lg bg-white p-6">
        <Link href={`/post/${post._id}`}>
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">{post.name}</h2>
            <p className="text-sm italic">{formatDate(post.createdDate)}</p>
            <span className="mt-2 text-xl font-bold">
              {formatPrice(Number(post.price))}
            </span>
          </div>
        </Link>

        {isPostCreator && (
          <div className="absolute right-2 top-2 ">
            <Link href={`/post/create/${post._id}/update`}>
              <Image
                src="/assets/icons/edit.svg"
                alt="edit"
                width={20}
                height={20}
              />
            </Link>

            <DeletePost postId={post._id} />
          </div>
        )}

        <Link href={`/post/${post._id}`}>
          <div className="mt-7 flex flex-col gap-2">
            <p className="line-clamp-6 text-sm italic">{post.description}</p>
            <p className="flex items-center gap-2">
              {CATEGORY_ICON[iconCategory as keyof typeof CATEGORY_ICON]}{" "}
              {post.category.name}{" "}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;

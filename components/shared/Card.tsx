import { CATEGORY_ICON } from "@/constants/icons";
import { IPost } from "@/lib/database/models/post.model";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CardProps {
  post: IPost;
}

const Card = ({ post }: CardProps) => {
  return (
    <Link href={`/post/${post._id}`}>
      <div className="flex min-h-[313px] max-w-[334px] flex-col   rounded-lg bg-white p-6">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold">{post.name}</h2>
          <p className="text-sm italic">Postado em 20/03/2022</p>
          <span className="mt-2 text-xl font-bold">
             {formatPrice(Number(post.price))}
          </span>
        </div>

        <div className="mt-7 flex flex-col gap-2">
          <p className="line-clamp-6 text-sm italic">{post.description}</p>
          <p className="flex items-center gap-2">
            {CATEGORY_ICON[post.category.name as keyof typeof CATEGORY_ICON]}{" "}
            {post.category.name}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

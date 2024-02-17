import Link from "next/link";
import React from "react";

interface CardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  tel: string;
  description: string;
}

const Card = ({ id, name, category, price, tel, description }: CardProps) => {
  return (
    <Link href={`/post/${id}`}>
      <div className="flex h-[313px] max-w-[334px] flex-col   rounded-lg bg-white p-6">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold">{name}</h2>
          <p className="text-sm italic">Postado em 20/03/2022</p>
          <span className="mt-2 text-xl font-bold">{price}</span>
        </div>

        <div className="mt-7 flex flex-col gap-2">
          <p className="line-clamp-6 text-sm italic">
            {description}dfgadsfgdfgdf
          </p>
          <p>{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

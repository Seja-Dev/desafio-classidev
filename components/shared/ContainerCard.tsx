import { IPost } from "@/lib/database/models/post.model";
import React from "react";
import Card from "./Card";

interface ContainerCarsProps {
  data: IPost[];
  limit?: number;
  page?: number | string;
  totalPage?: number;
}

const ContainerCard = ({
  data,
  limit,
  page,
  totalPage,
}: ContainerCarsProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="m-auto flex max-w-[1200px] flex-wrap justify-center gap-5 p-5">
          {data.map((post) => (
            <Card post={post} key={post._id} />
          ))}
        </div>
      ) : (
        <div className="">
          <h3 className=" text-4xl font-bold text-white">
            Nenhum postagem contrada!
          </h3>
        </div>
      )}
    </>
  );
};

export default ContainerCard;

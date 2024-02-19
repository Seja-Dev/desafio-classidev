import { IPost } from "@/lib/database/models/post.model";
import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

interface ContainerCarsProps {
  data: IPost[];
  limit?: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
}

const ContainerCard = ({
  data,
  limit,
  page,
  totalPages = 0,
  urlParamName,
}: ContainerCarsProps) => {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-between">
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

      {totalPages > 1 && (
        <Pagination
          urlParamName={urlParamName}
          page={page}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default ContainerCard;

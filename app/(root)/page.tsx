"use server";
import CategoryFilter from "@/components/shared/CategoryFilter";
// import ContainerCard from "@/components/shared/ContainerCard";
import Search from "@/components/shared/Search";

// import {
//   getPostsByQuery,
//   getPostsByCategory,
// } from "@/lib/actions/post.actions";
import { SearchParamProps } from "@/types";

export default async function Home({ searchParams }: SearchParamProps) {
  // const page = Number(searchParams?.page) || 1;
  // const searchText = (searchParams?.query as string) || "";
  // const category = (searchParams?.category as string) || "";

  // let postsData;
  // let totalPages;

  // if (searchText) {
  //   const postsByQuery = await getPostsByQuery({
  //     query: searchText,
  //     limit: 6,
  //     page,
  //   });
  //   postsData = postsByQuery?.data;
  //   totalPages = postsByQuery?.totalPages;
  // } else if (category) {
  //   const postsByCategory = await getPostsByCategory({
  //     category,
  //     limit: 6,
  //     page,
  //   });
  //   postsData = postsByCategory?.data;
  //   totalPages = postsByCategory?.totalPages;
  // } else {
  //   const posts = await getPostsByQuery({
  //     query: searchText,
  //     limit: 6,
  //     page,
  //   });
  //   postsData = posts?.data;
  //   totalPages = posts?.totalPages;
  // }

  // const posts = await getAllPosts({
  //   query: searchText,
  //   limit: 6,
  //   page,
  //   category,
  // });

  return (
    <div className="m-auto flex max-w-[1200px] flex-wrap  justify-center gap-5 p-5">
      <div className="flex w-full flex-col items-center justify-center gap-5  ">
        <Search />
        <div className="w-full md:hidden">
          <CategoryFilter />
        </div>
      </div>
      {/* <ContainerCard
        data={postsData}
        limit={9}
        page={page}
        totalPages={totalPages}
      /> */}
    </div>
  );
}

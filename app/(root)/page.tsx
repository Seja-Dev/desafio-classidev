import CategoryFilter from "@/components/shared/CategoryFilter";
import ContainerCard from "@/components/shared/ContainerCard";
import Search from "@/components/shared/Search";

import { getAllPosts } from "@/lib/actions/post.actions";
import { SearchParamProps } from "@/types";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const posts = await getAllPosts({
    query: searchText,
    limit: 6,
    page,
    category,
  });
  

  return (
    <div className="m-auto flex max-w-[1200px] flex-wrap  justify-center gap-5 p-5">
      <div className="flex w-full items-center justify-center gap-5  ">
        <Search>
          <CategoryFilter />
        </Search>
      </div>
      <ContainerCard
        data={posts?.data}
        limit={9}
        page={page}
        totalPages={posts?.totalPages}
      />
    </div>
  );
}

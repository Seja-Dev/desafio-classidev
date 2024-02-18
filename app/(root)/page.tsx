import ContainerCard from "@/components/shared/ContainerCard";
import { getAllPosts } from "@/lib/actions/post.actions";

export default async function Home() {
  const posts = await getAllPosts({
    query: "",
    category: "",
    page: 1,
    limit: 9,
  });

  return (
    <div className="m-auto flex max-w-[1200px] flex-wrap justify-center gap-5 p-5">
      <ContainerCard data={posts?.data} />
    </div>
  );
}

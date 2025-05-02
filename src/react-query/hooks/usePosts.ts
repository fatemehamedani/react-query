import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: async ({ pageParam = 1 }) => {
      const page = pageParam as number;
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _start: (page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        }
      );
      return res.data;
    },
    initialPageParam: 1,
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });

export default usePosts;

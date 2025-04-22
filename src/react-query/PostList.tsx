import usePosts from "./hooks/usePosts";

const PostList = () => {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
export default PostList;

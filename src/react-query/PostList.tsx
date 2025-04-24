import usePosts from "./hooks/usePosts";

const PostList = () => {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="user"
          className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
        ></label>
        <select
          id="user"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">choose user</option>
          <option value="1">user1</option>
          <option value="2">user2</option>
          <option value="3">user3</option>
        </select>
      </form>

      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
export default PostList;

import PostItem from "./PostItem";
export default function PostList({ remove, posts }: any) {
  if (!posts.length) {
    return <h1 style={{ alignItems: "center" }}>Посты не найдены</h1>;
  }

  return (
    <>
      {posts &&
        posts.map((post: any, index: any) => (
          <PostItem
            remove={remove}
            number={index + 1}
            posts={post}
            key={post.id}
          />
        ))}
    </>
  );
}

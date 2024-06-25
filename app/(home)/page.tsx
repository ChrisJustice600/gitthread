import getSession from "@/lib/getSession";
import { Post } from "@/src/features/post/Post";
import { getLatestPosts } from "@/src/query/post.query";

export default async function page() {
  const session = await getSession();

  const posts = await getLatestPosts();

  return (
    <div className="divide-y divide-muted">
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

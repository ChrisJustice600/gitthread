import getSession from "@/lib/getSession";
import { Post } from "@/src/features/post/Post";
import { getPostView } from "@/src/query/post.query";
import clsx from "clsx";
import { notFound } from "next/navigation";

export default async function PostView({
  params,
}: {
  params: { postId: string };
}) {
  const session = await getSession();

  const post = await getPostView(params.postId, session?.user?.id);

  if (!post) {
    return notFound();
  }
  return (
    <div className="divide-y divide-accent">
      {post.parent && <Post post={post.parent} key={post.parent.id} />}
      <div className={clsx({ "ml-10": post.parent })}>
        <Post post={post} key={post.id} />
        <div className="ml-10 divide-y divide-accent">
          {post.replies.map((reply) => (
            <Post post={reply} key={reply.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

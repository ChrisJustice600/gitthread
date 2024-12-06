import { WritePostForm } from "@/app/write/WritePostForm";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import { Post } from "@/src/features/post/Post";
import { getPost } from "@/src/query/post.query";
import { signIn } from "next-auth/react";
import { notFound } from "next/navigation";
import { createPostReply } from "./write-reply.action";

export default async function PostReply({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const session = await getSession();

  if (!session?.user?.id) {
    await signIn();
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const post = await getPost(params.postId, session.user.id);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <Post post={post} key={post.id} />
      <WritePostForm
        user={user}
        onSubmit={async (values) => {
          "use server";
          return createPostReply(post.id, values);
        }}
      />
    </div>
  );
}

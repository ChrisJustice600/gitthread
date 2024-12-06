import { createPostReply } from "@/app/posts/[postId]/reply/write-reply.action";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import { signIn } from "next-auth/react";
import { ReplyModal } from "./ReplyModal";

export default async function Modal({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const session = await getSession();

  if (!session?.user?.id) {
    await signIn();
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return (
    <ReplyModal
      user={user}
      createPostReply={async (values) => {
        "use server";
        const reply = await createPostReply(params.postId, values);
        return reply;
      }}
    />
  );
}

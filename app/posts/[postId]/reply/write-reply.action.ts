"use server";

import { WritePostFormType } from "@/app/write/WritePostForm";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPostReply = async (
  parentId: string,
  values: WritePostFormType
) => {
  const session = await getSession();

  if (!session?.user?.id) {
    throw new Error("You must be logged in to do this.");
  }

  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: session.user.id,
      parentId: parentId,
    },
  });

  // fake timer because sqlite is too fast
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath(`/posts/${parentId}`);

  try {
    redirect(`/posts/${parentId}`);
  } catch (error) {
    return `/posts/${parentId}`;
  }
};

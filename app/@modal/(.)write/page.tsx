import { createPost } from "@/app/write/write.action";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import { signIn } from "next-auth/react";
import { WriteModal } from "./WriteModal";

export default async function Modal() {
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

  return <WriteModal user={user} createPost={createPost} />;
}

"use client";

import { WritePostForm, WritePostFormType } from "@/app/write/WritePostForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ReplyModal = ({
  user,
  createPostReply,
}: {
  user: User;
  createPostReply: (values: WritePostFormType) => Promise<string | void>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Current pathname:", pathname);
    if (pathname?.includes("reply")) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(false);
        router.back();
      }}
    >
      <DialogContent>
        <WritePostForm user={user} onSubmit={createPostReply} />
      </DialogContent>
    </Dialog>
  );
};

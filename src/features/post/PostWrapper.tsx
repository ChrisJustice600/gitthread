/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostHome } from "@/src/query/post.query";
import clsx from "clsx";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { formatDate } from "../../../lib/formatDate";

type PostWrapperProps = PropsWithChildren<{
  user: PostHome["user"];
  className?: string;
  postId?: String;
  createdAt?: Date;
}>;

export const PostWrapper = ({
  user,
  postId,
  createdAt,
  className,
  children,
}: PostWrapperProps) => {
  const postHeader = (
    <div className="flex flex-row items-center gap-2">
      <p className="text-sm text-card-foreground mr-auto">{user.username}</p>
      {createdAt && (
        <p className="text-sm text-muted-foreground">
          {formatDate(new Date(createdAt))}
        </p>
      )}
      <button>
        <MoreHorizontal size={20} />
      </button>
    </div>
  );

  return (
    <div className={clsx("flex w-full flex-row items-start p-4", className)}>
      <Avatar>
        {user.image ? <AvatarImage src={user.image} alt="user" /> : null}
        <AvatarFallback>
          {user.username.slice(0, 1).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 flex w-full flex-col gap-2">
        {postId ? (
          <Link href={`/users/${user.id}`}>{postHeader}</Link>
        ) : (
          postHeader
        )}
        {children}
      </div>
    </div>
  );
};

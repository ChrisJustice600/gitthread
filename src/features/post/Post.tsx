import { Button, buttonVariants } from "@/components/ui/button";
import { PostHome } from "@/src/query/post.query";
import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { PostLayout } from "./PostLayout";
type PostProps = {
  post: PostHome;
};

export const Post = ({ post }: PostProps) => {
  // console.log(post.createdAt);

  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
        {post.content}
      </Link>
      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <Heart size={20} />
        </Button>
        <Button size="icon" variant="ghost">
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href={`/posts/${post.id}/reply`}
          >
            <MessageCircle size={20} />
          </Link>
        </Button>
      </div>

      <div>
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}
        >
          {post._count.likes} likes
        </Link>
        {"◽"}
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};

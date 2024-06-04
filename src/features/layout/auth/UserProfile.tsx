import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import getSession from "@/lib/getSession";
import { User2 } from "lucide-react";
import Link from "next/link";
import { DropdownMenuItemLout } from "./LogoutButton";

export const UserProfile = async () => {
  const session = await getSession();
  type User = {
    username: string;
  };
  const user = session?.user as User;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          {user?.username ?? ""}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User2 />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItemLout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
